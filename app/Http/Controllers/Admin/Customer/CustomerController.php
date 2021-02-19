<?php

namespace App\Http\Controllers\Admin\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Hash;
use App\Mail\CustomerRegisterByAdminMail;
// use App\Mail\CustomerNotificationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB; //for database transection
use App\Models\Customer;
use App\Models\Customer\CustomerAddress;


use Carbon\Carbon;
use App\Jobs\CustomerNotificationMailJob;


class CustomerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 100;
       }

        $data = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')->paginate($perPage);

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required','string','max:100'], 
            'email' => ['required','email','max:255','unique:customers,email'],
            //'phone' => 'numeric|regex:/^01[1|3-9]\d{8}$/|unique:customers,phone', //this formate will not work
            'phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:customers,phone'], //right way to use preg_match
            'status_id' => ['required','numeric'], 
            //'customer_group' => ['required'],
            'customer_group_id' => ['required'],
            'customer_membership_id' => ['required'],
            'password' => ['required','min:8','max:50'],  //regex:/[@$!%*#?&]/  //confirmed
            'password_confirmation' => ['sometimes','same:password'],
        ],
        [
            'customer_group_id.required' => 'Select Group',
            'customer_membership_id.required' => 'Select Membership',
        ]);


        try{
            DB::beginTransaction();

            $customer = Customer::create([
                'customer_code' => customer_code_generate(),
                'coa_code' => 103, //Asset - Accounts Receivable 103
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
                'status_id' => $request->status_id,
                'customer_group_id' => $request->customer_group_id,
                'customer_membership_id' => $request->customer_membership_id,
                //'customer_group' => $request->customer_group,
                'enable_notify' => $request->enable_notify == NULL ? 0 : $request->enable_notify,
                'created_by' => \Auth::user()->id, 
            ]);

            //insert address
            foreach ($request->customer_address as $key => $object) {
                $customerAddress = CustomerAddress::create([
                    'customer_id' => $customer->id, //last inserted id
                    'customer_name' => $request->customer_address[$key]['customer_name'],
                    'company' => $request->customer_address[$key]['company'],
                    'address_1' => $request->customer_address[$key]['address_1'],
                    'address_2' => $request->customer_address[$key]['address_2'],
                    //'custome_fields' => $request->customer_address[$key]['custome_fields'],
                    'country_id' => $request->customer_address[$key]['country_id'],
                    'division_id' => $request->customer_address[$key]['division_id'],
                    'district_id' => $request->customer_address[$key]['district_id'],
                    'area_zone_id' => $request->customer_address[$key]['area_zone_id'],
                    'city' => $request->customer_address[$key]['city'], 
                    'zip' => $request->customer_address[$key]['zip'], 
                    'default_address' => $request->customer_address[$key]['default_address'] == NULL ? 0 : $request->customer_address[$key]['default_address'],
                ]);
            }

            DB::commit();  

            if($customer != null){           
                 // send all mail in the queue job.
                $data = ["userInfo" => $request->all(), "tag" => "registerByAdmin"]; //pass with tag
                $job = (new CustomerNotificationMailJob($data))
                            ->delay( Carbon::now()->addSeconds(5) ); 
                dispatch($job);

                // $data = ["userInfo" => $request->all(), "tag" => "registerByAdmin"];
                // Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));  

                return response()->json(['success'=>'Customer Created.']); 
            }

        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        } //end try  
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required','string','max:100'],  
            'email' => ['required','email','max:255','unique:customers,email,'.$id],
            //'phone' => 'numeric|regex:/^01[1|3-9]\d{8}$/|unique:customers,phone,'.$id, //this formate will not work
            'phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:customers,phone,'.$id ], //right way to use preg_match
            'status_id' => ['required','numeric'], 
            //'customer_group' => ['required'],
            'customer_group_id' => ['required'],
            'customer_membership_id' => ['required'],
            'password' => ['nullable','sometimes','min:8','max:50'],  //regex:/[@$!%*#?&]/  //confirmed
            'password_confirmation' => ['sometimes','same:password'],
        ],
        [
            'customer_group_id.required' => 'Select Group',
            'customer_membership_id.required' => 'Select Membership',
        ]);

        //existing password query
        $existing_user_password = customer::select('password')->where('id', $request->id)->first(); 
        $existing_password = $existing_user_password->password;


        try{
            DB::beginTransaction();

            $customer = Customer::find($request->id);
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->phone = $request->phone;
            $customer->password = $request->password == null ? $existing_password : Hash::make($request->password);
            $customer->status_id = $request->status_id;
            $customer->customer_group_id = $request->customer_group_id;
            $customer->customer_membership_id = $request->customer_membership_id;
            //$customer->customer_group = $request->customer_group;
            $customer->enable_notify = $request->enable_notify == NULL ? 0 : $request->enable_notify;
            $customer->updated_by = \Auth::user()->id; 
            $customer->save();



            CustomerAddress::where('customer_id', '=', $request->id)->delete(); //delete previous address

            //insert address
            foreach ($request->customer_address as $key => $object) {
                    //Product::find($request->pur_order_details[$key]['product_id'])->update($value);
                $customerAddress = CustomerAddress::create([
                    'customer_id' => $request->id, //last inserted id
                    'customer_name' => $request->customer_address[$key]['customer_name'],
                    'company' => $request->customer_address[$key]['company'],
                    'address_1' => $request->customer_address[$key]['address_1'],
                    'address_2' => $request->customer_address[$key]['address_2'],
                    //'custome_fields' => $request->customer_address[$key]['custome_fields'],
                    'country_id' => $request->customer_address[$key]['country_id'],
                    'division_id' => $request->customer_address[$key]['division_id'],
                    'district_id' => $request->customer_address[$key]['district_id'],
                    'area_zone_id' => $request->customer_address[$key]['area_zone_id'],
                    'city' => $request->customer_address[$key]['city'], 
                    'zip' => $request->customer_address[$key]['zip'], 
                    'default_address' => $request->customer_address[$key]['default_address'] == NULL ? 0 : $request->customer_address[$key]['default_address'],
                ]);
            }


            DB::commit(); 

            if($customer != null){
               //Mail::to($customer->email)->send(new CustomerRegisterVerificationMail($customer)); //for verification email send to customer
                return response()->json(['success'=>'Customer update.']); 
            }

        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        } //end try  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Customer::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    public function ChangeNotify(Request $request){
        //return $notifyValue = ($request->notifyValue == "true") ? 1 : 0 ;
      
        $data =array();
        $data['enable_notify'] = ($request->notifyValue == "true") ? 1 : 0 ;  
        $data['updated_by']  = \Auth::user()->id;      

        Customer::whereId($request->id)->update($data);         
        return response()->json(['success'=>'Notification Updated.']); 

    }
   

    public function search(Request $request){

        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 100;
        }

        $searchKey = $request->q;
        $searchOption = $request->so; 

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')
                ->where(function($query) use ($searchKey){
                $query->where('customers.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.phone','LIKE','%'.$searchKey.'%')
                        // ->orWhere('customers.customer_group','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('customer_groups.group_name','LIKE','%'.$searchKey.'%');
            })
            ->select('customers.*','user_status.us_name','customer_groups.group_name')
            ->join('user_status', 'customers.status_id','=', 'user_status.id')
            ->join('customer_groups', 'customers.customer_group_id','=', 'customer_groups.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')
            ->where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'name' OR $searchOption == 'email' OR $searchOption == 'phone'  ){
                    $query->where( 'customers.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }elseif($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }elseif($searchOption == 'group_name'){
                    $query->where( 'customer_groups.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }
                
            })
            ->select('customers.*','user_status.us_name','customer_groups.group_name')
            ->join('user_status', 'customers.status_id','=', 'user_status.id')
            ->join('customer_groups', 'customers.customer_group_id','=', 'customer_groups.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = Customer::latest()->paginate(10);
            $searchResult = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')
            ->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search


     public function verifiedByAdmin(Request $request){
        //return $notifyValue = ($request->notifyValue == "true") ? 1 : 0 ;

        $data = Customer::find($request->id);
        $data->status_id = 1; 
        $data->email_verification_code = null; 
        $data->verified_by = \Auth::user()->id; 
        $data->updated_by = \Auth::user()->id; 
        $data->save();

        if($data){          

             // send all mail in the queue job.
            $data = ["userInfo" => $data, "tag" => "varifyByAdmin"]; //pass with tag
            $job = (new CustomerNotificationMailJob($data))
                        ->delay( Carbon::now()->addSeconds(5) ); 
            dispatch($job);
            
            // $data = ["userInfo" => $data, "tag" => "varify"];
            // Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Customer verified now']);
        }
    }


    public function inactive_customer($id){
        $data = Customer::find($id);
        $data->status_id = 2; 
        $data->save();

        if($data){      

            // send all mail in the queue job.
            $data = ["userInfo" => $data, "tag" => "inactiveByAdmin"]; //pass with tag
            $job = (new CustomerNotificationMailJob($data))
                        ->delay( Carbon::now()->addSeconds(5) ); 
            dispatch($job);

            // $data = ["userInfo" => $data, "tag" => "inactive"];
            // Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Inactive Customer']);
        }         
    }

    public function active_customer($id){
        $data = Customer::find($id);
        $data->status_id = 1; 
        $data->save();

        if($data){  

            // send all mail in the queue job.
            $data = ["userInfo" => $data, "tag" => "activeByAdmin"]; //pass with tag
            $job = (new CustomerNotificationMailJob($data))
                        ->delay( Carbon::now()->addSeconds(5) ); 
            dispatch($job);  

            // $data = ["userInfo" => $data, "tag" => "active"];
            // Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Active Customer']);
        }
    }


    


}

<?php

namespace App\Http\Controllers\Admin\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Hash;
use App\Mail\CustomerRegisterByAdminMail;
use App\Mail\CustomerNotificationMail;
use Illuminate\Support\Facades\Mail;
use App\Customer;

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
            $perPage = 10;
       }

        $data = Customer::paginate($perPage);

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
            'customer_group' => ['required'],
            'password' => ['required','min:8','max:50'],  //regex:/[@$!%*#?&]/  //confirmed
            'password_confirmation' => ['sometimes','same:password'],
        ]);

        $customer = Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'status_id' => $request->status_id,
            'customer_group' => $request->customer_group,
            'enable_notify' => $request->enable_notify == NULL ? 0 : $request->enable_notify,
            'created_by' => \Auth::user()->id, 
        ]);

        if($customer != null){           
            $data = ["userInfo" => $request->all(), "tag" => "register"];
            Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));
            
            return response()->json(['success'=>'Customer Created.']); 
        }   
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
            'customer_group' => ['required'],
            'password' => ['nullable','sometimes','min:8','max:50'],  //regex:/[@$!%*#?&]/  //confirmed
            'password_confirmation' => ['sometimes','same:password'],
        ]);

        //existing password query
        $existing_user_password = customer::select('password')->where('id', $request->id)->first(); 
        $existing_password = $existing_user_password->password;


        $customer = Customer::find($request->id);
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->phone = $request->phone;
        $customer->password = $request->password == null ? $existing_password : Hash::make($request->password);
        $customer->status_id = $request->status_id;
        $customer->customer_group = $request->customer_group;
        $customer->enable_notify = $request->enable_notify == NULL ? 0 : $request->enable_notify;
        $customer->updated_by = \Auth::user()->id; 
        $customer->save();

        if($customer != null){
           //Mail::to($customer->email)->send(new CustomerRegisterVerificationMail($customer)); //for verification email send to customer
            return response()->json(['success'=>'Customer update.']); 
        }
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
            $perPage = 50;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Customer::where(function($query) use ($searchKey){
                $query->where('customers.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.phone','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.customer_group','LIKE','%'.$searchKey.'%')
                        ->orWhere('customers.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%');
            })
            ->select('customers.*','user_status.us_name')
            ->join('user_status', 'customers.status_id','=', 'user_status.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Customer::where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }else{
                    $query->where( 'customers.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }
                
            })
            ->select('customers.*','user_status.us_name')
            ->join('user_status', 'customers.status_id','=', 'user_status.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = Customer::latest()->paginate(10);
            $searchResult = Customer::paginate($perPage);
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
            $data = ["userInfo" => $data, "tag" => "varify"];
            Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Customer verified now']);
        }
    }


    public function inactive_customer($id){
        $data = Customer::find($id);
        $data->status_id = 2; 
        $data->save();

        if($data){           
            $data = ["userInfo" => $data, "tag" => "inactive"];
            Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Inactive Customer']);
        }
         
    }

    public function active_customer($id){
        $data = Customer::find($id);
        $data->status_id = 1; 
        $data->save();

        if($data){           
            $data = ["userInfo" => $data, "tag" => "active"];
            Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));

            return response()->json(['success'=> 'Active Customer']);
        }
    }


}

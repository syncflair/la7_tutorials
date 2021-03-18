<?php

namespace App\Http\Controllers\API\V1\Customer\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Customer\CustomerAddress;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AdminCustomerAddressController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api-customer');
        // $this->middleware('auth:api-customer')->except('index','show');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'address_1' => ['required'],
            'division_id' => ['required'],
            'district_id' => ['required'],
            'area_zone_id' => ['required'],
        ]);

        //return response()->json($request->all());        
        if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->customer_id ){

                // $this->validate($request, [
                //     'customer_id' => 'required',
                // ]);

                $data =array();
                $data['customer_id']=$request->customer_id;
                $data['customer_name']=$request->customer_name;
                $data['company']=$request->company;       
                $data['address_1']=$request->address_1;       
                $data['address_2']=$request->address_2;       
                $data['country_id']=$request->country_id;       
                $data['division_id']=$request->division_id;       
                $data['district_id']=$request->district_id;       
                $data['area_zone_id']=$request->area_zone_id;       
                $data['city']=$request->city;       
                $data['zip']=$request->zip;       
                // $data['default_address']=$request->default_address == NULL ? 0 : $request->default_address; 

                CustomerAddress::create($data);        
                return response()->json(['success'=>'Address added.']); 

            }else{
                return response()->json(['error'=>'Something worng!.']); 
            }//End check Auth ID With Request ID

        }//end Auth::guard Check
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
            'address_1' => ['required'],
            'division_id' => ['required'],
            'district_id' => ['required'],
            'area_zone_id' => ['required'],
        ],
        [
            'address_1.required' => 'The Address field is required.',
        ]
        );

        if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->customer_id ){

                $data =array();
                //$data['customer_id']=$request->customer_id;
                $data['customer_name']=$request->customer_name;
                $data['company']=$request->company;       
                $data['address_1']=$request->address_1;       
                $data['address_2']=$request->address_2;       
                $data['country_id']=$request->country_id;       
                $data['division_id']=$request->division_id;       
                $data['district_id']=$request->district_id;       
                $data['area_zone_id']=$request->area_zone_id;       
                $data['city']=$request->city;       
                $data['zip']=$request->zip; 
               

                CustomerAddress::find($id)
                            // ->where('customer_id' , $request->customer_id)
                            ->update($data);  
                return response()->json(['success'=>'Address Update.']); 

            }else{
                return response()->json(['error'=>'Something worng!.']); 
            }//End check Auth ID With Request ID

        }//end Auth::guard Check
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //return response()->json($id);

        if(Auth::guard('customer')->check()){
           
            $data = CustomerAddress::findOrFail($id)->delete();        
            if($data){
                return response()->json(['success'=> 'Address is successfully deleted']);
            }else{
                return response()->json(['errors'=> 'Something is wrong..']);
            }//*/           

        }//end Auth::guard Check
    }

    public function getAuthCustomerAddress(Request $request){
        // $data = Auth::guard('api-customer')->user(); //working
        if(Auth::guard('api-customer')->check()){
        // if(Auth::guard('customer')->check()){ //for session authentication
           
            if(Auth::guard('api-customer')->user()->id == $request->id ){
            // if(Auth::guard('customer')->user()->id == $request->id ){ //for session authentication

                $customerAddress = CustomerAddress::where('customer_id', $request->id)->get();
                return response()->json($customerAddress); 

            }else{
                return response()->json(['error'=>'Something worng!.']); 
            }//End check Auth ID With Request ID

        }//end Auth::guard Check
        
    }
}

<?php

namespace App\Http\Controllers\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Customer\CustomerAddress;

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
       $this->middleware('auth:customer');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('website.home'); 


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
        // $this->validate($request, [
        //     'unit_title' => 'required|min:3|max:40|unique:units,unit_title',
        //     'unit_code' => 'required|min:1|max:8|unique:units,unit_code',
        // ]);

        // $data =array();
        // $data['unit_title']=$request->unit_title;
        // $data['unit_code']=$request->unit_code;
        // $data['unit_desc']=$request->unit_desc;

        // $data['updated_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        // Unit::create($data);        
        // return response()->json(['success'=>'Unit Created.']); 

        return response()->json(['success'=>'Unit added.']);
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
        // $this->validate($request, [
        //     'unit_title' => 'required|min:3|max:40|unique:units,unit_title,'.$id,
        //     'unit_code' => 'required|min:1|max:8|unique:units,unit_code,'.$id,
        // ]);

        // $data =array();
        // $data['unit_title']=$request->unit_title;
        // $data['unit_code']=$request->unit_code;
        // $data['unit_desc']=$request->unit_desc;

        // $data['updated_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        // Unit::whereId($id)->update($data);         
        // return response()->json(['success'=>'Unit Updated.']);

        return response()->json(['success'=>'Unit Updated.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = CustomerAddress::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Address is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    public function getAuthCustomerAddress(Request $request){
        if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

                $customerAddress = CustomerAddress::where('customer_id', $request->id)->get();
                return response()->json($customerAddress); 

            }else{
                return response()->json(['error'=>'Something worng!.']); 
            }//End check Auth ID With Request ID

        }//end Auth::guard Check

        
    }




}

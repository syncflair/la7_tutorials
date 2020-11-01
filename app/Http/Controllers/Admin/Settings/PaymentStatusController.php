<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\PaymentStatus;

class PaymentStatusController extends Controller
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
    public function index()
    {
        $data = PaymentStatus::get();

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
            'payment_status_name' => 'required|min:3|max:20|unique:payment_status,payment_status_name',
        ]);

        $data['payment_status_name']=$request->payment_status_name;
        $data['payment_status_desc']=$request->payment_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['created_by']= \Auth::user()->id;

        PaymentStatus::create($data);         
        return response()->json(['success'=>'Payment Status added.']); 
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
            'payment_status_name' => 'required|min:3|max:20|unique:payment_status,payment_status_name,'.$id,
        ]);

        $data =array();
        $data['payment_status_name']=$request->payment_status_name;
        $data['payment_status_desc']=$request->payment_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['updated_by']= \Auth::user()->id;    

        // PaymentStatus::whereId($id)->update($data);         
        PaymentStatus::where('id', $id)->update($data);         
        return response()->json(['success'=>'Payment Status Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = PaymentStatus::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    //Get PaymentStatus
    public function getPaymentStatus(Request $request){
        //this is for commonStoreForAll Store
        $data = PaymentStatus::where('is_enabled', 1)->get();
        return response()->json($data);
    }

    
}

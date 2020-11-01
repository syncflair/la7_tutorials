<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\OrderStatus;

class OrderStatusController extends Controller
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
        $data = OrderStatus::get();

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
            'order_status_name' => 'required|min:3|max:20|unique:order_status,order_status_name',
        ]);

        $data['order_status_name']=$request->order_status_name;
        $data['order_status_desc']=$request->order_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['created_by']= \Auth::user()->id;

        OrderStatus::create($data);         
        return response()->json(['success'=>'Order Status added.']); 
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
            'order_status_name' => 'required|min:3|max:20|unique:order_status,order_status_name,'.$id,
        ]);

        $data =array();
        $data['order_status_name']=$request->order_status_name;
        $data['order_status_desc']=$request->order_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['updated_by']= \Auth::user()->id;    

        // OrderStatus::whereId($id)->update($data);         
        OrderStatus::where('id', $id)->update($data);         
        return response()->json(['success'=>'Order Status Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = OrderStatus::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    //Get OrderStatus
    public function getOrderStatus(Request $request){
        //this is for commonStoreForAll Store
        $data = OrderStatus::where('is_enabled', 1)->get();
        return response()->json($data);
    }

    
}

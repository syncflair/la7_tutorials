<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\ReturnStatus;

class ReturnStatusController extends Controller
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
        $data = ReturnStatus::get();

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
            'return_status_name' => 'required|min:3|max:20|unique:return_status,return_status_name',
        ]);

        $data['return_status_name']=$request->return_status_name;
        $data['return_status_desc']=$request->return_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['created_by']= \Auth::user()->id;

        ReturnStatus::create($data);         
        return response()->json(['success'=>'Return Status added.']); 
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
            'return_status_name' => 'required|min:3|max:20|unique:return_status,return_status_name,'.$id,
        ]);

        $data =array();
        $data['return_status_name']=$request->return_status_name;
        $data['return_status_desc']=$request->return_status_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['updated_by']= \Auth::user()->id;    

        // ReturnStatus::whereId($id)->update($data);         
        ReturnStatus::where('id', $id)->update($data);         
        return response()->json(['success'=>'Return Status Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = ReturnStatus::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    //Get ReturnStatus
    public function getReturnStatus(Request $request){
        //this is for commonStoreForAll Store
        $data = ReturnStatus::where('is_enabled', 1)->get();
        return response()->json($data);
    }
    
}

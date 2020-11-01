<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\ReturnAction;

class ReturnActionController extends Controller
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
        $data = ReturnAction::get();

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
            'return_action_name' => 'required|min:3|max:20|unique:return_action,return_action_name',
        ]);

        $data['return_action_name']=$request->return_action_name;
        $data['return_action_desc']=$request->return_action_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['created_by']= \Auth::user()->id;

        ReturnAction::create($data);         
        return response()->json(['success'=>'Return Action Status added.']); 
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
            'return_action_name' => 'required|min:3|max:20|unique:return_action,return_action_name,'.$id,
        ]);

        $data =array();
        $data['return_action_name']=$request->return_action_name;
        $data['return_action_desc']=$request->return_action_desc;

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        $data['updated_by']= \Auth::user()->id;    

        // ReturnAction::whereId($id)->update($data);         
        ReturnAction::where('id', $id)->update($data);         
        return response()->json(['success'=>'Return Action Status Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = ReturnAction::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //Get ReturnAction
    public function getReturnAction(Request $request){
        //this is for commonStoreForAll Store
        $data = ReturnAction::where('is_enabled', 1)->get();
        return response()->json($data);
    }
}

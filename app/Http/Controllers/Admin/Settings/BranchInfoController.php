<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\BranchInfo;

class BranchInfoController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
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
        $data = BranchInfo::get();
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
            'branch_name' => 'required|min:3|max:100|unique:branch_info,branch_name',
        ]);

        $data =array();
        $data['org_id']= 1; //1 is organization id
        $data['branch_name']=$request->branch_name;
        $data['branch_code']=$request->branch_code;
        $data['branch_desc']=$request->branch_desc;
        $data['branch_address']=$request->branch_address;
        $data['branch_email']=$request->branch_email;
        $data['branch_phone']=$request->branch_phone;
        $data['zone']=$request->zone;
        $data['city']=$request->city;
        $data['state']=$request->state;
        $data['country']=$request->country;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        BranchInfo::create($data);        
        return response()->json(['success'=>'Branch Created successfully.']); 
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
            'branch_name' => 'required|min:3|max:100|unique:branch_info,branch_name,'.$id,
        ]);

        $data =array();
        $data['org_id']= 1; //1 is organization id
        $data['branch_name']=$request->branch_name;
        $data['branch_code']=$request->branch_code;
        $data['branch_desc']=$request->branch_desc;
        $data['branch_address']=$request->branch_address;
        $data['branch_email']=$request->branch_email;
        $data['branch_phone']=$request->branch_phone;
        $data['zone']=$request->zone;
        $data['city']=$request->city;
        $data['state']=$request->state;
        $data['country']=$request->country;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        BranchInfo::whereId($id)->update($data);         
        return response()->json(['success'=>'Branch Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $data = BranchInfo::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

<?php

namespace App\Http\Controllers\Admin\HRM;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\HRM\JObTitle;

class JobTitleController extends Controller
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
        $data = JObTitle::get();
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
            'job_title_name' => 'required|min:3|max:40|unique:job_titles,job_title_name',
        ]);

        $data =array();
        $data['job_title_name']=$request->job_title_name;
        $data['job_title_desc']=$request->job_title_desc;

        $data['created_by']= \Auth::user()->id;    

        if($request->is_enabled == false){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }      
        
        JobTitle::create($data);        
        return response()->json(['success'=>'Job Title Created successfully.']);
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
            'job_title_name' => 'required|min:3|max:40|unique:job_titles,job_title_name,'.$id,
        ]);

        $data =array();
        $data['job_title_name']=$request->job_title_name;
        $data['job_title_desc']=$request->job_title_desc;

        $data['updated_by']= \Auth::user()->id;    

        if($request->is_enabled == false){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }     

        JobTitle::whereId($id)->update($data);         
        return response()->json(['success'=>'Job Title Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = JobTitle::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }



    function GetJobTitles(){
        //this is for commonStoreForAll Store
        $data = JobTitle::get();
        return response()->json($data);
    }
}

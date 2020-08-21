<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Unit;

class UnitController extends Controller
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
        $data = Unit::get();
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
            'unit_title' => 'required|min:3|max:40|unique:units,unit_title',
            'unit_code' => 'required|min:1|max:8|unique:units,unit_code',
        ]);

        $data =array();
        $data['unit_title']=$request->unit_title;
        $data['unit_code']=$request->unit_code;
        $data['unit_desc']=$request->unit_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        Unit::create($data);        
        return response()->json(['success'=>'Unit Created.']); 
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
            'unit_title' => 'required|min:3|max:40|unique:units,unit_title,'.$id,
            'unit_code' => 'required|min:1|max:8|unique:units,unit_code,'.$id,
        ]);

        $data =array();
        $data['unit_title']=$request->unit_title;
        $data['unit_code']=$request->unit_code;
        $data['unit_desc']=$request->unit_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        Unit::whereId($id)->update($data);         
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
        $data = Unit::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //Get all Unit
    public function getAllUnits(Request $request){
        //this is for commonStoreForAll Store
        $data = Unit::where('is_enabled', 1)->get();
        return response()->json($data);
    }
}

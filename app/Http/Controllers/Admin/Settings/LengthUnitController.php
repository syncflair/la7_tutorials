<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\LengthUnit;


class LengthUnitController extends Controller
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
        $data = LengthUnit::get();
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
            'length_title' => 'required|min:3|max:40|unique:length_units,length_title',
            'length_unit' => 'required|min:1|max:8|unique:length_units,length_unit',
        ]);

        $data =array();
        $data['length_title']=$request->length_title;
        $data['length_unit']=$request->length_unit;
        $data['length_value']=$request->length_value;
        $data['length_desc']=$request->length_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 



        LengthUnit::create($data);        
        return response()->json(['success'=>'Length Unit Created successfully.']); 
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
            'length_title' => 'required|min:3|max:40|unique:length_units,length_title,'.$id,
            'length_unit' => 'required|min:1|max:8|unique:length_units,length_unit,'.$id,
        ]);

        $data =array();
        $data['length_title']=$request->length_title;
        $data['length_unit']=$request->length_unit;
        $data['length_value']=$request->length_value;
        $data['length_desc']=$request->length_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled; 

        LengthUnit::whereId($id)->update($data);         
        return response()->json(['success'=>'Length Unit Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = LengthUnit::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

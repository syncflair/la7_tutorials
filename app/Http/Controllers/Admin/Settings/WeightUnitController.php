<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\WeightUnit;

class WeightUnitController extends Controller
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
        $data = WeightUnit::get();
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
            'weight_title' => 'required|min:3|max:40|unique:weight_units,weight_title',
            'weight_unit' => 'required|min:1|max:8|unique:weight_units,weight_unit',
        ]);

        $data =array();
        $data['weight_title']=$request->weight_title;
        $data['weight_unit']=$request->weight_unit;
        $data['weight_value']=$request->weight_value;
        $data['weight_desc']=$request->weight_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        WeightUnit::create($data);        
        return response()->json(['success'=>'Weight Unit Created.']); 
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
            'weight_title' => 'required|min:3|max:40|unique:weight_units,weight_title,'.$id,
            'weight_unit' => 'required|min:1|max:8|unique:weight_units,weight_unit,'.$id,
        ]);

        $data =array();
        $data['weight_title']=$request->weight_title;
        $data['weight_unit']=$request->weight_unit;
        $data['weight_value']=$request->weight_value;
        $data['weight_desc']=$request->weight_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        WeightUnit::whereId($id)->update($data);         
        return response()->json(['success'=>'Weight Unit Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = WeightUnit::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

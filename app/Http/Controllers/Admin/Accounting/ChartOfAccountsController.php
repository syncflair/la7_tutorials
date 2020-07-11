<?php

namespace App\Http\Controllers\Admin\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Accounting\ChartOfAccounts;

class ChartOfAccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // if(!empty($request->perPage)){
        //     $perPage = $request->perPage;
        // }else{
        //     $perPage = 20;
        // }

        //$data = ChartOfAccounts::whereNull('parent_id')->with('childCOAS')->where('is_enabled', '1')->get(); //FOR PUBLIC
        $data = ChartOfAccounts::whereNull('parent_id')->with('child_coas')->get(); //for admin
        // $data = ChartOfAccounts::paginate($perPage);

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
            'coa_name' => 'required|min:3|max:100|unique:chart_of_accounts,coa_name',
            //'coa_code' => 'max:10|unique:chart_of_accounts,coa_code',
        ]);

        $data =array();
        $data['coa_name']=$request->coa_name;
        $data['coa_code']=$request->coa_code;
        $data['coa_slug']= slug_generator($request->coa_name.'-'.$request->coa_code);//slug_generator get from helper
        $data['coa_desc']=$request->coa_desc;
        $data['parent_id']=$request->parent_id;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        ChartOfAccounts::create($data);        
        return response()->json(['success'=>'COA Created successfully.']); 
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
            'coa_name' => 'required|min:3|max:100|unique:chart_of_accounts,coa_name,'.$id,
            //'coa_code' => 'max:10|unique:chart_of_accounts,coa_code,'.$id,
        ]);

        $data =array();
        $data['coa_name']=$request->coa_name;
        $data['coa_code']=$request->coa_code;
        $data['coa_slug']= slug_generator($request->coa_name.'-'.$request->coa_code);//slug_generator get from helper        
        $data['coa_desc']=$request->coa_desc;
        $data['parent_id']=$request->parent_id;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        ChartOfAccounts::whereId($id)->update($data);         
        return response()->json(['success'=>'COA Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = ChartOfAccounts::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

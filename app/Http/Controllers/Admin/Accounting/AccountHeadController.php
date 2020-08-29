<?php

namespace App\Http\Controllers\Admin\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Accounting\AccountHead;

class AccountHeadController extends Controller
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
        // if(!empty($request->perPage)){
        //     $perPage = $request->perPage;
        // }else{
        //     $perPage = 20;
        // }

        //$data = AccountHead::whereNull('parent_id')->with('child_AccountHead')->where('is_enabled', '1')->get(); //FOR PUBLIC
        $data = AccountHead::whereNull('parent_id')->with('child_account_head')->get(); //for admin
        // $data = AccountHead::paginate($perPage);

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
            'ah_name' => 'required|min:3|max:100|unique:account_heads,ah_name',
            //'ah_code' => 'max:10|unique:account_heads,ah_code',
        ]);

        $data =array();
        $data['ah_name']=$request->ah_name;
        $data['ah_code']=$request->ah_code;
        $data['ah_slug']= slug_generator($request->ah_name.'-'.$request->ah_code);//slug_generator get from helper
        $data['ah_desc']=$request->ah_desc;
        $data['parent_id']=$request->parent_id;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        AccountHead::create($data);        
        return response()->json(['success'=>'Account Head Created.']); 
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
            'ah_name' => 'required|min:3|max:100|unique:account_heads,ah_name,'.$id,
            //'ah_code' => 'max:10|unique:account_heads,ah_code,'.$id,
        ]);

        $data =array();
        $data['ah_name']=$request->ah_name;
        $data['ah_code']=$request->ah_code;
        $data['ah_slug']= slug_generator($request->ah_name.'-'.$request->ah_code);//slug_generator get from helper        
        $data['ah_desc']=$request->ah_desc;
        $data['parent_id']=$request->parent_id;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        AccountHead::whereId($id)->update($data);         
        return response()->json(['success'=>'Account Head Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = AccountHead::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //Get all AccountDetail
    public function getChartOfAccountHeads(Request $request){
        //this is for commonStoreForAll Store
        //$data = AccountHead::whereNull('parent_id')->with('child_account_head')->get(); //for admin
        $data = AccountHead::whereNull('parent_id')->where('is_enabled', 1)
                //->whereNotNull('parent_id')
                ->with('child_account_head')
                ->get();
        return response()->json($data);
    }
}

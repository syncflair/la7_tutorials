<?php

namespace App\Http\Controllers\Admin\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Accounting\AccountDetail;

class AccountDetailController extends Controller
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
        
        $data = AccountDetail::with('belongsToAccountHead','belongsToBranch')->get(); 

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
            'account_name' => 'required|min:3|max:100',
            'coa_id' => 'required',
        ],[
            'coa_id.required' => 'Chart of Account head required',
        ]);

        $data =array();
        $data['coa_code']= coa_account_details_code_generate(); //get from helper        
        $data['account_name']=$request->account_name;
        $data['coa_id']=$request->coa_id;
        $data['branch_id']=$request->branch_id;

        $data['opening_balance']=$request->opening_balance;
        $data['open_date']=$request->open_date;
        $data['opening_balance']=$request->opening_balance;
        $data['account_desc']=$request->account_desc;

        $data['created_by']= \Auth::user()->id;         
        
        $data['is_enabled']= $request->is_enabled == NULL ? 0 : $request->is_enabled; 


        AccountDetail::create($data);        
        return response()->json(['success'=>'Account Detail Created.']);
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
            'account_name' => 'required|min:3|max:100',
            'coa_id' => 'required',
        ]);

        $data =array();
        $data['account_name']=$request->account_name;
        $data['coa_id']=$request->coa_id;
        $data['branch_id']=$request->branch_id;

        $data['opening_balance']=$request->opening_balance;
        $data['open_date']=$request->open_date;
        $data['opening_balance']=$request->opening_balance;
        $data['account_desc']=$request->account_desc;        

        $data['updated_by']= \Auth::user()->id;         
        
        $data['is_enabled']= $request->is_enabled == NULL ? 0 : $request->is_enabled; 

        AccountDetail::whereId($id)->update($data);         
        return response()->json(['success'=>'Account Detail Updated.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = AccountDetail::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //Get all AccountDetail
    public function getAllAccountDetails(Request $request){
        //this is for commonStoreForAll Store
        $data = AccountDetail::where('is_enabled', 1)->get();
        return response()->json($data);
    }
}

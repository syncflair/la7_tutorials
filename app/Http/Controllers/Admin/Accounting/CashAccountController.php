<?php

namespace App\Http\Controllers\Admin\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accounting\CashAccount;
use App\Models\Accounting\BankAccount;
use App\Models\HRM\Employee;
use App\Models\Supplier\Vendor;
use App\Customer;

class CashAccountController extends Controller
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
        $data = CashAccount::get();
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
            'bank_account_name' => 'required|min:3|max:100',
            'bank_account_number' => 'required|min:3|max:30',
            'bank_name' => 'required',
            'bank_branch' => 'required',
        ]);

        $data =array();
        $data['bank_account_code']= cash_account_code_generate(); //get from helper        
        $data['bank_account_name']=$request->bank_account_name;
        $data['bank_account_number']=$request->bank_account_number;
        $data['bank_account_desc']=$request->bank_account_desc;
        $data['bank_name']=$request->bank_name;
        $data['bank_branch']=$request->bank_branch;
        $data['account_opening_balance']=$request->account_opening_balance;
        $data['account_open_date']=$request->account_open_date;

        $data['updated_by']= \Auth::user()->id;         
        
        $data['is_enabled']= $request->is_enabled == NULL ? 0 : $request->is_enabled; 


        CashAccount::create($data);        
        return response()->json(['success'=>'Cash Account Created.']);
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
            'bank_account_name' => 'required|min:3|max:100',
            'bank_account_number' => 'required|min:3|max:30',
            'bank_name' => 'required',
            'bank_branch' => 'required',
        ]);

        $data =array();
        $data['bank_account_name']=$request->bank_account_name;
        $data['bank_account_number']=$request->bank_account_number;
        $data['bank_name']=$request->bank_name;
        $data['bank_branch']=$request->bank_branch;
        $data['account_opening_balance']=$request->account_opening_balance;
        $data['account_open_date']=$request->account_open_date;

        $data['bank_account_desc']=$request->bank_account_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        $data['is_enabled']= $request->is_enabled == NULL ? 0 : $request->is_enabled; 

        CashAccount::whereId($id)->update($data);         
        return response()->json(['success'=>'Cash Account Updated.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = CashAccount::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //Get all CashAccount
    public function getAllcash_accounts(Request $request){
        //this is for commonStoreForAll Store
        $data = CashAccount::where('is_enabled', 1)->get();
        return response()->json($data);
    }




    public function search(Request $request){
        $searchKey = $request->q;
        // $searchOption = $request->so;

        if(!empty($searchKey) ){

            $cash = CashAccount::where(function($query) use ($searchKey){
                $query->where('cash_account_name','LIKE','%'.$searchKey.'%');
            })->select('cash_account_name as name')->get()->toArray();

            $employee = Employee::where(function($query) use ($searchKey){
                $query->where('emp_name','LIKE','%'.$searchKey.'%');
            })->select('emp_name as name')->get()->toArray();

            $customer = Customer::where(function($query) use ($searchKey){
                $query->where('name','LIKE','%'.$searchKey.'%');
            })->select('name')->get()->toArray();

            $vendor = Vendor::where(function($query) use ($searchKey){
                $query->where('vendor_name','LIKE','%'.$searchKey.'%');
            })->select('vendor_name as name')->get()->toArray();

            $banks = BankAccount::where(function($query) use ($searchKey){
                $query->where('bank_account_name','LIKE','%'.$searchKey.'%');
            })->select('bank_account_name as name')->get()->toArray();

            
        }

        // $banks = BankAccount::select('bank_account_name as name')->get()->toArray();

        $mergeData = array_merge_recursive($cash, $banks, $employee, $customer, $vendor);


        return response()->json($mergeData);
    }//end search




}



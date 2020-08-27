<?php

use App\User;
use App\Supplier;
use App\Customer;
use App\Models\Accounting\BankAccount;
use App\Models\Accounting\CashAccount;

//generate bank account code for account_transection
function bank_account_code_generate(){
	$record = BankAccount::latest()->first(); // $record = 'BA-01'; 
	
	if ($record == null) {
      	$code = 'BA-01';       
    }else{
    	$parts = explode('-', $record->bank_account_code); //splite into three part 
    	$partNewNumber =  $parts[1] + 1; //increment by one

    	if(strlen($partNewNumber) == 1){
    		$code = 'BA-0'. $partNewNumber;
    	}elseif(strlen($partNewNumber) == 2){
    		$code = 'BA-'. $partNewNumber;    		
    	}else{
    		$code = 'BA-'. $partNewNumber; 
    	}		
    }
    return $code;
}


//generate cash account code for account_transection
function cash_account_code_generate(){
  $record = CashAccount::latest()->first(); // $record = 'CASH-01';   
  if ($record == null) {
        $code = 'CASH-01';       
    }else{
      $parts = explode('-', $record->cash_account_code); //splite into three part 
      $partNewNumber =  $parts[1] + 1; //increment by one

      if(strlen($partNewNumber) == 1){
        $code = 'CASH'. $partNewNumber;
      }elseif(strlen($partNewNumber) == 2){
        $code = 'CASH-'. $partNewNumber;       
      }else{
        $code = 'CASH-'. $partNewNumber; 
      }   
    }
    return $code;
}

//generate purchase order invoice 
function purchase_order_invoice_generate(){
	$record = PurchaseOrder::latest()->first();
	// $record = 'PO20-1';
	
	if ($record == null) {
      	$invoiceNumber = 'PO'.date('y').'-0001';       
    }else{
    	$parts = explode('-', $record->po_invoice); //splite into three part    	

    	$partNewNumber =  $parts[1] + 1; //increment by one

    	if(strlen($partNewNumber) == 1){
    		$invoiceNumber = 'PO'.date('y').'-000'. $partNewNumber;
    	}elseif(strlen($partNewNumber) == 2){
    		$invoiceNumber = 'PO'.date('y').'-00'. $partNewNumber;    		
    	}elseif(strlen($partNewNumber) == 3){
    		$invoiceNumber = 'PO'.date('y').'-0'. $partNewNumber;    		
    	}elseif(strlen($partNewNumber) == 4){
    		$invoiceNumber = 'PO'.date('y').'-'. $partNewNumber;    		
    	}else{
    		$invoiceNumber = 'PO'.date('y').'-'. $partNewNumber; 
    	}

    	//$invoiceNumber = 'PO'.date('y').'-000'. ($parts[1] + 1);
  		////check first day in a year
		// if ( date('l',strtotime(date('Y-01-01'))) ){
		//     $invoiceNumber = 'PO-'.date('y').'-0001';
		// }else{
		//     //increase 1 with last invoice number
		//     $invoiceNumber = $parts[0].'-'.$parts[1].'-'. ($parts[2] + 1);
		//     //$parts[0] - PO, $parts[1] - year, $parts[2] - number
		// }		
    }
    return $invoiceNumber;
    //dd($invoiceNumber);	
	//date('y') 2 digits of year, date('4') 4 digits of year, date('m') number of month, date('M') name of month
}




function testQuery(){
  //DB::table('products')->whereJsonContains('pro_discount->customer_group', 1)->get();
  //Setting::withCount('image_resolution->img_module')->get();
  //$data = PurchaseOrder::select('pur_order_details')->get();
  //$data = Product::whereJsonContains('pro_discount->customer_group', 1)->get();
  //$data =Product::where('pro_discount->discount_qty', 3 )->get();
  //$data = DB::table('products')->whereJsonContains('pro_discount->customer_group', '1' )->get();
    //$data = DB::table('products')->withCount('pro_discount->discount_qty');
    //$data = DB::table('products')->whereJsonContains('pro_discount', ['customer_group' => 1])->get(); //working
  //$data = Product::whereJsonContains('pro_discount', ['customer_group' => '1'])->get();
 // $data = Product::query();

  //$data = Product::whereRaw('JSON_CONTAINS(pro_discount->"$[*].customer_group", "3")')->get();
  //$data = Product::whereRaw('JSON_CONTAINS(pro_discount, \'{"customer_group": 2}\')')->select('sys_pro_name')->get(); //Working
  //$data = Product::whereJsonContains('pro_discount', ['customer_group' => 1])->select('sys_pro_name')->get(); //Working

  //dd($data);
  //Product::find(1)->update(['pro_discount->discount_qty' => 5]);

  //DB::table('purchase_orders')->where('id', 23)->update(['po_due_amount' => '111']);
   // DB::table('purchase_orders')->where('id', 23)->update(['pur_order_details->>batch_no' => 'b111']);
   //DB::table('purchase_orders')->where('id', 23)->update(array('pur_order_details->batch_no' => 'b111'));

  // array('info->pizza->calorie' => '90')

  //$dataArr = [];
  $suppliers = App\Supplier::select('name')->get()->toArray();
  $customers = App\Customer::select('name')->get()->toArray();
  $employees = App\Models\HRM\Employee::select('emp_name as name')->get()->toArray();
  // print_r($suppliers);
  //dd($customers);

  //$data = array_merge($suppliers, $customers);
  $data = array_merge_recursive($suppliers, $customers, $employees);
  // $dataArr = [
  //   'supplier'=> $suppliers,
  //   'customer' => $customers,
  // ];

 // $data = (object) $data;
  //dd($data);
 // print_r($data);
}
<?php

namespace App\Http\Controllers\Admin\Purchase;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Str; //for str::random

use Illuminate\Support\Carbon;
//use App\Mail\PurchaseOrderRegisterByAdminMail;
//use App\Mail\PurchaseOrderNotificationMail;
//use Illuminate\Support\Facades\Mail;
use App\Models\Purchase\PurchaseOrder;
use App\Models\Catalog\Product;

use Illuminate\Support\Facades\DB; //for database transection
//use Illuminate\Support\Facades\File;
//use Illuminate\Support\Facades\Storage;
//use Illuminate\Support\Facades\Config; //get constant velue without - \Config::get('constants.UserFliesPath'); app/config

class PurchaseOrderController extends Controller
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
        if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 100;
       }

       $data = PurchaseOrder::paginate($perPage);
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
            'vendor_id' => 'required', 
            'po_date' => 'required', 
            'po_payment_term' => 'required',
            'status_m_id' => 'required', 
            'pur_order_details.*.product_id' => 'required',
            'pur_order_details.*.unit_id' => 'required',
            'pur_order_details.*.mrp_price' => 'required',
            'pur_order_details.*.pro_qty' => 'required',
        ],
        [
            'vendor_id.required' => 'Please Select Vendor / Supplier',
            'po_date.required' => 'Order Date is required',
            'po_payment_term.required' => 'Payment Term is required',
            'status_m_id.required' => 'Order Status is required.',
            'pur_order_details.*.product_id.required' => 'Select product',
            'pur_order_details.*.unit_id.required' => 'Unit required',
            'pur_order_details.*.mrp_price.required' => 'MRP required',
            'pur_order_details.*.pro_qty.required' => 'Qty required',
        ]);

        $data =array();
        $data['po_invoice']= purchase_order_invoice_generate(); //get from helper
        $data['vendor_id']=$request->vendor_id;
        $data['po_date']=$request->po_date;
        $data['po_payment_term']=$request->po_payment_term;       
        $data['po_payment_method']=$request->po_payment_method;        
        $data['branch_id']= $request->branch_id != '' ? $request->branch_id : \Auth::user()->branch_id;        
        $data['status_m_id']=$request->status_m_id;

        $data['po_vendor_invoice_no']=$request->po_vendor_invoice_no;    
        $data['po_details']=$request->po_details;    
        $data['po_discount_fixed']=$request->po_discount_fixed !='' ? $request->po_discount_fixed : 0.00;    
        $data['po_discount_percent']=$request->po_discount_percent !='' ? $request->po_discount_percent : 0.00;    
        //$data['po_tax_fiexd']=$request->po_tax_fiexd;    
        //$data['po_tax_percent']=$request->po_tax_percent;    
        $data['po_invoice_sub_total']=$request->po_invoice_sub_total;    
        $data['po_invoice_total']=$request->po_invoice_total;    
        $data['po_paid_amount']=$request->po_paid_amount != '' ? $request->po_paid_amount : 0.00;    
        $data['po_due_amount']=$request->po_due_amount;  

        $data['pur_order_details']=$request->pur_order_details;  //JSON Array of order Details
        $data['is_approved'] = $request->is_approved == NULL ? 0 : $request->is_approved;
        $data['created_by']= \Auth::user()->id;  

     
        try{
            DB::beginTransaction();

            $po = PurchaseOrder::create($data); 
            //$po->PurOrderDetails()->attach($request->departments);  

            //update Product Table if is approved
            if($request->is_approved == 1){   

                foreach ($request->pur_order_details as $key => $object) {
                    $product_qty = Product::where('id', $request->pur_order_details[$key]['product_id'])
                                    ->select('pro_qty')->first();
                    
                    $value =array();
                    $value['pro_qty'] = $product_qty->pro_qty + ($request->pur_order_details[$key]['pro_qty'] + $request->pur_order_details[$key]['pro_free_qty']);
                    $value['pro_mrp'] = $request->pur_order_details[$key]['mrp_price'];

                    Product::find($request->pur_order_details[$key]['product_id'])->update($value);
                }
            }


            DB::commit();            
            return response()->json(['success'=>'Purchase Order Submited']);
            
        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }

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
            'vendor_id' => 'required', 
            'po_date' => 'required', 
            'po_payment_term' => 'required',
            'status_m_id' => 'required', 
            'pur_order_details.*.product_id' => 'required',
            'pur_order_details.*.unit_id' => 'required',
            'pur_order_details.*.mrp_price' => 'required',
            'pur_order_details.*.pro_qty' => 'required',
        ],
        [
            'vendor_id.required' => 'Please Select Vendor / Supplier',
            'po_date.required' => 'Order Date is required',
            'po_payment_term.required' => 'Payment Term is required',
            'status_m_id.required' => 'Order Status is required.',
            'pur_order_details.*.product_id.required' => 'Select product',
            'pur_order_details.*.unit_id.required' => 'Unit required',
            'pur_order_details.*.mrp_price.required' => 'MRP required',
            'pur_order_details.*.pro_qty.required' => 'Qty required',
        ]);

        $data =array();
        //$data['po_invoice']= purchase_order_invoice_generate(); //get from helper
        $data['vendor_id']=$request->vendor_id;
        $data['po_date']=$request->po_date;
        $data['po_payment_term']=$request->po_payment_term;       
        $data['po_payment_method']=$request->po_payment_method;        
        $data['branch_id']= $request->branch_id != '' ? $request->branch_id : \Auth::user()->branch_id;        
        $data['status_m_id']=$request->status_m_id;

        $data['po_vendor_invoice_no']=$request->po_vendor_invoice_no;    
        $data['po_details']=$request->po_details;    
        $data['po_discount_fixed']=$request->po_discount_fixed !='' ? $request->po_discount_fixed : 0.00;    
        $data['po_discount_percent']=$request->po_discount_percent !='' ? $request->po_discount_percent : 0.00;    
        //$data['po_tax_fiexd']=$request->po_tax_fiexd;    
        //$data['po_tax_percent']=$request->po_tax_percent;    
        $data['po_invoice_sub_total']=$request->po_invoice_sub_total;    
        $data['po_invoice_total']=$request->po_invoice_total;    
        $data['po_paid_amount']=$request->po_paid_amount != '' ? $request->po_paid_amount : 0.00;    
        $data['po_due_amount']=$request->po_due_amount;  

        $data['pur_order_details']=$request->pur_order_details;  //JSON Array of order Details
       
        $data['created_by']= \Auth::user()->id;  

     
        try{
            DB::beginTransaction();

            $is_approved_check = PurchaseOrder::where('id', $request->id)->select('is_approved')->first();
            
            if($is_approved_check->is_approved == 0){ 

                if($request->is_approved == 1){ 

                    // $data['is_approved'] = $request->is_approved == NULL ? 0 : $request->is_approved;
                    $data['is_approved'] = $request->is_approved;
                    $po = PurchaseOrder::find($request->id)->update($data); //update Purchase

                    //update Product Table if is approved
                    foreach ($request->pur_order_details as $key => $object) {
                        $product_qty = Product::where('id', $request->pur_order_details[$key]['product_id'])
                                        ->select('pro_qty')->first();
                        
                        $value =array();
                        $value['pro_qty'] = $product_qty->pro_qty + ($request->pur_order_details[$key]['pro_qty'] + $request->pur_order_details[$key]['pro_free_qty']);
                        $value['pro_mrp'] = $request->pur_order_details[$key]['mrp_price'];

                        Product::find($request->pur_order_details[$key]['product_id'])->update($value);
                    }

                }elseif($request->is_approved == NULL){
                    //$data['is_approved'] = $request->is_approved == NULL ? 0 : $request->is_approved;
                    $po = PurchaseOrder::find($request->id)->update($data); //update Purchase
                }

            }elseif($is_approved_check->is_approved == 1){

                //$po = PurchaseOrder::find($request->id)->update($data); //update Purchase
            }

            //update Product Table
            // foreach ($request->pur_order_details as $key => $object) {
            //     $product_qty = Product::where('id', $request->pur_order_details[$key]['product_id'])
            //                     ->select('pro_qty')->first();

            //     if( $product_qty->pro_qty > $request->pur_order_details[$key]['pro_qty']  ){
            //         $value =array();
            //         $value['pro_qty'] = $product_qty->pro_qty - ($product_qty->pro_qty - $request->pur_order_details[$key]['pro_qty'] ); //10 - (10 - 9) 
            //         $value['pro_mrp'] = $request->pur_order_details[$key]['mrp_price'];
            //         Product::find($request->pur_order_details[$key]['product_id'])->update($value);
            //     }elseif($product_qty->pro_qty < $request->pur_order_details[$key]['pro_qty'] ){
            //         $value =array();
            //         $value['pro_qty'] = $product_qty->pro_qty + ($product_qty->pro_qty - $request->pur_order_details[$key]['pro_qty'] ); //10 + (10 - 11) 
            //         $value['pro_mrp'] = $request->pur_order_details[$key]['mrp_price'];
            //         Product::find($request->pur_order_details[$key]['product_id'])->update($value); 
            //     }
            // }

            // //test For loop (working)
            // for ($i = 0; $i < count($request->pur_order_details); $i++) {
            //     $arrays[] = $request->pur_order_details[$i]['product_id'];
            // }
            // return $arrays;
        

            DB::commit();            
            return response()->json(['success'=>'Purchase Order Update']);
            
        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //query for existing image
        // $existing_image = PurchaseOrder::select('po_image')->where('id', $id)->first();   

        // if($existing_image->po_image != null){            
        //     $parts = parse_url($existing_image->po_image); 
        //     $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
        //     Storage::disk('s3')->delete($parts);
        //     //dd($parts);
        // } 
                        
        // if( File::exists($existing_image->po_image) ) {  
        //     File::delete($existing_image->po_image); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = PurchaseOrder::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //search
    public function search(Request $request){
        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 100;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Purchase::where(function($query) use ($searchKey){
                $query->where('purchase_orders.id','LIKE','%'.$searchKey.'%')
                        ->orWhere('purchase_orders.po_invoice','LIKE','%'.$searchKey.'%');
            })
            //->select('purchase_orders.*','user_status.us_name')
            //->join('user_status', 'purchase_orders.status_id','=', 'user_status.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Purchase::where(function($query) use ($searchKey, $searchOption){
                    if($searchOption == 'us_name'){
                        $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }else{
                        $query->where( 'purchase_orders.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }                
                })
            //->select('purchase_orders.*','user_status.us_name')
            //->join('user_status', 'purchase_orders.status_id','=', 'user_status.id')
            ->paginate($perPage);
            
        }else{
            $searchResult = Purchase::paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search
}

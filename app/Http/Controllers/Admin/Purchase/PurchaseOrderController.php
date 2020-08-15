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

use Illuminate\Support\Facades\DB; //for database transection
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //get constant velue without - \Config::get('constants.UserFliesPath'); app/config

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
        //
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
        //
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
        $existing_image = PurchaseOrder::select('po_image')->where('id', $id)->first();   

        if($existing_image->po_image != null){            
            $parts = parse_url($existing_image->po_image); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 
                        
        // if( File::exists($existing_image->po_image) ) {  
        //     File::delete($existing_image->po_image); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = PurchaseOrder::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //delect single image
    public function DeleteImage($id){
        //query for existing image
        $existing_image = PurchaseOrder::select('po_image')->where('id', $id)->first();                   
         //for s3
        if($existing_image->po_image != null){            
            $parts = parse_url($existing_image->po_image); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->po_image) ) {  
        //     File::delete($existing_image->po_image); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }
      
        //update image field
        $data = PurchaseOrder::find($id);
        $data->po_image = null; 
        $data->save();

        if($data){
            return response()->json(['success'=> 'Image deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

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

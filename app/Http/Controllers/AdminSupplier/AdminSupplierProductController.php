<?php

namespace App\Http\Controllers\AdminSupplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Supplier\Vendor;
use App\Models\Catalog\Product;
use App\Models\Catalog\Category;
// use App\Models\Catalog\Image;
//use DB;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminSupplierProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:supplier');
    }


    public function index(Request $request)
    {
        return view('AdminSupplier.DashboardSupplier');      

    }



    public function ProductListForAdminSupplier(Request $request)
    {

		if(!empty($request->perPage)){
		    $perPage = $request->perPage;
		}else{
		    $perPage = 100;
		}

       	if(Auth::guard('supplier')->check()){

	       	if(Auth::guard('supplier')->user()->vendor_id == $request->id ){

	       		//DB::enableQueryLog();

		       	// $data = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage','hasManyCategory')
		       	$data = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')
		       					// ->whereIn('id',function($query) use ($request){
					         //        $query->select('pro_category')
					         //       		->from('products')
					         //       		->where('pro_vendors', 'like', "%{$request->id}%");
					         //    })

		       					// ->whereIn('categories.id', 'pro_category')
		                        // ->select('products.*')
		       					->where('pro_vendors', 'like', "%{$request->id}%") //
		                        ->orderBy('id', 'DESC')
		                        // ->toSql();
		                         ->paginate($perPage);
		                        //->get();
		        return response()->json($data);

		        // dd(DB::getQueryLog()); 
		       //dd($data);

		      
		       //Log::info($data);


				//$quries = DB::getQueryLog();
				//$lastQuery    = end($query);
				//print_r($lastQuery);

				//dd($quries);
		        //Log::debug($data->toSql());

	    //    		$query = Product::query();

		   //           DB::listen(function ($query) {
					//     // var_dump($data->sql);
					//     dd($query->sql);
					// });


		    }

       }      

    }


    public function selectedProductCategoryList(Request $request){

    	$array_ids = $request->q != null ? $request->q : $request->q = [];
        $queryResult = Category::whereIn('id', $array_ids)
                        // ->select('id','cat_name')
                        ->get(); 
        return response()->json($queryResult);

    }

     // $data = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage', 
     //    						['sub_category_list' => function($query){
					// 		        $query->select('*')
					// 		              ->from('categories')
					// 		              ->whereIn('id', function($query2) use ($request){
					// 			                $query2->select('pro_category')
					// 			               		->from('products')
					// 			               		->where('products.id', '=', "products.id");
					// 			               		// ->where('pro_vendors', 'like', "%{$request->id}%");
					// 			            });
					// 		    }]
		   //     				)
		   //     					// ->whereIn('id',function($query) use ($request){
					//          //        $query->select('pro_category')
					//          //       		->from('products')
					//          //       		->where('pro_vendors', 'like', "%{$request->id}%");
					//          //    })

		   //     					// ->whereIn('categories.id', 'pro_category')
		   //                      // ->select('products.*')
		   //     					// ->where('pro_vendors', 'like', "%{$request->id}%") //
		   //                      ->orderBy('id', 'DESC')
		   //                      // ->toSql();
		   //                       // ->paginate($perPage);
		   //                      ->get();
		   //      // return response()->json($data);
		   //                       dd($data);



    // $product_tabs = DB::table('producttabs')
    // ->where('parent_id', $id)
    // ->whereIn('id', function($query) use ($product_id){
    //     $query->select('tab_id')
    //           ->from('product_tabs_data')
    //           ->where('product_id', $product_id);
    // })
    // ->get();


    // public function getAuthSupplierData(){
    //     //get auth Supplier data after login if any later change
    //     //$data = 'Ok test data';
    //     if(Auth::guard('supplier')->check()){
    //         $data = Auth::guard('supplier')->user();
    //     }

    //     // $data = Auth::user();
    //     return response()->json($data);
    // }


    // public function getAuthVendorData(Request $request){
    //     if(Auth::guard('supplier')->check()){

    //         $data = Vendor::with('UserStatus','belongsToBrandShop')
    //             ->find($request->vendor_id);
    //     }

    //     return response()->json($data);
    // }




}

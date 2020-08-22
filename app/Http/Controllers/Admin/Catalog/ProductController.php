<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Product;
use App\Models\Catalog\Image;
use App\Supplier;
use App\Models\Catalog\Category;

use Illuminate\Support\Str; //for str::random
//use Illuminate\Support\Facades\File; //for file management  (Public Storage)

use Illuminate\Support\Facades\DB; //for database transection

//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants form app/config


class ProductController extends Controller
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
    public function index(Request $request)
    {
       if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 100;
       }

       $data = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')
                        // ->select('products.*')
                        ->orderBy('id', 'DESC')
                        ->paginate($perPage);
       return response()->json($data);
       //Log::info($data);
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
       //Log::info($request->all());
       //return $request->all();

        $this->validate($request, [
            'sys_pro_name' => 'required|min:2|max:40|unique:products,sys_pro_name',
            'pro_type' => 'required',
            //'*.category_name' => 'required|min:2|max:40',
        ],[
            'sys_pro_name.required' => 'The System Product Name field is required.',
            'sys_pro_name.unique' => 'The System Product Name already existing or taken.',
            'pro_type.required' => 'The field is required.',
        ]);

        $data =array();
        $data['sys_pro_name']=$request->sys_pro_name;
        $data['pro_slug']= slug_generator($request->sys_pro_name);//slug_generator get from helper
        $data['pro_type']=$request->pro_type;
        $data['status_m_id']=$request->status_m_id;
        $data['pro_code']=$request->pro_code;
        $data['pro_model']=$request->pro_model;
        $data['sku']=$request->sku;
        $data['upc']=$request->upc;
        $data['isbn']=$request->isbn;
        $data['mpn']=$request->mpn;
        $data['brand_id']=$request->brand_id;
        $data['pro_price']=$request->pro_price;
        $data['pro_sale_price']=$request->pro_sale_price;
        $data['pro_mrp']=$request->pro_mrp;
        $data['pro_reward_points']=$request->pro_reward_points;
        $data['pro_qty']=$request->pro_qty;  
        $data['unit_id']=$request->unit_id != '' ? $request->unit_id : 1;   //default is 1 (pc)
        $data['pro_unit_value']=$request->pro_unit_value;
        $data['pro_delivery_charge']=$request->pro_delivery_charge;  
        $data['pro_translation'] =$request->pro_translation;        
        $data['pro_category'] =$request->pro_category;
        $data['related_products'] =$request->related_products;
        // $data['pro_suppliers'] =$request->pro_suppliers;
        $data['pro_vendors'] =$request->pro_vendors;
        $data['pro_attributes'] =$request->pro_attributes;
        $data['pro_specification'] =$request->pro_specification;
        $data['pro_discount'] =$request->pro_discount;
        
        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image_base64 = $request->pro_images;  //base64 images array       
        


        try{
            DB::beginTransaction();

           $product = Product::create($data);   
            //$category->languageTranslation()->attach($request->lang_translation); 


           if($image_base64){
              foreach ($image_base64 as $image_base64) {
                $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                    return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
                }else{
                    $imageName = slug_generator($request->sys_pro_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                    //save image using intervention image
                    $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                    $image = str_replace($replace, '', $image_base64); 
                    $image = str_replace(' ', '+', $image);
                    $image = base64_decode($image); 
                    $resized_image = \Image::make($image)->resize(400, 520)
                        //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                        ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                  

                    Storage::disk('s3')->put('products/'.$imageName, $resized_image );// s3
                    //Storage::disk('public')->put('products/'.$imageName, $resized_image );//storage
                    Image::create([
                        'product_id' => $product->id,
                        //'image_url' => 'storage/products/'.$imageName, //for storage
                        'image_url' => Config::get('constants.s3_url').'products/'.$imageName, // s3 bucket url
                    ]);
                }
              }//end foreach
            }//end if


            DB::commit();
        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }
        
        return response()->json(['success'=>'Product Created.'], 200); 

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
            'sys_pro_name' => 'required|min:2|max:40|unique:products,sys_pro_name,'.$id,
            'pro_type' => 'required',
            //'*.category_name' => 'required|min:2|max:40',
        ]);

        $data =array();
        $data['sys_pro_name']=$request->sys_pro_name;
        $data['pro_slug']= slug_generator($request->sys_pro_name);//slug_generator get from helper
        $data['pro_type']=$request->pro_type;
        $data['status_m_id']=$request->status_m_id;
        $data['pro_code']=$request->pro_code;
        $data['pro_model']=$request->pro_model;
        $data['sku']=$request->sku;
        $data['upc']=$request->upc;
        $data['isbn']=$request->isbn;
        $data['mpn']=$request->mpn;
        $data['brand_id']=$request->brand_id;
        $data['pro_price']=$request->pro_price;
        $data['pro_sale_price']=$request->pro_sale_price;
        $data['pro_mrp']=$request->pro_mrp;
        $data['pro_reward_points']=$request->pro_reward_points;
        $data['pro_qty']=$request->pro_qty; 
        $data['unit_id']=$request->unit_id != '' ? $request->unit_id : 1;   //default is 1 (pc) 
        $data['pro_unit_value']=$request->pro_unit_value;
        $data['pro_delivery_charge']=$request->pro_delivery_charge;  
        $data['pro_translation'] =$request->pro_translation; 
        $data['related_products'] =$request->related_products;       
        $data['pro_category'] =$request->pro_category;
        // $data['pro_suppliers'] =$request->pro_suppliers;
        $data['pro_vendors'] =$request->pro_vendors;
        $data['pro_attributes'] =$request->pro_attributes;
        $data['pro_specification'] =$request->pro_specification;
        $data['pro_discount'] =$request->pro_discount;

        
        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image_base64 = $request->pro_images;              
        

        try{
            DB::beginTransaction();

            $product = Product::whereId($id)->update($data); 

            if($image_base64){
              
              foreach ($image_base64 as $image_base64) { 
                $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                    return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
                }else{

                    $imageName = slug_generator($request->sys_pro_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                    //save image using intervention image
                    $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                    $image = str_replace($replace, '', $image_base64); 
                    $image = str_replace(' ', '+', $image);
                    $image = base64_decode($image); 
                    $resized_image = \Image::make($image)->resize(400, 520)
                        //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                        ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                  

                    Storage::disk('s3')->put('products/'.$imageName, $resized_image );// s3
                    //Storage::disk('public')->put('products/'.$imageName, $resized_image );//storage
                    Image::create([
                        'product_id' => $id,
                        //'image_url' => 'storage/products/'.$imageName, //for storage
                        'image_url' => Config::get('constants.s3_url').'products/'.$imageName, // s3 bucket url
                    ]);
                }
              }
            } 

           // $product = Product::find($id)->update([
           //      'sys_pro_name' => $request->sys_pro_name,
           //      'pro_type' => $request->pro_type,
           //      'pro_slug' => slug_generator($request->sys_pro_name),//slug_generator get from helper
           //      'created_by' => \Auth::user()->id, 
           //      'status_m_id' => $request->status_m_id,
           //      'pro_code' => $request->pro_code,
           //      'pro_model' => $request->pro_model,
           //      'sku' => $request->sku,
           //      'upc'=> $request->upc,
           //      'isbn' => $request->isbn,
           //      'mpn' => $request->mpn,
           //      'pro_qty' => $request->pro_qty,
           //      'pro_price' => $request->pro_price,
           //      'pro_sale_price' => $request->pro_sale_price,
           //      'pro_reward_points' =>$request->pro_reward_points,
           //      'brand_id' => $request->brand_id, 
           //      'pro_translation' => $request->pro_translation,
           //      'pro_category' => $request->pro_category,
           //      'pro_attributes' => $request->pro_attributes,
           //      'pro_specification' => $request->pro_specification,
           //      'pro_discount' => $request->pro_discount,                
           // ]);

            DB::commit();
        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }
        
        return response()->json(['success'=>'Product Update.'], 200); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //query all existing image
        $existing_images = Image::select('image_url')->where('product_id', $id)->get(); 

        //delete all from public storage
        // foreach ($existing_images as $images) {                  
        //     if( File::exists($images->image_url) ) {  
        //         File::delete($images->image_url); 
        //         //delete file //use Illuminate\Support\Facades\File; at top
        //     }
        // }

        //delete all from s3       
        foreach ($existing_images as $images) {
            if($images->image_url != null){            
                $parts = parse_url($images->image_url); 
                $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                Storage::disk('s3')->delete($parts);
                //dd($parts);
            } 
        }

        $data = Product::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //delete single image from images Table
    public function DeleteImage($id){
        //query for existing image
        $existing_image = Image::select('image_url')->where('id', $id)->first();
        
        //delete form s3
        if($existing_image->image_url != null){            
            $parts = parse_url($existing_image->image_url); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        }  

        //Delete from public storage                       
        // if( File::exists($existing_image->image_url) ) {  
        //     File::delete($existing_image->image_url); 
        //     //delete file //use Illuminate\Support\Facades\File; at top            
        // }

        //return $id;
        $data = Image::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Image is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }
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
            $searchResult = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')
                ->where(function($query) use ($searchKey){
                $query->where('products.sys_pro_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('products.pro_price','LIKE','%'.$searchKey.'%')
                        ->orWhere('products.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('status_master.status_name','LIKE','%'.$searchKey.'%');
            })
            ->select('products.*','status_master.status_name')
            ->join('status_master', 'products.status_m_id','=', 'status_master.id')
            //->join('brands', 'products.brand_id','=', 'brands.id')
            //->join('categories', 'products.pro_category','=', 'categories.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')
                ->where(function($query) use ($searchKey, $searchOption){
                    if($searchOption == 'status_name'){
                        $query->where( 'status_master.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }else{
                        $query->where( 'products.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }                
                })
            ->select('products.*','status_master.status_name')
            ->join('status_master', 'products.status_m_id','=', 'status_master.id')
            ->paginate($perPage);
            
        }else{
            $searchResult = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search  

    //auto complete product search (from product, Purchase Order, Purchase Return, Sales Order, Sales Return)
    public function AutoCompleteProductForStore(Request $request){
        $searchKey = $request->q;
        if(!empty($searchKey)){
        //if($search = \Request::get('q')){
            $searchResult = Product::where(function($query) use ($searchKey){
                $query->where('sys_pro_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('pro_price','LIKE','%'.$searchKey.'%');
            })
            ->select('id','sys_pro_name')
            ->limit(200)
            ->get();
        }
        return response()->json($searchResult);
    }

    //selected Product list for multiselect option also (sengle select from Purchase Order, Purchase Return, Sales Order, Sales Return)
    public function selectedProductList(Request $request){

        $searchKey = $request->q != null ? $request->q : $request->q = [];
        $searchResult = Product::whereIn('id', $searchKey)
                        ->select('id','sys_pro_name','unit_id','pro_unit_value','pro_mrp')
                        ->get(); 
        return response()->json($searchResult);
    }//end search


    // //selected supplier list for multiselect option
    // public function selectedSupplierList(Request $request){
    //    $searchKey = $request->q;
    //     $searchResult = Supplier::whereIn('id', $searchKey)
    //                     ->select('id','name')
    //                     ->get(); //Model::whereIn('id', [1, 2, 3])->get();
    //    // $searchResult = Supplier::findMany([1, 2, 3]); //Model::findMany([1, 2, 3]);
    //     return response()->json($searchResult);
    // }//end search


    //selected Category list for multiselect option
    public function selectedCategoryList(Request $request){
        $searchKey = $request->q;
        $searchResult = Category::whereIn('id', $searchKey)
                        ->select('id','cat_name')
                        ->get(); 
        return response()->json($searchResult);
    }//end search


    //this is test function for get product list by categoy for multiComponent 
    public function getMultiProductList(Request $request){
        //return $request->id;
        $id = $request->id;
        # Get all the user who has Vue in skills
        $result = Product::with('belongsToStatusMaster','belongsToBrand','hasManyImage')->where('pro_category', 'LIKE',  '%'.$id.'%')->get();
        return response()->json($result);
    }

    

}

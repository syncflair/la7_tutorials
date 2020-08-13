<?php

namespace App\Http\Controllers\Admin\Supplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Supplier\BrandShop;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management  (Public Storage)

use Illuminate\Support\Facades\DB; //for database transection

//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants form app/config

class BrandShopController extends Controller
{
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
            $perPage = 20;
        }

        $data = Brandshop::paginate($perPage);
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
            'brand_shop_title' => 'required|min:3|max:40|unique:brand_shops,brand_shop_title',
        ]);

        $data =array();
        $data['brand_shop_title']=$request->brand_shop_title;
        $data['brand_shop_slug']= slug_generator($request->brand_shop_title);//slug_generator get from helper        
        $data['brand_shop_desc']=$request->brand_shop_desc;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }


        $image_base64 = $request->bs_img;

        if($image_base64){
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->brand_shop_title).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert('FilesStorage/CommonFiles/favicon.png')->stream($imageExt, 100);                 

                Storage::disk('s3')->put('BrandShop/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('BrandShop/'.$imageName, $resized_image );//for local storage 

                $data['bs_img']=Config::get('constants.s3_url').'BrandShop/'.$imageName;//s3_url get from constants file 
                //$data['bs_img'] = 'storage/BrandShop/'.$imageName; //for public storage

            }//end image type check
        }else{
            $data['bs_img'] = null;
        }

        Brandshop::create($data);        
        return response()->json(['success'=>'Customer Group Created.']); 
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
            'brand_shop_title' => 'required|min:3|max:40|unique:brand_shops,brand_shop_title,'.$id,
        ]);

        $data =array();
        $data['brand_shop_title']=$request->brand_shop_title;
        $data['brand_shop_slug']= slug_generator($request->brand_shop_title);//slug_generator get from helper 
        $data['brand_shop_desc']=$request->brand_shop_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image_base64 = $request->bs_img;        

        //if(strlen($image_base64) > 150){ /*php function*/
        if( Str::length($image_base64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Brandshop::select('bs_img')->where('id', $id)->first();      
                //for s3
                if($existing_image->bs_img != null){            
                    $parts = parse_url($existing_image->bs_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  
                //for public storage           
                // if(!empty($existing_image->bs_img)) {
                //     File::delete($existing_image->bs_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//

                //new name generate from base64 file
                $imageName = slug_generator($request->brand_shop_title).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert('FilesStorage/CommonFiles/favicon.png')->stream($imageExt, 100);                

                Storage::disk('s3')->put('BrandShop/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('BrandShop/'.$imageName, $resized_image );//for local storage 


                $data['bs_img']=Config::get('constants.s3_url').'BrandShop/'.$imageName;//s3_url get from constants file 
                //$data['bs_img'] = 'storage/BrandShop/'.$imageName; //for public storage

            }//end image type check
        }else{
            $existing_image = Brandshop::select('bs_img')->where('id', $id)->first();
            $data['bs_img'] = $existing_image->bs_img;            
        }

        Brandshop::whereId($id)->update($data);         
        return response()->json(['success'=>'Customer Group Updated.']); 
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
        $existing_image = Brandshop::select('bs_img')->where('id', $id)->first(); 

        //for s3
        if($existing_image->bs_img != null){            
            $parts = parse_url($existing_image->bs_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->bs_img) ) {  
        //     File::delete($existing_image->bs_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = Brandshop::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


     //search
    public function search(Request $request){

        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 50;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = BrandShop::where(function($query) use ($searchKey){
                $query->where('brand_shop_title','LIKE','%'.$searchKey.'%')
                        ->orWhere('brand_shop_desc','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = BrandShop::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = BrandShop::latest()->paginate(10);
            $searchResult = BrandShop::paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }


    //return brand shop list without pagination
    public function getBrandShops(){
        //this is for commonStoreForAll Store
        $data = BrandShop::where('is_enabled', '=', '1')->get();
        return response()->json($data);
    }


    //search for auto complete (from Vendor)
    public function autoCompleteSearch(Request $request){
        $searchKey = $request->q;

        if(!empty($searchKey) ){
            $searchResult = BrandShop::where(function($query) use ($searchKey){
                $query->where('brand_shop_title','LIKE','%'.$searchKey.'%')
                        ->orWhere('brand_shop_desc','LIKE','%'.$searchKey.'%');
            })->select('id', 'brand_shop_title')->get();

        }
        //return $searchResult;
        return response()->json($searchResult);
    }

    //selected Brand Shop (for Vendor)
    public function getSelectedBrandShop(Request $request){
        $searchKey = $request->q;
        //$searchResult = BrandShop::whereIn('id', $searchKey)
        $searchResult = BrandShop::where('id', $searchKey)
                        ->select('id','brand_shop_title')
                        ->get(); //Model::whereIn('id', [1, 2, 3])->get();
       // $searchResult = Supplier::findMany([1, 2, 3]); //Model::findMany([1, 2, 3]);
        return response()->json($searchResult);
    }//end search


}

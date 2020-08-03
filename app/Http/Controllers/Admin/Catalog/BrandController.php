<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Brand;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants

class BrandController extends Controller
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
            $perPage = 20;
        }

        $data = Brand::paginate($perPage);
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
            'brand_name' => 'required|min:3|max:40|unique:brands,brand_name',
        ]);

        $data =array();
        $data['brand_name']=$request->brand_name;
        $data['brand_url']=$request->brand_url;
        $data['brand_desc']=$request->brand_desc;

        $data['created_by']= \Auth::user()->id;  

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }       
        
        $image_64 = $request->brand_img;
        //$imgPath = $request->file('brand_img');
        //dd($image);

        if($image_64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->brand_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];

                //save image using intervention image
                // \Image::make($image)
                //     //->fit(200, 200)
                //     ->resize(200, 120)
                //    // ->text('SHORBORAHO', 140, 190)
                //     ->save(storage_path('app/public/brand/').$imageName);
                //$data['brand_img'] = 'storage/brand/'.$imageName;
                //\Image::make($image)->save(storage_path('app/public/Brand/'.$imageName)) ;
                
                //$request->brand_img->store($imageName, 'public');
                //$request->brand_img->store($imageName, 'public', $imageName);

             
                //dd($image);

                $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                $image = str_replace($replace, '', $image_64); 
                $image = str_replace(' ', '+', $image);                 

                Storage::disk('s3')->put('brand/'.$imageName, base64_decode($image) );

                // \Image::make($image_64)
                //     //->fit(200, 200)
                //     ->resize(200, 120)
                //    // ->text('SHORBORAHO', 140, 190)
                //     ->save(storage_path('app/public/brand/').$imageName);
                //$s3_url = 'https://sorboraho.s3-ap-southeast-1.amazonaws.com/brand/';

                //s3_url_brand get from constants file 
                $data['brand_img'] = Config::get('constants.s3_url_brand').$imageName;
                // $data['brand_img'] = 'storage/brand/'.$imageName;


            }//end image type check
        }else{
            $data['brand_img'] = null;            
        }

        Brand::create($data);        
        return response()->json(['success'=>'Brand Created.']); 
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
            'brand_name' => 'required|min:3|max:40|unique:brands,brand_name,'.$id,
        ]);

        $data =array();
        $data['brand_name']=$request->brand_name;
        $data['brand_url']=$request->brand_url;
        $data['brand_desc']=$request->brand_desc;

        $data['updated_by']= \Auth::user()->id; 

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }        

        $image_64 = $request->brand_img;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image_64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Brand::select('brand_img')->where('id', $id)->first(); 
                if($existing_image->brand_img != null){            
                    $parts = parse_url($existing_image->brand_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  

                // if(!empty($existing_image->brand_img)) {
                //     File::delete($existing_image->brand_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//else{echo 'Empty';}  



                //new name generate from base64 file
                $imageName = slug_generator($request->brand_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                //save image using intervention image
                // \Image::make($image)
                //     ->resize(200, 120)
                //    // ->text('SHORBORAHO', 140, 190)
                //     ->save(storage_path('app/public/brand/').$imageName);
                // $data['brand_img'] = 'storage/brand/'.$imageName;


                $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                $image = str_replace($replace, '', $image_64); 
                $image = str_replace(' ', '+', $image);                

                Storage::disk('s3')->put('brand/'.$imageName, base64_decode($image) );

                //s3_url_brand get from constants file 
                $data['brand_img'] = Config::get('constants.s3_url_brand').$imageName;



            }//end image type check
        }else{
            $existing_image = Brand::select('brand_img')->where('id', $id)->first();
            $data['brand_img'] = $existing_image->brand_img;           
        }

        Brand::whereId($id)->update($data);         
        return response()->json(['success'=>'Brand Updated.']); 
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
        $existing_image = Brand::select('brand_img')->where('id', $id)->first();
        if($existing_image->brand_img != null){            
            $parts = parse_url($existing_image->brand_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        }                         
        // if( File::exists($existing_image->brand_img) ) {  
        //     File::delete($existing_image->brand_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top            
        // }
        

        $data = Brand::findOrFail($id)->delete();        
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
            $searchResult = Brand::where(function($query) use ($searchKey){
                $query->where('brand_name','LIKE','%'.$searchKey.'%')
                    ->orWhere('brand_desc','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Brand::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = Brand::latest()->paginate(10);
            $searchResult = Brand::paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return Brand list without pagination
    public function GetBrands(){
        //this is for commonStoreForAll Store
        $data = Brand::get();
        return response()->json($data);
    }
}

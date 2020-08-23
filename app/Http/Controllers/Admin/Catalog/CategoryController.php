<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Category;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

use Illuminate\Support\Facades\DB; //for database transection
//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants form app/config

class CategoryController extends Controller
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

        //$data = Category::whereNull('parent_id')->with('child_category','lang_translation')->get(); //for admin
        $data = Category::whereNull('parent_id')->with('child_category')->get(); //for admin
        // $data = Catgory::paginate($perPage);

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
        //return $request->all();

        $this->validate($request, [
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name',
            //'cat_slug' => 'required',
            //'*.category_name' => 'required|min:2|max:40',
        ]);

        $data =array();
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_name_lang']=$request->cat_name_lang;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper
        $data['cat_desc']=$request->cat_desc;
        $data['cat_translation']=$request->cat_translation; //JSON Data
        $data['created_by']= \Auth::user()->id;         
        
        $data['is_enabled']=$request->is_enabled == null ? 0 : $request->is_enabled; 

        $image_base64 = $request->cat_img;

        if($image_base64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->cat_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);      
                            
                Storage::disk('s3')->put('category/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('category/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['cat_img'] = Config::get('constants.s3_url').'category/'.$imageName;
                //$data['cat_img'] = 'storage/category/'.$imageName; //for public storage

            }//end image type check
        }else{
            $data['cat_img'] = null;            
        }


        try{
            DB::beginTransaction();

            $category = Category::create($data);  

            // //this is to save category_language_translation table using attach() function 
            //$category->languageTranslation()->attach($request->lang_translation); 

            DB::commit();
            return response()->json(['success'=>'Category Created.'], 200); 

        }catch(\Exception $e){
            logger($e->getMessage());
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

        //return $request->all();
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name,'.$id,
            //'cat_slug' => 'required|unique:categories,cat_slug,'.$id,
        ]);

        $data =array();
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        // $data['cat_name_lang']=$request->cat_name_lang;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper 
        $data['cat_desc']=$request->cat_desc;  
        $data['cat_translation']=$request->cat_translation; //JSON Data
        $data['updated_by']= \Auth::user()->id; 

        $data['is_enabled']=$request->is_enabled == null ? 0 : $request->is_enabled; 

        $image_base64 = $request->cat_img;        

        //if(strlen($image_base64) > 150){ /*php function*/
        if( Str::length($image_base64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Category::select('cat_img')->where('id', $id)->first(); 
                
                if($existing_image->cat_img != null){            
                    $parts = parse_url($existing_image->cat_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  

                // if(!empty($existing_image->cat_img)) {
                //     File::delete($existing_image->cat_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->cat_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                

                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);      
                            
                Storage::disk('s3')->put('category/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('category/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['cat_img'] = Config::get('constants.s3_url').'category/'.$imageName;
                //$data['cat_img'] = 'storage/category/'.$imageName; //for public storage

            }//end image type check
        }else{
            $existing_image = Category::select('cat_img')->where('id', $id)->first();
            $data['cat_img'] = $existing_image->cat_img;
        }


        try{
            DB::beginTransaction();

            //Category::whereId($id)->update($data); 
            $category = Category::find($id)->update($data); 

            // //this is to save category_language_translation table using attach() function
            // $category = Category::find($request->id);
            // foreach($request->lang_translation as $key => $object){
            //     $arrays[$object['language_id']] =  (array) $object;
            //     //convert to array like //[1 => ['fields' => 'data'], 2 => ['fields' => 'data'] ]
            // } //dd($arrays);
            // $category->languageTranslation()->sync($arrays);


            DB::commit();
            return response()->json(['success'=>'Category Update.'], 200);
        }catch(\Exception $e){
            logger($e->getMessage());
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
        $existing_image = Category::select('cat_img')->where('id', $id)->first();                   
        
        //Delete from s3
        if($existing_image->cat_img != null){            
            $parts = parse_url($existing_image->cat_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts); //dd($parts);
        } 
        
        //delete single image from public storage                        
        // if( File::exists($existing_image->cat_img) ) {  
        //     File::delete($existing_image->cat_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top            
        // }
       
        $data = Category::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    //return Brand list without pagination
    public function getCategory(){
        //this is for commonStoreForAll Store
        $data = Category::
                //where('is_enabled', '=', 1 )
                where('is_enabled', '1')
                ->get();
        return response()->json($data);
    }

    //auto complete serarch for category
    public function autoCompleteCategoryForStore(Request $request){
        $searchKey = $request->q;
        if(!empty($searchKey)){
        //if($search = \Request::get('q')){
            $searchResult = Category::where(function($query) use ($searchKey){
                $query->where('cat_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('cat_desc','LIKE','%'.$searchKey.'%');
            })->get();            
        }else{
            $searchResult = Category::get();
        }
        return response()->json($searchResult);
    }
}

<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Category;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

use Illuminate\Support\Facades\DB; //for database transection

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
        //$data = Catgory::whereNull('parent_id')->with('childCOAS')->where('is_enabled', '1')->get(); //FOR PUBLIC
        $data = Category::whereNull('parent_id')->with('child_category','lang_translation')->get(); //for admin
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
        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image = $request->cat_img;

        if($image){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(200, 200)
                    //->text('SHORBORAHO', 140, 190)
                    // ->text('SHORBORAHO', 140, 190, function($font) {
                    //     //$font->file('/backend/fonts/FontAwesome.otf');
                    //     $font->size(12);
                    //     $font->color('#fdf6e3');
                    //     $font->align('center');
                    //     $font->valign('top');
                    //     $font->angle(45);
                    // })
                    //->text('foo', 0, 0, function($font) {  $font->color(array(255, 255, 255, 0.5)); })
                    ->save(public_path('FilesStorage/Backend/Category/').$imageName);

                $data['cat_img'] = 'FilesStorage/Backend/Category/'.$imageName;

            }//end image type check
        }else{
            $data['cat_img'] = null;            
        }


        try{
            DB::beginTransaction();

            $category = Category::create($data);   
            $category->languageTranslation()->attach($request->lang_translation); 

            DB::commit();
        }catch(\Exception $e){
            logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }
        
        return response()->json(['success'=>'Category Created.'], 200); 
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
        $data['updated_by']= \Auth::user()->id; 

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image = $request->cat_img;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Category::select('cat_img')->where('id', $id)->first();                   
                if(!empty($existing_image->cat_img)) {
                    File::delete($existing_image->cat_img); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    ->resize(200, 200)
                    ->text('SHORBORAHO', 140, 190)
                    ->save(public_path('FilesStorage/Backend/Category/').$imageName);

                $data['cat_img'] = 'FilesStorage/Backend/Category/'.$imageName;

            }//end image type check
        }else{
            $existing_image = Category::select('cat_img')->where('id', $id)->first();
            $data['cat_img'] = $existing_image->cat_img;
        }


        try{
            DB::beginTransaction();

            //Category::whereId($id)->update($data); 
            $category = Category::find($id)->update($data); 
            $category = Category::find($request->id);            

            foreach($request->lang_translation as $key => $object){
                $arrays[$object['language_id']] =  (array) $object;
                //convert to array like
                //[1 => ['fields' => 'data'], 2 => ['fields' => 'data'] ]
            }
            //dd($arrays);
            $category->languageTranslation()->sync($arrays);


            DB::commit();
        }catch(\Exception $e){
            logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }

        return response()->json(['success'=>'Category Update.'], 200);

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
        if( File::exists($existing_image->cat_img) ) {  
            File::delete($existing_image->cat_img); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }
       
        $data = Category::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//use Illuminate\Support\Facades\Auth
//use Auth;
use App\Models\Category;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

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
       //$category = Category::orderBy('id', 'DESC')->paginate(10);

       $category = Category::
            select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')


            // ->leftJoin('categories as CAT2', 'categories.id','=', 'CAT2.parent_id')
            // ->leftJoin('categories as CAT3', 'CAT2.id','=', 'CAT3.parent_id')
           // ->join('categories as CAT2', 'categories.id','=', 'CAT2.parent_id', 'left outer')            
            //->join('categories as CAT3', 'CAT2.id','=', 'CAT3.parent_id', 'left outer')
            //->where('categories.parent_id', Null)
            //->groupBy('categories.parent_id')
            //->orderBy('categories.cat_name');
            ->paginate(10);
       
        return response()->json($category);
        //$category = Category::get();
        //return $category;
        //return response($category->jsonSerialize(), Response::HTTP_OK);
        //return response($category->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // return $request->cat_img;

        $this->validate($request, [
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name',
            //'cat_slug' => 'required',
        ]);

        $data =array();
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
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
                    ->text('SHORBORAHO', 140, 190)
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

                Category::create($data);        
                return response()->json(['success'=>'Category Created successfully']); 
            }//end image type check
        }else{
            $data['cat_img'] = null;

            Category::create($data);        
            return response()->json(['success'=>'Category Created successfully.']); 
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
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
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
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name,'.$id,
            //'cat_slug' => 'required|unique:categories,cat_slug,'.$id,
        ]);

        $data =array();
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
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

                Category::whereId($id)->update($data); 
                //$category = Category::findOrFail($id); 
                //$category->update($data);             
                return response()->json(['success'=>'Category Update successfully.']);
            }//end image type check
        }else{
            $existing_image = Category::select('cat_img')->where('id', $id)->first();
            $data['cat_img'] = $existing_image->cat_img;

            Category::whereId($id)->update($data); 
            //$category = Category::findOrFail($id); 
            //$category->update($data); 
            
            return response()->json(['success'=>'Category Update successfully.']);
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
        if( File::exists($existing_image->cat_img) ) {  
            File::delete($existing_image->cat_img); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }
       
        $data = Category::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    public function searchCategory(Request $request){
        //$search = $request->q;

        if($search = \Request::get('q')){
            $searchResult = Category::where(function($query) use ($search){
                $query->where('categories.cat_name','LIKE','%'.$search.'%')
                        //->orWhere('.categories.cat_slug','LIKE','%'.$search.'%')
                        ->orWhere('categories.is_enabled','LIKE','%'.$search.'%');
                        //->orWhere('updated_at','LIKE','%'.$search.'%');
            })
            ->select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')
            ->paginate(20);

        }else{
            //$searchResult = Category::latest()->paginate(10);
            $searchResult = Category::select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')
            ->paginate(20);
        }

        return $searchResult;

    }

    public function countCategory(){
            $count = Category::select('id')->get();
            return $count = $count->count();
    }

    public function unactiveCategory($id){       
        $category = Category::find($id);
        $category->is_enabled = 0;
        $category->save();

        return response()->json(['success'=> 'Category Inactive Now']);
    }

    public function activeCategory($id){
        $category = Category::find($id);
        $category->is_enabled = 1;
        $category->save();

        return response()->json(['success'=> 'Category Active Now']);
    }

    public function getParentCategory(){
        //$parentCategory = Category::whereNull('parent_id')
        $parentCategory = Category::select('id','cat_name')
                           ->get();
        return $parentCategory;
    }


}

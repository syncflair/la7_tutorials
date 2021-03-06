<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Language;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

class LanguageController extends Controller
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
        $data = Language::get();
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
            'lang_name' => 'required|min:3|max:40|unique:languages,lang_name',
            'lang_code' => 'required|min:2|max:5|unique:languages,lang_code',
        ]);

        $data =array();
        $data['lang_name']=$request->lang_name;
        $data['lang_code']=$request->lang_code;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }


        $image = $request->lang_icon;

        if($image){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->lang_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                    // ->text('SHORBORAHO', 140, 190, function($font) {
                    //     //$font->file('/backend/fonts/FontAwesome.otf');
                    //     $font->size(12);
                    //     $font->color('#fdf6e3');
                    //     $font->align('center');
                    //     $font->valign('top');
                    //     $font->angle(45);
                    // })
                    //->text('foo', 0, 0, function($font) {  $font->color(array(255, 255, 255, 0.5)); }) ;
                    ->save(storage_path('app/public/settings/').$imageName);
                $data['lang_icon'] = 'storage/settings/'.$imageName;            
            }//end image type check
        }else{
            $data['lang_icon'] = null;
        }

        Language::create($data);        
        return response()->json(['success'=>'Language Created']); 
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
            'lang_name' => 'required|min:3|max:40|unique:languages,lang_name,'.$id,
            'lang_code' => 'required|min:2|max:5|unique:languages,lang_code,'.$id,
        ]);

        $data =array();
        $data['lang_name']=$request->lang_name;
        $data['lang_code']=$request->lang_code;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image = $request->lang_icon;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Language::select('lang_icon')->where('id', $id)->first();                   
                if(!empty($existing_image->lang_icon)) {
                    File::delete($existing_image->lang_icon); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->lang_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    ->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(storage_path('app/public/settings/').$imageName);
                $data['lang_icon'] = 'storage/settings/'.$imageName;  
            }//end image type check
        }else{
            $existing_image = Language::select('lang_icon')->where('id', $id)->first();
            $data['lang_icon'] = $existing_image->lang_icon;
        }

        Language::whereId($id)->update($data);         
        return response()->json(['success'=>'Language Updated.']); 
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
        $existing_image = Language::select('lang_icon')->where('id', $id)->first();                   
        if( File::exists($existing_image->lang_icon) ) {  
            File::delete($existing_image->lang_icon); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = Language::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //return division list without pagination
    public function getLanguages(){
        //this is for commonStoreForAll Store
        // $data = Language::where('is_enabled', 1)->get();
        $data = Language::where('is_enabled', '=', 1)->get();
        return response()->json($data);
    }

}

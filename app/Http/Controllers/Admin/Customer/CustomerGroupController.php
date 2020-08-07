<?php

namespace App\Http\Controllers\Admin\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Customer\CustomerGroup;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management  (Public Storage)

use Illuminate\Support\Facades\DB; //for database transection

//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants form app/config

class CustomerGroupController extends Controller
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
        $data = CustomerGroup::get();
        return response()->json($data);
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
        $this->validate($request, [
            'group_name' => 'required|min:3|max:40|unique:customer_groups,group_name',
        ]);

        $data =array();
        $data['group_name']=$request->group_name;
        $data['group_desc']=$request->group_desc;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }


        $image_base64 = $request->cg_img;

        if($image_base64){
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->group_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                // \Image::make($image)
                //     //->fit(200, 200)
                //     ->resize(20, 20)
                //     ->save(storage_path('app/public/settings/').$imageName);
                // $data['cg_img'] = 'storage/settings/'.$imageName; 

                //Decode Base64
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);                 

                Storage::disk('s3')->put('customerGroups/'.$imageName, base64_decode($image) ); //for s3
                //Storage::disk('public')->put('customerGroups/'.$imageName, base64_decode($image) );//for local storage 

                $data['cg_img']=Config::get('constants.s3_url').'customerGroups/'.$imageName;//s3_url get from constants file 
                //$data['cg_img'] = 'storage/customerGroups/'.$imageName; //for public storage

            }//end image type check
        }else{
            $data['cg_img'] = null;
        }

        CustomerGroup::create($data);        
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
            'group_name' => 'required|min:3|max:40|unique:customer_groups,group_name,'.$id,
        ]);

        $data =array();
        $data['group_name']=$request->group_name;
        $data['group_desc']=$request->group_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image_base64 = $request->cg_img;        

        //if(strlen($image_base64) > 150){ /*php function*/
        if( Str::length($image_base64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = CustomerGroup::select('cg_img')->where('id', $id)->first();      
                //for s3
                if($existing_image->cg_img != null){            
                    $parts = parse_url($existing_image->cg_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  
                //for public storage           
                // if(!empty($existing_image->cg_img)) {
                //     File::delete($existing_image->cg_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//

                //new name generate from base64 file
                $imageName = slug_generator($request->group_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                // //save image using intervention image
                // \Image::make($image)
                //     ->resize(20, 20)
                //    // ->text('SHORBORAHO', 140, 190)
                //     ->save(storage_path('app/public/settings/').$imageName);
                // $data['cg_img'] = 'storage/settings/'.$imageName; 

                 //Decode Base64
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);                 

                Storage::disk('s3')->put('customerGroups/'.$imageName, base64_decode($image) ); //for s3
                //Storage::disk('public')->put('customerGroups/'.$imageName, base64_decode($image) );//for local storage 


                $data['cg_img']=Config::get('constants.s3_url').'customerGroups/'.$imageName;//s3_url get from constants file 
                //$data['cg_img'] = 'storage/customerGroups/'.$imageName; //for public storage

            }//end image type check
        }else{
            $existing_image = CustomerGroup::select('cg_img')->where('id', $id)->first();
            $data['cg_img'] = $existing_image->cg_img;            
        }

        CustomerGroup::whereId($id)->update($data);         
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
        $existing_image = CustomerGroup::select('cg_img')->where('id', $id)->first(); 

        //for s3
        if($existing_image->cg_img != null){            
            $parts = parse_url($existing_image->cg_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->cg_img) ) {  
        //     File::delete($existing_image->cg_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = CustomerGroup::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/

    }
}

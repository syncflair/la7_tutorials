<?php

namespace App\Http\Controllers\Admin\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Customer\CustomerMembership;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants

class CustomerMembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $data = CustomerMembership::get();
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
            'membership_title' => 'required|min:3|max:40|unique:customer_memberships,membership_title',
        ]);

        $data =array();
        $data['membership_title']=$request->membership_title;        
        $data['membership_desc']=$request->membership_desc;
        $data['discount_type']=$request->discount_type;
        $data['total_orders']=$request->total_orders;
        $data['discount_value']=$request->discount_value;

        $data['created_by']= \Auth::user()->id;  


        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled;     
        $data['is_free_shipping']=$request->is_free_shipping == NULL ? 0 : $request->is_free_shipping;     
        
        $image_base64 = $request->membership_img;

        if($image_base64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->membership_title).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                  

                Storage::disk('s3')->put('membership/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('membership/'.$imageName, $resized_image );//for local storage

                //s3_url get from constants file 
                $data['membership_img'] = Config::get('constants.s3_url').'membership/'.$imageName; //for s3
                // $data['membership_img'] = 'storage/membership/'.$imageName; //for public storage

            }//end image type check
        }else{
            $data['membership_img'] = null;            
        }

        CustomerMembership::create($data);        
        return response()->json(['success'=>'Membership Created.']); 
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
            'membership_title' => 'required|min:3|max:40|unique:customer_memberships,membership_title,'.$id,
        ]);

        $data =array();
        $data['membership_title']=$request->membership_title;        
        $data['membership_desc']=$request->membership_desc;
        $data['discount_type']=$request->discount_type;
        $data['total_orders']=$request->total_orders;
        $data['discount_value']=$request->discount_value;


        $data['updated_by']= \Auth::user()->id; 

        $data['is_enabled']=$request->is_enabled == NULL ? 0 : $request->is_enabled;     
        $data['is_free_shipping']=$request->is_free_shipping == NULL ? 0 : $request->is_free_shipping;          

        $image_base64 = $request->membership_img;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image_base64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = CustomerMembership::select('membership_img')->where('id', $id)->first(); 

                if($existing_image->membership_img != null){            
                    $parts = parse_url($existing_image->membership_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  

                // if(!empty($existing_image->membership_img)) {
                //     File::delete($existing_image->membership_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->membership_title).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                
                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);  
                        
                Storage::disk('s3')->put('membership/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('membership/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['membership_img'] = Config::get('constants.s3_url').'membership/'.$imageName;
                // $data['membership_img'] = 'storage/membership/'.$imageName; //for public storage

            }//end image type check
        }else{
            $existing_image = CustomerMembership::select('membership_img')->where('id', $id)->first();
            $data['membership_img'] = $existing_image->membership_img;           
        }

        CustomerMembership::whereId($id)->update($data);         
        return response()->json(['success'=>'Membership Updated.']); 
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
        $existing_image = CustomerMembership::select('membership_img')->where('id', $id)->first();
        if($existing_image->membership_img != null){            
            $parts = parse_url($existing_image->membership_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 
        //delete single image from public storage                        
        // if( File::exists($existing_image->membership_img) ) {  
        //     File::delete($existing_image->membership_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top            
        // }
        

        $data = CustomerMembership::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //return customer groups list without pagination
    public function getCustomerMembership(){
        //this is for commonStoreForAll Store
        $data = CustomerMembership::where('is_enabled', '=', '1')->get();
        return response()->json($data);
    }

}

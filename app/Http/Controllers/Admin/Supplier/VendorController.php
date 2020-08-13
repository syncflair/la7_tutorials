<?php

namespace App\Http\Controllers\Admin\Supplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Supplier\Vendor;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management  (Public Storage)

use Illuminate\Support\Facades\DB; //for database transection

//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //that for call constants form app/config

class VendorController extends Controller
{
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
//$data = Supplier::with('belongsToDistrictZone.belongsToDistrict.belongsToDivision.belongsToCountry')
        $data = Vendor::with('hasManySupplier','UserStatus','belongsToBrandShop')
                ->paginate($perPage);

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
            'vendor_name' => 'required|min:3|max:40|unique:vendors,vendor_name',
            'vendor_email' => 'email|unique:vendors,vendor_email', 
            'vendor_phone' => ['required','numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:vendors,vendor_phone'],
            'status_id' => 'required',
            'vendor_type' => 'required',
        ],
        [
            'status_id.required' => 'The User Status field is required.',
        ]);

        $data =array();
        $data['vendor_name']=$request->vendor_name;
        $data['vendor_email']=$request->vendor_email;
        $data['vendor_phone']=$request->vendor_phone;
        $data['status_id']=$request->status_id;
        $data['vendor_type']=$request->vendor_type;
        $data['brand_shop_id']=$request->brand_shop_id;
        $data['vendor_desc']=$request->vendor_desc;
        $data['vendor_address']=$request->vendor_address;
        $data['dist_zone_id']=$request->dist_zone_id;
        //$data['enable_notify']=$request->enable_notify;

        $data['created_by']= \Auth::user()->id;  
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // } 
        $image_base64 = $request->vendor_img;

        if($image_base64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->vendor_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert('FilesStorage/CommonFiles/favicon.png')->stream($imageExt, 100);     
                            
                Storage::disk('s3')->put('vendor/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('vendor/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['vendor_img'] = Config::get('constants.s3_url').'vendor/'.$imageName;
                //$data['vendor_img'] = 'storage/vendor/'.$imageName; //for public storage

            }//end image type check
        }else{
            $data['vendor_img'] = null;            
        }

        Vendor::create($data);        
        return response()->json(['success'=>'Vendor Created.']);
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
            'vendor_name' => 'required|min:3|max:40|unique:vendors,vendor_name,'.$id,
            'vendor_email' => 'email|unique:vendors,vendor_email,'.$id, 
            'vendor_phone' => ['required','numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:vendors,vendor_phone,'.$id],
            'status_id' => 'required',
            'vendor_type' => 'required',
        ],
        [
            'status_id.required' => 'The User Status field is required.',
        ]);

        $data =array();
        $data['vendor_name']=$request->vendor_name;
        $data['vendor_email']=$request->vendor_email;
        $data['vendor_phone']=$request->vendor_phone;
        $data['status_id']=$request->status_id;
        $data['vendor_type']=$request->vendor_type;
        $data['brand_shop_id']=$request->brand_shop_id;
        $data['vendor_desc']=$request->vendor_desc;
        $data['vendor_address']=$request->vendor_address;
        $data['dist_zone_id']=$request->dist_zone_id;
        //$data['enable_notify']=$request->enable_notify;

        $data['updated_by']= \Auth::user()->id;
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // } 
        $image_base64 = $request->vendor_img;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image_base64) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Vendor::select('vendor_img')->where('id', $id)->first(); 
                
                if($existing_image->vendor_img != null){            
                    $parts = parse_url($existing_image->vendor_img); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  

                // if(!empty($existing_image->vendor_img)) {
                //     File::delete($existing_image->vendor_img); //delete file //use Illuminate\Support\Facades\File; at top
                // }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->vendor_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                

                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert('FilesStorage/CommonFiles/favicon.png')->stream($imageExt, 100);     
                            
                Storage::disk('s3')->put('vendor/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('vendor/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['vendor_img'] = Config::get('constants.s3_url').'vendor/'.$imageName;
                //$data['vendor_img'] = 'storage/vendor/'.$imageName; //for public storage

            }//end image type check
        }else{
            $existing_image = Vendor::select('vendor_img')->where('id', $id)->first();
            $data['vendor_img'] = $existing_image->vendor_img;           
        }

        Vendor::whereId($id)->update($data);         
        return response()->json(['success'=>'Vendor Updated.']); 
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
        $existing_image = Vendor::select('vendor_img')->where('id', $id)->first();
        
        //Delete from s3
        if($existing_image->vendor_img != null){            
            $parts = parse_url($existing_image->vendor_img); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts); //dd($parts);
        } 
        
        //delete single image from public storage                        
        // if( File::exists($existing_image->vendor_img) ) {  
        //     File::delete($existing_image->vendor_img); 
        //     //delete file //use Illuminate\Support\Facades\File; at top            
        // }
        

        $data = Vendor::findOrFail($id)->delete();        
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
            $perPage = 100;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Vendor::where(function($query) use ($searchKey){
                $query->where('vendor_name','LIKE','%'.$searchKey.'%')
                    ->orWhere('vendor_email','LIKE','%'.$searchKey.'%')
                    ->orWhere('vendor_desc','LIKE','%'.$searchKey.'%')
                    ->orWhere('vendor_phone','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Vendor::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = Vendor::latest()->paginate(10);
            $searchResult = Vendor::paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return Vendor list without pagination
    public function getVendors(){
        //this is for commonStoreForAll Store
        $data = Vendor::get();
        return response()->json($data);
    }



    public function ChangeNotify(Request $request){
        //return $notifyValue = ($request->notifyValue == "true") ? 1 : 0 ;      
        $data =array();
        $data['enable_notify'] = ($request->notifyValue == "true") ? 1 : 0 ;  
        $data['updated_by']  = \Auth::user()->id;      

        Vendor::whereId($request->id)->update($data);         
        return response()->json(['success'=>'Notification Updated.']); 
    }


    public function inactiveVendor($id){
        $data = Vendor::find($id);
        $data->status_id = 2; 
        $data->save();

        return response()->json(['success'=> 'Inactive Vendor']);         
    }

    public function activeVendor($id){
        $data = Vendor::find($id);
        $data->status_id = 1; 
        $data->save();

        return response()->json(['success'=> 'Active Vendor']);  
    }


    //search for auto complete (from Supplier)
    public function autoCompleteSearch(Request $request){
        $searchKey = $request->q;

        if(!empty($searchKey) ){
            $searchResult = Vendor::where(function($query) use ($searchKey){
                $query->where('vendor_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('vendor_desc','LIKE','%'.$searchKey.'%');
            })->select('id', 'vendor_name')->get();

        }
        //return $searchResult;
        return response()->json($searchResult);
    }

    //selected Brand Shop (for Supplier)
    public function getSelectedVendor(Request $request){
        $searchKey = $request->q;
        //$searchResult = Vendor::whereIn('id', $searchKey)
        $searchResult = Vendor::where('id', $searchKey)
                        ->select('id','vendor_name')
                        ->get(); //Model::whereIn('id', [1, 2, 3])->get();
       // $searchResult = Supplier::findMany([1, 2, 3]); //Model::findMany([1, 2, 3]);
        return response()->json($searchResult);
    }//end search


}

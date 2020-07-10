<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\OrganizationInfo;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

class OrganizationInfoController extends Controller
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
        //return OrganizationInfo::all();
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
        //
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
        if($id == 1){
            return OrganizationInfo::find($id);
        }
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
       
        if($id == 1)
            
        $this->validate($request, [
            'org_name' => 'required|min:2|max:100'
        ]);

        $data =array();
        $data['org_name']=$request->org_name;
        $data['org_business_type']=$request->org_business_type;
        $data['org_desc']=$request->org_desc;
        $data['org_license_desc']= $request->org_license_desc;//slug_generator get from helper 
        $data['closing_period']=$request->closing_period; 
        $data['org_email']=$request->org_email; 
        $data['org_phone']=$request->org_phone;
        $data['org_url']=$request->org_url; 
        $data['org_address']=$request->org_address; 
        $data['city']=$request->city; 
        $data['state']=$request->state; 
        $data['country']=$request->country; 
         $data['updated_by']= \Auth::user()->id; 

        $image = $request->org_logo;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = OrganizationInfo::select('org_logo')->where('id', $id)->first();                   
                if(!empty($existing_image->org_logo)) {
                    File::delete($existing_image->org_logo); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    ->resize(200, 200)
                    //->text('SHORBORAHO', 140, 190)
                    ->save(public_path('FilesStorage/Backend/Settings/').$imageName);

                $data['org_logo'] = 'FilesStorage/Backend/Settings/'.$imageName;

                OrganizationInfo::whereId($id)->update($data);      
                return response()->json(['success'=>'Update successfull.']);
            }//end image type check
        }else{
            $existing_image = OrganizationInfo::select('org_logo')->where('id', $id)->first();
            $data['org_logo'] = $existing_image->org_logo;

            OrganizationInfo::whereId($id)->update($data); 
            //$OrganizationInfo = OrganizationInfo::findOrFail($id); 
            //$OrganizationInfo->update($data); 
            
            return response()->json(['success'=>'Update successfull.']);
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
        //
    }
}

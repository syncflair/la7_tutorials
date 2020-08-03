<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Country;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

class CountryController extends Controller
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

        $data = Country::paginate($perPage);
        //$data = Country::All();
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
            'country_name' => 'required|min:3|max:40|unique:countries,country_name',
            'iso_2' => 'max:5|unique:countries,iso_2',
            'iso_3' => 'max:5|unique:countries,iso_3',
            'phone_code' => 'max:5|unique:countries,phone_code',
            //'currency' => 'max:10|unique:countries,currency',
        ]);

        $data =array();
        $data['country_name']=$request->country_name;
        $data['iso_2']=$request->iso_2;
        $data['iso_3']=$request->iso_3;
        $data['phone_code']=$request->phone_code;
        $data['currency']=$request->currency;

        $data['created_by']= \Auth::user()->id;         
        
        $image = $request->country_flag;

        if($image){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //new name generate from base64 file
                $imageName = slug_generator($request->country_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                    // ->save(public_path('FilesStorage/Backend/Settings/').$imageName);
                ->save(storage_path('app/public/settings/').$imageName);
                $data['country_flag'] = 'storage/settings/'.$imageName;

                // Country::create($data);        
                // return response()->json(['success'=>'Country Created successfully']); 
            }//end image type check
        }else{
            $data['country_flag'] = null;            
        }

        Country::create($data);        
        return response()->json(['success'=>'Country Created.']); 


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
            'country_name' => 'required|min:3|max:40|unique:countries,country_name,'.$id,
            'iso_2' => 'max:5|unique:countries,iso_2,'.$id,
            'iso_3' => 'max:5|unique:countries,iso_3,'.$id,
            'phone_code' => 'max:5|unique:countries,phone_code,'.$id,
            //'currency' => 'max:10|unique:countries,currency,'.$id,
        ]);

        $data =array();
        $data['country_name']=$request->country_name;
        $data['iso_2']=$request->iso_2;
        $data['iso_3']=$request->iso_3;
        $data['phone_code']=$request->phone_code;
        $data['currency']=$request->currency;

        $data['updated_by']= \Auth::user()->id;         

        $image = $request->country_flag;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = Country::select('country_flag')->where('id', $id)->first();                   
                if(!empty($existing_image->country_flag)) {
                    File::delete($existing_image->country_flag); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->country_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    ->resize(20, 20)
                   // ->text('SHORBORAHO', 140, 190)
                    // ->save(public_path('FilesStorage/Backend/Settings/').$imageName);
                    ->save(storage_path('app/public/settings/').$imageName);
                $data['country_flag'] = 'storage/settings/'.$imageName;

                // Country::whereId($id)->update($data);      
                // return response()->json(['success'=>'Update successfull.']);
            }//end image type check
        }else{
            $existing_image = Country::select('country_flag')->where('id', $id)->first();
            $data['country_flag'] = $existing_image->country_flag;  

            // Country::whereId($id)->update($data);         
            // return response()->json(['success'=>'Country Updated successfully.']);           
        }

        Country::whereId($id)->update($data);         
        return response()->json(['success'=>'Country Updated.']); 
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
        $existing_image = Country::select('country_flag')->where('id', $id)->first();                   
        if( File::exists($existing_image->country_flag) ) {  
            File::delete($existing_image->country_flag); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = Country::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


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
            $searchResult = Country::where(function($query) use ($searchKey){
                $query->where('country_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('phone_code','LIKE','%'.$searchKey.'%')
                        ->orWhere('iso_2','LIKE','%'.$searchKey.'%')
                        ->orWhere('iso_3','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Country::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = Country::latest()->paginate(10);
            $searchResult = Country::paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }

    //return country list without pagination
    public function GetCountry(){
        //this is for commonStoreForAll Store
        $data = Country::get();
        //$data = Country::All();
        return response()->json($data);
    }


}

<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\PaymentMethod;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management

class PaymentMethodController extends Controller
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
        $data = PaymentMethod::get();
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
            'payment_method' => 'required|min:3|max:40|unique:payment_methods,payment_method',
        ]);

        $data =array();
        $data['payment_method']=$request->payment_method;
        $data['payment_method_desc']=$request->payment_method_desc;

        $data['created_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }


        $image = $request->payment_method_icon;

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
                    //->resize(40, 40)
                    ->save(public_path('FilesStorage/Backend/Settings/').$imageName);

                $data['payment_method_icon'] = 'FilesStorage/Backend/Settings/'.$imageName;

                PaymentMethod::create($data);        
                return response()->json(['success'=>'Payment Method Created successfully']); 
            }//end image type check
        }else{
            $data['payment_method_icon'] = null;

            PaymentMethod::create($data);        
            return response()->json(['success'=>'Payment Method Created successfully.']); 
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
        $this->validate($request, [
            'payment_method' => 'required|min:3|max:40|unique:payment_methods,payment_method,'.$id,
        ]);

        $data =array();
        $data['payment_method']=$request->payment_method;
        $data['payment_method_desc']=$request->payment_method_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        $image = $request->payment_method_icon;        

        //if(strlen($image) > 150){ /*php function*/
        if( Str::length($image) > 150){ /*larvel helper function*/

            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                //query for existing image
                $existing_image = PaymentMethod::select('payment_method_icon')->where('id', $id)->first();                   
                if(!empty($existing_image->payment_method_icon)) {
                    File::delete($existing_image->payment_method_icon); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->resize(20, 20)
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(public_path('FilesStorage/Backend/Settings/').$imageName);

                $data['payment_method_icon'] = 'FilesStorage/Backend/Settings/'.$imageName;

                PaymentMethod::whereId($id)->update($data);      
                return response()->json(['success'=>'Update successfull.']);
            }//end image type check
        }else{
            $existing_image = PaymentMethod::select('payment_method_icon')->where('id', $id)->first();
            $data['payment_method_icon'] = $existing_image->payment_method_icon;

            PaymentMethod::whereId($id)->update($data);         
            return response()->json(['success'=>'Payment Method Updated successfully.']); 
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
        $existing_image = PaymentMethod::select('payment_method_icon')->where('id', $id)->first();                   
        if( File::exists($existing_image->payment_method_icon) ) {  
            File::delete($existing_image->payment_method_icon); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = PaymentMethod::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

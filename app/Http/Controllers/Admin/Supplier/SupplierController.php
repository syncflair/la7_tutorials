<?php

namespace App\Http\Controllers\Admin\Supplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;
//use App\Mail\SupplierRegisterByAdminMail;
use App\Mail\SupplierNotificationMail;
use Illuminate\Support\Facades\Mail;
use App\Supplier;



class SupplierController extends Controller
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
            $perPage = 10;
       }

        $data = Supplier::with('belongsToDistrictZone.belongsToDistrict.belongsToDivision.belongsToCountry')
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
            'name' => 'required|min:3|max:80', 
            'email' => 'required|email|unique:suppliers,email', 
            'phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:suppliers,phone'], //right way to use preg_match
            'supplier_type' => 'required', 
            'status_id' => 'required', 
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',
            //'password_confirmation' => ['sometimes','same:password'],
        ],
        [
            'status_id.required' => 'The User Status field is required.',
        ]);
       
        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['phone']=$request->phone;
        $data['supplier_type']=$request->supplier_type;
        $data['status_id']=$request->status_id;        
        $data['supplier_desc']=$request->supplier_desc;        
        $data['supplier_address']=$request->supplier_address;  
        $data['dist_zone_id']=$request->dist_zone_id;      
        $data['password'] = Hash::make($request->password); //make hash password

        $image = $request->avatar;

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
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(public_path('FilesStorage/Backend/Suppliers/').$imageName);


                $data['avatar'] = 'FilesStorage/Backend/Suppliers/'.$imageName;

                $supplier = Supplier::create($data); 

                // if($request->status_id != 1){ //if supplier status is assigned to active than mail not send
                //     $supplier->sendEmailVerificationNotification(); //for verification email send 
                // }

                if($supplier){           
                    $data = ["userInfo" => $request->all(), "tag" => "register"];
                    Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));

                    return response()->json(['success'=>'Supplier inserted successfully ']);
                }

                
            }//end image type check                         
        }else{
            $data['avatar'] = null;
            //$request['avatar'] = null;
            $supplier = Supplier::create($data); 

            // if($request->status_id != 1){ //if supplier status is assigned to active than mail not send
            //     $supplier->sendEmailVerificationNotification();  ////for verification email send
            // }

            if($supplier){           
                $data = ["userInfo" => $request->all(), "tag" => "register"];
                Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));

                return response()->json(['success'=>'Supplier inserted successfully Without Image']);
            }
            
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
            'name' => 'required|min:3|max:80', 
            'email' => 'required|email|unique:suppliers,email,'.$id, 
            'phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:suppliers,phone,'.$id ], //right way to use preg_match
            'supplier_type' => 'required', 
            'status_id' => 'required', 
            'password' => 'nullable|sometimes|min:8|max:30',   //confirmed
            'password_confirmation' => 'sometimes|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',
        ],
        [
            'status_id.required' => 'The User Status field is required.',
        ]);
       
         //existing password query
        $existing_user_password = Supplier::select('password')->where('id', $request->id)->first(); 
        $existing_password = $existing_user_password->password;

        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['phone']=$request->phone;
        $data['supplier_type']=$request->supplier_type;
        $data['status_id']=$request->status_id; 
        $data['supplier_desc']=$request->supplier_desc;        
        $data['supplier_address']=$request->supplier_address;   
        $data['dist_zone_id']=$request->dist_zone_id;               
        $data['password'] = $request->password == null ? $existing_password : Hash::make($request->password);

        $image = $request->avatar;

        if( Str::length($image) > 150){ /*larvel helper function*/
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                 //query for existing image
                $existing_image = Supplier::select('avatar')->where('id', $id)->first();                   
                if(!empty($existing_image->avatar)) {
                    File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  


                //new name generate from base64 file
                $imageName = Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    //->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(public_path('FilesStorage/Backend/Suppliers/').$imageName);


                $data['avatar'] = 'FilesStorage/Backend/Suppliers/'.$imageName;

                $supplier = Supplier::whereId($request->id)->update($data);        

                return response()->json(['success'=>'Supplier Update successfully ']);
            }//end image type check                         
        }else{
            $existing_image = Supplier::select('avatar')->where('id', $request->id)->first();
            $data['avatar'] = $existing_image->avatar;

            $supplier = Supplier::whereId($request->id)->update($data); 

            return response()->json(['success'=>'Supplier Update successfully Without Image']);
           // \Mail::to($supplier->email)->send(new VerificationEmail($supplier)); //for verification email send
            
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
        $existing_image = Supplier::select('avatar')->where('id', $id)->first();                   
        if( File::exists($existing_image->avatar) ) {  
            File::delete($existing_image->avatar); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = Supplier::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
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
            $searchResult = Supplier::with('belongsToDistrictZone.belongsToDistrict.belongsToDivision.belongsToCountry')
                ->where(function($query) use ($searchKey){
                $query->where('suppliers.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.phone','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.supplier_type','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%');
            })
            ->select('suppliers.*','user_status.us_name')
            ->join('user_status', 'suppliers.status_id','=', 'user_status.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Supplier::with('belongsToDistrictZone.belongsToDistrict.belongsToDivision.belongsToCountry')
            ->where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }else{
                    $query->where( 'suppliers.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }                
            })
            ->select('suppliers.*','user_status.us_name')
            ->join('user_status', 'suppliers.status_id','=', 'user_status.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = Supplier::latest()->paginate(10);
            $searchResult = Supplier::with('belongsToDistrictZone.belongsToDistrict.belongsToDivision.belongsToCountry')
                    ->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search

     public function ChangeNotify(Request $request){
        //return $notifyValue = ($request->notifyValue == "true") ? 1 : 0 ;      
        $data =array();
        $data['enable_notify'] = ($request->notifyValue == "true") ? 1 : 0 ;  
        $data['updated_by']  = \Auth::user()->id;      

        Supplier::whereId($request->id)->update($data);         
        return response()->json(['success'=>'Notification Updated successfully.']); 
    }



    public function verifiedByAdmin(Request $request){
        //return $notifyValue = ($request->notifyValue == "true") ? 1 : 0 ;

        $data = Supplier::find($request->id);
        $data->status_id = 1; 
        $data->email_verification_code = null; 
        $data->verified_by = \Auth::user()->id; 
        $data->updated_by = \Auth::user()->id; 
        $data->save();

        if($data){           
            $data = ["userInfo" => $data, "tag" => "varify"];
            Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));

            return response()->json(['success'=> 'Supplier verified now']);
        }
    }


    public function inactive_supplier($id){
        $data = Supplier::find($id);
        $data->status_id = 2; 
        $data->save();

        if($data){           
            $data = ["userInfo" => $data, "tag" => "inactive"];
            Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));

            return response()->json(['success'=> 'Inactive Supplier']);
        }
         
    }

    public function active_supplier($id){
        $data = Supplier::find($id);
        $data->status_id = 1; 
        $data->save();

        if($data){           
            $data = ["userInfo" => $data, "tag" => "active"];
            Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));

            return response()->json(['success'=> 'Active Supplier']);
        }  
    }


}

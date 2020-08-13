<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
//use App\Mail\UserRegisterByAdminMail;
use Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config; //get constant velue without - \Config::get('constants.UserFliesPath'); app/config

use App\Mail\UserNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;

//use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
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
            $perPage = 100;
       }

        $data = User::with('role','belongsToEmployee')->paginate($perPage);

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
            'email' => 'required|email|unique:users,email', 
            'employee_id' => 'nullable|sometimes|unique:users,employee_id', 
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',

            //'password_confirmation' => ['sometimes','same:password'],
        ],
        [
            //'employee_id.unique' => 'Employee is already assign to another user',
        ]);
       
        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['role_id']=$request->role_id;
        $data['status_id']=$request->status_id;
        $data['employee_id'] =  $request->employee_id ;
        //$data['employee_id'] = empty($request->employee_id) ? NULL : $request->employee_id ;
        
        $data['password'] = Hash::make($request->password); //make hash password
        //$request['password'] = Hash::make($request->password); //make hash password
        //unset($request['confirm_password']); //unset confirm_password from send to database

        $image_base64 = $request->avatar;

        if($image_base64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{               

               //new name generate from base64 file
                $imageName = slug_generator($request->name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(120, 200)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                  

                Storage::disk('s3')->put('users/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('users/'.$imageName, $resized_image );//for local storage 

                $data['avatar']=Config::get('constants.s3_url').'users/'.$imageName;//s3_url get from constants file 
                //$data['avatar'] = 'storage/users/'.$imageName; //for public storage

            }//end image type check                         
        }else{
            $data['avatar'] = null;
        }   

        $user = User::create($data); 
        if($request->status_id != 1){ //if user status is assigned to active than mail not send
            $user->sendEmailVerificationNotification();  ////for verification email send
        }

        return response()->json(['success'=>'User Created']);
       // \Mail::to($user->email)->send(new VerificationEmail($user)); //for verification email send         
    
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
            'email' => 'required|email|unique:users,email,'.$id, 
            //'employee_id' => 'sometimes|unique:users,employee_id,'.$id, 
            'employee_id' => 'nullable|sometimes|unique:users,employee_id,'.$id, 
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'nullable|sometimes|min:8|max:30',   //confirmed
            'password_confirmation' => 'sometimes|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',
        ],
        [
            //'employee_id.unique' => 'Employee is already assign to another user',
        ]);
       
         //existing password query
        $existing_user_password = User::select('password')->where('id', $request->id)->first(); 
        $existing_password = $existing_user_password->password;

        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['role_id']=$request->role_id;
        $data['status_id']=$request->status_id;     
        $data['employee_id'] = $request->employee_id ;     
        
        $data['password'] = $request->password == null ? $existing_password : Hash::make($request->password);
        //$request['password'] = Hash::make($request->password); //make hash password
        //unset($request['confirm_password']); //unset confirm_password from send to database

        $image_base64 = $request->avatar;

        if( Str::length($image_base64) > 150){ /*larvel helper function*/
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                 //query for existing image
                $existing_image = User::select('avatar')->where('id', $id)->first();                   
                 //for s3
                if($existing_image->avatar != null){            
                    $parts = parse_url($existing_image->avatar); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  
                //for public storage           
                // if(!empty($existing_image->avatar)) {
                //     File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                // }//

                //new name generate from base64 file
                $imageName = slug_generator($request->name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                

                Storage::disk('s3')->put('users/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('users/'.$imageName, $resized_image );//for local storage 


                $data['avatar']=Config::get('constants.s3_url').'users/'.$imageName;//s3_url get from constants file 
                //$data['avatar'] = 'storage/users/'.$imageName; //for public storage

            }//end image type check                         
        }else{
            $existing_image = User::select('avatar')->where('id', $request->id)->first();
            $data['avatar'] = $existing_image->avatar;            
        } 

        $user = User::whereId($request->id)->update($data); 
        return response()->json(['success'=>'User Updated']);
        // \Mail::to($user->email)->send(new VerificationEmail($user)); //for verification email send

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
        $existing_image = User::select('avatar')->where('id', $id)->first();                   
         //for s3
        if($existing_image->avatar != null){            
            $parts = parse_url($existing_image->avatar); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->avatar) ) {  
        //     File::delete($existing_image->avatar); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = User::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //delect single image
    public function DeleteImage($id){
        //query for existing image
        $existing_image = User::select('avatar')->where('id', $id)->first();                   
         //for s3
        if($existing_image->avatar != null){            
            $parts = parse_url($existing_image->avatar); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->avatar) ) {  
        //     File::delete($existing_image->avatar); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }
      
        //update image field
        $data = User::find($id);
        $data->avatar = null; 
        $data->save();

        if($data){
            return response()->json(['success'=> 'Image deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


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
            $searchResult = User::with('role','belongsToEmployee')->where(function($query) use ($searchKey){
                $query->where('users.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('users.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('users.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('roles.name','LIKE','%'.$searchKey.'%');
            })
            ->select('users.*','user_status.us_name', 'roles.name')
            ->join('user_status', 'users.status_id','=', 'user_status.id')
            ->join('roles', 'users.role_id','=', 'roles.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = User::with('role','belongsToEmployee')->where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }elseif($searchOption == 'role_name'){
                    $query->where( 'roles.name','LIKE','%'.$searchKey.'%');                    
                }else{
                    $query->where( 'users.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }                
            })
            ->select('users.*','user_status.us_name', 'roles.name')
            ->join('user_status', 'users.status_id','=', 'user_status.id')
            ->join('roles', 'users.role_id','=', 'roles.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = User::latest()->paginate(10);
            $searchResult = User::with('role','belongsToEmployee')->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }

    public function verify_by_admin($id){
        $user = User::find($id);
        $user->email_verified_at = now();
        $user->status_id = 1 ; 
        $user->save();

        //\Mail::to($user->email)->send(new userAcknowledge($id)); //for verification email send
        Mail::to($user->email)->send(new UserNotification($user)); //for verification email send
        return response()->json(['success'=> $user->name.' is verifyed Now']);
    }

    public function inactive_user($id){
        $data = User::find($id);
        $data->status_id = 2; 
        $data->save();
        //Mail::to($user->email)->send(new UserNotification($user)); //for verification email send
        return response()->json(['success'=> 'Inactive User']);
    }

    public function active_user($id){
        $data = User::find($id);
        $data->status_id = 1; 
        $data->save();
        //Mail::to($user->email)->send(new UserNotification($user)); //for verification email send
        return response()->json(['success'=> 'Active User']);
    }

    
}

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
use Illuminate\Support\Facades\Config; //use for get constant velue without - \Config::get('constants.UserFliesPath');

use App\Mail\UserNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;

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
            $perPage = 10;
       }

        $data = User::with('role')->paginate($perPage);

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
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',

            //'password_confirmation' => ['sometimes','same:password'],
        ]);
       
        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['role_id']=$request->role_id;
        $data['status_id']=$request->status_id;
        
        $data['password'] = Hash::make($request->password); //make hash password
        //$request['password'] = Hash::make($request->password); //make hash password
        //unset($request['confirm_password']); //unset confirm_password from send to database

        $image = $request->avatar;

        if($image){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{               

                //new name generate from base64 file
                $imageName = slug_generator($request->name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                //     ->save(public_path('FilesStorage/Backend/Users/').$imageName);
                // $data['avatar'] = 'FilesStorage/Backend/Users/'.$imageName;
                    ->save(storage_path('app/public/users/').$imageName);
                $data['avatar'] = 'storage/users/'.$imageName;

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
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'nullable|sometimes|min:8|max:30',   //confirmed
            'password_confirmation' => 'sometimes|same:password',
            //'avatar' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,PNG',
        ]);
       
         //existing password query
        $existing_user_password = User::select('password')->where('id', $request->id)->first(); 
        $existing_password = $existing_user_password->password;

        $data =array();
        $data['name']=$request->name;
        $data['email']=$request->email;
        $data['role_id']=$request->role_id;
        $data['status_id']=$request->status_id;     
        
        $data['password'] = $request->password == null ? $existing_password : Hash::make($request->password);
        //$request['password'] = Hash::make($request->password); //make hash password
        //unset($request['confirm_password']); //unset confirm_password from send to database

        $image = $request->avatar;

        if( Str::length($image) > 150){ /*larvel helper function*/
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                 //query for existing image
                $existing_image = User::select('avatar')->where('id', $id)->first();                   
                if(!empty($existing_image->avatar)) {
                    File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  


                //new name generate from base64 file
                $imageName = slug_generator($request->name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(40, 40)
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(storage_path('app/public/users/').$imageName);
                $data['avatar'] = 'storage/users/'.$imageName;

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
        if( File::exists($existing_image->avatar) ) {  
            File::delete($existing_image->avatar); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = User::findOrFail($id)->delete();        
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
            $searchResult = User::with('role')->where(function($query) use ($searchKey){
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
            $searchResult = User::with('role')->where(function($query) use ($searchKey, $searchOption){
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
            $searchResult = User::with('role')->paginate($perPage);
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

<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str; //for str::random
use Validator; //for vlidation
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config; //use for get constant velue without - \Config::get('constants.UserFliesPath');

class ProfileController extends Controller
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
        return view('admin.AuthManagement.User.user_profile');
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
        return User::find($id);
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
         $validator = \Validator::make($request->all(), [
            'name' => 'required|min:3|max:80', 
            'email' => 'required|email|unique:users,email,'.$id,  //Email check with existing user from DB 
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'nullable|sometimes|min:6|max:30',  //regex:/[@$!%*#?&]/  //confirmed
            'confirm_password' => 'sometimes|same:password',
            //'password' => 'nullable|min:6|max:30',  //regex:/[@$!%*#?&]/  //confirmed
            //'confirm_password' => 'nullable|same:password',
            'avatar' => 'file|max:1024|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }elseif($validator->passes()){
            $data =array();
            $data['name']=$request->name;
            $data['email']=$request->email;
            $data['role_id']=$request->role_id;
            $data['status_id']=$request->status_id; 

            if($request->password == null ){
                $existing_user_password = User::select('password')->where('id', $request->id)->first(); 
                $data['password'] = $existing_user_password->password;
            }else{
                $data['password'] = Hash::make($request->password);
            }

            $image = $request->file('avatar');

            if($image){
                //query for existing image
                $existing_image = User::select('avatar')->where('id', $request->id)->first();                   
                if(!empty($existing_image->avatar)) {
                    File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  

                $upload_path = Config::get('constants.UserFliesPath'); // get form app/config/constants.php
                $new_image_name = NewImageName($image); //make New Image name using helper hulper
                $upload_image = UploadImageFile($image, $upload_path , $new_image_name ); //upload image using helper function
              
                $data['avatar'] = $upload_path.$new_image_name;
                
                User::whereId($request->id)->update($data); 
                return response()->json(['success'=>'User Updated successfully']);                              
            }else{
                //query for existing image
                $existing_image = User::select('avatar')->where('id', $request->id)->first();
                $data['avatar'] = $existing_image->avatar;

                User::whereId($request->id)->update($data); 
                return response()->json(['success'=>'User Updated successfully.']);
            }
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

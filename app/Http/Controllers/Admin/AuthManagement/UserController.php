<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Yajra\DataTables\DataTables;
use Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str; //for str::random
use Validator; //for vlidation
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config; //use for get constant velue without - \Config::get('constants.UserFliesPath');

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)    
    {
        if( $request->ajax() ){
        $users_data = User::select('users.*','roles.name as role_name','user_status.us_name')
            ->leftJoin('roles', 'roles.id', '=', 'users.role_id')
            ->leftJoin('user_status', 'user_status.id', '=', 'users.status_id')
            ->latest()->get(); // */  

        //pass data to dataTable
        return DataTables::of($users_data)
            ->addColumn('action', function($users_data){
                $actionData = '
                    <a onclick="ShowUser('.$users_data->id.')"  class="btn  btn-primary- btn-flat btn-sm">
                        <i class="fas fa-eye info"></i>
                    </a>
                    <a onclick="UserEdit('.$users_data->id.')" class="btn  btn-primary- btn-flat btn-sm">
                        <i class="fas fa-edit primary "></i>
                    </a>'; 
                    if( $users_data->id != Auth::user()->id ){                                
                    $actionData .= '
                    <a onclick="UserDelete('.$users_data->id.')" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                        <i class="far fa-trash-alt red"></i>
                    </a>';
                    }
                return $actionData;
            })->editColumn('us_name', function($users_data){
                if($users_data->us_name == 'Active'){
                    return "<span class='green'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Inactive'){
                    return "<span class='red'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Pending'){
                    return "<span class='blue'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Block'){
                    return "<span class='orange'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Unverified'){
                    return "<span class='yellow'>".$users_data->us_name."</span>";
                }
            })
            ->rawColumns(['action','us_name'])->make(true);       

       }/*endif*/

        //$users_v = view('admin.AuthManagement.User.users')->with('users', $users); 
        //return view('layouts.master_adminlte')->with('admin.AuthManagement.User.users', $users_v);        
        return view('admin.AuthManagement.User.users');
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
    public function store(Request $request, User $user)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required|min:3|max:20', 
            'email' => 'required|email|unique:users,email', 
            'role_id' => 'required', 
            'status_id' => 'required', 
            'password' => 'required|min:6|max:30',  //regex:/[@$!%*#?&]/  //confirmed
            'confirm_password' => 'required|same:password',
            'avatar' => 'file|max:1024|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]); //Validation errors
        }elseif($validator->passes()){
            $data =array();
            $data['name']=$request->name;
            $data['email']=$request->email;
            $data['role_id']=$request->role_id;
            $data['status_id']=$request->status_id;
            
            $data['password'] = Hash::make($request->password); //make hash password
            //$request['password'] = Hash::make($request->password); //make hash password
            //unset($request['confirm_password']); //unset confirm_password from send to database

            $image = $request->file('avatar');

            if($image){
                $upload_path = Config::get('constants.UserFliesPath'); // get form app/config/constants.php
                $new_image_name = NewImageName($image); //make New Image name using helper hulper
                $upload_image = UploadImageFile($image, $upload_path , $new_image_name ); //upload image using helper function
              
                //$request['avatar'] = $upload_path.$new_image_name;
                $data['avatar'] = $upload_path.$new_image_name;
                
                User::create($data); //*/
                //User::create($request->all()); //*/
                return response()->json(['success'=>'User inserted successfully ']);
                              
            }else{
                $data['avatar'] = null;
                //$request['avatar'] = null;
                User::create($data); //*/
                //User::create($request->all()); //*/
                return response()->json(['success'=>'User inserted successfully Without Image']);
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
            'name' => 'required|min:3|max:20', 
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
                //$data['password'] = $user->password; //Existing password from DB
                //$request['password'] = $user->password; //Existing password from DB
            }else{
                $data['password'] = Hash::make($request->password);
                //$request['password'] = Hash::make($request->password);
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
            /*$user = New User;
            $user->name =$request->name; 
            $user->save();*/
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
        $existing_image = User::select('avatar')->where('id', $id)->first();                   
        if( File::exists($existing_image->avatar) ) {  
            File::delete($existing_image->avatar); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        //users::destroy($id);
        $data = User::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

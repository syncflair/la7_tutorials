<?php

use App\User;
use App\Models\Role;
use App\Models\UserStatus;
use Illuminate\Support\Str; //for str::random


//All of this role id can access in Master Dashboard
//$RoleId = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 );
//print_r($RoleId);
function RoleId(){
	return $RoleId = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 );
}


//Use for Check Role Permission for Logged-in user 
function GetAuthUserRolePermission(){
  @$AuthenticateUserRolePermission = auth()->user()->role->permission->permission;
  $json_data_decode = json_decode($AuthenticateUserRolePermission);  
  return $json_data_decode;
  //dd($json_data_decode->role->add);

  //Use like that
  //GetAuthUserRolePermission()->role->page; 
  //GetAuthUserRolePermission()->role->add; 
  //GetAuthUserRolePermission()->role->edit;   
  //GetAuthUserRolePermission()->role->delete; 
  //GetAuthUserRolePermission()->role->view; 
}

//Show Auth User Name
function RoleName(){
	//$AuthUserId = Auth::user()->id;
	$users = User::where('users.id', Auth::user()->id )
			->select('users.id','roles.name as role_name')
            ->leftJoin('roles', 'roles.id', '=', 'users.role_id')
            ->first();
    return $users->role_name;
}

//User Avatar image url
function UserAvatar(){
  //return $AuthUserId = Auth::user()->id;
   $userAvatar = User::where('id', Auth::user()->id )->select('avatar')->first();
   return $userAvatar->avatar;
}

/*
  New image Name Generate
  $imageFile = Original Image file from imput ($request->file('files');)
*/
function NewImageName($imageFile){
  $random_name = Str::random(40); //generate random number //use 
  $extention = strtolower($imageFile->getClientOriginalExtension()); 
  return $newName =$random_name.'.'.$extention;
}

/*
  Upload Image Function.
  $imageFile = Original Image file from imput ($request->file('files');)
  $uploadPath = Where you want upload image
  $newImageName = if generate new image name using NewImageName($imageFile) function Or others or live blank
*/
function UploadImageFile($imageFile, $uploadPath, $NewImageName = Null ){
  if($NewImageName != null){
    $imageFile->move($uploadPath,$NewImageName); 
  }else{
    $imageFile->move($uploadPath,$imageFile); 
  }
}








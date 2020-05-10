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

function RoleName(){
	//$AuthUserId = Auth::user()->id;
	$users = User::where('users.id', Auth::user()->id )
			->select('users.id','roles.name as role_name')
            ->leftJoin('roles', 'roles.id', '=', 'users.role_id')
            ->first();
    return $users->role_name;
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








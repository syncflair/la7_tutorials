<?php

use App\User;
use App\Models\Role;
use App\Models\UserStatus;
use App\Models\Settings\Setting;
use Illuminate\Support\Str; //for str::random

use App\Models\Settings\OrganizationInfo;


//All of this role id can access in Master Dashboard
//$RoleId = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 );
//print_r($RoleId);
function RoleId(){
	return $RoleId = array(1, 2, 3, 4, 5, 6 );
}


//Use for Check Role Permission for Logged-in user 
function GetAuthUserRolePermission(){
   $AuthenticateUserRolePermission = auth()->user()->role->permission->permission;
   $json_data_decode = json_decode($AuthenticateUserRolePermission);  
   return $json_data_decode;
  //dd($json_data_decode->role->add);

  //Use like that
  //GetAuthUserRolePermission()->role->view; 
  //GetAuthUserRolePermission()->role->read; 
  //GetAuthUserRolePermission()->role->write;   
  //GetAuthUserRolePermission()->role->update; 
  //GetAuthUserRolePermission()->role->delete; 
}

//module like user, role, permission, sales, store, Report, customer, Supplier
// function isPermittedToPage($Module){
//   return @GetAuthUserRolePermission()->$Module->view != false ? true : false ;
// }
// function isPermittedToAdd($Module){
//   return @GetAuthUserRolePermission()->$Module->read != false ? true : false ;
// }
// function isPermittedToEdit($Module){
//   return @GetAuthUserRolePermission()->$Module->write != false ? true : false ;
// }
// function isPermittedToView($Module){
//   return @GetAuthUserRolePermission()->$Module->update != false ? true : false ;
// }
// function isPermittedToDelete($Module){  
//   return @GetAuthUserRolePermission()->$Module->delete != false ? true : false ;
// }


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


//Company Name
function OrganizationInformation(){
  //return $AuthUserId = Auth::user()->id;
   $OrgInfo = OrganizationInfo::where('id', 1 )->select('org_name', 'org_logo','org_url')->first();
   return $OrgInfo;//->org_name;
}

//System Settings
function systemSettingsAll(){
  $settings = Setting::with('belongsToLanguage','belongsToCurrency')->where(['id' => 1 ])->first();
  return $settings;
}
function systemSettingsGetResolution($searchKey){
  // $settings = Setting::where(['id' => 1])
  //               ->orWhere('image_resolution->img_module', 'LIKE',  '%'.$searchKey.'%')
  //               ->first();

  // $settings = Setting::where('json_test->img_module', 'LIKE',  '%'.$searchKey.'%')
  //               ->get(); 
  // return $settings;
  // $settings = Setting::whereJsonContains('image_resolution->img_module', ["user-img"])
  //             // ->select('json_test')
  //              ->first(); 

  $settings = Setting::withCount('image_resolution->img_module')->get();
  return $settings;

  //select * from `settings` where json_unquote(json_extract(`json_test`, '$."img_module"')) = 'user-img'
}







<?php

use app\user;


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

function UserStatus(){
	//$AuthUserId = Auth::user()->id;
	$users = User::get();
    //return $users->role_name;
    $data = '<select class="form-control" name="role_id">
              <option>Select Role ..</option>';
              foreach ($users as $user) {
              	$data .='<option value="'.$user->status_id.'"> '.$user->status_id.'</option>';
              }           
           
    $data .='</select>';

    return $data;
}

<?php /*My Custome Middleware for permissions*/

namespace App\Traits;

//use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route;

trait AuthPermission{

	public function checkRequestAuthPermission(){

		/*GetAuthUserRolePermission() call from helpers*/

		if( 
			@GetAuthUserRolePermission()->user->page == null &&  Route::is('user.index') ||
			@GetAuthUserRolePermission()->user->add == null &&  Route::is('user.create') ||
			@GetAuthUserRolePermission()->user->add == null &&  Route::is('user.store') ||
			@GetAuthUserRolePermission()->user->edit == null &&  Route::is('user.edit') ||
			@GetAuthUserRolePermission()->user->edit == null &&  Route::is('user.update') ||
			@GetAuthUserRolePermission()->user->view == null &&  Route::is('user.show') ||			
			@GetAuthUserRolePermission()->user->delete == null &&  Route::is('user.destroy') ||

			@GetAuthUserRolePermission()->role->page == null &&  Route::is('role.index') ||
			@GetAuthUserRolePermission()->role->add == null &&  Route::is('role.create') ||
			@GetAuthUserRolePermission()->role->add == null &&  Route::is('role.sotre') ||
			@GetAuthUserRolePermission()->role->edit == null &&  Route::is('role.edit') ||
			@GetAuthUserRolePermission()->role->edit == null &&  Route::is('role.update') ||
			@GetAuthUserRolePermission()->role->view == null &&  Route::is('role.show') ||
			@GetAuthUserRolePermission()->role->delete == null &&  Route::is('role.destroy') ||

			@GetAuthUserRolePermission()->permission->page == null &&  Route::is('permission.index') ||
			@GetAuthUserRolePermission()->permission->add == null &&  Route::is('permission.create') ||
			@GetAuthUserRolePermission()->permission->add == null &&  Route::is('permission.sotre') ||
			@GetAuthUserRolePermission()->permission->edit == null &&  Route::is('permission.edit') ||
			@GetAuthUserRolePermission()->permission->edit == null &&  Route::is('permission.update') ||
			@GetAuthUserRolePermission()->permission->view == null &&  Route::is('permission.show') ||
			@GetAuthUserRolePermission()->permission->delete == null &&  Route::is('permission.destroy') 
		)

		{
			return abort('403'); // 403 Logged in but access to requested area is forbidden

		}//*/


	}




}
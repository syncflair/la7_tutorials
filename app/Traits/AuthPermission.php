<?php /*My Custome Middleware for permissions*/

namespace App\Traits;

//use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route;

trait AuthPermission{

	public function checkRequestAuthPermission(){

		/*GetAuthUserRolePermission() call from helpers*/

		if( 
			@GetAuthUserRolePermission()->user->view == false &&  Route::is('user.index') ||
			@GetAuthUserRolePermission()->user->write == false &&  Route::is('user.create') ||
			@GetAuthUserRolePermission()->user->write == false &&  Route::is('user.store') ||
			@GetAuthUserRolePermission()->user->update == false &&  Route::is('user.edit') ||
			@GetAuthUserRolePermission()->user->update == false &&  Route::is('user.update') ||
			@GetAuthUserRolePermission()->user->view == false &&  Route::is('user.show') ||			
			@GetAuthUserRolePermission()->user->delete == false &&  Route::is('user.destroy') ||

			@GetAuthUserRolePermission()->role->view == false &&  Route::is('role.index') ||
			@GetAuthUserRolePermission()->role->write == false &&  Route::is('role.create') ||
			@GetAuthUserRolePermission()->role->write == false &&  Route::is('role.sotre') ||
			@GetAuthUserRolePermission()->role->update == false &&  Route::is('role.edit') ||
			@GetAuthUserRolePermission()->role->update == false &&  Route::is('role.update') ||
			@GetAuthUserRolePermission()->role->view == false &&  Route::is('role.show') ||
			@GetAuthUserRolePermission()->role->delete == false &&  Route::is('role.destroy') ||

			@GetAuthUserRolePermission()->permission->view == false &&  Route::is('permission.index') ||
			@GetAuthUserRolePermission()->permission->write == false &&  Route::is('permission.create') ||
			@GetAuthUserRolePermission()->permission->write == false &&  Route::is('permission.sotre') ||
			@GetAuthUserRolePermission()->permission->update == false &&  Route::is('permission.edit') ||
			@GetAuthUserRolePermission()->permission->update == false &&  Route::is('permission.update') ||
			@GetAuthUserRolePermission()->permission->view == false &&  Route::is('permission.show') ||
			@GetAuthUserRolePermission()->permission->delete == false &&  Route::is('permission.destroy') 
		)

		{
			return abort('403'); // 403 Logged in but access to requested area is forbidden

		}//*/


	}




}
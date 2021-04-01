<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'afc', 'namespace' => 'API\V1\Customer'],function(){ //afc = api for customer
	// Route::post('login', 'App\Http\Controllers\ApiAuthController@getPasswordGrantToken')->name('api.login');
	Route::post('/login', 'Auth\AuthCustomerController@login')->name('api.customer.login'); //http://domain.name/api/afc/login
	Route::post('/register', 'Auth\AuthCustomerController@register')->name('api.customer.register');
	Route::post('/refresh-token', 'Auth\AuthCustomerController@refreshPasswordGrantFristPartyToken')->name('api.customer.refresh.token');

	
}); //apply for all router with API/V1 name space


Route::group([ 'prefix' => 'afs', 'namespace' => 'API\V1\Supplier'],function(){ //afc = api for supplier
	Route::post('/login', 'Auth\AuthSupplierController@login')->name('api.supplier.login'); //http://domain.name/api/afs/login

}); //apply for all router with API/V1 namespace


/***************************************************************************/
/* API routes for customer - afc*/
/***************************************************************************/
Route::group([ 'middleware'=>['auth:api-customer'], 'prefix' => 'afc', 'namespace' => 'API\V1\Customer' ], function(){

	Route::post('/logout', 'Auth\AuthCustomerController@logout')->name('api.customer.logout'); //http://domain.name/api/afc/logout


	// Route::get('/customer', 'AdminCustomer\AdminCustomerController@getUser');
	Route::get('/getAuthCustomerData', 'AdminCustomer\AdminCustomerController@getAuthCustomerData');//AuthenticationForWebsite.js
	Route::get('/getAuthCustomerAddress', 'AdminCustomer\AdminCustomerAddressController@getAuthCustomerAddress');


	Route::post('/CustomerProfileUpdate', 'AdminCustomer\AdminCustomerProfileUpdateController@CustomerProfileUpdate');
	Route::post('/SendCustomerEmailChangeVerificationCode', 'AdminCustomer\AdminCustomerProfileUpdateController@SendCustomerEmailChangeVerificationCode'); 
  	Route::post('/CustomerChangeEmail', 'AdminCustomer\AdminCustomerProfileUpdateController@CustomerChangeEmail');
  	Route::post('/CancelChangeEmail', 'AdminCustomer\AdminCustomerProfileUpdateController@CancelChangeEmail');
  	Route::post('/SendCustomerPhoneChangeVerificationCode', 'AdminCustomer\AdminCustomerProfileUpdateController@SendCustomerPhoneChangeVerificationCode'); 
  	Route::post('/CustomerChangePhone', 'AdminCustomer\AdminCustomerProfileUpdateController@CustomerChangePhone');
  	Route::post('/CancelChangePhone', 'AdminCustomer\AdminCustomerProfileUpdateController@CancelChangePhone');

    Route::post('/CustomerChangePassword', 'AdminCustomer\AdminCustomerProfileUpdateController@CustomerChangePassword');
	
	Route::resource('/my-address', 'AdminCustomer\AdminCustomerAddressController',
    ['except'=>['index','create','show','edit'] ]);

	Route::resource('/my-orders', 'AdminCustomer\AdminCustomerOrdersController',
    ['except'=>['index','create','show','edit','update'] ]);
	
});//end customer api route


/***************************************************************************/
/* API routes for Supplier - afs */
/***************************************************************************/
Route::group(['middleware'=>['auth:api-supplier'], 'prefix' => 'afs', 'namespace' => 'API\V1\supplier' ], function(){

	Route::post('/logout', 'Auth\AuthSupplierController@logout')->name('api.supplier.logout'); //http://domain.name/api/afs/logout


});//end supplier api route


/***************************************************************************/
/* API routes for public without Authentication, that also use for website or Apps*/
/***************************************************************************/
Route::group([ 'namespace' => 'API/V1/public' ], function(){


});//end public api route without authetication




//default
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api-customer')->get('/customer', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api-supplier')->get('/supplier', function (Request $request) {
    return $request->user();
});



// Route::group(['middleware' => 'auth:api'], function(){
//  Route::post('admin/get-details', 'API\Admin\AdminController@getDetails');
// });


// Route::get('/get-token', function (Request $request) {


//     // return $request->user();
//     	$response = Http::withHeaders([
//              		// 'Accept' => 'application/json',
//              		'Content-Type' => 'application/json',
// 				])
//     			// ->asForm()
//     			->post('http://192.168.0.100:8001/oauth/token', [
// 				    'grant_type' => 'password',
// 				    'client_id' => '3',
// 				    'client_secret' => 'ruWeZBqWZJVNox3svkeTvjSW70xNkEvBmTlYoA9C',
// 				    'username' => 'test@gmail.com',
// 				    'password' => 'Pass1234',
// 				    'scope' => '',			
// 				]
// 			);

// 			// return $response->json();
// 			return response()->json($response);
//     // dd($response);
//     //return response()->json('ok');
// });







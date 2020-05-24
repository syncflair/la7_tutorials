<?php

/*Enable Query Log to check raw sql query*/
DB::listen(function($sql) {
   //print_r($sql->sql);   
    //print_r($sql->time);
});
//print_r( RoleId() );
//echo \Config::get('constants.CommonFilesPath'); //get constants from app/config/constants.php

//use Illuminate\Support\Facades\Route;

//use App\Mail\ContactUsMail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/








//Auth::routes(); //Default Laravel
//Auth::routes(['register' => false ]); //disable Register route. No one can register to this site any more.
Auth::routes([
  //'register' => false,  //disable Register route. No one can register to this site any more.
  //'reset' => false, //disable password Reset function. No one can reset password to this site any more.
  'verify' => true  //Enable Email verification function.
]);//*/

Route::group(['middleware'=>['admin','auth','AuthPermission','verified'] ], function() {

  // Route::fallback(function() {
  //     return response()->json(['message' => 'Not Found!'], 404);
  // });


  
  /*Vue Route*/
    Route::get('spa/unactive-category/{id}', 'Admin\Category\CategoryController@unactiveCategory');
    Route::get('spa/active-category/{id}', 'Admin\Category\CategoryController@activeCategory');
    Route::get('spa/search-category', 'Admin\Category\CategoryController@searchCategory');
    Route::get('spa/parent-category', 'Admin\Category\CategoryController@getParentCategory');
    Route::get('spa/count-category', 'Admin\Category\CategoryController@countCategory');
    Route::resource('spa/category', 'Admin\Category\CategoryController', 
      ['except' => ['edit', 'show', 'create'] ] ); 

    Route::get('spa/unactive-product/{id}', 'Admin\Product\ProductController@unactiveProduct');
    Route::get('spa/active-product/{id}', 'Admin\Product\ProductController@activeProduct');
    Route::get('spa/search-product', 'Admin\Product\ProductController@searchProduct'); 
    Route::get('spa/count-product', 'Admin\product\ProductController@countProduct');   
    Route::resource('spa/product', 'Admin\Product\ProductController', 
        ['except'=>['edit','show','create','store','update'] ]);

    // Vue: single page application (SPA)- Anything that not match that redirect to dashboard. combine vue route and laravel rourte. Best way place this route to last of the line 
   // Route::get('/spa/{path}', 'Admin\AdminController@index')->where('path', '([A-z\d-\/_.]+)?' );    
    //Route::get('/spa/{path}', 'Admin\AdminController@index')->where('path', '.*' ); 
    
  /*End Vue Route*/

    Route::get('/spa/{path?}', function () {
      return view('admin.dashboard');
      //return response()->view('admin.dashboard');
      //return redirect('admin.dashboard');  
    })->where(['path' => '([A-z\d-/_.]+)?'] );  //[-a-z0-9_\s]+
   


    Route::get('dashboard', 'Admin\AdminController@index')->name('dashboard');

    Route::get('/user-verify/{user_id}', 'Admin\AuthManagement\UserController@user_verify');
    Route::get('/user-unactive/{user_id}', 'Admin\AuthManagement\UserController@user_unactive');
    Route::get('/user-active/{user_id}', 'Admin\AuthManagement\UserController@user_active');
    Route::resource('user', 'Admin\AuthManagement\UserController');

    Route::resource('profile', 'Admin\AuthManagement\ProfileController');

    Route::get('/role-unactive/{role_id}', 'Admin\AuthManagement\RoleController@role_unactive');
    Route::get('/role-active/{role_id}', 'Admin\AuthManagement\RoleController@role_active');  
    Route::resource('role', 'Admin\AuthManagement\RoleController');

    Route::resource('permission', 'Admin\AuthManagement\PermissionController');

    


});

Route::group(['middleware'=>['user','auth','AuthPermission','verified'] ], function(){

    Route::get('home', 'HomeController@index')->name('home');

});



//Website Routes Link
Route::get('contact-us', 'Website\ContactUsController@index')->name('contact-us');
Route::post('send-message-query', 'Website\ContactUsController@sendMessageQuery')->name('send-message-query');




Route::get('/', function () {
    return view('welcome'); 
   // return view('auth.login'); //redirect to login page    
});
Route::get('email-chek', function () {
  //return view('emails.contact_us_email'); 
  return new ContactUsMail();
  //return new UserNotification();
   // return view('emails.user_notification'); 
   // return view('auth.login'); //redirect to login page    
});


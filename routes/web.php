<?php

/*Enable Query Log to check raw sql query*/
DB::listen(function($sql) {
   //print_r($sql->sql); 
   //dd($sql->sql);
    //print_r($sql->time);
});
//print_r( RoleId() );
//echo \Config::get('constants.CommonFilesPath'); //get constants from app/config/constants.php
//use Illuminate\Support\Facades\Route;
//use App\Mail\ContactUsMail;

// Route::get('/', function () {
//     App::setLocale('bn');
//     return view('welcome'); 
//    // return view('auth.login'); //redirect to login page    
// });
Route::get('email-chek', function () {
  //return view('emails.contact_us_email'); 
  return new ContactUsMail();
  //return new UserNotification();
   // return view('emails.user_notification'); 
   // return view('auth.login'); //redirect to login page    
});


Route::get('confirmation', function () { return view('auth.confirmation'); });
/**************************************** Auth routes *************************************************/
//Auth::routes(); //Default Laravel
//Auth::routes(['register' => false ]); //disable Register route. No one can register to this site any more.
Auth::routes([
  //'register' => false,  //disable Register route. No one can register to this site any more.
  //'reset' => false, //disable password Reset function. No one can reset password to this site any more.
  'verify' => true  //Enable Email verification function.
]);//*/


/**************************************** Admin middleware *****************************************************/
Route::group(['middleware'=>['admin','auth','AuthPermission','verified'] ], function() {
  // Route::fallback(function() {
  //     return response()->json(['message' => 'Not Found!'], 404);
  // });
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

    /*********************************************Vue Route****************************************************/


    Route::resource('spa/OrgInfo', 'Admin\Settings\OrganizationInfoController', 
      ['except'=>['index','create','store','show','destroy'] ]);
    Route::resource('spa/Branch-Info', 'Admin\Settings\BranchInfoController');
    Route::resource('spa/Currency-Info', 'Admin\Settings\CurrencyController');



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


    //testing route
    Route::post('spa/save-multi-field', 'Admin\MultiComponent\MultiComponentController@saveMultiField');
    Route::get('spa/testQuery', 'Admin\MultiComponent\MultiComponentController@testQuery');
    Route::get('spa/searchCategoryData', 'Admin\MultiComponent\MultiComponentController@searchCategoryData');
    Route::get('spa/getCatList/{id}', 'Admin\MultiComponent\MultiComponentController@CategoryListById');
    Route::resource('spa/MultiComponent', 'Admin\MultiComponent\MultiComponentController'); 
    /**********************************************End Vue Route *************************************************/

    
 

    // Vue: single page application (SPA)- Any route that not match that redirect to dashboard. combine vue route and laravel rourte. Best way place this route to last of the line    
    //Route::get('/spa/{path}', 'Admin\AdminController@index')->where('path', '.*' ); 
    Route::get('/spa/{anypath}', function () {
      return view('admin.dashboard'); 
    })->where(['anypath' => '([A-z\d-/_.]+)?'] );

});
/**************************************** End Admin middleware *****************************************************/

/**************************************** User middleware *****************************************************/
Route::group(['middleware'=>['user','auth','AuthPermission','verified'] ], function(){

    Route::get('home', 'HomeController@index')->name('home');

});
/****************************************end User middleware **************************************************/





/****************************************Website Routes Link *****************************************************/



// Route::get('/', function () { 
//   if(session()->has('locale')){
//     App::setLocale(session('locale'));
//     return view('welcome'); 
//   }else{
//     session()->put('locale', 'en');
//     return view('welcome');
//   }   
// });
// Route::get('/', function () {
//     return redirect(app()->getLocale());
// });
Route::redirect('/','/en');
Route::group(['prefix'=>'{locale}', 'where'=>['locale' => '[a-zA-Z]{2}'], 'middleware'=>'SetLanguage'], function(){
//Route::group(['prefix' => '{locale}'], function(){
  
  Route::get('/', function () {
    //App::setLocale('bn'); //app()->getLocale()
    return view('welcome');    
  });

  Route::get('/contact-us', 'Website\ContactUsController@index')->name('contact-us');
  Route::get('/auth-check', 'Website\AuthCheckController@index')->name('auth-check');
  Route::fallback(function(){ return 'No data'; });

});

//Route::get('/{locale}', 'SetLanguageController@index'); //use this route after localization middleware

Route::post('send-message-query', 'Website\ContactUsController@sendMessageQuery')->name('send-message-query');

/****************************************End Website Routes Link *************************************************/



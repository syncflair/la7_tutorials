<?php
//print_r(systemSettingsAll()->image_resolution[0]);
//print_r(systemSettingsGetResolution('user-img'));



//testQuery();
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

Route::get('email-temp', function () {
   return view('layouts.EmailLayoutConfirmation.email_master');  
});


//customers Route
// Route::get('customer/login', 'AuthCustomer\LoginController@showLoginForm')->name('customer.login');
Route::get('/auth/login', 'AuthCustomer\LoginController@showLoginForm')->name('customer.login');
Route::post('customer/login', 'AuthCustomer\LoginController@login')->name('customer.login');
Route::get('customer/register', 'AuthCustomer\RegisterController@showRegisterForm')->name('customer.register');
Route::post('customer/register', 'AuthCustomer\RegisterController@register')->name('customer.register');
Route::get('/customer/verify/{token}', 'AuthCustomer\RegisterController@verifyUser'); //customer verification route 
// Password Reset Routes for customers
// Route::get('customer/password/reset','AuthCustomer\ForgotPasswordController@showLinkRequestForm')->name('customer.password.request');
Route::get('/auth/password-recover','AuthCustomer\ForgotPasswordController@showLinkRequestForm')->name('customer.password.request');
Route::post('customer/password/email','AuthCustomer\ForgotPasswordController@sendResetLinkEmail')->name('customer.password.email');
// Route::get('customer/password/reset/{token}','AuthCustomer\ResetPasswordController@showResetForm')->name('customer.password.reset');
Route::get('/auth/password-recover/{token}','AuthCustomer\ResetPasswordController@showResetForm')->name('customer.password.reset');
Route::post('customer/password/reset','AuthCustomer\ResetPasswordController@reset')->name('customer.password.update');



//Suppliers Route
Route::get('supplier/login', 'AuthSupplier\LoginController@showLoginForm')->name('supplier.login');
Route::post('supplier/login', 'AuthSupplier\LoginController@login')->name('supplier.login');
// Password Reset Routes for customers
Route::get('supplier/password/reset','AuthSupplier\ForgotPasswordController@showLinkRequestForm')->name('supplier.password.request');
Route::post('supplier/password/email','AuthSupplier\ForgotPasswordController@sendResetLinkEmail')->name('supplier.password.email');
Route::get('supplier/password/reset/{token}','AuthSupplier\ResetPasswordController@showResetForm')->name('supplier.password.reset');
Route::post('supplier/password/reset','AuthSupplier\ResetPasswordController@reset')->name('supplier.password.update');



Route::group(['middleware'=>['AdminCustomer','auth:customer'] ], function(){
    // Route::get('/dashboard-customer', 'AdminCustomer\AdminCustomerController@index')->name('dashboard-customer');
    Route::get('auth/customer-dashboard', 'AdminCustomer\AdminCustomerController@index')->name('customer-dashboard');
    Route::post('customer/logout', 'AuthCustomer\LoginController@logout')->name('customer.logout');

     // Vue: single page application (SPA)- Any route that not match that redirect to dashboard-customer. 
    // Route::get('/spac/{anypath}', function () {
    //   return view('adminCustomer.DashboardCustomer'); 
    // })->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);

    Route::get('/auth/{anypath}', function () {
      return view('website.home'); 
    })->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);

});


Route::group(['middleware'=>['AdminSupplier','auth:supplier'] ], function(){
    Route::get('/dashboard-supplier', 'AdminSupplier\AdminSupplierController@index')->name('dashboard-supplier');
    Route::post('supplier/logout', 'AuthSupplier\LoginController@logout')->name('supplier.logout');

    // Vue: single page application (SPA )- Any route that not match that redirect to dashboard-supplier. 
    Route::get('/spas/{anypath}', function () {
      return view('adminSupplier.DashboardSupplier'); 
    })->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);
});




Route::get('confirmation', function () { return view('auth.confirmation'); });  //confirmation page
/**************************************** Auth routes *************************************************/
//Route::get('login123', 'Auth\LoginController@showLoginForm')->name('login');
//Auth::routes(); //Default Laravel
//Auth::routes(['register' => false ]); //disable Register route. No one can register to this site any more.
Auth::routes([
  //'register' => false,  //disable Register route. No one can register to this site any more.
  //'reset' => false, //disable password Reset function. No one can reset password to this site any more.
  'verify' => true  //Enable Email verification function.
]);//*/












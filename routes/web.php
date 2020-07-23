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

Route::get('email-temp', function () {
   return view('layouts.EmailLayoutConfirmation.email_master');  
});

//customers Route
Route::get('customer/login', 'AuthCustomer\LoginController@showLoginForm')->name('customer.login');
Route::post('customer/login', 'AuthCustomer\LoginController@login')->name('customer.login');
Route::get('customer/register', 'AuthCustomer\RegisterController@showRegisterForm')->name('customer.register');
Route::post('customer/register', 'AuthCustomer\RegisterController@register')->name('customer.register');
Route::get('/customer/verify/{token}', 'AuthCustomer\RegisterController@verifyUser'); //customer verification route 
// Password Reset Routes for customers
Route::get('customer/password/reset','AuthCustomer\ForgotPasswordController@showLinkRequestForm')->name('customer.password.request');
Route::post('customer/password/email','AuthCustomer\ForgotPasswordController@sendResetLinkEmail')->name('customer.password.email');
Route::get('customer/password/reset/{token}','AuthCustomer\ResetPasswordController@showResetForm')->name('customer.password.reset');
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
   Route::get('/dashboard-customer', 'AdminCustomer\AdminCustomerController@index')->name('dashboard-customer');
   Route::post('customer/logout', 'AuthCustomer\LoginController@logout')->name('customer.logout');
});

Route::group(['middleware'=>['AdminSupplier','auth:supplier'] ], function(){
    Route::get('/dashboard-supplier', 'AdminSupplier\AdminSupplierController@index')->name('dashboard-supplier');
    Route::post('supplier/logout', 'AuthSupplier\LoginController@logout')->name('supplier.logout');
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


/**************************************** Admin middleware *****************************************************/
//Route::group(['middleware'=>['admin','auth','AuthPermission','verified'] ], function() {
Route::group(['middleware'=>['admin','auth','AuthPermission','verified'] ], function() {
//Route::group(['middleware'=>['admin','auth','verified'] ], function() {

  // Route::fallback(function() {
  //     return response()->json(['message' => 'Not Found!'], 404);
  // });
  //Ajax Query User Role Permission Route
  Route::get('dashboard', 'Admin\AdminController@index')->name('dashboard');
  Route::get('/user-verify/{user_id}', 'Admin\AuthManagement\UsersController@user_verify');
  Route::get('/user-unactive/{user_id}', 'Admin\AuthManagement\UsersController@user_unactive');
  Route::get('/user-active/{user_id}', 'Admin\AuthManagement\UsersController@user_active');
  Route::resource('user', 'Admin\AuthManagement\UsersController');
  Route::resource('profile', 'Admin\AuthManagement\ProfileController');
  Route::get('/role-unactive/{role_id}', 'Admin\AuthManagement\RolesController@role_unactive');
  Route::get('/role-active/{role_id}', 'Admin\AuthManagement\RolesController@role_active');  
  Route::resource('role', 'Admin\AuthManagement\RolesController');
  Route::resource('permission', 'Admin\AuthManagement\PermissionsController');

    /*********************************************Vue Route****************************************************/
    
    //Admin Users Role Permission Control Route
    Route::resource('spa/Users-Info', 'Admin\AuthManagement\UserController');
    Route::get('spa/searchUsersData', 'Admin\AuthManagement\UserController@search'); //search
    Route::post('spa/Users-Info/verify-by-admin/{id}', 'Admin\AuthManagement\UserController@verify_by_admin');
    Route::post('spa/Users-Info/active-user/{id}', 'Admin\AuthManagement\UserController@active_user');
    Route::post('spa/Users-Info/inactive-user/{id}', 'Admin\AuthManagement\UserController@inactive_user');
    Route::resource('spa/Roles-Info', 'Admin\AuthManagement\RoleController',
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/Role-Info/GetRoles', 'Admin\AuthManagement\RoleController@GetRoles');//commonStoreForAll store
    Route::resource('spa/Permissions-Info', 'Admin\AuthManagement\PermissionController');


    //Customer control Route For Admin Dashboard
    Route::get('spa/searchCustomerData', 'Admin\Customer\CustomerController@search'); //search
    Route::post('spa/customer-change-notify/{id}/{notifyValue}', 'Admin\Customer\CustomerController@ChangeNotify');
    Route::post('spa/customer-verify-by-admin/{id}', 'Admin\Customer\CustomerController@verifiedByAdmin');
    Route::post('spa/customer-Info/active-customer/{id}', 'Admin\Customer\CustomerController@active_customer');
    Route::post('spa/customer-Info/inactive-customer/{id}', 'Admin\Customer\CustomerController@inactive_customer');
    Route::resource('spa/customer-Info', 'Admin\Customer\CustomerController',
      ['except'=>['create','show','edit'] ]);

    //Supplier control Route For Admin Dashboard
    Route::get('spa/searchSupplierData', 'Admin\Supplier\SupplierController@search'); //search
    Route::post('spa/supplier-change-notify/{id}/{notifyValue}', 'Admin\Supplier\SupplierController@ChangeNotify');
    Route::post('spa/supplier-verify-by-admin/{id}', 'Admin\Supplier\SupplierController@verifiedByAdmin');
    Route::post('spa/supplier-Info/active-supplier/{id}', 'Admin\Supplier\SupplierController@active_supplier');
    Route::post('spa/supplier-Info/inactive-supplier/{id}', 'Admin\Supplier\SupplierController@inactive_supplier');
    Route::resource('spa/supplier-Info', 'Admin\Supplier\SupplierController',
     ['except'=>['create','show','edit'] ]);

    //Catalog
    //Route::get('spa/searcCategoryMasterData', 'Admin\Catalog\CategoryController@search'); //search
    Route::resource('spa/CategoryMaster-Info', 'Admin\Catalog\CategoryController', 
      ['except'=>['create','show','edit'] ]);



    //Accounting
    Route::get('spa/searchChartOfAccountsData', 'Admin\Accounting\ChartOfAccountsController@search'); //search
    Route::resource('spa/ChartOfAccounts-Info', 'Admin\Accounting\ChartOfAccountsController', 
      ['except'=>['create','show','edit'] ]);

    //HRM
    Route::get('spa/searchEmployeeData', 'Admin\HRM\EmployeeController@search'); //search
    Route::resource('spa/Employee-Info', 'Admin\HRM\EmployeeController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/JobTitle-Info/GetJobTitles', 'Admin\HRM\JobTitleController@GetJobTitles'); //for commonStoreForAll store
    Route::resource('spa/JobTitle-Info', 'Admin\HRM\JobTitleController', 
      ['except'=>['create','show','edit'] ]);

    //Settings Rute
    Route::resource('spa/user-status-info', 'Admin\Settings\UserStatusController',
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/OrgInfo', 'Admin\Settings\OrganizationInfoController', 
      ['except'=>['index','create','store','show','destroy'] ]);
    Route::get('spa/searhBaranchInfoData', 'Admin\Settings\BranchInfoController@search'); //search
    Route::get('spa/Branch-Info/getBranches', 'Admin\Settings\BranchInfoController@getBranches'); //for commonStoreForAll store
    Route::resource('spa/Branch-Info', 'Admin\Settings\BranchInfoController', 
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/Currency-Info', 'Admin\Settings\CurrencyController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/Language-Info/getLanguages', 'Admin\Settings\LanguageController@getLanguages');//commonStoreForAll store
    Route::resource('spa/Language-Info', 'Admin\Settings\LanguageController', 
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/LengthUnit-Info', 'Admin\Settings\LengthUnitController', 
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/WeightUnit-Info', 'Admin\Settings\WeightUnitController', 
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/PackageUnit-Info', 'Admin\Settings\PackageUnitController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/searchVatRateData', 'Admin\Settings\VatRateController@search'); //search
    Route::resource('spa/VatRate-Info', 'Admin\Settings\VatRateController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/searchStatusMasterData', 'Admin\Settings\StatusMasterController@search'); //search
    Route::resource('spa/StatusMaster-Info', 'Admin\Settings\StatusMasterController', 
      ['except'=>['create','show','edit'] ]);
    Route::resource('spa/PaymentMethod-Info', 'Admin\Settings\PaymentMethodController', 
      ['except'=>['create','show','edit'] ]);

    Route::get('spa/searchCountryData', 'Admin\Settings\CountryController@search'); //search
    Route::get('spa/Country-Info/GetCountry', 'Admin\Settings\CountryController@GetCountry'); //for commonStoreForAll store
    Route::resource('spa/Country-Info', 'Admin\Settings\CountryController', 
      ['except'=>['create','show','edit'] ]);
    
    Route::get('spa/searchDivisionData', 'Admin\Settings\DivisionController@search'); //search
    Route::get('spa/Division-Info/GetDivision', 'Admin\Settings\DivisionController@GetDivision'); //for commonStoreForAll store
    Route::resource('spa/Division-Info', 'Admin\Settings\DivisionController', 
      ['except'=>['create','show','edit'] ]);

    Route::get('spa/searchDistrictData', 'Admin\Settings\DistrictController@search'); //search
    Route::get('spa/District-Info/GetDistrict', 'Admin\Settings\DistrictController@GetDistrict'); //for commonStoreForAll store
    Route::resource('spa/District-Info', 'Admin\Settings\DistrictController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/searchDistrictZoneData', 'Admin\Settings\DistrictZoneController@search'); //search
    Route::get('spa/DistrictZone-Info/GetDistrictZone', 'Admin\Settings\DistrictZoneController@GetDistrictZone'); //for commonStoreForAll store
    Route::resource('spa/DistrictZone-Info', 'Admin\Settings\DistrictZoneController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/searchDepartmentData', 'Admin\Settings\DepartmentController@autoSearch'); //search
    Route::get('spa/Department-Info/getDetartments', 'Admin\Settings\DepartmentController@getDetartments');//commonStoreForAll store
    Route::resource('spa/Department-Info', 'Admin\Settings\DepartmentController');



    //Start Demo
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
    //End Deomo
    /**********************************************End Vue Route *************************************************/   
 
    // Vue: single page application (SPA)- Any route that not match that redirect to dashboard. combine vue route and laravel rourte. Best way place this route to last of the line    
    //Route::get('/spa/{path}', 'Admin\AdminController@index')->where('path', '.*' ); 
    Route::get('/spa/{anypath}', function () {
      return view('admin.dashboard'); 
    })->where(['anypath' => '([A-z\d-/_.]+)?'] );

});
/**************************************** End Admin middleware *****************************************************/

/**************************************** Admin Supervisor middleware *************************************************/
Route::group(['middleware'=>['AdminSupervisor','auth','verified'] ], function(){

    Route::get('dashboard-supervisor', 'AdminSupervisor\AdminSupervisorController@index')->name('dashboard-supervisor');

});
/****************************************end Admin Supervisor middleware ***********************************************/

/**************************************** Admin Delivery middleware ***************************************************/
Route::group(['middleware'=>['AdminDelivery','auth','verified'] ], function(){

    Route::get('dashboard-delivery', 'AdminDelivery\AdminDeliveryController@index')->name('dashboard-delivery');

});
/****************************************end Admin Delivery middleware ***********************************************/

/**************************************** Admin Store middleware ***************************************************/
Route::group(['middleware'=>['AdminStorage','auth','verified'] ], function(){

    Route::get('dashboard-storage', 'AdminStorage\AdminStorageController@index')->name('dashboard-storage');

});
/****************************************end Admin Store middleware ***********************************************/

/**************************************** Admin Order middleware ***************************************************/
Route::group(['middleware'=>['AdminOrder','auth','verified'] ], function(){

    Route::get('dashboard-order', 'AdminOrder\AdminOrderController@index')->name('dashboard-order');

});
/****************************************end Admin Order middleware ***********************************************/

/**************************************** Admin Packaging middleware ***************************************************/
Route::group(['middleware'=>['AdminPackaging','auth','verified'] ], function(){

    Route::get('dashboard-packaging', 'AdminPackaging\AdminPackagingController@index')->name('dashboard-packaging');

});
/****************************************end Admin Packaging middleware ***********************************************/

/**************************************** Admin Sales middleware ***************************************************/
Route::group(['middleware'=>['AdminSales','auth','verified'] ], function(){

    Route::get('dashboard-sales', 'AdminSales\AdminSalesController@index')->name('dashboard-sales');

});
/****************************************end Admin Sales middleware ***********************************************/

/**************************************** Admin Purchase middleware ***************************************************/
Route::group(['middleware'=>['AdminPurchase','auth','verified'] ], function(){

    Route::get('dashboard-purchase', 'AdminPurchase\AdminPurchaseController@index')->name('dashboard-purchase');

});
/****************************************end Admin Sales middleware ***********************************************/

/**************************************** Guest User middleware ***************************************************/
Route::group(['middleware'=>['GuestUser','auth','verified'] ], function(){

    Route::get('dashboard-guest-user', 'GuestUser\GuestUserController@index')->name('dashboard-guest-user');

});
/****************************************end Admin Sales middleware ***********************************************/

/****************************************Website Routes Link *****************************************************/



// Route::get('/supplier', function () { return view('layouts.AdminSupplierLayout.master_template'); });
// Route::get('/customer', function () { return view('layouts.AdminCustomerLayout.master_template'); });




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



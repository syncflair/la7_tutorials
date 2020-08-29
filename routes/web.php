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
    Route::post('spa/Users-Info-DeleteImage/{id}', 'Admin\AuthManagement\UserController@DeleteImage');
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

    Route::get('spa/customerGroup-Info/getCustomerGroup', 'Admin\Customer\CustomerGroupController@getCustomerGroup');//commonStoreForAll store  
    Route::resource('spa/customerGroup-Info', 'Admin\Customer\CustomerGroupController',
      ['except'=>['create','show','edit'] ]);


    //Supplier control Route For Admin Dashboard
    Route::get('spa/AutoCompleteSupplierData', 'Admin\Supplier\SupplierController@AutoCompleteSupplierForStore'); //commonStoreForAll store
    Route::get('spa/searchSupplierData', 'Admin\Supplier\SupplierController@search'); //search
    Route::post('spa/supplier-change-notify/{id}/{notifyValue}', 'Admin\Supplier\SupplierController@ChangeNotify');
    Route::post('spa/supplier-verify-by-admin/{id}', 'Admin\Supplier\SupplierController@verifiedByAdmin');
    Route::post('spa/supplier-Info/active-supplier/{id}', 'Admin\Supplier\SupplierController@active_supplier');
    Route::post('spa/supplier-Info/inactive-supplier/{id}', 'Admin\Supplier\SupplierController@inactive_supplier');
    Route::post('spa/Supplier-Info-DeleteImage/{id}', 'Admin\Supplier\SupplierController@DeleteImage');
    Route::resource('spa/supplier-Info', 'Admin\Supplier\SupplierController',
     ['except'=>['create','show','edit'] ]);

    Route::post('spa/getSelectedBrandShop/', 'Admin\Supplier\BrandShopController@getSelectedBrandShop');
    Route::get('spa/AutoCompleteBrandShopData', 'Admin\Supplier\BrandShopController@autoCompleteSearch'); //search
    Route::get('spa/searchBrandShopData', 'Admin\Supplier\BrandShopController@search'); //search
    Route::get('spa/BrandShop-Info/getBrandShops', 'Admin\Supplier\BrandShopController@getBrandShops');//commonStoreForAll store 
    Route::post('spa/BrandShop-Info-DeleteImage/{id}', 'Admin\Supplier\BrandShopController@DeleteImage');
    Route::resource('spa/BrandShop-Info', 'Admin\Supplier\BrandShopController',
      ['except'=>['create','show','edit'] ]);


    Route::post('spa/getSelectedVendorList/', 'Admin\Supplier\VendorController@selectedVendortList');//get multiple data
    Route::post('spa/getSelectedVendor/', 'Admin\Supplier\VendorController@getSelectedVendor');// get single
    Route::get('spa/AutoCompleteVendorData', 'Admin\Supplier\VendorController@autoCompleteSearch'); //Auto Complete
    Route::post('spa/Vendor-Info/change-notify/{id}/{notifyValue}', 'Admin\Supplier\VendorController@ChangeNotify');
    Route::post('spa/Vendor-Info/active-vendor/{id}', 'Admin\Supplier\VendorController@activeVendor');
    Route::post('spa/Vendor-Info/inactive-vendor/{id}', 'Admin\Supplier\VendorController@inactiveVendor');
    Route::get('spa/searchVendorData', 'Admin\Supplier\VendorController@search'); //search
    Route::post('spa/Vendor-Info-DeleteImage/{id}', 'Admin\Supplier\VendorController@DeleteImage');
    Route::resource('spa/Vendor-Info', 'Admin\Supplier\VendorController',
      ['except'=>['create','show','edit'] ]);

    //Catalog
    Route::get('spa/AutoCompleteCategoryData', 'Admin\Catalog\CategoryController@autoCompleteCategoryForStore');//commonStoreForAll
    Route::get('spa/CategoryMaster-Info/getCategory', 'Admin\Catalog\CategoryController@getCategory');//for commonStoreForAll store    
    Route::resource('spa/CategoryMaster-Info', 'Admin\Catalog\CategoryController', 
      ['except'=>['create','show','edit'] ]);

    Route::post('spa/getSelectedProduct/', 'Admin\Catalog\ProductController@getSelectedProduct');// get single
    Route::post('spa/Product-getCategoryList/', 'Admin\Catalog\ProductController@selectedCategoryList');
    Route::post('spa/Product-getSupplierList/', 'Admin\Catalog\ProductController@selectedSupplierList');
    Route::post('spa/Product-getProductList/', 'Admin\Catalog\ProductController@selectedProductList');
    Route::get('spa/AutoCompleteProductData', 'Admin\Catalog\ProductController@AutoCompleteProductForStore'); //search 
    Route::post('spa/Product-DeleteImage/{id}', 'Admin\Catalog\ProductController@DeleteImage');
    Route::get('spa/searchProductData', 'Admin\Catalog\ProductController@search'); //search          
    Route::resource('spa/Product-Info', 'Admin\Catalog\ProductController', 
        ['except'=>['create','edit','show'] ]);

    Route::get('spa/Attribute-Info/GetAttributes', 'Admin\Catalog\AttributeController@GetAttributes');//for commonStoreForAll store       
    Route::resource('spa/Attribute-Info', 'Admin\Catalog\AttributeController', 
        ['except'=>['create','edit','show'] ]);
    Route::get('spa/AttributeValue-Info/GetAttributeValue', 'Admin\Catalog\AttributeValueController@GetAttributeValue');//commonStoreForAll store
    Route::get('spa/searchAttributeValueData', 'Admin\Catalog\AttributeValueController@search'); //search     
    Route::resource('spa/AttributeValue-Info', 'Admin\Catalog\AttributeValueController', 
        ['except'=>['create','edit','show'] ]);

    Route::get('spa/Specification-Info/getSpecification', 'Admin\Catalog\SpecificationController@getSpecification'); //search 
    Route::get('spa/searchSpecificationData', 'Admin\Catalog\SpecificationController@search'); //search 
    Route::resource('spa/Specification-Info', 'Admin\Catalog\SpecificationController', 
        ['except'=>['create','edit','show'] ]);

    Route::post('spa/getSelectedBrand/', 'Admin\Catalog\BrandController@getSelectedBrand');// get single
    Route::get('spa/AutoCompleteBrandData', 'Admin\Catalog\BrandController@autoCompleteSearch'); //Auto Complete
    Route::get('spa/Brand-Info/getBrands', 'Admin\Catalog\BrandController@getBrands');//for commonStoreForAll store  
    Route::get('spa/searchBrandData', 'Admin\Catalog\BrandController@search'); //search     
    Route::resource('spa/Brand-Info', 'Admin\Catalog\BrandController', 
        ['except'=>['create','edit','show'] ]);


    //Purchase Order
    Route::get('spa/searchPurchaseOrderData', 'Admin\Purchase\PurchaseOrderController@search'); //search
    Route::resource('spa/PurchaseOrder-Info', 'Admin\Purchase\PurchaseOrderController', 
        ['except'=>['create','edit','show'] ]);


    //Accounting
    Route::get('spa/searchChartOfAccountsData', 'Admin\Accounting\ChartOfAccountsController@search'); //search
    Route::resource('spa/ChartOfAccounts-Info', 'Admin\Accounting\ChartOfAccountsController', 
      ['except'=>['create','show','edit'] ]);

    Route::get('spa/AccountHeads-Info/getChartOfAccountHeads', 'Admin\Accounting\AccountHeadController@getChartOfAccountHeads');//commonStoreForAll store 
    Route::resource('spa/AccountHeads-Info', 'Admin\Accounting\AccountHeadController', 
      ['except'=>['create','show','edit'] ]); //Chart Of Accounting

    Route::resource('spa/AccountDetails-Info', 'Admin\Accounting\AccountDetailController', 
      ['except'=>['create','show','edit'] ]); //COA Detials

    Route::resource('spa/BankAccount-Info', 'Admin\Accounting\BankAccountController', 
      ['except'=>['create','show','edit'] ]);
    
    Route::get('spa/searchCashData', 'Admin\Accounting\CashAccountController@search'); //search
    Route::resource('spa/CashAccount-Info', 'Admin\Accounting\CashAccountController', 
      ['except'=>['create','show','edit'] ]);

    //HRM
    Route::post('spa/getSelectedEmployee/', 'Admin\HRM\EmployeeController@getSelectedEmployee');
    Route::get('spa/AutoCompleteEmployeeData', 'Admin\HRM\EmployeeController@autoCompleteSearch'); //Auto Complete
    Route::get('spa/searchEmployeeData', 'Admin\HRM\EmployeeController@search'); //search
    Route::post('spa/Employee-Info-DeleteImage/{id}', 'Admin\HRM\EmployeeController@DeleteImage');
    Route::resource('spa/Employee-Info', 'Admin\HRM\EmployeeController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/JobTitle-Info/GetJobTitles', 'Admin\HRM\JobTitleController@GetJobTitles'); //for commonStoreForAll store
    Route::resource('spa/JobTitle-Info', 'Admin\HRM\JobTitleController', 
      ['except'=>['create','show','edit'] ]);

    //Settings Route    
    Route::resource('spa/Settings-Info', 'Admin\Settings\SettingController', 
      ['except'=>['index','create','show','destroy'] ]);
    Route::resource('spa/OrgInfo', 'Admin\Settings\OrganizationInfoController', 
      ['except'=>['index','create','store','show','destroy'] ]);
    Route::resource('spa/user-status-info', 'Admin\Settings\UserStatusController',
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/searhBaranchInfoData', 'Admin\Settings\BranchInfoController@search'); //search
    Route::get('spa/Branch-Info/getBranches', 'Admin\Settings\BranchInfoController@getBranches'); //for commonStoreForAll store
    Route::resource('spa/Branch-Info', 'Admin\Settings\BranchInfoController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/Currency-Info/getCurrencies', 'Admin\Settings\CurrencyController@getCurrencies');//commonStoreForAll
    Route::resource('spa/Currency-Info', 'Admin\Settings\CurrencyController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/Language-Info/getLanguages', 'Admin\Settings\LanguageController@getLanguages');//commonStoreForAll
    Route::resource('spa/Language-Info', 'Admin\Settings\LanguageController', 
      ['except'=>['create','show','edit'] ]);
    Route::get('spa/UnitsMaster-Info/getAllUnits', 'Admin\Settings\UnitController@getAllUnits');//commonStoreForAll store
    Route::resource('spa/UnitsMaster-Info', 'Admin\Settings\UnitController', 
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

    Route::get('spa/StatusMaster-Info/getAllStatus', 'Admin\Settings\StatusMasterController@getAllStatus');//commonStoreForAll store    
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
    Route::get('spa/DistrictZone-Info/GetDistrictZone', 'Admin\Settings\DistrictZoneController@GetDistrictZone');//commonStoreForAll store
    Route::resource('spa/DistrictZone-Info', 'Admin\Settings\DistrictZoneController', 
      ['except'=>['create','show','edit'] ]);

    Route::post('spa/Department-getSelectedDepartmentList/', 'Admin\Settings\DepartmentController@getSelectedDepartmentList');
    Route::get('spa/AutoCompleteDepartmentData', 'Admin\Settings\DepartmentController@autoCompleteSearch'); //Auto Complete
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

    

    //testing route
    Route::post('spa/save-multi-field', 'Admin\MultiComponent\MultiComponentController@saveMultiField');
    Route::get('spa/testQuery', 'Admin\MultiComponent\MultiComponentController@testQuery');
    Route::get('spa/searchCategoryData', 'Admin\MultiComponent\MultiComponentController@searchCategoryData');
    Route::get('spa/getCatList/{id}', 'Admin\MultiComponent\MultiComponentController@CategoryListById');
    Route::resource('spa/MultiComponent', 'Admin\MultiComponent\MultiComponentController'); 
    Route::get('spa/getMultiProductList/{id}', 'Admin\Catalog\ProductController@getMultiProductList');
    //End Deomo
    /**********************************************End Vue Route *************************************************/   
 
    // Vue: single page application (SPA)- Any route that not match that redirect to dashboard. combine vue route and laravel rourte. Best way place this route to last of the line    
    //Route::get('/spa/{path}', 'Admin\AdminController@index')->where('path', '.*' );  
    Route::get('/spa/{anypath}', function () {
      return view('admin.dashboard'); 
    //})->where(['anypath' => '([A-z\d-/_.]+)?' ]);
    })->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);
    //})->where('anypath', '.*' ); 

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



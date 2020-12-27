<?php



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


//-----------------------------------Website------------------------------------------------
Route::get('/home', function () {
    //App::setLocale('bn'); //app()->getLocale()
    return view('website.home');    
});

// Route::get('/auth/login', 'AuthCustomer\LoginController@showLoginForm')->name('customer.login');



Route::post('send-message-query', 'Website\ContactUsController@sendMessageQuery')->name('send-message-query');
Route::post('send-visitor-query', 'Website\ContactUsController@sendVisitorQuery');
Route::get('get-brand-for-carousel', 'Website\BrandController@GetBrandForCarousel');

//-------------------------------------End Website------------------------------------------




//------------------------------------- Website Localization (Language switcher)------------------------------------------
Route::redirect('/','/en');
Route::group(['prefix'=>'{locale}', 'where'=>['locale' => '[a-zA-Z]{2}'], 'middleware'=>'SetLanguage'], function(){

  Route::get('/', function () {
    //App::setLocale('bn'); //app()->getLocale()
    return view('welcome');    
  });

  Route::get('/contact-us', 'Website\ContactUsController@index')->name('contact-us');
  Route::get('/auth-check', 'Website\AuthCheckController@index')->name('auth-check');
  Route::fallback(function(){ return 'No data'; });

});
//Route::get('/{locale}', 'SetLanguageController@index'); //use this route after localization middleware
/**************************************** End Website Localization *************************************************/

//For Public
Route::get('/{anypath}', function () {
      return view('website.home'); 
})->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);

//for authorise user
Route::get('/auth/{anypath}', function () {
      return view('website.home'); 
})->where(['anypath' => '([A-z\d\-\/_.]+)?' ]);



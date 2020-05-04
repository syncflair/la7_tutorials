<?php

/*Enable Query Log to check raw sql query*/
DB::listen(function($sql) {
    print_r($sql->sql);
    //print_r($sql->time);
});


use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome'); 
   // return view('auth.login'); //redirect to login page
});


Auth::routes();
//Auth::routes(['register' => false ]); //disable Register route. No one can register to this site any more.


Route::group(['middleware'=>['user','auth'] ], function(){

    Route::get('home', 'HomeController@index')->name('home');

});


Route::group(['middleware'=>['admin','auth'] ], function() {

    Route::get('dashboard', 'HomeController@dashboard')->name('dashboard');
});


//Route::get('/home', 'HomeController@index')->name('home')->middleware('MyAuth');
//Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard')->middleware('MyAuth');
//Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');

//group route with middleware
/*Route::group(['middleware' => 'MyAdmin'], function() {
   //route here
   Route::get('/home', 'HomeController@index')->name('home');
   Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');
});//*/


//group route with prefix and Middleware
/*Route::group(['prefix' =>'admin', 'middleware' => 'MyAuth'], function() {
   //route here
});*/

//group route with prefix and multiple middleware
/*Route::group(['prefix' =>'admin', 'middleware' => ['MyAuth', 'middlewareTwo']], function() {
   //route here
});*/




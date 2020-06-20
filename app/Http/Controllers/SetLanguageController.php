<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Session; //for session

class SetLanguageController extends Controller
{
    public function index($locale)
    {

       	\App::setLocale($locale);
        //storing the locale in session to get it back in the middleware
        session()->put('locale', $locale);
         //dd(session('locale') );
        return redirect()->back();


    }


}

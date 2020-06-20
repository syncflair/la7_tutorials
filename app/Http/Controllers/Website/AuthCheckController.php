<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthCheckController extends Controller
{
    public function index(){
    	return view('Website.auth_check');
    }
}

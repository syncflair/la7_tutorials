<?php

namespace App\Http\Controllers\API\V1\Customer\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        // return view('AuthCustomer.login'); //for login.blade.php
        return view('website.home'); //for vue
    }
    
}

<?php

namespace App\Http\Controllers\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminCustomerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware('auth:customer');
    }


    public function index()
    {
        // return view('AdminCustomer.DashboardCustomer');
        return view('website.home'); 
        // return route('auth/customer-dashboard');
    }
}

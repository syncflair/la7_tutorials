<?php

namespace App\Http\Controllers\AdminChild\AdminPurchase;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminPurchaseController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        // return view('AdminChild.AdminPurchase.DashboardPurchase');
        return view('AdminChild.DashboardAdminChild');  
    }
}

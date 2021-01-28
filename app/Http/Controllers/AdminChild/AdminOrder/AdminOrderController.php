<?php

namespace App\Http\Controllers\AdminChild\AdminOrder;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminOrderController extends Controller
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
        // return view('AdminChild.AdminOrder.DashboardOrder');
        return view('AdminChild.DashboardAdminChild');  
    }

}

<?php

namespace App\Http\Controllers\AdminSales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSalesController extends Controller
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
        return view('AdminSales.DashboardSales');
    }
}

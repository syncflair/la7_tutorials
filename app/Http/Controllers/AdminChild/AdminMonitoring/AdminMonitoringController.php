<?php

namespace App\Http\Controllers\AdminChild\AdminMonitoring;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminMonitoringController extends Controller
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
        return view('AdminChild.DashboardAdminChild');        
    }
}

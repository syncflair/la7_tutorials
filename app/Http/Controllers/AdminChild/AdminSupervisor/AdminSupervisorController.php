<?php

namespace App\Http\Controllers\AdminChild\AdminSupervisor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSupervisorController extends Controller
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
        // return view('AdminChild.AdminSupervisor.DashboardSupervisor');
        return view('AdminChild.DashboardAdminChild'); 
    }

}

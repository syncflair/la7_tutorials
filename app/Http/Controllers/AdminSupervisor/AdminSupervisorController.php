<?php

namespace App\Http\Controllers\AdminSupervisor;

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
        return view('AdminSupervisor.DashboardSupervisor');
    }
}

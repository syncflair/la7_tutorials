<?php

namespace App\Http\Controllers\AdminChild\AdminPackaging;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminPackagingController extends Controller
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
        return view('AdminChild.AdminPackaging.DashboardPackaging');
    }
}

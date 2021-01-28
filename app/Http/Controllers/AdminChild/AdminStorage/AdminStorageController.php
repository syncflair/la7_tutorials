<?php

namespace App\Http\Controllers\AdminChild\AdminStorage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminStorageController extends Controller
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
        // return view('AdminChild.AdminStorage.DashboardStorage');

        
        return view('AdminChild.DashboardAdminChild'); 
    }

}

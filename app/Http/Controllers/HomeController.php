<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\user;
use App\Helpers\AuthRolePermissionHelper;

class HomeController extends Controller
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

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
       // print_r(RoleId);        

        return view('home');
    }

    /*public function dashboard()
    {
        return view('admin.dashboard');
    }*/
}

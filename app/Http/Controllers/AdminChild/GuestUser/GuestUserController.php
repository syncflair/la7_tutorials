<?php

namespace App\Http\Controllers\AdminChild\GuestUser;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GuestUserController extends Controller
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
        return view('AdminChild.GuestUser.DashboardGuestUser');
    }



    /*Its for Visitor users. for future use*/
}

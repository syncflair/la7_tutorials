<?php

namespace App\Http\Controllers\AdminDelivery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDeliveryController extends Controller
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
        return view('AdminDelivery.DashboardDelivery');
    }

}

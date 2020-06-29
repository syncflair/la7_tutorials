<?php

namespace App\Http\Controllers\AdminSupplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSupplierController extends Controller
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
        return view('AdminSupplier.DashboardSupplier');
    }
}

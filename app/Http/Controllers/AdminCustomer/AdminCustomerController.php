<?php

namespace App\Http\Controllers\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Customer;
use Illuminate\Support\Facades\Redirect;

class AdminCustomerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //    $this->middleware('auth:customer');
    // }


    public function index()
    {
        // return view('website.home'); 
        // return route('auth/customer-dashboard');
        return redirect()->intended('auth/my-dashboard');
    }

    public function getAuthCustomerData(){
        //get auth customer data after login if any later change
        //$data = 'Ok test data';
        if(Auth::guard('customer')->check()){
            $data = Auth::guard('customer')->user();
        }

        // $data = Auth::user();

        return response()->json($data);
    }
}

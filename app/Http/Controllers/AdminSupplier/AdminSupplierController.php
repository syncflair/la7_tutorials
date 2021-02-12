<?php

namespace App\Http\Controllers\AdminSupplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Supplier\Vendor;


class AdminSupplierController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:supplier');
    }


    public function index()
    {
        return view('AdminSupplier.DashboardSupplier'); //
        // return view('website.home'); 
    }

    public function getAuthSupplierData(){
        //get auth Supplier data after login if any later change
        //$data = 'Ok test data';
        if(Auth::guard('supplier')->check()){
            $data = Auth::guard('supplier')->user();
        }

        // $data = Auth::user();
        return response()->json($data);
    }


    public function getAuthVendorData(Request $request){
        if(Auth::guard('supplier')->check()){

            $data = Vendor::with('UserStatus','belongsToBrandShop')
                ->find($request->vendor_id);
        }

        return response()->json($data);
    }




}

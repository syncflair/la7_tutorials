<?php

namespace App\Http\Controllers\AuthSupplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class SupplierRequestController extends Controller
{
     public function showSupplierRequestForm()
    {
        return view('AuthSupplier.BecomeSupplierRequest'); //for BecomeSupplierRequest.blade.php
    }



    public function SubmitSupplierRequestForm(Request $request){
    	//return $request->all();
    	$this->validate($request, [
            'name'   => ['required','string','max:80'],
            'email'   => ['required','email','max:100'],
            'phone' => ['required','numeric','regex:/^01[1|3-9]\d{8}$/'], //right way to use preg_match
            'business_info'   => ['max:300'],
            'product_info'   => ['max:300'],

        ],
    	[
    		//'email.required' => 'The Supplier email field is required.',
            'business_info.max' => 'You exceed text limit. Max 300 character.',
            'product_info.max' => 'You exceed text limit. Max 300 character.',
    	]);
    }

}

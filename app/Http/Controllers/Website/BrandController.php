<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Brand;

class BrandController extends Controller
{
    
   

    public function GetBrandForCarousel(){
        $data = Brand::all();
        //$data = Brand::get();
        return response()->json($data);
    }



}

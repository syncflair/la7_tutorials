<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Settings\Country;
use App\Models\Settings\District;
use App\Models\Settings\Division;
use App\Models\Settings\DistrictZone;

class CommonController extends Controller
{

	
    //return country list without pagination
    public function GetCountry(){
        //this is for commonStoreForAll Store
        $data = Country::get();
        //$data = Country::All();
        return response()->json($data);
    }


    //return division list without pagination
    public function GetDistrict(Request $request){
        //this is for commonStoreForAll Store
        if(!empty($request->id)){
            $data = District::where('division_id', '=' ,$request->id)->get();
        }else{
            $data = District::get();
        }
        return response()->json($data);
    }



    //return division list without pagination
    public function GetDivision(Request $request){
        //this is for commonStoreForAll Store
        if(!empty($request->id)){
            $data = Division::where('country_id', '=' ,$request->id)->get();
        }else{
            $data = Division::get();
        }
        return response()->json($data);
    }



    //return division list without pagination
    public function GetDistrictZone(Request $request){
        //this is for commonStoreForAll Store
        if(!empty($request->id)){
            $data = DistrictZone::where('district_id', '=' ,$request->id)->get();
        }else{
            $data = DistrictZone::get();
        }
        return response()->json($data);
    }


}

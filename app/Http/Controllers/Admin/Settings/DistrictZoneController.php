<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\DistrictZone;


class DistrictZoneController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 100;
        }

        $data = DistrictZone::with('belongsToDistrict')->paginate($perPage);
        //$data = DistrictZone::All();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'zone_name' => 'required|min:3|max:40',
            //'zone_name' => 'required|min:3|max:40|unique:district_zones,zone_name',
            'district_id' => 'required',
        ],
        [
            'district_id.required' => 'The District field is required.',
        ]);

        $data =array();
        $data['zone_name']=$request->zone_name;
        $data['zone_name_lang']=$request->zone_name_lang;
        $data['zip_code']=$request->zip_code;  
        $data['zone_desc']=$request->zone_desc;
        $data['police_station']=$request->police_station;
        $data['district_id']=$request->district_id;

        $data['created_by']= \Auth::user()->id;         
        
        DistrictZone::create($data);        
        return response()->json(['success'=>'Zone Created successfully.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'zone_name' => 'required|min:3|max:40',
            //'zone_name' => 'required|min:3|max:40|unique:district_zones,zone_name,'.$id,
            'district_id' => 'required',
        ],
        [
            'district_id.required' => 'The Country field is required.',
        ]);

        $data =array();
        $data['zone_name']=$request->zone_name;
        $data['zone_name_lang']=$request->zone_name_lang;
        $data['zip_code']=$request->zip_code;        
        $data['zone_desc']=$request->zone_desc;
        $data['police_station']=$request->police_station;        
        $data['district_id']=$request->district_id;

        $data['updated_by']= \Auth::user()->id;         

        DistrictZone::whereId($id)->update($data);         
        return response()->json(['success'=>'Zone Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = DistrictZone::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

     //search
    public function search(Request $request){

        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 100;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = DistrictZone::with('belongsToDistrict')->where(function($query) use ($searchKey){
                $query->where('zone_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('zip_code','LIKE','%'.$searchKey.'%')
                        ->orWhere('zone_desc','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = DistrictZone::with('belongsToDistrict')->where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = DistrictZone::latest()->paginate(10);
            $searchResult = DistrictZone::with('belongsToDistrict')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return division list without pagination
    public function GetDistrictZone(){
        //this is for commonStoreForAll Store
        $data = DistrictZone::get();
        //$data = DistrictZone::All();
        return response()->json($data);
    }


}

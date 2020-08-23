<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\District;

class DistrictController extends Controller
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

        $data = District::with('belongsToDivision')->paginate($perPage);
        //$data = District::All();
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
            'district_name' => 'required|min:3|max:40|unique:districts,district_name',
            'division_id' => 'required',
        ],
        [
            'division_id.required' => 'The Division field is required.',
        ]);

        $data =array();
        $data['district_name']=$request->district_name;
        $data['district_name_lang']=$request->district_name_lang;
        $data['district_desc']=$request->district_desc;
        $data['division_id']=$request->division_id;

        $data['created_by']= \Auth::user()->id;         
        
        District::create($data);        
        return response()->json(['success'=>'District Created successfully.']);
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
            'district_name' => 'required|min:3|max:40|unique:districts,district_name,'.$id,
            'division_id' => 'required',
        ],
        [
            'division_id.required' => 'The Country field is required.',
        ]);

        $data =array();
        $data['district_name']=$request->district_name;
        $data['district_name_lang']=$request->district_name_lang;
        $data['district_desc']=$request->district_desc;
        $data['division_id']=$request->division_id;

        $data['updated_by']= \Auth::user()->id;         

        District::whereId($id)->update($data);         
        return response()->json(['success'=>'District Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = District::findOrFail($id)->delete();        
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
            $searchResult = District::with('belongsToDivision')->where(function($query) use ($searchKey){
                $query->where('district_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('district_desc','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = District::with('belongsToDivision')->where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = District::latest()->paginate(10);
            $searchResult = District::with('belongsToDivision')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return division list without pagination
    public function GetDistrict(){
        //this is for commonStoreForAll Store
        $data = District::get();
        return response()->json($data);
    }


}

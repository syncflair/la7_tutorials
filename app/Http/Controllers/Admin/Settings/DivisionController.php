<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Division;

class DivisionController extends Controller
{
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
            $perPage = 20;
        }

        $data = Division::with('belongsToCountry')->paginate($perPage);
        //$data = Division::All();
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
            'division_name' => 'required|min:3|max:40|unique:divisions,division_name',
            'country_id' => 'required',
        ],
        [
            'country_id.required' => 'The Country field is required.',
        ]);

        $data =array();
        $data['division_name']=$request->division_name;
        $data['division_name_lang']=$request->division_name_lang;
        $data['division_desc']=$request->division_desc;
        $data['country_id']=$request->country_id;

        $data['created_by']= \Auth::user()->id;         
        
        

        Division::create($data);        
        return response()->json(['success'=>'Division Created successfully.']); 
        
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
            'division_name' => 'required|min:3|max:40|unique:divisions,division_name,'.$id,
            'country_id' => 'required',
        ],
        [
            'country_id.required' => 'The Country field is required.',
        ]);

        $data =array();
        $data['division_name']=$request->division_name;
        $data['division_name_lang']=$request->division_name_lang;
        $data['division_desc']=$request->division_desc;
        $data['country_id']=$request->country_id;

        $data['updated_by']= \Auth::user()->id;         

        Division::whereId($id)->update($data);         
        return response()->json(['success'=>'Division Updated successfully.']);         
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $data = Division::findOrFail($id)->delete();        
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
            $perPage = 50;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Division::with('belongsToCountry')->where(function($query) use ($searchKey){
                $query->where('Division_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('division_desc','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Division::with('belongsToCountry')->where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = Division::latest()->paginate(10);
            $searchResult = Division::with('belongsToCountry')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return division list without pagination
    public function GetDivision(){
        //this is for commonStoreForAll Store
        $data = Division::get();
        //$data = Division::All();
        return response()->json($data);
    }
}

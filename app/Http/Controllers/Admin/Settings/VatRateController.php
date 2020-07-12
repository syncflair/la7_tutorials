<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\VatRate;

class VatRateController extends Controller
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
            $perPage = 20;
        }

        $data = VatRate::paginate($perPage);
        //$data = VatRate::All();
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
            'vat_name' => 'required|min:3|max:50|unique:vat_rates,vat_name',
            'vat_code' => 'unique:vat_rates,vat_code',
            'vat_rate' => 'required|numeric',
            'vat_type' => 'required',
        ]);

        $data['vat_name']=$request->vat_name;
        $data['vat_code']=$request->vat_code;
        $data['vat_rate']=$request->vat_rate;
        $data['vat_type']=$request->vat_type;
        $data['vat_desc']=$request->vat_desc;

        $data['created_by']= \Auth::user()->id;

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        VatRate::create($data);         
        return response()->json(['success'=>'Vat Rate added successfully.']); 
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
            'vat_name' => 'required|min:3|max:50|unique:vat_rates,vat_name,'.$id,
            'vat_code' => 'unique:vat_rates,vat_code,'.$id,
            'vat_rate' => 'required|numeric',
            'vat_type' => 'required',
        ]);

        $data =array();
        $data['vat_name']=$request->vat_name;
        $data['vat_code']=$request->vat_code;
        $data['vat_rate']=$request->vat_rate;
        $data['vat_type']=$request->vat_type;
        $data['vat_desc']=$request->vat_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        VatRate::whereId($id)->update($data);         
        return response()->json(['success'=>'Vat Rate Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = VatRate::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

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
            $searchResult = VatRate::where(function($query) use ($searchKey){
                $query->where('vat_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('vat_code','LIKE','%'.$searchKey.'%')
                        ->orWhere('vat_rate','LIKE','%'.$searchKey.'%')
                        ->orWhere('vat_type','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = VatRate::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = VatRate::latest()->paginate(10);
            $searchResult = VatRate::paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }
}

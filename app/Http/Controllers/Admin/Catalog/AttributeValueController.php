<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\AttributeValue;

class AttributeValueController extends Controller
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

        $data = AttributeValue::with('belongsToAttribute')->paginate($perPage);
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
            'attribute_value' => 'required|min:1|max:40|unique:attribute_values,attribute_value',
            'attribute_id' => 'required',
        ],
        [
            'attribute_id.required' => 'The Attribute field is required.',
        ]);

        $data =array();
        $data['attribute_value']=$request->attribute_value;
        $data['attribute_id']=$request->attribute_id;

        $data['created_by']= \Auth::user()->id;  

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }       
        
        

        AttributeValue::create($data);        
        return response()->json(['success'=>'Attribute Value Created.']); 
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
            'attribute_value' => 'required|min:1|max:40|unique:attribute_values,attribute_value,'.$id,
            'attribute_id' => 'required',
        ],
        [
            'attribute_id.required' => 'The Attribute field is required.',
        ]);

        $data =array();
        $data['attribute_value']=$request->attribute_value;
        $data['attribute_id']=$request->attribute_id;

        $data['updated_by']= \Auth::user()->id;  

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }       

        AttributeValue::whereId($id)->update($data);         
        return response()->json(['success'=>'Attribute Value Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = AttributeValue::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
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
            $searchResult = AttributeValue::with('belongsToAttribute')->where(function($query) use ($searchKey){
                $query->where('attribute_value','LIKE','%'.$searchKey.'%');
            })->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = AttributeValue::with('belongsToAttribute')->where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->paginate($perPage);
            
        }else{
            //$searchResult = AttributeValue::latest()->paginate(10);
            $searchResult = AttributeValue::with('belongsToAttribute')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //return AttributeValue list without pagination
    public function GetAttributeValue(Request $request){
        //this is for commonStoreForAll Store
        $key = $request->q;
        //dd($key);
        //$data = AttributeValue::where('is_enabled', '1')->get();
        $data = AttributeValue::
                    //where('attribute_id', '=', $key)
                    where('is_enabled', '1')
                    ->get();
        return response()->json($data);
    }

    // //Get all status
    // public function getAllStatus(Request $request){
    //     //this is for commonStoreForAll Store
    //     $key = $request->q;
    //     $data = StatusMaster::where('status_type', '=', $key )
    //             ->select('id','status_name',)
    //             ->get();
    //     return response()->json($data);
    // }
    

}

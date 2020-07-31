<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Catalog\Specification;

class SpecificationController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
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
            $perPage = 10;
        }

        $data = Specification::orderBy('specification_name', 'ASC')->paginate($perPage);
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
            'specification_name' => 'required|min:3|max:40|unique:specifications,specification_name',
        ]);

        $data =array();
        $data['specification_name']=$request->specification_name;
        $data['specification_code']=$request->specification_code;
        $data['specification_desc']=$request->specification_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        Specification::create($data);        
        return response()->json(['success'=>'Specification Created.']); 
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
            'specification_name' => 'required|min:3|max:150|unique:specifications,specification_name,'.$id,
        ]);

        $data =array();
        $data['specification_name']=$request->specification_name;
        $data['specification_code']=$request->specification_code;
        $data['specification_desc']=$request->specification_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        Specification::whereId($id)->update($data);         
        return response()->json(['success'=>'Specification Updated.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Specification::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    public function search(Request $request){

        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 10;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Specification::where(function($query) use ($searchKey){
                $query->where('specification_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('specification_desc','LIKE','%'.$searchKey.'%');
            })->orderBy('specification_name', 'ASC')->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Specification::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->orderBy('specification_name', 'ASC')->paginate($perPage);
            
        }else{
            $searchResult = Specification::orderBy('specification_name', 'ASC')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


     //Get all status
    public function getSpecifications(){
        //this is for commonStoreForAll Store
        $data = Specification::get();
        return response()->json($data);
    }

}

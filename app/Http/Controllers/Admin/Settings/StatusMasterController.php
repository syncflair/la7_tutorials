<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\StatusMaster;

class StatusMasterController extends Controller
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
            $perPage = 50;
        }

        $data = StatusMaster::orderBy('status_type', 'ASC')->paginate($perPage);
        //$data = StatusMaster::All();
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
            'status_name' => 'required|min:3|max:50',
            'status_slug' => 'unique:status_master,status_slug',
            'status_type' => 'required',
        ]);

        $data['status_name']=$request->status_name;
        $data['status_slug']= slug_generator($request->status_name.'-'.$request->status_type);//slug_generator get from helper
        $data['status_type']=$request->status_type;
        $data['status_desc']=$request->status_desc;

        $data['created_by']= \Auth::user()->id;

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        StatusMaster::create($data);         
        return response()->json(['success'=>'Status added successfully.']); 
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
            'status_name' => 'required|min:3|max:50',
            'status_slug' => 'unique:status_master,status_slug,'.$id,
            'status_type' => 'required',
        ]);

        $data =array();
        $data['status_name']=$request->status_name;
        $data['status_slug']= slug_generator($request->status_name.'-'.$request->status_type);//slug_generator get from helper
        $data['status_type']=$request->status_type;
        $data['status_desc']=$request->status_desc;

        $data['updated_by']= \Auth::user()->id;         
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

        StatusMaster::whereId($id)->update($data);         
        return response()->json(['success'=>'Status Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = StatusMaster::findOrFail($id)->delete();        
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
            $searchResult = StatusMaster::where(function($query) use ($searchKey){
                $query->where('status_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('status_slug','LIKE','%'.$searchKey.'%')
                        ->orWhere('status_type','LIKE','%'.$searchKey.'%');
            })->orderBy('status_type', 'ASC')->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = StatusMaster::where(function($query) use ($searchKey, $searchOption){
                $query->where( $searchOption,'LIKE','%'.$searchKey.'%');
            })->orderBy('status_type', 'ASC')->paginate($perPage);
            
        }else{
            //$searchResult = StatusMaster::latest()->paginate(10);
            $searchResult = StatusMaster::orderBy('status_type', 'ASC')->paginate($perPage);
        }

        //return $searchResult;
        return response()->json($searchResult);
    }


    //Get all status
    public function getAllStatus(Request $request){
        //this is for commonStoreForAll Store
        $key = $request->q;
        $data = StatusMaster::where('status_type', '=', $key )
                ->select('id','status_name',)
                ->get();
        return response()->json($data);
    }

}

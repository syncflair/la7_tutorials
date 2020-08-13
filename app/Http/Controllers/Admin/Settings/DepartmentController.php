<?php

namespace App\Http\Controllers\admin\settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Department;

class DepartmentController extends Controller
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
    public function index()
    {
        $data = Department::get();
        //$data = Department::All();
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
            'dept_name' => 'required|min:3|max:40|unique:departments,dept_name',
            'dept_desc' => 'required',
        ],
        [
            'dept_desc.required' => 'The Depe Desc field is required.',
        ]);

        $data =array();
        $data['dept_name']=$request->dept_name;
        $data['dept_desc']=$request->dept_desc;

        $data['created_by']= \Auth::user()->id;    

        if($request->is_enabled == false){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }      
        
        Department::create($data);        
        return response()->json(['success'=>'Department Created successfully.']);

        //return $request->all();
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
        $data = Department::find($id);  
        return response()->json($data);  
        //return $id;
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
            'dept_name' => 'required|min:3|max:40|unique:departments,dept_name,'.$id,
            'dept_desc' => 'required',
        ],
        [
            'dept_desc.required' => 'The Department desc field is required.',
        ]);

        $data =array();
        $data['dept_name']=$request->dept_name;
        $data['dept_desc']=$request->dept_desc;

        $data['updated_by']= \Auth::user()->id;    

        if($request->is_enabled == false){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }     

        Department::whereId($id)->update($data);         
        return response()->json(['success'=>'Department Updated successfully.']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Department::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //return division list without pagination
    public function getDetartments(){
        //this is for commonStoreForAll Store
        $data = Department::get();
        return response()->json($data);
    }


    public function autoSearch(Request $request){

        $searchKey = $request->q;

        if(!empty($searchKey)){
        //if($search = \Request::get('q')){
            $searchResult = Department::where(function($query) use ($searchKey){
                $query->where('dept_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('dept_desc','LIKE','%'.$searchKey.'%');
            })->get();            
        }else{
            $searchResult = Department::get();
        }

        return response()->json($searchResult);
    }


     //search for auto complete (Request from Employee)
    public function autoCompleteSearch(Request $request){
        $searchKey = $request->q;

        if(!empty($searchKey) ){
            $searchResult = Department::where(function($query) use ($searchKey){
                $query->where('dept_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('dept_desc','LIKE','%'.$searchKey.'%');
            })->select('id', 'dept_name')->get();

        }
        //return $searchResult;
        return response()->json($searchResult);
    }

    //selected Category list for multiselect option
    public function getSelectedDepartmentList(Request $request){
        $searchKey = $request->q;
        $searchResult = Department::whereIn('id', $searchKey)
                        ->select('id','dept_name')
                        ->get(); //Model::whereIn('id', [1, 2, 3])->get();
       // $searchResult = Supplier::findMany([1, 2, 3]); //Model::findMany([1, 2, 3]);
        return response()->json($searchResult);
    }//end search
}

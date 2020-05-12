<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\Role;
use App\User;
use Auth;
use Yajra\DataTables\DataTables;
use Validator; //for vlidation
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\Redirect;
use Session; //for session

class PermissionController extends Controller
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
        if( $request->ajax() ){
        
            $permession_data = Permission::select('permissions.*','roles.name as role_name')
                ->leftJoin('roles', 'roles.id', '=', 'permissions.role_id')
                ->latest()->get(); 


            //pass data to dataTable
            return DataTables::of($permession_data)
                ->addColumn('action', function($permession_data){                    
                    $ActionData = '<a onclick="PermissionShow('.$permession_data->id.')"  class="btn  btn-primary- btn-flat btn-sm">
                            <i class="fas fa-eye info"></i>
                        </a>
                        <a onclick="PermissionEdit('.$permession_data->id.')" href="';
                    $ActionData .=   route('permission.edit', $permession_data->id);
                    $ActionData  .='" class="btn  btn-primary- btn-flat btn-sm">
                            <i class="fas fa-edit primary "></i>
                        </a>
                        <a onclick="PermissionDelete('.$permession_data->id.')" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                            <i class="far fa-trash-alt red"></i>
                        </a>';   

                    return $ActionData;            
              
            })->editColumn('permission', function($permession_data){
                $json_data_decode = json_decode($permession_data->permission);
                    $PermissionModels = '';
                foreach($json_data_decode as $key => $value) {
                    $PermissionModels .= '<span class="btn btn-info btn-sm btn-flat-">'.ucfirst($key).'</span> ';
                } 
                return $PermissionModels; 
                
            })->rawColumns(['action','permission'])->make(true);       

       }//*/ /*endif*/


        return view('admin.AuthManagement.Permission.permissions');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.AuthManagement.Permission.add_permissions');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $validator = $this->validate($request, [
            'role_id' => 'required|unique:permissions,role_id', 
            'permission' => 'required', 
        ]);

        $data =array();
        $data['role_id'] = $request->role_id;
        $data['permission'] = json_encode($request->permission); //insert by using json_encode()

        Permission::create($data); //*/           
        //return back()->with('success', 'Permission added successfully.'); //return to same page with message
        Session::put('success','Permission added successfully'); //massage after insert
        return Redirect::to('permission'); //*/       
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
        
       $permission = Permission::find($id);
       
        //dd($data);
       //dd(json_decode($data));
      
        return view('admin.AuthManagement.Permission.edit_permissions', compact('permission'));//->with($data);
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
        $validator = $this->validate($request, [
            'role_id' => 'required|unique:permissions,role_id,'.$id, 
            'permission' => 'required', 
        ]);

        $data =array();
        $data['role_id'] = $request->role_id;
        $data['permission'] = json_encode($request->permission); //insert by using json_encode()

        Permission::create($data); //*/           
        //return back()->with('success', 'Permission added successfully.'); //return to same page with message
        Session::put('success','Permission added successfully'); //massage after insert
        return Redirect::to('permission'); //*/    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

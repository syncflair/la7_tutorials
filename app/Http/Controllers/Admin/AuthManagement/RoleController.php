<?php

namespace App\Http\Controllers\Admin\AuthManagement;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use Yajra\DataTables\DataTables;
use Auth;

class RoleController extends Controller
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
        $roles_data = Role::latest()->get();

        //pass data to dataTable
        return DataTables::of($roles_data)
            ->addColumn('action', function($roles_data){
             
                $actionData = ''; 

                if( @GetAuthUserRolePermission()->role->edit != null ) {
                    if($roles_data->is_enabled == 1){
                        $actionData .= '<a onclick="RoleUnactive('.$roles_data->id.')" class="btn btn-danger- btn-flat btn-sm" data-toggle="tooltip" data-placement="right" title="Click to Unactive" >  <i class="far fa-thumbs-down danger"></i>  </a>';
                    }elseif($roles_data->is_enabled == 0){
                        $actionData .= '<a onclick="RoleActive('.$roles_data->id.')" class="use-tooltip btn btn-success- btn-flat btn-sm" data-toggle="tooltip" data-placement="left" title="Click to Active" >   <i class="far fa-thumbs-up success"></i>  </a>';
                    }
                }

                if( @GetAuthUserRolePermission()->role->edit != null ) {
                    $actionData .= '
                    <a onclick="RoleEdit('.$roles_data->id.')" class="btn  btn-primary- btn-flat btn-sm">
                        <i class="fas fa-edit primary "></i>
                    </a>';
                }

                if( @GetAuthUserRolePermission()->role->edit != null ) {
                    if($roles_data->id != Auth::user()->role_id ){
                        $actionData .= ' <a onclick="RoleDelete('.$roles_data->id.')" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" >
                            <i class="far fa-trash-alt red"></i>
                        </a>';               
                    }
                }

                return $actionData;

            })->editColumn('is_enabled', function($roles_data){
                if($roles_data->is_enabled == 1){
                    return '<span class="btn btn-flat btn-success btn-sm">Active</span>';
                }elseif($roles_data->is_enabled == 0){
                    return '<span class="btn btn-flat btn-danger btn-sm">Unactive</span>';
                }

            })->rawColumns(['action','is_enabled'])->make(true);       

       }/*endif*/

        return view('admin.AuthManagement.Role.roles');
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
        $validator = \Validator::make($request->all(), [
            'name' => 'required|min:3|max:20', 
            'role_desc' => 'max:100', 
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }elseif($validator->passes()){

            $role = New Role;
            $role->name =$request->name; 
            $role->role_desc = $request->role_desc;
            $role->save();

            return response()->json(['success'=>'Role inserted successfully']);
        }
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
        return Role::find($id);
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
        $validator = \Validator::make($request->all(), [
            'name' => 'required|min:3|max:20', 
            'role_desc' => 'max:100', 
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }elseif($validator->passes()){

            $role = Role::find($id);
            $role->name = $request->name;
            $role->role_desc = $request->role_desc;
            $role->save();

            return response()->json(['success'=>'Role Updated successfully']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::findOrFail($id)->delete();        
        if($role){
            return response()->json(['success'=> 'Record is deleted successfully']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }
    }


    public function role_active($id){

        $role = Role::find($id);
        $role->is_enabled = 1;
        $role->save();

        return response()->json(['success'=> $role->name.' is Active Now']);

        /*Role::where('active', 1)
          ->where('destination', 'San Diego')
          ->update(['delayed' => 1]);*/
    }

    public function role_unactive($id){
        $role = Role::find($id);
        $role->is_enabled = 0;
        $role->save();

        return response()->json(['success'=> $role->name.' is Unactive Now']);

    }


}

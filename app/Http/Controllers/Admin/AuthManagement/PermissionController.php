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
                    return '<a onclick="ShowUser('.$permession_data->id.')"  class="btn  btn-primary- btn-flat btn-sm">
                            <i class="fas fa-eye info"></i>
                        </a>
                        <a onclick="UserEdit('.$permession_data->id.')" class="btn  btn-primary- btn-flat btn-sm">
                            <i class="fas fa-edit primary "></i>
                        </a>
                        <a onclick="UserDelete('.$permession_data->id.')" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                            <i class="far fa-trash-alt red"></i>
                        </a>';                 
              
            })->rawColumns(['action'])->make(true);       

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
        //
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
        //
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

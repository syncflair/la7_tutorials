<?php

namespace App\Http\Controllers\Admin\AuthManagement;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::get();

        
        //return view('admin.AuthManagement.Role.roles');

       // return view('layouts.master_adminlte')->with('admin.AuthManagement.Role.roles', $roles);
        
        //return view('admin.AuthManagement.Role.roles')->with('layouts.master_adminlte', $roles);

        /*$all_brand_info = DB::table('tbl_brand')->get(); // get all row from table

        $manage_brand = view('admin.all_brand')->with('all_brand_info_view', $all_brand_info); 

        return view('template.dashboard_layout')->with('admin.all_brand', $manage_brand);*/


        $roles_v = view('admin.AuthManagement.Role.roles')->with('roles', $roles); 

        return view('layouts.master_adminlte')->with('admin.AuthManagement.Role.roles', $roles_v);
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

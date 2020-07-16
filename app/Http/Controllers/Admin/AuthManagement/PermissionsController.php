<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Permission;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Permission::with('role')->get();

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
        //return $request->all();
        $validator = $this->validate($request, [
            'role_id' => 'required|unique:permissions,role_id', 
            //'permission' => 'required', 
        ],
        [
          'role_id.required' => 'The Role field is required.',
          'role_id.unique' => 'This Role already assigned permission. Please select another role to assign permission',
        ]);

        $data =array();
        $data['role_id'] = $request->role_id;
        //$data['permission'] = $request->permission; //insert by using json_encode()
        $data['permission'] = json_encode($request->permission); //insert by using json_encode()

        Permission::create($data);       
        return response()->json(['success'=>'Permission added successfully']);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       // $data = Permission::where('role_id','=', $id)->first();  
        $data = Permission::where('role_id', '=', $id)->first(); 
        if($data){
            return response()->json($data); 
        }
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
         $validator = $this->validate($request, [
            'role_id' => 'required|unique:permissions,role_id,'.$id, 
            //'permission' => 'required', 
        ],
        [
          'role_id.required' => 'The Role field is required.',
          'role_id.unique' => 'This Role already assigned permission. Please select another role to assign permission',
        ]);

        $data =array();
        $data['role_id'] = $request->role_id;
        $data['permission'] = $request->permission; //insert by using json_encode()
        //$data['permission'] = json_encode($request->permission); //insert by using json_encode()

        Permission::whereId($id)->update($data);     
        return response()->json(['success'=>'Permission update successful']);
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

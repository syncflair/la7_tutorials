<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Yajra\DataTables\DataTables;
use Auth;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)    
    {
        if( $request->ajax() ){
        $users_data = User::select('users.*','roles.name as role_name','user_status.us_name')
            ->leftJoin('roles', 'roles.id', '=', 'users.role_id')
            ->leftJoin('user_status', 'user_status.id', '=', 'users.status_id')
            ->latest()->get(); // */  

        //pass data to dataTable
        return DataTables::of($users_data)
            ->addColumn('action', function($users_data){
                $actionData = '
                    <a onclick="ShowUser('.$users_data->id.')"  class="btn  btn-primary- btn-flat btn-sm">
                        <i class="fas fa-eye info"></i>
                    </a>
                    <a onclick="EditUser('.$users_data->id.')" class="btn  btn-primary- btn-flat btn-sm">
                        <i class="fas fa-edit primary "></i>
                    </a>'; 
                    if( $users_data->id != Auth::user()->id ){                                
                    $actionData .= '
                    <a onclick="DeleteUser('.$users_data->id.')" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                        <i class="far fa-trash-alt red"></i>
                    </a>';
                    }
                return $actionData;
            })->editColumn('us_name', function($users_data){
                if($users_data->us_name == 'Active'){
                    return "<span class='green'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Inactive'){
                    return "<span class='red'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Pending'){
                    return "<span class='blue'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Block'){
                    return "<span class='orange'>".$users_data->us_name."</span>";
                }elseif($users_data->us_name == 'Unverified'){
                    return "<span class='yellow'>".$users_data->us_name."</span>";
                }
            })
            ->rawColumns(['action','us_name'])->make(true);       

       }/*endif*/

        //$users_v = view('admin.AuthManagement.User.users')->with('users', $users); 
        //return view('layouts.master_adminlte')->with('admin.AuthManagement.User.users', $users_v);        
        return view('admin.AuthManagement.User.users');
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
       //query for existing image
        $existing_image = User::select('avatar')->where('id', $id)->first();                   
        if( File::exists($existing_image->avatar) ) {  
            File::delete($existing_image->avatar); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        //users::destroy($id);
        $data = User::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }
}

<?php

namespace App\Http\Controllers\Admin\AuthManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\User;
//use App\Mail\UserRegisterByAdminMail;

class UsersController extends Controller
{
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

        $data = User::with('role')->paginate($perPage);

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
            $searchResult = User::with('role')->where(function($query) use ($searchKey){
                $query->where('users.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('users.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('users.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('roles.name','LIKE','%'.$searchKey.'%');
            })
            ->select('users.*','user_status.us_name', 'roles.name')
            ->join('user_status', 'users.status_id','=', 'user_status.id')
            ->join('roles', 'users.role_id','=', 'roles.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = User::with('role')->where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }elseif($searchOption == 'role_name'){
                    $query->where( 'roles.name','LIKE','%'.$searchKey.'%');                    
                }else{
                    $query->where( 'users.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }                
            })
            ->select('users.*','user_status.us_name', 'roles.name')
            ->join('user_status', 'users.status_id','=', 'user_status.id')
            ->join('roles', 'users.role_id','=', 'roles.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = User::latest()->paginate(10);
            $searchResult = User::with('role')->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }
}

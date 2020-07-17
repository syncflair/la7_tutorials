<?php

namespace App\Http\Controllers\Admin\Supplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Hash;
//use App\Mail\SupplierRegisterByAdminMail;
//use App\Mail\SupplierNotificationMail;
use Illuminate\Support\Facades\Mail;
use App\Supplier;


class SupplierController extends Controller
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
    public function index(Request $request)
    {
       if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 10;
       }

        $data = Supplier::paginate($perPage);

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
        $data = Supplier::findOrFail($id)->delete();        
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
            $searchResult = Supplier::where(function($query) use ($searchKey){
                $query->where('suppliers.name','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.email','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.phone','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.supplier_type','LIKE','%'.$searchKey.'%')
                        ->orWhere('suppliers.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%');
            })
            ->select('suppliers.*','user_status.us_name')
            ->join('user_status', 'suppliers.status_id','=', 'user_status.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Supplier::where(function($query) use ($searchKey, $searchOption){
                if($searchOption == 'us_name'){
                    $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }else{
                    $query->where( 'suppliers.'.$searchOption,'LIKE','%'.$searchKey.'%');
                }                
            })
            ->select('suppliers.*','user_status.us_name')
            ->join('user_status', 'suppliers.status_id','=', 'user_status.id')
            ->paginate($perPage);
            
        }else{
            //$searchResult = Supplier::latest()->paginate(10);
            $searchResult = Supplier::paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search




}

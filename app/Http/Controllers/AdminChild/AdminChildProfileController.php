<?php

namespace App\Http\Controllers\AdminChild;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class AdminChildProfileController extends Controller
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

    public function index(Request $request)
    {
    	//return $request->id;

        $data = User::with('role','UserStatus','belongsToBranch','belongsToEmployee')
        		->where('id', $request->id)
        		->first();

        return response()->json($data);
    }
}

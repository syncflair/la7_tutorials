<?php

namespace App\Http\Controllers\API\V1\Customer\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Http\Client\Response;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Carbon;

use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Redirect;
use App\Models\Customer;


use Illuminate\Support\Facades\Route;

class AdminCustomerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api-customer');
        // $this->middleware('auth:api-customer')->except('index','show');
    }

    public function AuthenticatonCheck(Request $request){
    	
    }

	public function getUser(Request $request){


		// if ( $request->user()->token()->expires_at < Carbon::now() ) {
		// 	// return redirect('/api/afc/refresh-token');
		// 	// return redirect('/api/afc/refresh-token');
		// 	// return redirect()->route('api.customer.refresh.token');
		// 	// return redirect()->route('api.customer.refresh.token');
		// 	// return redirect()->route('home');
		// 	return redirect()->route('api.customer.refresh.token');

		// 	// POST Request
		// 	// $request = Request::create(config('app.url').'/api/afc/refresh-token', 'post' );
		// 	// $response = Route::dispatch($request);
		// 	// return response()->json('Expired');

		// }
		// $refresh_token = $request->header('RefreshToken');
		// return response()->json($refresh_token);

		// redirect()->route('api.customer.refresh.token');



		//$data =  $request->user();
		// $data = auth('api-customer')->user();
		$data = Auth::guard('api-customer')->user(); //working
		// return response()->json($data);

		return response()->json($data);

	

		
	}


	public function hasExpired(){
        // return Carbon::now()->gte( $this->updated_at->addSeconds($this->expires_in) );
        return now()->gte( $this->updated_at->addSeconds($this->expires_at) );
    }


}

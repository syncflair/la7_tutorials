<?php

namespace App\Http\Controllers\API\V1\Customer\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
// use App\Models\User;
use App\Models\Customer;
// use App\Models\Supplier;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Http\Response;
use Illuminate\Http\Client\Response;

use Illuminate\Support\Carbon;
use App\Jobs\CustomerNotificationMailJob;

use Illuminate\Support\Facades\Session;
// use Illuminate\Support\Facades\Config; //call app.url form app/config/app - Config::get('app.url')

use Illuminate\Support\Facades\Http;
use Laravel\Passport\Client as OClient;  //for passport

use GuzzleHttp\Client;
// use League\OAuth2\Server\AuthorizationServer;
// use Laravel\Passport\Passport; //for passport
// use App;
use Illuminate\Support\Facades\Route;



class AuthCustomerController extends Controller
{
    

	/*
	* login using email or phone
	*/
    public function username()
    {
        //return 'email'; //Default
        //return 'phone'; //use only phone

        $login = request()->input('username');
        if(is_numeric($login)){
            $field = 'phone';
        }
        elseif (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        }
        else {
            //$field = 'username';
            $field = 'email';
        }
        request()->merge([$field => $login]);
        return $field;
    }

    public function getPasswordGrantFristPartyToken($request, $oClient, $username, $password, $scope){
    	
    	try {
            $request->request->add([
	                "grant_type" => "password",                
	                "client_id"     => $oClient->id, 
	                "client_secret" => $oClient->secret, 
	                'username' => $username,
		            'password' => $password,  
	                'scope' => $scope,	
	                'provider' => $oClient->provider
	        ]);

	        $tokenRequest = $request->create(
	                config('app.url').'/oauth/token',
	                'post'
	        );

	        $instance = Route::dispatch($tokenRequest);
	        
	        return json_decode($instance->getContent(), true);

        } catch (Exception $e) {
            return $this->responseWithError('Unauthorized', '401', 'Unauthorized, Something worng!');
        }			

	        // $data = json_decode($instance->getContent(), true);
	        // return response()->json($data); // return response()->json('Ok');  //"3", //"ruWeZBqWZJVNox3svkeTvjSW70xNkEvBmTlYoA9C",
    }

    public function refreshPasswordGrantFristPartyToken(Request $request){	

		$refresh_token = $request->header('RefreshToken');		
    	$oClient = OClient::where('provider', 'customers')->where('password_client', 1)->first();

	    try {    	

            $request->request->add([
	                'grant_type' => 'refresh_token',
				    // 'refresh_token' => 'the-refresh-token',
				    'refresh_token' => $refresh_token, //$request->user()->token->refresh_token
				    "client_id"     => $oClient->id, 
	                "client_secret" => $oClient->secret, 
				    'scope' => '',
	        ]);

	        $tokenRequest = $request->create(
	                config('app.url').'/oauth/token',
	                'post'
	        );

	        $instance = Route::dispatch($tokenRequest);
	        
	        return json_decode($instance->getContent(), true);

        } catch (Exception $e) {
            return $this->responseWithError('Unauthorized', '401', 'Unauthorized, Something worng!');
        }

        // return response()->json($refresh_token);
		// return response()->json($data);	
    }

    /*
	* login function 
	*/
	public function login(Request $request){

		 $request->validate([
            'username' => 'required',
    		'password' => 'required|min:6',
        ]);
        
		if ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) ) {
			
			//if some how not logout from previous token
			$tokenRepository = app('Laravel\Passport\TokenRepository');
	    	$refreshTokenRepository = app('Laravel\Passport\RefreshTokenRepository');
	    	// $user = $request->user();
	        $user = auth('api-customer')->user();
	        if ($user) {
	            $tokenRepository->revokeAccessToken($user->token()->id); //revok token
	            $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($user->token()->id); //revok Refresh token
	        }



			// $user = Auth::guard('customer')->user();

			//last login time update
   			Auth::guard('customer')->user()->last_login_at = Carbon::now()->toDateTimeString();
   			Auth::guard('customer')->user()->save();


   			$oClient = OClient::where('provider', 'customers')->where('password_client', 1)->first();
   			return $this->getPasswordGrantFristPartyToken($request, $oClient, $request->{$this->username()}, request('password'), '' );


   			// config(['auth.guards.api-customer.provider' => 'customers']);
   			//For personal access token with scope
			// $success['token'] =  $user->createToken('PersonalAccessTokenForCustomer',['customer'])->accessToken;  //scope- customer
			// $success['customer'] = $user;
			// $success['toke-'] = Auth::guard('customer')->user()->token();

		}
		elseif ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) ) {            
            Auth::guard('customer')->logout(); //$data = session()->all(); //return response()->json($data);
            // Auth::guard('customer')->user()->token()->revoke();
            // $user = Auth::guard('customer')->user();
             return $this->responseWithError('Inactive', '1122', 'You Account is not active, Please contact with Authority');
        }
        elseif ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) ) {
           
             Auth::guard('customer')->logout(); //$data = session()->all(); //return response()->json($data); 
             return $this->responseWithError('Pending', '1122', 'Your Account is Pending now, Please contact with Authority');
        }
        elseif ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) ) {
           
             Auth::guard('customer')->logout(); //$data = session()->all(); //return response()->json($data);
             return $this->responseWithError('Not Verified', '1123', 'Your Account is Not Verified, Please verify from email or contact with Authority');
        }
        else {
        	return $this->responseWithError('Unauthorized', '401', 'Unauthorized, Your credential is incorrect');
		}

		//return response()->json($request->{$this->username()});
	}


	public function register(Request $request){

		$validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email|unique:users', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $password = $request->password;
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $oClient = OClient::where('password_client', 1)->first();
        return $this->getTokenAndRefreshToken($oClient, $user->email, $password);
		//return response()->json('Working, test success for register');
		// return response()->json($data);
	}



    public function logout(Request $request){

    	$tokenRepository = app('Laravel\Passport\TokenRepository');
    	$refreshTokenRepository = app('Laravel\Passport\RefreshTokenRepository');
    	// $user = $request->user();
        $user = auth('api-customer')->user();
        //$user = Auth::guard('api-customer')->user();

        if ($user) {
            $tokenRepository->revokeAccessToken($user->token()->id); //revok token
            $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($user->token()->id); //revok Refresh token

            return $this->responseWithSuccess('Logout', '200', 'Logout Successfull');
        } else {
            return $this->responseWithSuccess('Logout', '200', 'Already Logout Successfull');
        }


        //for personal access token
        // $request->user()->token()->revoke();
        // return response()->json([
        //     'message' => 'Successfully logged out'
        // ]);
    }



    public function responseWithSuccess($success, $code, $message){
    	return response()->json([
			'success' => $success,
		 	'code' => $code,
		 	'success_message' => $message
		 ]);
    }

    public function responseWithError($error, $code, $message){
    	return response()->json([
			'error' => $error,
		 	'code' => $code,
		 	'error_message' => $message
		 ]);
    }
}

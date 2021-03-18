<?php

namespace App\Http\Controllers\API\V1\Supplier\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\Supplier;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Http;

use Illuminate\Support\Carbon;
use App\Jobs\SupplierNotificationMailJob;

use Laravel\Passport\Client as OClient;  //for passport

class AuthSupplierController extends Controller
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

     /*
  * login function 
  */
  public function login(Request $request){

    //$data = $request->{$this->username()};

      $request->validate([
        'username' => 'required',
        'password' => 'required|min:6',
      ]);
        
  //    // if (Auth::guard('supplier')->attempt(['email'=> request('username'), 'password'=>request('password'), 'status_id'=> 1 ] )) {
    if ( Auth::guard('supplier')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) OR Auth::guard('supplier')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) ) {
      
      //config(['auth.guards.api.provider' => 'supplier']);

      $user = Auth::guard('supplier')->user();
      // $success['token'] = $user->createToken('MyApp')->accessToken;
      $success['token'] =  $user->createToken('PersonalAccessTokenForSupplier',['supplier'])->accessToken; 
      $success['supplier'] = $user;

      //last login time update
            Auth::guard('supplier')->user()->last_login_at = Carbon::now()->toDateTimeString();
            Auth::guard('supplier')->user()->save();


      return response()->json(['success' => $success], 200);


      // $oClient = OClient::where('password_client', 1)->first();
   //          return $this->getTokenAndRefreshToken($oClient, $request->{$this->username()}, request('password'));
    }
    else {
      return response()->json(['error' => 'Unauthorized']);
      // return response()->json(['error' => 'Unauthorized'], 401);
      //return response()->json(['error'=>'You Account is not active, Please contact with Authority']);
    }

    //return response()->json($request->{$this->username()});
  }



}

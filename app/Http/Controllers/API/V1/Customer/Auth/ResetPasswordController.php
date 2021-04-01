<?php

namespace App\Http\Controllers\API\V1\Customer\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;

use Illuminate\Http\JsonResponse;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Session;

class ResetPasswordController extends Controller
{
     /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
   // protected $redirectTo = RouteServiceProvider::HOME;
    //protected $redirectTo = RouteServiceProvider::DASHBOARD;


    public function showResetForm(Request $request, $token = null)
    {
        // return view('AuthCustomer.passwords.reset')->with(
        //     ['token' => $token, 'email' => $request->email]
        // );

        return view('website.home')->with(
            ['token' => $token, 'email' => $request->email]
        );

    }



    //my Custome Code. OverWrite redirectTo
  	protected function redirectTo()
    {               
        
        // Session::put('success','Your password reset is successful . Please login');  
        return response()->json(['success'=>'Your password reset is successful . Please login']);
        //return route('dashboard-customer');
        return route('customer.login');

    } //*/


    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    //get from vendor\laravel\ui\auth-backend\PesetsPasswords.php and overwrite this function to prevent default login after retistration. and update redirectTo() function
    protected function resetPassword($user, $password)
    {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));

        //$this->guard('customer')->login($user); //Comment this from auto login after reset password.
    }



    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:customer');//for customers
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('customer'); // this guard route to customer table using default login
    }

     /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker('customers');
    }


}

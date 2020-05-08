<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = RouteServiceProvider::HOME;
    //protected $redirectTo = RouteServiceProvider::DASHBOARD;
    
    //my Custome Code OverWeite redirectT0
    protected function redirectTo()    
    {
        //if (auth()->user()->role_id == 1) { /*Compare with single role id*/
        if (auth()->user()->role_id == in_array(auth()->user()->role_id, RoleId() )) { /*Compare with multiple role id. RoleId come from AuthRolePermissionHelper.php */
            return route('dashboard');

        }

        elseif (auth()->user()->role_id == 14) { /*User = 14*/
            return route('home');
        }
    }


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}

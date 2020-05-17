<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

//use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request; //custome 
use Session;


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
    //protected $redirectTo = RouteServiceProvider::HOME; //this is default
    //protected $redirectTo = RouteServiceProvider::DASHBOARD;
    
    //my Custome Code OverWeite redirectT0  for (Redirect Multi dashboard for users)
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
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
     //get from vendor\laravel\ui\auth-backend\AuthenticatesUser.php and over write this function to logged in status
    protected function authenticated(Request $request, $user)
    {
        //$credentials =  ['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ];
         //$credentials = $request->only('email', 'password');

        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
            // Authentication passed...
            return redirect()->intended('dashboard');
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ])) {            
            Auth::logout();
            //return abort(401, 'You Account is not active, Please contact with Authority ');
            Session::put('status_message','You Account is not active, Please contact with Authority');
            return redirect()->back();  
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ])) {
            Auth::logout();
            //return abort(401, 'Your Account is Pending now. Please contact with Authority');
            Session::put('status_message','Your Account is Pending now. Please contact with Authority'); 
            return redirect()->back();  
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ])) {
            Auth::logout();
            //return abort(401, 'Your Account is Block now, Please contact with Authority');
            Session::put('status_message','Your Account is Block now, Please contact with Authority'); 
            return redirect()->back(); 
        }
        
    }//*/


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

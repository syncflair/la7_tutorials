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
        elseif (auth()->user()->role_id == 7) { /*Sales = 7*/
            return route('dashboard-sales');
        }
        elseif (auth()->user()->role_id == 8) { /*Purchase = 8*/
            return route('dashboard-purchase');
        }
        elseif (auth()->user()->role_id == 9) { /*Storage = 9*/
            return route('dashboard-storage');
        }
        elseif (auth()->user()->role_id == 10) { /*Order = 10*/
            return route('dashboard-order');
        }
        elseif (auth()->user()->role_id == 11) { /*Packaging = 11*/
            return route('dashboard-packaging');
        }
        elseif (auth()->user()->role_id == 13) { /*Delivery = 13*/
            return route('dashboard-delivery');
        }
        elseif (auth()->user()->role_id == 14) { /*Supervisor = 14*/
            return route('dashboard-supervisor');
        }

        //this is guest user that only for verification check
        elseif (auth()->user()->role_id == 17) { /*Supervisor = 17*/
            return route('dashboard-guest-user');
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
            return redirect()->intended('dashboard'); //if not this route this will redirect using middleware
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ])) {            
            Auth::logout();
            //return abort(401, 'You Account is not active, Please contact with Authority ');
            Session::put('error','You Account is not active, Please contact with Authority');
            return redirect()->back();  
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ])) {
            Auth::logout();
            //return abort(401, 'Your Account is Pending now. Please contact with Authority');
            Session::put('error','Your Account is Pending now. Please contact with Authority'); 
            return redirect()->back();  
        }
        if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ])) {
            Auth::logout();
            //return abort(401, 'Your Account is Block now, Please contact with Authority');
            Session::put('error','Your Account is Not Verified, Please verify from email or contact with Authority'); 
            return redirect()->back(); 
        }

        // if (Auth::attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'role_id'=> 17 ])) {
        //     Auth::logout();
        //     //return abort(401, 'Your Account is Block now, Please contact with Authority');
        //     Session::put('error','Please Verify email.'); 
        //     return redirect()->back(); 
        // }
        
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


    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        // $request->session()->regenerateToken();

        // if ($response = $this->loggedOut($request)) {
        //     return $response;
        // }

        // return $request->wantsJson()
        //     ? new Response('', 204)
        //     : redirect('/');

        return redirect('/login');
    }
}

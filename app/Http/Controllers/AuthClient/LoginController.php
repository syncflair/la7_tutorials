<?php

namespace App\Http\Controllers\AuthClient;

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
    | Client Login Controller 
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;


    public function showLoginForm()
    {
        return view('AuthClient.login');
    }


    //login using email or phone
    public function username()
    {
        //return 'phone'; //use only phone

        $login = request()->input('username');
        if(is_numeric($login)){
            $field = 'phone';
        }
        elseif (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            $field = 'email';
        }
        // else {
        //     $field = 'username';
        // }
        request()->merge([$field => $login]);
        return $field;
    }  

     protected function validateLogin(Request $request)
    {
    	$this->validate($request, [
            //'email'   => 'required|email',
            'username'   => 'required',
            'password' => 'required|min:6'
        ],
    	[
    		//'email.required' => 'The Client email field is required.',
            'username.required' => 'The Email or Phone field is required.',
    	]);
    }
  

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = RouteServiceProvider::HOME; //this is default
   //protected $redirectTo = 'dashboard-customer'; 

    protected function redirectTo()
    {
        if (Auth::guard('client')->check() ) {
                return route('dashboard-customer');
        }
    
    }  


    protected function authenticated(Request $request, $user)
    {
        
        if ( Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) OR Auth::guard('client')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
            // Authentication passed...
           return redirect()->intended('dashboard-customer'); //if not this route this will redirect using middleware
        }

        if ( Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) OR Auth::guard('client')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) ) {            
            Auth::guard('client')->logout();
            //return abort(401, 'You Account is not active, Please contact with Authority ');
            Session::put('error','You Account is not active, Please contact with Authority');
            return redirect()->back();  
        }
        if ( Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) OR Auth::guard('client')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) ) {
            Auth::guard('client')->logout();
            //return abort(401, 'Your Account is Pending now. Please contact with Authority');
            Session::put('error','Your Account is Pending now. Please contact with Authority'); 
            return redirect()->back();  
        }
        if ( Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) OR Auth::guard('client')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) ) {
            Auth::guard('client')->logout();
            //return abort(401, 'Your Account is Block now, Please contact with Authority');
            Session::put('error','Your Account is Block now, Please contact with Authority'); 
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
        $this->middleware('guest:client')->except('logout'); //for clients
    }

    public function logout(Request $request)
    {
        Auth::guard('client')->logout();

        $request->session()->invalidate();

        // $request->session()->regenerateToken();

        // if ($response = $this->loggedOut($request)) {
        //     return $response;
        // }

        // return $request->wantsJson()
        //     ? new Response('', 204)
        //     : redirect('/');

        return redirect('/');
    }

	/**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('client'); // this guard route to client table using default login
    }


    //  public function login(Request $request)
    // {
    //  $this->validateLogin($request);
        

    //     if (Auth::guard('client')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

    //         $this->redirectTo();
           
    //      //dd(Auth::guard('client')->user()->clientType->id);
    //         //Auth::guard('client')->user() //Auth::guard('client')->user()->client_type_id
    //         //Auth::guard('client')->user()->clientType->id  //Auth::guard('client')->user()->name
    //         //Auth::guard('client')->check()
    //     }
    //     return back()->withInput($request->only('email', 'remember'))
    //          ->with('error','Email-Address And Password Are Wrong.');
    // }




      // protected function authenticated(Request $request, $user)
    // {
        
    //     if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
    //         // Authentication passed...
    //        return redirect()->intended('dashboard-customer'); //if not this route this will redirect using middleware
    //     }
    //     if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ])) {            
    //         Auth::guard('client')->logout();
    //         //return abort(401, 'You Account is not active, Please contact with Authority ');
    //         Session::put('error','You Account is not active, Please contact with Authority');
    //         return redirect()->back();  
    //     }
    //     if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ])) {
    //         Auth::guard('client')->logout();
    //         //return abort(401, 'Your Account is Pending now. Please contact with Authority');
    //         Session::put('error','Your Account is Pending now. Please contact with Authority'); 
    //         return redirect()->back();  
    //     }
    //     if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ])) {
    //         Auth::guard('client')->logout();
    //         //return abort(401, 'Your Account is Block now, Please contact with Authority');
    //         Session::put('error','Your Account is Block now, Please contact with Authority'); 
    //         return redirect()->back(); 
    //     }
        
    // }//*/
  
}

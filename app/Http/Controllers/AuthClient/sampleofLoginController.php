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
    | Login Controller
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


    // protected function attemptLogin(Request $request)
    // {
    //     return $this->guard('client')->attempt(
    //         $this->credentials($request), $request->filled('remember')
    //     );
    // }

    //  public function login(Request $request)
    // {
    // 	$this->validateLogin($request);
        

    //     if (Auth::guard('client')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

    //         $this->redirectTo();
           
    //     	//dd(Auth::guard('client')->user()->clientType->id);
    //         //Auth::guard('client')->user() //Auth::guard('client')->user()->client_type_id
    //         //Auth::guard('client')->user()->clientType->id  //Auth::guard('client')->user()->name
    //         //Auth::guard('client')->check()
    //     }
    //     return back()->withInput($request->only('email', 'remember'))
    //     		->with('error','Email-Address And Password Are Wrong.');
    // }

   

     protected function validateLogin(Request $request)
    {
    	$this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ],
    	[
    		'email.required' => 'The Client email field is required.',
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
    	
	    	if (Auth::guard('client')->user()->clientType->id == 1) { /*Customer = 1*/
	            //return redirect()->intended(route('dashboard-customer'));
	            //return redirect()->route('dashboard-customer');
	            return route('dashboard-customer');
	        }
	        elseif (Auth::guard('client')->user()->clientType->id == 2) { /*Supplier = 2*/
	            //return redirect()->intended(route('dashboard-supplier'));
	            //return redirect()->route('dashboard-supplier');
	            return route('dashboard-supplier');
	        }
	        // else{
	        //     return redirect()->route('client.login');
	        // }
    
    }  


    protected function authenticated(Request $request, $user)
    {
        //$credentials =  ['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ];
         //$credentials = $request->only('email', 'password');

        if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
            // Authentication passed...
           return redirect()->intended('dashboard-customer'); //if not this route this will redirect using middleware
        }
        if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ])) {            
            Auth::guard('client')->logout();
            //return abort(401, 'You Account is not active, Please contact with Authority ');
            Session::put('error','You Account is not active, Please contact with Authority');
            return redirect()->back();  
        }
        if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ])) {
            Auth::guard('client')->logout();
            //return abort(401, 'Your Account is Pending now. Please contact with Authority');
            Session::put('error','Your Account is Pending now. Please contact with Authority'); 
            return redirect()->back();  
        }
        if (Auth::guard('client')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ])) {
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
}

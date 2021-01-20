<?php

namespace App\Http\Controllers\AuthCustomer;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Validation\ValidationException;

//use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request; //custome 
use Session;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | customer Login Controller 
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
        // return view('AuthCustomer.login'); //for login.blade.php
        return view('website.home'); //for vue
    }


     /**
     * Get the failed login response instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
      //These credentials do not match our records. message display
    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            'username' => [trans('auth.failed')],
        ]);
    }

    //login using email or phone
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

    protected function validateLogin(Request $request)
    {
    	$this->validate($request, [
            //'email'   => 'required|email',
            //'email'   => 'required',            
            //'phone'   => 'required',
            'username'   => 'required',
            'password' => 'required|min:6'
        ],
    	[
    		//'email.required' => 'The customer email field is required.',
            //'username.required' => 'The Email or Phone field is required.',
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
        if (Auth::guard('customer')->check() ) {
                // return route('dashboard-customer');
                return route('auth/my-dashboard');
        }    
    }  


    protected function authenticated(Request $request, $user)
    {
        
        if ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
            // Authentication passed...
           // return redirect()->intended('dashboard-customer'); //if not this route this will redirect using middleware

           return response()->json(['success'=>'1']); 
           return redirect()->intended('auth/my-dashboard'); //if not this route this will redirect using middleware
        }

        if ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ]) ) {            
            Auth::guard('customer')->logout();
            //return abort(401, 'You Account is not active, Please contact with Authority ');
            //Session::put('error','You Account is not active, Please contact with Authority');
            return response()->json(['error'=>'You Account is not active, Please contact with Authority']);
            return redirect()->back();  
        }
        if ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ]) ) {
            Auth::guard('customer')->logout();
            //return abort(401, 'Your Account is Pending now. Please contact with Authority');
            //Session::put('error','Your Account is Pending now, Please contact with Authority'); 
            return response()->json(['error'=>'Your Account is Pending now, Please contact with Authority']);
            return redirect()->back();  
        }
        if ( Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) OR Auth::guard('customer')->attempt(['phone'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ]) ) {
            Auth::guard('customer')->logout();
            //return abort(401, 'Your Account is Block now, Please contact with Authority');
            //Session::put('error','Your Account is Not Verified, Please verify from email or contact with Authority'); 
            return response()->json(['error'=>'Your Account is Not Verified, Please verify from email or contact with Authority']);
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
        $this->middleware('guest:customer')->except('logout'); //for customers
    }

    public function logout(Request $request)
    {
        Auth::guard('customer')->logout();

        $request->session()->invalidate();

        // $request->session()->regenerateToken();

        // if ($response = $this->loggedOut($request)) {
        //     return $response;
        // }

        // return $request->wantsJson()
        //     ? new Response('', 204)
        //     : redirect('/');

       // return response()->json(['success'=>'1']); //for vue js
        // return redirect('/');        
        return redirect('/home');
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


    //  public function login(Request $request)
    // {
    //  $this->validateLogin($request);
        

    //     if (Auth::guard('customer')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

    //         $this->redirectTo();
           
    //      //dd(Auth::guard('customer')->user()->customerType->id);
    //         //Auth::guard('customer')->user() //Auth::guard('customer')->user()->customer_type_id
    //         //Auth::guard('customer')->user()->customerType->id  //Auth::guard('customer')->user()->name
    //         //Auth::guard('customer')->check()
    //     }
    //     return back()->withInput($request->only('email', 'remember'))
    //          ->with('error','Email-Address And Password Are Wrong.');
    // }




      // protected function authenticated(Request $request, $user)
    // {
        
    //     if (Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 1 ])) {
    //         // Authentication passed...
    //        return redirect()->intended('dashboard-customer'); //if not this route this will redirect using middleware
    //     }
    //     if (Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 2 ])) {            
    //         Auth::guard('customer')->logout();
    //         //return abort(401, 'You Account is not active, Please contact with Authority ');
    //         Session::put('error','You Account is not active, Please contact with Authority');
    //         return redirect()->back();  
    //     }
    //     if (Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 3 ])) {
    //         Auth::guard('customer')->logout();
    //         //return abort(401, 'Your Account is Pending now. Please contact with Authority');
    //         Session::put('error','Your Account is Pending now. Please contact with Authority'); 
    //         return redirect()->back();  
    //     }
    //     if (Auth::guard('customer')->attempt(['email'=>$request->{$this->username()}, 'password'=>$request->password, 'status_id'=> 4 ])) {
    //         Auth::guard('customer')->logout();
    //         //return abort(401, 'Your Account is Block now, Please contact with Authority');
    //         Session::put('error','Your Account is Block now, Please contact with Authority'); 
    //         return redirect()->back(); 
    //     }
        
    // }//*/
  
}

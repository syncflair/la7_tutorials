<?php

namespace App\Http\Controllers\AuthClient;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Client;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    public function showRegisterForm()
    {
       // print_r(RoleId);        

        return view('AuthClient.Register');
    }

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    //protected $redirectTo = RouteServiceProvider::HOME;
    //protected $redirectTo = RouteServiceProvider::DASHBOARD;
    //protected $redirectTo = 'dashboard-customer'; 


    //my Custome Code. OverWrite redirectTo
   protected function redirectTo()
    {               
        Session::put('success','Your registration is successful . Please login');  
        return route('client.login');
    } //*/


     /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //get from vendor\laravel\ui\auth-backend\RegistersUser.php and overwrite this function to prevent default login after retistration. and update redirectTo() function
   
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        //$this->guard()->login($user); //Comment this from auto login after registration.

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return $request->wantsJson()
                    ? new Response('', 201)
                    : redirect($this->redirectPath());
    }


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:client');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            'phone' => ['required', 'numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:clients'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    } 
    //regex:^(?:\+?88|88)?01[1|3-9]\d{8}$ //validate with +8801, 8801, 01 
    //regex:^?01[1|3-9]\d{8}$ //validate only with 01, 1 or 3 to 9, max 11 number

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return Client::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);
    }

    protected function guard()
    {
        return Auth::guard();
    }
}

<?php

namespace App\Http\Controllers\AuthCustomer;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\Customer;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;


use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;

use Illuminate\Support\Str; //for str::random

use Illuminate\Support\Facades\Mail;
//use Carbon\Carbon;
use Illuminate\Support\Carbon;
use App\Jobs\CustomerNotificationMailJob;

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

        //return view('AuthCustomer.Register');
        return view('website.home');
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
        //Session::put('success','Your registration is successful, Please login');
        //return response()->json(['success'=>'Your registration is successful']);  
        // return route('customer.login');
        return route('/home');
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
        $this->middleware('guest:customer');
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:customers'],
            'phone' => ['required', 'numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:customers'],
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
        $customer = Customer::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
            'email_verification_code'=> sha1(Str::random(40)), //Hash::make(Str::random(40))
            'customer_code' => customer_code_generate(), //this code will insert when register
            //'coa_code' => 103, //managed by database default value
        ]);

        if($customer != null){

            // send all mail in the queue job.
            $data = ["userInfo" => $customer, "tag" => "NewCustomerRegister"]; //pass with tag
            $job = (new CustomerNotificationMailJob($data))
                        ->delay( Carbon::now()->addSeconds(5) ); 
            dispatch($job);

            //Mail::to($customer->email)->send(new CustomerRegisterVerificationMail($customer));
            //$customer->notify(new VerifyEmail($customer)); //if using notification like this
        }

        Return $customer;
    }

    public function verifyUser(Request $request){
        //dd($request->token);
       $verifyCustomer = Customer::where('email_verification_code', $request->token)->first();
       //dd($verifyCustomer);

       if($verifyCustomer != null){
            $verifyCustomer->status_id = 1;
            $verifyCustomer->email_verification_code = null;
            $verifyCustomer->save();

            // session::put('success','You verified now, Please login');  
            //return response()->json(['error'=>'You verified now, Please login']);          
            //return redirect()->route('customer.login');
            return redirect()->route('customer.login');
            //return redirect()->intended();

       }elseif($verifyCustomer == null){
            // session::put('error','Your e-mail is already verified, Please Login or Contact with Admin');  
            //return response()->json(['error'=>'Your e-mail is already verified, Please Login or Contact with Admin']);
            //return redirect()->route('customer.login');
            return redirect()->route('customer.login');
            //return redirect()->intended();
       }
    }




    protected function guard()
    {
        return Auth::guard('customer');
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
   // protected $redirectTo = RouteServiceProvider::HOME;
    //protected $redirectTo = RouteServiceProvider::DASHBOARD;

    protected function redirectTo()    
    {

        return route('dashboard'); 
        //if (auth()->user()->role_id == 1) { /*Compare with single role id*/
        /*Compare with multiple role id. RoleId come from AuthRolePermissionHelper.php */
        // if (auth()->user()->role_id == in_array(auth()->user()->role_id, RoleId() )) { 
        //     return route('dashboard');
        // }
        // elseif (auth()->user()->role_id == 17) { /*User = 14*/
        //     return route('home');
        // }
    }//*/

    

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }
}

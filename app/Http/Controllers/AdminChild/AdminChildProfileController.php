<?php

namespace App\Http\Controllers\AdminChild;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\AdminChildNotificationMail;
use Illuminate\Support\Facades\Mail;
use App\User;

use Illuminate\Support\Facades\Hash;

class AdminChildProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
    	//return $request->id;

        $data = User::with('role','UserStatus','belongsToBranch','belongsToEmployee')
        		->where('id', $request->id)
        		->first();

        return response()->json($data);
    }




    public function ChangePassword(Request $request){
    	//return $request->all();

    	$user = auth()->user();

    	$this->validate($request, [
            'current_password' => ['required',
            	function ($attribute, $value, $fail) use ($user) {
		            if (!Hash::check($value, $user->password)) {
		                $fail('Your password was not updated, since the provided current password does not match.');
		            }
		        },
		    ], 
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
        ],
        [
            'current_password.required' => 'Current Password is Required',
        ]);

        $UpdateData = User::find($request->id);
        $UpdateData->password = Hash::make($request->password); //make hash password
        $UpdateData->save();

    	//return $request->all();

        if($UpdateData){           
            $data = ["userInfo" => $request->all(), "tag" => "PasswordChangeByAdminChild"];
            Mail::to($data['userInfo']['email'])->send(new AdminChildNotificationMail( $data ));

            return response()->json(['success'=>'Password Updated']);
        }

    }
}

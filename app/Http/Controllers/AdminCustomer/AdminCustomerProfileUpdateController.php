<?php

namespace App\Http\Controllers\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB; //for database transection

use Illuminate\Support\Facades\Mail;
use App\Mail\CustomerNotificationMail;


class AdminCustomerProfileUpdateController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware('auth:customer');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('website.home'); 
    }

    public function CustomerProfileUpdate(Request $request){

    	$this->validate($request, [
            'name' => ['required','string','max:100']  
        ]);

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	$customer = Customer::find($request->id);
		            	$customer->name = $request->name;
		            	$customer->gender = $request->gender;
		            	$customer->date_of_birth = $request->date_of_birth;
		            	$customer->save();

		            DB::commit();  

		            if($customer != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "register"];
		                //Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
		                return response()->json(['success'=>'Profile update.']); 
		            }

		        }catch(\Exception $e){
		            //logger($e->getMessage());
		            DB::rollBack();
		            return response()->json(['errors'=> $e->getMessage() ], 500); 
		        } //end try 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check


    } //End CustomerProfileUpdate

    public function SendCustomerEmailChangeVerificationCode(Request $request){  	

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();
		            
		            	$random_number = rand(100000,999999); //6 disit rand number generate
		            	$request->request->add(['generate_email_verification_code' => $random_number ]); //add something new directly to the Request Object

		            	$customer = Customer::find($request->id);
		            	$customer->email_verification_code = $random_number;
		            	$customer->save();

		            DB::commit();  

		            if($customer != null){           
		                $data = ["userInfo" => $request->all(), "tag" => "sendEmailVerificationCode"];
		                Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
		                return response()->json(['success'=>'An email verification code send to your email.']);
		                //return response()->json($request->all());  
		            }

		        }catch(\Exception $e){
		            //logger($e->getMessage());
		            DB::rollBack();
		            return response()->json(['errors'=> $e->getMessage() ], 500); 
		        } //end try 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check

    }


    public function CustomerChangeEmail(Request $request){

		$this->validate($request, [
            'new_email' => ['required','email','max:255','unique:customers,email'], 
            'email_verification_code' => ['required'], 
        ]);

		$existing_email_verification_code = Customer::select('email_verification_code')		            										->where('id', $request->id)->first();

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	if($existing_email_verification_code->email_verification_code != $request->email_verification_code){
		            		return response()->json(['error'=>'Verification code not matched!.']); 
		            	}else{
			            	$customer = Customer::find($request->id);
			            	$customer->email = $request->new_email;
			            	$customer->email_verification_code = null;
			            	$customer->save();
		            	}

		            DB::commit();  

		            if($customer != null){           
		                $data = ["userInfo" => $request->all(), "tag" => "emailHasBeenChanged"];
		                Mail::to($data['userInfo']['new_email'])->send(new CustomerNotificationMail( $data ));                
		                return response()->json(['success'=>'Email update.']); 
		            }

		        }catch(\Exception $e){
		            //logger($e->getMessage());
		            DB::rollBack();
		            return response()->json(['errors'=> $e->getMessage() ], 500); 
		        } //end try 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check

    }


    public function SendCustomerPhoneChangeVerificationCode(Request $request){  	

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();
		            
		            	$random_number = rand(100000,999999); //6 disit rand number generate
		            	$request->request->add(['generate_phone_verification_code' => $random_number ]); //add something new directly to the Request Object

		            	$customer = Customer::find($request->id);
		            	$customer->phone_verification_code = $random_number;
		            	$customer->save();

		            DB::commit();  

		            if($customer != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "sendPhoneVerificationCode"];
		                //Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
		                return response()->json(['success'=>'An phone verification code send to your phone.']); 
		            }

		        }catch(\Exception $e){
		            //logger($e->getMessage());
		            DB::rollBack();
		            return response()->json(['errors'=> $e->getMessage() ], 500); 
		        } //end try 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check

    }

    public function CustomerChangePhone(Request $request){

    	$this->validate($request, [
            'new_phone' => ['required','numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:customers,phone'],
            'phone_verification_code' => ['required'], 
        ]);

        $existing_phone_verification_code = Customer::select('phone_verification_code')		            										->where('id', $request->id)->first();

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	if($existing_phone_verification_code->phone_verification_code != $request->phone_verification_code){
		            		return response()->json(['error'=>'Verification code not matched!.']); 
		            	}else{
			            	$customer = Customer::find($request->id);
			            	$customer->phone = $request->new_phone;
			            	$customer->phone_verification_code = null;
			            	$customer->save();
		            	}

		            DB::commit();  

		            if($customer != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "register"];
		                //Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
		                return response()->json(['success'=>'Phone number update.']); 
		            }

		        }catch(\Exception $e){
		            //logger($e->getMessage());
		            DB::rollBack();
		            return response()->json(['errors'=> $e->getMessage() ], 500); 
		        } //end try 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check
    }


    public function CustomerChangePassword(Request $request){

    	$this->validate($request, [
    		'old_password' => 'required',
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
        ]);

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

            	$existing_password = Customer::select('password')->where('id', $request->id)->first(); 
                $existing_customer_password = $existing_password->password;

                //return response()->json(['success'=>$existing_customer_password ]); 
                // return response()->json(['success'=> Hash::make($request->old_password) .' --- '. Auth::guard('customer')->user()->password ]); 

                if(!Hash::check($request->old_password, $existing_customer_password )){ 
                	//if password not matched                	
                	return response()->json(['error'=>'Old password is not matched, Please try again!.']); 
                }else{
                	try{
			            DB::beginTransaction();		            	

			            	$customer = Customer::find($request->id);
			            	$customer->password = Hash::make($request->password);
			            	$customer->save();

			            DB::commit();  

			            if($customer != null){           
			                //$data = ["userInfo" => $request->all(), "tag" => "register"];
			                //Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
			                return response()->json(['success'=>'Password changed.']); 
			            }

			        }catch(\Exception $e){
			            //logger($e->getMessage());
			            DB::rollBack();
			            return response()->json(['errors'=> $e->getMessage() ], 500); 
			        } //end try
                }         		 

            }else{
	        	return response()->json(['error'=>'Something worng!.']); 
	        }//End check Auth ID With Request ID

        }//end Auth::guard Check
    }


}

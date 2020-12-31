<?php

namespace App\Http\Controllers\AdminCustomer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB; //for database transection


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


    public function CustomerChangeEmail(Request $request){

		$this->validate($request, [
            'email' => ['required','email','max:255','unique:customers,email'], 
        ]);

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	$customer = Customer::find($request->id);
		            	$customer->email = $request->email;
		            	$customer->save();

		            DB::commit();  

		            if($customer != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "register"];
		                //Mail::to($data['userInfo']['email'])->send(new CustomerNotificationMail( $data ));                
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


    public function CustomerChangePhone(Request $request){

    	$this->validate($request, [
            'phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:customers,phone'],
        ]);

    	if(Auth::guard('customer')->check()){
           
            if(Auth::guard('customer')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	$customer = Customer::find($request->id);
		            	$customer->phone = $request->phone;
		            	$customer->save();

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

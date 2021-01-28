<?php

namespace App\Http\Controllers\AdminSupplier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Supplier;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB; //for database transection

use Illuminate\Support\Facades\Mail;
use App\Mail\SupplierNotificationMail;

class AdminSupplierProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware('auth:supplier');
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


    public function SupplierProfileUpdate(Request $request){

    	$this->validate($request, [
            'name' => ['required','string','max:100']  
        ]);

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	$supplier = Supplier::find($request->id);
		            	$supplier->name = $request->name;
		            	$supplier->supplier_desc = $request->supplier_desc;
		            	$supplier->supplier_address = $request->supplier_address;
		            	//$supplier->gender = $request->gender;
		            	//$supplier->date_of_birth = $request->date_of_birth;
		            	$supplier->save();

		            DB::commit();  

		            if($supplier != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "register"];
		                //Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));                
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


    } //End SupplierProfileUpdate


    public function SendSupplierEmailChangeVerificationCode(Request $request){  	

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();
		            
		            	$random_number = rand(100000,999999); //6 disit rand number generate
		            	$request->request->add(['generate_email_verification_code' => $random_number ]); //add something new directly to the Request Object

		            	$supplier = Supplier::find($request->id);
		            	$supplier->email_verification_code = $random_number;
		            	$supplier->save();

		            DB::commit();  

		            if($supplier != null){           
		                $data = ["userInfo" => $request->all(), "tag" => "sendEmailVerificationCode"];
		                Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));                
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


    public function SupplierChangeEmail(Request $request){

		$this->validate($request, [
            'new_email' => ['required','email','max:255','unique:suppliers,email'], 
            'email_verification_code' => ['required'], 
        ]);

        $existing_email_verification_code = Supplier::select('email_verification_code')		            										->where('id', $request->id)->first();

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();	

		            	if($existing_email_verification_code->email_verification_code != $request->email_verification_code){
		            		return response()->json(['error'=>'Verification code not matched!.']); 
		            	}else{
			            	$supplier = Supplier::find($request->id);
			            	$supplier->email = $request->new_email;
			            	$supplier->email_verification_code = null;
			            	$supplier->save();
		            	}		            	

		            DB::commit();  

		            if($supplier != null){           
		                $data = ["userInfo" => $request->all(), "tag" => "emailHasBeenChanged"];
		                Mail::to($data['userInfo']['new_email'])->send(new SupplierNotificationMail( $data ));                
		                return response()->json(['success'=>'Email has been changed.']); 
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


    public function SendSupplierPhoneChangeVerificationCode(Request $request){  	

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();
		            
		            	$random_number = rand(100000,999999); //6 disit rand number generate
		            	$request->request->add(['generate_phone_verification_code' => $random_number ]); //add something new directly to the Request Object

		            	$supplier = Supplier::find($request->id);
		            	$supplier->phone_verification_code = $random_number;
		            	$supplier->save();

		            DB::commit();  

		            if($supplier != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "sendPhoneVerificationCode"];
		                //Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));                
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


    public function SupplierChangePhone(Request $request){

    	$this->validate($request, [
            'new_phone' => ['required','numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:suppliers,phone'],
            'phone_verification_code' => ['required'], 
        ]);

    	$existing_phone_verification_code = Supplier::select('phone_verification_code')		            										->where('id', $request->id)->first();

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

           		try{
		            DB::beginTransaction();

		            	if($existing_phone_verification_code->phone_verification_code != $request->phone_verification_code){
		            		return response()->json(['error'=>'Verification code not matched!.']); 
		            	}else{
			            	$supplier = Supplier::find($request->id);
			            	$supplier->phone = $request->new_phone;
			            	$supplier->phone_verification_code = null;
			            	$supplier->save();
		            	}

		            DB::commit();  

		            if($supplier != null){           
		                //$data = ["userInfo" => $request->all(), "tag" => "register"];
		                //Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));                
		                return response()->json(['success'=>'Phone number has been changed.']); 
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


     public function SupplierChangePassword(Request $request){

    	$this->validate($request, [
    		'old_password' => 'required',
            'password' => 'required|min:8|max:30',   //confirmed
            'password_confirmation' => 'required|same:password',
        ]);

    	if(Auth::guard('supplier')->check()){
           
            if(Auth::guard('supplier')->user()->id == $request->id ){

            	$existing_password = Supplier::select('password')->where('id', $request->id)->first(); 
                $existing_supplier_password = $existing_password->password;

                //return response()->json(['success'=>$existing_supplier_password ]); 
                // return response()->json(['success'=> Hash::make($request->old_password) .' --- '. Auth::guard('supplier')->user()->password ]); 

                if(!Hash::check($request->old_password, $existing_supplier_password )){ 
                	//if password not matched                	
                	return response()->json(['error'=>'Old password is not matched, Please try again!.']); 
                }else{
                	try{
			            DB::beginTransaction();		            	

			            	$supplier = Supplier::find($request->id);
			            	$supplier->password = Hash::make($request->password);
			            	$supplier->save();

			            DB::commit();  

			            if($supplier != null){           
			                //$data = ["userInfo" => $request->all(), "tag" => "register"];
			                //Mail::to($data['userInfo']['email'])->send(new SupplierNotificationMail( $data ));                
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

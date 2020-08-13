<?php

namespace App\Http\Controllers\Admin\HRM;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;
//use App\Mail\EmployeeRegisterByAdminMail;
//use App\Mail\EmployeeNotificationMail;
//use Illuminate\Support\Facades\Mail;
use App\Models\HRM\Employee;
use App\Models\HRM\DepartmentEmployee;

use Illuminate\Support\Facades\DB; //for database transection
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config; //get constant velue without - \Config::get('constants.UserFliesPath'); app/config

class EmployeeController extends Controller
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
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 100;
       }

       $data = Employee::with('Departments','belongsToBranch', 'belongsToJobTitle','hasOneUser')->paginate($perPage);
       return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  // return $request->all();

        $this->validate($request, [
            'emp_name' => 'required|min:3|max:80', 
            'emp_email' => 'email|unique:employees,emp_email', 
            'emp_phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:employees,emp_phone'], //right way to use preg_match
            'job_title_id' => 'required', 
            'status_id' => 'required', 
            'emp_gender' => 'required',             
            'branch_id' => 'required',             
        ],
        [   
            'emp_name.required' => 'The Employee name field is required.',            
            'emp_email.required' => 'The Employee email field is required.', 
            'job_title_id.required' => 'The Job Title field is required.',
            'status_id.required' => 'The User Status field is required.',
            'emp_gender.required' => 'The Gender field is required.',
            'emp_phone.numeric' => 'The Phone number must be numeric.',
            'emp_phone.unique' => 'The Phone number already used.',
            'emp_phone.regex' => 'The Phone number is not valid.',
            'branch_id.required' => 'The Branch field is required.',             
        ]);
       
        $data =array();
        $data['branch_id']=$request->branch_id; 
        $data['emp_name']=$request->emp_name;
        $data['emp_email']=$request->emp_email;
        $data['emp_phone']=$request->emp_phone;
        $data['job_title_id']=$request->job_title_id;
        $data['status_id']=$request->status_id; 
        $data['emp_father_name']=$request->emp_father_name;        
        $data['emp_mother_name']=$request->emp_mother_name;        
        $data['emp_wife_name']=$request->emp_wife_name;        
        $data['emp_dob']=$request->emp_dob;        
        $data['emp_gender']=$request->emp_gender;        
        $data['emp_nid']=$request->emp_nid;        
        $data['emp_passport']=$request->emp_passport;        
        $data['emp_driving_license']=$request->emp_driving_license;        
        $data['emp_hire_date']=$request->emp_hire_date;        
        $data['emp_desc']=$request->emp_desc;        
        $data['emp_qualification']=$request->emp_qualification; 
        $data['emp_experience']=$request->emp_experience; 
        $data['emp_previous_job_history']=$request->supplier_address; 
        $data['emp_permanent_address']=$request->emp_permanent_address; 

        $image_base64 = $request->avatar;

        if($image_base64){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{               

               //new name generate from base64 file
                $imageName = slug_generator($request->emp_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];

                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);                  

                Storage::disk('s3')->put('employees/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('employees/'.$imageName, $resized_image );//for local storage

                //s3_url get from constants file 
                $data['avatar'] = Config::get('constants.s3_url').'employees/'.$imageName; //for s3
                // $data['avatar'] = 'storage/employees/'.$imageName; //for public storage
                
            }//end image type check                         
        }else{
            $data['avatar'] = null;
            //$employee = Employee::create($data); 
            //$employee->Departments()->attach($request->departments);

            // $j_data = [];
            // foreach($request->departments as $value)
            // {
            //     $j_data = [
            //         'employee_id' => $employee->id,
            //         'department_id' =>$value,
            //     ];
            //     $insert[] = $j_data;
            // }
            // DepartmentEmployee::insert($insert); 
            
            //$lastInsertedId= $employee->id;
           // return response()->json(['success'=>'Employee inserted successfully Without Image']);
          
        }

        try{
            DB::beginTransaction();

            $employee = Employee::create($data); 
            $employee->Departments()->attach($request->departments);          

            DB::commit();            
            return response()->json(['success'=>'Employee inserted']);
            
        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   //return $request->all();
       // return $request->departments;
        $this->validate($request, [
            'emp_name' => 'required|min:3|max:80', 
            'emp_email' => 'email|unique:employees,emp_email,'.$id, 
            'emp_phone' => ['numeric','regex:/^01[1|3-9]\d{8}$/', 'unique:employees,emp_phone,'.$id ], //right way to use preg_match
            'job_title_id' => 'required', 
            'status_id' => 'required', 
            'emp_gender' => 'required',
            'branch_id' => 'required',
        ],
        [
            'emp_name.required' => 'The Employee name field is required.',            
            'emp_email.required' => 'The Employee email field is required.',           
            'job_title_id.required' => 'The Job Title field is required.',            
            'status_id.required' => 'The User Status field is required.',
            'emp_gender.required' => 'The Gender field is required.',
            'emp_phone.numeric' => 'The Phone number must be numeric.',
            'emp_phone.unique' => 'The Phone number already used.',
            'emp_phone.regex' => 'The Phone number is not valid.', 
            'branch_id.required' => 'The Branch field is required.',            
        ]);
       
       
        $data =array();
        $data['branch_id']=$request->branch_id;        
        $data['emp_name']=$request->emp_name;
        $data['emp_email']=$request->emp_email;
        $data['emp_phone']=$request->emp_phone;
        $data['job_title_id']=$request->job_title_id;
        $data['status_id']=$request->status_id; 
        $data['emp_father_name']=$request->emp_father_name;        
        $data['emp_mother_name']=$request->emp_mother_name;        
        $data['emp_wife_name']=$request->emp_wife_name;        
        $data['emp_dob']=$request->emp_dob;        
        $data['emp_gender']=$request->emp_gender;        
        $data['emp_nid']=$request->emp_nid;        
        $data['emp_passport']=$request->emp_passport;        
        $data['emp_driving_license']=$request->emp_driving_license;        
        $data['emp_hire_date']=$request->emp_hire_date;        
        $data['emp_desc']=$request->emp_desc;        
        $data['emp_qualification']=$request->emp_qualification; 
        $data['emp_experience']=$request->emp_experience; 
        $data['emp_previous_job_history']=$request->supplier_address; 
        $data['emp_permanent_address']=$request->emp_permanent_address; 

        $image_base64 = $request->avatar;

        if( Str::length($image_base64) > 150){ /*larvel helper function*/
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                 //query for existing image
                $existing_image = Employee::select('avatar')->where('id', $id)->first();  

                if($existing_image->avatar != null){            
                    $parts = parse_url($existing_image->avatar); 
                    $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
                    Storage::disk('s3')->delete($parts); //dd($parts);
                }  

                // if(!empty($existing_image->avatar)) {
                //     File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                // }//else{echo 'Empty';}  

                //new name generate from base64 file
                $imageName = slug_generator($request->emp_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image_base64, 0, strpos($image_base64, ';')))[1])[1];
                
                //save image using intervention image
                $replace = substr($image_base64, 0, strpos($image_base64, ',')+1); 
                $image = str_replace($replace, '', $image_base64); 
                $image = str_replace(' ', '+', $image);
                $image = base64_decode($image); 
                $resized_image = \Image::make($image)->resize(200, 120)
                    //->text('SHORBORAHO', 120, 110, function($font){ $font->size(24); $font->color('#fdf6e3'); })
                    ->insert(Config::get('constants.watermark'))->stream($imageExt, 100);  
                        
                Storage::disk('s3')->put('employees/'.$imageName, $resized_image ); //for s3
                //Storage::disk('public')->put('employees/'.$imageName, $resized_image );//for public storage

                //s3_url get from constants file 
                $data['avatar'] = Config::get('constants.s3_url').'employees/'.$imageName;
                // $data['avatar'] = 'storage/employees/'.$imageName; //for public storage



            }//end image type check                         
        }else{
            $existing_image = Employee::select('avatar')->where('id', $request->id)->first();
            $data['avatar'] = $existing_image->avatar;
            // return response()->json(['success'=>'Employee Update successfully Without Image']);
           // \Mail::to($employee->email)->send(new VerificationEmail($employee)); //for verification email send            
        }


        try{
            DB::beginTransaction();

            $employee = Employee::find($request->id)->update($data);
            $abcd = Employee::find($request->id); 
            $abcd->Departments()->sync($request->departments); //update department_employee            

            DB::commit();            
            return response()->json(['success'=>'Employee Update']);

        }catch(\Exception $e){
            //logger($e->getMessage());
            DB::rollBack();
            return response()->json(['errors'=> $e->getMessage() ], 500); 
        }

        
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //query for existing image
        $existing_image = Employee::select('avatar')->where('id', $id)->first();   

        if($existing_image->avatar != null){            
            $parts = parse_url($existing_image->avatar); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 
                        
        // if( File::exists($existing_image->avatar) ) {  
        //     File::delete($existing_image->avatar); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }

        $data = Employee::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    //delect single image
    public function DeleteImage($id){
        //query for existing image
        $existing_image = Employee::select('avatar')->where('id', $id)->first();                   
         //for s3
        if($existing_image->avatar != null){            
            $parts = parse_url($existing_image->avatar); 
            $parts = ltrim($parts['path'],'/'); //remove '/' from start of string
            Storage::disk('s3')->delete($parts);
            //dd($parts);
        } 

        //delete single image from public storage                                         
        // if( File::exists($existing_image->avatar) ) {  
        //     File::delete($existing_image->avatar); 
        //     //delete file //use Illuminate\Support\Facades\File; at top
        // }
      
        //update image field
        $data = Employee::find($id);
        $data->avatar = null; 
        $data->save();

        if($data){
            return response()->json(['success'=> 'Image deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    public function search(Request $request){
        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 100;
        }

        $searchKey = $request->q;
        $searchOption = $request->so;

        if(!empty($searchKey) && empty($searchOption)){
        //if($search = \Request::get('q')){
            $searchResult = Employee::with('Departments','belongsToBranch', 'belongsToJobTitle')
                ->where(function($query) use ($searchKey){
                $query->where('employees.emp_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('employees.emp_email','LIKE','%'.$searchKey.'%')
                        ->orWhere('employees.emp_phone','LIKE','%'.$searchKey.'%')
                        ->orWhere('employees.emp_gender','LIKE','%'.$searchKey.'%')
                        ->orWhere('employees.emp_dob','LIKE','%'.$searchKey.'%')
                        ->orWhere('employees.created_at','LIKE','%'.$searchKey.'%')
                        ->orWhere('user_status.us_name','LIKE','%'.$searchKey.'%');
            })
            ->select('employees.*','user_status.us_name')
            ->join('user_status', 'employees.status_id','=', 'user_status.id')
            ->paginate($perPage);

        }elseif(!empty($searchKey) && !empty($searchOption)){
            $searchResult = Employee::with('Departments','belongsToBranch', 'belongsToJobTitle')
                ->where(function($query) use ($searchKey, $searchOption){
                    if($searchOption == 'us_name'){
                        $query->where( 'user_status.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }else{
                        $query->where( 'employees.'.$searchOption,'LIKE','%'.$searchKey.'%');
                    }                
                })
            ->select('employees.*','user_status.us_name')
            ->join('user_status', 'employees.status_id','=', 'user_status.id')
            ->paginate($perPage);
            
        }else{
            $searchResult = Employee::with('Departments','belongsToBranch', 'belongsToJobTitle')->paginate($perPage);
        }
        //return $searchResult;
        return response()->json($searchResult);
    }//end search


     //search for auto complete (Request from Customer)
    public function autoCompleteSearch(Request $request){
        $searchKey = $request->q;

        if(!empty($searchKey) ){
            $searchResult = Employee::where(function($query) use ($searchKey){
                $query->where('emp_name','LIKE','%'.$searchKey.'%')
                        ->orWhere('emp_email','LIKE','%'.$searchKey.'%')
                        ->orWhere('emp_phone','LIKE','%'.$searchKey.'%');
            })->select('id', 'emp_name')->get();

        }
        //return $searchResult;
        return response()->json($searchResult);
    }

    //selected Department (Request from Customer)
    public function getSelectedEmployee(Request $request){
        $searchKey = $request->q;
        //$searchResult = Employee::whereIn('id', $searchKey)
        $searchResult = Employee::where('id', $searchKey)
                        ->select('id','emp_name')
                        ->get(); 
        return response()->json($searchResult);
    }//end search

}

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
            $perPage = 10;
       }

       $data = Employee::with('Departments','belongsToBranch', 'belongsToJobTitle')->paginate($perPage);
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

        $image = $request->avatar;

        if($image){
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{               

                //new name generate from base64 file
                $imageName = slug_generator($request->emp_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(150, 150) 
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(storage_path('app/public/employees/').$imageName);
                $data['avatar'] = 'storage/employees/'.$imageName;

                // $employee = Employee::create($data); 

                // return response()->json(['success'=>'Employee inserted successfully ']);
                
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

        $employee = Employee::create($data); 
        $employee->Departments()->attach($request->departments);

        return response()->json(['success'=>'Employee inserted successfully ']);
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

        $image = $request->avatar;

        if( Str::length($image) > 150){ /*larvel helper function*/
            //return $imageSize =getimagesize($image);
            $imageExt = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            if( $imageExt != in_array( $imageExt, array('jpeg','jpg','png','gif','tiff') )  ){
                return response()->json(['errors'=>'Only support jpeg, jpg, png, gif, tiff']);
            }else{

                 //query for existing image
                $existing_image = Employee::select('avatar')->where('id', $id)->first();                   
                if(!empty($existing_image->avatar)) {
                    File::delete($existing_image->avatar); //delete file //use Illuminate\Support\Facades\File; at top
                }//else{echo 'Empty';}  


                //new name generate from base64 file
                $imageName = slug_generator($request->emp_name).'-'.Str::random(40).'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                //save image using intervention image
                \Image::make($image)
                    //->fit(200, 200)
                    ->resize(250, 250)
                   // ->text('SHORBORAHO', 140, 190)
                    ->save(storage_path('app/public/employees/').$imageName);
                $data['avatar'] = 'storage/employees/'.$imageName;

                // $employee = Employee::whereId($request->id)->update($data);
                // return response()->json(['success'=>'Employee Update successfully ']);
            }//end image type check                         
        }else{
            $existing_image = Employee::select('avatar')->where('id', $request->id)->first();
            $data['avatar'] = $existing_image->avatar;

            // $employee = Employee::whereId($request->id)->update($data); 
            // $employee = Employee::find($request->id)->update($data);
            // $abcd = Employee::find($request->id); 
            // $abcd->Departments()->sync($request->departments);
            // return response()->json(['success'=>'Employee Update successfully Without Image']);
           // \Mail::to($employee->email)->send(new VerificationEmail($employee)); //for verification email send            
        }


        $employee = Employee::find($request->id)->update($data);
        $abcd = Employee::find($request->id); 
        $abcd->Departments()->sync($request->departments); //update department_employee
        return response()->json(['success'=>'Employee Update successfully']);
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
        if( File::exists($existing_image->avatar) ) {  
            File::delete($existing_image->avatar); 
            //delete file //use Illuminate\Support\Facades\File; at top
        }

        $data = Employee::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }


    public function search(Request $request){
        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 50;
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



}

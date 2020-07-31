<?php

namespace App\Models\HRM;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';

    protected $guarded = []; 


    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        return $this->belongsTo(App\Models\Settings\UserStatus::class);
    }

    public function Departments(){
        // return $this->belongsToMany('App\Models\Settings\Department', 'department_employee');
       return $this->belongsToMany('App\Models\Settings\Department', 'department_employee', 'employee_id', 'department_id')
                ->withTimestamps();
       //return $this->belongsToMany(App\Models\Settings\Department::class, 'department_employee', 'employee_id', 'department_id'); /

       //->withTimestamps(); //for update time 
       //->withPivot('fieldName'); //for extra field view from join table
    }

    //Employee belongsTo Branch
    public function belongsToBranch(){
        return $this->belongsTo('App\Models\Settings\BranchInfo', 'branch_id');
    }

    //Employee belongsTo JobTitle
    public function belongsToJobTitle(){
        return $this->belongsTo(JobTitle::class, 'job_title_id');
    }
}
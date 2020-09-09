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
       return $this->belongsToMany(Department::class, 'department_employee', 'employee_id', 'department_id')
                ->withTimestamps();

       //->withTimestamps(); //for update time 
       //->withPivot('fieldName'); //for extra field view from join table
    }

    //Employee hasMany Payrolls
    public function hasManyPayroll()
    {
       return $this->hasMany(Payroll::class, 'emp_id');
    }

    //Employee belongsTo Branch
    public function belongsToBranch(){
        return $this->belongsTo('App\Models\Settings\BranchInfo', 'branch_id');
    }

    //Employee belongsTo JobTitle
    public function belongsToJobTitle(){
        return $this->belongsTo(JobTitle::class, 'job_title_id');
    }

     //Employee shop hasOne Users
    public function hasOneUser()
    {
        return $this->hasOne('App\User', 'employee_id');
    }
}
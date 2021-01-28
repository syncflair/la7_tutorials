<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


//'implements MustVerifyEmail' add to user class to enable email verification after user registration 

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;


    // protected $guard = 'web'; //custome....

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id', 'status_id','employee_id','avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    //My Custome Relation --  user belong to this Role 
    public function role(){
        //return $this->belongsTo('App\Models\Role');
        // return $this->belongsTo(Models\Role::class);
        return $this->belongsTo(Role::class);
    }

    //User belongsTo belongsToBranch
    public function belongsToBranch(){
        // return $this->belongsTo('App\Models\Settings\BranchInfo', 'branch_id')->select('id','branch_name');
        return $this->belongsTo('App\Models\Settings\BranchInfo', 'branch_id')->select('id','branch_name');
    }

    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        //return $this->belongsTo(Models\Settings\UserStatus::class, 'user_id');
        // return $this->belongsTo('App\Models\Settings\UserStatus', 'status_id');
        return $this->belongsTo('App\Models\Settings\UserStatus', 'status_id');
    }

    //A User Has Many Products (hasMany())
    public function haseManyProduct(){
        //return $this->hasMany('App\Models\Product');
        // return $this->hasMany(Models\Product::class);  
        return $this->hasMany(Product::class);  
    }


    //User belongs to Employee
    public function belongsToEmployee(){
        // return $this->belongsTo('App\Models\HRM\Employee', 'employee_id')->with('belongsToJObTitle');
        return $this->belongsTo('App\Models\HRM\Employee', 'employee_id')->with('belongsToJObTitle');
        //->select('id','emp_name','emp_job_type');
        //return $this->belongsTo(Models\Supplier\Vendor::class, 'vendor_id');
    }

    //Employee belongsTo belongsToJObTitle
    public function belongsToJObTitle(){
        // return $this->belongsTo('App\Models\HRM\JobTitle', 'job_title_id');
        return $this->belongsTo('HRM\JobTitle', 'job_title_id');
    }

    //Employee haseMany Department
    // public function belongsToManyDepartment(){
    //     return $this->belongsToMany('App\Models\HRM\Department', 'department_employee', 'employee_id', 'department_id');
    // }


    
}

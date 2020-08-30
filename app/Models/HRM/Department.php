<?php

namespace App\Models\HRM;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'departments';

    protected $guarded = []; 


    public function Employees(){
        // return $this->belongsToMany('App\Models\HRM\Employee', 'department_employee');
        return $this->belongsToMany(Employee::class, 'department_employee', 'department_id', 'employee_id');
        // return $this->belongsToMany('App\Models\HRM\Employee', 'department_employee', 'department_id', 'employee_id');
    }
}

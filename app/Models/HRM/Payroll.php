<?php

namespace App\Models\HRM;

use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    protected $table = 'payrolls';

    protected $guarded = []; 

    //Payroll belongsTo Employee
    public function belongsToEmployee(){
        return $this->belongsTo(Payroll::class, 'emp_id');
    }
}

<?php

namespace App\Models\HRM;

use Illuminate\Database\Eloquent\Model;

class JobTitle extends Model
{
    protected $table = 'job_titles';

    protected $guarded = []; 


    //JobTitle hasMany Employee
    public function hasManyEmployee()
    {
       return $this->hasMany(Employee::class, 'job_title_id');
    }
}

<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class BranchInfo extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'branch_info';


    // protected $fillable = [
    // 	'org_id','branch_name','branch_code', 'branch_desc', 'branch_email', 'branch_phone', 'branch_address','zone','city','state','country','is_enabled'
    // ];

    protected $guarded = []; 

    public function Organization(){
        //return $this->hasOne('App\Models\BranchInfo');
        return $this->hasOne(OrganizationInfo::class);  
    }


    //Branch hasMany employee
    public function hasManyEmployee()
    {
        return $this->hasMany('App\Models\HRM\Employee', 'branch_id');
    }
}

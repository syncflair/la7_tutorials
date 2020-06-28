<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class OrganizationInfo extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'organization_info';



    protected $fillable = [
        'org_name','org_business_type', 'org_desc', 'org_license_desc', 'closing_period', 'org_email', 'org_phone', 'org_url','org_address','city','state','country','org_logo'
    ];


    public function Branches(){
        //return $this->hasMany('App\BranchInfo');
        return $this->hasMany(BranchInfo::class);  
    }
}

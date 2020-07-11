<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Model;

class ChartOfAccounts extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chart_of_accounts';

    protected $guarded = []; 


    //sub child query
    public function sub_child_coas()
    {
       return $this->hasMany(ChartOfAccounts::class,'parent_id');
    }

    //child query
    public function child_coas()
    {
       //return $this->hasMany(ChartOfAccounts::class, 'parent_id')->with('sub_child_coas')->where('is_enabled', 1); //for Public
       return $this->hasMany(ChartOfAccounts::class, 'parent_id')->with('sub_child_coas'); //for admin
        /*where('is_enabled', 1) - is for all sub-category*/
    }
}

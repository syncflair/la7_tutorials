<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Model;

class AccountHead extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'account_heads';

    protected $guarded = []; 


    //sub child query
    public function sub_child_account_head()
    {
       return $this->hasMany(AccountHead::class,'parent_id');
    }

    //child query
    public function child_account_head()
    {
       //return $this->hasMany(AccountHead::class, 'parent_id')->with('sub_child_coas')->where('is_enabled', 1); //for Public
       return $this->hasMany(AccountHead::class, 'parent_id')->with('sub_child_account_head'); //for admin
        /*where('is_enabled', 1) - is for all sub-category*/
    }
}

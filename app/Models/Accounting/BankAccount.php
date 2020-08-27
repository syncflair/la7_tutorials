<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bank_accounts';

    protected $guarded = []; 

    //sub child query
    // public function sub_child_account_head()
    // {
    //    return $this->hasMany(AccountHead::class,'parent_id');
    // }
}

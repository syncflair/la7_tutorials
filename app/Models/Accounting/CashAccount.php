<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Model;

class CashAccount extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cash_accounts';

    protected $guarded = []; 

    //sub child query
    // public function sub_child_account_head()
    // {
    //    return $this->hasMany(AccountHead::class,'parent_id');
    // }
}

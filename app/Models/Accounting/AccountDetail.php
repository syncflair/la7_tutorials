<?php

namespace App\Models\Accounting;

use Illuminate\Database\Eloquent\Model;

class AccountDetail extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'account_details';

    protected $guarded = []; 

    //AccountDetails Value belongsTo Account Head
    public function belongsToAccountHead(){
        return $this->belongsTo(AccountHead::class, 'coa_id');
    }

    //AccountDetails Value belongsTo Branch
    public function belongsToBranch(){
        return $this->belongsTo('App\Models\Settings\BranchInfo', 'branch_id'); 
    }
}

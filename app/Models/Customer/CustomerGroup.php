<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Model;

class CustomerGroup extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_groups';

    protected $guarded = []; 

    //Customer Group hasMany customer
    public function hasManyCustomer()
    {
        // return $this->hasMany('App\Customer', 'customer_group_id');
        return $this->hasMany('App\Models\Customer', 'customer_group_id');
    }
}

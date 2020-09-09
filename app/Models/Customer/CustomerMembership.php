<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Model;

class CustomerMembership extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_memberships';

    protected $guarded = []; 


    //Customer Membership hasMany customer
    public function hasManyCustomer()
    {
        return $this->hasMany('App\Customer', 'customer_membership_id');
    }
}

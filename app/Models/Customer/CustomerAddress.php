<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Model;

class CustomerAddress extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_addresses';

    protected $guarded = []; 


    //Customer address hasMany customer
    // public function hasManyCustomer()
    // {
    //     return $this->hasMany('App\Customer', 'customer_id');
    // }

}

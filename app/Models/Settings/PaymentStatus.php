<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class PaymentStatus extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payment_status';

    protected $guarded = []; 
}

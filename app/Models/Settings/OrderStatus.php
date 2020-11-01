<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'order_status';

    protected $guarded = []; 
}

<?php

namespace App\Models\Purchase;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'purchase_orders';

    protected $guarded = []; 



     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'pur_order_details' => 'array',      
    ];
}

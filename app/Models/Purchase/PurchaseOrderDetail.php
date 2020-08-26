<?php

namespace App\Models\Purchase;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderDetail extends Model
{
   

     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'purchase_order_details';

    //protected $guarded = []; 

    //query except created_at updated_at
    // protected $hidden = ['id','category_id','created_at','updated_at'];
    protected $hidden = ['id','created_at','updated_at'];


    
}

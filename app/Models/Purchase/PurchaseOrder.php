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



    //this function for query purchase order Detials ()
    public function pur_order_details(){
        return $this->hasMany(PurchaseOrderDetail::class,'pur_order_id');
            //->select('language_id', 'lang_code','category_name', 'category_desc');
    }

    //this function for insert update data to join (pivot) table
    public function PurOrderDetails(){
        //Join Model, pivot table, FK of related to this model, FK of join model
       return $this->belongsToMany('App\Models\Catalog\Product', 'purchase_order_details', 'pur_order_id', 'product_id')
            ->withPivot('batch_no', 'mfg_date','exp_date','pro_desc','mrp_price','mrp_after_discount_or_vat','unit_id','p_unit_value','pro_qty','pro_free_qty','discount_fixed','discount_percent','vat_fixed','vat_percent','pod_line_total')
            ->withTimestamps();
    }
}

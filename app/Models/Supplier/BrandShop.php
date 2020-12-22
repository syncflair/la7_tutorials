<?php

namespace App\Models\Supplier;

use Illuminate\Database\Eloquent\Model;

class BrandShop extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brand_shops';

    protected $guarded = []; 

    //Brand shop hasMany supplier
    public function hasManySupplier()
    {
        // return $this->hasMany('App\Supplier', 'brand_shop_id');
        return $this->hasMany('App\Models\Supplier', 'brand_shop_id');
    }
}

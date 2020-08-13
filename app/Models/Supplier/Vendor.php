<?php

namespace App\Models\Supplier;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vendors';

    protected $guarded = []; 

    //Vendor BelongsTo UserStatus
    public function UserStatus(){
        return $this->belongsTo('App\Models\Settings\UserStatus', 'status_id')->select('id', 'us_name');
    }

    //Brand belongs to Brand Shop
    public function belongsToBrandShop(){
        //return $this->belongsTo('App\Models\Supplier\BrandShop', 'brand_shop_id');
        return $this->belongsTo(BrandShop::class, 'brand_shop_id')->select('id', 'brand_shop_title');
    }

    //vendor shop hasMany supplier
    public function hasManySupplier()
    {
        return $this->hasMany('App\Supplier', 'vendor_id');
    }
}

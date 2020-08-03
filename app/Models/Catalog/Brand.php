<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{

	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $guarded = []; 


    //Brand hasMany product
    public function hasManyProduct()
    {
       return $this->hasMany(Product::class, 'brand_id');
    }
}

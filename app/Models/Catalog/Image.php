<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'images';

    protected $guarded = []; 


    //Image belongsTo Product
    public function belongsToProduct(){
        return $this->belongsTo(Product::class, 'product_id');
    }
}

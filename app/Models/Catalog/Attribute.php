<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'attributes';

    protected $guarded = []; 

    //Attribute hasMany attribute value
    public function hasManyAttributeValue(){
       return $this->hasMany(AttributeValue::class, 'attribute_id');
    }
}

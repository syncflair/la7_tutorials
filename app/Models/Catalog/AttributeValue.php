<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class AttributeValue extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'attribute_values';

    protected $guarded = []; 

    //Attribute Value belongsTo Attribute
    public function belongsToAttribute(){
        return $this->belongsTo(Attribute::class, 'attribute_id');
    }
}

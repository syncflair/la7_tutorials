<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $guarded = []; 



     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'pro_translation' => 'array',
    ];

    //Product belongs to Status Master
    public function belongsToStatusMaster(){
        return $this->belongsTo('App\Models\Settings\StatusMaster', 'status_m_id'); 
    }


}

<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'settings';

    protected $guarded = []; 

     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'image_resolution' => 'array',      
        'json_test' => 'array',      
    ];


    //Settigns belongsTo Language
    public function belongsToLanguage(){
        return $this->belongsTo(Language::class, 'language_id');
    }

    //Settigns belongsTo Currency
    public function belongsToCurrency(){
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}

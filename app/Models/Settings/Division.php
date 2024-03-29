<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'divisions';

    protected $guarded = []; 


    //Division belongsTo Country
    public function belongsToCountry(){
        return $this->belongsTo(Country::class, 'country_id');
    }

    //Division hasMany District
    public function hasManyDistrict()
    {
       return $this->hasMany(District::class, 'division_id');
    }

    
}

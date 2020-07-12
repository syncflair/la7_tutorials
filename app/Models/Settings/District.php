<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'districts';

    protected $guarded = []; 



    //District hasMany DistrictZone
    public function hasManyDistrictZone()
    {
       return $this->hasMany(DistrictZone::class, 'district_id');
    }

    //District belongsTo Division
    public function belongsToDivision(){
        return $this->belongsTo(Division::class, 'division_id');
    }
}

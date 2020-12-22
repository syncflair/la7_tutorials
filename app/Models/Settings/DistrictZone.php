<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class DistrictZone extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'district_zones';

    protected $guarded = []; 


    //DistrictZone belongsTo District
    public function belongsToDistrict(){
        return $this->belongsTo(District::class, 'district_id');
    }



    //Check later for use(Confuse)
    public function hasManySupplier(){
        return $this->hasMany(App\Models\Supplier::class, 'dist_zone_id');
    }
}
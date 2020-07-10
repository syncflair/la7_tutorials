<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'countries';

    protected $guarded = []; 
}

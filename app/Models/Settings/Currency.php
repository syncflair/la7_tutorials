<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'currencies';

    protected $guarded = []; 
}

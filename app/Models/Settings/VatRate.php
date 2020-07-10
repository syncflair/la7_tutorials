<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class VatRate extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vat_rates';

    protected $guarded = []; 
}

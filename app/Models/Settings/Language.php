<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'languages';

    protected $guarded = []; 

    public function categoryTranslation(){
        // return $this->belongsToMany('App\Models\Settings\Department', 'department_employee');
       return $this->belongsToMany('App\Models\Catalog\Category', 'category_language_translation', 'language_id', 'category_id')      
            ->withPivot('lang_code', 'category_name','category_desc');
            // ->withTimestamps();
    }
}

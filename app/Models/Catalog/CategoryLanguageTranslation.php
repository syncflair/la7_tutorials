<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class CategoryLanguageTranslation extends Model
{
    protected $table = 'category_language_translation';

    protected $guarded = []; 

    //query except created_at updated_at
    protected $hidden = ['id','category_id','created_at','updated_at'];
}

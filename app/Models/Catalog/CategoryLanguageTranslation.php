<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;


// class CategoryLanguageTranslation extends Model
class CategoryLanguageTranslation extends Pivot
{
    protected $table = 'category_language_translation';

    //protected $guarded = []; 

    //query except created_at updated_at
    protected $hidden = ['id','category_id','created_at','updated_at'];


   //  public static function boot(){

   //  	parent::boot();

   //  	//created event when attach
   //  	static::created( function ($item) {
			// dd('Created Event', $item);
   //  	});

   //  	static::deleted( function ($item) {
   //  		dd('Deleted Event', $item);
   //  	});

   //  }

}

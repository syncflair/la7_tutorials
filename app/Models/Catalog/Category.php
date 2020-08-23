<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';



    // protected $fillable = [
    //     'cat_name','cat_slug', 'parent_id', 'cat_desc', 'is_enabled', 'cat_img', 'created_by', 'updated_by'
    // ];

    protected $guarded = []; 

      /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'cat_translation' => 'array',      
    ];


    //A Category Has Many Products (hasMany())
    public function product(){
        //return $this->belongsToMany('App\Models\Product');
        return $this->belongsToMany('App\Models\Product', 'join_category_product', 'cat_id', 'product_id');        
        //return $this->hasMany('App\Models\Product');
        //return $this->hasMany(Product::class);  
    }

    //A Category Has Many sub-category (hasMany()). For check Subcategory inside category table with parent_id
    // public function sub_category(){
    //     return $this->hasMany(Category::class, 'parent_id');  
    // }
    

    public function sub_child_category()
    {
       return $this->hasMany(Category::class,'parent_id')->with('lang_translation');
    }

    public function child_category()
    {
       //return $this->hasMany(Category::class, 'parent_id')->with('sub_child_category')->where('is_enabled', 1); //for public
    
       return $this->hasMany(Category::class, 'parent_id')->with('sub_child_category','lang_translation'); //for admin
        /*where('is_enabled', 1) - is for all sub-category*/
    }


    //this function for query ()
    public function lang_translation(){
        return $this->hasMany(CategoryLanguageTranslation::class,'category_id');
            //->select('language_id', 'lang_code','category_name', 'category_desc');
    }


    //this function for insert update data to join (pivot) table
    public function languageTranslation(){
        // return $this->belongsToMany('App\Models\Settings\Department', 'department_employee');
       return $this->belongsToMany('App\Models\Settings\Language', 'category_language_translation', 'category_id', 'language_id')
            //->using(CategoryLanguageTranslation::class)
            ->withPivot('lang_code', 'category_name','category_desc')
            ->withTimestamps();
    }


}

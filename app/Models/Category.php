<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';



    protected $fillable = [
        'cat_name','cat_slag', 'parent_id', 'cat_desc'
    ];


    //A Category Has Many sub-category (hasMany()). For check Subcategory inside category table with parent_id
    public function sub_category(){
        //return $this->hasMany('App\Models\Category', 'parent_id');
        return $this->hasMany(Category::class, 'parent_id');  
    }

    //A Category Has Many Products (hasMany())
    public function product(){
        //return $this->belongsToMany('App\Models\Product');
        return $this->belongsToMany('App\Models\Product', 'join_category_product', 'cat_id', 'product_id');        
        //return $this->hasMany('App\Models\Product');
        //return $this->hasMany(Product::class);  
    }
}

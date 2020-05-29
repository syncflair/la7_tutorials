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
        'cat_name','cat_slug', 'parent_id', 'cat_desc', 'is_enabled', 'cat_img', 'created_by', 'updated_by'
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
    

    public function categories()
    {
       return $this->hasMany(Category::class,'parent_id');
    }

    public function childrenCategories()
    {
       return $this->hasMany(Category::class, 'parent_id')->with('categories')->where('is_enabled', 1);
        /*where('is_enabled', 1) - is for all sub-category*/
    }

    public function reverseCat()
    {
        //reverse query with left outer join
       return $this->hasMany(Category::class, 'parent_id')->select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id');
    }
    
}

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
       return $this->hasMany(Category::class,'parent_id');
    }

    public function child_category()
    {
       //return $this->hasMany(Category::class, 'parent_id')->with('sub_child_category')->where('is_enabled', 1); //for publick
       return $this->hasMany(Category::class, 'parent_id')->with('sub_child_category'); //for admin
        /*where('is_enabled', 1) - is for all sub-category*/
    }


}

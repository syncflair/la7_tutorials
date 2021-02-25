<?php

namespace App\Models\Catalog;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Support\Str;

class Product extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $guarded = []; 



     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'pro_translation' => 'array',
        'pro_category' => 'array',
        'pro_attributes' => 'array',
        'pro_specification' => 'array',        
        'related_products' => 'array',        
        'pro_discount' => 'array',        
        'pro_suppliers' => 'array',        
        'pro_vendors' => 'array',        
        //'pro_shops' => 'array',        
        //'multi_image' => 'array',        
    ];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    // protected static function booted()
    // {
    //     // static::addGlobalScope(new AncientScope);
    //     static::creating(function($product){
    //         $product->pro_slug = Str::slug($product->sys_pro_name); //Str::slug('Laravel 5 Framework', '-');
    //     });
    // }


    //Product belongs to Status Master
    public function belongsToStatusMaster(){
        return $this->belongsTo('App\Models\Settings\StatusMaster', 'status_m_id'); 
    }

    //Product belongsTo brand
    public function belongsToBrand(){
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    //Product hasMany image
    public function hasManyCategory()
    {
       return $this->hasMany(Category::class, 'id');
           // return $this->belongsToMany(Category::class, 'id')
            // ->whereIn('categories.id', [11,15,5]);
             //->whereIn('categories.id', 'pro_category');



            // ->where('id', 'like' '%pro_category%');
            // ->wherePivotIn('id', [11,15,5]);
            // ->leftJoin('products', 'sales_order_items.catalog_product_id', '=', 'catalog_products.id')        
            //->select('catalog_products.*');
        // ->join('products', 'categories.id', '=', 'products.id')
        // ->whereIn('catitem_item.catitem_id', $cats)
    }

    //Product hasMany image
    public function hasManyImage()
    {
       return $this->hasMany(Image::class, 'product_id');
    }


}

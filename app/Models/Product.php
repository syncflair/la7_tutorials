<?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Product extends Model
// {
//      /**
//      * The table associated with the model.
//      *
//      * @var string
//      */
//     protected $table = 'products';

//     /**
//      * The attributes that are mass assignable.
//      *
//      * @var array
//      */
//     protected $fillable = [ 
//     	'pro_name', 'pro_slag', 'pro_desc', 'pro_price', 'pro_qty', 'pro_image', 'cat_id', 'user_id' 
//     ];



//      //A Category Has Many Products (hasMany())
//     public function category(){
//         //return $this->belongsToMany('App\Models\Category');
//         return $this->belongsToMany('App\Models\Category', 'join_category_product', 'product_id', 'cat_id');
//         //return $this->hasMany(Category::class); 
//     }

//     public function user(){
//         //return $this->belongsTo('App\user');
//         return $this->belongsTo(User::class);
//     }

// }

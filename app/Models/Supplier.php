<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Model;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\SupplierResetPasswordNotification;


class Supplier extends Authenticatable
{
    use Notifiable;


    protected $guard = 'supplier'; //custome....

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone', 'password', 'supplier_type', 'status_id','vendor_id','avatar','supplier_desc','supplier_address','created_by','updated_by', 'email_verified_at','email_verification_code','phone_verification_code','brand_shop_id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','email_verification_code', 'phone_verification_code'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


 
    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        // return $this->belongsTo(Models\Settings\UserStatus::class);
        return $this->belongsTo(Settings\UserStatus::class);
    }

    //Supplier belongsTo District_zone
    public function belongsToDistrictZone(){
        // return $this->belongsTo(Models\Settings\DistrictZone::class, 'dist_zone_id');
        return $this->belongsTo(Settings\DistrictZone::class, 'dist_zone_id');
    }

    //Supplier belongs to vendor
    public function belongsToVendor(){
        return $this->belongsTo('App\Models\Supplier\Vendor', 'vendor_id')->select('id','vendor_name','vendor_code');
        //return $this->belongsTo(Models\Supplier\Vendor::class, 'vendor_id');
    }

    //Supplier belongs to Brand Shop
    // public function belongsToBrandShop(){
    //     //return $this->belongsTo('App\Models\Supplier\BrandShop', 'brand_shop_id');
    //     return $this->belongsTo(Models\Supplier\BrandShop::class, 'brand_shop_id');
    // }

     /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    //Overwrite this function to customize password reset email
    public function sendPasswordResetNotification($token)
    {
        //$this->notify(new ResetPasswordNotification($token)); //default 
        $this->notify(new SupplierResetPasswordNotification($token)); //default 
    }
}

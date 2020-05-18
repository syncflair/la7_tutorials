<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


//'implements MustVerifyEmail' add to user class to enable email verification after user registration 

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id', 'status_id','avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    //My Custome Relation --  user belong to this Role 
    public function role(){
        //return $this->belongsTo('App\Models\Role');
        return $this->belongsTo(Models\Role::class);
    }

    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        return $this->belongsTo(Models\UserStatus::class);
    }

    //A User Has Many Products (hasMany())
    public function product(){
        //return $this->hasMany('App\Models\Product');
        return $this->hasMany(Models\Product::class);  
    }


    
}

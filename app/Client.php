<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Client extends Authenticatable
{
    use Notifiable;


    protected $guard = 'client'; //custome....

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'username', 'phone', 'password', 'client_type_id', 'status_id','avatar'
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
    public function clientType(){
        //return $this->belongsTo('App\Models\Role');
        return $this->belongsTo(Models\ClientType::class);
    }

    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        return $this->belongsTo(Models\UserStatus::class);
    }

    
}

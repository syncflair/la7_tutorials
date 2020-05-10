<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{
    

     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user_status';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'us_name', 'us_desc' ];


    /**
     * Guarded is that the reverse of fillable.
     */
    //protected $guarded =[];



    public function user(){
        return $this->hasMany('App\User');
        //return $this->hasMany(User::class);  
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    //protected $fillable = [ 'st_name', 'st_desc' ];


    /**
     * Guarded is that the reverse of fillable.
     */
    protected $guarded =[];



    public function user(){
        return $this->hasMany('App\User');
        //return $this->hasMany(User::class);  
    }
}

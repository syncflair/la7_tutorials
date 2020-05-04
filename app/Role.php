<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //

    protected $fillable = [
        'name'
    ];



    //My Custome Relation - A Role Has Many User (hasMany())
    public function user(){
        return $this->hasMany('App\User');
    }
}

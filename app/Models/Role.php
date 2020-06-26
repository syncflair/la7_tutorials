<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $fillable = [
        'name', 'role_desc'
    ];


    //My Custome Relation - A Role Has Many User (hasMany())
    public function user(){
        return $this->hasMany('App\User');
        //return $this->hasMany(User::class);  
    }

    //My Custome Relation - A Role Has Many User (hasMany())
    public function permission(){
        return $this->hasOne('App\Models\Permission');
        //return $this->hasMany('App\Models\Permission');
        //return $this->hasMany(Permission::class);  
    }
}

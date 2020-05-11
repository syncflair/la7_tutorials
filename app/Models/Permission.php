<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
	 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'permissions';



    protected $fillable = [
        'role_id','permission'
    ];


    //My Custome Relation - A Role Has Many User (hasMany())
    public function role(){
        return $this->belongsTo('App\Models\Role');
        //return $this->hasMany(User::Permission);  
    }


}

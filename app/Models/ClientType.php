<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientType extends Model
{

	protected $table = 'client_type';
	

    protected $fillable = [
        'ct_name', 'ct_desc', 'is_enabled'
    ];


    //My Custome Relation - A Role Has Many User (hasMany())
    public function client(){
        //return $this->hasMany('App\Client');
        return $this->hasMany(Client::class);  
    }
}

<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class OauthAccessToken extends Model
{
    // use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'oauth_access_tokens';

    protected $guarded = []; 




 //    public function AuthAcessToken(){
	//     return $this->hasMany('\App\Models\OauthAccessToken', 'user_id');
	// }

     /**
     * Check token has expired or not || gte() - greater than or equal to the current date
     */
    public function hasExpired(){
        // return Carbon::now()->gte( $this->updated_at->addSeconds($this->expires_in) );
        return now()->gte( $this->updated_at->addSeconds($this->expires_in) );
    }


}

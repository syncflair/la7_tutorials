<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Model;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\CustomerResetPasswordNotification;

class Customer extends Authenticatable
{
    use Notifiable;


    protected $guard = 'customer'; //customer.... 

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'customer_code','coa_code','name', 'email', 'username', 'phone', 'password', 'status_id','avatar','email_verification_code','phone_verification_code','created_by','updated_by','verified_by','customer_group_id','customer_membership_id'
    // ];

    protected $guarded = []; 

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'email_verification_code', 'phone_verification_code'
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
    // public function customerType(){
    //     //return $this->belongsTo('App\Models\Role');
    //     return $this->belongsTo(Models\CustomeType::class);
    // }

    //customer belongs to customer group
    public function belongsToCustomerGroup(){
        //return $this->belongsTo('App\Models\Customer\CustomerGroup', 'customer_group_id');
        // return $this->belongsTo(Models\Customer\CustomerGroup::class, 'customer_group_id');
        return $this->belongsTo(Customer\CustomerGroup::class, 'customer_group_id');
    }

    //customer belongs to customer Membership
    public function belongsToCustomerMembership(){
        // return $this->belongsTo(Models\Customer\CustomerMembership::class, 'customer_membership_id');
        return $this->belongsTo(Customer\CustomerMembership::class, 'customer_membership_id');
    }

    public function UserStatus(){
        //return $this->belongsTo('App\Models\UserStatus');
        // return $this->belongsTo(Models\Settings\UserStatus::class);
        return $this->belongsTo(Settings\UserStatus::class);
    }

    //Customer hasMany Address
    public function hasManyAddress()
    {
       // return $this->hasMany(Models\Customer\CustomerAddress::class, 'customer_id');
       return $this->hasMany(Customer\CustomerAddress::class, 'customer_id');
    }


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
        $this->notify(new CustomerResetPasswordNotification($token)); // working
    }

    

}

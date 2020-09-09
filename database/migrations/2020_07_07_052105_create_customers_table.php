<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('customer_code', 50)->unique()->comment('COA, CUS-02 (Account Head Detail)');
            $table->string('coa_code', 10)->comment('Assets - Accounts Payable 103');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique()->nullable(); //unique and also nullable
            $table->string('username')->unique()->nullable(); //unique and also nullable
            $table->timestamp('email_verified_at')->nullable();
            $table->string('email_verification_code', 225)->nullable()->comment('Custom Email Verification Code');
            $table->string('phone_verification_code', 10)->nullable()->comment('Custom phone Verification Code');
            $table->string('password');  
           // $table->enum('customer_group', ['Default', 'Wholesale']); 
            $table->unsignedBigInteger('customer_group_id'); 
            $table->unsignedBigInteger('customer_membership_id')->nullable(); 
            //$table->unsignedBigInteger('customer_type_id')->default(1);             
            $table->unsignedBigInteger('status_id')->default(4); //4 Not Verified
            $table->boolean('enable_notify')->default(false);
            $table->string('avatar')->nullable();            
            $table->rememberToken();
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
            $table->unsignedBigInteger('verified_by')->nullable()->comment('Verified by User'); 
            $table->timestamps(); 


            $table->index('customer_code');
            $table->index('name');
            $table->index('email');
            $table->index('phone');


            $table->foreign('status_id')->references('id')->on('user_status');
            //$table->foreign('customer_type_id')->references('id')->on('customer_type');
            $table->foreign('customer_group_id')->references('id')->on('customer_groups');
            $table->foreign('customer_membership_id')->references('id')->on('customer_memberships');
            $table->foreign('coa_code')->references('ah_code')->on('account_heads'); //chart of account (account_heads) ah_code
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}

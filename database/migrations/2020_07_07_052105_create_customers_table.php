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
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique()->nullable(); //unique and also nullable
            $table->string('username')->unique()->nullable(); //unique and also nullable
            $table->timestamp('email_verified_at')->nullable();
            $table->string('email_verification_code', 225)->nullable()->comment('Custom Email Verification Code');
            $table->string('phone_verification_code', 10)->nullable()->comment('Custom phone Verification Code');
            $table->string('password');  
           // $table->enum('customer_group', ['Default', 'Wholesale']); 
            $table->unsignedInteger('customer_group_id'); 
            $table->unsignedInteger('customer_type_id')->default(1);             
            $table->unsignedInteger('status_id')->default(4); //4 Not Verified
            $table->boolean('enable_notify')->default(false);
            $table->string('avatar')->nullable();            
            $table->rememberToken();
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
            $table->unsignedBigInteger('verified_by')->nullable()->comment('Verified by User'); 
            $table->timestamps(); 
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

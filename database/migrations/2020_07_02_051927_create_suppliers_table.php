<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            //$table->string('username')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('email_verification_code', 225)->nullable()->comment('Sypplier Email Verification Code');
            $table->string('phone_verification_code', 10)->nullable()->comment('Sypplier phone Verification Code');
            $table->string('password');            
            $table->unsignedInteger('status_id')->default(1); //5 Not Verified
            $table->unsignedInteger('vendor_id')->comment('Supplier BelongsTO Vendor');  
            $table->boolean('is_allow_to_modify')->default(true);          
            $table->string('supplier_desc')->nullable();
            $table->string('supplier_address')->nullable();
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
        Schema::dropIfExists('suppliers');
    }
}

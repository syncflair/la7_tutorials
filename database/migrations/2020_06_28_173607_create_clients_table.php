<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique()->nullable(); //unique and also nullable
            $table->string('username')->unique()->nullable(); //unique and also nullable
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone_verification_code', 10)->nullable();
            $table->string('password');          
            $table->unsignedInteger('client_type_id')->default(1); 
            $table->unsignedInteger('status_id')->default(1); //5 Not Verified
            $table->boolean('enable_notify')->default(false);
            $table->string('avatar')->nullable();            
            $table->rememberToken();
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
        Schema::dropIfExists('clients');
    }
}

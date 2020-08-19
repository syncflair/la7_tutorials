<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            //$table->string('role')->nullable();
            //$table->integer('role_id')->default(0);  unsignedInteger 
            //$table->integer('role_id')->default(14);            
            $table->unsignedInteger('role_id')->default(14); 
            $table->unsignedInteger('status_id')->default(4); //5 Not Verified
            $table->unsignedInteger('employee_id')->unique()->nullable()->comment('Connect with employee'); 
            $table->unsignedInteger('branch_id'); 
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
        Schema::dropIfExists('users');
    }
}

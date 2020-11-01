<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReturnActionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('return_action', function (Blueprint $table) {
             $table->bigIncrements('id');
            $table->string('return_action_name')->unique();
            $table->string('return_action_desc')->nullable();  
            $table->boolean('is_enabled')->default(true); 
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
            $table->timestamps();
            $table->index('return_action_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('return_action');
    }
}

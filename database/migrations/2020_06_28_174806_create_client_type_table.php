<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_type', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ct_name');
            $table->string('ct_desc', 100)->nullable(); 
            $table->boolean('is_enabled')->default(true); // the "is_enabled" attribute
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
        Schema::dropIfExists('client_type');
    }
}

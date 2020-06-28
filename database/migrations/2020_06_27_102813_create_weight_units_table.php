<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeightUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weight_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('weight_title',100)->unique();
            $table->string('weight_unit',10)->unique();
            $table->string('weight_value',100)->nullable();
            $table->string('weight_desc',200)->nullable();
            $table->boolean('is_enabled')->default(false);
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
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
        Schema::dropIfExists('weight_units');
    }
}

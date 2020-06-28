<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLengthUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('length_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('length_title',100)->unique();
            $table->string('length_unit',10)->unique();
            $table->string('length_value',100)->nullable();
            $table->string('length_desc',200)->nullable();
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
        Schema::dropIfExists('length_units');
    }
}

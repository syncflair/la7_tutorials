<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistrictZonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('district_zones', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('district_id'); 
            $table->string('zone_name',50);
            $table->string('zone_name_lang',100)->nullable();
            $table->string('zip_code',10)->nullable();              
            $table->string('zone_desc',100)->nullable(); 
            $table->string('police_station',100)->nullable(); 
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->timestamps();

            $table->foreign('district_id')->references('id')->on('districts')->onDelete('cascade');

             $table->index('zone_name');
             $table->index('zip_code');
             $table->index('police_station');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('district_zones');
    }
}
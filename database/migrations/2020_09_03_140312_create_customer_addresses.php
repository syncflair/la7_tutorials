<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerAddresses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_addresses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('customer_id');
            $table->string('customer_name',100)->nullable();
            $table->string('company',100)->nullable();
            $table->string('address_1',200)->nullable();
            $table->string('address_2',200)->nullable();

            $table->text('custome_fields')->nullable()->commment('if any custome text');

            $table->unsignedBigInteger('country_id')->nullable();
            $table->unsignedBigInteger('division_id')->nullable();
            $table->unsignedBigInteger('district_id')->nullable()->comment('Like city name');
            $table->unsignedBigInteger('area_zone_id')->nullable();
            $table->string('city',50)->nullable();
            $table->string('zip',15)->nullable();
            $table->boolean('default_address')->default(true);

            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->timestamps();

            $table->index('customer_name');
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade'); 
            $table->foreign('country_id')->references('id')->on('countries'); 
            $table->foreign('division_id')->references('id')->on('divisions'); 
            $table->foreign('district_id')->references('id')->on('districts'); 
            $table->foreign('area_zone_id')->references('id')->on('district_zones'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_addresses');
    }
}

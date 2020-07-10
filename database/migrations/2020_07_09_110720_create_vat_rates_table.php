<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVatRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vat_rates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('vat_name',50)->unique();
            $table->string('vat_code',50)->unique()->nullable();
            $table->integer('vat_rate'); 
            $table->enum('vat_type', ['Percent', 'Fixed']); 
            $table->string('vat_desc', 255)->nullable();            
            $table->string('vat_apply_to')->nullable()->comment('Which item');
            $table->unsignedInteger('vat_zone_id')->nullable()->comment('Use Later');
            $table->boolean('is_enabled')->default(true);
            $table->unsignedInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedInteger('updated_by')->nullable()->comment('Updated by User'); 
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
        Schema::dropIfExists('vat_rates');
    }
}

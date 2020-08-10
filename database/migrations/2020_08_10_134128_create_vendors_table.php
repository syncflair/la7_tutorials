<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('vendor_name');
            $table->string('vendor_email')->unique();
            $table->string('vendor_phone')->unique();
            $table->string('status_id')->default(1);
            $table->enum('vendor_type', ['Person','Organization','Shop']);
            $table->unsignedInteger('brand_shop_id')->nullable()->comment('Brand Shop');
            $table->string('vendor_desc')->nullable();
            $table->string('vendor_address')->nullable();
            $table->unsignedInteger('dist_zone_id')->nullable(); 
            $table->boolean('enable_notify')->default(false);
            $table->string('vendor_img')->nullable();  
            $table->boolean('is_enabled')->default(true);
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
        Schema::dropIfExists('vendors');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBrandShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brand_shops', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('brand_shop_title',100);
            $table->string('brand_shop_slug',100);
            $table->text('brand_shop_desc')->nullable(); 
            $table->boolean('is_enabled')->default(true);
            $table->string('bs_img', 250)->nullable(); 
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
        Schema::dropIfExists('brand_shops');
    }
}

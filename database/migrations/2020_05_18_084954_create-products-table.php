<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pro_name', 150); 
            $table->string('pro_slug', 150)->unique();
            $table->string('pro_code', 50)->nullable(); 
            $table->text('pro_desc')->nullable(); 
            $table->float('pro_price', 8, 2)->nullable();
            $table->integer('pro_qty')->nullable();
            $table->string('pro_image', 250)->nullable();
            $table->boolean('is_enabled')->default(true); // the "is_enabled" attribute            
            $table->unsignedBigInteger('user_id');
            $table->softDeletes('deleted_at', 0);                
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            //$table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

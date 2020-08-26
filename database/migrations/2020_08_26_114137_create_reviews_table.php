<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('published')->default(1);
            $table->integer('rating')->nullable();
            $table->text('review_text');
            $table->softDeletes();

            $table->index('rating');
            $table->index('review_text');
            
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade'); 
            $table->foreign('user_id')->references('id')->on('users'); 
            $table->foreign('customer_id')->references('id')->on('customers'); 
            $table->foreign('parent_id')->references('id')->on('reviews')->onUpdate('cascade');
             // $table->foreign('parent_id')->references('id')->on('reviews')->onUpdate('cascade')->onDelete(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}

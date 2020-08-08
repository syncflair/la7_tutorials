<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('coupon_name',50);
            $table->string('coupon_code',30);
            $table->enum('coupon_type', ['Fixed','Percent','Shipping']);
            $table->text('coupon_discount_value')->nullable()->comment('Discount Value');
            $table->boolean('coupon_is_free_shipping')->default(false);
            //$table->float('coupon_discount_amounts', 8, 2)->nullable()->comment('Discount of shiping caust'); 
            $table->string('coupon_total',30)->comment('Number of customer can use this coupon');
            $table->string('coupon_use_total',30)->comment('Number of coupon by customer');
            $table->date('coupon_start_date')->nullable();
            $table->date('coupon_end_date')->nullable();           
            $table->boolean('is_enabled')->default(true);
            $table->string('coupon_img', 250)->nullable(); 
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
        Schema::dropIfExists('coupons');
    }
}

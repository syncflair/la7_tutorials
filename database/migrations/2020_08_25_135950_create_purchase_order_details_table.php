<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_order_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('pur_order_id'); 
            $table->unsignedBigInteger('product_id'); 
            $table->string('batch_no')->nullable()->comment('Product Batch no');
            $table->string('mfg_date',8)->nullable();
            $table->string('exp_date',8)->nullable();
            $table->string('pro_desc')->nullable();
            $table->float('mrp_price', 11, 2)->default(0); 
            $table->float('mrp_after_discount_or_vat', 11, 2)->default(0)->comment('MRP price after vat or discount calculation'); 
            $table->unsignedBigInteger('unit_id')->comment('Unit like pcs, kg, ml');
            $table->string('p_unit_value')->nullable()->comment('Unit 5kg, 400ml');
            $table->integer('pro_qty'); 
            $table->integer('pro_free_qty')->nullable();  

            //$table->integer('pro_qty_adjustment', 10); 

            $table->integer('discount_fixed')->nullable(); 
            $table->integer('discount_percent')->nullable(); 
            $table->integer('vat_fixed')->nullable(); 
            $table->integer('vat_percent')->nullable(); 
            $table->float('pod_line_total', 11, 2)->default(0); 
            $table->timestamps();

            $table->index('mrp_price');
            $table->index('mrp_after_discount_or_vat');
            $table->index('pro_qty');
            $table->foreign('pur_order_id')->references('id')->on('purchase_orders')->onDelete('cascade');   
            $table->foreign('product_id')->references('id')->on('products'); 
            $table->foreign('unit_id')->references('id')->on('units'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_order_details');
    }
}

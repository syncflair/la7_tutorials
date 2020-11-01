<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('so_invoice')->unique()->comment('Sales Order Invoice Number');
            $table->unsignedBigInteger('customer_id')->comment('customer'); 
            
            $table->date('so_date')->nullable();  
            $table->enum('so_payment_term', ['Due','Partial','Paid']); 
            $table->boolean('is_paid')->default(false);

            // $table->unsignedBigInteger('so_payment_method')->comment('Status Master'); 
            $table->string('so_payment_method')->nullable();

            $table->unsignedBigInteger('branch_id')->nullable()->comment('Product Received by branch'); 
            $table->unsignedBigInteger('order_status_id')->comment('order Status');  
            $table->boolean('is_approved')->default(false);
            $table->boolean('is_delivered')->default(false);

            //$table->date('so_due_date')->nullable(); 
            $table->text('so_details')->nullable();

            $table->float('so_discount_fixed', 8, 2)->default(0); 
            $table->float('so_discount_percent', 8, 2)->default(0); 

            $table->float('so_tax_fiexd', 8, 2)->default(0); 
            $table->float('so_tax_percent', 8, 2)->default(0);


            $table->float('so_invoice_sub_total', 10, 2)->default(0); 
            $table->float('so_invoice_total', 10, 2)->default(0); 

            $table->float('so_paid_amount', 10, 2)->default(0); 
            $table->float('so_due_amount', 10, 2)->default(0); 

            //$table->json('pur_order_details')->nullable()->comment('JSON, All order details store here');

            $table->string('customer_name')->comment('Customer name');
            $table->unsignedBigInteger('shipping_address_id')->nullable()->comment('customer shipping address'); 
            $table->unsignedBigInteger('billing_address_id')->nullable()->comment('customer billing address'); 
            
            $table->string('sessionID')->nullable()->comment('sessionId');
            $table->string('token')->nullable()->comment('token');


            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->timestamps();

            $table->index('so_payment_term');
            $table->index('so_date');
            $table->index('so_invoice_total');
            $table->foreign('customer_id')->references('id')->on('customers'); 
            $table->foreign('branch_id')->references('id')->on('branch_info'); 
            $table->foreign('order_status_id')->references('id')->on('order_status'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_orders');
    }
}

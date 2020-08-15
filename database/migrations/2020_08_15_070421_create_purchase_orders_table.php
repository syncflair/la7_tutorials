<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('po_invoice')->unique()->comment('Purchase Order Invoice Number');
            $table->unsignedInteger('vendor_id')->comment('Vender (supplier) link'); 

            $table->unsignedInteger('status_m_id')->comment('Status Master'); 
            $table->unsignedInteger('branch_id')->comment('Product Received by branch'); 
            //$table->unsignedInteger('payment_method_id')->comment('Payment type'); 
            $table->text('po_desc')->nullable();

            $table->float('po_tax_amounts', 8, 2)->default(0); 
            $table->float('po_vat_amounts', 8, 2)->default(0); 
            $table->float('po_discount_amounts', 8, 2)->default(0); 
            $table->float('po_shipping_cost', 8, 2)->default(0)->comment('Discount of shiping caust'); 

            $table->float('po_sub_total', 10, 2)->default(0)->comment('Sub total'); 
            //$table->float('po_grand_total', 10, 2)->default(0)->comment('Grand total'); 
            $table->float('po_total', 10, 2)->default(0); 
            $table->float('po_paid_amount', 10, 2)->default(0); 
            $table->float('po_due_amount', 10, 2)->default(0); 

            
            $table->json('pur_order_details')->nullable()->comment('JSON, All order details store here');
            $table->string('po_image')->comment('Purchase Order Image if any');

            $table->date('po_date')->nullable();  
            $table->enum('po_payment_term', ['Due','Partial','Paid']); 
            $table->date('po_due_date')->nullable();  
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
        Schema::dropIfExists('purchase_orders');
    }
}

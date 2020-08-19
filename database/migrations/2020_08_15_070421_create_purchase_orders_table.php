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
            $table->date('po_date')->nullable();  
            $table->enum('po_payment_term', ['Due','Partial','Paid']); 

            // $table->unsignedInteger('po_payment_method')->comment('Status Master'); 
            $table->string('po_payment_method')->nullable();

            $table->unsignedInteger('branch_id')->comment('Product Received by branch'); 
            $table->unsignedInteger('status_m_id')->comment('Status Master');             
            //$table->date('po_due_date')->nullable();         
            $table->string('po_vendor_invoice_no')->nullable()->comment('if any invoice no from supplier'); 
            $table->text('po_details')->nullable();

            $table->float('po_discount_fixed', 8, 2)->default(0); 
            $table->float('po_discount_percent', 8, 2)->default(0); 

            $table->float('po_tax_fiexd', 8, 2)->default(0); 
            $table->float('po_tax_percent', 8, 2)->default(0);

            $table->float('po_invoice_sub_total', 10, 2)->default(0); 
            $table->float('po_invoice_total', 10, 2)->default(0); 

            $table->float('po_paid_amount', 10, 2)->default(0); 
            $table->float('po_due_amount', 10, 2)->default(0); 

            $table->json('pur_order_details')->nullable()->comment('JSON, All order details store here');
            $table->string('po_image')->nullable()->comment('Purchase Order Image if any');

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

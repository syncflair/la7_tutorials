<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerMembershipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_memberships', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('membership_title',50);
            $table->text('membership_desc')->nullable();
            $table->enum('discount_type', ['Fixed','Percent','Shipping'])->nullable();
            $table->string('total_orders',10)->nullable()->comment('Number of order required');            
            $table->boolean('is_free_shipping')->default(false);
            $table->integer('discount_value')->nullable();
            //$table->float('discount_fixed', 8, 2)->nullable();     
            //$table->json('membership_offer')->nullable()->comment('JSON membership offers');             
            $table->boolean('is_enabled')->default(true);
            $table->string('membership_img', 250)->nullable(); 
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->timestamps();

            $table->index('membership_title');
            $table->index('discount_type');
            $table->index('discount_value');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_memberships');
    }
}

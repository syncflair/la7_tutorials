<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatusMasterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_master', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('status_name');
            $table->string('status_slug')->unique()->nullable();
            $table->string('status_desc')->nullable();
            $table->enum('status_type', ['Stock','Shipping','Payment','Product','SalesOrder','SalesReturn','PurchaseOrder','PurchaseReturn']);  
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
        Schema::dropIfExists('status_master');
    }
}

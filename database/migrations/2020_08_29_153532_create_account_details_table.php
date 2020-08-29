<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_details', function (Blueprint $table) {
            $table->bigIncrements('id');            
            $table->string('account_name', 50)->comment('Name of account');
            $table->string('coa_code', 50)->comment('COA, AHD-02 (Account Head Detail)');
            $table->unsignedBigInteger('coa_id')->nullable()->comment('account_heads table id');
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->float('opening_balance', 20, 2)->nullable(); 
            $table->date('open_date')->nullable(); 
            $table->string('account_desc')->nullable();
            $table->boolean('is_enabled')->default(false);
            $table->timestamps();

            $table->index('account_name');
            $table->index('coa_code');
            $table->index('account_desc');

            $table->foreign('coa_id')->references('id')->on('account_heads'); //chart of account (account_heads) id
            $table->foreign('branch_id')->references('id')->on('branch_info'); 
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_details');
    }
}

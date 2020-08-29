<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cash_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');            
            $table->string('cash_account_code', 50)->comment('Code Use for account_transection, ba001');
            $table->string('cash_account_name', 50);
            //$table->string('bank_account_number',50);
            //$table->string('bank_name');
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->float('account_opening_balance', 20, 2)->nullable(); 
            $table->date('account_open_date')->nullable(); 
            $table->date('account_close_date')->nullable(); 
            $table->string('cash_account_desc')->nullable();
            $table->boolean('is_enabled')->default(false);
            $table->timestamps();

            $table->index('cash_account_code');
            $table->index('cash_account_name');
            //$table->index('bank_account_number');
            //$table->index('bank_name');

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
        Schema::dropIfExists('cash_accounts');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');            
            $table->string('bank_account_code', 50)->comment('Code Use for account_transection, ba001');
            $table->string('bank_account_name', 50);
            $table->string('bank_account_number',50);
            $table->string('bank_name');
            $table->string('bank_branch', 50)->nullable();
            $table->float('account_opening_balance', 20, 2)->nullable(); 
            $table->date('account_open_date')->nullable(); 
            $table->date('account_close_date')->nullable(); 
            $table->string('bank_account_desc')->nullable();
            $table->boolean('is_enabled')->default(false);
            $table->timestamps();

            $table->index('bank_account_code');
            $table->index('bank_account_name');
            $table->index('bank_account_number');
            $table->index('bank_name');

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
        Schema::dropIfExists('bank_accounts');
    }
}

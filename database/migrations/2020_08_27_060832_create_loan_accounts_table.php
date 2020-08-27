<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoanAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');            
            $table->string('loan_account_name', 50);
            $table->string('loan_account_code', 50);
            $table->string('lender_name');
            $table->enum('lender_type', ['organization','person']);
            $table->string('lender_branch', 50)->nullable();
            $table->string('loan_desc', 50)->nullable();
            $table->float('loan_receive_amount', 20, 2)->default(0); 
            $table->unsignedBigInteger('loan_receive_account_id');            
            $table->date('loan_receive_date')->nullable(); 

            $table->float('loan_procession_fee', 10, 2)->default(0); 
            $table->unsignedBigInteger('fee_paid_account_id'); 

   
            $table->string('interest_rate_per_annum')->nullable();
            $table->string('term_duration_months')->nullable();

            $table->timestamps();

            $table->index('loan_account_name');
            $table->index('loan_account_code');
            //$table->foreign('loan_receive_account_id')->references('id')->on(''); 
            //$table->foreign('fee_paid_account_id')->references('id')->on(''); 

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
        Schema::dropIfExists('loan_accounts');
    }
}

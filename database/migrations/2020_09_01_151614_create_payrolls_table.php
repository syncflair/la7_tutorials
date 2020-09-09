<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayrollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payrolls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('emp_id');
            $table->enum('payroll_status', ['Active','Previous'])->comment('active is current payroll');
            $table->float('house_rent', 10, 2)->nullable();
            $table->float('medical_allowance', 10, 2)->nullable(); 
            $table->float('ta_daily', 10, 2)->nullable(); 
            $table->float('ta_monthly', 10, 2)->nullable(); 
            $table->float('da_daily', 10, 2)->nullable(); 
            $table->float('da_monthly', 10, 2)->nullable(); 
            $table->float('over_time', 10, 2)->nullable()->comment('Over time rate per hour'); 
             
            $table->float('basic_salary', 10, 2)->comment('without any extra compensation'); 
            //$table->float('bonuse_percent', 10)->nullable();
            $table->integer('bonuse_percent')->nullable();
            //$table->float('increment_percent', 10)->nullable(); 
            $table->integer('increment_percent')->nullable();             
            $table->date('starting_date')->nullable(); 
            $table->string('payroll_desc', 250)->nullable();
            $table->timestamps();

            $table->index('payroll_status');
            $table->foreign('emp_id')->references('id')->on('employees')->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payrolls');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJoinEmployeeDepartmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('join_employee_department', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('emp_id')->comment('employee id');
            $table->unsignedBigInteger('dept_id')->comment('department id');
            $table->date('from_date', 50)->nullable(); 
            $table->date('to_date', 50)->nullable();             
            $table->timestamps();
            $table->foreign('emp_id')->references('id')->on('employees')->onDelete('cascade');            
            $table->foreign('dept_id')->references('id')->on('departments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('join_employee_department');
    }
}

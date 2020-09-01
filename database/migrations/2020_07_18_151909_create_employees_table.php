<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('branch_id');
            $table->string('employee_code', 50)->unique()->comment('COA, EMP-02 (Account Head Detail)');
            $table->string('coa_code', 10)->comment('liability');
            //$table->unsignedBigInteger('user_id')->nullable()->default(null)->comment('Assign this employee to User for login');
            $table->enum('emp_job_type', ['Permanent','Part time','Pontractual','Internship']);
            $table->unsignedBigInteger('job_title_id');
            $table->string('emp_name', 80); 
            $table->string('emp_father_name', 80)->nullable(); 
            $table->string('emp_mother_name', 80)->nullable();
            $table->string('emp_wife_name', 80)->nullable();
            $table->date('emp_dob')->nullable();
            $table->enum('emp_gender', ['Male','Female']);  
            $table->string('emp_phone', 50)->nullable();
            $table->string('emp_email', 80)->nullable();
            $table->string('emp_nid', 50)->nullable();
            $table->string('emp_passport', 50)->nullable();
            $table->string('emp_driving_license', 50)->nullable();
            $table->string('emp_permanent_address', 250)->nullable(); 
            $table->string('emp_Present_address', 250)->nullable();

            $table->text('emp_desc')->nullable(); 
            $table->text('emp_qualification')->nullable(); 
            $table->text('emp_experience')->nullable();
            $table->text('emp_previous_job_history')->nullable();              
            

            $table->date('emp_hire_date', 50)->nullable(); 
            $table->date('emp_quit_date', 50)->nullable(); 
            $table->string('avatar', 250)->nullable();
            $table->unsignedBigInteger('status_id')->default(1); //4 Not Verified 
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->unsignedBigInteger('verified_by')->nullable()->comment('Verified by User'); 
            $table->timestamps();

            $table->index('employee_code');
            $table->index('emp_name');
            $table->index('emp_phone');
            $table->index('emp_email');

            $table->foreign('status_id')->references('id')->on('user_status');
            $table->foreign('branch_id')->references('id')->on('branch_info');
            $table->foreign('coa_code')->references('ah_code')->on('account_heads'); //chart of account (account_heads) ah_code

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}

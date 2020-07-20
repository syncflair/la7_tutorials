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
            //$table->unsignedBigInteger('user_id')->nullable()->default(null)->comment('Assign this employee to User for login');
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
            
            $table->string('emp_desc', 250)->nullable(); 
            $table->string('emp_qualification', 250)->nullable(); 
            $table->string('emp_experience', 250)->nullable();
            $table->string('emp_previous_job_history', 250)->nullable();              
            $table->string('emp_permanent_address', 250)->nullable(); 
            $table->string('emp_Present_address', 250)->nullable();

            $table->date('emp_hire_date', 50)->nullable(); 
            $table->date('emp_quit_date', 50)->nullable(); 
            $table->string('avatar', 250)->nullable();
            $table->unsignedInteger('status_id')->default(1); //4 Not Verified 
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
        Schema::dropIfExists('employees');
    }
}

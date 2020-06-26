<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branch_info', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('org_id')->nullable();
            $table->string('branch_name',225)->unique();
            $table->string('branch_code',100)->nullable();
            $table->text('branch_desc')->nullable();
            $table->text('branch_address')->nullable();
            $table->string('branch_email',100)->nullable();
            $table->string('branch_phone',100)->nullable();
            $table->string('zone',50)->nullable();
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('country',50)->nullable(); 
            $table->boolean('is_enabled')->default(false);
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');          
            $table->timestamps();

            //$table->foreign('org_id')->references('id')->on('organization_info');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branch_info');
    }
}

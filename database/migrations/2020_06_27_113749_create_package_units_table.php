<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('package_title',100)->unique();
            $table->string('package_unit',20)->unique();
            $table->string('package_desc',200)->nullable()->comment('Package unit dimension');
            $table->boolean('is_enabled')->default(false);
            $table->string('package_icon',255)->nullable();
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
        Schema::dropIfExists('package_units');
    }
}

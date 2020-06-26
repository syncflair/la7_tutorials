<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_info', function (Blueprint $table) {
            $table->id();
            $table->string('org_name',225)->unique();
            $table->string('org_business_type',100)->nullable();
            $table->string('closing_period',100)->nullable();
            $table->text('org_desc')->nullable();
            $table->text('org_license_desc')->nullable();
            $table->text('org_address')->nullable();
            $table->string('org_email',100)->nullable();
            $table->string('org_phone',100)->nullable();
            $table->string('org_url',250)->nullable();
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('country',50)->nullable();
            $table->string('org_logo',250)->nullable();
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
        Schema::dropIfExists('organization_info');
    }
}

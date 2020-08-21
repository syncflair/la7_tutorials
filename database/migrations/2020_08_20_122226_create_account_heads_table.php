<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountHeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_heads', function (Blueprint $table) {
            $table->bigIncrements('id');    
            $table->unsignedBigInteger('parent_id')->nullable()->default(null);                   
            $table->string('ah_name', 50)->unique(); 
            $table->string('ah_code', 10)->unique()->nullable(); 
            $table->string('ah_slug', 50)->unique();
            $table->string('ah_desc',100)->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->softDeletes('deleted_at', 0);  
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('account_heads')->onUpdate('cascade')->onDelete(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_heads');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->bigIncrements('id');    
            $table->unsignedBigInteger('parent_id')->nullable()->default(null);                   
            $table->string('cat_name', 50); 
            $table->string('cat_slug', 50)->unique();
            $table->string('cat_desc',100)->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->softDeletes('deleted_at', 0);  
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete(null);  
            //$table->primary(['id', 'parent_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('join_categories');
    }
}

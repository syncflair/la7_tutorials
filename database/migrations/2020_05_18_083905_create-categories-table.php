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
            $table->json('cat_translation')->nullable()->comment('JSON, cat_translation');
            $table->string('cat_name_lang', 100)->nullable()->comment('For second language if any'); 
            $table->string('cat_slug', 50)->unique();
            $table->string('cat_desc',100)->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->string('cat_img',225)->nullable();
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');
            $table->softDeletes('deleted_at', 0);  
            $table->timestamps();             

            $table->foreign('parent_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete(null);
            $table->foreign('created_by')->references('id')->on('users');
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

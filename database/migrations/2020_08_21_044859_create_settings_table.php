<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->bigIncrements('id');  
            $table->string('site_title', 191)->nullable()->comment('Site title');
            $table->string('site_admin_email', 191)->nullable()->comment('Admin Email of the site');
            $table->string('notify_by_email', 191)->nullable()->comment('All system notification send by this email address');
            $table->text('site_desc')->nullable()->comment('Site description');
            $table->text('site_keys')->nullable()->comment('meta keys');
            $table->string('site_url', 191)->nullable()->comment('Site url');

            $table->unsignedBigInteger('language_id')->default(1);  
            $table->unsignedBigInteger('currency_id')->default(1);  


            $table->enum('image_store_to', ['local','s3']);
            $table->text('aws_s3_url', 191)->nullable()->comment('Site title');

            $table->enum('watermark_by', ['wByIcon','wByText']);            
            $table->text('watermark_icon', 191)->nullable()->comment('Watermark image');
            $table->text('watermark_text', 191)->nullable()->comment('Watermark Text');
            $table->json('image_resolution')->nullable()->comment('JSON, image resolution setup 100x80');

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
        Schema::dropIfExists('settings');
    }
}

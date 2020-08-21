<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');            

            $table->string('sys_pro_name', 150); 
            $table->json('pro_translation')->nullable()->comment('JSON Product Name description translation'); 
            $table->string('pro_slug', 150)->unique();
            $table->enum('pro_type', ['General','Virtual','Service','Downloadable']); 
            $table->integer('status_m_id')->comment('Data call from Status Master');   
            $table->string('pro_code', 50)->unique()->nullable(); 
            $table->string('pro_model', 150)->unique()->nullable(); 
            $table->string('sku', 50)->nullable()->comment('Stock Keeping Unit'); 
            $table->string('upc', 50)->nullable()->comment('Universal Product Code'); 
            $table->string('isbn', 50)->nullable()->comment('International Book Number'); 
            $table->string('mpn', 50)->nullable()->comment('Manufacture Part Number');                       
            $table->integer('brand_id')->nullable(); 
            //$table->text('pro_desc')->nullable(); 
            $table->json('pro_category')->nullable()->comment('JSON Multiple Category id');            
            $table->json('pro_attributes')->nullable()->comment('JSON color, size, lenght');
            $table->json('pro_specification')->nullable()->comment('JSON product Specification');
            $table->json('pro_suppliers')->nullable()->comment('JSON product suppliers');
            $table->json('pro_vendors')->nullable()->comment('JSON product vendors');
            $table->json('related_products')->nullable()->comment('JSON related products list');
            $table->float('pro_price', 10, 2)->nullable();
            $table->float('pro_sale_price', 10, 2)->nullable();
            $table->integer('pro_reward_points')->nullable();
            $table->integer('pro_qty')->nullable();
            $table->integer('unit_id')->nullable(); 
            $table->integer('pro_delivery_charge')->nullable()->comment('Normal Delivery Charge');


            $table->string('pro_image', 250)->nullable()->comment('Feature Image');
            $table->json('pro_images')->nullable()->comment('JSON Multi image link');
            
            $table->boolean('is_enabled')->default(true); // the "is_enabled" attribute   
                   
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User');

            $table->softDeletes('deleted_at', 0);                
            $table->timestamps();

           // $table->foreign('user_id')->references('id')->on('users');
            //$table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

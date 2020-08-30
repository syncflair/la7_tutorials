<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('vendor_code', 50)->unique()->comment('COA, VEN-02 (Account Head Detail)');
            $table->string('coa_code', 10)->comment('Liabilities - Accounts Payable 202');
            $table->string('vendor_name');
            $table->string('vendor_contact_name')->nullable();
            $table->string('vendor_email')->unique();
            $table->string('vendor_phone')->unique();
            $table->unsignedBigInteger('status_id')->default(1);
            $table->enum('vendor_type', ['Person','Organization','Shop']);
            $table->unsignedBigInteger('brand_shop_id')->nullable()->comment('Brand Shop');

            $table->string('vendor_nid')->nullable();
            $table->string('vendor_tin')->nullable();
            $table->string('vendor_bank_details')->nullable();
            $table->float('opening_balance', 8, 2)->default(0); 

            $table->text('vendor_desc')->nullable();
            $table->string('vendor_address')->nullable();
            $table->unsignedBigInteger('dist_zone_id')->nullable(); 
            $table->boolean('enable_notify')->default(false);
            $table->string('vendor_img')->nullable();  
            $table->boolean('is_enabled')->default(true);
            $table->unsignedBigInteger('created_by')->nullable()->comment('Created by User');  
            $table->unsignedBigInteger('updated_by')->nullable()->comment('Updated by User'); 
            $table->timestamps();

            $table->index('vendor_code');
            $table->index('vendor_name');
            $table->index('vendor_email');
            $table->index('vendor_phone');

            $table->foreign('status_id')->references('id')->on('user_status');
            $table->foreign('dist_zone_id')->references('id')->on('district_zones');
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
        Schema::dropIfExists('vendors');
    }
}

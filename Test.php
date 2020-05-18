<?php 

Schema::create('categories', function (Blueprint $table) {
            $table->bigIncrements('id');    
            $table->unsignedInteger('parent_id')->nullable()->default(null);                   
            $table->string('cat_name', 50); 
            $table->string('cat_slag', 50)->unique();
            $table->string('cat_desc',100)->nullable();
            $table->softDeletes('deleted_at', 0);  
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete(null);  
            //$table->primary(['id', 'parent_id']);
        });



Schema::create('join_category_product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cat_id')->nullable();
            $table->unsignedBigInteger('product_id')->nullable();

            $table->foreign('cat_id')->references('id')->on('categories')->onDelete('cascade');            
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->timestamps();
        });

Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pro_name', 150); 
            $table->string('pro_slug', 150)->unique();
            $table->string('pro_code', 50)->nullable(); 
            $table->text('pro_desc')->nullable(); 
            $table->float('pro_price', 8, 2)->nullable();
            $table->integer('pro_qty')->nullable();
            $table->string('pro_image', 250)->nullable();
            $table->boolean('is_enabled')->default(true); // the "is_enabled" attribute            
            $table->unsignedBigInteger('user_id');
            $table->softDeletes('deleted_at', 0);                
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            //$table->primary(['id']);
            //$table->primary(['id']);
        });

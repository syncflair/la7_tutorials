<?php

use Illuminate\Database\Seeder;

class CatetorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$this->call(CategorySeeder::class);
        //factory(App\Models\Category::class, 10)->make();
        factory(App\Models\Category::class, 10)->create();
    }
}


// php artisan db:seed --class=CategorySeeder
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'cat_name' =>$faker->word,
        'cat_slug' =>$faker->slug,
        //'user_id' => rand(1,50),
        //'cat_id' => rand(1,50),
        'cat_desc' =>$faker->text,
		//'price' => $faker->numberBetween(99, 999)
    ];
});

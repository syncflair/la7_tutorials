<?php

/*
    |--------------------------------------------------------------------------
    | My Custome Constants File app/config/constants.php
    |--------------------------------------------------------------------------
    | Add constants.php file to 'autoload' inside composer.json
    | #composer update --no-scripts 
    | #php artisan config:cache 
    |--------------------------------------------------------------------------
    | use Illuminate\Support\Facades\Config;  //use top of controller
    | - Config::get('constants.consttant_name');
    | --Config::get('constants.options.option_name');
    | OR (without using use Illuminate\Support\Facades\Config; )
    | - \Config::get('constants.CommonFilePath');
    | -\Config::get('constants.options.option_name');
    | -\Config::get('constants.SORBORAHO_URL');
    |-----------------------------------------------------------------------
    */

return [

	/*
    |--------------------------------------------------------------------------
    | FileStorage Directory Constant
    |-------------------------------------------------------------------------
    */

    's3_url' => 'https://sorboraho.s3-ap-southeast-1.amazonaws.com/',
    // 'watermark' => 'FilesStorage/CommonFiles/watermark.png',
    'watermark' => 'static/images/watermark.png',


    'CommonFilesPath' => 'FilesStorage/CommonFiles/',
	'UserFliesPath' => 'FilesStorage/Backend/Users/',
    'SORBORAHO_URL' => 'https://sorboraho.com',	

    'options' => [
        'option_a' => 'valu_a',
        'option_b' => 'valu_b',
    ]
];
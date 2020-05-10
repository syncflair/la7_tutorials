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
    | - Config::get(‘constants.consttant-name');
    | --Config::get(‘constants.options.option-name');
    | OR (without using use Illuminate\Support\Facades\Config; )
    | - \Config::get(‘constants.CommonFilePath');
    | -\Config::get(‘constants.options.option-name');
    |-----------------------------------------------------------------------
    */

return [

	/*
    |--------------------------------------------------------------------------
    | FileStorage Directory Constant
    |-------------------------------------------------------------------------
    */
    'CommonFilesPath' => 'FilesStorage/CommonFiles/',
	'UserFliesPath' => 'FilesStorage/Backend/Users/',
	

    'options' => [
        'option_a' => 'valu_a',
        'option_b' => 'valu_b',
    ]
];
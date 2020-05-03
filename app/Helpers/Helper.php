<?php
use app\user;

function FirstHelper(){

	return 'this is my first Helper.';
}

function TodayDate(){
	return date('Y-m-d');
}

function GetUserName(){
	 $user = User::first();
	return $user->name;
}


/*
--Helper load Using Provider:

# php artisan make:provider HelperServiceProvider

Check out inside HelperServiceProvider file

--go to config/app.php and add to 

"provider" 
App\Providers\HelperServiceProvider::class,

"alias"
'Helper' => App\Helpers\Helper::class,









*/
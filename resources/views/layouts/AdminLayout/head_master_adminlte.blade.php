<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--<html lang="en">-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>@yield('title')</title>

	<!-- <link rel="icon" href="{{asset('/FilesStorage/CommonFiles/s_favicon.ico')}}"> -->
	<link rel="icon" href="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" sizes="16x16" type="image/png">
	<!-- Tell the browser to be responsive to screen width -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{csrf_token()}}">


	<!-- Styles -->  
	<!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --><!--comon style-->
	<!-- <link href="{{ asset('css/style.css') }}" rel="stylesheet"> --><!--All style for admin-->

	<link href="{{ mix('css/app.css') }}" rel="stylesheet"><!--comon style-->
	<link href="{{ mix('css/style.css') }}" rel="stylesheet"><!--All style for admin-->

	 




	@yield('extra_css')	

</head>
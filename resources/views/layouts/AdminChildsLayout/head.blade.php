<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="icon" href="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" sizes="16x16" type="image/png">

  <title>@yield('title')</title>
 
  <!-- Styles -->  
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link href="{{ asset('css/ac_style.css') }}" rel="stylesheet">

  @yield('extra_css')

</head>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Title -->
        <!-- <title>Sorboraho | Welcome to SORBORAHO</title> -->
        <title>@yield('title')</title>

        <!-- Required Meta Tags Always Come First -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Favicon -->
        <!-- <link rel="shortcut icon" href="../../favicon.png"> -->
        <link rel="icon" href="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" sizes="16x16" type="image/png">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">


        <!-- Main CSS -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- CSS Implementing Plugins -->
        <!-- <link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css"> -->
        <link rel="stylesheet" href="{{ asset('website/assets/css/font-electro.css')}}">

        <link rel="stylesheet" href="{{ asset('website/assets/vendor/animate.css/animate.min.css')}}">
        <link rel="stylesheet" href="{{ asset('website/assets/vendor/hs-megamenu/src/hs.megamenu.css')}}">
        <link rel="stylesheet" href="{{ asset('website/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css')}}">
        <link rel="stylesheet" href="{{ asset('website/assets/vendor/fancybox/jquery.fancybox.css')}}">
        <link rel="stylesheet" href="{{ asset('website/assets/vendor/slick-carousel/slick/slick.css')}}">
        <link rel="stylesheet" href="{{ asset('website/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')}}">

        <!-- CSS Electro Template -->
        <link rel="stylesheet" href="{{ asset('website/assets/css/theme.css')}}">


        @yield('extra_css') 
        
    </head>
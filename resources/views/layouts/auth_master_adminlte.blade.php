<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--<html lang="en">-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>@yield('title')</title>
  
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{csrf_token()}}">

  <!-- Styles -->  
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">


  <style type="text/css">
   // body{Background-color:rgb(255,69,0) !important;}
    .login-logo, .register-logo{//color:#ffffff !important;}
    .alert-danger{font-weight: normal;}
    .card{border:unset !important; border-radius:unset !important; box-shadow:unset !important;}
    .text-center{text-align: center !important;}
  </style>

  @yield('style')

</head>

<body class="hold-transition login-page register-page">


  @yield('content')

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer-></script>
 

</body>
</html>

@extends('layouts.auth_master_adminlte')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
 <style type="text/css">
 	.login-box{width: 550px !important;}
 	.button-color{color:orange !important; font-weight: 600;}
 	.card-header{background: unset !important; }
 	.login-box-msg{font-weight: 600;}
  </style>
@endsection

@section('content')
<div class="login-box" id="app">
  <div class="login-logo orange">
    SHORBORAHO
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body text-center">

    @if(Session::has('success'))

      <p class="login-box-msg"> Registration Successful</p>

      	<!--<div class="alert alert-success mt-2 mb-2 text-center ml-0 mr-0"></div>-->

		<!--<div class="card-header"></div>-->

        <div class="card-body">
            <div class="alert alert-success" role="alert">
                {{ Session::get('success') }}
            </div>
        </div>
	

		@php
              Session::forget('success');
              //Session::put('success');
          @endphp
	@else


		@php
			///return abort('401');
        @endphp
		
		<div class="alert alert-danger mt-2 mb-5 text-center ml-0 mr-0">
	   		<h1> You are not authorized to view this page. </h1>
	    </div>

	@endif 




      <p class="mb-1">
            <a class="btn- btn-link-" href="/">
                {{ __('Go to Home') }}
            </a>   
        <!--<a href="forgot-password.html">I forgot my password</a>-->
      </p>
      <p class="mb-1">
      	@if (Route::has('login'))
            <a class="btn- btn-link-" href="{{ route('login') }}">
                {{ __('Login') }}
            </a>
        @endif
        <!--<a href="forgot-password.html">I forgot my password</a>-->
      </p>
      <p class="mb-0">
      	@if (Route::has('register'))
            <a class="nav-link- text-center" href="{{ route('register') }}">{{ __('Register a new membership') }}</a>      
        @endif
        <!--<a href="register.html" class="text-center">Register a new membership</a>-->
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
@endsection

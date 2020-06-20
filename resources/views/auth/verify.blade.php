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
      <p class="login-box-msg">@if(!empty(@Auth::user()->name)) Dear, @endif {{  @Auth::user()->name }}</p>

							

		<div><!--Laravel Code-->
			<div class="card-header">{{ __('Verify Your Email Address First As New Registration') }}</div>

            <div class="card-body">
                @if (session('resent'))
                    <div class="alert alert-success" role="alert">
                        {{ __('A fresh verification link has been sent to your email address.') }}
                    </div>
                @endif

                {{ __('Before proceeding, please check your email for a verification link.') }}
                {{ __('If you did not receive the email') }},
                <form class="d-inline" method="POST" action="{{ route('verification.resend' ) }}">
                    @csrf
                    <button type="submit" class="btn btn-link p-0 m-0 align-baseline button-color">{{ __('click here to request another') }}</button>.
                </form>
            </div><!--Laravel Code-->
		</div>



      <p class="mb-1">
            <a class="btn- btn-link-" href="/">
                {{ __('Go to Home') }}
            </a>
   
        <!--<a href="forgot-password.html">I forgot my password</a>-->
      </p>
      <p class="mb-0">
      	@if (Route::has('register'))
            <a class="nav-link- text-center" href="{{ route('register' ) }}">{{ __('Register a new membership') }}</a>      
        @endif
        <!--<a href="register.html" class="text-center">Register a new membership</a>-->
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
@endsection

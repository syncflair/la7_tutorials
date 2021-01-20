@extends('layouts.auth_master_adminlte')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
<style type="text/css">
  </style>
@endsection


@section('content')
<div class="register-box" id="app">
  <div class="register-logo orange">
    SORBORAHO
  </div>

  <div class="card">
    <div class="card-body register-card-body">

      @if(Session::has('success') == Null)
      	<p class="login-box-msg">{{ __('Register a new customer') }}</p>
      @endif

      <!--Display message-->
      @include('commonParts.message_display')

      <!-- <form method="POST" action="{{ route('register')}}"> -->
      <form method="POST" action="{{ url('customer/register')}}">

      	@csrf

        <div class="input-group mb-3">
          <!--<input type="text" class="form-control" placeholder="Full name">-->
          <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required- autocomplete="name" placeholder="{{ __('Full Name') }}" autofocus>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
          	@error('name')
	            <span class="invalid-feedback" role="alert">
	                <strong>{{ $message }}</strong>
	            </span>
	        @enderror
        </div>

        <div class="input-group mb-3">
          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required- autocomplete="email" placeholder="{{ __('E-Mail Address') }}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
          	@error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="input-group mb-3">
          <div class="input-group-append">
            <div class="input-group-text">
              <span>+88</span>
            </div>
          </div>
          <input id="phone" type="text" class="form-control @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required- autocomplete="phone" placeholder="{{ __('e.g. 01714073558') }}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-mobile-alt"></span>
            </div>
          </div>
            @error('phone')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="input-group mb-3">
          <!--<input type="password" class="form-control" placeholder="Password">-->
          <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required- autocomplete="new-password" placeholder="{{ __('Password') }}">          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
          	@error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="input-group mb-3">
          <!--<input type="password" class="form-control" placeholder="Retype password">-->
          <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required- autocomplete="new-password" placeholder="{{ __('Confirm Password') }}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" value="agree">
              <label for="agreeTerms">
               I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">{{ __('Register') }}</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i>
          Sign up using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i>
          Sign up using Google+
        </a>
      </div>

      <a href="{{ route('customer.login') }}" class="text-center">I already have a membership</a>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->
@endsection

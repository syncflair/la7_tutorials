@extends('layouts.auth_master_adminlte')
@section('title', 'Supplier Login')  

@section('style')
 <style type="text/css">
  </style>
@endsection

@section('content')
<div class="login-box" id="app">
  <div class="login-logo orange">
    SORBORAHO
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">{{ __('Supplier Login') }}</p>

      
      <!--Display message-->
      @include('commonParts.message_display')


      
      <form method="POST" action="{{ route('supplier.login') }}">
         @csrf

        <!-- <div class="input-group mb-3">
          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required- autocomplete="email" placeholder="{{ __('E-Mail Address') }}" autofocus>          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>

          	@error('email')
	            <span class="invalid-feedback" role="alert">
	                {{ $message }}
	            </span>
	        @enderror
        </div> -->

        <div class="input-group mb-3">
          <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required- autocomplete="username" placeholder="{{ __('E-Mail or Phone') }}" autofocus>          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>

            @error('username')
              <span class="invalid-feedback" role="alert">
                  {{ $message }}
              </span>
          @enderror
        </div>

        <div class="input-group mb-3">
          <!--<input type="password" class="form-control" placeholder="Password">-->
          <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required- autocomplete="current-password" placeholder="{{ __('Password') }}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
          	@error('password')
                <span class="invalid-feedback" role="alert">
                    {{ $message }}
                </span>
            @enderror
        </div>

        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" name="remember" checked="{{ old('remember') ? 'checked' : '' }}">   
              <label for="remember">
                {{ __('Remember Me') }}
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">{{ __('Login') }}</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <!-- <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div> -->
      <!-- /.social-auth-links -->

      <p class="mb-1">
      	@if (Route::has('password.request'))
            <a class="btn- btn-link-" href="{{ route('supplier.password.request') }}">
                {{ __('I forgot my password') }}
            </a>
        @endif
        <!--<a href="forgot-password.html">I forgot my password</a>-->
      </p>
      <!-- <p class="mb-0">
      	@if (Route::has('register'))
            <a class="nav-link- text-center" href="{{ route('register') }}">{{ __('Register a new membership') }}</a>      
        @endif
        <a href="register.html" class="text-center">Register a new membership</a>
      </p> -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
@endsection

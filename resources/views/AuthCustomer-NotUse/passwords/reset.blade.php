@extends('layouts.auth_master_adminlte')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
<style type="text/css">
  </style>
@endsection


@section('content')
<div class="register-box" id="app">
  <div class="register-logo orange">
    SHORBORAHO
  </div>

  <div class="card">
    <div class="card-body register-card-body">

     
    <p class="login-box-msg">{{ __('Customer Reset Password') }}</p>
    

    @if(Session::has('success'))
      <div class="alert alert-danger mt-2 text-center ml-0 mr-0">
            <span> {{ Session::get('success') }} </span>
            @php
                Session::forget('success');
                //Session::put('success');
            @endphp
        </div>
      @endif



      <!-- <form method="POST" action="{{ route('customer.password.request') }}"> -->
      <form method="POST" action="{{ route('customer.password.update') }}">
      	@csrf
      	
      	<input type="hidden" name="token" value="{{ $token }}">



        <div class="input-group mb-3">
          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" placeholder="{{ __('E-Mail Address') }}" autofocus>
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
          <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="{{ __('Password') }}">        
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
          <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="{{ __('Confirm Password') }}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-6">
            <!--<div class="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" value="agree">
              <label for="agreeTerms">
               I agree to the <a href="#">terms</a>
              </label>
            </div>-->
          </div>
          <!-- /.col -->
          <div class="col-6">
            <button type="submit" class="btn btn-primary btn-block">{{ __('Reset Password') }}</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <br/>
      <a href="/" class="text-center">Back to Home</a> Or
      <a href="{{ route('customer.login') }}" class="text-center">Login</a>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->
@endsection

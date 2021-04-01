@extends('layouts.auth_master_adminlte')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
  <style type="text/css">
  </style>
@endsection

@section('content')

<div class="login-box" id="app">
  <div class="login-logo orange">
    SHORBORAHO
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg pl-0 pr-0 text-justify">
        {{ __('Supplier... You forgot your password? Here you can easily retrieve a new password.') }} 
      </p>

      @if (session('status'))
          <div class="alert alert-success" role="alert">
              {{ session('status') }}
          </div>
      @endif

      <form method="POST" action="{{ route('supplier.password.email') }}">
        @csrf

        <div class="input-group mb-3">
          <!--<input type="email" class="form-control" placeholder="Email">-->
          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required- autocomplete="email" placeholder="Enter your email address" autofocus>
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


        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary- btn-block- btn-warning btn-block btn-flat-">{{ __('Send Password Reset Link') }}</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <p class="mt-3 mb-1">
        <a class="text-small link-muted text-center" href="{{ route('supplier.login') }}">Back to Login</a>
      </p>
      <!-- <p class="mb-0">
        <a href="" class="text-center">Register a new membership</a>
      </p> -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
@endsection

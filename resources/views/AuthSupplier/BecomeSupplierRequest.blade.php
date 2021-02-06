@extends('layouts.auth_master_adminlte')
@section('title', 'Supplier Login')  

@section('style')

  <style type="text/css">
    .login-page, .register-page{ height:auto !important; }
    .login-box { width: unset; }
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
      <p class="login-box-msg pl-0 pr-0 text-justify">
        <!-- {{ __('Fill the form to become Supplier') }} -->
        If you want to become our supplier please fill the form with required information. We will contact you soon.
      </p>

      
      <!--Display message-->
      @include('commonParts.message_display')


      
      <form method="POST" action="{{ route('supplier.request') }}">
         @csrf

        <div class="input-group mb-3">
          <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required- autocomplete="name" placeholder="{{ __('Enter name') }}" autofocus>          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>

            @error('name')<span class="invalid-feedback text-small" role="alert">{{ $message }}</span>@enderror
        </div>        

        <div class="input-group mb-3">
          <input id="email" type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required- autocomplete="email" placeholder="{{ __('Email address') }}" autofocus>          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>

            @error('email')<span class="invalid-feedback" role="alert">{{ $message }}</span>@enderror
        </div>


        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" style="border-left: 1px solid #ced4da;">+88</span>
          </div>
          <input type="text" data-inputmask="" data-mask="" im-insert="true" id="phone" class="form-control @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}" required- autocomplete="phone"  placeholder="{{ __('Enter phone nmuber') }}" >
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>          

          @error('phone')<span class="invalid-feedback" role="alert">{{ $message }}</span>@enderror
        </div>

        <div class="input-group mb-3">
          <input id="company_name" type="text" class="form-control @error('company_name') is-invalid @enderror" name="company_name" value="{{ old('company_name') }}" required- autocomplete="company_name" placeholder="{{ __('Enter Business/Company name') }}" autofocus>          
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>

            @error('company_name')<span class="invalid-feedback" role="alert">{{ $message }}</span>@enderror
        </div>

        <div class="form-group">
          <!-- <label>Textarea</label> -->
          <textarea class="form-control @error('business_info') is-invalid @enderror" name="business_info" rows="3" placeholder="Enter your business details."></textarea>
          @error('business_info')<span class="invalid-feedback" role="alert">{{ $message }}</span>@enderror
        </div>

        <div class="form-group">
          <!-- <label>Textarea</label> -->
          <textarea class="form-control @error('product_info') is-invalid @enderror" name="product_info" rows="3" placeholder="What type of product do you want to supply?"></textarea>
          @error('product_info')<span class="invalid-feedback" role="alert">{{ $message }}</span>@enderror
        </div>

        

        <div class="row">
          <div class="col-8">
            <a class="btn- btn-link- text-small link-muted" href="{{ route('supplier.login') }}">{{ __('Back to Signin') }}</a>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-warning btn-block btn-flat- pt-1">{{ __('Submit') }}</button>
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

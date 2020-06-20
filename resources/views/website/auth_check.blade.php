@extends('layouts.app')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
 <style type="text/css">
  </style>
@endsection

@section('content')
	<div class="container">
	<div class="col-md-12 offset-md-3-" >
	  <!-- /.login-logo -->
	  <div class="card">
	    <div class="card-body login-card-body-">
	      <h2 class="text-center mb-3">{{ __('Authentication') }}</h2>
	      <!-- Display Success or Error Message-->
		  @include('commonParts.message_display')


		  <div class="row">
		   		
	   		<div class="col-md-5">
	   			<p>Login</p>

	   			<form method="POST" action="{{ route('login') }}">
		         @csrf

		        <div class="input-group mb-3">
		          <!--<input type="email" class="form-control" placeholder="Email">-->
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
		              <input type="checkbox" id="remember">
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

	   		</div>

	   		<div class="col-md-7">
	   			<p>Registration</p>
	   			<form method="POST" action="{{ route('register')}}">
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
		          <!--<input type="email" class="form-control" placeholder="Email">-->
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
	   		</div>
		  </div><!--/row-->



		</div><!--/card-body-->
      
	  </div><!--/card-->
	
	</div><!--/col-md-12-->
	</div><!--#container-->
<!-- /.login-box -->
@endsection

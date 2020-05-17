@extends('layouts.app')
@section('title') {{ ucfirst(\Request::segment(1)) }} @endsection

@section('style')
 <style type="text/css">
  </style>
@endsection

@section('content')
	<div class="container">
	<div class="col-md-6 offset-md-3" >
	  <!-- /.login-logo -->
	  <div class="card">
	    <div class="card-body login-card-body-">
	      <p class="text-center">{{ __('Contact Us') }}</p>

	      	@if(Session::has('success'))
	      	<div class="alert alert-danger mt-2 text-center ml-0 mr-0">
		          <span> {{ Session::get('success') }} </span>
		          @php
		              Session::forget('success');
		              //Session::put('success');
		          @endphp
		      </div>
		   	@endif 


	      <form method="POST" action="{{ url('send-message-query') }}">
	         <!--@csrf -->
	         {{ csrf_field() }}


	        <div class="input-group mb-2">
	          <!--<input type="email" class="form-control" placeholder="Email">-->
	          <input type="text" name="name" class="form-control" placeholder="{{ __('Your Name') }}">          
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-envelope"></span>
	            </div>
	          </div>	          	 
	        </div>
	        @if ($errors->has('name'))
	        	<span class="text-danger">{{ $errors->first('name') }}</span>
	        @endif 

	        <div class="input-group mb-2 mt-2">
	          <!--<input type="email" class="form-control" placeholder="Email">-->
	          <input type="email" name="email" class="form-control" required- placeholder="{{ __('Your E-Mail Address') }}">          
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-envelope"></span>
	            </div>
	          </div>
	        </div>
	        @if ($errors->has('email'))
		        	<span class="text-danger">{{ $errors->first('email') }}</span>
		    @endif 

	        <div class="input-group mb-2 mt-2">
	          <!--<input type="password" class="form-control" placeholder="Password">-->
	          <textarea class="form-control" rows="5" name="visitor_message" placeholder="{{ __('Your Message') }}"></textarea>
	          <div class="input-group-append">
	            <div class="input-group-text">
	              <span class="fas fa-lock"></span>
	            </div>
	          </div>	          	 
	        </div>
	        @if ($errors->has('visitor_message'))
		        	<span class="text-danger mb-2">{{ $errors->first('visitor_message') }}</span>
		    @endif 

	        <div class="row mt-4">
	          <div class="col-6">
	          </div>
	          <!-- /.col -->
	          <div class="col-6">
	            <button type="submit" class="btn btn-primary btn-flat btn-block">{{ __('Send your query') }}</button>
	          </div>
	          <!-- /.col -->
	        </div>
	      </form>
      
	    </div>
	    <!-- /.login-card-body -->
	  </div>

	</div>
	</div><!--#app-->
<!-- /.login-box -->
@endsection

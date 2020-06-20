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

	      	<!-- Display Success or Error Message-->
		   	@include('commonParts.message_display')


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
	              <span class="fas fa-envelope"></span>
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



	<!-- show Category Sub Category -->
	<div class="col-md-6 offset-md-3">
	<h3>Category</h3>

		<ul><!-- Here sub_category is function in Category Model -->
		@foreach( \App\Models\Category::whereNull('parent_id')->with('childrenCategories')->where('is_enabled', '1')->get() as $key => $category)
			
				<li>{{ $category->cat_name }} </li> <!--Fist Level-->

				@if($category->childrenCategories->count() > 0)
					<ul>
						@foreach($category->childrenCategories as $childCategory )

							<li> {{ $childCategory->cat_name }} </li> <!--Secound Level-->

							@if($childCategory->childrenCategories->count() > 0)
								
								<ul>
									@foreach($childCategory->childrenCategories as $subChildCategory )

										<li> {{ $subChildCategory->cat_name }}  ( {{ $subChildCategory->count() }} )</li> <!--Third Level-->
										
									@endforeach
								</ul>

							@endif

						@endforeach
					</ul>
				@endif

		@endforeach
		</ul>

		

	</div>



	</div><!--#container-->
<!-- /.login-box -->
@endsection

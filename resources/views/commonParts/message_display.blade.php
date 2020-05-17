@if(Session::has('success'))
  	<div class="alert alert-success mt-2 text-center ml-0 mr-0">
      <span> {{ Session::get('success') }} </span>
      @php
          Session::forget('success');
          //Session::put('success');
      @endphp
  </div>
@elseif(Session::has('error'))
	<div class="alert alert-danger mt-2 text-center ml-0 mr-0">
      <span> {{ Session::get('error') }} </span>
      @php
          Session::forget('error');
          //Session::put('error');
      @endphp
  </div>
@endif 
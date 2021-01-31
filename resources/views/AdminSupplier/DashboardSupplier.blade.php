@extends('layouts.AdminSupplierLayout.master_template')
@section('title')
  Dashboard | {{ Auth::guard('supplier')->user()->name }}
@endsection

@section('extra_css')
    <!--Extra CSS-->
@endsection 


@section('content')

	@if(Auth::guard('supplier')->check())
	    <supplier-admin-wrapper 
	        :issspaauthenticated="true" 
	        :authsupplier="{{ Auth::guard('supplier')->user() }}" 
	    ></supplier-admin-wrapper>

	@endif 



@endsection

@section('extra_script')
    <!--Extra Script-->
@endsection









@extends('layouts.AdminLayout.master_adminlte')
@section('title', 'Dashboard')


@section('extra_css')
	<!--Extra CSS-->
@endsection 

@section('content')

<!-- Router-view passing through admin wrapper component -->
<adminwrapper></adminwrapper>


@endsection

@section('extra_script')
	<!--Extra Script-->
@endsection 

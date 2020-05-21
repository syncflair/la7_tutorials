@extends('layouts.master_adminlte')
@section('title', 'Dashboard')


@section('extra_css')
	<!--Extra CSS-->
@endsection 

@section('content')

<!-- Vue display here -->
<router-view></router-view>
<!-- Vue progress bar display here -->
<vue-progress-bar></vue-progress-bar>


@endsection

@section('extra_script')
	<!--Extra Script-->
@endsection 

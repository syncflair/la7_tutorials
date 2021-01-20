@extends('layouts.AdminCustomerLayout.master_template')
@section('title')
  Dashboard | {{ Auth::guard('customer')->user()->name }}
@endsection

@section('extra_css')
    <!--Extra CSS-->
@endsection 


@section('content')

       
<h1>Not Use</h1>>


@endsection

@section('extra_script')
    <!--Extra Script-->
@endsection

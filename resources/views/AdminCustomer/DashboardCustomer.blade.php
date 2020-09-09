@extends('layouts.AdminCustomerLayout.master_template')
@section('title')
  Dashboard | {{ Auth::guard('customer')->user()->name }}
@endsection

@section('extra_css')
    <!--Extra CSS-->
@endsection 


@section('content')

       
<customer-admin-wrapper></customer-admin-wrapper>


@endsection

@section('extra_script')
    <!--Extra Script-->
@endsection

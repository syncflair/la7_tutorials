@extends('layouts.AdminSupplierLayout.master_template')
@section('title')
  Dashboard | {{ Auth::guard('supplier')->user()->name}}
@endsection

@section('extra_css')
    <!--Extra CSS-->
@endsection 


@section('content')

       
  <supplier-admin-wrapper></supplier-admin-wrapper>


@endsection

@section('extra_script')
    <!--Extra Script-->
@endsection

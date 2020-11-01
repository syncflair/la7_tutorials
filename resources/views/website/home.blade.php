@extends('layouts.WebsiteLayout.master_template')
@section('title', 'Sorboraho')

@section('extra_css')
    <!--Extra CSS-->
@endsection 

@section('content')


    <!-- Router-view passing through admin wrapper component -->
    <website-wrapper :isitwebsite="1" ></website-wrapper>


    

@endsection   

@section('extra_script')
    <!--Extra Script-->
@endsection 

    


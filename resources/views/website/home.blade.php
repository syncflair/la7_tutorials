@extends('layouts.WebsiteLayout.master_template')
@section('title', 'Sorboraho')

@section('extra_css')
    <!--Extra CSS-->
@endsection 

@section('content')


	

    <!-- Router-view passing through admin wrapper component -->
    @if( Auth::guard('customer')->check() )
	    <website-wrapper 
	    	:isitwebsite="1"
            :isauthenticated="true" 
	    	:authcustomer="{{ Auth::guard('customer')->user() }}" 
	    ></website-wrapper>
    @elseif(Auth::guard('supplier')->check())
        <website-wrapper 
            :isitwebsite="1"
            :issspaauthenticated="true" 
            :authsupplier="{{ Auth::guard('supplier')->user() }}" 
        ></website-wrapper>
    @else
    	<website-wrapper 
	    	:isitwebsite="1" 
            :isauthenticated="false"
	    ></website-wrapper>
    @endif

    <!-- Auth::guard('customer')->check() ? Auth::guard('customer')->user() : 'null' -->


@endsection   

@section('extra_script')
    <!--Extra Script-->
@endsection 

    


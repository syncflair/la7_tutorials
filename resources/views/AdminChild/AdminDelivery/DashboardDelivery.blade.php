@extends('layouts.AdminChildsLayout.master_template')
@section('title')
  Dashboard | {{ Auth::user()->name }}
@endsection

@section('extra_css')
    <!--Extra CSS-->
@endsection 


@section('content')


    <admin-child-wrapper
    	:user="{{Auth::user()}}" 	
		:settings="{{ \App\Models\Settings\Setting::with('belongsToLanguage','belongsToCurrency')->where(['id' => 1 ])->first() }}" 
    ></admin-child-wrapper>

<!-- :permissions="{{ \App\Models\Permission::where(['id' => Auth::user()->role->id ])->first() }}"        -->

@endsection

@section('extra_script')
    <!--Extra Script-->
@endsection


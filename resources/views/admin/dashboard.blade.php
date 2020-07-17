@extends('layouts.AdminLayout.master_adminlte')
@section('title', 'Dashboard')


@section('extra_css')
	<!--Extra CSS-->
@endsection 

@section('content')

<!-- Router-view passing through admin wrapper component -->
<adminwrapper 
	:user="{{Auth::user()}}" 
	:permissions="{{ \App\Models\Permission::where(['id' => Auth::user()->role->id ])->first() }}" 
></adminwrapper>

<!-- :permissions="{{ \App\Models\Permission::where(['id' => Auth::user()->role->id ])->first() }} " -->


<!-- {{Auth::user()->role->id}} -->
<!-- {{ GetAuthUserRolePermission()->role->read }} -->
@php
$data = ["title" => ["name" => "bony", "email" => "bony@gmail.com"], "desc" => "test test test"];
print_r($data);

	
@endphp
{{$data['desc']}}
{{$data['title']['name']}}

<!-- {{ \App\Models\Permission::where(['id' => Auth::user()->role->id ])->first() }}  -->


@endsection

@section('extra_script')
	<!--Extra Script-->
@endsection 

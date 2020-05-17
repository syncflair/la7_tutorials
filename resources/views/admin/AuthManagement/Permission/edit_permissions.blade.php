@extends('layouts.master_adminlte')
@section('title') Edit {{ ucfirst(\Request::segment(1)) }} @endsection

@section('extra_css')
	<style type="text/css">
   .form-body{background: #ffffff !important; }
   .table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th { background-color: info; }
   .table-striped>tbody>tr>td:first-child{font-weight:600; color:green;}
   .table-striped>tbody>tr>td:nth-child(2){ color:#17a2b8;} 
   .mycheckbox{width: 18px; position: relative; height: 18px; display: block;}

   .form-head{color:gray; border-bottom: 1px solid pink}
   /*Title Box Design*/
   .titleBox{border:1px solid pink; border-radius: 3px;}
   .titleText{position:relative; top:-0.9em; margin-left:1em; display:inline; background-color:white; padding:2px 5px 2px 5px; }
   .TitelBoxInput{margin-left:15px;  margin-bottom:5px;}
   /*--/Title Box Design*/

  </style>
@endsection 

@section('content')


<?php

	//$permissionData= $permission->permission;
	//$permissionDecode = json_decode($permissionData);
	//$permissionDecode = json_decode($permission->permission);
	//dd($permissionDecode);
	//echo @$permissionDecode->user->page;
	//echo @json_decode($permission->permission)->user->page;
//test
 //echo @GetAuthUserRolePermission()->role->add;
 ?>

<!-- Content Header (Page header) -->
    <div class="content-header pb-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
           <!-- <h4 class="m-0 text-dark">Users</h4>-->
            {{ CustomeBreadcrumbs() }}
            
          </div><!-- /.col -->
          <div class="col-sm-6 text-right">
              <a href="{{ BackPath() }}" type="button" class="btn btn-flat btn-primary btn-sm">Back</a> 
              <a href="{{route('user.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Users</a>
              <a href="{{route('role.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Roles</a>
              <a href="{{route('permission.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Permission</a>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">      
      <div class="container-fluid">

        <div class="form-body mt-3">
          <div class="col-md-10 offset-1 pt-2 pb-5">
          		<h3 class="form-head pt-0 mb-3"> Edit Permissions </h3>
      		  @include('admin.AuthManagement.Permission.edit_permissions_form')
          </div>
        </div>

      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->


@endsection

@section('extra_script')
<!--Extra Script-->
<script type="text/javascript">
  

  $( window ).on( "load", function(){
    //add pagination-sm class to Pagination
  } );

//check all checkbox on one click
  $('.select_all').click(function() {
    if ($(this).is(':checked')) {
        $('.mycheckbox').attr('checked', true);
    } else {
        $('.mycheckbox').attr('checked', false);
    }
  });


</script>
@endsection 

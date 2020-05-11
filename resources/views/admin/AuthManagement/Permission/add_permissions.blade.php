@extends('layouts.master_adminlte')
@section('title')  Add {{ ucfirst(\Request::segment(1)) }} @endsection


@section('extra_css')
	<style type="text/css">
   .form-body{background: #ffffff !important; }
   .table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th { background-color: info; }
   .mycheckbox{width: 18px; position: relative; height: 18px; display: block;}
  </style>
@endsection 

@section('content')




<?php
//test
 echo GetAuthRolePermission()->role->add;
 

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
          <div class="col-md-10 offset-1 pt-4 pb-5">
      		  @include('admin.AuthManagement.Permission.add_permissions_form')
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

@extends('layouts.master_adminlte')
@section('title', 'Dashboard')


@section('extra_css')
	<!--Extra CSS-->
@endsection 

@section('content')

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
              <a type="button" class="btn btn-primary btn-flat btn-sm"> <i class="fas fa-plus"></i> Add New</a>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">      
      <div class="container-fluid">
        
      		<h3>Permissin List</h3>

      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->


@endsection

@section('extra_script')
	<!--Extra Script-->
@endsection 

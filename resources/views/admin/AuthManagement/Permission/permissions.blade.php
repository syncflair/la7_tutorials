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
        
      		<!-- Data row -->
        <div class="row mt-3 mb-4">
          
          <div class="col-md-12">

            <div class="card cusotme-card">
              <!-- <div class="card-header">
                <h3 class="card-title">Bordered Table</h3>
              </div>-->
              <!-- /.card-header -->
              <div class="card-body pt-3">
                <table id="permission_table" class="table table-sm table-striped" style="width:100%">
                  <thead>                  
                    <tr>
                      <th style="width: 5%">#</th>
                      <th style="width: 10%">Role</th>
                      <th style="width: 70%">Permission Module</th>
                      <th style="width: 15%; text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <!--Datatables here-->                   

                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->

            </div>
            
          </div>          

        </div>
        <!-- /Data row -->

      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->


@endsection

@section('extra_script')
<!--Extra Script-->
<script type="text/javascript">

  $( window ).on( "load", function(){
    //add pagination-sm class to Pagination
     $(".pagination").addClass("pagination-sm");
  } );

   
    
  $.fn.dataTable.ext.errMode = 'none'; //scape error message
  //show user datatable
  var table1 = $('#permission_table').DataTable({    
    processing:true,
    serverSide:true,
    ajax:{ url: "{{ route('permission.index') }}" },
    columns: [
          {data:'id', name:'id'},
          {data:'role_name', name:'role_name' , orderable: false, searchable: false },
          {data:'permission', name:'permission'},
          {data:'action', name:'action', orderable: false, searchable: false }        
        ]
  }); //*/



</script>
@endsection 

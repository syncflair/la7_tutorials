@extends('layouts.AdminLayout.master_adminlte')
@section('title') {{ ucfirst(\Request::segment(1)) }} of Role @endsection


@section('extra_css')
	<!--Extra CSS-->
   <style type="text/css">
    #permission_table > tbody > tr > td:last-child{ text-align: right;  } /*Datatables style  */
    #permission_table>tbody>tr>td>span{margin:1px;}
  </style>
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

              <!-- @if( @GetAuthUserRolePermission()->user->page != null )  -->
              <a href="{{route('user.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Users</a>
              <!-- @endif -->

              <!-- @if( @GetAuthUserRolePermission()->role->page != null )  -->
              <a href="{{route('role.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Roles</a>
              <!-- @endif -->

              <!-- @if( @GetAuthUserRolePermission()->permission->add != null )  -->
              <a href="{{route('permission.create')}}" type="button" class="btn btn-primary btn-flat btn-sm"> <i class="fas fa-plus"></i> Add Permission</a>
              <!-- @endif -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">      
      <div class="container-fluid">

        @if(Session::has('success'))
          <div class="alert alert-success mt-2">
              {{ Session::get('success') }}
              @php
                  Session::forget('success');
                  //Session::put('success');
              @endphp
          </div>
        @endif
       <!-- Display Success or Error Message-->
        
        
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
                      <th style="width: 4%">#</th>
                      <th style="width: 10%">Role</th>
                      <th style="width: 64%">Permission Module</th>
                      <th style="width: 7%">UpdateAt</th>
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
    //paging: false,
    //searching: false,
    info:false,
    ajax:{ url: "{{ route('permission.index') }}" },
    columns: [
          {data:'id', name:'id'},
          {data:'role_name', name:'role_name' , orderable: false, searchable: false },
          {data:'permission', name:'permission'},
          {data:'updated_at', name:'updated_at' , orderable: false, searchable: false },
          {data:'action', name:'action', orderable: false, searchable: false }        
        ]
  }); //*/


  //Delete Function
  function PermissionDelete(id){
    event.preventDefault();  //this is importent

    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    var id = id; //alert('deleteData '+id);
    
    var urlTo = "{{ route('permission.destroy', ':id') }}" 
    urlTo = urlTo.replace(':id', id ); //resource rout not work without this 

    Swal.fire({
      title: 'Are you sure to Delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes, delete it!'
    }).then( (result) => {

      if ( result.value ) {

        $.ajax({
          type : "DELETE", //'_method': 'DELETE' not require in data section       
          url : urlTo,
          data : {"_token": csrf_token}, //csrf token is must be use
          success : function(data) {
            if(data.success){ //alert(data.success);
              //table1.ajax.reload();
              table1.ajax.reload( null, false ); 
              toastr.info(data.success);               
            }
            if(data.errors){
              toastr.info(data.errors);                 
            }
          }
        }); 

      }else{
        toastr.info( 'Your data is safe!');
      }
    })
  }




</script>
@endsection 

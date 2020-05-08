@extends('layouts.master_adminlte')
@section('title', 'Users')


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
              <a onclick="AddNewUser()" type="button" class="btn btn-primary btn-flat btn-sm"> <i class="fas fa-plus"></i> Add New User</a>
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
                <table id="users_table" class="table table-sm table-striped" style="width:100%">
                  <thead>                  
                    <tr>
                      <th style="width: 5%">#</th>
                      <th style="width: 10%">Avatar</th>
                      <th style="width: 20%">Name</th>
                      <th style="width: 25%">Email</th>
                      <th style="width: 10%">Role</th>
                      <th style="width: 10%">Status</th>
                      <th style="width: 15%; text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                  
                    

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

    @include('admin.AuthManagement.User.user_form_modal') <!--Bootstrap Contact form include here-->

@endsection

@section('extra_script')
	<!--Extra Script-->
  <script type="text/javascript">

  $.fn.dataTable.ext.errMode = 'none'; //scape error message
  //show user datatable
  var table1 = $('#users_table').DataTable({    
    processing:true,
    serverSide:true,
    ajax:{ url: "{{ route('user.index') }}" },
    columns: [
          {data:'id', name:'id'},
          {data:'avatar', name:'avatar',
              render: function(data, type, full, meta){
                if(data!= null){
                  return '<img src="'+data+'"  class="img-thumbnail" style="width:35px; height:35px;" />';
                }else{
                  return '<img src="{{URL::to('/FilesStorage/CommonFiles/no-img.png')}}"  class="img-thumbnail" style="width:35px; height:35px;" />';
                }
              },  orderable: false, searchable: false
          },
          {data:'name', name:'name'},
          {data:'email', name:'email'},
          {data:'role_name', name:'role_name' , orderable: false, searchable: false },
          {data:'us_name', name:'status', orderable: false, searchable: false },
          {data:'action', name:'action', orderable: false, searchable: false }        
        ]
  });

   

  function AddNewUser(){
    //info, success, warning or error
    //toastr.success('Add New User!');
    $('#user_form_modal').modal('show');
  }

  function ShowUser(id){
    //info, success, warning or error
    toastr.success('Show details of user '+ id);
  }

  function EditUser(id){
    //info, success, warning or error
    toastr.success('Are you the 6 fingered man?');
  }

//Delete Function
  function DeleteUser(id){
    event.preventDefault();  //this is importent

    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    var id = id; //alert('deleteData '+id);
    
    var urlTo = "{{ route('user.destroy', ':id') }}" 
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
              table1.ajax.reload();
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

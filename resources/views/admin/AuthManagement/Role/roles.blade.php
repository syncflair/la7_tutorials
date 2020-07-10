@extends('layouts.AdminLayout.master_adminlte')
@section('title', 'Role')


@section('extra_css')
	<!--Extra CSS-->
  <style type="text/css">
    #roles_table > tbody > tr > td:last-child{text-align: right;}/*Datatables style  */
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
              
              @if( @GetAuthUserRolePermission()->user->page != null )
              <a href="{{route('user.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Users</a>
              @endif

              @if( @GetAuthUserRolePermission()->permission->page != null )
              <a href="{{route('permission.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Permissions</a>
              @endif

          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">      
      <div class="container-fluid">
        
      		<!-- Data row -->
        <div class="row mt-3 mb-4 ">
          
          <!--/col-7-->
          <div class="col-7- col-md-7 col-sm-6 container-sm">

            <div class="card cusotme-card">
              <!--<div class="card-header">
                <h3 class="card-title">Bordered Table</h3>
              </div> -->
              <!-- /.card-header -->
              <div class="card-body pt-0">
                <table id="roles_table" class="table table-sm table-striped">
                  <thead>                  
                    <tr>
                      <th style="width: 10%">ID</th>
                      <th style="width: 45%">Role Name</th>
                      <th style="width: 10%;">Status</th>
                      <th style="width: 40%; text-align:right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                     
                      <!--Datatable here-->

                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
             

            </div>
            
          </div> <!--/col-7-->         

          <!--col-5-->
          <div class="col-5- col-md-5 col-sm-6 float-sm-right">
            <div class="card card-info- cusotme-card">
              

              @if( @GetAuthUserRolePermission()->role->add != null )
              <div class="card-header pb-0">
                <h4 id="form_title" class="card-title mb-0">Add Role</h4>
              </div>
              <!-- /.card-header -->             
              <!-- form start -->
              <form role="form" id="role_form" method="POST">
                  
                  {{ csrf_field() }}  <!--@method('PATCH') {{ method_field('POST') }}-->
                  <input type="hidden" id="input_method" name="_method" value="PATCH">

                  <input type="hidden" name="form_action" id="form_action" value="add" />
                  <input type="hidden" name="id" id="id" value="" />

                  <!--<span id="errors_output"></span>-->

                <div class="card-body pb-1">

                 <div class="form-group">
                    <!--<label  for="role_name">Add Role</label>-->
                    <input type="text" id="name" class="form-control" name="name" id="name" placeholder="Enter role">
                    <span class="danger" id="name_error"> </span>
                  </div>

                  <div class="form-group">
                    <textarea id="role_desc" class="form-control" name="role_desc" placeholder="Description"> </textarea>
                    <span class="danger" id="role_desc_error"> </span>
                  </div>
                  
                  <!--<div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Active</label>
                  </div>-->
                </div>
                <!-- /.card-body -->

                <div class="card-footer pt-0">
                  <button type="submit" id="form_button" class="btn btn-primary btn-flat btn-sm">Save</button>
                </div>
              </form>
              @else
                <div class="card-header pb-0 pb-2 warning">
                  <h4 id="form_title" class="card-title mb-0">You dont have permission to add or edit roles.</h4>
                </div>
              @endif 


            </div>

            <div class="card card-info- cusotme-card d-none d-md-block d-lg-block ">
              <div class="card-header ">
                <h3 class="card-title">Notes</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <div class="card-body pt-0 blue">                  
                  <p><i class="icon fas fa-check"></i> RoleId 1 to 13 are allowed for Admin Dashboard </p>
                  <p><i class="icon fas fa-check"></i> RoleId 14 is allowed for Public Dashboard</p>             
              </div>
            </div>

          </div><!--/col-5-->

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
  var table1 = $('#roles_table').DataTable({    
    processing:true,
    serverSide:true,
    paging: false,
    searching: false,
    info:false,
    ajax:{ url: "{{ route('role.index') }}" },
    columns: [
          {data:'id', name:'id'},
          {data:'name', name:'name'},
          {data:'is_enabled', name:'is_enabled' , orderable: false, searchable: false },
          {data:'action', name:'action', orderable: false, searchable: false }        
        ]
  });


//Insert/UPdate data by Ajax    
  $(function(){      
    $('#role_form').on('submit', function (e) {
      e.preventDefault(); // this prevents the form from submitting
           
    if( $('#form_action').val() == 'add' ){
      $("#input_method").val("POST"); //change hidden method type to POST default is PATCH
      
      $.ajax({                  
          type : "POST", //find store method if type=POST               
          url : "{{ route('role.store') }}",                         
          data: new FormData($("#role_form")[0]),
          cache:false,
          contentType: false,
          processData: false,
          //dataType: 'json', //work without dataType                 
          success : function(data) { 
            if(data.errors){              
              if(data.errors.name){ $( '#name_error' ).html( data.errors.name ); }
              if(!data.errors.name){ $( '#name_error' ).html( '' ); }

              if(data.errors.role_desc){ $( '#role_desc_error' ).html( data.errors.role_desc ); }
              if(!data.errors.role_desc){ $( '#role_desc_error' ).html( '' ); }
            }
            if(data.success){            
              $('#name').val(0);
              $('#role_form')[0].reset();

              toastr.success(data.success); 

              $( '#name_error' ).html( '' );
              table1.ajax.reload( null, false );     
            }                   
          }
      });//*/
        //return false;
    }//end Insert check //*/
   
    if($('#form_action').val() == 'update'){ 
      //var csrf_token = $('input[name="_token"]').val();
      var id = $('#id').val(); 
      var urlTo = "{{ route('role.update', ':id') }}" ;
      urlTo = urlTo.replace(':id', id ); //resource rout not work without this 
  
      $.ajax({    
         // type: "PATCH",  
          type: 'POST',              
          url : urlTo,  
          data:  new FormData($("#role_form")[0]),           
          //data: { id:id, },
          cache:false,
          contentType: false,
          processData: false,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), '_method': 'PATCH'
          },
          dataType: 'json', //work without dataType
          success : function(data) {  
             if(data.errors)
            {
              if(data.errors.name){ $( '#name_error' ).html( data.errors.name ); }
              if(!data.errors.name){ $( '#name_error' ).html( '' ); }  

              if(data.errors.role_desc){ $( '#role_desc_error' ).html( data.errors.role_desc ); }
              if(!data.errors.role_desc){ $( '#role_desc_error' ).html( '' ); }                
            }
            if(data.success){

              $( '#name_error' ).html( '' );
              $('#name').val(0);
              $('#role_form')[0].reset();

              //Get ready for new entry
              $('#form_title').text('Add Role');
              $('#form_button').text('Save');
              $('#form_action').val('add');
              $("#input_method").val("POST");//change hidden method type to POST default is PATCH

              toastr.success(data.success); 

              table1.ajax.reload( null, false ); 
            }                                     
          }//end success
      });

    }//end update check//*/

    });/*end submit evert*/
  });/*end function evert*/
 


  function RoleEdit(id){
    event.preventDefault(); 
    var urlTo = "{{ route('role.edit', ':id') }}" 
    urlTo = urlTo.replace(':id', id );

    $.ajax({
      type : "GET", //'_method': 'DELETE' not require in data section
      dataType:"JSON",
      url : urlTo,
      success : function(data) {  

        ///$('input[name=_method]').val('PATCH');     
        $('#form_title').text('Update Role');
        $('#form_button').text('Update');

        $('#form_action').val('update');
        $("#input_method").val("PATCH");

        $('#id').val(data.id);
        $('#name').val(data.name);
         $('#role_desc').val(data.role_desc);
                     
      }
    });
  }



  function RoleActive(id){
    event.preventDefault();  //this is importent
    var csrf_token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type : "GET",       
        url : '/role-active/'+ id,
        data : {"_token": csrf_token}, //csrf token is must be use
        success : function(data) {
          if(data.success){ 
            table1.ajax.reload( null, false ); 
            toastr.success(data.success);               
          }
          if(data.errors){
            toastr.info(data.errors);                 
          }
        }
      });        
  }


  function RoleUnactive(id){
    event.preventDefault();  //this is importent
    var csrf_token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type : "GET",       
        url : '/role-unactive/'+ id,
        data : {"_token": csrf_token}, //csrf token is must be use
        success : function(data) {
          if(data.success){ 
            table1.ajax.reload( null, false ); 
            toastr.warning(data.success);               
          }
          if(data.errors){
            toastr.info(data.errors);                 
          }
        }
      }); 
  }


//Delete Function
  function RoleDelete(id){
    event.preventDefault();  //this is importent

    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    var id = id; //alert('deleteData '+id);
    
    var urlTo = "{{ route('role.destroy', ':id') }}" 
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

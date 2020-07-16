@extends('layouts.AdminLayout.master_adminlte')
@section('title', 'Users')


@section('extra_css')
	<!--Extra CSS-->
  <style type="text/css">
    #users_table > tbody > tr > td:last-child{text-align: right;}/*Datatables style  */
  </style>
@endsection 

@section('content')


<!-- Content Header (Page header) -->
    <div class="content-header pb-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
           <!-- <h4 class="m-0 text-dark">Users</h4>-->
          
            {{ CustomeBreadcrumbs() }}  <!--Get form Helper-->

          <!-- {{ auth()->user()->role->permission->permission }} -->
        
   
          </div><!-- /.col -->
          <div class="col-sm-6 text-right">
              <a href="{{ BackPath() }}" type="button" class="btn btn-flat btn-primary btn-sm">Back</a> 

              
              <a href="{{route('role.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Roles</a>
              

              
              <a href="{{route('permission.index')}}" type="button" class="btn btn-primary btn-flat btn-sm"> Permissions</a>
             

              
              <a onclick="newUserAdd()" type="button" class="btn btn-primary btn-flat btn-sm"> <i class="fas fa-plus"></i> Add New User</a>
              

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
                      <th style="width: 5%">Status</th>
                      <th style="width: 20%; text-align: right;">Action</th>
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


    <div id="loading"></div>
    @include('admin.AuthManagement.User.user_form_modal') <!--Bootstrap Contact form include here-->

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
  var table1 = $('#users_table').DataTable({    
    processing:true,
    serverSide:true,
    responsive: true,
    info:false,
    //bFilter: false,
    //bLengthChange: false,
    ajax:{ url: "{{ route('user.index') }}" },
    columns: [
          {data:'id'},
          {data:'avatar',
              render: function(data, type, full, meta){
                if(data!= null){
                  return '<img src="'+data+'"  class="img-thumbnail" style="width:35px; height:35px;" />';
                }else{
                  return '<img src="{{asset('/FilesStorage/CommonFiles/no-img.png')}}"  class="img-thumbnail" style="width:35px; height:35px;" />';
                }
              },  orderable: false, searchable: false
          },
          {data:'name'},
          {data:'email'},
          {data:'role_name', orderable: false, searchable: false },
          {data:'us_name', orderable: false, searchable: false },
          {data:'action', orderable: false, searchable: false }        
        ]
  });

   
  $('.close-form').on('click', function(){
    $('#user_form')[0].reset();
    //$('#fileInput').val(null);
    $('.error_message').html(''); 
    //$('#user_form')[0].trigger("reset");
  }) 

  function newUserAdd(){
    $('#user_form')[0].reset();
    $("#input_method").val("POST"); //change hidden method type to POST default is PATCH
     $('#form_action').val('add');
    $('#user_form_modal').modal('show');
  }

  //Insert/UPdate data by Ajax    
  $(function(){      
    $('#user_form').on('submit', function (e) {
      e.preventDefault(); // this prevents the form from submitting
           
    if( $('#form_action').val() == 'add' ){
      //$("#input_method").val("POST"); //change hidden method type to POST default is PATCH
      
      $.ajax({                  
          type : "POST", //find store method if type=POST               
          url : "{{ route('user.store') }}",                         
          data: new FormData($("#user_form")[0]),
          cache:false,
          contentType: false,
          processData: false,
          //dataType: 'json', //work without dataType                 
          success : function(data) { 
            if(data.errors){              
              if(data.errors.name){ $( '#name_error' ).html( data.errors.name ); }
              if(!data.errors.name){ $( '#name_error' ).html( '' ); }

              if(data.errors.email){ $( '#email_error' ).html( data.errors.email ); }
              if(!data.errors.email){ $( '#email_error' ).html( '' ); }

              if(data.errors.role_id){ $( '#role_id_error' ).html( data.errors.role_id ); }
              if(!data.errors.role_id){ $( '#role_id_error' ).html( '' ); }

              if(data.errors.status_id){ $( '#status_id_error' ).html( data.errors.status_id ); }
              if(!data.errors.status_id){ $( '#status_id_error' ).html( '' ); }

              if(data.errors.password){ $( '#password_error' ).html( data.errors.password ); }
              if(!data.errors.password){ $( '#password_error' ).html( '' ); }

              if(data.errors.confirm_password){ $( '#confirm_password_error' ).html( data.errors.confirm_password ); }
              if(!data.errors.confirm_password){ $( '#confirm_password_error' ).html( '' ); }

              if(data.errors.avatar){ $( '#avatar_error' ).html( data.errors.avatar ); }
              if(!data.errors.avatar){ $( '#avatar_error' ).html( '' ); }

            }
            if(data.success){  
              $('#user_form')[0].reset();

              toastr.success(data.success); 

              $('.error_message' ).html( '' ); 
              $('#avatar_show').attr('src', "{{URL::to('/FilesStorage/CommonFiles/no-img.png')}}");
              table1.ajax.reload( null, false );     
            }                   
          }
      });//*/
        //return false;
    }//end Insert check //*/
   
    if($('#form_action').val() == 'update'){ 
      //var csrf_token = $('input[name="_token"]').val();
      var id = $('#id').val(); 
      var urlTo = "{{ route('user.update', ':id') }}" ;
      urlTo = urlTo.replace(':id', id ); //resource rout not work without this 
  
      $.ajax({    
         // type: "PATCH",  
          type: 'POST',              
          url : urlTo,  
          data:  new FormData($("#user_form")[0]),           
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

              if(data.errors.email){ $( '#email_error' ).html( data.errors.email ); }
              if(!data.errors.email){ $( '#email_error' ).html( '' ); }

              if(data.errors.role_id){ $( '#role_id_error' ).html( data.errors.role_id ); }
              if(!data.errors.role_id){ $( '#role_id_error' ).html( '' ); }

              if(data.errors.status_id){ $( '#status_id_error' ).html( data.errors.status_id ); }
              if(!data.errors.status_id){ $( '#status_id_error' ).html( '' ); }

              if(data.errors.password){ $( '#password_error' ).html( data.errors.password ); }
              if(!data.errors.password){ $( '#password_error' ).html( '' ); }

              if(data.errors.confirm_password){ $( '#confirm_password_error' ).html( data.errors.confirm_password ); }
              if(!data.errors.confirm_password){ $( '#confirm_password_error' ).html( '' ); }

              if(data.errors.avatar){ $( '#avatar_error' ).html( data.errors.avatar ); }
              if(!data.errors.avatar){ $( '#avatar_error' ).html( '' ); }


            }
            if(data.success){
              $( '.error_message' ).html( '' );
              $('#user_form')[0].reset();
               $('#user_form_modal').modal('hide');
              //Get ready for new entry
              //$('#modal_title').text('Add User Credential');
              //$('#user_button').text('Save');
              //$('#form_action').val('add');
              //$("#input_method").val("POST");//change hidden method type to POST default is PATCH

              toastr.success(data.success); 

              table1.ajax.reload( null, false ); 
            }                                     
          }//end success
      });

    }//end update check//*/

    });/*end submit evert*/
  });/*end function evert*/
 


  function UserEdit(id){
    event.preventDefault(); 
    var urlTo = "{{ route('user.edit', ':id') }}" 
    urlTo = urlTo.replace(':id', id );

    $.ajax({
      type : "GET", //'_method': 'DELETE' not require in data section
      dataType:"JSON",
      url : urlTo,
      success : function(data) { 
       

        ///$('input[name=_method]').val('PATCH');     
        $('#modal_title').text('Update User Credential');
        $('#user_button').text('Update');

        $('#form_action').val('update');
        $("#input_method").val("PATCH");

        $('#id').val(data.id);
        $('#name').val(data.name);
        $('#email').val(data.email);
        $('#role_id').val(data.role_id);
        $('#status_id').val(data.status_id);
        if(data.avatar != null ){
            $('#avatar_show').attr('src', data.avatar);
        }else{
            $('#avatar_show').attr('src', "{{URL::to('/FilesStorage/CommonFiles/no-img.png')}}");
        }
        
        $('#user_form_modal').modal('show');                     
      }
    });
  }

  function ShowUser(id){
    //info, success, warning or error
    toastr.success('Show details of user '+ id);
  }


  function UserActive(id){
    event.preventDefault();  //this is importent
    var csrf_token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type : "GET",       
        url : '/user-active/'+ id,
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


  function UserUnactive(id){
    event.preventDefault();  //this is importent
    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    //$("#loading").html("Loading...");
    $.ajax({
        type : "GET",       
        url : '/user-unactive/'+ id,
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


  function UserVerify(id){
    event.preventDefault();  //this is importent
    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    //$("#loading").html("Loading...");
    $.ajax({
        type : "GET",       
        url : '/user-verify/'+ id,
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
  function UserDelete(id){
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


//Display image on cheange input file
  $("#avatar").change(function(){
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#avatar_show').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
  }



  </script>  
@endsection 

@extends('layouts.master_adminlte')
@section('title', 'Role')


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
              <div class="card-body">
                <table class="table table-sm">
                  <thead>                  
                    <tr>
                      <th style="width: 10%">ID</th>
                      <th style="width: 45%">Role name</th>
                      <th style="width: 10%;">Status</th>
                      <th style="width: 40%; text-align:right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                     @foreach ($roles as $role)
                      <tr>                     
                          <td>
                            <?php
                              if($role->is_enabled == 1){ echo $role->id; }
                              else{ echo '<span class="red">'.$role->id.'</span>'; }
                            ?>
                          </td>
                          <td>
                            <?php
                              if($role->is_enabled == 1){ echo $role->name; }
                              else{ echo '<span class="red">'.$role->name.'</span>'; }
                            ?>
                          </td>
                          <td>
                            <?php 
                              if($role->is_enabled == 1){
                                  echo '<span class="btn btn-flat btn-success btn-sm">Active</span>';
                              }else{ 
                                  echo '<span class="btn btn-flat btn-danger btn-sm">Unactive</span>';
                              }
                            ?>
                          </td>
                          <td style="text-align: right;">
                            <?php
                              if($role->is_enabled == 1){
                                echo '<a onclick="RoleUnactive('.$role->id.')" class="btn btn-danger- btn-flat btn-sm" data-toggle="tooltip" data-placement="right" title="Click to Unactive" >                
                                    <i class="far fa-thumbs-down danger"></i>
                                  </a>';

                              }elseif($role->is_enabled == 0){
                                  echo '<a onclick="RoleActive('.$role->id.')" class="use-tooltip btn btn-success- btn-flat btn-sm" data-toggle="tooltip" data-placement="left" title="Click to Active" >                
                                    <i class="far fa-thumbs-up success"></i>
                                  </a>';
                              }
                            ?>

                            <a onclick="EditRole(<?php echo $role->id; ?>)" class="btn  btn-primary- btn-flat btn-sm">
                                <i class="fas fa-edit primary "></i>
                            </a>
                                
                            <a onclick="DeleteRole(<?php echo $role->id; ?>)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" >
                                <i class="far fa-trash-alt red"></i>
                            </a>
                          </td>                    
                      </tr>
                     @endforeach
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
             
              <!--<div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">«</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
              </div>-->

            </div>
            
          </div> <!--/col-7-->         

          <!--col-5-->
          <div class="col-5- col-md-5 col-sm-6 float-sm-right">
            <div class="card card-info- cusotme-card">
              <!--<div class="card-header pb-0">
                <h3 class="card-title">Add Role</h3>
              </div>-->
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" id="quickForm" novalidate="novalidate" method="post">
                <div class="card-body pb-1">
                  
                 

                 <div class="form-group">
                    <label for="role_name">Add Role</label>
                    <input type="text" class="form-control" name="role_name" id="role_name" placeholder="Enter role">
                  </div>
                  
                  <!--<div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Active</label>
                  </div>-->
                </div>
                <!-- /.card-body -->

                <div class="card-footer pt-0">
                  <button type="submit" class="btn btn-primary btn-flat btn-sm">Submit</button>
                </div>
              </form>


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

 // $.fn.dataTable.ext.errMode = 'none'; //scape error message

 



    function EditRole(id){
      //info, success, warning or error
      toastr.success('Are you the 6 fingered man?');
    }


    function RoleActive(id){
        alert('Role Active');        
    }

    function RoleUnactive(id){
      //alert('Role Unactive');
      //success, error, warning, info, question
      Toast.fire({
        icon: 'info',
        title: 'Role Unactive'
      });//*/
    }


    function DeleteRole(id){

      //alert('Its Ok');
      //success, error, warning, info, question
      Toast.fire({
        icon: 'error',
        title: 'Delete'+id
      });//*/
    }




  </script>
@endsection 

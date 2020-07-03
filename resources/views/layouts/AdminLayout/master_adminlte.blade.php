<!-- Include Header -->
@include('layouts.AdminLayout.head_master_adminlte') 



<body class="hold-transition sidebar-mini layout-navbar-fixed layout-fixed">

<div class="wrapper" id="app">

	<!-- Include Nav / Main head -->
  	@include('layouts.AdminLayout.nav_master_adminlte')

  	<!-- Include sidebar Left-->
  	@include('layouts.AdminLayout.sidebar_left_master_adminlte')


  	

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

     
    	@yield('content')


    	
  </div>
  <!-- /.content-wrapper -->
  
  <!-- Include Footer -->
  @include('layouts.AdminLayout.footer_master_adminlte') 
 
 <!-- Include sidebar Right -->
  @include('layouts.AdminLayout.sidebar_right_master_adminlte') 

</div>
<!-- ./wrapper /#app -->


@include('layouts.AdminLayout.script_master_adminlte') 


</body>
</html>

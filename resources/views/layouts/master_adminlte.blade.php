<!-- Include Header -->
@include('layouts.head_master_adminlte') 



<body class="hold-transition sidebar-mini layout-navbar-fixed layout-fixed">

<div class="wrapper" id="app">

	<!-- Include Nav / Main head -->
  	@include('layouts.nav_master_adminlte')

  	<!-- Include sidebar Left-->
  	@include('layouts.sidebar_left_master_adminlte')


  	

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

     
    	@yield('content')


    	
  </div>
  <!-- /.content-wrapper -->
  
  <!-- Include Footer -->
  @include('layouts.footer_master_adminlte') 
 
 <!-- Include sidebar Right -->
  @include('layouts.sidebar_right_master_adminlte') 

</div>
<!-- ./wrapper /#app -->


@include('layouts.script_master_adminlte') 


</body>
</html>

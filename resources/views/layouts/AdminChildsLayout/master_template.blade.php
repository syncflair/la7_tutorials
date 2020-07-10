@include('layouts.AdminChildsLayout.head')


<body class="hold-transition sidebar-collapse layout-top-nav">
<div class="wrapper" id="app">

  <!-- Navbar -->
  @include('layouts.AdminChildsLayout.navbar')
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  @include('layouts.AdminChildsLayout.aside_left')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">


    @yield('content')    
   

  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
 	@include('layouts.AdminChildsLayout.aside_right')
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  @include('layouts.AdminChildsLayout.footer')
  
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->


<!-- Scripts -->
@include('layouts.AdminChildsLayout.script')


</body>
</html>


@include('layouts.AdminSupplierLayout.head') 

<body class="hold-transition layout-top-nav">
<div class="wrapper" id="app">

  <!-- Navbar -->
  @include('layouts.AdminSupplierLayout.navbar') 
  <!-- /.navbar -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">


    @yield('content')    


  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  @include('layouts.AdminSupplierLayout.aside_left') 
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  @include('layouts.AdminSupplierLayout.footer')
  
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- Scripts -->
@include('layouts.AdminSupplierLayout.script')

</body>
</html>

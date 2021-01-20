
@include('layouts.AdminCustomerLayout.head') 

<body class="hold-transition layout-top-nav">
<div class="wrapper" id="app">

  <!-- Navbar -->
  @include('layouts.AdminCustomerLayout.navbar') 
  <!-- /.navbar -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">


    @yield('content')    


  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  @include('layouts.AdminCustomerLayout.aside_right') 
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  @include('layouts.AdminCustomerLayout.footer')
  
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- Scripts -->
@include('layouts.AdminCustomerLayout.script')

</body>
</html>

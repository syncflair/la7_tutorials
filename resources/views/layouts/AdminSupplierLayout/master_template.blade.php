@include('layouts.AdminSupplierLayout.head')


  <body class="hold-transition sidebar-collapse layout-top-nav">


    <div class="wrapper" id="app">

      @yield('content')    
      
    </div>
    <!-- ./app -->

    <!-- REQUIRED SCRIPTS -->
    @include('layouts.AdminSupplierLayout.script')


  </body>
</html>

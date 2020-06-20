<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!--<title>{{ config('app.name', 'Laravel') }}</title>-->
    <title>Error | 404 </title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  
</head>
<body>
    <div id="app" style="padding-top: 100px">


    <main class="py-4">
        <div>
        
          <!-- Content Header (Page header) -->
          <!--<section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>404 Error Page</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">404 Error Page</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>-->
          <!-- /.container-fluid -->


          <!-- Main content -->
          <section class="content" style="">
            <div class="error-page">
              <h2 class="headline text-warning"> 404</h2>
              <!--<p> 403Logged in but access to requested area is forbidden</p>-->

              <div class="error-content col-sm-10">
                <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Access to requested area is forbidden</h3>

                
                <p>
                  Access to requested area is forbidden.
                  Meanwhile, you may <a href="{{url('/dashboard')}}">return to dashboard</a>.
                </p>

              </div>
              <!-- /.error-content -->
            </div>
            <!-- /.error-page -->
          </section>
          <!-- /.content -->

        </div>

        </main>
    </div>
</body>
</html>

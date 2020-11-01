<!-- Include Header -->
@include('layouts.WebsiteLayout.head') 

    <body>
	    <div id="app"><!-- Start app (custom div add by me)-->

	    	@yield('content') 

	    </div><!-- End app (custom div add by me)-->

        <!-- Include script -->
        @include('layouts.WebsiteLayout.script') 
    
    </body>

</html>
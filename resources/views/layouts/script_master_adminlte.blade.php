<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer-></script>

<script>
	/*Bootstrap Tooltip*/
	$(function () { 
      $('[data-toggle="tooltip"]').tooltip();
    });


</script>  

@yield('extra_script')
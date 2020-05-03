<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>

<script>

	function click_me(){

	//success, error, warning, info, question
	Toast.fire({
	  icon: 'info',
	  title: 'Opps! I Like it'
	})
	}


</script> 

@yield('extra_script')
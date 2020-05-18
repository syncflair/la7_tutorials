<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer-></script>

<script>
	/* Changing sidebar toggle based on Cookies*/
	$("#pushmenu_toggle").click(function(e){
		e.preventDefault();

		//$.cookie("_Pushmenu", 1, { expires : 7, path: '/' });
		//var abc = $.cookie("tab_n");	
		/*	 if($(this).find("span").hasClass("close")){
				$.cookie("lst_class", "open", { expires : 10});
				$(this).find("span").removeClass( "close" ).addClass( "open" );
				//$(this).css({"padding":"5px 15px 5px 14px"});								
			}else{
				$.cookie("lst_class", "close", { expires : 10});
				$(this).find("span").removeClass( "open" ).addClass( "close" );	
			}	//*/			
	});

	/*
	$('.onclick-menu-item').on('click',function(){	
		var SetMenuId = $(this).data('menuid'); //alert(menuid); //call menumane
		$.cookie("_MenuID", SetMenuId, { expires : 7, path: '/' });
		//alert($.cookie('_MenuID'));
		//GetMenuId = $.cookie('_MenuID'); alert(GetMenuId);
	}); */


	/*Bootstrap Tooltip*/
	$(function () { 
      $('[data-toggle="tooltip"]').tooltip();
    });


</script>  

@yield('extra_script')
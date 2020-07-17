<!-- Include Header -->
@include('layouts.EmailLayoutConfirmation.head') 


<section class="section-one"></section><!--section-one-->


<section class="section-two">
	<div class="container">

		<div class="logo pt-10"> 
			<a href="{{ OrganizationInformation()->org_url }}" target="_blank">
				<img src="{{asset( OrganizationInformation()->org_logo )}}" alt="Sorboraho Logo">
			</a>
		</div>


		<div class="content">
			

			<div class="email-content">

				@yield('content')
			    
			</div><!--email-content-->


		</div> <!--/content-->


		<div class="signature-area">
			<p class="pt-20 pb-20">	Happy Shopping.. </p>	    
	    
		    <div class="mt-20 pt-20">
		      <!-- <p> Best Regards </p> -->
		      <p> Thanks </p>
		      <p class="signature"> <a href="{{ OrganizationInformation()->org_url }}" target="_blank"> Sorboraho Team </a></p> 
		      <p><small class="">
		      	100/1, Golartake, Mirpur 1, Dhaka
		      	
		      </small>
		      </p>		     
		    </div>
		</div><!--signature-area-->

		<div class="dialog-area">
		    <span><small> -- Stair of trust --</small></span>
		</div><!--signature-area-->


	</div>
</section> <!--section-two--> 


<!-- Include Header -->
@include('layouts.EmailLayoutConfirmation.footer') 

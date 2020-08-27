<template>
<!-- Main content -->
<section class="conten-"> 
<!-- container-fluid -->     
<div class="container-fluid pl-0 pr-0">        
<!-- Card section -->    
<div class="card inside-card vue-card- mb-0">

    <!-- Card Header -->
    <div class="card-header inside-card-header pt-1 pb-1 text-center text-bold">  
        <div class="col-12-">Reports</div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body inside-card-body  pl-1 pr-1 pt-0 pb-0">
        <!--Row -->
        <div class="row">
          	<div class="col-md-2 inside-card-body-nav">
          		<ReportMasterNav></ReportMasterNav>
          	</div>

            <div class="col-md-10 inside-card-body-content">
                <ReportMasterContent></ReportMasterContent>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import ReportMasterNav from './ReportMasterNav.vue'
	// import CountryForm from './CountryForm.vue'
    const ReportMasterNav = () => import( /* webpackChunkName: "ReportMasterNav-com" */ './ReportMasterNav') 
    const ReportMasterContent = () => import( /* webpackChunkName: "ReportMasterContent-com" */ './ReportMasterContent')

	export default {
	    name: "ReportMaster",
	    
	    components:{ 
	    	ReportMasterNav, ReportMasterContent,
	    },	

	    data () {
	      return {
	      }
	    },//end data	

		methods:{

		}, //end Methods

		created(){
		},
		

  	} //end export default

</script>

<style>


    

   
	
</style>
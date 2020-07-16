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


    .inside-card{border-bottom: unset !important;}
    .inside-card-header{background: rgba(0, 0, 0, 0.11) !important;}
    .inside-card-body{border-bottom: unset !important;}
    .inside-card-body-nav{background-color: rgba(0, 0, 0, 0.05) !important; overflow-y: scroll; min-height: 200px; max-height: 550px; padding: 0px 0px 0px 4px;}
    .nav-head-title{padding: 5px; display: block; color:rgba(0, 0, 0, 0.8); border-bottom: 1px solid rgba(0, 0, 0, 0.125);}
    .inside-card-body-nav nav ul li{border-bottom:unset !important;} /*border-bottom: 1px solid rgba(0, 0, 0, 0.125);*/
    .inside-card-body-nav nav ul li strong{padding: 4px 4px 4px 6px; color:rgba(0, 0, 0, 0.5); display: block; background-color: rgba(0, 0, 0, 0.06)}
    .inside-card-body-nav nav ul li a{padding: 2px 2px 2px 10px; color:rgba(0, 0, 0, 0.7); display: block; }
    .inside-card-body-nav nav ul li a:hover{border-left:3px solid #17a2b8; padding: 2px 2px 2px 7px; color:#000; background: rgba(0, 0, 0, 0.125);}
    .inside-card-body-nav nav ul li .router-link-active{border-left:3px solid #17a2b8; padding: 2px 2px 2px 7px; color:#000; background: rgba(0, 0, 0, 0.125);}
    

    @media (max-width: 767.98px) { 
        .inside-card-body-nav{max-height: 200px;}
    }

   
	
</style>
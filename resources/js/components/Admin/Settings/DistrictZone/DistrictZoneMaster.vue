<template>
<!-- Main content -->
<section class="content"> 
<!-- container-fluid -->     
<div class="container-fluid">        
<!-- Card section -->    
<div class="card vue-card">

    <!-- Card Header -->
    <div class="card-header">            
        <div class="row">
        	<div class="col-md-6 col-sm-6 text-left"><h5>Zone / Area</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Zone</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<DistrictZoneMasterList></DistrictZoneMasterList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <DistrictZoneMasterForm></DistrictZoneMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import DistrictZoneMasterList from './DistrictZoneMasterList.vue'
	// import DistrictZoneMasterForm from './DistrictZoneMasterForm.vue'
    const DistrictZoneMasterList = () => import( /* webpackChunkName: "DistrictZoneMasterList-com" */ './DistrictZoneMasterList') 
    const DistrictZoneMasterForm = () => import( /* webpackChunkName: "DistrictZoneMasterForm-com" */ './DistrictZoneMasterForm')

	export default {
	    name: "DistrictZoneMaster-info",
	    
	    components:{ 
	    	DistrictZoneMasterList, DistrictZoneMasterForm,
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
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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Divisions</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Divisions</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<DivisionMasterList></DivisionMasterList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <DivisionMasterform></DivisionMasterform>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import DivisionMasterList from './DivisionMasterList.vue'
	// import DivisionMasterform from './DivisionMasterform.vue'
    const DivisionMasterList = () => import( /* webpackChunkName: "DivisionMasterList-com" */ './DivisionMasterList') 
    const DivisionMasterform = () => import( /* webpackChunkName: "DivisionMasterform-com" */ './DivisionMasterform')

	export default {
	    name: "DivisionMaster-info",
	    
	    components:{ 
	    	DivisionMasterList, DivisionMasterform,
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
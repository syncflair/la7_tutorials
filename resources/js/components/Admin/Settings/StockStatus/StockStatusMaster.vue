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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Stock Status <strong class="red">(Don't Add Or Update here)</strong></h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Stock Status</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<StockStatusMasterList></StockStatusMasterList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <StockStatusMasterForm></StockStatusMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const StockStatusMasterList = () => import( /* webpackChunkName: "StockStatusMasterList-com" */ './StockStatusMasterList') 
    const StockStatusMasterForm = () => import( /* webpackChunkName: "StockStatusMasterForm-com" */ './StockStatusMasterForm')

	export default {
	    name: "StockStatusMaster-info",
	    
	    components:{ 
	    	StockStatusMasterList, StockStatusMasterForm,
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
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
        	<div class="col-md-6 col-sm-6 col-xs-12 text-left"><h5>Branch Information</h5></div>
            <div class="col-md-6 col-sm-6 col-xs-12 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Branch Information</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<BranchList></BranchList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <BranchForm></BranchForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import BranchList from './BranchList.vue'
	// import BranchForm from './BranchForm.vue'
    const BranchList = () => import( /* webpackChunkName: "BranchList-com" */ './BranchList') 
    const BranchForm = () => import( /* webpackChunkName: "BranchForm-com" */ './BranchForm')

	export default {
	    name: "BranchInfo",
	    
	    components:{ 
	    	BranchList, BranchForm,
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
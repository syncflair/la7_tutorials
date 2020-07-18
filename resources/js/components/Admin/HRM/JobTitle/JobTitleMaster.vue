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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Job Title</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">HRM</li>
                    <li class="breadcrumb-item"><a>Job Title</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<JobTitleMasterList></JobTitleMasterList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <JobTitleMasterForm></JobTitleMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const JobTitleMasterList = () => import( /* webpackChunkName: "JobTitleMasterList-com" */ './JobTitleMasterList') 
    const JobTitleMasterForm = () => import( /* webpackChunkName: "JobTitleMasterForm-com" */ './JobTitleMasterForm')

	export default {
	    name: "JobTitleMaster-info",
	    
	    components:{ 
	    	JobTitleMasterList, JobTitleMasterForm,
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
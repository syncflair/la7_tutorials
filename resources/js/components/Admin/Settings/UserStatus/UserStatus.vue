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
        	<div class="col-md-6 col-sm-6 text-left"><h5>User Status <strong class="red">(Don't Add Or Update here)</strong></h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>User Status</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<UserStatusList></UserStatusList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <UserStatusForm></UserStatusForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import UserStatusList from './UserStatusList.vue'
	// import UserStatusForm from './UserStatusForm.vue'
    const UserStatusList = () => import( /* webpackChunkName: "UserStatusList-com" */ './UserStatusList') 
    const UserStatusForm = () => import( /* webpackChunkName: "UserStatusForm-com" */ './UserStatusForm')

	export default {
	    name: "UserStatusMaster",
	    
	    components:{ 
	    	UserStatusList, UserStatusForm,
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
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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Add Permission</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Users</li>
                    <li class="breadcrumb-item"><a>Add Permission</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">

      <!--Row -->
      <div class="row mt-2 mb-3">
        <div class="col-md-12">


        <div class="card vue-card-item">
          <div class="card-header">
              <div class="row">
                <div class="col-6">New Permission</div>
                <div class="col-6 text-right"></div>
              </div>
          </div><!--/card-header-->
          <div class="card-body">    
            <div class="row"> 
            <div class="col-10 offset-1">

                
                <PermissionAddForm></PermissionAddForm>


            </div> 
            </div>
          </div><!--End Card Body-->
        </div><!--End Card-->



          		
        </div>
      </div><!--/Row -->
    </div><!-- /Card Body -->

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const PermissionAddForm = () => import( /* webpackChunkName: "PermissionAddForm-com" */ './PermissionAddForm') 
	export default {
	    name: "PermissionAddMaster",
	    
	    components:{ 
            PermissionAddForm
	    },	

	    data () {
	      return {           
          }
	    },//end data	

		methods:{

		}, //end Methods

		created(){
            //console.log(this.authUser); //get data from commonGlobal.js
            //console.log(this.authPermissions);
		},
		

  	} //end export default

</script>

<style>
	
</style>
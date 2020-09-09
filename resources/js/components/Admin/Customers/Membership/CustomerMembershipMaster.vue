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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Membership</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Customer</li>
                    <li class="breadcrumb-item"><a>Membership</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<CustomerMembershipMasterList></CustomerMembershipMasterList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <CustomerMembershipMasterForm></CustomerMembershipMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const CustomerMembershipMasterList = () => import( /* webpackChunkName: "CustomerMembershipMasterList-com" */ './CustomerMembershipMasterList') 
    const CustomerMembershipMasterForm = () => import( /* webpackChunkName: "CustomerMembershipMasterForm-com" */ './CustomerMembershipMasterForm')

	export default {
	    name: "CustomerMembershipMaster-Info",
	    
	    components:{ 
	    	CustomerMembershipMasterList, CustomerMembershipMasterForm,
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
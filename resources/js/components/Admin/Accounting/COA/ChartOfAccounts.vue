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
        	<div class="col-md-6 col-sm-6 col-xs-12 text-left"><h5>Chart of Accounts</h5></div>
            <div class="col-md-6 col-sm-6 col-xs-12 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Chart of Accounts</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<ChartOfAccountsList></ChartOfAccountsList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <ChartOfAccountsForm></ChartOfAccountsForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	// import ChartOfAccounts from './ChartOfAccounts.vue'
	// import ChartOfAccountsForm from './ChartOfAccountsForm.vue'
    const ChartOfAccountsList = () => import( /* webpackChunkName: "ChartOfAccountsList-com" */ './ChartOfAccountsList') 
    const ChartOfAccountsForm = () => import( /* webpackChunkName: "ChartOfAccountsForm-com" */ './ChartOfAccountsForm')

	export default {
	    name: "ChartOfAccountsInfo",
	    
	    components:{ 
	    	ChartOfAccountsList, ChartOfAccountsForm,
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
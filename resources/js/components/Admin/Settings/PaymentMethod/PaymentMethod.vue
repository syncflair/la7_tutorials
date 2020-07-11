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
        	<div class="col-md-6 col-sm-6 text-left"><h5>Payment Methods</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Payment Methods</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
          	<div class="col-md-12">
          		<PaymentMethodList></PaymentMethodList>
          	</div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <PaymentMethodForm></PaymentMethodForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	//import PaymentMethodList from './PaymentMethodList.vue'
	//import PaymentMethodForm from './PaymentMethodForm.vue'
    const PaymentMethodList = () => import( /* webpackChunkName: "PaymentMethodList-com" */ './PaymentMethodList') 
    const PaymentMethodForm = () => import( /* webpackChunkName: "PaymentMethodForm-com" */ './PaymentMethodForm') 

	export default {
	    name: "CurrencyMaster",
	    
	    components:{ 
	    	PaymentMethodList, PaymentMethodForm,
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
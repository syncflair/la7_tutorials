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
            <div class="col-md-6 col-sm-6 text-left"><h5>Customer</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item"><a>Customer</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
            <div class="col-md-12">
                <CustomerMasterList></CustomerMasterList>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <CustomerMasterForm></CustomerMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    // import CustomerMasterList from './CustomerMasterList.vue'
    // import CustomerMasterForm from './CustomerMasterForm.vue'
    const CustomerMasterList = () => import( /* webpackChunkName: "CustomerMasterList-com" */ './CustomerMasterList') 
    const CustomerMasterForm = () => import( /* webpackChunkName: "CustomerMasterForm-com" */ './CustomerMasterForm')

    export default {
        name: "CustomerMasterForAdmim",
        
        components:{ 
            CustomerMasterList, CustomerMasterForm,
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
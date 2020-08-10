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
    <div class="col-md-6 col-sm-6 text-left"><h5>Vendor</h5></div>
    <div class="col-md-6 col-sm-6 text-right">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item active">Dashboard</li>
            <li class="breadcrumb-item active">Supplier</li>
            <li class="breadcrumb-item"><a>Vendor</a></li>
        </ol>
    </div>           
</div>
</div><!-- /Card Header -->

<!-- Card Body -->
<div class="card-body">
<!--Row -->
<div class="row mt-2 mb-3">
    <div class="col-md-12">
        <!-- <VendorMasterList></VendorMasterList> -->
        <!-- <router-view></router-view> -->
        <router-view default="{name: 'VendorMasterList'}"></router-view>
    </div>
</div><!--/Row -->
</div><!-- /Card Body -->

<!-- PopUp Modal -->
<!-- <VendorMasterForm></VendorMasterForm> -->



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    // const VendorMasterList = () => import( /* webpackChunkName: "VendorMasterList-com" */ './VendorMasterList') 
    // const VendorMasterForm = () => import( /* webpackChunkName: "VendorMasterForm-com" */ './VendorMasterForm')

    export default {
        name: "VendorMaster-Info",
        
        components:{ 
           // VendorMasterList, VendorMasterForm,
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
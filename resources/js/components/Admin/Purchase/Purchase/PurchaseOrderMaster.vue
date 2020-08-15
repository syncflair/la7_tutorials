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
    <div class="col-md-6 col-sm-6 text-left"><h5>Purchase Orders</h5></div>
    <div class="col-md-6 col-sm-6 text-right">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item active">Dashboard</li>
            <li class="breadcrumb-item active">Purchase</li>
            <li class="breadcrumb-item"><a>Purchase Orders</a></li>
        </ol>
    </div>           
</div>
</div><!-- /Card Header -->

<!-- Card Body -->
<div class="card-body">
<!--Row -->
<div class="row mt-2 mb-3">
    <div class="col-md-12">
        <!-- <router-view></router-view> -->
        <router-view default="{name: 'PurchaseOrderList'}"></router-view>
    </div>
</div><!--/Row -->
</div><!-- /Card Body -->

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
   

    export default {
        name: "PurchaseOrderMaster-Info",
        
        components:{  },  

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
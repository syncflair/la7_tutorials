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
            <div class="col-md-6 col-sm-6 text-left"><h5>Supplier</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Supplier</li>
                    <li class="breadcrumb-item"><a>Supplier</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
            <div class="col-md-12">
                <SupplierMasterList></SupplierMasterList>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <SupplierMasterForm></SupplierMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    // import SupplierMasterList from './SupplierMasterList.vue'
    // import SupplierMasterForm from './SupplierMasterForm.vue'
    const SupplierMasterList = () => import( /* webpackChunkName: "SupplierMasterList-com" */ './SupplierMasterList') 
    const SupplierMasterForm = () => import( /* webpackChunkName: "SupplierMasterForm-com" */ './SupplierMasterForm')

    export default {
        name: "SupplierMasterForAdmim",
        
        components:{ 
            SupplierMasterList, SupplierMasterForm,
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
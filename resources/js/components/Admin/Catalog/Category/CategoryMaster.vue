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
            <div class="col-md-6 col-sm-6 col-xs-12 text-left"><h5>Category</h5></div>
            <div class="col-md-6 col-sm-6 col-xs-12 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Catalog</li>
                    <li class="breadcrumb-item"><a>Category</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
            <div class="col-md-12">
                <CategoryMasterList></CategoryMasterList>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <CategoryMasterForm></CategoryMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    // import ChartOfAccounts from './ChartOfAccounts.vue'
    // import CategoryMasterForm from './CategoryMasterForm.vue'
    const CategoryMasterList = () => import( /* webpackChunkName: "CategoryMasterList-com" */ './CategoryMasterList') 
    const CategoryMasterForm = () => import( /* webpackChunkName: "CategoryMasterForm-com" */ './CategoryMasterForm')

    export default {
        name: "CagegoryMasterInfo",
        
        components:{ 
            CategoryMasterList, CategoryMasterForm,
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
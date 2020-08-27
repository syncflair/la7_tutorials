<template>
<!-- Main content -->
<section class="conten-"> 
<!-- container-fluid -->     
<div class="container-fluid pl-0 pr-0">        
<!-- Card section -->    
<div class="card inside-card vue-card- mb-0">

    <!-- Card Header -->
    <div class="card-header inside-card-header pt-1 pb-1 text-center text-bold">  
        <div class="col-12-">Bank Accounts</div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body inside-card-body pl-1 pr-1 pt-0 pb-0">
        <!--Row -->
        <div class="row">
            <div class="col-md-3 inside-card-body-nav" style="min-height: 670px !important">
                <BankAccountMasterList></BankAccountMasterList>
            </div>

            <div class="col-md-9 inside-card-body-content" style="background: rgba(0, 0, 0, 0.02); min-height: 650px !important">
                <BankAccountMasterContent></BankAccountMasterContent>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <BankAccountMasterForm></BankAccountMasterForm>
    

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const BankAccountMasterList = () => import( /* webpackChunkName: "BankAccountMasterList-com" */ './BankAccountMasterList') 
    const BankAccountMasterForm = () => import( /* webpackChunkName: "BankAccountMasterForm-com" */ './BankAccountMasterForm') 
    const BankAccountMasterContent = () => import( /* webpackChunkName: "BankAccountMasterContent-com" */ './BankAccountMasterContent')

    export default {
        name: "BankAccountMaster-Info",
        
        components:{ 
            BankAccountMasterList, BankAccountMasterForm, BankAccountMasterContent,
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
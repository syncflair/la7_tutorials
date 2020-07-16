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
            <div class="col-md-6 col-sm-6 text-left"><h5>User</h5></div>
            <div class="col-md-6 col-sm-6 text-right">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">User</li>
                    <li class="breadcrumb-item"><a>User</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->

    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-2 mb-3">
            <div class="col-md-12">
                <UserMasterList></UserMasterList>
            </div>
        </div><!--/Row -->
    </div><!-- /Card Body -->

    <!-- PopUp Modal -->
    <UserMasterForm></UserMasterForm>



</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
    const UserMasterList = () => import( /* webpackChunkName: "UserMasterList-com" */ './UserMasterList') 
    const UserMasterForm = () => import( /* webpackChunkName: "UserMasterForm-com" */ './UserMasterForm')

    export default {
        name: "UserMaster",
        
        components:{ 
            UserMasterList, UserMasterForm,
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
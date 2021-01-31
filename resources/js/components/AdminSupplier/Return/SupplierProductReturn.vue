<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container">
      <div class="row mb-2">
        <div class="col-sm-6 col-6">
          <h5 class="m-0- text-dark">Dashboard</h5>
        </div><!-- /.col -->
        <div class="col-sm-6 col-6">
          <ol class="breadcrumb float-right">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <!-- <li class="breadcrumb-item active">Top Navigation</li> -->
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->




  <!-- Main content -->
  <div class="content">
    <div class="container">



      <div class="row">
        <div class="d-none- d-xl-block- col-xl-2 col-wd-2gdot5-">
            <NavForAdminSupplier></NavForAdminSupplier>
        </div>

        <div class="bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-">
            <h2>Return</h2>
        </div>

        
      </div>



    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content -->


</div>
</section><!-- Main content -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
    import NavForAdminSupplier from '../Layouts/NavForAdminSupplier'

    export default {
        data(){
          return {
            module:'role'
          }
        },

        components:{
            NavForAdminSupplier, 
        }, 

        computed: {
          ...mapState( 'AuthenticationForSupplier', ['authSupplier','authVendor'] ),
        },

        methods:{

        },

        created(){
            setTimeout(() => {
                //this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
            }, 300);//call after 800 miliscound       
        },

        mounted() {
          //console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
          //console.log(JSON.parse(this.authPermissions.permission));
          //console.log(this.authPermissions.permission['BranchInfo']['delete']);

          // console.log(this.systemSettings);
        }
    }
</script>

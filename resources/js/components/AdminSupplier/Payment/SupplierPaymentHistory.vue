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
              <li class="breadcrumb-item"><a href="#">Payment History</a></li>
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
          <div class="col-md-12">
            <h3>Payment History</h3>
          </div> 
        </div> 

      </div>
    </div>
    


    <!-- /.content -->

    <!-- {{authUser}} -->

</div>
</section><!-- Main content -->
</template>

<script>

    export default {
        name: "supplier-payment-history",
        //Get props form views/admin/dashboard.blade.php
        data (){      
            return {
                            
            }
        },

        methods: {          
        },           

        created(){
        },
           
        mounted() {
        }
    }
</script>

<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
    <!-- Content Header (Page header) -->
    <Breadcrumb></Breadcrumb>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container">

        <div class="card-footer- card">
          <div class="row">
            <div class="col-sm-3 col-6">
              <div class="description-block border-right">
                <!-- <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span> -->
                <h5 class="description-header">35,298</h5>
                <span class="description-text">TOTAL DELIVERY</span>
              </div>
              <!-- /.description-block -->
            </div>
            <!-- /.col -->
            <div class="col-sm-3 col-6">
              <div class="description-block border-right">
                <!-- <span class="description-percentage text-warning"><i class="fas fa-caret-left"></i> 0%</span> -->
                <h5 class="description-header">432</h5>
                <span class="description-text">LAST MONTH COMPLETE</span>
              </div>
              <!-- /.description-block -->
            </div>
            <!-- /.col -->
            <div class="col-sm-3 col-6">
              <div class="description-block border-right">
                <!-- <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 20%</span> -->
                <h5 class="description-header">24,813.53</h5>
                <span class="description-text">THIS MONTH</span>
              </div>
              <!-- /.description-block -->
            </div>
            <!-- /.col -->
            <div class="col-sm-3 col-6">
              <div class="description-block">
                <!-- <span class="description-percentage text-danger"><i class="fas fa-caret-down"></i> 18%</span> -->
                <h5 class="description-header">700</h5>
                <span class="description-text">GOAL COMPLETIONS</span>
              </div>
              <!-- /.description-block -->
            </div>
          </div>
          <!-- /.row -->
        </div>

        <div class="row">
          <div class="col-lg-12 col-12">
            <p>Delivery Report</p>
          </div>
        </div>

      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->

    <!-- {{authUser}} -->

</div>
</section><!-- Main content -->
</template>

<script>

    //import { mapState } from 'vuex' //for user MapState
    import Breadcrumb from '../Layouts/Breadcrumb.vue' //Load to every page

    export default {
        name: "delivery-report-admin-child-delivery-component",
        data(){
          return {
            module:'role'
          }
        },

        components:{ 
            Breadcrumb,
        },

        computed: {
          // ...mapState( 
          //   'commonStoreForAll', ['authUser','authPermissions']
          // ),
        },

        methods:{

        },

        mounted() {
        }
    }
</script>

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

        <div class="row">
          <div class="col-lg-12 col-12">
            <p>Delivery failed</p>
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
        name: "delivery-failed-admin-child-delivery-component",
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

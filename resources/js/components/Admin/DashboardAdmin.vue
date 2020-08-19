<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
    <div class="card vue-card">

        <div class="card-header">
          <div class="row">
            <div class="col-md-6">
              <ol class="breadcrumb float-sm-left">
                <li class="breadcrumb-item active">Dashboard </li>
              </ol>
            </div>
            <div class="col-md-6 text-right">Navigation</div>
          </div>
        </div>


        <div class="card-body">

            <!--Stat box-->
            <div class="row">
            <div class="col-lg-3 col-6">
            <!-- small box -->
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>4500 <small>tk</small></h3>

                    <p>Sales</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-3 col-6">
            <!-- small box -->
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>4500 <small>tk</small></h3>

                    <p>Sales</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            </div> <!-- /Stat box -->


            <!-- Small boxes -->
            <div class="row">

              <div class="col-md-12"><br>
                <h3 class="m-0 text-dark">Bank & Cash</h3><br>
              </div><!-- /.col -->

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-success elevation-1"><i class="fas fa-money-bill-alt"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text success">Bank Balance</span>
                    <span class="info-box-number success">
                      200000
                      <small>tk</small>
                    </span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div> 

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-success elevation-1"><i class="fas fa-money-bill-alt"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text success">Cash In Hand</span>
                    <span class="info-box-number success">
                      70000
                      <small>tk</small>
                    </span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-success elevation-1"><i class="fas fa-money-check-alt"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text success">Cheques</span>
                    <span class="info-box-number success">Received(2) 4000 <small>tk</small> </span>
                    <span class="info-box-number danger">Paid(1) 3000 <small>tk</small> </span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>  

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-hand-holding-usd"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text danger">Loan</span>
                    <span class="info-box-number danger">
                      130000
                      <small>tk</small>
                    </span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>    

            </div>
            <!-- /.Small boxes -->

        </div>
    </div>

    {{authPermissionsData}}<br>
    <!-- {{ isViewPermitted('user')}} -->

    <h2 v-show="authPermissionsData.BranchInfo.view === true"> This Permission check</h2>

</div>
</section><!-- Main content -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState

    export default {
        data(){
          return {
            module:'role'
          }
        },

        computed: {
          ...mapState( 
            'commonStoreForAll', ['authUser','authPermissions']
          ),

          // purmission_object:function(){
          //   let array_data = JSON.parse(this.authUser.role.permission.permission);

          //     if(array_data.user.add === null){
          //         return 0
          //     }else{
          //       return 1
          //     }
          // }
        },

        methods:{

        },

        mounted() {
          //console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
          //console.log(JSON.parse(this.authPermissions.permission));
          //console.log(this.authPermissions.permission['BranchInfo']['delete']);

        }
    }
</script>

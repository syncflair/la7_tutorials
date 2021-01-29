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


        <div class="row"> <!--Start first Row-->
          <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3"> <!--Start col 3-->

            <div class="card card-widget- widget-user-2 bg-white-">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header bg-warning">
                <div class="widget-user-image">
                  <img v-if="authUserInfo.belongs_to_employee === null" class="img-circle elevation-2" :src="NoImageAvailable" alt="User Avatar">
                  <img v-if="authUserInfo.belongs_to_employee !== null" class="img-circle elevation-2" :src="authUserInfo.belongs_to_employee['avatar']" alt="User Avatar" style="height:65px">
                </div>
                <!-- /.widget-user-image -->
                <h3 class="widget-user-username" title="Name">{{ authUser.name }}</h3>
                <h5 class="widget-user-desc" title="Role">{{ authUser.role['name'] }}</h5>
              </div>
              <div class="card-footer p-0">
                <ul class="nav flex-column bg-white">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Name: {{ authUser.name }} <!-- <span class="float-right badge bg-primary">31</span> -->
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Tasks <span class="float-right badge bg-info">5</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Completed Projects <span class="float-right badge bg-success">12</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Followers <span class="float-right badge bg-danger">842</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div><!--End col 3-->


          <div class="col-xs-12 col-sm-12 col-md-9 col-xl-9"><!--Start col 9-->

            <!--Card one -->
            <div class="card-footer- card">
              <div class="row">

                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <!-- <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span> -->
                    <h5 class="description-header">35,298</h5>
                    <span class="description-text">Pending Order</span>
                  </div>              
                </div><!-- /.description-block -->
              
                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <!-- <span class="description-percentage text-warning"><i class="fas fa-caret-left"></i> 0%</span> -->
                    <h5 class="description-header">432</h5>
                    <span class="description-text">Order COMPLETE</span>
                  </div>              
                </div><!-- /.description-block -->
               
                <div class="col-sm-3 col-6">
                  <div class="description-block border-right">
                    <!-- <span class="description-percentage text-danger"><i class="fas fa-caret-down"></i> 18%</span> -->
                    <h5 class="description-header">700</h5>
                    <span class="description-text">Order Failed</span>
                  </div><!-- /.description-block -->
                </div>

                <div class="col-sm-3 col-6">
                  <div class="description-block">
                    <!-- <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 20%</span> -->
                    <h5 class="description-header">24,813.53</h5>
                    <span class="description-text">Total Order</span>
                  </div>              
                </div><!-- /.description-block -->

              </div>
              <!-- /.row -->
            </div><!--End Card one -->


            <!--Card two -->
            <div class="row">
              <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-info bg-white-">
                  <div class="inner">
                    <h3>150</h3>

                    <p>Name</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>           

              </div>
              <!-- ./col -->
              <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-success bg-white-">
                  <div class="inner">
                    <h3>53<sup style="font-size: 20px">%</sup></h3>

                    <p>Cart</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-warning bg-white-">
                  <div class="inner">
                    <h3>44</h3>

                    <p>Wishlist</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-person-add"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
            </div><!--End Card two -->

          </div><!--End col 9-->

        </div> <!--End first Row-->


        


        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Responsive Hover Table</h3>

            <div class="card-tools">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                <div class="input-group-append">
                  <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="tag tag-success">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Alexander Pierce</td>
                  <td>11-7-2014</td>
                  <td><span class="tag tag-warning">Pending</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Bob Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="tag tag-primary">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Mike Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="tag tag-danger">Denied</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>








      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->

    <!-- {{authUser}} -->

</div>
</section><!-- Main content -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
    import Breadcrumb from '../Layouts/Breadcrumb.vue' //Load to every page

    export default {
        data(){
          return {
            module:'role'
          }
        },

        components:{ 
            Breadcrumb,
        },

        computed: {
          ...mapState( 
            'AuthenticationForAdmin', ['authUser','authUserInfo']
          ),
        },

        methods:{

        },

        created(){
          this.$store.dispatch('AuthenticationForAdmin/fetchAuthUserInfo', this.authUser.id);       
        },

        mounted() {
          //console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
          //console.log(JSON.parse(this.authPermissions.permission));
          //console.log(this.authPermissions.permission['BranchInfo']['delete']);

          // console.log(this.systemSettings);
          //console.log(this.baseURL);
        }
    }
</script>

<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        

  <!-- Main content -->
  <div class="content pt-4">
    <div class="container">



      <div class="row">
        <div class="d-none d-xl-block d-md-block- mt-0 col-xl-2 col-wd-2gdot5-">
            <NavForAdminSupplier></NavForAdminSupplier>
        </div>

        <div class="bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-">
          <div class="row pt-3-">

            <div class="col-lg-12"><!--Start first col-->
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Summary</h3>

                  <div class="card-tools">
                    <!-- <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i class="fas fa-minus"></i></button> -->
                    <!-- <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                      <i class="fas fa-times"></i></button> -->
                  </div>
                </div>
                <div class="card-body" style="display: block;">
                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-8 order-2 order-md-1">

                      <div class="row"><!--row-->
                        <div class="col-12 col-sm-4">
                          <div class="info-box bg-light">
                            <div class="info-box-content text-secondary">
                              <span class="info-box-text text-center text-muted-">Order's</span>
                              <span class="info-box-number text-center text-muted- mb-0">2300</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-4">
                          <div class="info-box bg-light">
                            <div class="info-box-content text-secondary">
                              <span class="info-box-text text-center text-muted-">Complete</span>
                              <span class="info-box-number text-center text-muted- mb-0">2000</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-4">
                          <div class="info-box bg-light">
                            <div class="info-box-content text-secondary">
                              <span class="info-box-text text-center text-muted- green">Payment Receivable</span>
                              <span class="info-box-number text-center text-muted- mb-0 green">20,786.00 <span>
                            </span></span></div>
                          </div>
                        </div>
                      </div><!--/row-->

                      <!--row-->
                      <!-- <div class="row">
                        <div class="col-lg-6 col-6">
                            <div class="small-box bg-success bg-white-">
                                <div class="inner">
                                    <h3 class="text-white text-secondary-" >5,87,93.00 <sup style="font-size: 20px;">TK</sup></h3> 
                                    <p class="text-white text-secondary-">Payment Receivable</p>
                                </div> 
                                <div class="icon"><i class="far fa-money-bill-alt"></i></div> 
                                <router-link to="/sspa/my-payment-receivable" class="small-box-footer text-secondary">More info <i class="fas fa-arrow-circle-right"></i></router-link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-6">
                            <div class="small-box bg-warning bg-white-">
                                <div class="inner">
                                    <h3 class="text-white text-secondary-">44</h3> 
                                    <p class="text-white text-secondary-">Product</p>
                                </div> 
                                <div class="icon"><i class="fab fa-product-hunt"></i></div> 
                                <router-link to="/sspa/my-products" class="small-box-footer text-secondary">More info <i class="fas fa-arrow-circle-right"></i></router-link>
                            </div>
                        </div>
                      </div> --><!--/row-->

                      
                      <!--row-->
                      <!-- <div class="row">
                        <div class="col-12">
                          <h4>Recent Activity</h4>
                            <div class="post">
                              <div class="user-block">
                                <img class="img-circle img-bordered-sm" :src="baseURL+'/backend/AdminLTE/img/user1-128x128.jpg'" alt="user image">
                                <span class="username">
                                  <a href="#">Jonathan Burke Jr.</a>
                                </span>
                                <span class="description">Shared publicly - 7:45 PM today</span>
                              </div>
                              <p>
                                Lorem ipsum represents a long-held tradition for designers,
                                typographers and the like. Some people hate it and argue for
                                its demise, but others ignore.
                              </p>
                              <p>
                                <a href="#" class="link-black text-sm"><i class="fas fa-link mr-1"></i> Demo File 1 v2</a>
                              </p>
                            </div>

                        </div>
                      </div> --><!--/row-->

                      <div class="row mt-2"><!--row-->
                        <div class="col-12">
                          <h6 class="text-secondary">Recent orders</h6>
                          <div class="table-responsive">
                            <table class="table m-0 table-custome-one">
                              <thead class="text-secondary">
                                <tr>
                                  <th>Order ID</th>
                                  <th>Item</th>
                                  <th>Status</th>
                                  <th>Popularity</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                  <td>Call of Duty IV</td>
                                  <td><span class="badge badge-success">Shipped</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                  <td>Samsung Smart TV</td>
                                  <td><span class="badge badge-warning">Pending</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                  <td>iPhone 6 Plus</td>
                                  <td><span class="badge badge-danger">Delivered</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                  <td>Samsung Smart TV</td>
                                  <td><span class="badge badge-info">Processing</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                  <td>Samsung Smart TV</td>
                                  <td><span class="badge badge-warning">Pending</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                  <td>iPhone 6 Plus</td>
                                  <td><span class="badge badge-danger">Delivered</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                  <td>Call of Duty IV</td>
                                  <td><span class="badge badge-success">Shipped</span></td>
                                  <td>
                                    <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="card-footer- text-right">
                            <a href="javascript:void(0)" class="uppercase">View All order's</a>
                          </div>

                        </div>
                      </div><!--/row-->


                    </div>

                    <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                      
                      <div class="card">
                          <div class="card-header bg-light">
                            <!-- <h3 class="card-title">Latest Members</h3> -->
                            <h5 class="card-title text-secondary mb-1-"><i class="fas fa-info-circle"></i> Supplier / Vendor Info </h5> 

                            <div class="card-tools">
                              <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                              </button>
                              <!-- <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                              </button> -->
                            </div>
                          </div>
                          <!-- /.card-header -->
                          <div class="card-body p-0 mt-2">
                       
                              <div v-if="authVendor.vendor_img" class="text-center">
                                  <img class="img-circle img-bordered-sm" :src="authVendor.vendor_img" alt="user image" style="width: 50%;">
                              </div>
                             
                              <div class="text-muted- text-secondary">
                                <p class="text-sm mb-2">Vendor / Supplier
                                  <b class="d-block">                            
                                    <small title="Supplier / Vendor Code">({{authVendor.vendor_code}})</small> {{authVendor.vendor_name}}</b>
                                </p>
                                <p class="text-sm mb-2">Supplier Type
                                  <b class="d-block">{{authVendor.vendor_type}}</b>
                                </p>
                                <p v-if="authVendor.brand_shop_id" class="text-sm mb-2">Brand shop
                                  <b class="d-block">{{authVendor.belongs_to_brand_shop['brand_shop_title']}}</b>
                                </p>
                              </div>                      

                              <h6 class="mt-4 text-muted- text-secondary">Contact Info</h6>
                              <ul class="list-unstyled">
                                <li v-if="authVendor.vendor_phone" class="pb-1">
                                  <a href="javascript:void(0);" class="btn-link text-secondary"><small><i class="fas fa-phone"></i></small> {{authVendor.vendor_phone}} </a>
                                </li>
                                <li v-if="authVendor.vendor_email" class="pb-1">
                                  <a href="javascript:void(0);" class="btn-link text-secondary"><small><i class="far fa-fw fa-envelope"></i></small> {{authVendor.vendor_email}}</a>
                                </li>
                                <li v-if="authVendor.vendor_address" class="pb-1">
                                  <a href="javascript:void(0);" class="btn-link text-secondary"><small><i class="fas fa-map-marker-alt"></i></small> {{authVendor.vendor_address}}</a>
                                </li>
                              </ul>

                              <h6 class="mt-4 text-muted- text-secondary">Other Info</h6>
                              <ul class="list-unstyled">
                                <li v-if="authVendor.vendor_tin">
                                  <span class="btn-link- text-secondary"><small class="text-dark">TIN</small> {{authVendor.vendor_tin}}</span>
                                </li>
                                <li v-if="authVendor.vendor_nid">
                                    <span class="btn-link- text-secondary"><small class="text-dark">NID</small> {{authVendor.vendor_nid}}</span>
                                </li>
                                <li v-if="authVendor.vendor_bank_details">
                                    <span class="btn-link- text-secondary"><small class="text-dark">Financial</small> {{authVendor.vendor_bank_details}}</span>
                                </li>
                              </ul>

                              <p v-if="authVendor.vendor_desc" class="text-white- text-justify text-muted- mb-3" title="Vendor Type">
                              <span v-html="authVendor.vendor_desc"></span></p>

                              <!-- <div class="text-center mt-5 mb-3">
                                <a href="#" class="btn btn-sm btn-primary">Add files</a>
                                <a href="#" class="btn btn-sm btn-warning">Report contact</a>
                              </div> -->
                            

                          </div><!-- /.card-body -->
                      </div>
                      
                     
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
              </div>
            </div><!--Start second col-->




          </div>
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
                this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
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

<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   


  <!-- Main content -->
  <div class="content pt-4">
    <div class="container">



      <div class="row">
        <div class="d-none d-xl-block col-xl-2 col-wd-2gdot5-">
            <NavForAdminSupplier></NavForAdminSupplier>
        </div>

        <div class="bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-">
          <div class="row pt-3-">

            <div class="col-lg-12"><!--Start first col-->
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Profile</h3>

                  <div class="card-tools">
                    <!-- <span class="badge badge-danger">8 New Members</span>
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                    </button> -->
                  </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body p-0-">
                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-8 order-2- order-md-1- pb-5">
                      <div class="row pb-3">
                        <dt class="col-sm-4">Name</dt>
                        <dd class="col-sm-8">{{authSupplier.name}}</dd>
                        <dt class="col-sm-4">Email</dt>
                        <dd class="col-sm-8">{{authSupplier.email}}</dd>
                        <!-- <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd> -->
                        <dt class="col-sm-4">Phone</dt>
                        <dd class="col-sm-8">{{authSupplier.phone}}</dd>
                        <dt v-if="authSupplier.supplier_address" class="col-sm-4">Address</dt>
                        <dd class="col-sm-8">{{authSupplier.supplier_address}}</dd>
                        <dt v-if="authSupplier.supplier_desc" class="col-sm-4">Details</dt>
                        <dd class="col-sm-8">{{authSupplier.supplier_desc}}</dd>
                      </div>

                      <div class="row">
                        <div class="col-12 text-right">
                          <!-- <button type="button" class="btn btn-block btn-outline-info btn-sm">Update Profile</button> -->
                          <router-link to="/sspa/my-profile-update" class="btn btn-block btn-outline-info btn-sm"><!-- <i class="fas fa-plus"></i> --> Update Profile</router-link>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-4 order-1- order-md-2-">
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
                <!-- <div class="card-footer text-center">
                  <a href="javascript::">View All Users</a>
                </div> -->
                <!-- /.card-footer -->
              </div>
            </div>


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

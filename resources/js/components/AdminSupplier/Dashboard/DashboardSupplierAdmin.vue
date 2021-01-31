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
          <div class="row pt-3">

                <div class="col-lg-12 col-12">
                    <div class="small-box bg-danger- bg-white">
                        <div class="inner row">
                            <div class="col-12">
                                <h5 class="text-white- text-secondary" >
                                    <small>
                                        Supplier / Vendor Info 

                                        <span v-if="authSupplier.status_id === 1"  class="btn- px-1 bg-success text-white font-size-9- rounded-lg">
                                            <i class="fas fa-check font-size-8"></i>
                                             <small>Verified</small>
                                        </span> 
                                    </small> 
                                </h5>              
                            </div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-5 col-5-">
                                
                                <p class="text-white- text-secondary mb-2" title="Vendor Name">Name: 
                                    <span class="text-blue">{{authVendor.vendor_name}}</span></p>
                                <p class="text-white- text-secondary mb-2" title="Vendor Code">Code: 
                                    <span class="text-blue">{{authVendor.vendor_code}}</span></p>
                                <p class="text-white- text-secondary mb-2" title="Vendor Type">Type:
                                    <span class="text-blue"> {{authVendor.vendor_type}}</span></p>
                                <p v-if="authVendor.brand_shop_id" class="text-white- text-secondary mb-2" title="Brand Shop">Brand Shop: <span class="text-blue">{{authVendor.belongs_to_brand_shop['brand_shop_title']}}</span></p> 
                                <p v-if="authVendor.vendor_nid" class="text-white- text-secondary mb-2">NID: 
                                    <span class="text-blue">{{authVendor.vendor_nid}}</span></p>
                                <p v-if="authVendor.vendor_tin" class="text-white- text-secondary mb-2">TIN: 
                                    <span class="text-blue">{{authVendor.vendor_tin}}</span></p>
                                <p v-if="authVendor.vendor_bank_details" class="text-white- text-secondary mb-2">Financial: 
                                    <span class="text-blue">{{authVendor.vendor_bank_details}}</span></p> 
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-4-">
                                
                                <p v-if="authVendor.vendor_contact_name" class="text-white- text-secondary mb-2">Contact Name: 
                                    <span class="text-blue">{{authVendor.vendor_contact_name}}</span></p>
                                <p class="text-white- text-secondary mb-2">
                                    <i class="fas fa-at"></i> <span class="text-blue">{{authVendor.vendor_email}}</span>
                                </p>
                                <p class="text-white- text-secondary mb-2">
                                    <i class="fas fa-phone"></i> <span class="text-blue">{{authVendor.vendor_phone}}</span>
                                </p>
                                <p v-if="authVendor.vendor_desc" class="text-white- text-secondary mb-2" title="Vendor Type">Details: <span class="text-blue">{{authVendor.vendor_desc}}</span></p>                                
                                <p class="text-white- text-secondary mb-2" title="Vendor Type">Address: <span class="text-blue">{{authVendor.vendor_address}}</span></p>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-3 col-3- text-center d-none d-xl-block">
                                <img v-if="authVendor.vendor_img" :src="authVendor.vendor_img" style="height: 120px; width: 150px;" >
                            </div>

                            <!-- <div class="col-12">
                                
                            </div> -->

                        </div> 
                        <!-- <div class="icon"><i class="font-size-18 ec ec-shopping-bag"></i></div>  -->
                        <!-- <router-link to="/sspa/my-profile" class="small-box-footer text-secondary">Profile <i class="fas fa-arrow-circle-right"></i></router-link> -->
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-danger- bg-white">
                        <div class="inner">

                            <h5 class="text-white- text-secondary" ><small>My Info</small></h5> 
                            <p class="text-white- text-secondary mb-2"> {{authSupplier.name}}</p>
                            <p class="text-white- text-secondary mb-2"><i class="fas fa-at"></i> {{authSupplier.email}}</p>
                            <p class="text-white- text-secondary mb-2"><i class="fas fa-phone"></i> {{authSupplier.phone}}</p>

                            <p v-if="authSupplier.status_id === 1" class="text-white- text-secondary mb-2">
                                <span class="btn- px-1 bg-success text-white font-size-9- rounded-lg">
                                    <i class="fas fa-check font-size-8"></i>
                                     <small>Verified</small>
                                </span>
                            </p>

                        </div> 
                        <!-- <div class="icon"><i class="font-size-18 ec ec-shopping-bag"></i></div>  -->
                        <router-link to="/sspa/my-profile" class="small-box-footer text-secondary">Profile <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-success- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary" >5,87,93.00 <sup style="font-size: 20px;">TK</sup></h3> 
                            <p class="text-white- text-secondary">Payment Receivable</p>
                        </div> 
                        <div class="icon"><i class="far fa-money-bill-alt"></i></div> 
                        <router-link to="/sspa/my-payment-receivable" class="small-box-footer text-secondary">More info <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-warning- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary">44</h3> 
                            <p class="text-white- text-secondary">Product</p>
                        </div> 
                        <div class="icon"><i class="fab fa-product-hunt"></i></div> 
                        <router-link to="/sspa/my-products" class="small-box-footer text-secondary">More info <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary">150</h3> 
                            <p class="text-white- text-secondary">Orders</p>
                        </div> 
                        <div class="icon"><i class="fas fa-shopping-cart"></i></div> 
                        <router-link to="/sspa/my-orders" class="small-box-footer text-secondary">My Orders <i class="fas fa-arrow-circle-right"></i></router-link>
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

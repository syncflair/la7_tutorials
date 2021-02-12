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


            <div class="card">
              <div class="card-header border-transparent pl-2">
                <h3 class="card-title">Products</h3>

                <div class="card-tools">
                  <!-- <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button> -->
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table m-0 table-custome-two table-striped table-sm-" style="min-height:200px">
                    <thead>
                      <tr>
                        <th style="width: 3%;">Img</th>
                        <th style="width: 40%;"  @click="sort('sys_pro_name')" class="sortable-title">Name</th>
                        <th style="width: 6%;">Category</th>
                        <th style="width: 5%;" >Brand</th>
                        <th style="width: 6%;">Status</th>
                        <th style="width: 4%;">Stock</th>
                        <th style="width: 5%;">price</th>
                        <th style="width: 2%; text-align:right;"><strong>...</strong></th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr v-for="(product, index) in sortedProducts " :key="index">

                        <td> <!-- <a href="pages/examples/invoice.html">OR9842</a> -->
                          <span v-if="product.pro_image != null"> 
                            <img :src="'../'+product.pro_image" loading="lazy" height="20px" width="20px"> 
                          </span>
                          <span v-if="product.pro_image === null"> <img :src="NoImageAvailable" height="20px" width="20px"> </span>
                        </td>

                        <td>{{ product.sys_pro_name }}</td>

                        <td><span v-if="product.pro_category != null"> {{product.pro_category}} </span></td>

                        <td > 
                          <span v-if="product['belongs_to_brand'] != null"> {{ product['belongs_to_brand']['brand_name'] }} </span>
                          <span v-if="product['belongs_to_brand'] === null" class="red text-bold"> No Brand </span>
                        </td> 
                        
                        <td>
                          {{product.pro_status}} <!-- <span class="badge badge-success">Shipped</span> -->
                        </td>

                        <td>
                          <small>
                            <span v-if="product.pro_qty > 5" style="color:green; font-weight:500;"> Available</span>              
                            <span v-if="product.pro_qty <= 5 && product.pro_qty > 0" style="color:red; font-weight:500;"> Low Stock</span>
                            <span v-if="product.pro_qty === 0" style="color:red; font-weight:bold;"> Out of Stock</span>
                            <span v-if="product.pro_qty === null" style="color:red; font-weight:bold;">Update</span>
                          </small>
                        </td>

                        <td>
                          <!-- <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div> -->
                          <span v-if="product.pro_sale_price">
                              <span style="text-decoration: line-through;" title="Main Price"> {{ product.pro_price }} </span>
                              <span style="font-weight:600; color:green;" title="Sale Price"> {{ product.pro_sale_price }} </span>
                          </span>
                          <span v-if="!product.pro_sale_price">
                              <span style="font-weight:600; color:green;" title="Main Price"> {{ product.pro_price }} </span>                  
                          </span>
                        </td>

                        <td class="text-right">  
                          <!-- Dropdown List -->
                          <div class="btn-group option-dropdown-manu-style left">
                            <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fas fa-ellipsis-v text-white"></i>
                              <!-- <i class="fas fa-ellipsis-h"></i> -->
                            </a>    

                            <div class="dropdown-menu dropdown-menu-right">

                              <a class="dropdown-item text-green" href="javascript:void(0)">{{ product.sys_pro_name }}</a>

                              <div class="dropdown-divider"></div>

                              <!-- <a @click="ViewDetails(product)" href="javascript:void(0)" class="dropdown-item pointer-"> <i class="fas fa-eye primary"></i> Viwe more... </a>  -->

                              <a @click="ViewDetails(product)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal">
                                  <i class="fas fa-eye primary "></i> More Details ...
                              </a>  
                              
                              <!-- <router-link :to="{ name: 'ProductMasterForm', params: { data:product } }" class="dropdown-item pointer">
                                  <i class="fas fa-edit primary "></i> Edit
                              </router-link>

                              <div class="dropdown-divider"></div> -->

                              <!-- <a @click="DeleteData(product.id)" class="dropdown-item pointer" id="delete">
                                 <i class="far fa-trash-alt red"></i> Delete
                              </a> -->
                            </div>
                          </div><!--End Dropdown List -->
                        </td>

                      </tr>

                    </tbody>
                  </table>
                </div>
                <!-- /.table-responsive -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer bg-white clearfix mt-2 pb-0 pl-3 pr-3">
                <pagination-app 
                    v-if="pagination.last_page >= 1"  
                    :pagination="pagination"
                    :offset="5"
                    @paginate="fetchData()"
                ></pagination-app>
              </div>
              <!-- /.card-footer -->


              <!-- Data view - PopUp Modal -->
              <SupplierProductViewComponent></SupplierProductViewComponent>



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
    const SupplierProductViewComponent = () => import( /* webpackChunkName: "SupplierProductViewComponent-com" */ './SupplierProductView')

    export default {
        data(){
          return {
            // use for sortable
            currentSort:'sys_pro_name',
            currentSortDir:'asc',
          }
        },

        components:{
            NavForAdminSupplier, SupplierProductViewComponent
        }, 

        computed: {
          ...mapState( 'AuthenticationForSupplier', ['authSupplier','products','pagination'] ),

          // use for sortable
          sortedProducts() {
            let fo = Object.values(this.products).sort((a,b) => {
              let modifier = 1;
              if(this.currentSortDir === 'desc') modifier = -1;
              if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
              if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
              return 0;
            });
            return fo;
          }
        },

        methods:{
            // use for sortable
            sort(s){
              if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
              }
              this.currentSort = s;
            },


            fetchData(){
              //this function call from Pagination-app component
              this.$Progress.start();
              // this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', this.pagination.per_page);
              this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', 
                {perPage: this.pagination.per_page, vendor_id: this.authSupplier.vendor_id} );
              this.$Progress.finish();
              //console.log(this.pagination.total);
            },

            ViewDetails(data){
              //alert(data.sys_pro_name);
              FireEvent.$emit('SupplierProductDataView', data);
            },

        },

        created(){

            //{search_key: SearchKey, search_option: this.selectOption}

            this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', {vendor_id: this.authSupplier.vendor_id} );

            //setTimeout(() => {
            //    this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
            //}, 300);//call after 800 miliscound       
        },

        mounted() {
          //console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
          //console.log(JSON.parse(this.authPermissions.permission));
          //console.log(this.authPermissions.permission['BranchInfo']['delete']);

          // console.log(this.products);
        }
    }
</script>

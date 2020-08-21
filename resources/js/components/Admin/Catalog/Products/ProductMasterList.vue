<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
          <!-- <router-link :to="{name: 'ProductMasterForm', params: { id: id} }" class="btn btn-primary btn-flat btn-sm">  -->
	        <router-link to="/spa/ProductMasterForm" class="btn btn-primary btn-flat btn-sm"> 
	        	<i class="icon fas fa-plus"></i> Add New
	        </router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            <th style="width: 3%;" scope="col">Img</th>
            <th style="width: 15%;" scope="col" @click="sort('sys_pro_name')" class="sortable-title">Name</th>
                        
            <th style="width: 5%;" scope="col" @click="sort('brand_id')" class="sortable-title">Brand</th>
            <th style="width: 6%;" >Category</th>
            <th style="width: 2%;" scope="col">Qty </th>            
            <th style="width: 4%;" scope="col">Stock</th>
            <th style="width: 5%;" scope="col" @click="sort('pro_price')" class="sortable-title">price </th> 
            <th style="width: 3%;" scope="col">Status</th>           
            <!-- <th style="width: 3%;" scope="col">Verify</th>            -->
            <th style="width: 2%; text-align:right;" scope="col">#</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(product, index) in sortedProducts " :key="index">

            <!-- <td > id</td> -->
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="product.id"></td>

            <td> 
                <span v-if="product.pro_image != null"> 
                  <img :src="'../'+product.pro_image" loading="lazy" height="20px" width="20px"> 
                </span>
                <span v-if="product.pro_image === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 

            <td scope="col"> {{ product.sys_pro_name }} 
              <!-- <span>{{product['pro_translation'][0]['product_name']}},</span>
              <span>{{product['pro_translation'][1]['product_name']}}</span> -->
            </td>
             
            <td > 
              <span v-if="product['belongs_to_brand'] != null"> {{ product['belongs_to_brand']['brand_name'] }} </span>
              <span v-if="product['belongs_to_brand'] === null" class="red text-bold"> No Brand </span>
            </td>   
                   
          	<td > 
              <span v-if="product.pro_category != null"> {{product.pro_category}} </span>
            </td> 

            <td > 
              <span style="font-weight:bold"> {{ product.pro_qty }} </span>
              <small v-if="product.pro_qty === null" style="color:red;"> No Qty </small>
            </td>             
            <td>
              <small>
                <span v-if="product.pro_qty > 5" style="color:green; font-weight:500;"> Available</span>              
                <span v-if="product.pro_qty <= 5 && product.pro_qty > 0" style="color:red; font-weight:500;"> Low Stock</span>
                <span v-if="product.pro_qty === 0" style="color:red; font-weight:bold;"> Out of Stock</span>
                <span v-if="product.pro_qty === null" style="color:red; font-weight:bold;">Update</span>
              </small>
            </td>

            <td >             
              <span v-if="product.pro_sale_price">
                  <span style="text-decoration: line-through;" title="Main Price"> {{ product.pro_price }} </span>
                  <span style="font-weight:600; color:green;" title="Sale Price"> {{ product.pro_sale_price }} </span>
              </span>
              <span v-if="!product.pro_sale_price">
                  <span style="font-weight:600; color:green;" title="Main Price"> {{ product.pro_price }} </span>                  
              </span>
            </td> 

            <!-- <td > <small>{{ product.emp_hire_date | formatDate }}</small> </td> -->
            
            <td> {{product['belongs_to_status_master']['status_name']}}</td>
            

            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                  <!-- <i class="fas fa-ellipsis-h"></i> -->
                </a>    

                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails()" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a>  
                  
                  <router-link :to="{ name: 'ProductMasterForm', params: { data:product } }" class="dropdown-item pointer">
                      <i class="fas fa-edit primary "></i> Edit
                  </router-link>

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(product.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->

            </td>
          </tr>

          <tr v-show="products && !products.length">
            <td colspan="12">
              <div class="alert alert-warning text-center red mb-0" role="alert" >Sorry : No data found.</div>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="card-footer">      
      <pagination-app 
          v-if="pagination.last_page >= 1"  
          :pagination="pagination"
          :offset="5"
          @paginate="fetchData()"
      ></pagination-app>
    </div>

    <!-- sortable data test -->
    <!-- {{currentSortDir }} {{currentSort}} -->

</div><!--/vue-card-item -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
 
    export default {
      name: "ProductMasterList",

      data(){
        return { 
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
          expendView:false,

          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'sys_pro_name',
          currentSortDir:'asc',

          //User for search
          filterBy:'sys_pro_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'sys_pro_name', 'show_name':'Name'},
            {'field_name':'pro_price', 'show_name':'price'},
            {'field_name':'brand_name', 'show_name':'Brand'},
            {'field_name':'cat_name', 'show_name':'Category'},
            {'field_name':'status_name', 'show_name':'Product Status'},
          ],     

                  
        }
      },

      computed: {
          ...mapState( 
             'ProductMasterStore', ['products', 'pagination','autoCompleteData']
          ),
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
        //checkbox select
        selectCheckbox(){
          this.selectedCheckbox = [];
          if(!this.selectAllCheckbox){
            for(let i in this.products){
              this.selectedCheckbox.push(this.products[i].id); //all id push into selectedCheckbox array
            }
          }
        },

        // use for sortable
        sort(s){
          if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          }
          this.currentSort = s;
        },

        ChangeNotify(id, event){
          this.$Progress.start();
          axios.post('/spa/product-change-notify/'+id+'/'+event.target.checked)
            .then( ({data}) => {
              //console.log(data);
              if(data.success){                  
                FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update             
                this.$Progress.finish();    
                toastr.success(data.success);                 
              } 
            })                          
            .catch(() => {
              this.$Progress.fail();
              toastr.warning('Something is wrong!');
            })
        },

        inactiveProduct(id){
          this.$Progress.start();
          Swal.fire({
              title: 'Are you sure to Active this product?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                
                axios.post('/spa/Product-Info/inactive-product/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){                  
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
                    this.$Progress.finish();                
                    toastr.warning(data.success);                                   
                  } 
                })                          
                .catch(() => {
                  this.$Progress.fail();
                  toastr.warning('Something is wrong!');
                })

              }else{
                this.$Progress.finish();  
                toastr.info( 'Your action canceled!');
              }
          })
        },

        activeProduct(id){
          this.$Progress.start();
          Swal.fire({
              title: 'Are you sure to Active this user?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Active!'
          }).then( (result) => {
            
              if ( result.value ) {  
                
                axios.post('/spa/Product-Info/active-product/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){                  
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
                    this.$Progress.finish();                
                    toastr.success(data.success);                                   
                  } 
                })                          
                .catch(() => {
                  this.$Progress.fail();
                  toastr.warning('Something is wrong!');
                })

              }else{
                this.$Progress.finish();  
                toastr.info( 'Your action canceled!');
              }
          })
        },

        verifyByUser(id){
          this.$Progress.start();
          Swal.fire({
              title: 'Are you sure to Verify this user?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Verified!'
          }).then( (result) => {

              if ( result.value ) {  
                
                axios.post('/spa/product-verify-by-admin/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){                  
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
                    this.$Progress.finish();                
                    toastr.success(data.success);                                   
                  } 
                })                          
                .catch(() => {
                  this.$Progress.fail();
                  toastr.warning('Something is wrong!');
                })

              }else{
                this.$Progress.finish();  
                toastr.info( 'Your action canceled!');
              }
          })          
        },

        fetchData(){
          //this function call from Pagination-app component
          this.$Progress.start();
          this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(){
          alert('ok');
        },

  	    addData(){
  	    	FireEvent.$emit('addData');
  	    },

  	    editData(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editData', data);
  	    },

	      DeleteData(id){
          this.$Progress.start();
	        Swal.fire({
	            title: 'Are you sure to Delete?',
	            text: "You won't be able to revert this!",
	            icon: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#3085d6',
	            cancelButtonColor: '#d33',  
	            confirmButtonText: 'Yes, delete it!'
	          }).then( (result) => {

	            if ( result.value ) {  
	              axios.delete('/spa/Product-Info/'+id)
	                .then( ({data}) => {

	                  if(data.success){                  
	                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
                      this.$Progress.finish();
	                    toastr.warning(data.success); 
	                  }   
	                  if(data.errors){
	                    toastr.warning(data.errors);                 
	                  }

	                })                          
	                .catch(() => {
                    this.$Progress.fail();
	                  toastr.warning('Something is wrong!');
	                })
	            }else{
                this.$Progress.finish();  
	              toastr.info( 'Your data is safe!');
	            }

	          })
	      }, //end delete
       
      
      },

      created(){ 

          this.$store.dispatch('ProductMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('ProductMasterStore/fetchData',data);
          });

          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('ProductMasterStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('ProductMasterStore/AutoCompleteSearch', data ); 
              }
          });

      },

      mounted() {
        //console.log(this.products)   
      },

    }/*End export default*/
</script>
<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
          <search-app-master 
            @searchData="searchData"
            @AutoCompleteSearch="AutoCompleteSearch"
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-master>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
          <!-- <router-link :to="{name: 'VendorMasterForm', params: { id: id} }" class="btn btn-primary btn-flat btn-sm">  -->
	        <router-link to="/spa/VendorMasterForm" class="btn btn-primary btn-flat btn-sm"> 
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
            <th style="width: 15%;" scope="col" @click="sort('vendor_name')" class="sortable-title">Vendor Name</th>
            <th style="width: 15%;" scope="col"> 
              <span @click="sort('vendor_email')" class="sortable-title">Email</span> / 
              <span @click="sort('vendor_phone')" class="sortable-title">Phone</span>
            </th>
            <th style="width: 20%;" >Type (Brand Shop)</th>
            <th style="width: 15%;" scope="col">Assign to supplier user</th>
            <th style="width: 4%;" scope="col">Status</th>           
            <th style="width: 3%;" scope="col">Notify</th>           
            <th style="width: 2%; text-align:right;" scope="col"><strong>...</strong></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(vendor, index) in sortedDatalist" :key="index">

            <!-- <td > id</td> -->
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="vendor.id"></td>

            <td> 
                <span v-if="vendor.vendor_img != null"> 
                  <!-- <img :src="'../'+vendor.vendor_img" loading="lazy" height="20px" width="20px">  -->
                  <img :src="vendor.vendor_img" loading="lazy" height="20px" width="20px"> 
                </span>
                <span v-if="vendor.vendor_img === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 

            <td scope="col"> {{ vendor.vendor_name }} </td>
            <td > 
              <span>{{ vendor.vendor_email }} </span>
              <span>{{ vendor.vendor_phone }} </span>              
            </td>          
          	<td > 
              <small>{{ vendor.vendor_type }} </small>
              <small v-if="vendor.brand_shop_id != null"> 
                ( {{vendor.belongs_to_brand_shop.brand_shop_title }} )

                
              </small>
            </td> 

            <td>
              <small v-if="vendor.has_many_supplier.length > 0" v-for="vs in vendor.has_many_supplier">{{vs.name}} <br></small>

            </td> 

            <!-- {{ supplier.belongs_to_district_zone.zone_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.district_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.belongs_to_division.division_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.belongs_to_division.belongs_to_country.country_name }} -->


            <!-- <td > <small>{{ vendor.emp_hire_date | formatDate }}</small> </td> -->
            
            <td style="text-align:center;">
              <span @click="inactiveVendor(vendor.id)" v-show="vendor.status_id === 1" title="Active vendor, Click to inactive"><i class="fas fa-user-check green pointer"></i></span>
              <span @click="activeVendor(vendor.id)" v-show="vendor.status_id === 2" title="Inactive vendor, Click to active"> <i class="fas fa-user-times yellow pointer"></i></span>
              <span @click="activeVendor(vendor.id)" v-show="vendor.status_id === 3" title="Panding vendor, Click to active"> <i class="fas fa-user-lock red pointer"></i></span>
              <span @click="activeVendor(vendor.id)" v-show="vendor.status_id === 4" title="Not Verified vendor, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td>

            <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(vendor.id, $event)" name="enable_notify" value="1" v-model="vendor.enable_notify"  />
            </td>

             

            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i><!-- <i class="fas fa-ellipsis-h"></i> --></a>    

                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails(vendor.id)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 
                  
                  <router-link :to="{ name: 'VendorMasterForm', params: { data:vendor } }" class="dropdown-item pointer">
                      <i class="fas fa-edit primary "> </i> Edit
                  </router-link>

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(vendor.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->
            </td>


          </tr>

          <tr v-show="vendors && !vendors.length">
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
      name: "VendorMasterList",

      data(){
        return { 
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'vendor_name',
          currentSortDir:'desc', //asc

          //User for search
          filterBy:'vendor_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'vendor_name', 'show_name':'Name'},
            {'field_name':'vendor_email', 'show_name':'Email'},
            {'field_name':'vendor_phone', 'show_name':'Phone'},
          ],     

                  
        }
      },

      computed: {
          ...mapState( 
             'VendorMasterStore', ['vendors', 'pagination','autoCompleteData']
          ),
           // use for sortable
          sortedDatalist() {
            let fo = Object.values(this.vendors).sort((a,b) => {
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
            for(let i in this.vendors){
              this.selectedCheckbox.push(this.vendors[i].id); //all id push into selectedCheckbox array
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
          axios.post('/spa/Vendor-Info/change-notify/'+id+'/'+event.target.checked)
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

        inactiveVendor(id){
          this.$Progress.start();
          Swal.fire({
              title: 'Are you sure to InActive this Vendor?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                
                axios.post('/spa/Vendor-Info/inactive-vendor/'+id)
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

        activeVendor(id){
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
                
                axios.post('/spa/Vendor-Info/active-vendor/'+id)
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
          this.$store.dispatch('VendorMasterStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(){
          alert('ok');
        },

  	    // addData(){
  	    // 	FireEvent.$emit('addData');
  	    // },

  	    // editData(data){
  	    // 	//alert(data.id);
  	    // 	FireEvent.$emit('editData', data);
  	    // },

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
	              axios.delete('/spa/Vendor-Info/'+id)
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
       
       // ################################ For search App ###############################################
          searchData(data){
            this.$store.dispatch('VendorMasterStore/searching', data );
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('VendorMasterStore/AutoCompleteSearch', data );  
            }        
          },
        // ################################ For search App ###############################################
      
      },

      created(){ 

          this.$store.dispatch('VendorMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('VendorMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('VendorMasterStore/fetchData',data);
          });

      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
          <!-- Customer List -->
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
        	<!-- <a @click="addCustomer" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#customerModal"> <i class="icon fas fa-plus"></i> Add New</a> -->
           <router-link to="/spa/CustomerMasterForm" class="btn btn-primary btn-flat btn-sm"> 
            <i class="icon fas fa-plus"></i> Add New
          </router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            
            <th style="width: 6%;" scope="col" @click="sort('customer_code')" class="sortable-title">Code</th>
            <th style="width: 20%;" scope="col" @click="sort('name')" class="sortable-title">Name</th>
            <th style="width: 20%;" scope="col" @click="sort('email')" class="sortable-title">Email</th>             
            <th style="width: 14%;" scope="col" @click="sort('phone')" class="sortable-title">Phone</th>
            <th style="width: 5%;" scope="col" @click="sort('customer_group')" class="sortable-title">Group</th>
            <th style="width: 3%;" scope="col" @click="sort('us_name')" class="sortable-title">Status</th>
            <th style="width: 3%;" scope="col">Nofify</th>
            <th style="width: 3%;" scope="col">Date</th>
            <th style="width: 2%; text-align:right;" scope="col"><strong>...</strong></th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="customer.id" -->
          <!-- <tr v-for="(customer, index) in customers.data" :key="index"> -->
          <tr v-for="(customer, index) in sortedCustomers" :key="index">

            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="customer.id"></td>
            
            <td scope="col"> <small>{{ customer.customer_code }} </small> </td>
            <td scope="col"> {{ customer.name }} </td>
            <td > {{ customer.email }} </td> 
            <td > {{ customer.phone }} </td>          
            <td > 
              <span v-if="customer.customer_group_id != 0"> {{ customer.belongs_to_customer_group.group_name }} </span> 
            </td> 
          	<!-- <td > {{ customer.customer_group }} </td>  -->
            
            <td style="text-align:center;">
            	<span @click="inactiveCustomer(customer.id)" v-show="customer.status_id === 1" title="Active Customer, Click to inactive"><i class="fas fa-user-check green pointer"></i></span>
            	<span @click="activeCustomer(customer.id)" v-show="customer.status_id === 2" title="Inactive Customer, Click to active"> <i class="fas fa-user-times yellow pointer"></i></span>
            	<span @click="activeCustomer(customer.id)" v-show="customer.status_id === 3" title="Panding Customer, Click to active"> <i class="fas fa-user-lock red pointer"></i></span>
            	<span @click="verifyByUser(customer.id)" v-show="customer.status_id === 4" title="Not Verified Customer, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td>
             <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(customer.id, $event)" name="enable_notify" value="1" v-model="customer.enable_notify"  />
            </td>
            <td ><span class="pointer" :title="customer.created_at | formatDate"><i class="far fa-calendar-check"></i></span></td> 


    <!--         <td class="text-right">  
              <a @click="ViewDetails()" class="btn btn-flat btn-sm"> <i class="fas fa-eye primary"></i> </a>   
              <a @click="editCustomer(customer)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#customerModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(customer.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td> -->

            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i><!-- <i class="fas fa-ellipsis-h"></i> --></a>    

                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails(customer.id)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 
                  
                  <!-- <a @click="editCustomer(customer)" class="dropdown-item pointer" data-toggle="modal" data-target="#customerModal">
                      <i class="fas fa-edit primary "></i> Edit
                  </a>  -->

                  <router-link :to="{ name: 'CustomerMasterForm', params: { data:customer } }" class="dropdown-item pointer">
                    <i class="fas fa-edit primary "></i> Edit
                  </router-link>

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(customer.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->
            </td>

          </tr>

          <tr v-show="customers && !customers.length">
            <td colspan="10">
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
      name: "customerMasterListForAdmin",

      data(){
        return { 
          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'name',
          currentSortDir:'asc',

          //User for search
          filterBy:'name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'name', 'show_name':'Name'},
            {'field_name':'email', 'show_name':'Email'},
            {'field_name':'phone', 'show_name':'Phone'},
            {'field_name':'group_name', 'show_name':'Group'},
            {'field_name':'us_name', 'show_name':'Status'},
          ],             
        }
      },

      computed: {
          ...mapState( 
             'CustomerForAdminStore', ['customers', 'pagination','autoCompleteData']
          ),
           // use for sortable
          sortedCustomers() {
            let fo = Object.values(this.customers).sort((a,b) => {
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
            for(let i in this.customers){
              this.selectedCheckbox.push(this.customers[i].id); //all id push into selectedCheckbox array
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
          axios.post('/spa/customer-change-notify/'+id+'/'+event.target.checked)
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

        inactiveCustomer(id){
          Swal.fire({
              title: 'Are you sure to Active this Customer?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                this.$Progress.start();
                axios.post('/spa/customer-Info/inactive-customer/'+id)
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

        activeCustomer(id){          
          Swal.fire({
              title: 'Are you sure to Active this Customer?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Active!'
          }).then( (result) => {
            
              if ( result.value ) {  
                this.$Progress.start();
                axios.post('/spa/customer-Info/active-customer/'+id)
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
                this.$Progress.start();
                axios.post('/spa/customer-verify-by-admin/'+id)
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
          this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(){
          alert('ok');
        },

  	    addCustomer(){
  	    	FireEvent.$emit('addCustomer');
  	    },

  	    editCustomer(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editCustomer', data);
  	    },

	      DeleteData(id){          
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
                this.$Progress.start();
	              axios.delete('/spa/customer-Info/'+id)
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
            this.$store.dispatch('CustomerForAdminStore/searching', data ); 
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('CustomerForAdminStore/AutoCompleteSearch', data );  
            }        
          },
        // ################################ For search App ###############################################


      },

      created(){ 

          this.$store.dispatch('CustomerForAdminStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('CustomerForAdminStore/fetchData',data);
          });


      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
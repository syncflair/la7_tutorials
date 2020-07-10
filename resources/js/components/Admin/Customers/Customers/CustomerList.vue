<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm">
          <!-- Customer List -->
          <search-app-one 
            :SearchByOptions="SearchByOptions"
            :filterBy="filterBy"
            :autoCompleteData="autoCompleteData"
            :pagination="pagination"
          ></search-app-one>
        </div>
        <div class="col-md-7 col-sm text-right">
        	<a @click="addCustomer" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#customerModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 2%;" scope="col"><input type="checkbox" name=""></th>
            <th style="width: 20%;" scope="col" @click="sort('name')" class="sortable-title">Name</th>
            <th style="width: 20%;" scope="col" @click="sort('email')" class="sortable-title">Email</th>             
            <th style="width: 7%;" scope="col" @click="sort('phone')" class="sortable-title">Phone</th>
            <th style="width: 5%;" scope="col" @click="sort('phone')" class="sortable-title">Group</th>
            <th style="width: 3%;" scope="col" @click="sort('phone')" class="sortable-title">Status</th>
            <th style="width: 3%;" scope="col">Nofify</th>
            <th style="width: 7%;" scope="col">Date</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="customer.id" -->
          <!-- <tr v-for="(customer, index) in customers.data" :key="index"> -->
          <tr v-for="(customer, index) in sortedCustomers" :key="index">

            <!-- <td > id</td> -->
            <td scope="col"> <input type="checkbox" name=""></td>
            <td scope="col"> {{ customer.name }} </td>
            <td > {{ customer.email }} </td> 
            <td > {{ customer.phone }} </td>          
          	<td > {{ customer.customer_group }} </td> 
            
            <td style="text-align:center;">
            	<span v-show="customer.status_id === 1" title="Active Customer"><i class="fas fa-user-check green"></i></span>
            	<span v-show="customer.status_id === 2" title="Inactive Customer"> <i class="fas fa-user-times yellow"></i></span>
            	<span v-show="customer.status_id === 3" title="Panding Customer"> <i class="fas fa-user-lock red"></i></span>
            	<span @click="verifyByUser(customer.id)" v-show="customer.status_id === 4" title="Not Verified Customer, Click to verify">
                  <i class="fas fa-user-secret red pointer" ></i>
              </span>
            </td>
             <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(customer.id, $event)" name="enable_notify" value="1" v-model="customer.enable_notify"  />
            </td>
            <td > {{ customer.created_at | formatDate }} </td> 


            <td class="text-right">  
              <a @click="ViewDetails()" class="btn btn-flat btn-sm"> <i class="fas fa-eye primary"></i> </a>   
              <a @click="editCustomer(customer)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#customerModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(customer.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="customers && !customers.length">
            <td colspan="9">
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
      name: "customerList",

      data(){
        return { 
          // use for sortable
          currentSort:'name',
          currentSortDir:'asc',

          //User for search
          filterBy:'name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'name', 'show_name':'Name'},
            {'field_name':'email', 'show_name':'Email'},
            {'field_name':'phone', 'show_name':'Phone'},
            {'field_name':'customer_group', 'show_name':'Group'},
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
        // use for sortable
        sort(s){
          if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          }
          this.currentSort = s;
        },

        ChangeNotify(id, event){
          axios.post('/spa/customer-change-notify/'+id+'/'+event.target.checked)
            .then( ({data}) => {
              //console.log(data);
              if(data.success){                  
                FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
                toastr.success(data.success);                 
              } 
            })                          
            .catch(() => {
              toastr.warning('Something is wrong!');
            })
        },

        verifyByUser(id){
          axios.post('/spa/customer-verify-by-admin/'+id)
            .then( ({data}) => {
              //console.log(data);
              if(data.success){                  
                FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
                toastr.success(data.success);                 
              } 
            })                          
            .catch(() => {
              toastr.warning('Something is wrong!');
            })
        },

        fetchData(){
          //this function call from Pagination-app component
          this.$Progress.start();
          this.$store.dispatch('CustomerForAdminStore/fetchCustomer', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
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
	              axios.delete('/spa/customer-Info/'+id)
	                .then( ({data}) => {

	                  if(data.success){                  
	                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
	                    toastr.warning(data.success); 
	                  }   
	                  if(data.errors){
	                    toastr.warning(data.errors);                 
	                  }

	                })                          
	                .catch(() => {
	                  toastr.warning('Something is wrong!');
	                })
	            }else{
	              toastr.info( 'Your data is safe!');
	            }

	          })
	      }, //end delete
       
      
      },

      created(){ 

          this.$store.dispatch('CustomerForAdminStore/fetchCustomer'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('CustomerForAdminStore/fetchCustomer', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('CustomerForAdminStore/fetchCustomer',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('CustomerForAdminStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('CustomerForAdminStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
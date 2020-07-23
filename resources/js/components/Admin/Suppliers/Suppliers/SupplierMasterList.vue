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
        	<a @click="addData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#FormModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            
            <th style="width: 3%;" scope="col">Img</th>
            <th style="width: 15%;" scope="col" @click="sort('name')" class="sortable-title">Name</th>
            <th style="width: 15%;" scope="col" @click="sort('email')" class="sortable-title">Email</th>             
            <th style="width: 7%;" scope="col" @click="sort('phone')" class="sortable-title">Phone</th>
            <th style="width: 5%;" scope="col" @click="sort('supplier_type')" class="sortable-title">Type</th>
            <th style="width: 15%;" scope="col">Address</th>
            <th style="width: 7%;" scope="col">Date</th>
            <th style="width: 3%;" scope="col">Status</th>
            <th style="width: 3%;" scope="col">Nofify</th>            
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(supplier, index) in sortedSuppliers" :key="index">
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="supplier.id"></td>
            <td> 
                <span v-if="supplier.avatar != null"> 
                  <img :src="'../'+supplier.avatar" loading="lazy" height="20px" width="20px"> 
                </span>
                <span v-if="supplier.avatar === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 

            <td scope="col"> {{ supplier.name }} </td>
            <td > {{ supplier.email }} </td> 
            <td > {{ supplier.phone }} </td>          
          	<td > {{ supplier.supplier_type }} </td> 

            <td > 
              <small v-if="supplier.dist_zone_id != null">
              <span v-show="supplier.supplier_address != null">{{ supplier.supplier_address }}, </span>
                {{ supplier.belongs_to_district_zone.zone_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.district_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.belongs_to_division.division_name }},
                {{ supplier.belongs_to_district_zone.belongs_to_district.belongs_to_division.belongs_to_country.country_name }}
              </small>
            </td> 

            <td > <small>{{ supplier.created_at | formatDate }}</small> </td>
            
            <td style="text-align:center;">
            	<span @click="inactiveSupplier(supplier.id)" v-show="supplier.status_id === 1" title="Active supplier, Click to inactive"><i class="fas fa-user-check green pointer"></i></span>
            	<span @click="activeSupplier(supplier.id)" v-show="supplier.status_id === 2" title="Inactive supplier, Click to active"> <i class="fas fa-user-times yellow pointer"></i></span>
            	<span @click="activeSupplier(supplier.id)" v-show="supplier.status_id === 3" title="Panding supplier, Click to active"> <i class="fas fa-user-lock red pointer"></i></span>
            	<span @click="verifyByUser(supplier.id)" v-show="supplier.status_id === 4" title="Not Verified supplier, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td>
             <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(supplier.id, $event)" name="enable_notify" value="1" v-model="supplier.enable_notify"  />
            </td>

             

            <td class="text-right">  
              <a @click="ViewDetails()" class="btn btn-flat btn-sm"> <i class="fas fa-eye primary"></i> </a>   
              <a @click="editData(supplier)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#FormModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(supplier.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="suppliers && !suppliers.length">
            <td colspan="11">
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
      name: "supplierMasterListForAdmin",

      data(){
        return { 
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',

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
            {'field_name':'supplier_type', 'show_name':'Supplier Type'},
          ],             
        }
      },

      computed: {
          ...mapState( 
             'SupplierForAdminStore', ['suppliers', 'pagination','autoCompleteData']
          ),
           // use for sortable
          sortedSuppliers() {
            let fo = Object.values(this.suppliers).sort((a,b) => {
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
            for(let i in this.suppliers){
              this.selectedCheckbox.push(this.suppliers[i].id); //all id push into selectedCheckbox array
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
          axios.post('/spa/supplier-change-notify/'+id+'/'+event.target.checked)
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

        inactiveSupplier(id){
          this.$Progress.start();
          Swal.fire({
              title: 'Are you sure to Active this supplier?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                
                axios.post('/spa/supplier-Info/inactive-supplier/'+id)
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

        activeSupplier(id){
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
                
                axios.post('/spa/supplier-Info/active-supplier/'+id)
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
                
                axios.post('/spa/supplier-verify-by-admin/'+id)
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
          this.$store.dispatch('SupplierForAdminStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
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
	              axios.delete('/spa/supplier-Info/'+id)
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

          this.$store.dispatch('SupplierForAdminStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('SupplierForAdminStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('SupplierForAdminStore/fetchData',data);
          });


          //This is come from search-app-one.vue file for serch data
          FireEvent.$on('searchData', (data) => {
             //alert(data.search_key+'-'+data.search_option);
             this.$store.dispatch('SupplierForAdminStore/searching', data ); 
          });
          //This is come from search-app-one.vue file for Auto Complete data
          FireEvent.$on('AutoCompleteSearch', (data) => {
              //alert(data);
              if(data != ''){
                this.$store.dispatch('SupplierForAdminStore/AutoCompleteSearch', data ); 
              }
          });
      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
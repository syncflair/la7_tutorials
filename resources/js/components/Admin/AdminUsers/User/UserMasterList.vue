<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
          <!-- user List -->
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
        	<a @click="addUser" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#FormModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            <th style="width: 3%;" scope="col">Avatar</th>
            <th style="width: 20%;" scope="col" @click="sort('name')" class="sortable-title">Name</th>
            <th style="width: 20%;" scope="col" @click="sort('email')" class="sortable-title">Email</th>  
            <th style="width: 5%;" scope="col" @click="sort('role_name')" class="sortable-title">Role</th>
            <th style="width: 22%;" scope="col" ><small>Assign To employee </small></th>
            <th style="width: 3%;" scope="col" >Status</th>
            <th style="width: 3%;" scope="col">Nofify</th>
            <th style="width: 8%;" scope="col">Date</th>
            <th style="width: 2%; text-align:right;" scope="col"><strong>...</strong></th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="user.id" -->
          <!-- <tr v-for="(user, index) in users.data" :key="index"> -->
          <tr v-for="(user, index) in sortedObjects" :key="index">

            
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="user.id"></td>
            <td> 
                <span v-if="user.avatar != null"> 
                  <!-- <img :src="'../'+user.avatar" loading="lazy" height="20px" width="20px">  -->
                  <img :src="user.avatar" loading="lazy" height="20px" width="20px"> 
                </span>
                <span v-if="user.avatar === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> 
            <td scope="col"> {{ user.name }} </td>
            <td > {{ user.email }} </td>          
            <td > {{ user['role']['name'] }} </td> 
          	<td >
              <small v-if="user.belongs_to_employee != null">
                {{ user.belongs_to_employee.emp_name }} 
              </small> 
            </td> 
            
            <td style="text-align:center;">
            	<span @click="inactiveUser(user.id)" v-show="user.status_id === 1" title="Active user, Click to Inactive"><i class="fas fa-user-check green pointer"></i></span>
            	<span @click="activeUser(user.id)" v-show="user.status_id === 2" title="Inactive user, Click to active"> <i class="fas fa-user-times yellow pointer" style="font-size:18px !important;"></i></span>
            	<span @click="activeUser(user.id)" v-show="user.status_id === 3" title="Panding user, Click to active"> <i class="fas fa-user-lock red pointer" style="font-size:18px !important;"></i></span>
            	<span @click="verifyByUser(user.id)" v-show="user.status_id === 4" title="Not Verified user, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td>
             <td style="text-align:center;">
              data
              <!-- <input type="checkbox" @click="ChangeNotify(user.id, $event)" name="enable_notify" value="1" v-model="user.enable_notify"  /> -->
            </td>
            <td ><small> {{ user.created_at | formatDate }}</small> </td> 


            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i><!-- <i class="fas fa-ellipsis-h"></i> --></a>    

                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails(user.id)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 
                  
                  <a @click="editUser(user)" class="dropdown-item pointer" data-toggle="modal" data-target="#FormModal">
                      <i class="fas fa-edit primary "></i> Edit
                  </a> 

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(user.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->
            </td>

          </tr>

          <tr v-show="users && !users.length">
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
      name: "UserMasterList",
      data(){
        return { 
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',

          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'name',
          //currentSortDir:'desc',
          currentSortDir:'asc',

          //User for search
          filterBy:'name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'name', 'show_name':'Name'},
            {'field_name':'email', 'show_name':'Email'},
            {'field_name':'us_name', 'show_name':'User Status'},
            {'field_name':'role_name', 'show_name':'User Role'},
          ],             
        }
      },

      computed: {
          ...mapState( 
             'usersAdminStore', ['users', 'pagination','autoCompleteData']
          ),

           // use for sortable
          sortedObjects() {
            let fo = Object.values(this.users).sort((a,b) => {
              let modifier = 1;
              if(this.currentSortDir === 'desc') modifier = -1;
              if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
              if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
              return 0;
            });
            return fo;
          }
      }, //end computed

      methods:{
        //checkbox select
        selectCheckbox(){
          this.selectedCheckbox = [];
          if(!this.selectAllCheckbox){
            for(let i in this.users){
              this.selectedCheckbox.push(this.users[i].id); //all id push into selectedCheckbox array
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

        inactiveUser(id){          
          Swal.fire({
              title: 'Are you sure to Inactive this User?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                this.$Progress.start();
                axios.post('/spa/Users-Info/inactive-user/'+id)
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

        activeUser(id){
          Swal.fire({
              title: 'Are you sure to Active this User?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Active!'
          }).then( (result) => {
            
              if ( result.value ) {  
                this.$Progress.start();
                axios.post('/spa/Users-Info/active-user/'+id)
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
                axios.post('/spa/Users-Info/verify-by-admin/'+id)
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
          this.$store.dispatch('usersAdminStore/fetchData', this.pagination.per_page);
          this.$Progress.finish();
          //console.log(this.pagination.total);
        },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(){
          alert('ok');
        },

  	    addUser(){
  	    	FireEvent.$emit('addUser'); //call to form components
  	    },

  	    editUser(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editUser', data); //call to form components
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
	              axios.delete('/spa/Users-Info/'+id)
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
          searchData(data){ //This is come from search-app-master.vue file for serch data
            this.$store.dispatch('usersAdminStore/searching', data ); 
          },      
          AutoCompleteSearch(data){ //This is come from search-app-master.vue file for Auto Complete data
            if(data != ''){
                this.$store.dispatch('usersAdminStore/AutoCompleteSearch', data ); 
            }        
          },
        // ################################ For search App ###############################################
      
      },

      created(){ 

          this.$store.dispatch('usersAdminStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('usersAdminStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 

          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('usersAdminStore/fetchData',data);
          });

      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
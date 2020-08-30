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
          <!-- <router-link :to="{name: 'EmployeeMasterForm', params: { id: id} }" class="btn btn-primary btn-flat btn-sm">  -->
	        <router-link to="/spa/EmployeeMasterForm" class="btn btn-primary btn-flat btn-sm"> 
	        	<i class="icon fas fa-plus"></i> Add New
	        </router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 2%;" scope="col"><input type="checkbox" v-model="selectAllCheckbox" @click="selectCheckbox"></th>
            <!-- <th style="width: 3%;" scope="col">Img</th> -->
            <th style="width: 5%;" scope="col" @click="sort('employee_code')" class="sortable-title">code</th>
            <th style="width: 15%;" scope="col" @click="sort('emp_name')" class="sortable-title">Name</th>
            <th style="width: 15%;" scope="col" @click="sort('emp_email')" class="sortable-title">Email</th>             
            <th style="width: 7%;" scope="col" @click="sort('emp_phone')" class="sortable-title">Phone</th>
            <th style="width: 10%;" >Branch</th>
            <th style="width: 10%;" scope="col">Job Title</th>
            <th style="width: 15%;" scope="col"> <small>Assign to User</small></th>
            <th style="width: 10%;" scope="col">Dept</th>
            <th style="width: 3%;" scope="col">Status</th>           
            <!-- <th style="width: 3%;" scope="col">Verify</th>            -->
            <th style="width: 2%; text-align:right;" scope="col"><strong>...</strong></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(employee, index) in sortedemployees" :key="index">

            <!-- <td > id</td> -->
            <td scope="col"> <input type="checkbox" v-model="selectedCheckbox" name="" :value="employee.id"></td>


            <!-- <img :src="'../'+employee.avatar" loading="lazy" height="20px" width="20px"> -->
            <!-- <td> 
                <span v-if="employee.avatar != null"> 
                   
                  <img :src="employee.avatar" loading="lazy" height="20px" width="20px"> 
                </span>
                <span v-if="employee.avatar === null"> <img :src="'../'+NoIconUrl" height="20px" width="20px"> </span>
            </td> --> 

            <td scope="col"> <small>{{ employee.employee_code }}</small> </td>
            <td scope="col"> {{ employee.emp_name }} </td>
            <td > {{ employee.emp_email }} </td> 
            <td > {{ employee.emp_phone }} </td>          
          	<td > {{ employee['belongs_to_branch']['branch_name'] }} </td> 

            <td > 
              <small>{{ employee['belongs_to_job_title']['job_title_name'] }} </small>
            </td> 
            <td > 
              <small v-if="employee.has_one_user != null">
                  {{employee.has_one_user.name}}
              </small>
            </td> 

            <td > <small v-show="employee.departments != null" v-for="dept in employee.departments"> 
                        <!-- <span class="btn btn-primary btn-flat btn-sm mb-1">{{dept.dept_name}} </span> -->
                      {{ dept.dept_name }}, 
                  </small>
            </td>
            <!-- <td > <small>{{ employee.emp_hire_date | formatDate }}</small> </td> -->
            
            <td style="text-align:center;">
            	<span @click="inactiveEmployee(employee.id)" v-show="employee.status_id === 1" title="Active employee, Click to inactive"><i class="fas fa-user-check green pointer"></i></span>
            	<span @click="activeEmployee(employee.id)" v-show="employee.status_id === 2" title="Inactive employee, Click to active"> <i class="fas fa-user-times yellow pointer"></i></span>
            	<span @click="activeEmployee(employee.id)" v-show="employee.status_id === 3" title="Panding employee, Click to active"> <i class="fas fa-user-lock red pointer"></i></span>
            	<span @click="verifyByUser(employee.id)" v-show="employee.status_id === 4" title="Not Verified employee, Click to verify">
                  <i class="fas fa-user-secret red pointer" style="font-size:22px !important;" ></i>
              </span>
            </td>
             <!-- <td style="text-align:center;">
              <input type="checkbox" @click="ChangeNotify(employee.id, $event)" name="enable_notify" value="1" v-model="employee.enable_notify"  />
            </td> -->

             
            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i><!-- <i class="fas fa-ellipsis-h"></i> --></a>    
                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails(employee.id)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 
                  
                  <router-link :to="{ name: 'EmployeeMasterForm', params: { data:employee } }" class="dropdown-item pointer">
                    <i class="fas fa-edit primary "></i> Edit
                  </router-link>

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(employee.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->
            </td>

          </tr>

          <tr v-show="employees && !employees.length">
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
      name: "EmployeeMasterList",

      data(){
        return { 
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
          //checkbox selecting data
          selectAllCheckbox: false,
          selectedCheckbox: [],

          // use for sortable
          currentSort:'emp_name',
          currentSortDir:'asc',

          //User for search
          filterBy:'emp_name', // this is use for which field use for auto search, default
          SearchByOptions:[
            {'field_name':'emp_name', 'show_name':'Name'},
            {'field_name':'emp_email', 'show_name':'Email'},
            {'field_name':'emp_phone', 'show_name':'Phone'},
            {'field_name':'emp_gender', 'show_name':'Gender'},
            {'field_name':'us_name', 'show_name':'Status'},
          ],     

                  
        }
      },

      computed: {
          ...mapState( 
             'EmployeeMasterStore', ['employees', 'pagination','autoCompleteData']
          ),
           // use for sortable
          sortedemployees() {
            let fo = Object.values(this.employees).sort((a,b) => {
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
            for(let i in this.employees){
              this.selectedCheckbox.push(this.employees[i].id); //all id push into selectedCheckbox array
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

        // ChangeNotify(id, event){
        //   this.$Progress.start();
        //   axios.post('/spa/employee-change-notify/'+id+'/'+event.target.checked)
        //     .then( ({data}) => {
        //       //console.log(data);
        //       if(data.success){                  
        //         FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update             
        //         this.$Progress.finish();    
        //         toastr.success(data.success);                 
        //       } 
        //     })                          
        //     .catch(() => {
        //       this.$Progress.fail();
        //       toastr.warning('Something is wrong!');
        //     })
        // },

        inactiveEmployee(id){
          Swal.fire({
              title: 'Are you sure to Inactive this employee?',
             // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',  
              confirmButtonText: 'Yes, Inactive!'
          }).then( (result) => {
            
              if ( result.value ) {  
                this.$Progress.start();
                axios.post('/spa/Employee-Info/inactive-employee/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){
                    this.$Progress.finish();                
                    toastr.warning(data.success);  
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update                                                      
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

        activeEmployee(id){          
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
                this.$Progress.start();
                
                axios.post('/spa/Employee-Info/active-employee/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){                  
                    this.$Progress.finish();                
                    toastr.success(data.success); 
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update                                                       
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
                
                axios.post('/spa/employee-verify-by-admin/'+id)
                .then( ({data}) => {
                  //console.log(data);
                  if(data.success){                  
                    this.$Progress.finish();                
                    toastr.success(data.success);  
                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
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
          this.$store.dispatch('EmployeeMasterStore/fetchData', this.pagination.per_page);
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
	              axios.delete('/spa/Employee-Info/'+id)
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
            this.$store.dispatch('EmployeeMasterStore/searching', data ); 
          },      
          AutoCompleteSearch(data){
            if(data != ''){
                this.$store.dispatch('EmployeeMasterStore/AutoCompleteSearch', data );  
            }        
          },
        // ################################ For search App ###############################################

      },

      created(){ 

          this.$store.dispatch('EmployeeMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 


          FireEvent.$on('AfterChange', () => {
              this.$Progress.start();
              this.$store.dispatch('EmployeeMasterStore/fetchData', this.pagination.per_page);
              this.$Progress.finish();
          }); 


          //this event call from Pagination-app component for change number of data show per page
          FireEvent.$on('changPerPage', (data) => {
            this.$store.dispatch('EmployeeMasterStore/fetchData',data);
          });

      

      },

      mounted() {
        //console.log(this.categories)   
      },

    }/*End export default*/
</script>
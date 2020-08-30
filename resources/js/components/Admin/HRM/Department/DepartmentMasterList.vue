<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Department List</div>
        <div class="col-6 text-right">
        	<a @click="addDepartment" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#DepartmentModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Department</th>
            <th style="width: 50%;" scope="col">Details</th>
            <th style="width: 10%;" scope="col">Updated At</th>
            <th style="width: 10%;" scope="col">Status</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(dept, index) in Departments" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ dept.dept_name }} </td>
            <td > {{dept.dept_desc}} </td>

            <td >{{ dept.updated_at | formatDate }} </td>

            <td>
            	<span v-show="dept.is_enabled === 1" class="green"> Active</span>
            	<span v-show="dept.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editDepartment(dept.id)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#DepartmentModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(dept.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Departments && !Departments.length">
            <td colspan="6">
              <div class="alert alert-warning text-center red mb-0" role="alert" >Sorry : No data found.</div>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="card-footer">      
      <!-- <pagination-app 
          v-if="pagination.last_page >= 1"  
          :pagination="pagination"
          :offset="5"
          @paginate="fetchData()"
      ></pagination-app> -->
    </div>

</div><!--/vue-card-item -->
</template>

<script>
 
    export default {
      name: "DepartmentMasterList",

      data(){
        return {
        	Departments: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchDepartment(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/Department-Info')
	          .then( ( response ) => {

	            this.Departments = response.data; // is an object... use when pagination
	              //this.deptUn = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addDepartment(){
	    	FireEvent.$emit('addDepartment');
	    },

	    editDepartment(id){
        axios.get('/spa/Department-Info/'+id+'/edit')
          .then( (data) => {
            FireEvent.$emit('editDepartment', data.data)
            //console.log(data.data);
          })          
          .catch( (error) =>{ })

	    	//alert(id);
	    	
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
	              axios.delete('/spa/Department-Info/'+id)
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
      		this.fetchDepartment();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchDepartment();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchDepartment();  
      },

    }/*End export default*/
</script>
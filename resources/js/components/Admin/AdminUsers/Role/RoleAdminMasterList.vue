<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6"><h5 class="red text-bold">(Don't Add Or Edit Role... Don't)</h5></div>
        <div class="col-6 text-right">
        	<a @click="addRole" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#RoleModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 20%;" scope="col">Name</th>            
            <th style="width: 50%;" scope="col">Details</th>
            <th style="width: 10%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="PackageUnit.id" -->
          <tr v-for="(role, index) in Roles" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ role.name }} </td>
            <td> {{ role.role_desc }} </td> 
            <td>
            	<span v-show="role.is_enabled === 1" class="green"> Active</span>
            	<span v-show="role.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>

            <td class="text-right">    
              <a @click="editRole(role)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#RoleModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(role.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="Roles.data && !Roles.length">
            <td colspan="6">
              <div class="alert alert-danger text-center red mb-0" role="alert" >Sorry : No data found.</div>
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
      name: "RoleAdminMasterList",

      data(){
        return {
        	Roles: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchRole(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/Roles-Info')
	          .then( ( response ) => {

	            this.Roles = response.data; // is an object... use when pagination
	              //this.PackageUnit = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
  	    },

  	    addRole(){
  	    	FireEvent.$emit('addRole');
  	    },

  	    editRole(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editRole', data);
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
	              axios.delete('/spa/Roles-Info/'+id)
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
      		this.fetchRole();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchRole();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchRole();  
      },

    }/*End export default*/
</script>
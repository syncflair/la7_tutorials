<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">User Status</div>
        <div class="col-6 text-right">
        	<a @click="addUserStatus" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#UserStatusModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 5%;">#</th>
            <th style="width: 20%;" scope="col">Title</th>
            <th style="width: 50%;" scope="col">Details</th>
            <th style="width: 10%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(u_status, index) in UserStatus" :key="index">
            <td > {{ u_status.id }} </td>
            <td scope="col" class="text-bold green"> {{ u_status.us_name }} </td>
             
            <td > {{u_status.us_desc}} </td>

            <td class="text-right">    
              <a @click="editUserStatus(u_status)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#UserStatusModal" v-if="authUser.role_id === 1">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(u_status.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" v-if="authUser.role_id === 1">
                 <i class="far fa-trash-alt red"></i>
              </a>

              <span class="red text-bold" v-if="authUser.role_id != 1">No Action</span>
            </td>

          </tr>

          <tr v-show="UserStatus && !UserStatus.length">
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
      name: "UserStatusList",

      data(){
        return {
        	UserStatus: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchUserStatus(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/user-status-info')
	          .then( ( response ) => {

	            this.UserStatus = response.data; // is an object... use when pagination
	              //this.u_statusUn = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
  	    },

  	    addUserStatus(){
  	    	FireEvent.$emit('addUserStatus');
  	    },

  	    editUserStatus(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editUserStatus', data);
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
	              axios.delete('/spa/user-status-info/'+id)
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
      		this.fetchUserStatus();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchUserStatus();
		    });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>
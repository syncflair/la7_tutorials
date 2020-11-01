<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Return Status</div>
        <div class="col-6 text-right">
        	<a @click="addReturnStatus" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 5%;" scope="col">#</th>
            <th style="width: 20%;" scope="col">Title</th>
            <th style="width: 45%;" scope="col">Details</th>
            <th style="width: 5%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(r_status, index) in ReturnStatus" :key="index">
            <td > {{r_status.id}} </td>
            <td scope="col" class="text-bold green-"> {{ r_status.return_status_name }} </td>
             
            <td > {{r_status.return_status_desc}} </td>

            <td>
              <span v-show="r_status.is_enabled === 1" class="green"> Active</span>
              <span v-show="r_status.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>

            <td class="text-right"> 


              <a @click="editReturnStatus(r_status)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal" v-if="authUser.role_id === 1">
                  <i class="fas fa-edit primary "></i>
              </a> 

              <a @click="DeleteData(r_status.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" v-if="authUser.role_id === 1">
                 <i class="far fa-trash-alt red"></i>
              </a>

              <span class="red text-bold" v-if="authUser.role_id != 1">No Action</span>
            </td>

          </tr>

          <tr v-show="ReturnStatus && !ReturnStatus.length">
            <td colspan="5">
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

    <!-- {{authUser}} -->

</div><!--/vue-card-item -->
</template>

<script>
  //import { mapState } from 'vuex' //for user MapState
    export default {
      name: "ReturnStatusMasterlist-info",

      data(){
        return {
        	ReturnStatus: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
        // ...mapState( 
        //      'VatRatesStore', ['authUser', 'pagination','autoCompleteData']
        //   ),        
      },

      methods:{
      	fetchReturnStatus(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/return-status-info')
	          .then( ( response ) => {

	            this.ReturnStatus = response.data; // is an object... use when pagination
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
  	    },

  	    addReturnStatus(){
  	    	FireEvent.$emit('addReturnStatus');
  	    },

  	    editReturnStatus(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editReturnStatus', data);
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
	              axios.delete('/spa/return-status-info/'+id)
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
      		this.fetchReturnStatus();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchReturnStatus();
		    });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>
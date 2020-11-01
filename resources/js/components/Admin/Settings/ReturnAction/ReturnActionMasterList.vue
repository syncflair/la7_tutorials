<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Return Action</div>
        <div class="col-6 text-right">
        	<a @click="addReturnAction" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> <i class="icon fas fa-plus"></i> Add New</a>
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
          <tr v-for="(return_action, index) in ReturnAction" :key="index">
            <td > {{return_action.id}} </td>
            <td scope="col" class="text-bold green-"> {{ return_action.return_action_name }} </td>
             
            <td > {{return_action.return_action_desc}} </td>

            <td>
              <span v-show="return_action.is_enabled === 1" class="green"> Active</span>
              <span v-show="return_action.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>

            <td class="text-right"> 


              <a @click="editReturnAction(return_action)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal" v-if="authUser.role_id === 1">
                  <i class="fas fa-edit primary "></i>
              </a> 

              <a @click="DeleteData(return_action.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" v-if="authUser.role_id === 1">
                 <i class="far fa-trash-alt red"></i>
              </a>

              <span class="red text-bold" v-if="authUser.role_id != 1">No Action</span>
            </td>

          </tr>

          <tr v-show="ReturnAction && !ReturnAction.length">
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
      name: "ReturnActionMasterlist-info",

      data(){
        return {
        	ReturnAction: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
        // ...mapState( 
        //      'VatRatesStore', ['authUser', 'pagination','autoCompleteData']
        //   ),        
      },

      methods:{
      	fetchReturnAction(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/return-action-info')
	          .then( ( response ) => {

	            this.ReturnAction = response.data; // is an object... use when pagination
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
  	    },

  	    addReturnAction(){
  	    	FireEvent.$emit('addReturnAction');
  	    },

  	    editReturnAction(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editReturnAction', data);
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
	              axios.delete('/spa/return-action-info/'+id)
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
      		this.fetchReturnAction();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchReturnAction();
		    });
      },

      mounted() {
        //console.log(this.categories)    
      },

    }/*End export default*/
</script>
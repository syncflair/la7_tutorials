<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-6">Branch List</div>
        <div class="col-md-4 col-sm-6 col-6 text-right">
        	<a @click="addBranch" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#branchModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 8%;" scope="col">Code</th>
            <th style="width: 15%;" scope="col">Name</th>             
            <th style="width: 30%;" scope="col">Details</th>
            <th style="width: 30%;" scope="col">Address</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="Branch.id" -->
          <tr v-for="(branch, index) in branches" :key="index">
            <!-- <td > id</td> -->
            <td scope="col"> {{ branch.branch_code }} </td>
            <td > {{ branch.branch_name }} </td> 
            <td >
               	<span v-show="branch.branch_desc">
               		Details: 
            		<i class="fas fa-info-circle pointer" v-tooltip.auto="{content: branch.branch_desc, classes:'info'}" ></i>
            	</span><br>
            	<span v-show="branch.branch_phone"> Phone: {{branch.branch_phone}} </span><br>
            	<span v-show="branch.branch_email"> Email: {{branch.branch_email}} </span>
            </td>
            <td > 
            	<span>{{ branch.branch_address }}</span> <br>
            	<span v-show="branch.zone"> {{branch.zone}} </span>
            	<span v-show="branch.city"> ,{{branch.city}} </span>
            	<span v-show="branch.state"> ,{{branch.state}} </span><br>
            	<span v-show="branch.country"> {{branch.country}} </span>
            </td>

            <td>
            	<span v-show="branch.is_enabled === 1" class="green"> Active</span>
            	<span v-show="branch.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editBranch(branch)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#branchModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(branch.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="branches.data && !branches.length">
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
      name: "BranchList",

      data(){
        return {
        	branches: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchBranches(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/Branch-Info')
	          .then( ( response ) => {

	            this.branches = response.data; // is an object... use when pagination
	              //this.branches = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addBranch(){
	    	FireEvent.$emit('addBranch');
	    },

	    editBranch(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editBranch', data);
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
	              axios.delete('/spa/Branch-Info/'+id)
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
      		this.fetchBranches();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchBranches();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchBranches();  
      },

    }/*End export default*/
</script>
<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Gustomer Groups</div>
        <div class="col-6 text-right">
        	<a @click="addData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> 
            <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 15%;" scope="col">Icon</th>
            <th style="width: 20%;" scope="col">Group Name</th>
            <th style="width: 20%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <!-- :key="cgUnit.id" -->
          <tr v-for="(cg, index) in CustomerGroups" :key="index">
            <td >
               <span v-if="cg.cg_img != null"> 
                  <!-- <img :src="'../'+cg.cg_img" height="30px" width="30px">  -->
                  <img :src="cg.cg_img" height="30px" width="30px"> 
                </span>
                <span v-if="cg.cg_img === null"> <img :src="'../'+NoIconUrl" height="50px" width="70px"> </span>
            </td>
            <td scope="col"> {{ cg.group_name }} </td>
            <td > {{cg.group_desc}} </td>
            <!-- <td >{{ cg.updated_at | formatDate }} </td> -->
            <td>
            	<span v-show="cg.is_enabled === 1" class="green"> Active</span>
            	<span v-show="cg.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editData(cg)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#formModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(cg.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="CustomerGroups && !CustomerGroups.length">
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

</div><!--/vue-card-item -->
</template>

<script>
 
    export default {
      name: "CustomerGroupMasterList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	CustomerGroups: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchData(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/customerGroup-Info')
	          .then( ( response ) => {

	            this.CustomerGroups = response.data; // is an object... use when pagination
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
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
	              axios.delete('/spa/customerGroup-Info/'+id)
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
      		this.fetchData();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchData();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchData();  
      },

    }/*End export default*/
</script>
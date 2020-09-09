<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Memberships</div>
        <div class="col-6 text-right">
          <a @click="reloadThis" class="btn btn-primary btn-flat btn-sm" title="reload"> <i class="fas fa-sync-alt"></i> </a>
        	<a @click="addCustomerMembership" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> 
            <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <th style="width: 5%;" scope="col">Icon</th>
            <th style="width: 15%;" scope="col">Membership Name</th>
            <th style="width: 5%;" scope="col">Dis. Type</th>
            <th style="width: 5%;" scope="col">Dis. Value</th>
            <th style="width: 5%;" scope="col">Order Limit</th>
            <th style="width: 4%;" scope="col">Free Ship</th>
            <th style="width: 40%;" scope="col">Details</th>
            <th style="width: 5%;" scope="col">Status</th>
            <th style="width: 2%; text-align:right;" scope="col"><strong>...</strong></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(cm, index) in CustomerMembership" :key="index">
            <td >
               <span v-if="cm.membership_img != null"> 
                  <!-- <img :src="'../'+cm.membership_img" height="30px" width="30px">  -->
                  <img :src="cm.membership_img" height="30px" width="30px"> 
                </span>
                <span v-if="cm.membership_img === null"> <img :src="'../'+NoIconUrl" height="50px" width="70px"> </span>
            </td>
            <td scope="col"> {{ cm.membership_title }} </td>
            <td > {{cm.discount_type}} </td>
            <td > {{cm.discount_value}} </td>
            <td > {{cm.total_orders}} </td>
            <td>
              <span v-show="cm.is_free_shipping === 1" class="green"> Yes</span>
              <span v-show="cm.is_free_shipping === 0" class="red text-bold"> No</span>
            </td>

            <td > {{cm.membership_desc}} </td>
            
            <!-- <td >{{ cm.updated_at | formatDate }} </td> -->
            <td>
            	<span v-show="cm.is_enabled === 1" class="green"> Active</span>
            	<span v-show="cm.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>



            <td class="text-right">  
              <!-- Dropdown List -->
              <div class="btn-group option-dropdown-manu-style left">
                <a class="btn btn-flat btn-sm btn-warning dropdown-toggle-" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i><!-- <i class="fas fa-ellipsis-h"></i> --></a>    
                <div class="dropdown-menu dropdown-menu-right">
                  <a @click="ViewDetails(cm.id)" class="dropdown-item pointer"> <i class="fas fa-eye primary"></i> View </a> 
                
                  <a @click="editCustomerMembership(cm)" class="dropdown-item pointer" data-toggle="modal" data-target="#formModal">
                      <i class="fas fa-edit primary"></i> Edit
                  </a> 

                  <div class="dropdown-divider"></div>

                  <a @click="DeleteData(cm.id)" class="dropdown-item pointer" id="delete">
                     <i class="far fa-trash-alt red"></i> Delete
                  </a>
                </div>
              </div><!--End Dropdown List -->
            </td>

          </tr>

          <tr v-show="CustomerMembership && !CustomerMembership.length">
            <td colspan="9">
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
        	CustomerMembership: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchData(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/customerMembership-Info')
	          .then( ( response ) => {

	            this.CustomerMembership = response.data; // is an object... use when pagination
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
  	    },

        reloadThis(){
          this.fetchData();
        },

        ViewDetails(id){
          alert('ok')
        },

  	    addCustomerMembership(){
  	    	FireEvent.$emit('addCustomerMembership');
  	    },

  	    editCustomerMembership(data){
  	    	//alert(data.id);
  	    	FireEvent.$emit('editCustomerMembership', data);
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
	              axios.delete('/spa/customerMembership-Info/'+id)
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
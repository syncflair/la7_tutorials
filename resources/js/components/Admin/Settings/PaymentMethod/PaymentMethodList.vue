<template>
<div class="card vue-card-item">
    <div class="card-header">
      <div class="row">
        <div class="col-6">Payment Methods</div>
        <div class="col-6 text-right">
        	<a @click="addPaymentMethod" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#PaymentMethodModal"> <i class="icon fas fa-plus"></i> Add New</a>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">   
      <table class="table table-striped table-sm table-responsive-">
        <thead>
          <tr>
            <!-- <th style="">#</th> -->
            <th style="width: 5%;" scope="col"> Icon</th>
            <th style="width: 25%;" scope="col">Name</th>             
            <th style="width: 30%;" scope="col">Details</th>
            <th style="width: 8%;" scope="col">Status</th>
            <th style="width: 15%; text-align:right;" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(m_method, index) in PaymentMethods" :key="index">            
            <td> 
                <span v-if="m_method.payment_method_icon != null"> 
                  <img :src="'../'+m_method.payment_method_icon" height="15px" width="15px"> 
                </span>
                <span v-if="m_method.payment_method_icon === null"> <img :src="'../'+NoIconUrl" height="15px" width="15px"> </span>
            </td> 

            <td scope="col"> {{ m_method.payment_method }} </td>
            <td > {{m_method.payment_method_desc}} </td>


            <td>
            	<span v-show="m_method.is_enabled === 1" class="green"> Active</span>
            	<span v-show="m_method.is_enabled === 0" class="red text-bold"> Inactive</span>
            </td>


            <td class="text-right">    
              <a @click="editPaymentMethod(m_method)" class="btn btn-primary- btn-flat btn-sm" data-toggle="modal" data-target="#PaymentMethodModal">
                  <i class="fas fa-edit primary "></i>
              </a> 
              <a @click="DeleteData(m_method.id)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
                 <i class="far fa-trash-alt red"></i>
              </a>
            </td>

          </tr>

          <tr v-show="PaymentMethods && !PaymentMethods.length">
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
      name: "PaymentMethodList",

      data(){
        return {
          NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        	PaymentMethods: {}, 
         // perPage: 0,                 
        }
      },

      computed: {
      },

      methods:{
      	fetchPaymentMethod(){
	        this.$Progress.start(); //using progress-bar package

	        axios.get('/spa/PaymentMethod-Info')
	          .then( ( response ) => {

	            this.PaymentMethods = response.data; // is an object... use when pagination
	              //this.PaymentMethods = response.data.data; //is an object... default 
	            //console.log(response.data); 
	            this.$Progress.finish(); 
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            this.$Progress.fail(); 
	            toastr.warning('Something is wrong!');
	          })
	    },

	    addPaymentMethod(){
	    	FireEvent.$emit('addPaymentMethod');
	    },

	    editPaymentMethod(data){
	    	//alert(data.id);
	    	FireEvent.$emit('editPaymentMethod', data);
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
	              axios.delete('/spa/PaymentMethod-Info/'+id)
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
      		this.fetchPaymentMethod();

      		FireEvent.$on('AfterChange', () => {
		        this.fetchPaymentMethod();
		    });
      },

      mounted() {
        //console.log(this.categories)    
        //this.fetchPaymentMethod();  
      },

    }/*End export default*/
</script>
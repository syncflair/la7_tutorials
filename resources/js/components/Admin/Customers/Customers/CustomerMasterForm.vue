<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="customerModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Customer</span>
        	<span v-show="editMode">Update Customer</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-1">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-7 col-sm-6">

	          		<div class="form-group">
	                  <label>Customer Name *</label>
	                    <input v-model="form.name" type="text" ref="name" name="name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Customer Name">
	                  <has-error :form="form" field="name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Email *</label>
                        <input v-model="form.email" type="text" ref="email" name="email" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Enter Email">
                      <has-error :form="form" field="email"></has-error>
                    </div>	

                    
	                <div class="form-group">
	                   	<label>Phone *</label>
	                    <div class="input-group input-group-sm mb-3">	                      
		                  <div class="input-group-prepend">
		                    <span class="input-group-text"><!-- <i class="fas fa-envelope"></i> --> +88 </span>
		                  </div>
		                  <input v-model="form.phone" type="number" ref="phone" name="phone" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter phone number">	 
		                  <has-error :form="form" field="phone"></has-error>                     
		                </div>
		                
		            </div>

                    <div class="form-group">
                    	
                      <label> Password  <span v-show="editMode === false"> * </span> </label>
                        <input v-model="form.password" type="password" ref="password" name="password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
                      <has-error :form="form" field="password"></has-error>
                    </div> 

                    <div class="form-group">
                      <label>Password</label>
                        <input v-model="form.password_confirmation" type="password" ref="password_confirmation" name="password_confirmation" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm Password">
                      <has-error :form="form" field="password_confirmation"></has-error>
                    </div> 


	          	</div>

	          	<div class="col-md-5 col-sm-6">

	          		<div class="form-group">
			          <label for="role_id"">Customer Group *</label>
		              <select v-model="form.customer_group" class="form-control form-control-sm" id="customer_group" name="customer_group" :class="{ 'is-invalid': form.errors.has('customer_group') }" >
		              	  <option disabled value="">Select customer Group ..</option>                
		                  <option v-for="c_group in CustomerGroups" v-bind:value="c_group.name">
		                  	{{c_group.name}}
		                  </option>			                  
		               </select>
		               <has-error :form="form" field="customer_group"></has-error>			                      
			        </div>

			        <div class="form-group">
			          <label for="role_id"">Status *</label>
		              <select v-model="form.status_id" class="form-control form-control-sm" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
		              	<option disabled value="">Select Customer Status ..</option>                
		                  <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option>			                  
		               </select>
		               <has-error :form="form" field="status_id"></has-error>			                      
			        </div>

			        <div class="form-check">
	                  <input v-model="form.enable_notify" type="checkbox" class="form-check-input" ref="enable_notify" name="enable_notify" id="checkbox" value="1">
	                  <label class="form-check-label" for="checkbox" >Notification</label>
	                </div>

	          	</div> 

	          </div><!-- row inside form -->
	            

	        </div> 
	       
	      </div><!--modal Body-->      
	      <div class="modal-footer">
	        <button @click="ClearForm()" type="button" class="btn btn-danger btn-flat btn-sm close-form" data-dismiss="modal">Close</button>
	        <button type="submit" class="btn btn-primary btn-flat btn-sm">
	        	<span v-show="!editMode">Save</span>
	        	<span v-show="editMode">Update</span>
	    	</button>
	      </div><!--modal-footer-->
  	  </form><!-- </form> -->


    </div>
  </div>
</div>

	

</span>	
</template>
<script>

	import { mapState } from 'vuex' //for user MapState

	export default {
		name: "customerMasterFormForAdmin",
		 data () {
	      return {
	        editMode: false, //Use this for add edit using the same form   
	        CustomerGroups: [
			      { name: 'Default' },
			      { name: 'Wholesale' },
			    ],

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          name: '',
	          email: '',
	          phone: '',
	          password: '',
	          password_confirmation:'',
	          customer_group:'',
	          status_id: '',
	          enable_notify: '',
	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 'CustomerForAdminStore', ['pagination'] ),
	        ...mapState( 'commonStoreForAll', ['userStatus'] ) /*userStatus get form commonSotreForAll*/	        
      	},

	    methods:{
	    	//this event call from CustomerList component
	    	addCustomer(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.name.focus(); 
                }, 600);
	    	},

	    	//this event call from CustomerList component
	    	editCustomer(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.name.focus();    		
	    	},

	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  //this.form.post('/spa/Customer-Info')
			  this.form.post('/spa/customer-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#customerModal').modal('hide');			      
			    }
			    if(data.errors){
			      toastr.warning(data.errors); 
			    }
			  })
			  .catch( () => {
			    this.$Progress.fail();
			    toastr.warning('Something is wrong!');
			  })            
			},

			updateFormData(){         
				//console.log('Update is working!'); 
				this.$Progress.start(); //using progress-bar package

				this.form.put('/spa/customer-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 

				     $('#customerModal').modal('hide');
				    //  this.$refs.name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
				    }
				    if(data.errors){
				      toastr.warning(data.errors); 
				    }
				  })
				  .catch( () => {
				    this.$Progress.fail();
				    toastr.warning('Something is wrong!');
				  }) 
			},


	    },

	    created(){
	    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

            FireEvent.$on('AfterChange', () => {
		        this.$Progress.start();
          		this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
          		this.$Progress.finish();
            });

	    	//this event call from CustomerList component
	    	FireEvent.$on('editCustomer', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editCustomer(data);
            });

	    	//this event call from CustomerList component
            FireEvent.$on('addCustomer', () => {
              this.addCustomer();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
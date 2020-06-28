<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="branchModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Branch</span>
        	<span v-show="editMode">Update Branch</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body ">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-8 col-sm-6">

	          		<div class="form-group">
	                  <label>Branch Name *</label>
	                    <input v-model="form.branch_name" type="text" ref="branch_name" name="branch_name" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_name') }" placeholder="Branch Name">
	                  <has-error :form="form" field="branch_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Branch Code</label>
                        <input v-model="form.branch_code" type="text" ref="branch_code" name="branch_code" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_code') }" placeholder="Enter business type">
                      <has-error :form="form" field="branch_code"></has-error>
                    </div>	                  

	                <div class="form-group">
	                  <label for="branch_code">Descsiption</label>
	                    <textarea v-model="form.branch_desc" ref="branch_desc" name="branch_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_desc') }" placeholder="Business Descsiption"></textarea>
	                  <has-error :form="form" field="branch_desc"></has-error>
	                </div>

	                <div class="form-group">
	                  <label for="branch_address">Address</label>
	                    <textarea v-model="form.branch_address" ref="branch_address" name="branch_address" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_address') }" placeholder="Address"></textarea>
	                  <has-error :form="form" field="branch_address"></has-error>
	                </div>

	                <div class="row">
	                  <div class="col-md-3">
	                  	<div class="form-group">
	                      <label>Zone</label>
	                        <input v-model="form.zone" type="text" ref="zone" name="zone" class="form-control" :class="{ 'is-invalid': form.errors.has('zone') }" placeholder="zone">
	                      <has-error :form="form" field="zone"></has-error>
	                    </div>
	                  </div>
	                  <div class="col-md-3">
	                  	<div class="form-group">
	                      <label>City</label>
	                        <input v-model="form.city" type="text" ref="city" name="city" class="form-control" :class="{ 'is-invalid': form.errors.has('city') }" placeholder="City">
	                      <has-error :form="form" field="city"></has-error>
	                    </div>
	                  </div>

	                  <div class="col-md-3">
	                  	<div class="form-group">
	                      <label>State</label>
	                        <input v-model="form.state" type="text" ref="state" name="state" class="form-control" :class="{ 'is-invalid': form.errors.has('state') }" placeholder="State">
	                      <has-error :form="form" field="state"></has-error>
	                    </div>
	                  </div>

	                  <div class="col-md-3">
	                  	<div class="form-group">
	                      <label>Country</label>
	                        <input v-model="form.country" type="text" ref="country" name="country" class="form-control" :class="{ 'is-invalid': form.errors.has('country') }" placeholder="Country">
	                      <has-error :form="form" field="country"></has-error>
	                    </div>
	                  </div>
	                </div>

	          	</div>
	          	<div class="col-md-4 col-sm-6">

	                <div class="row">
	                  <div class="col-md-12">
	                	<div class="form-group">
	                      <label>Phone</label>
	                        <input v-model="form.branch_phone" type="text" ref="branch_phone" name="branch_phone" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_phone') }" placeholder="Phone">
	                      <has-error :form="form" field="branch_phone"></has-error>
	                    </div>

	                    <div class="form-group">
	                      <label>Email</label>
	                        <input v-model="form.branch_email" type="text" ref="branch_email" name="branch_email" class="form-control" :class="{ 'is-invalid': form.errors.has('branch_email') }" placeholder="Email">
	                      <has-error :form="form" field="branch_email"></has-error>
	                    </div>

	                    
	               	  </div>
	                </div>

	                <div class="form-check">
	                  <input v-model="form.is_enabled" type="checkbox" class="form-check-input" ref="is_enabled" name="is_enabled" id="checkbox" value="1">
	                  <label class="form-check-label" for="checkbox" >Is Active</label>
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
	export default {
		 data () {
	      return {
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          //org_id:'',
	          branch_name: '',
	          branch_code: '',
	          branch_desc: '',
	          branch_address: '',
	          branch_email: '',
	          branch_phone: '',
	          zone: '',
	          city: '',
	          state: '',
	          country: '',
	          is_enabled: '',
	          
	        })
	      }
	    },//end data

	    methods:{
	    	addBranch(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.branch_name.focus(); 
                }, 600);
	    	},

	    	editBranch(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.branch_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.branch_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/Branch-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#branchModal').modal('hide');			      
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

				this.form.put('/spa/Branch-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 

				     $('#branchModal').modal('hide');
				    //  this.$refs.branch_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
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
	    	FireEvent.$on('editBranch', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editBranch(data);
            });

            FireEvent.$on('addBranch', () => {
              this.addBranch();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
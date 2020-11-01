<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Payment Status</span>
        	<span v-show="editMode">Update Payment Status</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-12 col-sm-12">

	          		<div class="form-group">
	                  <label>Payment Status *</label>
	                    <input v-model="form.payment_status_name" type="text" ref="payment_status_name" name="payment_status_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('payment_status_name') }" placeholder="Payment Status">
	                  <has-error :form="form" field="payment_status_name"></has-error>
	                </div>


                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.payment_status_desc" ref="payment_status_desc" name="payment_status_desc" class="form-control form-control-sm" placeholder="Details"></textarea>
                    </div>

                    <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>


	          	</div>	          	                     	
	          	</div><!-- row inside form -->
	            

	          </div> 
	       
	      </div><!--modal Body-->      
	      <div class="modal-footer">
	        <button @click="ClearForm()" type="button" class="btn btn-danger btn-flat btn-sm close-form" data-dismiss="modal">Close</button>
	        <button type="submit" class="btn btn-primary btn-flat btn-sm">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i> Update</span>
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
	          payment_status_name: '',
	          payment_status_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addPaymentStatus(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.payment_status_name.focus();
                }, 600);
	    	},

	    	editPaymentStatus(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.payment_status_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.payment_status_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/payment-status-info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#formModal').modal('hide');			      
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

				this.form.put('/spa/payment-status-info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#formModal').modal('hide');
				    //  this.$refs.payment_status_name.focus(); 
				    
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
	    	FireEvent.$on('editPaymentStatus', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editPaymentStatus(data);
            });

            FireEvent.$on('addPaymentStatus', () => {
              this.addPaymentStatus();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
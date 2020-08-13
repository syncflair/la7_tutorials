<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="VatRateModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Vat Rate</span>
        	<span v-show="editMode">Update Vat Rate</span>
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
	                  <label>Vat Title *</label>
	                    <input v-model="form.vat_name" type="text" ref="vat_name" name="vat_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('vat_name') }" placeholder="Vat Title">
	                  <has-error :form="form" field="vat_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Vat Code</label>
                        <input v-model="form.vat_code" type="text" ref="vat_code" name="vat_code" class="form-control  form-control-sm" :class="{ 'is-invalid': form.errors.has('vat_code') }" placeholder="Enter Vat code">
                      <has-error :form="form" field="vat_code"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Vat Rate *</label>
                        <input v-model="form.vat_rate" type="text" ref="vat_rate" name="vat_rate" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('vat_rate') }" placeholder="Enter Vat Rate">
                      <has-error :form="form" field="vat_rate"></has-error>
                    </div>

                    <div class="form-group">
			          <label for="role_id"">Vat Type *</label>
		              <select v-model="form.vat_type" class="form-control form-control-sm" id="vat_type" name="vat_type" :class="{ 'is-invalid': form.errors.has('vat_type') }" >
		              	  <option disabled value="">Select Vat Type ..</option>                
		                  <option v-for="v_type in VatTypes" v-bind:value="v_type.name">
		                  	{{v_type.name}}
		                  </option>			                  
		               </select>
		               <has-error :form="form" field="vat_type"></has-error>			                      
			        </div>

                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.vat_desc" ref="vat_desc" name="vat_desc" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('vat_desc') }" placeholder="Length details"></textarea>
                      <has-error :form="form" field="vat_desc"></has-error>
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
	          
	        VatTypes: [
			      { name: 'Percent' },
			      { name: 'Fixed' },
			    ],  

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          vat_name: '',
	          vat_code: '',
	          vat_rate: '',
	          vat_desc: '',
	          vat_type: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addVatRate(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.vat_name.focus();
                }, 600);
	    	},

	    	editVatRate(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.vat_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.vat_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/VatRate-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#VatRateModal').modal('hide');			      
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

				this.form.put('/spa/VatRate-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#VatRateModal').modal('hide');
				    //  this.$refs.vat_name.focus(); 
				    
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
	    	FireEvent.$on('editVatRate', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editVatRate(data);
            });

            FireEvent.$on('addVatRate', () => {
              this.addVatRate();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
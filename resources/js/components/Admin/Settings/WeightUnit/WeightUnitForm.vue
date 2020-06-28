<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="WeightUnitModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Weight Unit</span>
        	<span v-show="editMode">Update Weight Unit</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="ClearForm()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-12 col-sm-12">

	          		<div class="form-group">
	                  <label>Weight Unit Name *</label>
	                    <input v-model="form.weight_title" type="text" ref="weight_title" name="weight_title" class="form-control" :class="{ 'is-invalid': form.errors.has('weight_title') }" placeholder="Weight Unit Name">
	                  <has-error :form="form" field="weight_title"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Unit</label>
                        <input v-model="form.weight_unit" type="text" ref="weight_unit" name="weight_unit" class="form-control" :class="{ 'is-invalid': form.errors.has('weight_unit') }" placeholder="Enter Weight Unit code">
                      <has-error :form="form" field="weight_unit"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Value</label>
                        <input v-model="form.weight_value" type="text" ref="weight_value" name="weight_value" class="form-control" :class="{ 'is-invalid': form.errors.has('weight_value') }" placeholder="Enter Weight Unit value">
                      <has-error :form="form" field="weight_value"></has-error>
                    </div>

                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.weight_desc" ref="weight_desc" name="weight_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('weight_desc') }" placeholder="Weight details"></textarea>
                      <has-error :form="form" field="weight_desc"></has-error>
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
	      	// NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	       //  ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          weight_title: '',
	          weight_unit: '',
	          weight_value: '',
	          weight_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addWeightUnit(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.weight_title.focus(); 
                }, 600);
	    	},

	    	editWeightUnit(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.weight_title.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.weight_title.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/WeightUnit-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#WeightUnitModal').modal('hide');			      
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

				this.form.put('/spa/WeightUnit-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#WeightUnitModal').modal('hide');
				    //  this.$refs.weight_title.focus(); 
				    
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
	    	FireEvent.$on('editWeightUnit', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editWeightUnit(data);
            });

            FireEvent.$on('addWeightUnit', () => {
              this.addWeightUnit();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
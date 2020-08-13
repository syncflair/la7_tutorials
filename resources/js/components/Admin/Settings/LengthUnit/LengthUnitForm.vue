<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="LengthUnitModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Length Unit</span>
        	<span v-show="editMode">Update Length Unit</span>
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
	                  <label>Lentht Unit Name *</label>
	                    <input v-model="form.length_title" type="text" ref="length_title" name="length_title" class="form-control" :class="{ 'is-invalid': form.errors.has('length_title') }" placeholder="Length Unit Name">
	                  <has-error :form="form" field="length_title"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Unit</label>
                        <input v-model="form.length_unit" type="text" ref="length_unit" name="length_unit" class="form-control" :class="{ 'is-invalid': form.errors.has('length_unit') }" placeholder="Enter Length Unit code">
                      <has-error :form="form" field="length_unit"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Value</label>
                        <input v-model="form.length_value" type="text" ref="length_value" name="length_value" class="form-control" :class="{ 'is-invalid': form.errors.has('length_value') }" placeholder="Enter Length Unit value">
                      <has-error :form="form" field="length_value"></has-error>
                    </div>

                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.length_desc" ref="length_desc" name="length_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('length_desc') }" placeholder="Length details"></textarea>
                      <has-error :form="form" field="length_desc"></has-error>
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
	      	// NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	       //  ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          length_title: '',
	          length_unit: '',
	          length_value: '',
	          length_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addLengthUnit(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.length_title.focus();
                }, 600);
	    	},

	    	editLengthUnit(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.length_title.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.length_title.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/LengthUnit-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#LengthUnitModal').modal('hide');			      
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

				this.form.put('/spa/LengthUnit-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#LengthUnitModal').modal('hide');
				    //  this.$refs.length_title.focus(); 
				    
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
	    	FireEvent.$on('editLengthUnit', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editLengthUnit(data);
            });

            FireEvent.$on('addLengthUnit', () => {
              this.addLengthUnit();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Specification</span>
        	<span v-show="editMode">Update Specification</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-12 col-sm-12">

	          		<div class="form-group">
	                  <label>Specification title *</label>
	                    <input v-model="form.specification_name" type="text" ref="specification_name" name="specification_name" class="form-control" :class="{ 'is-invalid': form.errors.has('specification_name') }" placeholder="Specification Title">
	                  <has-error :form="form" field="specification_name"></has-error>
	                </div>
	               
                  	<!-- <div class="form-group">
                      <label>Code</label>
                        <input v-model="form.specification_code" type="text" ref="specification_code" name="specification_code" class="form-control" :class="{ 'is-invalid': form.errors.has('specification_code') }" placeholder="Enter Code">
                      <has-error :form="form" field="specification_code"></has-error>
                    </div>	 -->


                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.specification_desc" ref="specification_desc" name="specification_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('specification_desc') }" placeholder="Enter details"></textarea>
                      <has-error :form="form" field="specification_desc"></has-error>
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
	          specification_name: '',
	          //specification_code: '',
	          specification_desc: '',
	          is_enabled: '',	          
	        })
	      }
	    },//end data

	    methods:{

	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();
	    		// setTimeout(() => {
	    		// 	this.$refs.specification_name.focus(); 
       //          }, 600);
	    	},

	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.specification_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.specification_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/Specification-Info')
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

				this.form.put('/spa/Specification-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#formModal').modal('hide');
				    //  this.$refs.specification_name.focus(); 
				    
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
	    	FireEvent.$on('editData', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editData(data);
            });

            FireEvent.$on('addData', () => {
              this.addData();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
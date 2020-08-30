<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="DepartmentModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Department</span>
        	<span v-show="editMode">Update Department</span>
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
	                  <label>Department Name *</label>
	                    <input v-model="formData.dept_name" type="text" ref="dept_name" name="dept_name" class="form-control" placeholder="Department Name">
	                  <!-- <span class="text-danger">{{ errors.subtitle?errors.dept_name[0]:"" }}</span> -->
	                  <span class="text-danger">{{ errors.get('dept_name') }}</span>
	                </div>
	                <!-- <div class="form-group">
	                  <label>Department Name *</label>
	                    <input v-model="form.dept_name" type="text" ref="dept_name" name="dept_name" class="form-control" :class="{ 'is-invalid': form.errors.has('dept_name') }" placeholder="Department Name">
	                  <has-error :form="form" field="dept_name"></has-error>
	                </div> -->

                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="formData.dept_desc" ref="dept_desc" name="dept_desc" class="form-control" placeholder="Department details"></textarea>
                      <!-- <span class="text-danger">{{ errors.dept_desc?errors.dept_desc[0]:"" }}</span> -->
	                  <span class="text-danger">{{ errors.get('dept_desc') }}</span>

                    </div>

                    <!-- <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.dept_desc" ref="dept_desc" name="dept_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('dept_desc') }" placeholder="Department details"></textarea>
                      <has-error :form="form" field="dept_desc"></has-error>
                    </div> -->
             

	                <div class="form-check">
                      <input v-model="formData.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <!-- <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div> -->


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
  	 <!--  {{errors}} -->
  	 {{errors.dept_name}}

    </div>
  </div>
</div>


</span>	
</template>
<script>

	class Erorrs {
		constructor(){
			this.errors = {};
		}

		//this field get from form input error field like errors.get('name')
		get(field){
			if(this.errors[field]){
				return this.errors[field][0];
			}
		}

		record(errors){
			this.errors = errors.errors;
		}
	}




	export default {
		 name: "DepartmentMasterForm",
		 data () {
	      return {
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        // form: new Form({
	        //   id: '',
	        //   dept_name: '',
	        //   dept_desc: '',
	        //   is_enabled: '',	          
	        // }),

	        formData:{
	        	id:'',
	        	dept_name:'',
	        	dept_desc:'',
	        	is_enabled:'',
	        },
	        //errors:{},
	        errors: new Erorrs(),

	      }
	    },//end data
	    
	    computed: {
      	
      	},

	    methods:{

	    	addDepartment(){
	    		this.editMode = false;
	    		this.formData = {};		
	    		this.errors.errors={}; //return empty errors to  errors constructor inside error class         
	    		//this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.dept_name.focus();
                }, 600);
	    	},

	    	editDepartment(data){
	    		this.editMode = true;
	    		//this.form.reset(); 
	    		//this.form.fill(data); 
	    		this.formData = {};	
	    		this.errors.errors={}; //return empty errors to  errors constructor inside error class 
	    		this.formData = data; //fill the form when update	 
	    		//this.$refs.dept_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        //this.form.reset();  //reset from after submit
		        //this.form.clear(); 
		        //this.$refs.dept_name.focus()
		        this.formData = {};
		        this.errors.errors={}; //return empty errors to  errors constructor inside error class 
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  axios.post('/spa/Department-Info', this.formData)
			  //this.form.post('/spa/Department-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      //this.form.reset();  //reset from after submit
			      this.formData = {};
		          this.errors.errors={}; //return empty errors to  errors constructor inside error class 

			      $('#DepartmentModal').modal('hide');			      
			    }
			    if(data.errors){
			      toastr.warning(data.errors); 
			    }
			  })
			  .catch( (error) => {
			    this.$Progress.fail();
			    //toastr.warning('Something is wrong!');
			    // this.errors = error.response.data;
			    this.errors.record(error.response.data); //send data to Erorrs class
			  })            
			},

			updateFormData(){         
				//console.log('Update is working!'); 
				this.$Progress.start(); //using progress-bar package

				axios.put('/spa/Department-Info/'+this.formData.id, this.formData)
				// this.form.put('/spa/Department-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      //this.form.reset();  //reset from after submit
				      this.formData = {};
		        	  this.errors.errors={}; //return empty errors to  errors constructor inside error class 
				      this.editMode = false; 
				     $('#DepartmentModal').modal('hide');
				    //  this.$refs.dept_name.focus(); 
				    
				    }
				    if(data.errors){
				      toastr.warning(data.errors); 
				    }
				  })
				  .catch( () => {
				    this.$Progress.fail();
				    //toastr.warning('Something is wrong!');
				     this.errors.record(error.response.data); //send data to Erorrs class
				  }) 
			},


	    },

	    created(){
	    	FireEvent.$on('editDepartment', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editDepartment(data);
            });

            FireEvent.$on('addDepartment', () => {
              this.addDepartment();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header 	pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Account Head</span>
        	<span v-show="editMode">Update - {{form.ah_name}}</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-1 ">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-12 col-sm-12">

	          		<div class="form-group">
	                  <label>Head Name *</label>
	                    <input v-model="form.ah_name" type="text" ref="ah_name" name="ah_name" class="form-control" :class="{ 'is-invalid': form.errors.has('ah_name') }" placeholder="Head Name">
	                  <has-error :form="form" field="ah_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Code</label>
                        <input v-model="form.ah_code" type="text" ref="ah_code" name="ah_code" class="form-control" :class="{ 'is-invalid': form.errors.has('ah_code') }" placeholder="Enter Code">
                      <has-error :form="form" field="ah_code"></has-error>
                    </div>

                    <div class="form-group">
                      <label>Select Parent</label>

                      <select v-model="form.parent_id" name="parent_id" class="form-control">
                          <option disabled value=""> Select Parent </option>
                          <option v-bind:value="null"> Parent </option>
                          <option v-for="parentAH in allAccountHeads" :key="parentAH.id" v-bind:value="parentAH.id">
                            {{parentAH.ah_name}}
                          </option>
                      </select>
                    </div>	                  

	                <div class="form-group">
	                  <label for="ah_desc">Detials</label>
	                    <textarea v-model="form.ah_desc" ref="ah_desc" name="ah_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('ah_desc') }" placeholder="Account Head Descsiption"></textarea>
	                  <has-error :form="form" field="ah_desc"></has-error>
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

	import { mapState } from 'vuex' //for user MapState

	export default {
		 data () {
	      return {
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          ah_name: '',
	          ah_code: '',
	          ah_desc: '',
	          parent_id: '',
	          is_enabled: ''	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 
	             'AccountHeadsMasterSotre', ['allAccountHeads']
	        ),
	      },

	    methods:{
	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.ah_name.focus(); 
                }, 600);
	    	},

	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.ah_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.ah_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/AccountHeads-Info')
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

				this.form.put('/spa/AccountHeads-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 

				     $('#formModal').modal('hide');
				    //  this.$refs.ah_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
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
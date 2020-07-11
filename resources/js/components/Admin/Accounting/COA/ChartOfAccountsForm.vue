<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="ChartOfAccountsModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header 	pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add COA</span>
        	<span v-show="editMode">Update COA</span>
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
	                  <label>COA Name *</label>
	                    <input v-model="form.coa_name" type="text" ref="coa_name" name="coa_name" class="form-control" :class="{ 'is-invalid': form.errors.has('coa_name') }" placeholder="COA Name">
	                  <has-error :form="form" field="coa_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>COA Code</label>
                        <input v-model="form.coa_code" type="text" ref="coa_code" name="coa_code" class="form-control" :class="{ 'is-invalid': form.errors.has('coa_code') }" placeholder="Enter Code">
                      <has-error :form="form" field="coa_code"></has-error>
                    </div>

                    <div class="form-group">
                      <label>Select Parent</label>

                      <select v-model="form.parent_id" name="parent_id" class="form-control">
                          <option disabled value=""> Select Parent </option>
                          <option v-bind:value="null">Parent </option>
                          <option v-for="parentCat in ChartOfAccounts" :key="parentCat.id" v-bind:value="parentCat.id">
                            {{parentCat.coa_name}}
                          </option>
                      </select>
                    </div>	                  

	                <div class="form-group">
	                  <label for="coa_desc">Detials</label>
	                    <textarea v-model="form.coa_desc" ref="coa_desc" name="coa_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('coa_desc') }" placeholder="Business Descsiption"></textarea>
	                  <has-error :form="form" field="coa_desc"></has-error>
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
	          coa_name: '',
	          coa_code: '',
	          coa_desc: '',
	          parent_id: '',
	          is_enabled: ''	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 
	             'ChartOfAccounts', ['ChartOfAccounts']
	        ),
	      },

	    methods:{
	    	addChartOfAccouts(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.coa_name.focus(); 
                }, 600);
	    	},

	    	editChartOfAccouts(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.coa_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.coa_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/ChartOfAccounts-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#ChartOfAccountsModal').modal('hide');			      
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

				this.form.put('/spa/ChartOfAccounts-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 

				     $('#ChartOfAccountsModal').modal('hide');
				    //  this.$refs.coa_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
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
	    	FireEvent.$on('editChartOfAccouts', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editChartOfAccouts(data);
            });

            FireEvent.$on('addChartOfAccouts', () => {
              this.addChartOfAccouts();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
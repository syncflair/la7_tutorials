<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="DistrictModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add District</span>
        	<span v-show="editMode">Update District</span>
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
	                  <label>Division Name *</label>
	                    <input v-model="form.district_name" type="text" ref="district_name" name="district_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('district_name') }" placeholder="Division Name">
	                  <has-error :form="form" field="district_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Division Name (BN)</label>
                        <input v-model="form.district_name_lang" type="text" ref="district_name_lang" name="district_name_lang" class="form-control  form-control-sm" :class="{ 'is-invalid': form.errors.has('district_name_lang') }" placeholder="Enter Division Name (BN) ">
                      <has-error :form="form" field="district_name_lang"></has-error>
                    </div>	


                    <div class="form-group">
			          <label for="role_id"">Division*</label>
		              <select v-model="form.division_id" class="form-control form-control-sm" id="division_id" name="division_id" :class="{ 'is-invalid': form.errors.has('division_id') }" >
		              	  <option disabled value="">Select Division ..</option>                
		                  <option v-for="division in Divisions" v-bind:value="division.id">
		                  	{{division.division_name}}
		                  </option>			                  
		               </select>
		               <has-error :form="form" field="division_id"></has-error>			                      
			        </div>

                    <div class="form-group">
                      <label >Details</label>
                        <textarea v-model="form.district_desc" ref="district_desc" name="district_desc" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('district_desc') }" placeholder="Details"></textarea>
                      <has-error :form="form" field="district_desc"></has-error>
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
	          district_name: '',
	          district_name_lang: '',
	          district_desc: '',
	          division_id: '',	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 
	             'commonStoreForAll', ['Divisions']
	          ),
	    },


	    methods:{

	    	addDistrict(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.district_name.focus();
                }, 600);
	    	},

	    	editDistrict(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.district_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.district_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/District-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#DistrictModal').modal('hide');			      
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

				this.form.put('/spa/District-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#DistrictModal').modal('hide');
				    //  this.$refs.district_name.focus(); 
				    
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
	    	//for options
	    	this.$store.dispatch('commonStoreForAll/fetchDivisionList'); //get for Division list for options

	    	FireEvent.$on('editDistrict', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editDistrict(data);
            });

            FireEvent.$on('addDistrict', () => {
              this.addDistrict();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
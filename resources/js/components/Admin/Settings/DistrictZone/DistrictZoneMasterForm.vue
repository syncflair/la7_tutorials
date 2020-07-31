<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="DistrictZoneModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Zone/Area</span>
        	<span v-show="editMode">Update Zone/Area</span>
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

	          		

	                <div class="form-group row">
			            <label for="zone_name" class="col-sm-3 col-form-label">Zone Name *</label>
			            <div class="col-sm-9">
			            	<input v-model="form.zone_name" type="text" ref="zone_name" name="zone_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('zone_name') }" placeholder="Zone Name">
	                  		<has-error :form="form" field="zone_name"></has-error>
			            </div>
			        </div>

			        <div class="form-group row">
			            <label for="" class="col-sm-3 col-form-label">Zone Name (BN)</label>
			            <div class="col-sm-9">
			            	<input v-model="form.zone_name_lang" type="text" ref="zone_name_lang" name="zone_name_lang" class="form-control  form-control-sm" :class="{ 'is-invalid': form.errors.has('zone_name_lang') }" placeholder="Enter Zone Name (BN) ">
                      	<has-error :form="form" field="zone_name_lang"></has-error>
			            </div>
			        </div>

			        <div class="form-group row">
			            <label for="" class="col-sm-3 col-form-label">Zip Code</label>
			            <div class="col-sm-9">
			            	<input v-model="form.zip_code" type="text" ref="zip_code" name="zip_code" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('zip_code') }" placeholder="Zip Code">
	                  		<has-error :form="form" field="zip_code"></has-error>
			            </div>
			        </div>

			        <div class="form-group row">
			            <label for="" class="col-sm-3 col-form-label">District*</label>
			            <div class="col-sm-9">
			              <select v-model="form.district_id" class="form-control form-control-sm" id="district_id" name="district_id" :class="{ 'is-invalid': form.errors.has('district_id') }" >
			              	  <option disabled value="">Select District ..</option>                
			                  <option v-for="district in Districts" v-bind:value="district.id">
			                  	{{district.district_name}}
			                  </option>			                  
			               </select>
			               <has-error :form="form" field="district_id"></has-error>
			            </div>
			        </div>

					<div class="form-group row">
			            <label for="" class="col-sm-3 col-form-label">Police Station</label>
			            <div class="col-sm-9">
			            	<input v-model="form.police_station" type="text" ref="police_station" name="police_station" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('police_station') }" placeholder="Police station">
	                       <has-error :form="form" field="police_station"></has-error>
			            </div>
			        </div>	

			        <div class="form-group row">
			            <label for="" class="col-sm-3 col-form-label">Details</label>
			            <div class="col-sm-9">
			            	<textarea v-model="form.zone_desc" ref="zone_desc" name="zone_desc" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('zone_desc') }" placeholder="Details"></textarea>
                      		<has-error :form="form" field="zone_desc"></has-error>
			            </div>
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
		 name: "DistrictZoneMasterForm",
		 data () {
	      return {
	        editMode: false, //Use this for add edit using the same form   

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          zone_name: '',
	          zone_name_lang: '',
	          zip_code:'',
	          zone_desc: '',
	          police_station:'',
	          district_id: '',	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 
	             'commonStoreForAll', ['Districts']
	          ),
	    },


	    methods:{

	    	addDistrictZone(){
	    		this.editMode = false;
	    		this.form.reset();
	    		setTimeout(() => {
	    			this.$refs.zone_name.focus();
                }, 600);
	    	},

	    	editDistrictZone(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.zone_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.zone_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/DistrictZone-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#DistrictZoneModal').modal('hide');			      
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

				this.form.put('/spa/DistrictZone-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				     $('#DistrictZoneModal').modal('hide');
				    //  this.$refs.zone_name.focus(); 
				    
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
	    	this.$store.dispatch('commonStoreForAll/fetchDistrictList'); //get for Division list for options

	    	FireEvent.$on('editDistrictZone', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editDistrictZone(data);
            });

            FireEvent.$on('addDistrictZone', () => {
              this.addDistrictZone();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
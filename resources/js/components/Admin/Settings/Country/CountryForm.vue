<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="countryModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Currency</span>
        	<span v-show="editMode">Update Currency</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
		          	<div class="col-md-6 col-sm-6">

		          		<div class="form-group">
		                  <label>Country name *</label>
		                    <input v-model="form.country_name" type="text" ref="country_name" name="country_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('country_name') }" placeholder="Country name">
		                  <has-error :form="form" field="country_name"></has-error>
		                </div>


	                    <div class="form-group">
	                      <label>Phone Code</label>
	                        <input v-model="form.phone_code" type="text" ref="phone_code" name="phone_code" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('phone_code') }" placeholder="Enter Phone Code">
	                      <has-error :form="form" field="phone_code"></has-error>
	                    </div>


	                    <div class="form-group">
	                      <label>Currency Code</label>
	                        <input v-model="form.currency" type="text" ref="currency" name="currency" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('currency') }" placeholder="Enter Currency Code">
	                      <has-error :form="form" field="currency"></has-error>
	                    </div>
		               
	                </div>


		          	<div class="col-md-6 col-sm-6">

		          		<div class="form-group">
	                      <label>ISO 2</label>
	                        <input v-model="form.iso_2" type="text" ref="iso_2" name="iso_2" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('iso_2') }" placeholder="Enter ISO 2">
	                      <has-error :form="form" field="iso_2"></has-error>
	                    </div>	

	                    <div class="form-group">
	                      <label>ISO 3</label>
	                        <input v-model="form.iso_3" type="text" ref="iso_3" name="iso_3" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('iso_3') }" placeholder="Enter ISO 3">
	                      <has-error :form="form" field="iso_3"></has-error>
	                    </div>	


	                    <!-- <div class="form-group">
	                      <label>Icon (FontAwesome)</label>
	                        <input v-model="form.country_flag" type="text" ref="country_flag" name="country_flag" class="form-control" :class="{ 'is-invalid': form.errors.has('country_flag') }" placeholder="Font Awesome Icon">
	                      <has-error :form="form" field="country_flag"></has-error>
	                    </div> -->

	                    <div class="row pt-3">
	                      <div class="col-md-9">
	                        <div class="form-group">
	                          <label for="country_flag">Image</label>
	                          <input @change="onImageChange" type="file" ref="country_flag" name="country_flag" class="form-control" />
	                          <!-- @change="updateCatImg" -->
	                        </div>
	                      </div>
	                      <div class="col-md-3">

	                        <span v-if="ShowOnChangeImage != null">
	                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
	                        </span>
	                        
	                        <span v-else>
	                         <img v-if="form.country_flag == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
	                         <img v-if="form.country_flag === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
	                         <img v-else-if="form.country_flag === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
	                          <img v-else-if="form.country_flag != '' " :src="'../'+form.country_flag" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
	                        </span>                        
	                        
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
	export default {
		 data () {
	      return {
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          country_name: '',
	          iso_2: '',
	          iso_3: '',
	          phone_code: '',
	          currency: '',
	          country_flag: '',          
	        })
	      }
	    },//end data

	    methods:{
	    	onImageChange(e){
		        //let file = e.target.files || e.dataTransfer.files;
		        let file = e.target.files[0];        
		        //console.log(file);
		        this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
		        let reader = new FileReader();
		        //let vm = this;
		        if(file['size'] > 512000 ){  //512Kb = 512000Byte
		          toastr.warning('Please select file size within 500kb');
		        }else{          
		          reader.onloadend = (file) => {
		            //console.log(reader.result);
		            this.form.country_flag = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addCountry(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.country_name.focus(); 
                }, 600);
	    	},

	    	editCountry(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.country_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.country_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/Country-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.country_flag.value = ''; //clear file input tag 
			      this.ShowOnChangeImage = null;
			      $('#countryModal').modal('hide');			      
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

				this.form.put('/spa/Country-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.country_flag.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#countryModal').modal('hide');
				    //  this.$refs.country_name.focus(); 
				    
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
	    	FireEvent.$on('editCountry', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editCountry(data);
            });

            FireEvent.$on('addCountry', () => {
              this.addCountry();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
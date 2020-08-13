<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="LanguageModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Language</span>
        	<span v-show="editMode">Update Language</span>
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
	                  <label>Language Name *</label>
	                    <input v-model="form.lang_name" type="text" ref="lang_name" name="lang_name" class="form-control" :class="{ 'is-invalid': form.errors.has('lang_name') }" placeholder="Language Name">
	                  <has-error :form="form" field="lang_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Language Code</label>
                        <input v-model="form.lang_code" type="text" ref="lang_code" name="lang_code" class="form-control" :class="{ 'is-invalid': form.errors.has('lang_code') }" placeholder="Enter Language code">
                      <has-error :form="form" field="lang_code"></has-error>
                    </div>	

	                

	                <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="lang_icon">Image</label>
                          <input @change="onImageChange" type="file" ref="lang_icon" name="lang_icon" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.lang_icon == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.lang_icon === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.lang_icon === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                          <img v-else-if="form.lang_icon != '' " :src="'../'+form.lang_icon" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
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
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          lang_name: '',
	          lang_code: '',
	          lang_icon: '',
	          is_enabled: '',	          
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
		            this.form.lang_icon = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addLanguage(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.lang_name.focus(); 
                }, 600);
	    	},

	    	editLanguage(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.lang_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.lang_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/Language-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.lang_icon.value = ''; //clear file input tag 
			      this.ShowOnChangeImage = null;
			      $('#LanguageModal').modal('hide');			      
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

				this.form.put('/spa/Language-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.lang_icon.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#LanguageModal').modal('hide');
				    //  this.$refs.lang_name.focus(); 
				    
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
	    	FireEvent.$on('editLanguage', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editLanguage(data);
            });

            FireEvent.$on('addLanguage', () => {
              this.addLanguage();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
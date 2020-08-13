<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Brand</span>
        	<span v-show="editMode">Update Brand</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " enctype="multipart/form-data" >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-12 col-sm-12">

	                <div class="row">
	                	<div class="col-md-4">	                		
	                		<div class="form-group">
			                  <label>Brand Name *</label>
			                    <input v-model="form.brand_name" type="text" ref="brand_name" name="brand_name" class="form-control" :class="{ 'is-invalid': form.errors.has('brand_name') }" placeholder="Brand Name">
			                  <has-error :form="form" field="brand_name"></has-error>
			                </div>
	                	</div>
	                	<div class="col-md-8">
	                		<div class="form-group">
			                  <label>Brand URL</label>
			                    <input v-model="form.brand_url" type="text" ref="brand_url" name="brand_url" class="form-control" :class="{ 'is-invalid': form.errors.has('brand_url') }" placeholder="Brand URL">
			                  <has-error :form="form" field="brand_url"></has-error>
			                </div>
	                	</div>
	                </div>
	               

	                <!-- <div class="form-group">
	                  <label for="brand_desc">Details</label>
	                    <textarea v-model="form.brand_desc" ref="brand_desc" name="brand_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('brand_desc') }" placeholder="Details"></textarea>
	                  <has-error :form="form" field="brand_desc"></has-error>
	                </div> -->

	                <div class="form-group">
	                  <label for="brand_desc">Details 2</label>
	                  <vue-editor v-model="form.brand_desc" name="brand_desc"></vue-editor>
	                </div>

	                



	                <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>


                    <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="brand_img">Image</label>
                          <input @change="onImageChange" type="file" ref="brand_img" name="brand_img" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.brand_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.brand_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.brand_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.brand_img != '' " :src="form.brand_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
                          <!-- <img v-else-if="form.brand_img != '' " :src="'../'+form.brand_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;"> -->
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
	          brand_name: '',
	          brand_url: '',
	          brand_desc: '',
	          brand_img: '',
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
		            this.form.brand_img = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		// setTimeout(() => {
	    		// 	this.$refs.brand_name.focus(); 
       //          }, 200);
	    	},

	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.brand_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.brand_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  // const config = {
     //                headers: { 'content-type': 'multipart/form-data' }
     //            }

			  this.form.post('/spa/Brand-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.brand_img.value = ''; //clear file input tag 
			      this.ShowOnChangeImage = null;
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

				this.form.put('/spa/Brand-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.brand_img.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#formModal').modal('hide');
				    //  this.$refs.brand_name.focus(); 
				    
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
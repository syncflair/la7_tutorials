<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Brand Shop</span>
        	<span v-show="editMode">Update Brand Shop</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-0">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
		          	<div class="col-md-9 col-sm-12">

		          		<div class="form-group">
		                  <label>Brand Shop Name *</label>
		                  <input v-model="form.brand_shop_title" type="text" ref="brand_shop_title" name="brand_shop_title" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('brand_shop_title') }" placeholder="Brand Shop Name">
		                  <has-error :form="form" field="brand_shop_title"></has-error>
		                </div>


	                    <div class="form-group">
	                      <label>Details</label>
	                        <!-- <textarea v-model="form.brand_shop_desc" ref="brand_shop_desc" name="brand_shop_desc" class="form-control"  placeholder="Details"> </textarea> -->
            				<vue-editor v-model="form.brand_shop_desc" name="brand_shop_desc" class="form-control-" placeholder="Details"> </vue-editor>
	                    </div>	

	                    <div class="form-check">
	                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
	                      <label class="form-check-label" for="checkbox" >Is Active</label>
	                    </div>
	                    
	                    
		          	</div>	

		          	<div class="col-md-3 col-sm-12">

		          		<div class="row pt-3">
	                      <div class="col-md-12">
	                        <span v-if="ShowOnChangeImage != null">
	                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
	                        </span>
	                        
	                        <span v-else>
	                         <img v-if="form.bs_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
	                         <img v-if="form.bs_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
	                         <img v-else-if="form.bs_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
	                          <!-- <img v-else-if="form.bs_img != '' " :src="'../'+form.bs_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;"> -->
	                          <img v-else-if="form.bs_img != '' " :src="form.bs_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:auto;">

	                          <i v-if="deleteImageIcon" @click="deleteImage(form.id)" class="far fa-times-circle" style="cursor: pointer; background: #fff; padding: 4px 2px 2px 2px;   color: red; border-radius: 10px; margin-left: -15px;" title="click to Delete"></i>
	                        </span>       
	                      </div>	                      
	                    </div>

	                    <div class="row">
		          			<div class="col-md-12">
		                        <div class="form-group">
		                          <label for="bs_img">Image</label>
		                          <input @change="onImageChange" type="file" ref="bs_img" name="bs_img" class="form-control" />
		                          <!-- @change="updateCatImg" -->
		                        </div>
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
	        deleteImageIcon: false, //Delete Image icon if image exist
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          brand_shop_title: '',
	          brand_shop_desc: '',
	          is_enabled: '',
	          bs_img: '',          
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
		            this.form.bs_img = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.brand_shop_title.focus(); 
                }, 600);
	    	},

	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.brand_shop_title.focus(); 
	    		if(data.bs_img != null){
		            this.deleteImageIcon = true;  
		        }    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.brand_shop_title.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/BrandShop-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.bs_img.value = ''; //clear file input tag 
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

				this.form.put('/spa/BrandShop-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.bs_img.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#formModal').modal('hide');
				    //  this.$refs.brand_shop_title.focus(); 
				    
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

			deleteImage(id){ 
		        this.$Progress.start();   
		          axios.post('/spa/BrandShop-Info-DeleteImage/'+id)
		            .then(({ data }) => {
		                // this.ShowOnChangeImage = null;
		                this.deleteImageIcon = false;
		                this.form.bs_img = null;
		                this.$Progress.finish(); 
		                toastr.success(data.success);
		             })
		            .catch(() => {
		              this.$Progress.fail();
		              toastr.warning('Something is wrong!');
		            });
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
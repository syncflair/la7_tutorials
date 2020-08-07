<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Customer Group</span>
        	<span v-show="editMode">Update Customer Group</span>
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
	                  <label>Group Name*</label>
	                    <input v-model="form.group_name" type="text" ref="group_name" name="group_name" class="form-control" :class="{ 'is-invalid': form.errors.has('group_name') }" placeholder="Customer Group Name">
	                  <has-error :form="form" field="group_name"></has-error>
	                </div>

                    <div class="form-group">
                      <label>Details</label>
                       <!--  <input v-model="form.group_desc" type="text" class="form-control" name="group_desc"  placeholder="Enter Customer Group details"> -->
                        <textarea v-model="form.group_desc" ref="group_desc" name="group_desc" class="form-control"  placeholder="Details"> </textarea>
                    </div>	                

	                <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="cg_img">Image</label>
                          <input @change="onImageChange" type="file" ref="cg_img" name="cg_img" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.cg_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.cg_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.cg_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                          <!-- <img v-else-if="form.cg_img != '' " :src="'../'+form.cg_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;"> -->
                          <img v-else-if="form.cg_img != '' " :src="form.cg_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
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
	          group_name: '',
	          group_desc: '',
	          cg_img: '',
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
		            this.form.cg_img = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.group_name.focus(); 
                }, 600);
	    	},

	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.group_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.group_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar Customer Group

			  this.form.post('/spa/customerGroup-Info')
			  .then(({ data }) => { 
			  	//alert('ok');
			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.cg_img.value = ''; //clear file input tag 
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
				this.$Progress.start(); //using progress-bar Customer Group

				this.form.put('/spa/customerGroup-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.cg_img.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#formModal').modal('hide');
				    //  this.$refs.group_name.focus(); 
				    
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
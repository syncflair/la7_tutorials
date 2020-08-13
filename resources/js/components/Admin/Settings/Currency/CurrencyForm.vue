<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="currencyModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
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
	          	<div class="col-md-12 col-sm-12">

	          		<div class="form-group">
	                  <label>Currency Name *</label>
	                    <input v-model="form.currency_name" type="text" ref="currency_name" name="currency_name" class="form-control" :class="{ 'is-invalid': form.errors.has('currency_name') }" placeholder="Currency Name">
	                  <has-error :form="form" field="currency_name"></has-error>
	                </div>
	               
                  	<div class="form-group">
                      <label>Currency Code</label>
                        <input v-model="form.currency_code" type="text" ref="currency_code" name="currency_code" class="form-control" :class="{ 'is-invalid': form.errors.has('currency_code') }" placeholder="Enter currency code">
                      <has-error :form="form" field="currency_code"></has-error>
                    </div>	

                    <div class="form-group">
                      <label>Currency Value (1$)</label>
                        <input v-model="form.currency_value" type="text" ref="currency_value" name="currency_value" class="form-control" :class="{ 'is-invalid': form.errors.has('currency_value') }" placeholder="Enter currency value">
                      <has-error :form="form" field="currency_value"></has-error>
                    </div>

	                

	                <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <!-- <div class="form-group">
                      <label>Icon (FontAwesome)</label>
                        <input v-model="form.currency_icon" type="text" ref="currency_icon" name="currency_icon" class="form-control" :class="{ 'is-invalid': form.errors.has('currency_icon') }" placeholder="Font Awesome Icon">
                      <has-error :form="form" field="currency_icon"></has-error>
                    </div> -->

                    <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="currency_icon">Image</label>
                          <input @change="onImageChange" type="file" ref="currency_icon" name="currency_icon" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.currency_icon == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.currency_icon === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.currency_icon === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                          <img v-else-if="form.currency_icon != '' " :src="'../'+form.currency_icon" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
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
	          currency_name: '',
	          currency_code: '',
	          currency_value: '',
	          currency_icon: '',
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
		            this.form.currency_icon = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addCurrency(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.currency_name.focus(); 
                }, 600);
	    	},

	    	editCurrency(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.currency_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.currency_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/Currency-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.currency_icon.value = ''; //clear file input tag 
			      this.ShowOnChangeImage = null;
			      $('#currencyModal').modal('hide');			      
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

				this.form.put('/spa/Currency-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.currency_icon.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#currencyModal').modal('hide');
				    //  this.$refs.currency_name.focus(); 
				    
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
	    	FireEvent.$on('editCurrency', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editCurrency(data);
            });

            FireEvent.$on('addCurrency', () => {
              this.addCurrency();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
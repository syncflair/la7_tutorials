<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="CategoryModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header 	pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Category</span>
        	<span v-show="editMode">Update Category</span>
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
	                  <label>Category </label>
	                    <input v-model="form.cat_name" type="text" ref="cat_name" name="cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" placeholder="Category">
	                  <has-error :form="form" field="cat_name"></has-error>
	                </div>

	                <div class="form-group">
	                  <label>Category (bn) *</label>
	                    <input v-model="form.cat_name_lang" type="text" ref="cat_name_lang" name="cat_name_lang" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name_lang') }" placeholder="Category BN">
	                  <has-error :form="form" field="cat_name_lang"></has-error>
	                </div>

                    <div class="form-group">
                      <label>Select Parent</label>

                      <select v-model="form.parent_id" name="parent_id" class="form-control">
                          <option disabled value=""> Select Parent </option>
                          <option v-bind:value="null">Parent </option>
                          
                          <template v-for="parentCat in Categories" >
                          	<option v-bind:value="parentCat.id"> <span>{{parentCat.cat_name}} </span> </option>
	                        
	                        <template v-for="c_category in parentCat.child_category">
	                        	<option v-bind:value="c_category.id"> <span> -- {{c_category.cat_name}} </span>  </option>
	                        </template>

                          </template>
                          <!-- <option v-for="parentCat in Categories" :key="parentCat.id" v-bind:value="parentCat.id">
	                            {{parentCat.cat_name}}
	                        </option> -->
                      </select>
                    </div>	                  

	                <div class="form-group">
	                  <label for="cat_desc">Detials</label>
	                    <textarea v-model="form.cat_desc" ref="cat_desc" name="cat_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_desc') }" placeholder="Business Descsiption"></textarea>
	                  <has-error :form="form" field="cat_desc"></has-error>
	                </div>

	                <div class="form-check">
	                  <input v-model="form.is_enabled" type="checkbox" class="form-check-input" ref="is_enabled" name="is_enabled" id="checkbox" value="1">
	                  <label class="form-check-label" for="checkbox" >Is Active</label>
	                </div>

	                <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="cat_img">Image</label>
                          <input @change="onImageChange" type="file" ref="cat_img" name="cat_img" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.cat_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.cat_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.cat_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                          <img v-else-if="form.cat_img != '' " :src="'../'+form.cat_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
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

	import { mapState } from 'vuex' //for user MapState

	export default {
		 data () {
	      return {
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form     

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          cat_name: '',
	          cat_name_lang: '',
	          cat_desc: '',
	          parent_id: '',
	          is_enabled: '',
	          cat_img:''	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 
	             'CategoryMasterStore', ['Categories']
	        ),
	      },

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
		            this.form.cat_img = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		    },

	    	addCategory(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.cat_name.focus(); 
                }, 600);
	    	},

	    	editCategory(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		this.$refs.cat_name.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.cat_name.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  this.form.post('/spa/CategoryMaster-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      $('#CategoryModal').modal('hide');			      
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

				this.form.put('/spa/CategoryMaster-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 

				     $('#CategoryModal').modal('hide');
				    //  this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
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
	    	FireEvent.$on('editCategory', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editCategory(data);
            });

            FireEvent.$on('addCategory', () => {
              this.addCategory();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
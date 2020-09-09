<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg-" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add Customer Membership</span>
        	<span v-show="editMode">Update Customer Membership</span>
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
	                  <label>Membership Name*</label>
	                    <input v-model="form.membership_title" type="text" ref="membership_title" name="membership_title" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('membership_title') }" placeholder="Enter Title">
	                  <has-error :form="form" field="membership_title"></has-error>
	                </div>

	                <div class="form-group">
	                  <label>Discount Type</label>
	                   	  <select v-model="form.discount_type" class="form-control form-control-sm form-control-sm-" id="discount_type" name="discount_type" :class="{ 'is-invalid': form.errors.has('discount_type') }" >
                            <option disabled value="">Select discount types ..</option>                
                            <option v-for="dt in discountTypes" v-bind:value="dt.name">
                              {{dt.name}}
                            </option>                       
                          </select>
                          <has-error :form="form" field="discount_type"></has-error>
	                </div>

	                <div class="form-group">
	                  <label>Discount Value </label>
	                    <input v-model="form.discount_value" type="number" ref="discount_value" name="discount_value" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('discount_value') }" placeholder="Enter discount value (Fixed / Percent)">
	                  <has-error :form="form" field="discount_value"></has-error>
	                </div>


	                <div class="form-group">
	                  <label>Orders</label>
	                    <input v-model="form.total_orders" type="text" ref="total_orders" name="total_orders" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('total_orders') }" placeholder="Number of order needs">
	                  <has-error :form="form" field="total_orders"></has-error>
	                </div>

	                

                    <div class="form-group">
                      <label>Details</label>
                        <input v-model="form.membership_desc" type="text" class="form-control form-control-sm" name="membership_desc"  placeholder="Enter Customer Membership details">
                        <!-- <textarea v-model="form.membership_desc" ref="membership_desc" name="membership_desc" class="form-control form-control-sm"  placeholder="Details"> </textarea> -->
                    </div>

                    <div class="form-check">
                      <input v-model="form.is_free_shipping" type="checkbox" class="form-check-input" name="is_free_shipping" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Free Shipping</label>
                    </div>	                

	                <div class="form-check">
                      <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                      <label class="form-check-label" for="checkbox" >Is Active</label>
                    </div>

                    <div class="row pt-3">
                      <div class="col-md-9">
                        <div class="form-group">
                          <label for="membership_img">Image</label>
                          <input @change="onImageChange" type="file" ref="membership_img" name="membership_img" class="form-control form-control-sm" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                      <div class="col-md-3">

                        <span v-if="ShowOnChangeImage != null">
                          <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                        </span>
                        
                        <span v-else>
                         <img v-if="form.membership_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-if="form.membership_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                         <img v-else-if="form.membership_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:65px;height:65px;">
                          <!-- <img v-else-if="form.membership_img != '' " :src="'../'+form.membership_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;"> -->
                          <img v-else-if="form.membership_img != '' " :src="form.membership_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:65px;height:65px;">
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
		name: "CustomerGroupMasterForm",
		data () {
	      return {
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	
	        editMode: false, //Use this for add edit using the same form 

	        discountTypes: [
	            { name: 'Fixed' },
	            { name: 'Percent' },
	            { name: 'Shipping' },
	        ],    

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          membership_title: '',
	          discount_type:'',
	          discount_value:'',
	          total_orders:'',
	          membership_desc: '',
	          membership_img: '',
	          is_free_shipping:'',
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
		            this.form.membership_img = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		      },

	    	addCustomerMembership(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.membership_title.focus(); 
                }, 600);
	    	},

	    	editCustomerMembership(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.membership_title.focus();    		
	    	},
	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.membership_title.focus()
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar Customer Membership

			  this.form.post('/spa/customerMembership-Info')
			  .then(({ data }) => { 
			  	//alert('ok');
			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.membership_img.value = ''; //clear file input tag 
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
				this.$Progress.start(); //using progress-bar Customer Membership

				this.form.put('/spa/customerMembership-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.membership_img.value = ''; //clear file input tag 
				      this.ShowOnChangeImage = null;
				     $('#formModal').modal('hide');
				    //  this.$refs.membership_title.focus(); 
				    
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

	    	FireEvent.$on('editCustomerMembership', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editCustomerMembership(data);
            });

            FireEvent.$on('addCustomerMembership', () => {
              this.addCustomerMembership();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
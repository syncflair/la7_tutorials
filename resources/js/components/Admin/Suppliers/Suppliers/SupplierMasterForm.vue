<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="FormModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add supplier (Credential)</span>
        	<span v-show="editMode">Update supplier (Credential)</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-1">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-5 col-sm-6">

	          		<div class="form-group">
			            <label for="name">Name *</label>
			              <input v-model="form.name" type="text" ref="name" name="name" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="supplier Name">
	                  	  <has-error :form="form" field="name"></has-error>
			        </div>

	          		<div class="form-group">
			            <label for="email">Email *</label>
			              <input v-model="form.email" type="text" ref="email" name="email" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="supplier email">
	                  	  <has-error :form="form" field="email"></has-error>
			        </div>

			        <div class="form-group">
			            <label for="phone" >Phone *</label>
			            <div class="input-group input-group-sm mb-3">	                      
		                  <div class="input-group-prepend">
		                    <span class="input-group-text"><!-- <i class="fas fa-envelope"></i> --> +88 </span>
		                  </div>

		                  <input v-model="form.phone" type="number" ref="phone" name="phone" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter phone number">	 
		                  <has-error :form="form" field="phone"></has-error>                     
		                </div> 
			        </div>

			        <div class="row">
			          <div class="col-md-5">
			          	<div class="form-group">
				            <label for="supplier_type">Supplier Type *</label>
				            <select v-model="form.supplier_type" class="form-control form-control-sm-" id="supplier_type" name="supplier_type" :class="{ 'is-invalid': form.errors.has('supplier_type') }" >
			              	  <option disabled value="">Suppliers type ..</option>                
			                  <option v-for="s_type in supplierTypes" v-bind:value="s_type.name">
			                  	{{s_type.name}}
			                  </option>			                  
			                </select>
			                <has-error :form="form" field="supplier_type"></has-error>
				        </div>
			          </div>

			          <div class="col-md-7">
			          	<div class="form-group">
				            <label for="brand_shop_id">Brand Shop</label>
				            <select v-model="form.brand_shop_id" class="form-control" id="brand_shop_id" name="brand_shop_id" >
			              	  <option disabled value="">Select Brand Shop ..</option>
			              	  <option v-bind:value="null">No Brand Shop (Null) </option>                
			                  <option v-for="bs in allBrandShops" :key="bs.id" v-bind:value="bs.id">{{bs.brand_shop_title}}</option>           
			                </select>	
				        </div>
			          </div>			        	
			        </div>

			        <div class="form-group">
			          <label for="user_status">User Status *</label>
		              <select v-model="form.status_id" class="form-control" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
		              	<option disabled value="">Select user Status ..</option>                
		                <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option>     
		              </select>
		              <has-error :form="form" field="status_id"></has-error>
			        </div>

			        <div class="row">
		        	  <div class="col-md-6">
		        	  	<div class="form-group">
				            <label for="password">Password  <span v-show="editMode === false"> * </span></label>
			              	<input v-model="form.password" type="password" ref="password" name="password" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
                      		<has-error :form="form" field="password"></has-error>
				        </div>
		        	  </div>			        	
		        	  <div class="col-md-6">
		        	  	<div class="form-group">
				            <label for="password_confirmation">Password Confirm</label>
			              	<input v-model="form.password_confirmation" type="password" ref="password_confirmation" name="password_confirmation" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm Password">
                      		<has-error :form="form" field="password_confirmation"></has-error>
				        </div>
		        	  </div>
			        </div>
			        

	          	</div>

	          	<div class="col-md-5 col-sm-6">



			        <div class="form-group">
			            <label for="supplier_address">Address</label>
                        <textarea v-model="form.supplier_address" name="supplier_address" class="form-control" placeholder="Address"> </textarea>
			        </div>

			        <div class="form-group">
			            <label for="dist_zone_id">Zone / Area</label>
                        <select v-model="form.dist_zone_id" class="form-control form-control-sm-" id="dist_zone_id" name="dist_zone_id" >
			              	<option disabled value="">Select zone / Area ..</option>                
			                <option v-for="zone in Dist_Zones" :key="zone.id" v-bind:value="zone.id">{{zone.zone_name}} ({{zone.zip_code}})</option>			                  
			            </select>
			        </div>

			        <div class="form-group">
			            <label for="supplier_desc">Details</label>
                        <!-- <textarea v-model="form.supplier_desc" name="supplier_desc" class="form-control" placeholder="Supplier details"></textarea> -->
                        <vue-editor v-model="form.supplier_desc" name="supplier_desc" class="form-control-"  placeholder="Suppliyer Details"> </vue-editor>
			        </div>

	          	</div>

	          	<div class="col-md-2 col-sm-6">

	          		<div class="row">
                    	<div class="col-md-12 text-center">
                    	    <span v-if="ShowOnChangeImage != null">
                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
                            </span>
                            
                            <span v-else>
                             <img v-if="form.avatar == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                             <img v-if="form.avatar === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                             <img v-else-if="form.avatar === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                              <img v-else-if="form.avatar != '' " :src="'../'+form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;">
                            </span> 
                            <!-- <img :src="'../'+NoIconUrl"> -->
                    	</div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="avatar">Picture</label>
                          <input @change="onImageChange" type="file" ref="avatar" name="avatar" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                    </div>

	          	</div> 

	          </div><!-- row inside form -->
	            

	        </div> 
	       
	      </div><!--modal Body-->      
	      <div class="modal-footer pt-0">
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
		name: "SupplierMasterForm",

		data () {
	      return {
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	 
	        editMode: false, //Use this for add edit using the same form 

	        supplierTypes: [
			      { name: 'Person' },
			      { name: 'Organization' },
			      { name: 'Shop' },
			    ],  

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          name: '',
	          email: '',
	          phone: '',
	          password: '',
	          password_confirmation:'',
	          status_id: '',
	          supplier_type:'',
	          brand_shop_id:'',
	          supplier_desc:'',
	          supplier_address:'',
	          dist_zone_id: '',
	          avatar: '',	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 'SupplierForAdminStore', ['pagination'] ),
	        ...mapState( 'commonStoreForAll', ['allBrandShops','userStatus','Dist_Zones'] ) /*userStatus get form commonSotreForAll*/	        
      	},

	    methods:{
	    	//Make image as base64 
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
		            this.form.avatar = reader.result; //push base64 to logo veriable
		          };          
		          reader.readAsDataURL(file);
		        }
		    },


	    	//this event call from CustomerList component
	    	addData(){
	    		this.editMode = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.name.focus(); 
                }, 200);
	    	},

	    	//this event call from CustomerList component
	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		setTimeout(() => {
	    			this.$refs.name.focus(); 
                }, 200);    		
	    	},

	    	ClearForm(){
	    		this.editMode = false;
		        this.form.reset();  //reset from after submit
		        this.form.clear(); 
		        //this.$refs.name.focus()
		        this.$refs.avatar.value = ''; //clear file input tag 
			    this.ShowOnChangeImage = null;
	    	},

	    	// Submit the form via a POST request
			storeFormData() {  
			  this.$Progress.start(); //using progress-bar package

			  //this.form.post('/spa/supplier-Info')
			  this.form.post('/spa/supplier-Info')
			  .then(({ data }) => { 

			    if(data.success){ 
			      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			      toastr.success(data.success);             
			      this.$Progress.finish();  
			      this.form.reset();  //reset from after submit
			      this.$refs.avatar.value = ''; //clear file input tag 
			      this.ShowOnChangeImage = null;
			      $('#FormModal').modal('hide');			      
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

				this.form.put('/spa/supplier-Info/'+this.form.id)
				  .then(({ data }) => { 

				    if(data.success){ 
				     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
				                 
				      this.$Progress.finish(); 
				      toastr.success(data.success);               
				      this.form.reset();  //reset from after submit
				      this.editMode = false; 
				      this.$refs.avatar.value = ''; //clear file input tag 
			      	  this.ShowOnChangeImage = null;

				     $('#FormModal').modal('hide');
				    //  this.$refs.name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
				    
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
	    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
	    	this.$store.dispatch('commonStoreForAll/fetchBrandShops'); //get user status
	    	this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList'); //get user status

            FireEvent.$on('AfterChange', () => {
		        this.$Progress.start();
          		this.$store.dispatch('SupplierForAdminStore/fetchData', this.pagination.per_page);
          		this.$Progress.finish();
            });

	    	//this event call from CustomerList component
	    	FireEvent.$on('editData', (data) => {
              //alert(data.id);
              //this.form.fill(data);   //this is also work
              this.editData(data);
            });

	    	//this event call from CustomerList component
            FireEvent.$on('addData', () => {
              this.addData();
            });
	    }

	}//End Exprot Default
</script>
<style></style>
<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="FormModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header pb-1">
        <h5 class="modal-title" id="">
        	<span v-show="!editMode">Add user (Credential)</span>
        	<span v-show="editMode">Update -{{ form.name}}</span>
        </h5>
        <button @click="ClearForm()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form @submit.prevent=" editMode ? updateFormData() : storeFormData() " >
	      <div class="modal-body pt-1">

	          <div class="card--"><!-- row inside form -->
	          	<div class="row">
	          	<div class="col-md-9 col-sm-6">

	          		<div class="form-group">
			            <label>Name *</label>
			            <input v-model="form.name" type="text" ref="name" name="name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="User Name">
	                  	  <has-error :form="form" field="name"></has-error>
			        </div>

	          		<div class="form-group">
			            <label>Email *</label>
			            <input v-model="form.email" type="text" ref="email" name="email" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="User email">
	                  	  <has-error :form="form" field="email"></has-error>
			        </div>

			        <div class="form-group">
			            <label >Role *</label>
			            <select v-model="form.role_id" class="form-control form-control-sm" id="role_id" name="role_id" :class="{ 'is-invalid': form.errors.has('role_id') }" >
			              	  <option disabled value="">Select role ..</option>                
			                  <option v-for="role in adminRoles" v-bind:value="role.id">
			                  	{{role.name}}
			                  </option>			                  
			            </select>
			               <has-error :form="form" field="role_id"></has-error>	
			        </div>

			        <div class="row">
			          <div class="col-sm-6">
			          	<div class="form-group">
				          <label>User Status *</label>
				          <select v-model="form.status_id" class="form-control form-control-sm" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
				            <option disabled value="">Select user Status ..</option>                
				            <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option>			                  
				          </select>
				          <has-error :form="form" field="status_id"></has-error>
				        </div>
			          </div>
			          <div class="col-sm-6">
			          	<div class="form-group">
				          <label>Branch *</label>
				          <select v-model="form.branch_id" class="form-control form-control-sm" id="branch_id" name="branch_id" :class="{ 'is-invalid': form.errors.has('branch_id') }" >
				           	<option disabled value="">Select user Status ..</option>                
				            <option v-for="branch in branches" :key="branch.id" v-bind:value="branch.id">{{branch.branch_name}}</option>			                  
				          </select>
				          <has-error :form="form" field="branch_id"></has-error>
				        </div>
			          </div>
			        </div>
			        
			        <div class="form-group">
			            <label>Select Employee </label>
			            <div>
			              <single-select-app-one
		                      :options="selectedEmployee"
		                      @getAllDataListByIds="getSelectedDataByIdsForEmployee"
		                      :autoSearchOptions="autoSearchEmployee"
		                      @AutoCompleteSearchForData="AutoCompleteSearchForDataEmployee"                   
		                      :filterBy="filterBy"
		                      :place-holder="placeHolder"
		                      :value-property="valueProperty"
		                      v-model="form.employee_id" 
		                      :class="{ 'is-invalid': form.errors.has('employee_id') }"
		                    />
		                    <has-error :form="form" field="employee_id"></has-error>
			            </div>
			        </div>

			        <div class="row">
			          <div class="col-sm-6">
			          	<div class="form-group">
				            <label>Password  <span v-show="editMode === false"> * </span></label>
				            <input v-model="form.password" type="password" ref="password" name="password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
	                        <has-error :form="form" field="password"></has-error>
				        </div>
			          </div>
			          <div class="col-sm-6">
			          	<div class="form-group">
				            <label>Password Confirm</label>
				            <input v-model="form.password_confirmation" type="password" ref="password_confirmation" name="password_confirmation" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm Password">
	                        <has-error :form="form" field="password_confirmation"></has-error>
				        </div>
			          </div>
			        </div>

	          	</div>

	          	<div class="col-md-3 col-sm-6">

	          		<div class="row">
                    	<div class="col-md-12 text-center">
                    	    <span v-if="ShowOnChangeImage != null">                    	      
                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
                            </span>
                            
                            <span v-else>

                             <img v-if="form.avatar == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                             <img v-if="form.avatar === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                             <img v-else-if="form.avatar === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
                          	  <!-- <img v-else-if="form.avatar != '' " :src="'../'+form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;"> -->
                          	  <!-- <i  class="far fa-times-circle"></i> -->

                              <img v-else-if="form.avatar != '' " :src="form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;">
                              
                              <i v-if="deleteImageIcon" @click="deleteImage(form.id)" class="far fa-times-circle" style="cursor: pointer; background: #fff; padding: 4px 2px 2px 2px;   color: red; border-radius: 10px; margin-left: -15px;" title="click to Delete"></i>
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
	      <div class="modal-footer">
	        <button @click="ClearForm()" type="button" class="btn btn-danger btn-flat btn-sm close-form" data-dismiss="modal">Close</button>
	        <button type="submit" class="btn btn-primary btn-flat btn-sm">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i>  Update</span>
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
		name: "UserMasterForm",

		data () {
	      return {
	      	NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	
	        deleteImageIcon: false, //Delete Image icon if image exist
	        editMode: false, //Use this for add edit using the same form 

	        //form Single app
    		placeHolder:'Select Employee',
    		filterBy:'emp_name',
    		valueProperty: 'id',  

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          name: '',
	          email: '',
	          password: '',
	          password_confirmation:'',
	          role_id:'',
	          status_id: '',
	          employee_id: '',
	          branch_id: '',
	          avatar: '',	          
	        })
	      }
	    },//end data

	    computed: {
	        ...mapState( 'usersAdminStore', ['pagination','autoSearchEmployee','selectedEmployee'] ),
	        ...mapState( 'commonStoreForAll', ['userStatus','adminRoles','branches'] ) /*userStatus get form commonSotreForAll*/	        
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
	    		this.deleteImageIcon = false;
	    		this.form.reset();	    		
	    		setTimeout(() => {
	    			this.$refs.name.focus(); 
                }, 600);
	    	},

	    	//this event call from CustomerList component
	    	editData(data){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(data); 	 
	    		//this.$refs.name.focus();  
	    		if(data.avatar != null){
	    			this.deleteImageIcon = true;  
	    		}
	    		this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);		
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

			  //this.form.post('/spa/Users-Info')
			  this.form.post('/spa/Users-Info')
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

				this.form.put('/spa/Users-Info/'+this.form.id)
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

			deleteImage(id){
				this.$Progress.start(); //using progress-bar package        
		        //console.log(this.form.has_many_image);
		        axios.post('/spa/Users-Info-DeleteImage/'+id)
		          .then(({ data }) => {
		          	  this.deleteImageIcon = false;
		          	  this.form.avatar = null;
		              this.$Progress.finish(); 
		              toastr.success(data.success);
		           })
		          .catch(() => {
		            this.$Progress.fail();
		            toastr.warning('Something is wrong!');
		          });
			},

			AutoCompleteSearchForDataEmployee(data){
		        this.$store.dispatch('usersAdminStore/AutoCompleteSearchForDataEmployee', data ); 
		    },
		    getSelectedDataByIdsForEmployee(data){
		        this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);
		    },


	    },

	    created(){
	    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
	    	this.$store.dispatch('commonStoreForAll/fetchRoles'); //get user role for admin (1 to 6)
	    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branchs

            FireEvent.$on('AfterChange', () => {
		        this.$Progress.start();
          		this.$store.dispatch('usersAdminStore/fetchData', this.pagination.per_page);
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
<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Employee</span>
        	<span v-show="editMode">Update Employee</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/EmployeeMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Employees
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row">
   	  	<div class="col-md-10 offset-1">

   	  		<div class="row">
            	
            	<div class="col-9">

            		<div class="row">
		            	<div class="col-7">
		            		<div class="form-group">
				              <label>Employee Name *</label>
				                <input v-model="form.emp_name" type="text" ref="emp_name" name="emp_name" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_name') }" placeholder="Employee Name">
				              <has-error :form="form" field="emp_name"></has-error>
				            </div> 
            			</div>
            			<div class="col-5">
            				<div class="form-group">
					          <label for="job_title_id"">Title *</label>
				              <select v-model="form.job_title_id" class="form-control form-control-sm-" id="job_title_id" name="job_title_id" :class="{ 'is-invalid': form.errors.has('job_title_id') }" >
				              	  <option disabled value="">Select Job Title ..</option>                
				                  <option v-for="j_title in jobTitles" :key="j_title.id" v-bind:value="j_title.id">{{j_title.job_title_name}}</option> 
				               </select>
				               <has-error :form="form" field="job_title_id"></has-error>			                      
					        </div>
            			</div>
            		</div>	

		            <div class="row">
		            	<div class="col-6">
		            		<div class="form-group">
					          <label for="status_id"">Status *</label>
				              <select v-model="form.status_id" class="form-control form-control-sm-" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
				              	  <option disabled value="">Select Status ..</option>                
				                  <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option> 
				               </select>
				               <has-error :form="form" field="status_id"></has-error>			                      
					        </div>
		            	</div>
		            	<div class="col-6">
		            		<div class="form-group">
					          <label for="branch_id"">Branch *</label>
				              <select v-model="form.branch_id" class="form-control form-control-sm-" id="branch_id" name="branch_id" :class="{ 'is-invalid': form.errors.has('branch_id') }" >
				              	  <option disabled value="">Select Branch ..</option>                
				                  <option v-for="branch in branches" :key="branch.id" v-bind:value="branch.id">{{branch.branch_name}}</option> 
				               </select>
				               <has-error :form="form" field="branch_id"></has-error>			                      
					        </div>
		            	</div>
		            </div>

		            <div class="row">
		            	<div class="col-md-3 col-sm-6">
		            		<div class="form-group">
				              <label>Join Date</label>
				                <input v-model="form.emp_hire_date" type="date" ref="emp_hire_date" name="emp_hire_date" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_hire_date') }" placeholder="Join Date">
				              <has-error :form="form" field="emp_hire_date"></has-error>
				            </div>
		            	</div>
		            	<div class="col-md-9 col-sm-6">            		
		            		<div class="form-group" style="margin-top: -12px;">
				              <label>Select Department</label>
				            	<!-- <auto-complete-app
								:options="allDepertments" 
								:filterBy="filterBy"
								/> -->

								<multi-select-app-one
									:options="allDepertments"
									:autoSearchOptions="autoSearchDepartments" 
									:filterBy="filterBy"
									:place-holder="placeHolder"
									:value-property="valueProperty"
									v-model="form.departments" 
								/>
							</div>

		            	</div>
		            </div> 

            	</div>

            	<div class="col-3">
            		<div class="row pt-2">
                    	<div class="col-md-12 text-center">
                    	    <span v-if="ShowOnChangeImage != null">
                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px; height:130px; //height:auto;">
                            </span>
                            
                            <span v-else>
                             <img v-if="form.avatar == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                             <img v-if="form.avatar === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                             <img v-else-if="form.avatar === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                              <img v-else-if="form.avatar != '' " :src="'../'+form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:130px;">
                            </span> 
                            <!-- <img :src="'../'+NoIconUrl"> -->
                    	</div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="avatar"></label>
                          <input @change="onImageChange" type="file" ref="avatar" name="avatar" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                    </div>            		

            	</div>

            </div>


            <div class="row">            	
            	<div class="col-md-3 col-sm-6">
            		<div class="form-group">
		              <label>Email</label>
		                <input v-model="form.emp_email" type="email" ref="emp_email" name="emp_email" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_email') }" placeholder="Email Address">
		              <has-error :form="form" field="emp_email"></has-error>
		            </div>
            	</div>
            	<div class="col-md-3 col-sm-6">            		
            		<div class="form-group" style="margin-top: -12px;">
		               	<label>Phone *</label>
		                <div class="input-group input-group-sm- mb-3">	                      
		                  <div class="input-group-prepend">
		                    <span class="input-group-text"><!-- <i class="fas fa-envelope"></i> --> +88 </span>
		                  </div>
		                  <input v-model="form.emp_phone" type="number" ref="emp_phone" name="emp_phone" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('emp_phone') }" placeholder="Enter phone number">	 
		                  <has-error :form="form" field="emp_phone"></has-error>                     
		                </div>                
		            </div>
            	</div>
            	<div class="col-md-3 col-sm-6">
            		<div class="form-group">
		              <label>Date of birth *</label>
		                <input v-model="form.emp_dob" type="date" ref="emp_dob" name="emp_dob" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_dob') }" placeholder="Date of birth">
		              <has-error :form="form" field="emp_dob"></has-error>
		            </div>
            	</div>            	
            	<div class="col-md-3 col-sm-6">
            		<div class="form-group">
			          <label for="role_id"">Gender *</label>
		              <select v-model="form.emp_gender" class="form-control form-control-sm-" id="emp_gender" name="emp_gender" :class="{ 'is-invalid': form.errors.has('emp_gender') }" >
		              	  <option disabled value="">Select Gender ..</option>                
		                  <option v-for="gender in genders" v-bind:value="gender.name">
		                  	{{gender.name}}
		                  </option>			                  
		               </select>
		               <has-error :form="form" field="emp_gender"></has-error>			                      
			        </div>
            	</div>            	
            </div> 


            <div class="row">
            	<div class="col-4">
            		<div class="form-group">
		              <label>NID</label>
		                <input v-model="form.emp_nid" type="text" ref="emp_nid" name="emp_nid" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_nid') }" placeholder="National ID">
		              <has-error :form="form" field="emp_nid"></has-error>
		            </div>
            	</div>
            	<div class="col-4">
            		<div class="form-group">
		              <label>Passport</label>
		                <input v-model="form.emp_passport" type="text" ref="emp_passport" name="emp_passport" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_passport') }" placeholder="Passport Number">
		              <has-error :form="form" field="emp_passport"></has-error>
		            </div>
            	</div>
            	<div class="col-4">
            		<div class="form-group">
		              <label>Driving License</label>
		                <input v-model="form.emp_driving_license" type="text" ref="emp_driving_license" name="emp_driving_license" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_driving_license') }" placeholder="Driving License">
		              <has-error :form="form" field="emp_driving_license"></has-error>
		            </div>
            	</div>
            </div>        

            
            

            <div class="row">
            	<div class="col-4">
            		<div class="form-group">
		              <label>Father Name</label>
		                <input v-model="form.emp_father_name" type="text" ref="emp_father_name" name="emp_father_name" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_father_name') }" placeholder="Employee Father Name">
		              <has-error :form="form" field="emp_father_name"></has-error>
		            </div>
            	</div>
            	<div class="col-4">
            		<div class="form-group">
		              <label>Mother Name</label>
		                <input v-model="form.emp_mother_name" type="text" ref="emp_mother_name" name="emp_mother_name" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_mother_name') }" placeholder="Employee Mother Name">
		              <has-error :form="form" field="emp_mother_name"></has-error>
		            </div>
            	</div>
            	<div class="col-4">
            		<div class="form-group">
		              <label>Wife Name</label>
		                <input v-model="form.emp_wife_name" type="text" ref="emp_wife_name" name="emp_wife_name" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_wife_name') }" placeholder="Employee Wife Name">
		              <has-error :form="form" field="emp_wife_name"></has-error>
		            </div>
            	</div>
            </div>

             	  	

   	  		<!-- <div class="row">
            	<div class="col-6"></div>
            	<div class="col-6"></div>
            </div> -->
            <div class="form-group">
                <label for="emp_Present_address">Present Address</label>
                <textarea v-model="form.emp_Present_address" class="form-control" name="emp_Present_address" placeholder="Present Address"> </textarea>
            </div>

            <div class="form-group">
                <label for="emp_permanent_address">Permanent Address</label>
                <textarea v-model="form.emp_permanent_address" class="form-control"  name="emp_permanent_address" placeholder="Permanent Address"> </textarea>
            </div>
   	  		

            <div class="form-group">
	            <label for="emp_desc">Details</label>
            	<vue-editor v-model="form.emp_desc" name="emp_desc" class="form-control-" placeholder="Employee Details"> </vue-editor>
  	        </div>

  	        <div class="form-group">
	            <label for="emp_qualification">Qualification</label>
            	<vue-editor v-model="form.emp_qualification" name="emp_qualification" class="form-control-"  placeholder="Qualification"> </vue-editor>
  	        </div>

  	        <div class="form-group">
  	            <label for="emp_experience">Experience</label>
              	<vue-editor v-model="form.emp_experience" name="emp_experience" class="form-control-" placeholder="Experience"> </vue-editor>
  	        </div>

  	        <div class="form-group">
  	            <label for="emp_previous_job_history">Previous Job History</label>
              	<vue-editor v-model="form.emp_previous_job_history" class="form-control-" name="emp_previous_job_history"  placeholder="Job History"> </vue-editor>
  	        </div>

  	        
  	  		

   	  	</div>
   	  </div>

   	  <div class="row mr-4">
   	  	<div class="col-12  text-right">
   	  		<button type="submit" class="btn btn-primary btn-flat btn-sm ">
	        	<span v-show="!editMode">Save</span>
	        	<span v-show="editMode">Update</span>
	    	</button>    	  		
   	  	</div>
   	  </div>  	  	


   	</form>
   	</div><!--End Card-body-->

    <div class="card-footer"> 
        
    </div><!--End Card-footer-->

    <!-- sortable data test -->
    <!-- {{currentSortDir }} {{currentSort}} -->

</div><!--/vue-card-item -->
</template>

<script>
  import { mapState } from 'vuex' //for user MapState
  export default {
    name: "EmployeeMasterForm",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage:null,
        editMode: false, //Use this for add edit using the same form   
        genders: [
  	      { name: 'Male' },
  	      { name: 'Female'},
		    ],      

    		//form multiselect app
    		placeHolder:'Select departments',
    		filterBy:'dept_name',
    		valueProperty: 'id',

        // Create a new form instance
        form: new Form({
          id: '',
          branch_id:'',
          job_title_id:'',
          emp_name: '',
          emp_father_name: '',
          emp_mother_name: '',
          emp_wife_name: '',
          emp_dob: '',
          emp_gender: '',
          emp_email:'',
          emp_phone: '',
          emp_nid: '',
          emp_passport: '',
          emp_driving_license: '',
          emp_hire_date: '',
          avatar: '',
          status_id: '',
          emp_desc:'',
          emp_qualification:'',
          emp_experience:'',
          emp_previous_job_history:'',
          emp_permanent_address:'', 
          departments: [],

        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['userStatus','jobTitles','branches','allDepertments','autoSearchDepartments'] )

        
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

	    // Submit the form via a POST request
		storeFormData() {  
		  //console.log(this.form); 
		  this.$Progress.start(); //using progress-bar package

		  //this.form.post('/spa/Employee-Info')
		  this.form.post('/spa/Employee-Info')
		  .then(({ data }) => { 
		    if(data.success){ 
		      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
		      toastr.success(data.success);             
		      this.$Progress.finish();  
		      this.form.reset();  //reset from after submit	
		      this.$refs.avatar.value = ''; //clear file input tag 
			  this.ShowOnChangeImage = null;
			  this.$router.push({ path : '/spa/EmployeeMaster' });	 //route after successfule submit	      
		    }
		    if(data.errors){
		      this.$Progress.fail();
		      toastr.warning(data.errors); 
		    }
		  })
		  .catch( () => {
		    this.$Progress.fail();
		    toastr.warning('Something is wrong!');
		  })            
		},

		updateFormData(){         
			//console.log(this.form); 
			this.$Progress.start(); //using progress-bar package

			this.form.put('/spa/Employee-Info/'+this.form.id)
			  .then(({ data }) => { 
			    if(data.success){ 
			      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
			      this.$Progress.finish(); 
			      toastr.success(data.success);               
			      this.form.reset();  //reset from after submit
			      this.editMode = false; 
			      this.$refs.avatar.value = ''; //clear file input tag 
			  	  this.ShowOnChangeImage = null;
			  	  this.$router.push({ path : '/spa/EmployeeMaster' });	 //route after successfule submit
			    }
			    if(data.errors){
			      this.$Progress.fail();
			      toastr.warning(data.errors); 
			    }
			  })
			  .catch( () => {
			    this.$Progress.fail();
			    toastr.warning('Something is wrong!');
			  }) 
		},


	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.emp_name.focus();  
	    		if(this.$route.params.data.departments.length === 0){
	    			this.form.departments = [];
	    		}else{
		    		 // this.form.departments = Object.values(this.$route.params.data.departments).filter(
		    		 this.form.departments = Object.values(this.$route.params.data.departments).map(
	       		 		item => {	
	       		 			//return item['id'];
	       		 			 return item.id;
	       		 		}
		       		 );
	    		}	    	
	    	}
	    }
	},

  	created(){
  		this.fillForm();
    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
    	this.$store.dispatch('commonStoreForAll/fetchJobTitles'); //get job title
    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get job title
    	this.$store.dispatch('commonStoreForAll/fetchDepartments');//fetchDepartments

		  FireEvent.$on('AutoCompleteSearchForDepartment', (data) => {
	        this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data ); 
	    });


	    

    	//console.log(this.form);
    }



  } //end export Default

   
</script>
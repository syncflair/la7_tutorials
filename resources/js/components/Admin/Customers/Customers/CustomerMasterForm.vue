<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Customer</span>
        	<span v-show="editMode">Update - {{form.name}}</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/CustomerMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Customer List
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row">
   	  	<div class="col-md-10 offset-1">
          <!-- start Tab Section -->
          <div class="card card-primary card-outline card-outline-tabs">
            <div class="card-header p-0 border-bottom-0"><!-- Tab Head -->
              <ul class="nav nav-tabs" id="custom-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="tab-one" data-toggle="pill" href="#tabs-body-one" role="tab" aria-controls="tabs-body-one" aria-selected="true">Customer Details</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="tabs-two" data-toggle="pill" href="#tabs-body-two" role="tab" aria-controls="tabs-body-two" aria-selected="false">Customer Address</a>
                </li>
              </ul>
            </div><!-- End Tab Head -->

            <div class="card-body"><!-- Tab Body -->
              <div class="tab-content" id="custom-tabs-Content"><!-- Tab Body Content-->

                <!-- Tab One -->
                <div class="tab-pane fade active show" id="tabs-body-one" role="tabpanel" aria-labelledby="tab-one">
                  <div class="row">
	          	<div class="col-md-12">

	          		<div class="row form-group">
	                    <div class="col-sm-3 text-right">
	                      <label>Customer Name *</label>                     
	                    </div>
	                    <div class="col-sm-9">
	                      <input v-model="form.name" type="text" ref="name" name="name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Customer Name">
	                  	  <has-error :form="form" field="name"></has-error>
	                    </div> 
	                </div>

	                <div class="row form-group">
	                    <div class="col-sm-3 text-right">
	                      <label>Email *</label>                    
	                    </div>
	                    <div class="col-sm-9">
	                      <input v-model="form.email" type="text" name="email" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Enter Email">
                          <has-error :form="form" field="email"></has-error>
	                    </div> 
	                </div>

	                <div class="row form-group mb-0">
	                    <div class="col-sm-3 text-right">
	                      <label>Phone *</label>                   
	                    </div>
	                    <div class="col-sm-9">
	                      <div class="input-group input-group-sm mb-3">	                      
			                  <div class="input-group-prepend">
			                    <span class="input-group-text"> +88 </span>
			                  </div>
			                  <input v-model="form.phone" type="number" name="phone" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter phone number">	 
			                  <has-error :form="form" field="phone"></has-error>                     
			              </div>
	                    </div> 
	                </div>
	                <!-- <i class="fas fa-envelope"></i> -->

                    
	                <!-- <div class="form-group">
	                   	<label>Phone *</label>
	                    <div class="input-group input-group-sm mb-3">	                      
		                  <div class="input-group-prepend">
		                    <span class="input-group-text"> +88 </span>
		                  </div>
		                  <input v-model="form.phone" type="number" ref="phone" name="phone" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter phone number">	 
		                  <has-error :form="form" field="phone"></has-error>                     
		                </div>		                
		            </div> -->	

		            <div class="row form-group">
	                    <div class="col-sm-3 text-right">
	                      <label for="role_id"">Customer Group *</label>                   
	                    </div>
	                    <div class="col-sm-9">
	                      <select v-model="form.customer_group_id" class="form-control form-control-sm" name="customer_group_id" :class="{ 'is-invalid': form.errors.has('customer_group_id') }" >
			              	  <option disabled value="">Select customer Group</option>                
			                  <option v-for="c_group in allCustomerGroups" v-bind:value="c_group.id">
			                  	{{c_group.group_name}}
			                  </option>			                  
			              </select>
			              <has-error :form="form" field="customer_group_id"></has-error>
	                    </div> 
	                </div>	 

	                <div class="row form-group">
	                    <div class="col-sm-3 text-right">
	                      <label for="role_id"">Membership *</label>                  
	                    </div>
	                    <div class="col-sm-9">
	                      	<select v-model="form.customer_membership_id" class="form-control form-control-sm" name="customer_membership_id" :class="{ 'is-invalid': form.errors.has('customer_membership_id') }" >
				              	<option disabled value="">Select membership</option>                
				                <option v-for="cus_mem in allCustomerMemberships" v-bind:value="cus_mem.id">
				                  	{{cus_mem.membership_title}}
				                </option>			                  
				            </select>
				            <has-error :form="form" field="customer_membership_id"></has-error>
	                    </div> 
	                </div>  

	                <div class="row form-group">
	                    <div class="col-sm-3 text-right">
	                      <label for="role_id"">Status *</label>                 
	                    </div>
	                    <div class="col-sm-9">
	                      	<select v-model="form.status_id" class="form-control form-control-sm" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
				              	<option disabled value="">Select Customer Status ..</option>                
				                <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option>			                  
				            </select>
				            <has-error :form="form" field="status_id"></has-error>
	                    </div> 
	                </div>

	                <div class="row form-group mb-0">
	                    <div class="col-sm-3 text-right">
	                      <label for="role_id" class="pt-3">password</label>                 
	                    </div>
	                    <div class="col-sm-9">

	                    	<div class="row">
				            	<div class="col-md-6 col-sm-6">
				            		<div class="form-group">                    	
				                      <label> Password  <span v-show="editMode === false"> * </span> </label>
				                        <input v-model="form.password" type="password" name="password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Password">
				                      <has-error :form="form" field="password"></has-error>
				                    </div> 
				            	</div>
				            	<div class="col-md-6 col-sm-6">
				            		<div class="form-group">
				                      <label>Confirm Password</label>
				                        <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm Password">
				                      <has-error :form="form" field="password_confirmation"></has-error>
				                    </div> 
				            	</div>
				            </div>
	                      	
	                    </div> 
	                </div> 

	                <div class="row form-group">
	                    <div class="col-sm-3 text-right"></div>
	                    <div class="col-sm-9">
	                      	<div class="form-check">
			                  <input v-model="form.enable_notify" type="checkbox" class="form-check-input" ref="enable_notify" name="enable_notify" id="checkbox" value="1">
			                  <label class="form-check-label" for="checkbox" >Notification</label>
			                </div>
	                    </div> 
	                </div>            
                

	          	</div>
	          </div>
                </div><!--End Tab One -->


                <!-- Tab Tow -->
                <div class="tab-pane fade" id="tabs-body-two" role="tabpanel" aria-labelledby="tab-two">
                  <div class="row">
                    <div class="col-md-12">

                      <div class="card" v-for="(input, key) in form.customer_address" :key="key">
						<div class="card-header" style="background-color: rgba(0, 0, 0, 0.03);">
						  <div class="row">
						  	<div class="col-md-6"><strong>Address {{ key + 1 }} </strong></div>
						  	<div class="col-md-6 text-right">
						  	  	<div class="form-group-">
		                          <i class="fas fa-minus-circle danger pointer" @click.prevent="remove_payroll(key)" v-show="key || ( !key && form.customer_address.length > 1)" title="Remove"></i>
		                          <i class="fas fa-plus-circle green pointer" @click.prevent="add_payroll(key)" v-show="key == form.customer_address.length-1" title="Add"></i> 
		                    	</div>
						  	</div>
						  </div>
						</div>

						<div class="card-body">

						  <div class="row">
						  	<div class="col-md-5">
						  	  <div class="form-group">
				                <label>Customer Name*</label>
				                <input v-model="input.customer_name" type="text" ref="customer_name" name="customer_name" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('customer_name') }" placeholder="Customer Name">
				                <has-error :form="form" field="customer_name"></has-error> 
				              </div>
						  	</div>
						  	<div class="col-md-5">
						  	  <div class="form-group">
				                <label>Company</label>
				                <input v-model="input.company" type="text" ref="company" name="company" class="form-control form-control-sm" placeholder="Company Name">
				              </div>
						  	</div>
						  	<div class="col-md-2 mt-3">
						  		<div class="form-check">
			                      <input v-model="input.default_address" type="checkbox" class="form-check-input" name="default_address" value="1">
			                      <label class="form-check-label" for="checkbox" > Default</label>
			                    </div>
						  	</div>						  	

						  </div>

						  <div class="row">
						  	<div class="col-md-6">
						  	  <div class="form-group">
				                <label>Address 1 *</label>
				                <textarea v-model="input.address_1" name="address_1" class="form-control"  placeholder="Address 1"> </textarea>
				                <has-error :form="form" field="address_1"></has-error> 
				              </div>
						  	</div>
						  	<div class="col-md-6">
						  	  <div class="form-group">
				                <label>Address 2</label>
				                <textarea v-model="input.address_2" name="address_2" class="form-control"  placeholder="Address 2"> </textarea>
				              </div>
						  	</div>						  							  	
						  </div>

						  <div class="row">
						  	<div class="col-md-3">
						  	  <div class="form-group">
				                <label>Country *</label>
				                  <select v-model="input.country_id" class="form-control form-control-sm" name="country_id" :class="{ 'is-invalid': form.errors.has('country_id') }" @change="getDivision($event)" >
					              	  <option disabled value="">Select country</option>                
					                  <option v-for="country in Countries" v-bind:value="country.id">
					                  	{{country.country_name}} - {{country.phone_code}}
					                  </option>			                  
					              </select>
					              <has-error :form="form" field="country_id"></has-error>
				              </div>
						  	</div>	
						  	<div class="col-md-3">
						  	  <div class="form-group">
				                <label>Division /State *</label>
				                  <select v-model="input.division_id" class="form-control form-control-sm" name="division_id" :class="{ 'is-invalid': form.errors.has('division_id') }" @change="getDistrict($event)">
					              	  <option disabled value="">Select division / state</option>                
					                  <option v-for="division in Divisions" v-bind:value="division.id">
					                  	{{division.division_name}}
					                  </option>			                  
					              </select>
					              <has-error :form="form" field="division_id"></has-error>
				              </div>
						  	</div>
						  	<div class="col-md-3">
						  	  <div class="form-group">
				                <label>District / City *</label>
				                  <select v-model="input.district_id" class="form-control form-control-sm" name="district_id" :class="{ 'is-invalid': form.errors.has('district_id') }" @change="getDistrictZone($event)" >
					              	  <option disabled value="">Select district / city</option>                
					                  <option v-for="district in Districts" v-bind:value="district.id">
					                  	{{district.district_name}}
					                  </option>			                  
					              </select>
					              <has-error :form="form" field="district_id"></has-error>
				              </div>
						  	</div>				  							  	
						  	<div class="col-md-3">
						  	  <div class="form-group">
				                <label>Zone / Area / Zip *</label>
				                  <select v-model="input.area_zone_id" class="form-control form-control-sm" name="area_zone_id" :class="{ 'is-invalid': form.errors.has('area_zone_id') }" >
					              	  <option disabled value="">Zone / Area / Zip</option>                
					                  <option v-for="zone in Dist_Zones" v-bind:value="zone.id">
					                  	{{zone.zone_name}} - {{zone.zip_code}}
					                  </option>			                  
					              </select>
					              <has-error :form="form" field="area_zone_id"></has-error>
				              </div>
						  	</div>
						  </div>

						  <div class="row">
						  	<div class="col-md-6">
						  	  <div class="form-group">
				                <label>City</label>
				                <input v-model="input.city" type="text" ref="city" name="city" class="form-control form-control-sm" placeholder="City">
				              </div>
						  	</div>
						  	<div class="col-md-6">
						  	  <div class="form-group">
				                <label>Zip</label>
				                <input v-model="input.zip" type="text" ref="zip" name="zip" class="form-control form-control-sm" placeholder="zip">
				              </div>
						  	</div>
						  </div>
						    
						</div><!--End Card Body-->

					  </div><!--End Address Card-->

                    </div>
                  </div>
                </div><!--End Tab Two -->


              </div><!-- End Tab Body Content-->
            </div><!-- End Tab Body -->

          </div><!-- End Tab Section -->   
  	  		

   	  	</div>
   	  </div>

   	  <div class="row mr-4">
   	  	<div class="col-12  text-right">
   	  		<button type="submit" class="btn btn-primary btn-flat btn-sm ">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i> Update</span>
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
    name: "customerMasterFormForAdmin",
    
    data () {
      return {
        editMode: false, //Use this for add edit using the same form   
      //   CustomerGroups: [
		    //   { name: 'Default' },
		    //   { name: 'Wholesale' },
		    // ],

        // Create a new form instance
        form: new Form({
          id: '',
          name: '',
          email: '',
          phone: '',
          password: '',
          password_confirmation:'',
          //customer_group:'',
          status_id: '',
          customer_group_id:'',
          customer_membership_id:'',
          enable_notify: '',

          customer_address:[ { customer_name:'',company:'', address_1:'', address_2:'', country_id:'', division_id:'', district_id:'', area_zone_id:'', city:'', zip:'', default_address:'', } ],
          
        })
      }
	},//end data

    computed: {
        ...mapState( 'CustomerForAdminStore', ['pagination'] ),
        ...mapState( 'commonStoreForAll', ['userStatus','allCustomerGroups','allCustomerMemberships','Countries','Divisions','Districts','Dist_Zones'] ) 	        
  	},

  	methods:{

      //###################################### Address Function ################################################
      add_payroll() {
         this.form.customer_address.push({ customer_name: '', company:'', address_1: '', address_2:'', country_id:'',     division_id:'', district_id:'', area_zone_id:'', city:'', zip:'', default_address:'', });
      },
      remove_payroll(index) { 
        this.form.customer_address.splice(index, 1);
      },
      //###################################### End Address Function ############################################

    	

	    // Submit the form via a POST request
		storeFormData() {  
		  this.$Progress.start(); //using progress-bar package

		  //this.form.post('/spa/Customer-Info')
		  this.form.post('/spa/customer-Info')
		  .then(({ data }) => { 

		    if(data.success){ 
		      FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
		      toastr.success(data.success);             
		      this.$Progress.finish();  
		      this.form.reset();  //reset from after submit
		      this.$router.push({ path : '/spa/CustomerMaster' });	 //route after successfule submit		      
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

			this.form.put('/spa/customer-Info/'+this.form.id)
			  .then(({ data }) => { 

			    if(data.success){ 
			     FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
			                 
			      this.$Progress.finish(); 
			      toastr.success(data.success);               
			      this.form.reset();  //reset from after submit
			      this.editMode = false; 

			      this.$router.push({ path : '/spa/CustomerMaster' });	 //route after successfule submit
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

      

	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.emp_name.focus();   

	    		//payroll section
	          	if(this.$route.params.data.has_many_address.length === 0) {
	            	this.form.customer_address = [{ customer_name: '', company:'', address_1: '', address_2:'', country_id:'',     division_id:'', district_id:'', area_zone_id:'', city:'', zip:'', default_address:'', }];
	         	}else{
	            	this.form.customer_address = this.$route.params.data.has_many_address;
	         	}          	
	    	}
	    },

	    getDivision(e){
	    	// alert(e.target.value);
	    	let data = e.target.value;
	    	this.$store.dispatch('commonStoreForAll/fetchDivisionList', data); //get Division
	    },

	    getDistrict(e){
	    	let data = e.target.value;
	    	this.$store.dispatch('commonStoreForAll/fetchDistrictList', data); //get Division
	    },

	    getDistrictZone(e){
	    	let data = e.target.value;
	    	this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', data); //get District Zone
	    },


	},

  	created(){
  		this.fillForm();

    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
    	this.$store.dispatch('commonStoreForAll/fetchCustomerGroups'); //get customer Groups
    	this.$store.dispatch('commonStoreForAll/fetchCustomerMemberships'); //get customer Memberships

    	this.$store.dispatch('commonStoreForAll/fetchCountryList'); //get country
    	this.$store.dispatch('commonStoreForAll/fetchDivisionList', ''); //get Division
    	this.$store.dispatch('commonStoreForAll/fetchDistrictList', ''); //get District
    	this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', ''); //get zone Area


        FireEvent.$on('AfterChange', () => {
	        this.$Progress.start();
      		this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
      		this.$Progress.finish();
        });

    	//this event call from CustomerList component
    	// FireEvent.$on('editCustomer', (data) => {
     //      //alert(data.id);
     //      //this.form.fill(data);   //this is also work
     //      this.editCustomer(data);
     //    });

    	//this event call from CustomerList component
        // FireEvent.$on('addCustomer', () => {
        //   this.addCustomer();
        // });

    	//console.log(this.form);
    }



  } //end export Default

   
</script>
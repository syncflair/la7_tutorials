<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-6">
        	<span v-show="!editMode">New Vendor</span>
        	<span v-show="editMode">Update - {{form.vendor_name}}</span>
        </div>
        <div class="col-md-7 col-sm-6 text-right">
        	<router-link to="/spa/VendorMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Vendor List
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row">
   	  	<div class="col-md-10 offset-1">

   	  		<div class="row">
            	
            	<div class="col-md-9 col-sm-12">

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Vendor Name *</label>                      
                  </div>
                  <div class="col-sm-10">
                    <input v-model="form.vendor_name" type="text" ref="vendor_name" name="vendor_name" class="form-control" :class="{ 'is-invalid': form.errors.has('vendor_name') }" placeholder="Vendor Name">
                    <has-error :form="form" field="vendor_name"></has-error>
                  </div> 
                </div>

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Email *</label>                      
                  </div>
                  <div class="col-sm-10">
                    <input v-model="form.vendor_email" type="text" ref="vendor_email" name="vendor_email" class="form-control" :class="{ 'is-invalid': form.errors.has('vendor_email') }" placeholder="Vendor Email">
                    <has-error :form="form" field="vendor_email"></has-error>
                  </div> 
                </div>

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Phone *</label>                      
                  </div>
                  <div class="col-sm-10">
                    <div class="input-group input-group-sm- mb-3">                       
                      <div class="input-group-prepend">
                        <span class="input-group-text"><!-- <i class="fas fa-envelope"></i> --> +88 </span>
                      </div>

                      <input v-model="form.vendor_phone" type="number" ref="vendor_phone" name="vendor_phone" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('vendor_phone') }" placeholder="Enter vendor_phone number">   
                      <has-error :form="form" field="vendor_phone"></has-error>                     
                    </div> 


                    <!-- <input v-model="form.vendor_phone" type="text" ref="vendor_phone" name="vendor_phone" class="form-control" :class="{ 'is-invalid': form.errors.has('vendor_phone') }" placeholder="Vendor phone">
                    <has-error :form="form" field="vendor_phone"></has-error> -->
                  </div> 
                </div>

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Status *</label>                      
                  </div>
                  <div class="col-sm-10">
                    <select v-model="form.status_id" class="form-control form-control-sm-" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
                      <option disabled value="">Select Status ..</option>                
                      <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option> 
                    </select>
                    <has-error :form="form" field="status_id"></has-error> 
                  </div> 
                </div>

                <!-- <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Is Active</label>                      
                  </div>
                  <div class="col-sm-10">
                    <input v-model="form.is_enabled" type="checkbox" class="form-check-input" name="is_enabled" id="checkbox" value="1">
                  </div> 
                </div> -->


                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Vendor Type *</label>                      
                  </div>
                  <div class="col-sm-10">
                    <select v-model="form.vendor_type" class="form-control form-control-sm-" id="vendor_type" name="vendor_type" :class="{ 'is-invalid': form.errors.has('vendor_type') }" >
                        <option disabled value="">Select Vendor type ..</option>                
                        <option v-for="vt in VendorTypes" v-bind:value="vt.name">
                          {{vt.name}}
                        </option>                       
                      </select>
                      <has-error :form="form" field="vendor_type"></has-error>
                  </div> 
                </div>

                <!-- <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Brand Shop</label>                      
                  </div>
                  <div class="col-sm-10">
                    <select v-model="form.brand_shop_id" class="form-control" id="brand_shop_id" name="brand_shop_id" >
                        <option disabled value="">Select Brand Shop ..</option>
                        <option v-bind:value="null">No Brand Shop (Null) </option>                
                        <option v-for="bs in allBrandShops" :key="bs.id" v-bind:value="bs.id">{{bs.brand_shop_title}}</option> 
                      </select> 
                  </div> 
                </div> -->

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Brand Shop</label>                      
                  </div>
                  <div class="col-sm-10">
                    <single-select-app-one
                      :options="selectedBrandShop"
                      @getAllDataListByIds="getSelectedDataByIdsForBrandShop"
                      :autoSearchOptions="autoSearchBrandShop"
                      @AutoCompleteSearchForData="AutoCompleteSearchForDataBrandShop"                   
                      :filterBy="filterBy"
                      :place-holder="placeHolder"
                      :value-property="valueProperty"
                      v-model="form.brand_shop_id" 
                    />
                  </div> 
                </div>

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Address</label>                      
                  </div>
                  <div class="col-sm-10">
                    <textarea v-model="form.vendor_address" class="form-control" name="vendor_address" placeholder="Vendor Address"> </textarea>
                  </div> 
                </div>

                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Zone</label>                      
                  </div>
                  <div class="col-sm-10">
                    <select v-model="form.dist_zone_id" class="form-control form-control-sm-" id="dist_zone_id" name="dist_zone_id" >
                        <option disabled value="">Select zone / Area ..</option>                
                        <option v-for="zone in Dist_Zones" :key="zone.id" v-bind:value="zone.id">{{zone.zone_name}} ({{zone.zip_code}})</option>                        
                    </select>
                  </div> 
                </div>


                <div class="row form-group">
                  <div class="col-sm-2 text-right">
                    <label class="pt-2">Details</label>                      
                  </div>
                  <div class="col-sm-10">
                    <vue-editor v-model="form.vendor_desc" class="form-control-" name="vendor_desc" placeholder="Vendor Details"> </vue-editor>
                  </div> 
                </div>

            	</div>

            	<div class="col-md-3 col-sm-12">
            		<div class="row pt-2">
                    	<div class="col-md-12 text-center">
                    	    <span v-if="ShowOnChangeImage != null">
                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px; height:130px; //height:auto;">
                            </span>
                            
                            <span v-else>
                             <img v-if="form.vendor_img == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                             <img v-if="form.vendor_img === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                             <img v-else-if="form.vendor_img === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                              <!-- <img v-else-if="form.vendor_img != '' " :src="'../'+form.vendor_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:130px;"> -->
                              <img v-else-if="form.vendor_img != '' " :src="form.vendor_img" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:130px;">

                              <i v-if="deleteImageIcon" @click="deleteImage(form.id)" class="far fa-times-circle" style="cursor: pointer; background: #fff; padding: 4px 2px 2px 2px;   color: red; border-radius: 10px; margin-left: -15px;" title="click to Delete"></i>
                            </span> 
                            <!-- <img :src="'../'+NoIconUrl"> -->
                    	</div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="vendor_img"></label>
                          <input @change="onImageChange" type="file" ref="vendor_img" name="vendor_img" class="form-control" />
                          <!-- @change="updateCatImg" -->
                        </div>
                      </div>
                    </div>            		

            	</div>

            </div>

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
    name: "VendorMasterForm",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage:null,
        deleteImageIcon: false, //Delete Image icon if image exist
        editMode: false, //Use this for add edit using the same form   
        VendorTypes: [
            { name: 'Person' },
            { name: 'Organization' },
            { name: 'Shop' },
          ],      

    		//form Single app
    		placeHolder:'Select Brand Shop',
    		filterBy:'brand_shop_title',
    		valueProperty: 'id',

        // Create a new form instance
        form: new Form({
          id: '',
          status_id:'',
          brand_shop_id:'',
          vendor_name: '',
          vendor_email: '',
          vendor_phone: '',
          vendor_type: '',

          vendor_desc: '',
          vendor_address: '',
          dist_zone_id:'',
          enable_notify: '',          
          //is_enabled: '',
          vendor_img: '',
        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['userStatus','branches','Dist_Zones'] ),
        ...mapState( 'VendorMasterStore', ['autoSearchBrandShop','selectedBrandShop'] ),        
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
	            this.form.vendor_img = reader.result; //push base64 to logo veriable
	          };          
	          reader.readAsDataURL(file);
	        }
	    },

	    // Submit the form via a POST request
  		storeFormData() {  
  		  //console.log(this.form); 
  		  this.$Progress.start(); //using progress-bar package

  		  //this.form.post('/spa/Vendor-Info')
  		  this.form.post('/spa/Vendor-Info')
  		  .then(({ data }) => { 
  		    if(data.success){ 
  		      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
  		      toastr.success(data.success);             
  		      this.$Progress.finish();  
  		      this.form.reset();  //reset from after submit	
  		      this.$refs.vendor_img.value = ''; //clear file input tag 
  			  this.ShowOnChangeImage = null;
  			  this.$router.push({ path : '/spa/VendorMaster' });	 //route after successfule submit	      
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

  			this.form.put('/spa/Vendor-Info/'+this.form.id)
  			  .then(({ data }) => { 
  			    if(data.success){ 
  			      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
  			      this.$Progress.finish(); 
  			      toastr.success(data.success);               
  			      this.form.reset();  //reset from after submit
  			      this.editMode = false; 
  			      this.$refs.vendor_img.value = ''; //clear file input tag 
  			  	  this.ShowOnChangeImage = null;
  			  	  this.$router.push({ path : '/spa/VendorMaster' });	 //route after successfule submit
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

      deleteImage(id){ 
        this.$Progress.start();   
          axios.post('/spa/Vendor-Info-DeleteImage/'+id)
            .then(({ data }) => {
                // this.ShowOnChangeImage = null;
                this.deleteImageIcon = false;
                this.form.vendor_img = null;
                this.$Progress.finish(); 
                toastr.success(data.success);
             })
            .catch(() => {
              this.$Progress.fail();
              toastr.warning('Something is wrong!');
            });
      },


	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.vendor_name.focus();  
          if(this.$route.params.data.brand_shop_id === null){ this.form.brand_shop_id = ''; } 

          if(this.$route.params.data.vendor_img != null){
            this.deleteImageIcon = true;  
          } 		   	
	    	}
        
        //load selected brand shop
        this.$store.dispatch('VendorMasterStore/fetchSelectedBrandShop', this.form.brand_shop_id);
	    },

      AutoCompleteSearchForDataBrandShop(data){
        this.$store.dispatch('VendorMasterStore/AutoCompleteSearchForDataBrandShop', data ); 
      },
      getSelectedDataByIdsForBrandShop(data){
        this.$store.dispatch('VendorMasterStore/fetchSelectedBrandShop', this.form.brand_shop_id);
      },



	},

  	created(){
  		this.fillForm();
    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
      //this.$store.dispatch('commonStoreForAll/fetchBrandShops'); //get user status
      this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList'); //get user status
    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get job title

      //console.log(this.form);
    }



  } //end export Default

   
</script>
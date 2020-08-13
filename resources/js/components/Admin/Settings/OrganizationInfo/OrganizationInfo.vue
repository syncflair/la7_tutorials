<template>
<!-- Main content -->
<section class="content"> 
<!-- container-fluid -->     
<div class="container-fluid">        
<!-- Card section -->    
<div class="card vue-card">

    <!-- Card Header -->
    <div class="card-header">            
        <div class="row">
        	<div class="col-md-6 text-left"><h5>Organization Information</h5></div>
            <div class="col-md-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item active">Dashboard</li>
                    <li class="breadcrumb-item active">Settings</li>
                    <li class="breadcrumb-item"><a>Organization Information</a></li>
                </ol>
            </div>           
        </div>
    </div><!-- /Card Header -->


    <!-- Card Body -->
    <div class="card-body">
        <!--Row -->
        <div class="row mt-1 mb-4">

            <!--Form Area-->
           <div class="col-md-10 col-sm-10 offset-md-1 text-right-">  

              <!-- vue-card-item -->
              <div class="card vue-card-item border-lef-style">
                <div class="card-header"><h4>Organization Information</h4></div>
                <div class="card-body card-body-custome">

                    <form @submit.prevent="updateOrganizationInfo()" >

                      <div class="card--"><!-- row inside form -->
                      	<div class="row">
                      	<div class="col-md-7 col-sm-6">

                      		<div class="form-group">
	                          <label>Organization Name *</label>
	                            <input v-model="form.org_name" type="text" ref="org_name" name="org_name" class="form-control" :class="{ 'is-invalid': form.errors.has('org_name') }" placeholder="Organization Name">
	                          <has-error :form="form" field="org_name"></has-error>
	                        </div>

	                        
	                        <div class="row">
	                          <div class="col-md-6">
	                          	<div class="form-group">
		                          <label>Business Type</label>
		                            <input v-model="form.org_business_type" type="text" ref="org_business_type" name="org_business_type" class="form-control" :class="{ 'is-invalid': form.errors.has('org_business_type') }" placeholder="Enter business type">
		                          <has-error :form="form" field="org_business_type"></has-error>
		                        </div>
	                          </div>
	                          <div class="col-md-6">
	                          	<div class="form-group">
		                          <label>Closing period</label>
		                            <input v-model="form.closing_period" type="text" ref="closing_period" name="closing_period" class="form-control" :class="{ 'is-invalid': form.errors.has('closing_period') }" placeholder="Closing period">
		                          <has-error :form="form" field="closing_period"></has-error>
		                        </div>
	                          </div>
	                        </div>

	                        <div class="form-group">
	                          <label for="org_desc">Business Descsiption</label>
	                            <textarea v-model="form.org_desc" ref="org_desc" name="org_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('org_desc') }" placeholder="Business Descsiption"></textarea>
	                          <has-error :form="form" field="org_desc"></has-error>
	                        </div>

	                        <div class="form-group">
	                          <label >License Details</label>
	                            <textarea v-model="form.org_license_desc" ref="org_license_desc" name="org_license_desc" class="form-control" :class="{ 'is-invalid': form.errors.has('org_license_desc') }" placeholder="License Details"></textarea>
	                          <has-error :form="form" field="org_license_desc"></has-error>
	                        </div>

	                        <div class="form-group">
	                          <label >Address</label>
	                            <textarea v-model="form.org_address" ref="org_address" name="org_address" class="form-control" :class="{ 'is-invalid': form.errors.has('org_address') }" placeholder="Address"></textarea>
	                          <has-error :form="form" field="org_address"></has-error>
	                        </div>

	                        <div class="row">
	                          <div class="col-md-4">
	                          	<div class="form-group">
		                          <label>City</label>
		                            <input v-model="form.city" type="text" ref="city" name="city" class="form-control" :class="{ 'is-invalid': form.errors.has('city') }" placeholder="City">
		                          <has-error :form="form" field="city"></has-error>
		                        </div>
	                          </div>

	                          <div class="col-md-4">
	                          	<div class="form-group">
		                          <label>State</label>
		                            <input v-model="form.state" type="text" ref="state" name="state" class="form-control" :class="{ 'is-invalid': form.errors.has('state') }" placeholder="State">
		                          <has-error :form="form" field="state"></has-error>
		                        </div>
	                          </div>

	                          <div class="col-md-4">
	                          	<div class="form-group">
		                          <label>Country</label>
		                            <input v-model="form.country" type="text" ref="country" name="country" class="form-control" :class="{ 'is-invalid': form.errors.has('country') }" placeholder="Country">
		                          <has-error :form="form" field="country"></has-error>
		                        </div>
	                          </div>
	                        </div>

                      	</div>
                      	<div class="col-md-5 col-sm-6">

	                        <div class="row">
	                          <div class="col-md-12">
	                        	<div class="form-group">
		                          <label>Phone</label>
		                            <input v-model="form.org_phone" type="text" ref="org_phone" name="org_phone" class="form-control" :class="{ 'is-invalid': form.errors.has('org_phone') }" placeholder="Phone">
		                          <has-error :form="form" field="org_phone"></has-error>
		                        </div>

		                        <div class="form-group">
		                          <label>Email</label>
		                            <input v-model="form.org_email" type="text" ref="org_email" name="org_email" class="form-control" :class="{ 'is-invalid': form.errors.has('org_email') }" placeholder="Email">
		                          <has-error :form="form" field="org_email"></has-error>
		                        </div>

		                        <div class="form-group">
		                          <label>URL</label>
		                            <input v-model="form.org_url" type="text" ref="org_url" name="org_url" class="form-control" :class="{ 'is-invalid': form.errors.has('org_url') }" placeholder="Website">
		                          <has-error :form="form" field="org_url"></has-error>
		                        </div>

	                       	  </div>
	                        </div>


                      		
	                        <div class="row">
	                        	<div class="col-md-12 text-center">
	                        	    <span v-if="ShowOnChangeImage != null">
		                              <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px;height:auto;">
		                            </span>
		                            
		                            <span v-else>
		                             <img v-if="form.org_logo == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
		                             <img v-if="form.org_logo === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
		                             <img v-else-if="form.org_logo === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:150px;">
		                              <img v-else-if="form.org_logo != '' " :src="'../'+form.org_logo" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:150px;">
		                            </span> 
		                            <!-- <img :src="'../'+NoIconUrl"> -->
	                        	</div>
	                        </div>
	                        <div class="row">
	                          <div class="col-md-12">
	                            <div class="form-group">
	                              <label for="org_logo">Logo</label>
	                              <input @change="onImageChange" type="file" ref="org_logo" name="org_logo" class="form-control" />
	                              <!-- @change="updateCatImg" -->
	                            </div>
	                          </div>
	                        </div>


                      	</div>                      	
                      	</div><!-- row inside form -->
                        

                        <div class="form-group mt-2">
                          <button type="submit" class="btn btn-primary btn-flat btn-sm"> <i class="far fa-edit"></i> Update</button>

                        </div>

                      </div> 

                    </form>


                </div>
              </div><!-- /vue-card-item -->

           </div><!--/Form Area-->

        </div><!--/Row -->
    </div><!-- /Card Body -->

</div><!-- /Card section --> 

</div><!-- /container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	export default {
	    name: "OrganizationInfo",
	    
	    data () {
	      return {
	        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        ShowOnChangeImage:null,	       

	        // Create a new form instance
	        form: new Form({
	          id: '',
	          org_name: '',
	          org_business_type: '',
	          org_desc: '',
	          org_license_desc: '',
	          closing_period: '',
	          org_email: '',
	          org_phone: '',
	          org_url: '',
	          org_address: '',
	          city: '',
	          state: '',
	          country: '',
	          org_logo: '',
	          
	        })
	      }
	    },//end data
	

		methods:{
		  fetchOrgInfo(){
		    //axios.get('http://127.0.0.1:8000/spa/OrgInfo')
	        
	        axios.get('/spa/OrgInfo/1/edit')
	          .then( ( response ) => {
	          	 this.form.fill(response.data); 
	             //console.log(response.data);
	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            toastr.warning('Something is wrong!');
	          })
	      },

	      updateOrganizationInfo(){ 
	        this.form.put('/spa/OrgInfo/'+this.form.id)
	          .then(( {data} ) => { 
	          	//console.log(data.data);
	            if(data.success){ 	          
	              toastr.success(data.success);  
	            }
	            if(data.errors){
	              toastr.warning(data.errors); 
	            }

	          })
	          .catch( () => {
	            toastr.warning('Something is wrong!');
	          }) 
	      },
			
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
	            this.form.org_logo = reader.result; //push base64 to logo veriable
	          };          
	          reader.readAsDataURL(file);
	        }
	      }

		}, //end Methods

		created(){

			this.fetchOrgInfo();
		},
		

  	} //end export default

</script>

<style>
	
</style>
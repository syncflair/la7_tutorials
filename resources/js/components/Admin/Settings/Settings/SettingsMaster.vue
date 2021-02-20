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
      <div class="col-md-6 text-left"><h5>Settings</h5></div>
      <div class="col-md-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item active">Dashboard</li>
            <li class="breadcrumb-item active">Settings</li>
            <li class="breadcrumb-item"><a>Settings</a></li>
        </ol>
      </div>           
    </div>
  </div><!-- /Card Header -->


  <!-- Card Body -->
  <div class="card-body">
    <!--Row -->
    <div class="row mt-1 mb-4">

      <!--Form Area-->
      <div class="col-md-12 col-sm-10- offset-md-1- text-right-">  

	    <!-- vue-card-item -->
	    <div class="card vue-card-item border-lef-style">
	    <div class="card-header"><h4>Settings</h4></div>
	      <div class="card-body card-body-custome">

            <form id="setting-master-form" @submit.prevent="updateSettingsMasterInfo()" >

              <div class="card card-primary card-outline card-outline-tabs"><!--card-outline-tabs-->
              	
              	<div class="card-header p-0 border-bottom-0"> <!--card-header tab-->
              	  <ul class="nav nav-tabs" id="custom-tabs" role="tablist">
			        <li class="nav-item">
			          <a class="nav-link active" id="tab-one" data-toggle="pill" href="#tabs-body-one" role="tab" aria-controls="tabs-body-one" aria-selected="true">General</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" id="tabs-two" data-toggle="pill" href="#tabs-body-two" role="tab" aria-controls="tabs-body-two" aria-selected="false">Media</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" id="tabs-three" data-toggle="pill" href="#tabs-body-three" role="tab" aria-controls="tabs-body-three" aria-selected="false">Image Settings</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" id="tabs-four" data-toggle="pill" href="#tabs-body-four" role="tab" aria-controls="tabs-body-four" aria-selected="false">Options</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" id="tabs-five" data-toggle="pill" href="#tabs-body-five" role="tab" aria-controls="tabs-body-five" aria-selected="false">Five</a>
			        </li>
			      </ul>
              	</div><!--End card-header tab-->

              	<div class="card-body"><!--card-body tab-->              		
              	  <div class="tab-content" id="custom-tabs-Content"> <!--custom-tabs-Content-->

              	  	<div class="tab-pane fade active show" id="tabs-body-one" role="tabpanel" aria-labelledby="tab-one">
              	  	  <div class="row">
   	  					<div class="col-md-10 offset-1">

   	  					  <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Site Title</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.site_title" type="text" name="site_title" class="form-control" :class="{ 'is-invalid': form.errors.has('site_title') }" placeholder="Site Title">
                      		  <has-error :form="form" field="site_title"></has-error>
			                </div> 
			              </div>

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">URL</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.site_url" type="text" name="site_url" class="form-control" placeholder="Ex. http://sorboraho.com">
			                </div> 
			              </div>

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Admin Email</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.site_admin_email" type="text" name="site_admin_email" class="form-control" :class="{ 'is-invalid': form.errors.has('site_admin_email') }" placeholder="Admin Email">
                      		  <has-error :form="form" field="site_admin_email"></has-error>
			                </div> 
			              </div>

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Notify by email</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.notify_by_email" type="text" name="notify_by_email" class="form-control" :class="{ 'is-invalid': form.errors.has('notify_by_email') }" placeholder="Verify by email">
                      		  <has-error :form="form" field="notify_by_email"></has-error>
			                </div> 
			              </div>


			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Keys</label>                      
			                </div>
			                <div class="col-sm-10">
                      		  <textarea v-model="form.site_keys" ref="site_keys" name="site_keys" class="form-control" placeholder="Site Keys"></textarea>
			                </div> 
			              </div>	

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Meta</label>                      
			                </div>
			                <div class="col-sm-10">
                      		  <textarea v-model="form.site_meta" ref="site_meta" name="site_meta" class="form-control" placeholder="Site meta"></textarea>
			                </div> 
			              </div>

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Site Details</label>                      
			                </div>
			                <div class="col-sm-10">
                      		  <textarea v-model="form.site_desc" ref="site_desc" name="site_desc" class="form-control" placeholder="Site Descsiption"></textarea>
			                </div> 
			              </div>


   	  					</div>
   	  				  </div>	
              	  	</div><!--teb-one-->

              	  	<div class="tab-pane fade show" id="tabs-body-two" role="tabpanel" aria-labelledby="tab-two">

              	  	  <div class="row">
   	  				    <div class="col-md-10 offset-1">
   	  				    	logo
			            </div>
			          </div>

			          <div class="row">
   	  				    <div class="col-md-10 offset-1">
   	  				    	favicon
			            </div>
			          </div>

			          <div class="row">
   	  				    <div class="col-md-10 offset-1">
   	  				    	watermark
			            </div>
			          </div>

              	  	</div><!--teb-two-->

              	  	<div class="tab-pane fade show" id="tabs-body-three" role="tabpanel" aria-labelledby="tab-three">
              	  	  <div class="row">
   	  					<div class="col-md-10 offset-1">

   	  					  <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Image Store to</label>                      
			                </div>
			                <div class="col-sm-10 pl-4 mt-2">
				                <div class="row">
				                	<div class="col-sm-2">
					                  <input @click="show_s3_input = false" v-model="form.image_store_to" class="form-check-input" type="radio" value="local">
		                          	  <label class="form-check-label">Local Sotre</label>
					                </div> 
					                <div class="col-sm-2">
					                  <input @click="show_s3_input = true" v-model="form.image_store_to" class="form-check-input" type="radio" value="s3" >
		                          	  <label class="form-check-label">s3 Bucket</label>
					                </div> 
					                <div class="col-sm-6"></div>
				                </div>
			                </div>			                
			              </div>

   	  					  <div v-if="show_s3_input === true" class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">AWS S3 URL</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.aws_s3_url" type="text" name="aws_s3_url" class="form-control" placeholder="s3 bucket url">
			                </div> 
			              </div>

			              

			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Watermark by</label>                      
			                </div>
			                <div class="col-sm-10 pl-4 mt-2">
				                <div class="row">
				                	<div class="col-sm-3">
					                  <input @click="show_watermark_text = false; show_watermark_icon = true;" v-model="form.watermark_by" class="form-check-input" type="radio" value="wByIcon">
		                          	  <label class="form-check-label">Watermark by Icon</label>
					                </div> 
					                <div class="col-sm-3">
					                  <input @click="show_watermark_icon = false; show_watermark_text = true;" v-model="form.watermark_by" class="form-check-input" type="radio" value="wByText" >
		                          	  <label class="form-check-label">Watermark by Text</label>
					                </div> 
					                <div class="col-sm-4"></div>
				                </div>
			                </div>			                
			              </div>

			              <div v-if="show_watermark_icon === true" class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Watermark URL</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.watermark_icon" type="text" name="watermark_icon" class="form-control" placeholder="Watermark image url">
			                </div> 
			              </div>

			              <div v-if="show_watermark_text === true" class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Watermark Text</label>                      
			                </div>
			                <div class="col-sm-10">
			                  <input v-model="form.watermark_text" type="text" name="watermark_text" class="form-control" placeholder="Watermark text">
			                </div> 
			              </div>

			              <!--Image Resolation-->
			              <div class="row form-group">
			                <div class="col-sm-2 text-right">
			                  <label class="pt-2">Image Resolation</label>                      
			                </div>
			                <div class="col-sm-10">

			                	<table class="table-sm table table-striped">
				                  <tr class="mb-2">
				                    <th width="30%">Modules</th>
				                    <th width="10%">Width Pixels</th>
				                    <th width="10%">Height Pixels</th>
				                    <th width="45%">Details</th>
				                    <th width="5%">#</th>
				                  </tr>

					              <tr v-for="(input, key) in form.image_resolution" :key="key">
					                  <td>
					                    <div class="form-group-">
					                      <input type="text" class="form-control form-control-sm"" v-model="input.img_module" name="img_module" placeholder="Module">  
					                    </div> 
					                  </td>

					                  <td>
					                    <div class="form-group-">
					                      <input type="number" class="form-control form-control-sm"" v-model="input.width_pixels" name="width_pixels" placeholder="Width pixels">  
					                    </div> 
					                  </td>
					                  <td>
					                    <div class="form-group-">
					                      <input type="text" class="form-control form-control-sm"" v-model="input.height_pixels" name="height_pixels" placeholder="Height pixels">  
					                    </div> 
					                  </td>

					                  <td>
					                    <div class="form-group-">
					                      <input type="text" class="form-control form-control-sm"" v-model="input.img_resulution_desc" name="img_resulution_desc" placeholder="Details">  
					                    </div> 
					                  </td>
					                  
					                  <td>
					                    <div class="form-group-">
					                      <i class="fas fa-minus-circle danger pointer" @click.prevent="remove_img_resolution(key)" v-show="key || ( !key && form.image_resolution.length > 1)" title="Remove"></i>
					                      <i class="fas fa-plus-circle green pointer" @click.prevent="add_img_resolution(key)" v-show="key == form.image_resolution.length-1" title="Add"></i> 
					                    </div>                   
					                  </td>
					              </tr>

					              

					            </table>
			                  
			                </div> 
			              </div><!--End Image Resolation-->


			              
			              <!-- <div class="row">
			              <div class="col-md-12">			            
			              		
			              </div>			              	
			              </div> -->



   	  					</div>
   	  				  </div>
              	  	</div><!--teb-three-->

              	  	<div class="tab-pane fade show" id="tabs-body-four" role="tabpanel" aria-labelledby="tab-four">
              	  		<div class="row">
	   	  				    <div class="col-md-10 offset-1">

		              	  	  <div class="row form-group">
				                <div class="col-sm-2 text-right">
				                  <label class="pt-2">Select Language</label>                      
				                </div>
				                <div class="col-sm-10">
	                      		  <select v-model="form.language_id" class="form-control form-control-sm-" name="language_id" >
				                      <option disabled value="">Select Status ..</option>                
				                      <option v-for="lan in allLanguages" :key="lan.id" v-bind:value="lan.id">
				                      	{{lan.lang_name}} ( {{lan.lang_code}} )
				                      </option> 
				                  </select>
				                </div> 
					          </div>

					          <div class="row form-group">
				                <div class="col-sm-2 text-right">
				                  <label class="pt-2">Select Currency</label>                      
				                </div>
				                <div class="col-sm-10">
	                      		  <select v-model="form.currency_id" class="form-control form-control-sm-" name="currency_id" >
				                      <option disabled value="">Select Status ..</option>                
				                      <option v-for="curr in allCurrencies" :key="curr.id" v-bind:value="curr.id">
				                      	{{curr.currency_name}} ( {{curr.currency_code}} / {{curr.currency_short_code}} )
				                      </option> 
				                  </select>
				                </div> 
					          </div>

				            </div>
				          </div>
              	  	</div><!--teb-four-->

              	  	<div class="tab-pane fade show" id="tabs-body-five" role="tabpanel" aria-labelledby="tab-five">
              	  		Five
              	  	</div><!--teb-five-->


              	  </div><!--End custom-tabs-Content-->
              	</div><!--End card-body tab-->

              </div><!-- End card-outline-tabs-->

              <div class="form-group mt-2">
                  <!-- <button type="submit" class="btn btn-primary btn-flat btn-sm"> <i class="far fa-edit"></i> Update</button> -->
			  </div>

            </form>

                  <button type="submit" form="setting-master-form" class="btn btn-primary btn-flat btn-sm"> <i class="far fa-edit"></i> Update</button>

            <!-- <button type="submit" form="login-form" name="login_user" class="login-form-btn">
        <B>Autentificate</B>
</button> -->

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

	import { mapState } from 'vuex' //for user MapState
	export default {
	    name: "SettingsMaster-Info",
	    
	    data () {
      	  return {
	        //NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
	        //ShowOnChangeImage:null,

	        //s3 input is show or not
	        show_s3_input: false,
	        show_watermark_icon: false,
	        show_watermark_text: false,


	        // Create a new form instance
	        form: new Form({
	          id: '',
	          //General Settings
	          site_title: '',
	          site_admin_email: '',
	          notify_by_email:'',
	          site_desc: '',
	          site_keys: '',
	          site_meta: '',
	          site_url: '',

	          //option
	          language_id:'',
	          currency_id:'',

	          //Image Settings
	          image_store_to: '',
	          aws_s3_url: '',
	          watermark_by:'',
	          watermark_icon:'',
	          watermark_text:'',
	          image_resolution: [], 
          
	        })
	      }
	    },//end data

	    computed: {
	    	/*userStatus get form commonSotreForAll*/	
	        ...mapState( 'commonStoreForAll', ['allLanguages','allCurrencies'] ),     
	  	},
	

		methods:{
		  // add_img_resolution() {
	   //       this.form.image_resolution.push({ img_module:'', width_pixels: '', height_pixels:'', img_resulution_desc:''  });
	   //    },
	   //    remove_img_resolution(index) { 
	   //      this.form.image_resolution.splice(index, 1);
	   //    },

		  fetchSettings(){
		  	
	        axios.get('/spa/Settings-Info/1/edit')	        
	          .then( ( response ) => {
	          	this.form.fill(response.data); 	         	
	         	if(response.data.image_store_to === 'local' ){this.show_s3_input = false;}else{ this.show_s3_input = true}
	         	if(response.data.watermark_by === 'wByIcon' ){
	         		this.show_watermark_icon = true;
	         		this.show_watermark_text = false;
	         	}else if(response.data.watermark_by === 'wByText' ){
	         	 this.show_watermark_text = true;
	         	 this.show_watermark_icon = false;
	         	}

	         	if(response.data.image_resolution === null){
	          	 	this.form.image_resolution = [{ img_module:'', width_pixels: '', height_pixels:'', img_resulution_desc:''  }];
	         	}

	          })
	          .catch( (errors) => {  
	            //console.log(errors); 
	            toastr.warning('Something is wrong!');
	          })
	      },

	      updateSettingsMasterInfo(){ 
	      	this.$Progress.start(); //using progress-bar package

	        this.form.put('/spa/Settings-Info/'+this.form.id)
	          .then(( {data} ) => { 
	          	//console.log(data.data);
	            if(data.success){ 	 
	            	this.$Progress.finish();          
	             	toastr.success(data.success);

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
			
		  //Make image as base64 
	      // onImageChange(e){
	      //   //let file = e.target.files || e.dataTransfer.files;
	      //   let file = e.target.files[0];        
	      //   //console.log(file);
	      //   this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
	      //   let reader = new FileReader();
	      //   //let vm = this;
	      //   if(file['size'] > 512000 ){  //512Kb = 512000Byte
	      //     toastr.warning('Please select file size within 500kb');
	      //   }else{          
	      //     reader.onloadend = (file) => {
	      //       //console.log(reader.result);
	      //       this.form.org_logo = reader.result; //push base64 to logo veriable
	      //     };          
	      //     reader.readAsDataURL(file);
	      //   }
	      // }

		}, //end Methods

		created(){

			this.fetchSettings();

			this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get Language
			this.$store.dispatch('commonStoreForAll/fetchCurrencies'); //get currency
		},
		

  	} //end export default

</script>

<style>
	
</style>
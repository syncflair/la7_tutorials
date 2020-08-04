<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Product</span>
        	<span v-show="editMode">Update Product</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/ProductMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Products
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  





<!-- ############################################# Input Body ####################################################### -->
<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">
<div class="row"><!--form area row-->
<div class="col-md-12">    



  <div class="card card-primary card-outline card-outline-tabs">
    <div class="card-header p-0 border-bottom-0">
      <ul class="nav nav-tabs" id="custom-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="tab-one" data-toggle="pill" href="#tabs-body-one" role="tab" aria-controls="tabs-body-one" aria-selected="true">General</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tabs-two" data-toggle="pill" href="#tabs-body-two" role="tab" aria-controls="tabs-body-two" aria-selected="false">Data & Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tabs-three" data-toggle="pill" href="#tabs-body-three" role="tab" aria-controls="tabs-body-three" aria-selected="false">Attribute</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tabs-four" data-toggle="pill" href="#tabs-body-four" role="tab" aria-controls="tabs-body-four" aria-selected="false">Specification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tabs-five" data-toggle="pill" href="#tabs-body-five" role="tab" aria-controls="tabs-body-five" aria-selected="false">Discount</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tabs-six" data-toggle="pill" href="#tabs-body-six" role="tab" aria-controls="tabs-body-six" aria-selected="false">Images</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content" id="custom-tabs-Content">
        <div class="tab-pane fade active show" id="tabs-body-one" role="tabpanel" aria-labelledby="tab-one">
          
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <label>Product name for system *</label>
                  <input v-model="form.sys_pro_name" type="text" ref="sys_pro_name" name="sys_pro_name" class="form-control" :class="{ 'is-invalid': form.errors.has('sys_pro_name') }" placeholder="product name for system">
                <has-error :form="form" field="sys_pro_name"></has-error>
              </div>               
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Product type *</label>
                <select v-model="form.pro_type" class="form-control form-control-sm-" id="pro_type" name="pro_type" :class="{ 'is-invalid': form.errors.has('pro_type') }" >
                    <option disabled value="">Select type ..</option>                
                    <option v-for="pt in productTypes" v-bind:value="pt.name">
                      {{pt.name}}
                    </option>                       
                 </select>
                 <has-error :form="form" field="pro_type"></has-error>  
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Status *</label>
                <select v-model="form.status_m_id" class="form-control form-control-sm-" id="status_m_id" name="status_m_id" :class="{ 'is-invalid': form.errors.has('status_m_id') }" >
                      <option disabled value="">Select product status ..</option>                
                      <option v-for="a_status in AllStatus" :key="a_status.id" v-bind:value="a_status.id">{{a_status.status_name}}</option> 
                </select>
                <has-error :form="form" field="status_m_id"></has-error>
              </div> 
            </div>
          </div> 


          <!-- Dynamic language form -->
          <div class="row">
            <div class="col-md-12 col-sm-12">

              <table class="table">
                <tr v-for="(pt, index) in form.pro_translation" :key="index">
                  <td>
                    <div style="background:rgba(0, 0, 0, 0.06);" class="alert- alert-warning- text-center mb-0">{{pt.lang_code}}</div>
                    <input v-model="pt.language_id" type="hidden" name="language_id[]">
                    <input v-model="pt.lang_code" type="hidden" name="lang_code[]">

                    <div class="form-group">                      
                      <label for="cat_img">Product {{pt.lang_code}}</label>
                        <input v-model="pt.product_name" type="text" class="form-control" name="product_name[]" :class="{ 'is-invalid': form.errors.has('product_name') }">
                        <has-error :form="form" field="product_name"></has-error>
                    </div>
                  
                    <!-- <div class="form-group">
                      <label for="cat_img">Detials {{pt.lang_code}}</label>
                      <textarea v-model="pt.product_desc" ref="product_desc" name="product_desc[]" class="form-control"  placeholder="Details"> </textarea>
                    </div> -->

                    <div class="form-group">
                      <label for="cat_img">Detials {{pt.lang_code}}</label>
                      <vue-editor v-model="pt.product_desc"  name="product_desc[]" placeholder="Product Details"> </vue-editor>
                    </div>

                  </td>
                </tr>
              </table>

            </div>
          </div>  <!-- end Dynamic language form -->



        </div><!--End tab-body-one-->
        <div class="tab-pane fade" id="tabs-body-two" role="tabpanel" aria-labelledby="tabs-two">

          <div class="row">
            <div class="col-md-2">
              <div class="form-group">
                <label>Product code </label>
                <input v-model="form.pro_code" type="text" name="pro_code" class="form-control" placeholder="Internal product code">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Model </label>
                <input v-model="form.pro_model" type="text" name="pro_model" class="form-control" placeholder="Product Model">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>SKU</label>
                <input v-model="form.sku" type="text" name="sku" class="form-control" placeholder="Stock Keeping Unit">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>UPS</label>
                <input v-model="form.ups" type="text" name="ups" class="form-control" placeholder="Universal Product Code">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>ISBN</label>
                <input v-model="form.isbn" type="text" name="isbn" class="form-control" placeholder="International Book Number">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>MPN</label>
                <input v-model="form.mpn" type="text" name="mpn" class="form-control" placeholder="Manufacture Part Number">
              </div> 
            </div>
          </div> 


          <div class="row">
            <div class="col-md-2">
              <div class="form-group">
                <label>Quantity</label>
                <input v-model="form.pro_qty" type="text" ref="pro_qty" name="pro_qty" class="form-control" placeholder="Product quantity">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Price</label>
                  <input v-model="form.pro_price" type="text" ref="pro_price" name="pro_price" class="form-control" placeholder="Product price">
              </div> 
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Sale Price</label>
                  <input v-model="form.pro_sale_price" type="text" ref="pro_sale_price" name="pro_sale_price" class="form-control" placeholder="Product Sale price">
              </div> 
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
          </div> 

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label>Brand</label>
                <select v-model="form.brand_id" class="form-control form-control-sm-" id="brand_id" name="brand_id" >
                      <option disabled value="">Select brand ..</option>                
                      <option v-for="brand in AllBrands" :key="brand.id" v-bind:value="brand.id">{{brand.brand_name}}</option> 
                </select>
              </div> 
            </div>
            <div class="col-md-3">
              
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" style="">
                <label style="margin-left: 0px !important;">Select Category</label>
                <multi-select-app-one
                  :options="AllCategory"
                  :autoSearchOptions="autoSearchCategories" 
                  :filterBy="filterBy"
                  :place-holder="placeHolder"
                  :value-property="valueProperty"
                  v-model="form.pro_category" 
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" style="">
                <label style="margin-left: 0px !important;">Select Supplier</label>
                <!-- <multi-select-app-one
                  :options="AllCategory"
                  :autoSearchOptions="autoSearchCategories" 
                  :filterBy="filterBy"
                  :place-holder="placeHolder"
                  :value-property="valueProperty"
                  v-model="form.pro_category" 
                /> -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" style="">
                <label style="margin-left: 0px !important;">Select Shop</label>
                <!-- <multi-select-app-one
                  :options="AllCategory"
                  :autoSearchOptions="autoSearchCategories" 
                  :filterBy="filterBy"
                  :place-holder="placeHolder"
                  :value-property="valueProperty"
                  v-model="form.pro_category" 
                /> -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" style="">
                <label style="margin-left: 0px !important;">Related Product</label>
                <!-- <multi-select-app-one
                  :options="AllCategory"
                  :autoSearchOptions="autoSearchCategories" 
                  :filterBy="filterBy"
                  :place-holder="placeHolder"
                  :value-property="valueProperty"
                  v-model="form.pro_category" 
                /> -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" style="">
                <label style="margin-left: 0px !important;">Downloadable Link</label>
                <!-- <multi-select-app-one
                  :options="AllCategory"
                  :autoSearchOptions="autoSearchCategories" 
                  :filterBy="filterBy"
                  :place-holder="placeHolder"
                  :value-property="valueProperty"
                  v-model="form.pro_category" 
                /> -->
              </div>
            </div>
          </div>




        </div><!--End tab-body-two-->
        <div class="tab-pane fade" id="tabs-body-three" role="tabpanel" aria-labelledby="tabs-three">
          <div class="row">
            <div class="col-md-12" style="border:1px solid rgba(0, 0, 0, 0.06); background: rgba(0, 0, 0, 0.06)">      
              <span v-for="(attrib, key) in AllAttributes">
                    {{attrib.attribute_name}} 
                   <input type="checkbox" @click="generateAttribute(attrib.attribute_name, key, $event)" />
              </span>        <!-- v-model="attrib.attribute_name"  -->             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              {{form.pro_attributes}}
              <!-- <span v-for="pa in form.pro_attributes"> {{pa.data}}</span> -->
              }
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-md-12">
              <table class="table-sm table table-striped">
                <tr class="mb-2">
                  <th width="25%">Specification Name</th>
                  <th width="45%">Details</th>
                  <th width="15%">Serial No</th>
                  <th width="15%">Action</th>
                </tr>

              </table>
            </div>
          </div> -->

        </div><!--End tab-body-three-->
        <div class="tab-pane fade" id="tabs-body-four" role="tabpanel" aria-labelledby="tabs-four">
           
          <div class="row">
            <div class="col-md-12">              
              <table class="table-sm table table-striped">
                <tr class="mb-2">
                  <th width="25%">Specification Name</th>
                  <th width="45%">Details</th>
                  <th width="15%">Serial No</th>
                  <th width="15%">Action</th>
                </tr>

                <tr v-for="(input, key) in form.pro_specification" :key="key">
                  <td >
                    <select v-model="input.specification_name" class="form-control" id="" name="specification_name" >
                          <option disabled value="">Select specification ..</option>                
                          <option v-for="specification in AllSpecifications" v-bind:value="specification.specification_name">{{specification.specification_name}}</option> 
                    </select>
                  </td>
                  <td>
                    <input type="text" class="form-control" v-model="input.specification_desc" name="specification_desc" placeholder="Description">  
                  </td>
                  <td>
                    <input type="text" class="form-control" v-model="input.specification_serial" name="specification_serial" placeholder="Serial Number"> 
                  </td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click.prevent="remove_specification(key)" v-show="key || ( !key && form.pro_specification.length > 1)"><i class="fas fa-minus-square"></i> Remove</button>
                    <button class="btn btn-sm btn-success" @click.prevent="add_specificaton(key)" v-show="key == form.pro_specification.length-1"><i class="fas fa-plus-square"></i> Add </button> 
                  </td>
                </tr>

              </table>
            </div>
          </div>


        </div><!--End tab-body-four-->
        <div class="tab-pane fade" id="tabs-body-five" role="tabpanel" aria-labelledby="tabs-five">
           
          <div class="row">
            <div class="col-md-12">              
              <table class="table-sm table table-striped">
                <tr class="mb-2">
                  <th width="20%">Customer Group</th>
                  <th width="9%">Quantity</th>
                  <th width="7%">Price</th>
                  <th width="7%">Priority</th>
                  <th width="15%">Start Date</th>
                  <th width="15%">End Date</th>
                  <th width="15%">Action</th>
                </tr>

                <tr v-for="(input, key) in form.pro_discount" :key="key">
                  <td >
                    <div class="form-group-">
                      <select v-model="input.customer_group" class="form-control" id="" name="customer_group" >
                            <option disabled value="">Select customer group ..</option>                
                            <option v-for="cg in CustomerGroups" v-bind:value="cg.name">{{cg.name}}</option> 
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="number" class="form-control" v-model="input.discount_qty" name="discount_qty" placeholder="Quantity">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="text" class="form-control" v-model="input.discount_price" name="discount_price" placeholder="Price">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="text" class="form-control" v-model="input.discount_priority" name="discount_priority" placeholder="Priority">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="date" class="form-control" v-model="input.discount_start_date" name="discount_start_date" placeholder="Start Date">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="date" class="form-control" v-model="input.discount_end_date" name="discount_end_date" placeholder="End Date">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <button class="btn btn-sm btn-danger" @click.prevent="remove_discount(key)" v-show="key || ( !key && form.pro_discount.length > 1)"><i class="fas fa-minus-square"></i> Remove</button>
                      <button class="btn btn-sm btn-success" @click.prevent="add_discount(key)" v-show="key == form.pro_discount.length-1"><i class="fas fa-plus-square"></i> Add </button> 
                    </div>                   
                  </td>
                </tr>

              </table>
            </div>
          </div>

        </div><!--End tab-body-five-->
        <div class="tab-pane fade" id="tabs-body-six" role="tabpanel" aria-labelledby="tabs-six">
           Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. 
        </div><!--End tab-body-six-->
      </div>
    </div>
    <!-- /.card -->
  </div>


</div>
</div><!--endform area row-->

<div class="row mr-4">
    <div class="col-12  text-right">
      <button type="submit" class="btn btn-primary btn-flat btn-sm ">
        <span v-show="!editMode">Save</span>
        <span v-show="editMode">Update</span>
    </button>           
    </div>
  </div> 
</form>
<!-- ############################################# End Input Body ####################################################### -->
  

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
    name: "ProductMasterForm",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage:null,
        editMode: false, //Use this for add edit using the same form   
        productTypes: [
  	      { name: 'General' },
          { name: 'Virtual'},
          { name: 'Service'},
  	      { name: 'Downloadable'},
		    ],  

        CustomerGroups: [
          { name: 'Default' },
          { name: 'Wholesale' },
        ],    

    		//form multiselect app for category
    		placeHolder:'Search Category',
    		filterBy:'cat_name',
    		valueProperty: 'id',

        //multiselect app for category
        placeHolder_pro:'Search Product',
        filterBy_pro:'sys_pro_name',
        valueProperty_pro: 'id',

        // Create a new form instance
        form: new Form({
          id: '',
          user_id:'',
          sys_pro_name:'',
          pro_code: '',          
          pro_type: '',
          pro_slug:'',
          status_m_id:'',
          brand_id:'',
          pro_model:'',
          sku:'',
          upc:'',
          isbn:'',
          mpn:'',
          pro_qty:'',
          pro_price:'',
          pro_sale_price:'',
          pro_image:'',
          is_enabled:'',

          pro_category:[],
          pro_attributes:[],
          pro_specification:[ { specification_name: '', specification_desc: '', specification_serial:'', } ],          
          pro_discount:[ { customer_group:'', discount_qty:'', discount_price:'', discount_priority:'', discount_start_date:'',           discount_end_date:'', } ],
          related_products:[],
          pro_translation: [],
          //pro_suppliers:[],
          //pro_shops:[],
          multi_image:[],
        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['allLanguages','AllStatus','AllBrands','AllCategory','autoSearchCategories','AllSpecifications','AllAttributes','AllAttributeValues'] ),        
        //...mapState( 'ProductMasterStore', ['AllProducts','autoSearchProducts'] ),        
  	}, //end Computed

  	methods:{
      //###################################### Specification Function ################################################
      add_specificaton() {
         this.form.pro_specification.push({ specification_name: '', specification_desc: '' });
         //alert('Kkk');
      },
      remove_specification(index) {
          this.form.pro_specification.splice(index, 1);
      },
      //###################################### End Specification Function ############################################

      //###################################### Discount Function ################################################
      add_discount() {
         this.form.pro_discount.push({ customer_group: '', discount_qty: '', discount_price:'', discount_priority:'',     discount_start_date:'', discount_end_date:'' });
      },
      remove_discount(index) {
          this.form.pro_discount.splice(index, 1);
      },
      //###################################### End Discount Function ############################################

      //###################################### End Attribute Function ############################################
      generateAttribute(data, key, event){
          //console.log(data+'='+event.target.checked);
          if(event.target.checked === true){
            //console.log(data);
            var data = this.data
            this.form.pro_attributes.push({ 
              data:[
                {attribute_vale:'', quantity: '', price:'', priority:''}
              ] 
            });
          }else{
            //console.log('No '+data);
            this.form.pro_attributes.splice(key, 1);
          }
      },
      //###################################### End Attribute Function ############################################

      pushToLanguageTranslationArray(){   
            // for(let i in this.allLanguages){
            //   this.form.pro_translation.push({ language_id:this.allLanguages[i].id, lang_code:this.allLanguages[i].lang_code, product_name: '', product_desc: '' }); 
            // }
          
            for (var i = 0; i < this.allLanguages.length; i++) {
              this.form.pro_translation.push( { language_id:this.allLanguages[i].id, lang_code:this.allLanguages[i].lang_code, product_name: '', product_desc: '' } ); 
            }       
                       
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
	            this.form.avatar = reader.result; //push base64 to logo veriable
	          };          
	          reader.readAsDataURL(file);
	        }
	    },

	    // Submit the form via a POST request
  		storeFormData() {  
  		  //console.log(this.form); 
  		  this.$Progress.start(); //using progress-bar package

  		  //this.form.post('/spa/Product-Info')
  		  this.form.post('/spa/Product-Info')
  		  .then(({ data }) => { 
  		    console.log(data);
          if(data.success){ 
  		      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
  		      toastr.success(data.success);             
  		      this.$Progress.finish();  
  		      this.form.reset();  //reset from after submit	
  		     // this.$refs.avatar.value = ''; //clear file input tag 
  			    //this.ShowOnChangeImage = null;
  			    this.$router.push({ path : '/spa/ProductMaster' });	 //route after successfule submit	      
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

  			this.form.put('/spa/Product-Info/'+this.form.id)
  			  .then(({ data }) => { 
  			    if(data.success){ 
  			      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
  			      this.$Progress.finish(); 
  			      toastr.success(data.success);               
  			      this.form.reset();  //reset from after submit
  			      this.editMode = false; 
  			     // this.$refs.avatar.value = ''; //clear file input tag 
  			  	 // this.ShowOnChangeImage = null;
  			  	  this.$router.push({ path : '/spa/ProductMaster' });	 //route after successfule submit
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
          if(this.$route.params.data.pro_specification === null){
            this.form.pro_specification = [{ specification_name: '', specification_desc: '', specification_serial:'', }];
          } 
          if(this.$route.params.data.pro_discount === null){
            this.form.pro_discount = [ { customer_group:'', discount_qty:'', discount_price:'', discount_priority:'', discount_start_date:'', discount_end_date:'',} ];
          } 
      		if(this.$route.params.data.pro_category === null){
      			this.form.pro_category = [];
      		}
          //   else{
  	    	// 	 // this.form.departments = Object.values(this.$route.params.data.departments).filter(
  	    	// 	 this.form.departments = Object.values(this.$route.params.data.departments).map(
          //  		 		item => {	
          //  		 			//return item['id'];
          //  		 			 return item.id;
          //  		 		}
  	      //   		 );
      	  // }	    	
      	}
      },

    }, //end Methods

  	created(){
  		this.fillForm();
    	this.$store.dispatch('commonStoreForAll/AllStatus', 'Product'); //get status with "Product" keyword

      this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get all language
      this.$store.dispatch('commonStoreForAll/fetchBrands'); //get all brands
      this.$store.dispatch('commonStoreForAll/fetchCategory'); //get all category
      this.$store.dispatch('commonStoreForAll/fetchSpecifications'); //get all Specification
      this.$store.dispatch('commonStoreForAll/fetchAttributeList'); //get all Attribute
      this.$store.dispatch('commonStoreForAll/fetchAttributeValue'); //get all Attribute Value


      //call from multi-select-app-one.vue
		  FireEvent.$on('AutoCompleteSearchForData', (data) => {
	        this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForCategory', data ); 
	    });

      if( this.editMode === false){
          setTimeout(() => {
            this.pushToLanguageTranslationArray();
          }, 2000);
      }
    	//console.log(this.form);
    }, //end Created

    mounted() {
      //console.log(this.form.pro_translation);        
      //console.log(this.form.pro_translation);
    }

  } //end export Default

   
</script>



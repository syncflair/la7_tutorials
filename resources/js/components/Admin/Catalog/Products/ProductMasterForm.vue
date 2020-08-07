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
        		<i class="fas fa-list"></i> All Products
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
            <div class="col-md-2">
              <div class="form-group">
                <label>Reward Points</label>
                  <input v-model="form.pro_reward_points" type="number" ref="pro_reward_points" name="pro_reward_points" class="form-control" placeholder="Product reward points">
              </div> 
            </div>
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
                <input type="checkbox" v-model="attrib.checked" :ref="attrib.attribute_name" @click="add_attribute(attrib.id, attrib.attribute_name, key, $event)" />
                <!-- v-model="attrib.checked" v-model="attrib.id"  -->
              </span> 
              <!-- {{AllAttributes['has_many_attribute_value']}}          -->
              <!-- <span v-for="abc in AllAttributes">
                {{abc.attribute_name}}{{abc.has_many_attribute_value}}
              </span> -->
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-12">

              <div class="card" v-for="(pa, key) in form.pro_attributes">
                <h5 class="card-header">
                  {{pa.attribute}} <!-- {{pa.attrib_id}}  -->
                  <button class="btn btn-sm btn-danger" @click.prevent="remove_attribute(key, pa.attribute)" title="Remove">
                    <i class="far fa-times-circle"></i> </button>
                </h5>

                <div class="card-body">
                  <table class="table-sm table table-striped">
                    <tr class="mb-2">
                      <th width="15%">Attribute Value</th>
                      <th width="15%">Quantity</th>
                      <th width="15%">Price</th>
                      <th width="15%">Priority</th>
                      <th width="10%">Subtrack Stock</th>
                      <th width="15%">Action</th>
                    </tr>
                    <tr v-for="(av, key) in pa.values"> <!-- values: [ { attribute_value: "", quantity: "", price: "", priority:"" }] -->
                      <td>
                        <select v-model="av.attribute_value" class="form-control" id="" name="attribute_value" >
                          <option disabled value="">Select value ..</option>                
                          <option v-for="aav in AllAttributeValues" v-bind:value="aav.attribute_value">{{aav.attribute_value}}</option> 
                        </select> <!-- AllAttributeValues selectedAllAttributeValues-->
                        <!-- <input type="text" class="form-control" v-model="av.attribute_value" name="attribute_value" placeholder="values">   -->
                      </td>
                      <td>
                        <input type="number" class="form-control" v-model="av.quantity" name="quantity" placeholder="values">  
                      </td>
                      <td>
                        <input type="number" class="form-control" v-model="av.price" name="price" placeholder="values">  
                      </td>
                      <td>
                        <input type="text" class="form-control" v-model="av.priority" name="priority" placeholder="priority">  
                      </td>
                      <td>
                        <input type="checkbox" v-model="av.subtract_stock" name="subtract_stock" />
                      </td>
                      <td>
                        <div class="form-group-">
                          <button class="btn btn-sm btn-danger" @click.prevent="remove_attribute_property(key, pa.attribute)" v-show="key || ( !key && pa.values.length > 1)"><i class="fas fa-minus-square"></i> Remove</button>
                          <button class="btn btn-sm btn-success" @click.prevent="add_attribute_property(key, pa.attribute)" v-show="key == pa.values.length-1"><i class="fas fa-plus-square"></i> Add </button> 
                        </div>                   
                      </td>
                    </tr>
                  </table>
                </div>
              </div> 

            </div>
          </div>

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
          

          <div  v-if="form.has_many_image.length" class="row mt-2 mb-4" style="background:#2196F3; margin: 5px 0px 0px 5px; padding: 10px; border-radius: 5px;">
            <div class="col-md-10 offset-1">             
                <div class="row align-center">
                <div v-for="(mi, index) in form.has_many_image" class="col-md-2">

                  <span>
                    <i @click="deleteImage(mi.id, index)" class="far fa-times-circle" style="cursor: pointer; background: #fff; padding: 4px 2px 2px 2px;   color: red; border-radius: 10px; margin-left: -10px;" title="click to Delete"></i>
                    <!-- <img :src="'../'+mi.image_url"  class="rounded float-left" :alt="mi.image_alt" height="100px" width="100px">                     -->
                    <img :src="mi.image_url"  class="rounded float-left" :alt="mi.image_alt" height="100px" width="100px">                    
                  </span>
                </div>
              </div>              
            </div>
          </div>


          <div class="uploader"
            @dragenter="OnDragEnter"
            @dragleave="OnDragLeave"
            @dragover.prevent
            @drop="onDrop"
            :class="{ dragging: isDragging }">

            <!-- <div class="row upload-control">
              <div class="col-md-8 offset-2">
                <div style="//padding: 20px; //background: rgba(0, 0, 0, 0.06);">
                  <div class="input-group"> 
                    <input type="text" :value="getFilesName()"  readonly class="form-control" placeholder="Choose your images">
                    <span class="input-group-btn">
                      <button @click.prevent="showFilePicker" class="btn btn-default" type="button">
                        <i class="fas fa-paperclip blue"></i>
                      </button>
                    </span>
                  </div>
                  <input @change="OnFileChange" type="file" name="" ref="image_file_link" multiple style="display: none;" >
                </div>
              </div>
            </div> -->

            <div>
            <!-- <div v-show="!form.pro_images.length"> -->
              <i class="fas fa-cloud-upload-alt"></i>
              <p class="mb-0">Drag your images here</p>
              <p class="mb-0">OR</p>
              <div class="file-input">
                  <label for="file">Select files</label>
                  <input type="file" id="file" @change="OnFileChange" multiple>
              </div>
              <!-- <div style=" //padding: 20px; //background: rgba(0, 0, 0, 0.06);">
                <div class="input-group"> 
                  <input type="text" :value="getFilesName()"  readonly class="form-control" placeholder="Choose your images">
                  <span class="input-group-btn" style="margin-top: -3px;">
                    <button @click.prevent="showFilePicker" class="btn btn-default" type="button">
                      <i class="fas fa-paperclip" style="color:blue !important;"></i>
                    </button>
                  </span>
                </div>
                <input @change="OnFileChange" type="file" name="" ref="image_file_link" multiple style="display: none;" >
              </div> -->
            </div>

            <div class="images-preview">
            <!-- <div class="images-preview" v-show="form.pro_images.length "> -->
              <div class="img-wrapper" v-for="(image, index) in form.pro_images" :key="index">
                <img :src="image" :alt="`Image Uplaoder ${index}`" @click="removeImage(index)" class="pointer" title="Click To Remove">
                  <!-- <div class="details">
                      <span class="name" v-text="form.pro_images[index].name"></span>
                      <span class="size" v-text="getFileSize(form.pro_images[index].size)"></span>
                  </div> -->
              </div>
            </div>

          </div><!-- end uploader -->

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

        //for images manipulation
        show_image_files_name: [], //use only to show image name in text field
        isDragging: false, 
        dragCount: 0,

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
          pro_reward_points:'',
          //pro_image:'',
          is_enabled:'',

          pro_category:[],
          pro_attributes:[],
          pro_specification:[ { specification_name: '', specification_desc: '', specification_serial:'', } ],          
          pro_discount:[ { customer_group:'', discount_qty:'', discount_price:'', discount_priority:'', discount_start_date:'',           discount_end_date:'', } ],
          related_products:[],
          pro_translation: [],
          pro_images:[],
          //pro_suppliers:[],
          //pro_shops:[],
          //multi_image:[],
          has_many_image:[], //only for get image from database
        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['allLanguages','AllStatus','AllBrands','AllCategory','autoSearchCategories','AllSpecifications','AllAttributes','AllAttributeValues'] ),        
        //...mapState( 'ProductMasterStore', ['AllProducts','autoSearchProducts'] ),  

        selectedAllAttributeValues() {
          // let fo = Object.values(this.AllAttributes).filter( av => {
          // // let fo = Object.values(this.AllAttributeValues).filter( av => {
          //   const result = av.find( ({ d }) => d.id === data );
          //       return av;
          //       //return this.form.pro_attributes.some(v => v['attrib_id'] === av['id']);
          //       // return this.form.pro_attributes.some(v => v['attrib_id'] === av['attribute_id']);
          // });
          // return fo;
        }

  	}, //end Computed

  	methods:{
      //###################################### Images Function ################################################
      showFilePicker(){ //chlick input file (hidden) showFilePicker click.
        this.$refs.image_file_link.click();
      },
      OnFileChange(e){
        //this.form.pro_images = e.target.files[0]; //for single file 
        // this.form.pro_images = e.target.files; 
        this.show_image_files_name = e.target.files; //this is for only show image name to input box using getFilesName()
        let files = e.target.files;  
        //const files = e.target.files;
        Array.from(files).forEach(file => this.converBase64(file));
        console.log(this.form.pro_images);
      },
      converBase64(file){ //Make image as base64         
        let reader = new FileReader();
        reader.onload = (e) => this.form.pro_images.push(e.target.result); //push base64 to imge
        reader.readAsDataURL(file);
      },
      OnDragEnter(e) {
        e.preventDefault();
        this.dragCount++;
        this.isDragging = true;
        return false;
      },
      OnDragLeave(e) {
        e.preventDefault();
        this.dragCount--;
        if (this.dragCount <= 0)  this.isDragging = false;
      },
      onDrop(e){
        e.preventDefault();
        e.stopPropagation();
        this.isDragging = false;
        const files = e.dataTransfer.files;
        Array.from(files).forEach(file => this.converBase64(file));
      },
      removeImage(index){
        this.form.pro_images.splice(index, 1);
        //console.log(this.form.pro_images);
      },

      getFileSize(size) { 
        const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
        let i = 0;
        while(size > 900) { size /= 1024; i++; }
        return `${(Math.round(size * 100) / 100)} ${fSExt[i]}`;
      },

      getFilesName(){ //show name to showFilePicker input field
        let filesName = []
        if(this.show_image_files_name.length > 0){
        // if(this.form.pro_images.length > 0){
          for(let file of this.show_image_files_name){
          // for(let file of this.form.pro_images){
            filesName.push(file.name);
          }
        }
        return filesName.join(", "); //this code basically join the selected files name separated by comma.
      },


      //###################################### End Images Function ################################################

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
      add_attribute(id, data, key, event){
        //console.log(data+'='+event.target.checked);
        if(event.target.checked === true){       
          const arrayData = { checked:false, attrib_id:id, attribute:data,  values: [ { attribute_value:"", quantity:"", price:"", priority:"", subtract_stock: false } ] };
          this.form.pro_attributes.push( arrayData );

          //this.$store.dispatch('commonStoreForAll/fetchAttributeList'); //get all Attribute
          // this.$store.dispatch('commonStoreForAll/fetchAttributeValue', id); //get all Attribute Value
        }else{
          //this.form.pro_attributes.splice(key, 1); //not working properly
          let i = this.form.pro_attributes.map(data => data.attrib_id).indexOf(id) // find index of your object
          this.form.pro_attributes.splice(i, 1) // remove it from array
        }
      },

      remove_attribute(key, attribute){
        this.form.pro_attributes.splice(key, 1);
        // this.$refs.attribute.checked = false;
        //alert(attribute );
      },

      add_attribute_property(key, data){ // add attribute velue inside attribute    
        // this.form.pro_attributes.push( { attribute_value:"", quantity:"", price:"", priority:"" } );
        const result = this.form.pro_attributes.find( ({ attribute }) => attribute === data );
        result.values.push({ attribute_value:"", quantity:"", price:"", priority:"", subtract_stock: false });
        //console.log(result);
        //console.log(this.form.pro_attributes);
      },

      remove_attribute_property(key, attribute){ // remove attribute velue from inside attribute 
        const result = this.form.pro_attributes.find( ({ attribute }) => attribute === attribute );
        result.values.splice(key, 1);        
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

      deleteImage(imageId, index){ //delete Single Image
        this.$Progress.start(); //using progress-bar package        
        //console.log(this.form.has_many_image);
        axios.post('/spa/Product-DeleteImage/'+imageId)
          .then(({ data }) => {
              this.form.has_many_image.splice(index, 1);
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
          if(this.$route.params.data.pro_attributes === null){
            this.form.pro_attributes = [];
          }
          if(this.$route.params.data.has_many_image){
            this.form.pro_images = [];
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




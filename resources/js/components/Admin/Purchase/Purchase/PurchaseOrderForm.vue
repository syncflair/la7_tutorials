<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <!-- <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Purchase Order</span>
        	<span v-show="editMode">Update - {{form.po_invoice}}</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/PurchaseOrderMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Purchase Order List
        	</router-link>
        </div>
      </div> -->
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row"><!--First Part-->
   	  	<div class="col-md-3">
          <div class="form-group">
            <!-- <label>Select Vendor *</label> -->
              <single-select-app-two                           
                :options="selectedVendor"
                @getAllDataListByIds="getSelectedDataByIdsForVendor"
                :autoSearchOptions="autoSearchVendor"
                @AutoCompleteSearchForData="AutoCompleteSearchForDataVendor"                   
                :filterBy="filterBy"
                :place-holder="placeHolder"
                :value-property="valueProperty"
                v-model="form.vendor_id"
                style="margin-top: 10px !important;" 
                :class="{ 'is-invalid': form.errors.has('vendor_id') }"
              />
              <has-error :form="form" field="vendor_id"></has-error>
          </div>         

   	    </div>

        <div class="col-md-3">
          <h4> Middle</h4>

        </div>

        <div class="col-md-3">
          <h4> Middle</h4>

        </div>

        <div class="col-md-3">

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>*Invoice</small></label>                      
            </div>
            <div class="col-sm-7">
              <input v-model="form.po_invoice" type="text" ref="po_invoice" name="po_invoice" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('po_invoice') }" placeholder="Purchase order invoice">
              <has-error :form="form" field="po_invoice"></has-error>
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>Purchase Date</small></label>                      
            </div>
            <div class="col-sm-7">
              <input type="date" class="form-control form-control-sm" v-model="form.po_date" name="po_date" placeholder="Purchase Date">
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small><b>*Payment Terms</b></small></label>                      
            </div>
            <div class="col-sm-7">
              <select v-model="form.po_payment_term" class="form-control form-control-sm" id="po_payment_term" name="po_payment_term" :class="{ 'is-invalid': form.errors.has('po_payment_term') }" >
                  <option disabled value="">Select payment term ..</option>                
                  <option v-for="pt in PaymentTerms" v-bind:value="pt.name">
                    {{pt.name}}
                  </option>                       
                </select>
                <has-error :form="form" field="po_payment_term"></has-error>
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>Due Date</small></label>                      
            </div>
            <div class="col-sm-7">
              <input type="date" class="form-control form-control-sm" v-model="form.po_due_date" name="po_due_date" placeholder="Due Date">
            </div> 
          </div>


        </div>

   	  </div><!--End First Part-->


      <div class="row mt-4"><!--Secound Part- Order Details-->
        <div class="col-md-12"> 
          
          <table class="table-sm table table-striped">
                <tr class="mb-2">
                  <th width="20%"><small>Product</small></th>
                  <th width="9%"><small>Qty</small></th>
                  <th width="7%"><small>Price</small></th>
                  <th width="7%"><small>Priority</small></th>
                  <th width="15%"><small>Start Date</small></th>
                  <th width="15%"><small>End Date</small></th>
                  <th width="5%"><small>Action</small></th>
                </tr>

                <tr v-for="(input, key) in form.pur_order_details" :key="key">
                  <td >
                    <div class="form-group-">
                      <!-- <select v-model="input.product_id" class="form-control" id="" name="product_id" >
                            <option disabled value="">Select customer group ..</option>                
                            <option v-for="cg in allCustomerGroups" v-bind:value="cg.id">{{cg.group_name}}</option> 
                      </select> -->
                      <single-select-app-two                           
                        :options="AutoCompleteSearchForDataProduct"
                        @getAllDataListByIds="getSelectedDataByIdsForProduct"
                        :autoSearchOptions="autoSearchProduct"
                        @AutoCompleteSearchForData="AutoCompleteSearchForDataProduct"                   
                        :filterBy="filterBy_product"
                        :place-holder="placeHolder_product"
                        :value-property="valueProperty_product"
                        v-model="input.product_id" 
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="number" class="form-control form-control-sm" v-model="input.discount_qty" name="discount_qty" placeholder="Quantity">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="text" class="form-control form-control-sm" v-model="input.discount_price" name="discount_price" placeholder="Price">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="text" class="form-control form-control-sm" v-model="input.discount_priority" name="discount_priority" placeholder="Priority">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="date" class="form-control form-control-sm" v-model="input.discount_start_date" name="discount_start_date" placeholder="Start Date">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <input type="date" class="form-control form-control-sm" v-model="input.discount_end_date" name="discount_end_date" placeholder="End Date">  
                    </div> 
                  </td>
                  <td>
                    <div class="form-group-">
                      <button class="btn btn-sm btn-danger" @click.prevent="remove_order_item(key)" v-show="key || ( !key && form.pur_order_details.length > 1)"><i class="fas fa-minus-square"></i></button>
                      <button class="btn btn-sm btn-success" @click.prevent="add_order_item(key)" v-show="key == form.pur_order_details.length-1"><i class="fas fa-plus-square"></i></button> 
                    </div>                   
                  </td>
                </tr>

              </table>

        </div>
      </div><!--End Secound Part- Order Details-->


      <div class="row"><!--Thireds Part-->
        <div class="col-md-6"> 
          

        </div>
        <div class="col-md-6"> 
          

        </div>
      </div><!--Thireds Part-->



   	  <div class="row mr-4">
   	  	<div class="col-12  text-right">
   	  		<button type="submit" class="btn btn-primary btn-flat btn-sm ">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Place Order</span>
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
    name: "EmployeeMasterForm",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage:null,
        deleteImageIcon: false, //Delete Image icon if image exist
        editMode: false, //Use this for add edit using the same form   
        PaymentTerms: [
          { name: 'Due' },
  	      { name: 'Partial' },
  	      { name: 'Paid'},
		    ],      

		    //For Single select app
        placeHolder:'Select Vendor',
        filterBy:'vendor_name',
        valueProperty: 'id',

        //Single select app for product
        placeHolder_product:'Select product',
        filterBy_product:'sys_pro_name',
        valueProperty_product: 'id', 
    

        // Create a new form instance
        form: new Form({
          id: '',
          vendor_id:'',
          po_date:'',
          po_payment_term:'',
          po_due_date:'',
          pur_order_details:[ { product_id:'', discount_qty:'', discount_price:'', discount_priority:'', discount_start_date:'',           discount_end_date:'', } ],

        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['userStatus'] ),
        ...mapState( 'PurchaseOrderMasterStore', ['selectedVendor', 'autoSearchVendor','selectedProduct','autoSearchProduct'] ),


        
  	},

  	methods:{
      //###################################### Purchase Order Details ################################################
      add_order_item() {
         this.form.pur_order_details.push({ product_id: '', discount_qty: '', discount_price:'', discount_priority:'',     discount_start_date:'', discount_end_date:'' });
      },
      remove_order_item(index) { 
        this.form.pur_order_details.splice(index, 1);
      },

      //###################################### End Purchase Order Details ################################################

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

  		  //this.form.post('/spa/PurchaseOrder-Info')
  		  this.form.post('/spa/PurchaseOrder-Info')
  		  .then(({ data }) => { 
  		    if(data.success){ 
  		      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
  		      toastr.success(data.success);             
  		      this.$Progress.finish();  
  		      this.form.reset();  //reset from after submit	
  		      this.$refs.avatar.value = ''; //clear file input tag 
  			  this.ShowOnChangeImage = null;
  			  this.$router.push({ path : '/spa/PurchaseOrderMaster' });	 //route after successfule submit	      
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

  			this.form.put('/spa/PurchaseOrder-Info/'+this.form.id)
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

      deleteImage(id){ 
        this.$Progress.start(); //using progress-bar package        
          //console.log(this.form.has_many_image);
          axios.post('/spa/PurchaseOrder-Info-DeleteImage/'+id)
            .then(({ data }) => {
                // this.ShowOnChangeImage = null;
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

	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.po_invoice.focus();  
	    		if(this.$route.params.data.departments.length === 0){
	    			this.form.departments = [];
	    		}else{
		    		 //return only department id from depertment list 
		    		 this.form.departments = Object.values(this.$route.params.data.departments).map(
	       		 		item => {	
	       		 			//return item['id'];
	       		 			 return item.id;
	       		 		}
		       		 );
	    		}	
          if(this.$route.params.data.avatar != null){
            this.deleteImageIcon = true;  
          }           	

	    	}
         
          //get selected Vendor based on form.vendor_id
          this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', this.form.vendor_id);
          this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProduct', this.form.pur_order_details.product_id);
	    },

      AutoCompleteSearchForDataVendor(data){
            this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataVendor', data ); 
      },
      getSelectedDataByIdsForVendor(data){
            this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', this.form.vendor_id);
      },

      AutoCompleteSearchForDataProduct(data){
            this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataProduct', data ); 
      },
      getSelectedDataByIdsForProduct(data){
            this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProduct', this.form.pur_order_details.product_id);
      },


	},

  	created(){
  		this.fillForm();
    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

      //call from multi-select-app-one.vue
		  FireEvent.$on('AutoCompleteSearchForData', (data) => {
	        this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data ); 
	    });


	    

    	//console.log(this.form);
    }



  } //end export Default

   
</script>
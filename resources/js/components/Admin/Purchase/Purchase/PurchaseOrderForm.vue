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
        <div class="col-md-12" style=""> 
          <div class="table-responsive-">
          <table class="table-sm table table-striped style-order-form-input">
            <tr class="mb-2">
              <th width="3%" scope="col"><small>#</small></th>
              <th width="15%" scope="col"><small>Product</small></th>
              <th width="3%" scope="col" title="Batch No of product"><small>Batch No</small></th>
              <th width="3%" scope="col" title="MFG Date (3/20)"><small>MFG</small></th>
              <th width="3%" scope="col" title="Expire Date (7/20)"><small>EXP</small></th>
              <th width="5%" scope="col" title="Details of product"><small>Details</small></th>
              <!-- <th width="3%" scope="col" title="Size of product"><small>Size</small></th>
              <th width="3%" scope="col" title="Color of product"><small>Color</small></th> -->

              <th width="4%" scope="col"><small>MRP</small></th>
              <th width="2%" scope="col"><small>Qty</small></th>
              <th width="3%" scope="col" title="Free qty of product"><small>Free Qty</small></th>
              
              <th width="3%" scope="col" title="Product Unit"><small>Unit</small></th>
              <th width="4%" scope="col" title="Product Unit Price"><small>Unit MRP</small></th>

              <th width="2%" scope="col" title="Discount Fixed"><small>D.F</small></th>
              <th width="2%" scope="col" title="Discount Percent"><small>D.%</small></th>

              <th width="3%" scope="col" title="Vat Fixed"><small>V.F</small></th> 
              <th width="3%" scope="col" title="Vat Percent"><small>V.%</small></th> 

              <th width="3%" scope="col" title="Product wise Total"><small>Total</small></th>        
              
              
            </tr>
            <!-- white-space: nowrap; -->

            <tr v-for="(input, key) in form.pur_order_details" :key="key">

              <td scope="col">
                <div class="form-group-">
                  <!-- <button class="btn btn-flat btn-sm btn-danger" @click.prevent="remove_order_item(key)" v-show="key || ( !key && form.pur_order_details.length > 1)"><i class="fas fa-minus-square"></i></button>
                  <button class="btn btn-flat btn-sm btn-success mt-1" @click.prevent="add_order_item(key)" v-show="key == form.pur_order_details.length-1"><i class="fas fa-plus-square"></i></button>  -->

                  <i class="fas fa-minus-circle danger pointer" @click.prevent="remove_order_item(key)" v-show="key || ( !key && form.pur_order_details.length > 1)" title="Remove"></i>
                  <i class="fas fa-plus-circle green pointer" @click.prevent="add_order_item(key)" v-show="key == form.pur_order_details.length-1" title="Add"></i> 

                </div>                   
              </td>

              <td scope="col">
                <div class="form-group-">
                  <!-- <select v-model="input.product_id" class="form-control" id="" name="product_id" >
                        <option disabled value="">Select customer group ..</option>                
                        <option v-for="cg in allCustomerGroups" v-bind:value="cg.id">{{cg.group_name}}</option> 
                  </select> -->
                  <single-select-app-two                           
                    :options="selectedProductList"
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
              <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.batch_no" name="batch_no">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.mfg_date" name="mfg_date" placeholder="3/20">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.exp_date" name="exp_date" placeholder="7/20">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.product_desc" name="product_desc">  
                </div> 
              </td>
              <!-- <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.pro_size" name="pro_size">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.pro_color" name="pro_color">  
                </div> 
              </td> -->
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" min="1" step="any" v-model="input.mrp_price" name="mrp_price">  
                  <!-- @change="calculateLineTotal(input)" -->
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.pro_qty" name="pro_qty">  
                  <!-- @change="calculateLineTotal(input)" -->
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.pro_free_qty" name="pro_free_qty">  
                </div> 
              </td>

               <td scope="col"> 
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.pro_unit" name="pro_unit">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" min="0" step=".01" v-model="input.unit_mrp" name="unit_mrp" 
                    >  
                </div> 
              </td>                           
              
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.discount_fixed" name="discount_fixed">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.discount_percent" name="discount_percent">  
                </div> 
              </td>
              
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.vat_fixed" name="vat_fixed">  
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.vat_percent" name="vat_percent">  
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <!-- <span v-model="input.pod_line_total"> {{input.pod_line_total}}</span> -->
                  <input readonly class="form-control form-control-sm" type="number" min="0" step=".01" v-model="input.pod_line_total" />
                </div> 
              </td>                    
            </tr>

          </table>
          </div>

        </div>
      </div><!--End Secound Part- Order Details-->


      <div class="row"><!--Thireds Part-->
        <div class="col-md-3"> 
          <div class="form-group">
            <label> <small>Payment Method</small></label>
              <select v-model="form.po_payment_method" class="form-control form-control-sm" id="po_payment_method" name="po_payment_method" >
                  <option disabled value="">Payment Type ..</option>                
                  <option value="">Cash</option>                
                  <option value="">Bank Transfer</option>
                  <option value="">Cheque</option>                

                  <!-- <option v-for="gender in genders" v-bind:value="gender.name">
                    {{gender.name}}
                  </option>  -->                      
               </select>                          
          </div>

          <div class="form-group">
              <label for="po_details"><small>Order Description</small></label>
              <textarea v-model="form.po_details" class="form-control" name="po_details"> </textarea>
          </div>

        </div>

        <div class="col-md-5"> </div>

        <div class="col-md-4 text-right"> 
          
          <div class="row form-group mb-1 mb-1">
            <div class="col-sm-8 text-right">
              <label class="pt-2-"><small>Sub Total:</small></label>                      
            </div>
            <div class="col-sm-4">
              <!--this also work-->
              <!-- <span> {{form.po_invoice_sub_total}} </span><span>Tk</span> -->
              <span> {{invoiceSubTotalAmount}} </span><span>Tk</span>
            </div> 
          </div>


          <div class="row mb-1">
            <div class="col-sm-8 text-right">
              <label class="pt-2-"><small>Discount:</small></label>                      
            </div>
            <div class="col-sm-4">
              <div class="row form-group mb-1">
                <div class="col-sm-6">
                  <input type="number" class="form-control form-control-sm" v-model="form.po_discount_fixed" name="po_discount_fixed" placeholder="Fixed">         
                </div>
                <div class="col-sm-6">
                  <input type="number" class="form-control form-control-sm" v-model="form.po_discount_percent" name="po_discount_percent" placeholder="%">  
                </div>                
              </div>
            </div> 
          </div>

          <div class="row form-group mb-2">
            <div class="col-sm-8 text-right">
              <label class="pt-2-"><small><strong>Total:</strong></small></label>                      
            </div>
            <div class="col-sm-4">
              <span> {{ form.po_invoice_total}} </span><span>Tk</span>
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-8 text-right">
              <label class="pt-2-"><small><strong>Paid Amount:</strong></small></label>                      
            </div>
            <div class="col-sm-4">
              <input type="number" class="form-control form-control-sm" v-model="form.po_paid_amount" name="po_paid_amount"> 
            </div> 
          </div>

        </div>
      </div><!--Thireds Part-->



   	  <div class="row mr-4- mt-2">
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
    {{product_id_list}}

</div><!--/vue-card-item -->
</template>

<script>
  import { mapState } from 'vuex' //for user MapState
  export default {
    name: "PurchaseOrderForm",
    
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
        placeHolder_product:'Product',
        filterBy_product:'sys_pro_name',
        valueProperty_product: 'id', 
    


        //multi product id
        product_id_list:[],
        // Create a new form instance
        form: new Form({
          id: '',
          vendor_id:'',
          po_date:'',
          po_payment_term:'',
          po_due_date:'',          
          pur_order_details:[{ 
            product_id:'', 
            batch_no:'',
            mfg_date:'', 
            exp_date:'',
            pro_desc:'',
            pro_size:'', 
            pro_color:'', 
            mrp_price:'',
            pro_qty:'',
            pro_free_qty:'',
            pro_unit:'',
            unit_mrp:'',
            discount_fixed:'', 
            discount_percent:'', 
            vat_percent:'',
            vat_fixed:'',
            pod_line_total: 0.00,
          }],
          po_payment_method:'',
          po_details:'',
          po_discount_fixed:'',
          po_discount_percent:'',
          po_paid_amount: 0.00,

          po_invoice_sub_total: 0.00,
          po_invoice_total: 0.00,
        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'ProductMasterStore', ['products','pagination'] ),
        ...mapState( 'commonStoreForAll', ['userStatus'] ),
        ...mapState( 'PurchaseOrderMasterStore', ['selectedVendor', 'autoSearchVendor','selectedProductList','autoSearchProduct'] ), 

        // finalAmount(){
        //   let price = 0;
        //   this.orderDetails.forEach(order => {
        //     price = price + order.price;
        //   });
        //   return price;
        // },   


        //Calculate Sub Total
        invoiceSubTotalAmount() {
            var price = 0;
            //Object.entries(this.form.pur_order_details).forEach( ([key, p]) => {
            Object.values(this.form.pur_order_details).forEach( (p) => {
                //price += p.pod_line_total;
                price = price + p.pod_line_total;
            });
            this.form.po_invoice_sub_total = price;
            return price;
        }, 

        // subTotalAmount: function(){

        //       return this.form.pur_order_details.reduce(function(total, item){

        //         // return total + (item.quantity * item.price); 
        //         return total + item.pod_line_total; 
        //       },0);
        //     }, 
  	},

    watch:{
      // form:{
      //   handler(value){
      //     console.log(value);
      //   }, deep: true
      // },

      //using “watch” on dynamic table rows in Vue Js
      'form.pur_order_details': { //'form': {
        handler (newValue, oldValue) {
          newValue.forEach((p) => {  // if(!isNaN(p.vat_percent)){ 

            if( p.discount_fixed != '' && p.discount_percent ==='' && p.vat_fixed ==='' && p.vat_percent === ''){              
              p.pod_line_total =  (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) 
            }
            else if( p.discount_fixed === '' && p.discount_percent != '' && p.vat_fixed ==='' && p.vat_percent === ''){              
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price;
              p.pod_line_total = (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent )
            }
            else if( p.discount_fixed === '' && p.discount_percent ==='' && p.vat_fixed !='' && p.vat_percent === ''){              
              p.pod_line_total = (p.mrp_price * p.pro_qty) + (p.pro_qty * p.vat_fixed)
            }
            else if( p.discount_fixed === '' && p.discount_percent ==='' && p.vat_fixed ==='' && p.vat_percent != ''){              
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;
              p.pod_line_total = (p.mrp_price * p.pro_qty) + (p.pro_qty * vatPercent )  //console.log(p.pod_line_total);
            }
            else if( p.discount_fixed != '' && p.discount_percent ==='' && p.vat_fixed !='' && p.vat_percent === ''){              
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) ) +  (p.pro_qty * p.vat_fixed)
            }
            else if( p.discount_fixed != '' && p.discount_percent ==='' && p.vat_fixed ==='' && p.vat_percent != ''){  
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;            
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) ) +  (p.pro_qty * vatPercent)
            }
            else if( p.discount_fixed === '' && p.discount_percent !='' && p.vat_fixed !='' && p.vat_percent === ''){  
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price;          
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent) ) +  (p.pro_qty * p.vat_fixed)
            }
            else if( p.discount_fixed === '' && p.discount_percent !='' && p.vat_fixed ==='' && p.vat_percent != ''){  
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price; 
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;            
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent) ) +  (p.pro_qty * vatPercent)
            }

            else{
              p.pod_line_total = p.mrp_price * p.pro_qty              
            }
            
          })
        },
        deep: true
      },

      form:{
        handler (value) {
          if( value.po_discount_fixed != '' &&  value.po_discount_percent ==='' ){              
            value.po_invoice_total =  value.po_invoice_sub_total - value.po_discount_fixed; 
          }
          else if(value.po_discount_fixed === '' &&  value.po_discount_percent !=''){              
            let o_discountPercent = (value.po_discount_percent / 100) * value.po_invoice_sub_total;
            value.po_invoice_total =  value.po_invoice_sub_total - o_discountPercent; 
          }else{
            value.po_invoice_total =  value.po_invoice_sub_total;
          }

        }, deep: true
      }, 

    },//end watch


  	methods:{

      //###################################### Purchase Order Details ################################################
      add_order_item() {
        this.form.pur_order_details.push({ 
          product_id:'', 
          batch_no:'',
          mfg_date:'', 
          exp_date:'',
          pro_desc:'',
          pro_size:'', 
          pro_color:'', 
          mrp_price:'',
          pro_qty:'',
          pro_free_qty:'',
          pro_unit:'',
          unit_mrp:'',
          discount_fixed:'', 
          discount_percent:'', 
          vat_percent:'',
          vat_fixed:'',
          pod_line_total: 0.00,
        });
      },
      remove_order_item(index) { 
        this.form.pur_order_details.splice(index, 1);
        this.product_id_list.splice(index, 1); //remove form product_id_list
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
          this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProductList', this.product_id_list);
	    },

      AutoCompleteSearchForDataVendor(data){
            this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataVendor', data ); 
      },
      getSelectedDataByIdsForVendor(data){
            //this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', this.form.vendor_id);
            this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', data);
      },

      AutoCompleteSearchForDataProduct(data){
            this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataProduct', data ); 
      },
      getSelectedDataByIdsForProduct(data){ 
          if(!this.product_id_list.includes(data)){
          // if(!this.product_id_list.includes(data)){
            this.product_id_list.push(data);
            //console.log(this.product_id_list);
          }else{
            toastr.warning('Already add this product!');
            // let i = this.product_id_list.map(d => d).indexOf(data) // find index of your object
            // this.product_id_list.splice(i, 1) // remove it from array
            //let i = this.form.pur_order_details.map(d => d.product_id).indexOf(data) // find index of your object
            //this.form.pur_order_details.splice(i, 1, data) // remove it from array
            
            //let SelectedValue = this.selectedOptions[key][this.valueProperty]; 
            //let index = this.form.pur_order_details.findIndex(v => v === data);
            //let index = this.form.pur_order_details.findIndex();
            // let i = this.form.pur_order_details.map(d => {
            //   return d.findIndex();
            // });

            //this.form.pur_order_details[index]['product_id'] = '';
             //console.log(i);
          } 

          this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProductList', this.product_id_list);
      },


	},

  	created(){
      this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);

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
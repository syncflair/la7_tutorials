<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Purchase Order</span>
        	<span v-show="editMode">Update - {{form.po_invoice}}</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/PurchaseOrderMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Purchase Order List
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row"><!--Top Part-->
   	  	<div class="col-md-3"><!--First-->
          <div class="form-group mb-0">
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
                style="margin-top: 0px !important; padding: 0px !important;" 
                :class="{ 'is-invalid': form.errors.has('vendor_id') }"
              />
              <has-error :form="form" field="vendor_id"></has-error>
          </div> 

          <div class="form-group mt-1 mb-0">
            <div v-if="selectedVendor.length != 0" class="ml-1">
              <!-- <p class="mb-0"><small>{{selectedVendor[0]['vendor_name']}}</small></p> -->
              <p class="mb-0 border-bottom-1"><small>{{selectedVendor[0]['vendor_phone']}}, {{selectedVendor[0]['vendor_email']}}</small></p>
              <p class="mb-0 border-bottom-1"><small>Vendor Type: {{selectedVendor[0]['vendor_type']}}</small></p>
              <p class="mb-0 border-bottom-1"><small>{{selectedVendor[0]['vendor_address']}}</small></p>             
            </div>

          </div>        

   	    </div><!--end first-->

        <div class="col-md-3"><!--Second-->

          <div v-if="authUser.role_id === 1" class="row form-group mb-1">            
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>Select Branch</small></label>                      
            </div>
            <div class="col-sm-7">
              <select v-model="form.branch_id" class="form-control form-control-sm" @change="onChangeBranch($event)"  name="branch_id" >
                  <option disabled value="">Select Branch/Store</option>                
                  <option v-for="branch in branches" :key="branch.id" v-bind:value="branch.id">{{branch.branch_name}}</option>    
              </select>
            </div> 
          </div>

        </div><!--end second-->

        <div class="col-md-3"> <!--Third-->
           <!-- <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>*Invoice</small></label>                      
            </div>
            <div class="col-sm-7">
              <input v-model="form.po_invoice" type="text" ref="po_invoice" name="po_invoice" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('po_invoice') }" placeholder="Purchase order invoice">
              <has-error :form="form" field="po_invoice"></has-error>
            </div> 
          </div> -->

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>*Invoice</small></label>                      
            </div>
            <div class="col-sm-7">
              <input v-model="form.po_invoice" type="text" ref="po_invoice" name="po_invoice" class="form-control form-control-sm"  readonly min="0" step=".01" placeholder="Ex. PO20-0001">
            </div> 
          </div>

        </div><!--end third-->

        <div class="col-md-3"><!-- Fourth -->

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
              <label class="pt-2-"><small>Payment Method</small></label>                      
            </div>
            <div class="col-sm-7">
              <select v-model="form.po_payment_method" class="form-control form-control-sm" name="po_payment_method" >
                  <option disabled value="">Payment by ..</option>                
                  <option v-for="pm in paymentMethods" v-bind:value="pm.name">{{pm.name}}</option>                  
               </select>
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small><strong>*Order Status</strong></small></label>                      
            </div>
            <div class="col-sm-7">
              <select v-model="form.status_m_id" class="form-control form-control-sm" id="status_m_id" name="status_m_id" :class="{ 'is-invalid': form.errors.has('status_m_id') }" >
                  <option value="">Select order Status</option>                
                  <!-- <option disabled value="">Select order Status</option>                 -->
                  <option v-for="as in AllStatus" :key="as.id" v-bind:value="as.id">{{as.status_name}}</option>    
              </select>
              <has-error :form="form" field="status_m_id"></has-error>
            </div> 
          </div>

          <!-- <div class="row form-group mb-1">
            <div class="col-sm-5 text-right">
              <label class="pt-2-"><small>Due Date</small></label>                      
            </div>
            <div class="col-sm-7">
              <input type="date" class="form-control form-control-sm" v-model="form.po_due_date" name="po_due_date" placeholder="Due Date">
            </div> 
          </div> -->          

        </div><!--end fourth-->

   	  </div><!--End Top Part-->


      <div class="row mt-3"><!--Secound Part- Order Details-->
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

              <th width="5%" scope="col"><small>Unit</small></th>
              <th width="5%" scope="col"><small>U.Value</small></th>
              <th width="4%" scope="col"><small>MRP</small></th>
              <th width="2%" scope="col"><small>Qty</small></th>
              <th width="3%" scope="col" title="Free qty of product"><small>Free Qty</small></th>
              <th width="3%" scope="col" title="if wrong quantity was store, Adjust like -10, +10"><small>Adj</small></th>
              
              <!-- <th width="3%" scope="col" title="Product Unit"><small>Unit</small></th>
              <th width="4%" scope="col" title="Product Unit Price"><small>Unit MRP</small></th> -->

              <th width="2%" scope="col" title="Discount Fixed"><small>D.F</small></th>
              <th width="2%" scope="col" title="Discount Percent"><small>D.%</small></th>

              <th width="3%" scope="col" title="Vat Fixed"><small>V.F</small></th> 
              <th width="3%" scope="col" title="Vat Percent"><small>V.%</small></th> 

              <th width="5%" scope="col" title="Product wise Total"><small>Total</small></th>        
              
              
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
                    :class="{ 'is-invalid': form.errors.has('pur_order_details.'+[key]+'.product_id') }"
                  />
                   <has-error :form="form" :field="('pur_order_details.'+[key]+'.product_id')" ></has-error>
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
                  <select v-model="input.unit_id" class="form-control form-control-sm" id="unit_id" name="unit_id" :class="{ 'is-invalid': form.errors.has('pur_order_details.'+[key]+'.unit_id') }">
                      <!-- <option disabled value="">Default (pc) ..</option>                 -->
                      <option v-for="unit in allUnits" :key="unit.id" v-bind:value="unit.id">
                          {{unit.unit_title}} ({{unit.unit_code}})
                      </option> 
                  </select>
                  <has-error :form="form" :field="('pur_order_details.'+[key]+'.unit_id')" ></has-error>
                </div>
              </td>

              <td scope="col"> 
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.p_unit_value" name="p_unit_value">  
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" min="1" step="any" v-model="input.mrp_price" name="mrp_price" :class="{ 'is-invalid': form.errors.has('pur_order_details.'+[key]+'.mrp_price') }">  
                  <!-- @change="calculateLineTotal(input)" -->
                  <has-error :form="form" :field="('pur_order_details.'+[key]+'.mrp_price')" ></has-error>
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.pro_qty" name="pro_qty" :class="{ 'is-invalid': form.errors.has('pur_order_details.'+[key]+'.pro_qty') }">  
                  <!-- @change="calculateLineTotal(input)" -->
                  <has-error :form="form" :field="('pur_order_details.'+[key]+'.pro_qty')" ></has-error>
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.pro_free_qty" name="pro_free_qty">  
                </div> 
              </td>

              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" v-model="input.pro_qty_adjustment" name="pro_qty_adjustment" placeholder="+1,-1">  
                </div> 
              </td>

              <!--  <td scope="col"> 
                <div class="form-group-">
                  <input type="text" class="form-control form-control-sm" v-model="input.pro_unit" name="pro_unit">  
                </div> 
              </td>
              <td scope="col">
                <div class="form-group-">
                  <input type="number" class="form-control form-control-sm" min="0" step=".01" v-model="input.unit_mrp" name="unit_mrp" 
                    >  
                </div> 
              </td>  -->                          
              
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
                  <input class="form-control form-control-sm" type="number" readonly min="0" step=".01" v-model="input.pod_line_total" />
                </div> 
              </td>                    
            </tr>

          </table>
          </div>

        </div>
      </div><!--End Secound Part- Order Details-->


      <div class="row"><!--Thireds Part-->
        <div class="col-md-3"> 

          <div class="form-group mb-0">
              <label for="po_vendor_invoice_no"><small>Vendor / Supplier invoice</small></label>
              <input v-model="form.po_vendor_invoice_no" class="form-control form-control-sm" name="po_vendor_invoice_no" placeholder="Supplier invoice no, if any" /> 
          </div>

          <div class="form-group mb-0">
              <label for="po_details"><small>Order Description</small></label>
              <textarea v-model="form.po_details" class="form-control form-control-sm" name="po_details"> </textarea>
          </div>

        </div>

        <div class="col-md-4"></div>

        <div class="col-md-2"> 

          <div class="row form-group mb-0">            
            <div class="col-sm-9 text-right">
              <label class="form-check-label">Is approved:</label>                      
            </div>
            <div class="col-sm-2">
              <div class="form-check text-right">
                <input v-model="form.is_approved" type="checkbox" class="form-check-input" name="is_enabled" value="1">
              </div>
            </div> 
          </div> 

          <div class="row form-group mb-0">            
            <div class="col-sm-9 text-right">
              <label class="form-check-label" for="checkbox" >Print after Save:</label>                    
            </div>
            <div class="col-sm-2">
              <div class="form-check text-right">
                <input v-model="print_after_save" type="checkbox" class="form-check-input" name="is_enabled" value="1">
              </div>
            </div> 
          </div> 

        </div>

        <div class="col-md-3 text-right"> 
          
          <div class="row form-group mb-1 mb-1">
            <div class="col-sm-6 text-right">
              <label class="pt-2-"><small>Sub Total:</small></label>                      
            </div>
            <div class="col-sm-6">
              <!--this also work-->
              <!-- <span> {{form.po_invoice_sub_total}} </span><span>Tk</span> -->
              <span> {{invoiceSubTotalAmount}} </span><span>  {{systemSettings.belongs_to_currency.currency_short_code}}  </span>
            </div> 
          </div>


          <div class="row mb-1">
            <div class="col-sm-6 text-right">
              <label class="pt-2-"><small>Discount:</small></label>                      
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6 text-right">
              <label class="pt-2-"><small><strong>Total:</strong></small></label>                      
            </div>
            <div class="col-sm-6">
              <span class="pointer" @click="pushTotalToPaidAmount(form.po_invoice_total)">
                 {{ form.po_invoice_total}} </span><span> {{systemSettings.belongs_to_currency.currency_short_code}} </span>
            </div> 
          </div>

          <div class="row form-group mb-1">
            <div class="col-sm-6 text-right">
              <label class="pt-2-"><small><strong>Paid Amount:</strong></small></label>                      
            </div>
            <div class="col-sm-5">
              <input type="text" class="form-control form-control-sm" v-model="form.po_paid_amount" ref="po_paid_amount" name="po_paid_amount"> 
            </div> 
          </div>

          <div class="row form-group mb-2">
            <div class="col-sm-6 text-right">
              <label class="pt-2-"><small><strong>Due Amount:</strong></small></label>                      
            </div>
            <div class="col-sm-5">
              <span> {{ form.po_due_amount}} </span><span> {{systemSettings.belongs_to_currency.currency_short_code}} </span>
            </div> 
          </div>

        </div>
      </div><!--Thireds Part-->



   	  <div class="row mr-4- mt-2" v-if="form.is_approved === 0">
   	  	<div class="col-12  text-right">
   	  		<button type="submit" class="btn btn-primary btn-flat btn-sm ">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Place Order</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i> Update order</span>
	    	</button>    	  		
   	  	</div>
   	  </div>  	  	

      
   	</form>
   	</div><!--End Card-body-->

    <div class="card-footer"> 
        
    </div><!--End Card-footer-->

    <!-- sortable data test -->
    <!-- {{currentSortDir }} {{currentSort}} -->
    <!-- {{moment(mydate).format('YYYY-MM-DD')}} -->
    <!-- <a @click="click">Click Me</a> -->
    <!-- {{product_id_list}} -->
    <!-- {{form.po_due_amount}} -->

</div><!--/vue-card-item -->
</template>

<script>
  import { mapState } from 'vuex' //for user MapState
  
  export default {
    name: "PurchaseOrderForm",
    
    data () {
      return {
        //NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        //ShowOnChangeImage:null,
        //deleteImageIcon: false, //Delete Image icon if image exist
        editMode: false, //Use this for add edit using the same form   
        PaymentTerms: [
          { name: 'Due' },
  	      { name: 'Partial' },
  	      { name: 'Paid'},
		    ],

        paymentMethods:[
          { name: 'Cash' },
          { name: 'Bank Transfer'},
          { name: 'Cheque'},
        ],      

		    //For Single select app
        placeHolder:'Select Vendor / Supplier',
        filterBy:'vendor_name',
        valueProperty: 'id',

        //Single select app for product
        placeHolder_product:'Select Product',
        filterBy_product:'sys_pro_name',
        valueProperty_product: 'id', 

        //multi product id
        product_id_list:[],

        //print after save
        print_after_save:'',

        // Create a new form instance
        form: new Form({
          id: '',
          po_invoice:'',
          vendor_id:'',
          po_date: '',
          po_payment_term:'',
          //po_due_date:'', 
          po_payment_method:'',

          branch_id:'',
          status_m_id:'',     

          po_vendor_invoice_no:'',
          po_details:'',

          po_discount_fixed:'',
          po_discount_percent:'',

          po_tax_fiexd:'',
          po_tax_percent:'',


          po_invoice_sub_total: 0.00,
          po_invoice_total: 0.00,

          po_paid_amount: '',
          po_due_amount: 0.00,

          is_approved:'',

          //po_image:'',
          
          pur_order_details:[{ 
            product_id:'', 
            batch_no:'',
            mfg_date:'', 
            exp_date:'',
            pro_desc:'',
            //pro_size:'', 
            //pro_color:'', 
            mrp_price: '',
            unit_id:'',
            p_unit_value:'',
            pro_qty:'',
            pro_free_qty:'',
            pro_qty_adjustment:'',
            //pro_unit:'',
            //unit_mrp:'',
            discount_fixed:'', 
            discount_percent:'', 
            vat_percent:'',
            vat_fixed:'',
            pod_line_total: 0.00,
          }],
        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'ProductMasterStore', ['products','pagination'] ),
        ...mapState( 'commonStoreForAll', ['AllStatus','branches','allUnits'] ),
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
            return price.toFixed(2);
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

            //Calculater each order item total
            if( (p.discount_fixed !='' || p.discount_fixed !=null)  && (p.discount_percent ==='' || p.discount_percent ===null) && (p.vat_fixed ==='' || p.vat_fixed ===null) && (p.vat_percent === '' || p.vat_percent === null)){              
              p.pod_line_total =  (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) 
            }
            else if((p.discount_fixed ==='' || p.discount_fixed ===null) && (p.discount_percent !='' || p.discount_percent !=null) && (p.vat_fixed ==='' || p.vat_fixed ===null) && (p.vat_percent === '' || p.vat_percent === null)){              
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price;
              p.pod_line_total = (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent )
            }
            else if((p.discount_fixed ==='' || p.discount_fixed ===null) && (p.discount_percent ==='' || p.discount_percent ===null) && (p.vat_fixed !='' || p.vat_fixed !=null) && (p.vat_percent ==='' || p.vat_percent ===null)){              
              p.pod_line_total = (p.mrp_price * p.pro_qty) + (p.pro_qty * p.vat_fixed)
            }
            else if((p.discount_fixed ==='' || p.discount_fixed ===null) && (p.discount_percent ==='' || p.discount_percent ===null) && (p.vat_fixed ==='' || p.vat_fixed ===null) && (p.vat_percent != '' || p.vat_percent != null) ){              
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;
              p.pod_line_total = (p.mrp_price * p.pro_qty) + (p.pro_qty * vatPercent )  //console.log(p.pod_line_total);
            }
            else if((p.discount_fixed !='' || p.discount_fixed !=null) && (p.discount_percent ==='' || p.discount_percent ===null) && (p.vat_fixed !='' || p.vat_fixed !=null) && (p.vat_percent === '' || p.vat_percent === null)){              
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) ) +  (p.pro_qty * p.vat_fixed)
            }
            else if((p.discount_fixed !='' || p.discount_fixed !=null) && (p.discount_percent ==='' || p.discount_percent ===null) && (p.vat_fixed ==='' || p.vat_fixed ===null) && (p.vat_percent != '' || p.vat_percent != null)){  
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;            
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * p.discount_fixed) ) +  (p.pro_qty * vatPercent)
            }
            else if((p.discount_fixed === '' || p.discount_fixed ===null) && (p.discount_percent !='' || p.discount_percent !=null) && (p.vat_fixed !='' || p.vat_fixed !=null) && (p.vat_percent === '' || p.vat_percent === null)){  
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price;          
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent) ) +  (p.pro_qty * p.vat_fixed)
            }
            else if((p.discount_fixed === '' || p.discount_fixed ===null) && (p.discount_percent !='' || p.discount_percent !=null) && (p.vat_fixed ==='' || p.vat_fixed ===null) && (p.vat_percent != '' || p.vat_percent != null)){  
              let DiscountPercent = (p.discount_percent / 100) * p.mrp_price; 
              let vatPercent = (p.vat_percent / 100) * p.mrp_price;            
              p.pod_line_total = ( (p.mrp_price * p.pro_qty) - (p.pro_qty * DiscountPercent) ) +  (p.pro_qty * vatPercent)
            }

            // p.mrp_price !='' && p.pro_qty !=''
            else{
              p.pod_line_total = p.mrp_price * p.pro_qty              
            }
            
          })
        },
        deep: true
      },

      form:{
        handler (value) {
          //calculate purchase order total amount
          if( (value.po_discount_fixed !='' || value.po_discount_fixed !=null) &&  (value.po_discount_percent ==='' || value.po_discount_percent ===null) ){              
            value.po_invoice_total =  (value.po_invoice_sub_total - value.po_discount_fixed).toFixed(2); 
          }
          else if((value.po_discount_fixed==='' || value.po_discount_fixed===null) &&  (value.po_discount_percent !='' || value.po_discount_percent !=null)){              
            let o_discountPercent = (value.po_discount_percent / 100) * value.po_invoice_sub_total;
            value.po_invoice_total =  (value.po_invoice_sub_total - o_discountPercent).toFixed(2); 
          }else{
            value.po_invoice_total = (value.po_invoice_sub_total).toFixed(2);
          }

          //calculate purchase order due
          if( (value.po_paid_amount != '' || value.po_paid_amount != null) ){
            value.po_due_amount =  (value.po_invoice_total - value.po_paid_amount).toFixed(2); 
          }else if((value.po_paid_amount === '' || value.po_paid_amount === null) &&  value.po_invoice_total != 0){
            value.po_due_amount = value.po_invoice_total;
          }else{
            value.po_due_amount = (0).toFixed(2);
          }
          

        }, deep: true
      }, 

    },//end watch


  	methods:{
      getProductID($event){
        alert(event.target.value)
      },

      //###################################### Purchase Order Details ################################################
      add_order_item() {
        this.form.pur_order_details.push({ 
          product_id:'', 
          batch_no:'',
          mfg_date:'', 
          exp_date:'',
          pro_desc:'',
          //pro_size:'', 
          //pro_color:'', 
          unit_id:'',
          p_unit_value:'',
          mrp_price:null,
          pro_qty:null,
          pro_free_qty:null,
          pro_qty_adjustment:'',
          //pro_unit:'',
          //unit_mrp:'',
          discount_fixed:null, 
          discount_percent:null, 
          vat_percent:null,
          vat_fixed:null,
          pod_line_total: 0.00,
        });
      },
      remove_order_item(index) { 
        this.form.pur_order_details.splice(index, 1);
        this.product_id_list.splice(index, 1); //remove form product_id_list
      },

      //###################################### End Purchase Order Details ################################################
      //on change branch
      onChangeBranch(event){
        //alert(event.target.value);
        //console.log(event);
      },

      pushTotalToPaidAmount(data){
        this.form.po_paid_amount = data; 
        //Push total amaout to paid amount input when click on po_invoice_total  amount
      },

    	//Make image as base64 
	    // onImageChange(e){
	    //     //let file = e.target.files || e.dataTransfer.files;
	    //     let file = e.target.files[0];        
	    //     //console.log(file);
	    //     this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
	    //     let reader = new FileReader();
	    //     //let vm = this;
	    //     if(file['size'] > 512000 ){  //512Kb = 512000Byte
	    //       toastr.warning('Please select file size within 500kb');
	    //     }else{          
	    //       reader.onloadend = (file) => {
	    //         //console.log(reader.result);
	    //         this.form.avatar = reader.result; //push base64 to logo veriable
	    //       };          
	    //       reader.readAsDataURL(file);
	    //     }
	    // },

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
  		      //this.$refs.avatar.value = ''; //clear file input tag 
  			    //this.ShowOnChangeImage = null;
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
  			      //this.$refs.avatar.value = ''; //clear file input tag 
  			  	  //this.ShowOnChangeImage = null;
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

      // deleteImage(id){ 
      //   this.$Progress.start(); //using progress-bar package        
      //     //console.log(this.form.has_many_image);
      //     axios.post('/spa/PurchaseOrder-Info-DeleteImage/'+id)
      //       .then(({ data }) => {
      //           // this.ShowOnChangeImage = null;
      //           this.deleteImageIcon = false;
      //           this.form.avatar = null;
      //           this.$Progress.finish(); 
      //           toastr.success(data.success);
      //        })
      //       .catch(() => {
      //         this.$Progress.fail();
      //         toastr.warning('Something is wrong!');
      //       });
      // },

	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.po_invoice.focus();  
	    		if(this.$route.params.data.pur_order_details.length === 0){
	    			this.form.pur_order_details = [];
	    		}else{
		    		 //return only department id from depertment list 
		    		 this.product_id_list = Object.values(this.$route.params.data.pur_order_details).map(
	       		 		item => {	
	       		 			//return item['id'];
	       		 			 return item.product_id;
	       		 		}
		       		 );
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

          //alert(this.selectedProductList);
          // console.log(this.selectedProductList[]);
      },


	},

  	created(){
      //Current date show in purhase order date at first load
      this.form.po_date = new Date().toISOString().substr(0, 10);

      //this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);

  		this.fillForm();
      //this.$store.dispatch('commonStoreForAll/AllStatus', 'Product');
      this.$store.dispatch('commonStoreForAll/AllStatus', 'PurchaseOrder'); //get all status
    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branch list
      this.$store.dispatch('commonStoreForAll/fetchUnits'); //get units

      //call from multi-select-app-one.vue
		  FireEvent.$on('AutoCompleteSearchForData', (data) => {
	        this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data ); 
	    });

      console.log(this.selectedProductList);
	    
      
    	//console.log(moment().format('LTS'));
    },

    mounted(){
      //console.log(moment().format('LTS'))
    }



  } //end export Default

   
</script>
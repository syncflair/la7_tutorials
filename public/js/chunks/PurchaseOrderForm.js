(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PurchaseOrderForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PurchaseOrderForm",
  data: function data() {
    return {
      //NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      //ShowOnChangeImage:null,
      //deleteImageIcon: false, //Delete Image icon if image exist
      editMode: false,
      //Use this for add edit using the same form   
      PaymentTerms: [{
        name: 'Due'
      }, {
        name: 'Partial'
      }, {
        name: 'Paid'
      }],
      paymentMethods: [{
        name: 'Cash'
      }, {
        name: 'Bank Transfer'
      }, {
        name: 'Cheque'
      }],
      //For Single select app
      placeHolder: 'Select Vendor / Supplier',
      filterBy: 'vendor_name',
      valueProperty: 'id',
      //Single select app for product
      placeHolder_product: 'Select Product',
      filterBy_product: 'sys_pro_name',
      valueProperty_product: 'id',
      //multi product id
      product_id_list: [],
      //print after save
      print_after_save: '',
      // Create a new form instance
      form: new Form({
        id: '',
        po_invoice: '',
        vendor_id: '',
        po_date: '',
        po_payment_term: '',
        //po_due_date:'', 
        po_payment_method: '',
        branch_id: '',
        status_m_id: '',
        po_vendor_invoice_no: '',
        po_details: '',
        po_discount_fixed: '',
        po_discount_percent: '',
        po_tax_fiexd: '',
        po_tax_percent: '',
        po_invoice_sub_total: 0.00,
        po_invoice_total: 0.00,
        po_paid_amount: '',
        po_due_amount: 0.00,
        is_approved: '',
        //po_image:'',
        pur_order_details: [{
          product_id: '',
          batch_no: '',
          mfg_date: '',
          exp_date: '',
          pro_desc: '',
          //pro_size:'', 
          //pro_color:'', 
          mrp_price: '',
          unit_id: '',
          p_unit_value: '',
          pro_qty: '',
          pro_free_qty: '',
          pro_qty_adjustment: '',
          //pro_unit:'',
          //unit_mrp:'',
          discount_fixed: '',
          discount_percent: '',
          vat_percent: '',
          vat_fixed: '',
          pod_line_total: 0.00
        }]
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('ProductMasterStore', ['products', 'pagination']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['AllStatus', 'branches', 'allUnits']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('PurchaseOrderMasterStore', ['selectedVendor', 'autoSearchVendor', 'selectedProductList', 'autoSearchProduct']), {
    // finalAmount(){
    //   let price = 0;
    //   this.orderDetails.forEach(order => {
    //     price = price + order.price;
    //   });
    //   return price;
    // },   
    //Calculate Sub Total
    invoiceSubTotalAmount: function invoiceSubTotalAmount() {
      var price = 0; //Object.entries(this.form.pur_order_details).forEach( ([key, p]) => {

      Object.values(this.form.pur_order_details).forEach(function (p) {
        //price += p.pod_line_total;
        price = price + p.pod_line_total;
      });
      this.form.po_invoice_sub_total = price;
      return price.toFixed(2);
    } // subTotalAmount: function(){
    //       return this.form.pur_order_details.reduce(function(total, item){
    //         // return total + (item.quantity * item.price); 
    //         return total + item.pod_line_total; 
    //       },0);
    //     }, 

  }),
  watch: {
    // form:{
    //   handler(value){
    //     console.log(value);
    //   }, deep: true
    // },
    //using “watch” on dynamic table rows in Vue Js
    'form.pur_order_details': {
      //'form': {
      handler: function handler(newValue, oldValue) {
        newValue.forEach(function (p) {
          // if(!isNaN(p.vat_percent)){ 
          //Calculater each order item total
          if ((p.discount_fixed != '' || p.discount_fixed != null) && (p.discount_percent === '' || p.discount_percent === null) && (p.vat_fixed === '' || p.vat_fixed === null) && (p.vat_percent === '' || p.vat_percent === null)) {
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed;
          } else if ((p.discount_fixed === '' || p.discount_fixed === null) && (p.discount_percent != '' || p.discount_percent != null) && (p.vat_fixed === '' || p.vat_fixed === null) && (p.vat_percent === '' || p.vat_percent === null)) {
            var DiscountPercent = p.discount_percent / 100 * p.mrp_price;
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * DiscountPercent;
          } else if ((p.discount_fixed === '' || p.discount_fixed === null) && (p.discount_percent === '' || p.discount_percent === null) && (p.vat_fixed != '' || p.vat_fixed != null) && (p.vat_percent === '' || p.vat_percent === null)) {
            p.pod_line_total = p.mrp_price * p.pro_qty + p.pro_qty * p.vat_fixed;
          } else if ((p.discount_fixed === '' || p.discount_fixed === null) && (p.discount_percent === '' || p.discount_percent === null) && (p.vat_fixed === '' || p.vat_fixed === null) && (p.vat_percent != '' || p.vat_percent != null)) {
            var vatPercent = p.vat_percent / 100 * p.mrp_price;
            p.pod_line_total = p.mrp_price * p.pro_qty + p.pro_qty * vatPercent; //console.log(p.pod_line_total);
          } else if ((p.discount_fixed != '' || p.discount_fixed != null) && (p.discount_percent === '' || p.discount_percent === null) && (p.vat_fixed != '' || p.vat_fixed != null) && (p.vat_percent === '' || p.vat_percent === null)) {
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed + p.pro_qty * p.vat_fixed;
          } else if ((p.discount_fixed != '' || p.discount_fixed != null) && (p.discount_percent === '' || p.discount_percent === null) && (p.vat_fixed === '' || p.vat_fixed === null) && (p.vat_percent != '' || p.vat_percent != null)) {
            var _vatPercent = p.vat_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed + p.pro_qty * _vatPercent;
          } else if ((p.discount_fixed === '' || p.discount_fixed === null) && (p.discount_percent != '' || p.discount_percent != null) && (p.vat_fixed != '' || p.vat_fixed != null) && (p.vat_percent === '' || p.vat_percent === null)) {
            var _DiscountPercent = p.discount_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * _DiscountPercent + p.pro_qty * p.vat_fixed;
          } else if ((p.discount_fixed === '' || p.discount_fixed === null) && (p.discount_percent != '' || p.discount_percent != null) && (p.vat_fixed === '' || p.vat_fixed === null) && (p.vat_percent != '' || p.vat_percent != null)) {
            var _DiscountPercent2 = p.discount_percent / 100 * p.mrp_price;

            var _vatPercent2 = p.vat_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * _DiscountPercent2 + p.pro_qty * _vatPercent2;
          } // p.mrp_price !='' && p.pro_qty !=''
          else {
              p.pod_line_total = p.mrp_price * p.pro_qty;
            }
        });
      },
      deep: true
    },
    form: {
      handler: function handler(value) {
        //calculate purchase order total amount
        if ((value.po_discount_fixed != '' || value.po_discount_fixed != null) && (value.po_discount_percent === '' || value.po_discount_percent === null)) {
          value.po_invoice_total = (value.po_invoice_sub_total - value.po_discount_fixed).toFixed(2);
        } else if ((value.po_discount_fixed === '' || value.po_discount_fixed === null) && (value.po_discount_percent != '' || value.po_discount_percent != null)) {
          var o_discountPercent = value.po_discount_percent / 100 * value.po_invoice_sub_total;
          value.po_invoice_total = (value.po_invoice_sub_total - o_discountPercent).toFixed(2);
        } else {
          value.po_invoice_total = value.po_invoice_sub_total.toFixed(2);
        } //calculate purchase order due


        if (value.po_paid_amount != '' || value.po_paid_amount != null) {
          value.po_due_amount = (value.po_invoice_total - value.po_paid_amount).toFixed(2);
        } else if ((value.po_paid_amount === '' || value.po_paid_amount === null) && value.po_invoice_total != 0) {
          value.po_due_amount = value.po_invoice_total;
        } else {
          value.po_due_amount = 0 .toFixed(2);
        }
      },
      deep: true
    }
  },
  //end watch
  methods: {
    getProductID: function getProductID($event) {
      alert(event.target.value);
    },
    //###################################### Purchase Order Details ################################################
    add_order_item: function add_order_item() {
      this.form.pur_order_details.push({
        product_id: '',
        batch_no: '',
        mfg_date: '',
        exp_date: '',
        pro_desc: '',
        //pro_size:'', 
        //pro_color:'', 
        unit_id: '',
        p_unit_value: '',
        mrp_price: null,
        pro_qty: null,
        pro_free_qty: null,
        pro_qty_adjustment: '',
        //pro_unit:'',
        //unit_mrp:'',
        discount_fixed: null,
        discount_percent: null,
        vat_percent: null,
        vat_fixed: null,
        pod_line_total: 0.00
      });
    },
    remove_order_item: function remove_order_item(index) {
      this.form.pur_order_details.splice(index, 1);
      this.product_id_list.splice(index, 1); //remove form product_id_list
    },
    //###################################### End Purchase Order Details ################################################
    //on change branch
    onChangeBranch: function onChangeBranch(event) {//alert(event.target.value);
      //console.log(event);
    },
    pushTotalToPaidAmount: function pushTotalToPaidAmount(data) {
      this.form.po_paid_amount = data; //Push total amaout to paid amount input when click on po_invoice_total  amount
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
    storeFormData: function storeFormData() {
      var _this = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/PurchaseOrder-Info')

      this.form.post('/spa/PurchaseOrder-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this.$Progress.finish();

          _this.form.reset(); //reset from after submit	
          //this.$refs.avatar.value = ''; //clear file input tag 
          //this.ShowOnChangeImage = null;


          _this.$router.push({
            path: '/spa/PurchaseOrderMaster'
          }); //route after successfule submit	      

        }

        if (data.errors) {
          _this.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this2 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/PurchaseOrder-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this2.$Progress.finish();

          toastr.success(data.success);

          _this2.form.reset(); //reset from after submit


          _this2.editMode = false; //this.$refs.avatar.value = ''; //clear file input tag 
          //this.ShowOnChangeImage = null;

          _this2.$router.push({
            path: '/spa/PurchaseOrderMaster'
          }); //route after successfule submit

        }

        if (data.errors) {
          _this2.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
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
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.po_invoice.focus();  

        if (this.$route.params.data.pur_order_details.length === 0) {
          this.form.pur_order_details = [];
        } else {
          //return only department id from depertment list 
          this.product_id_list = Object.values(this.$route.params.data.pur_order_details).map(function (item) {
            //return item['id'];
            return item.product_id;
          });
        }
      } //get selected Vendor based on form.vendor_id


      this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', this.form.vendor_id);
      this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProductList', this.product_id_list);
    },
    AutoCompleteSearchForDataVendor: function AutoCompleteSearchForDataVendor(data) {
      this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataVendor', data);
    },
    getSelectedDataByIdsForVendor: function getSelectedDataByIdsForVendor(data) {
      //this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', this.form.vendor_id);            
      this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedVendor', data);
    },
    AutoCompleteSearchForDataProduct: function AutoCompleteSearchForDataProduct(data) {
      this.$store.dispatch('PurchaseOrderMasterStore/AutoCompleteSearchForDataProduct', data);
    },
    getSelectedDataByIdsForProduct: function getSelectedDataByIdsForProduct(data) {
      if (!this.product_id_list.includes(data)) {
        // if(!this.product_id_list.includes(data)){
        this.product_id_list.push(data); //console.log(this.product_id_list);
      } else {
        toastr.warning('Already add this product!'); // let i = this.product_id_list.map(d => d).indexOf(data) // find index of your object
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

      this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProductList', this.product_id_list); //alert(this.selectedProductList);
      // console.log(this.selectedProductList[]);
    }
  },
  created: function created() {
    var _this3 = this;

    //Current date show in purhase order date at first load
    this.form.po_date = new Date().toISOString().substr(0, 10); //this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);

    this.fillForm(); //this.$store.dispatch('commonStoreForAll/AllStatus', 'Product');

    this.$store.dispatch('commonStoreForAll/AllStatus', 'PurchaseOrder'); //get all status

    this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branch list

    this.$store.dispatch('commonStoreForAll/fetchUnits'); //get units
    //call from multi-select-app-one.vue

    FireEvent.$on('AutoCompleteSearchForData', function (data) {
      _this3.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data);
    });
    console.log(this.selectedProductList); //console.log(moment().format('LTS'));
  },
  mounted: function mounted() {//console.log(moment().format('LTS'))
  }
}); //end export Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-5 col-sm-9" }, [
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.editMode,
                  expression: "!editMode"
                }
              ]
            },
            [_vm._v("New Purchase Order")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.editMode,
                  expression: "editMode"
                }
              ]
            },
            [_vm._v("Update - " + _vm._s(_vm.form.po_invoice))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-3 text-right" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/PurchaseOrderMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-user-tie" }),
                _vm._v(" Purchase Order List\r\n        \t")
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.editMode ? _vm.updateFormData() : _vm.storeFormData()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c(
                "div",
                { staticClass: "form-group mb-0" },
                [
                  _c("single-select-app-two", {
                    class: { "is-invalid": _vm.form.errors.has("vendor_id") },
                    staticStyle: {
                      "margin-top": "0px !important",
                      padding: "0px !important"
                    },
                    attrs: {
                      options: _vm.selectedVendor,
                      autoSearchOptions: _vm.autoSearchVendor,
                      filterBy: _vm.filterBy,
                      "place-holder": _vm.placeHolder,
                      "value-property": _vm.valueProperty
                    },
                    on: {
                      getAllDataListByIds: _vm.getSelectedDataByIdsForVendor,
                      AutoCompleteSearchForData:
                        _vm.AutoCompleteSearchForDataVendor
                    },
                    model: {
                      value: _vm.form.vendor_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "vendor_id", $$v)
                      },
                      expression: "form.vendor_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "vendor_id" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt-1 mb-0" }, [
                _vm.selectedVendor.length != 0
                  ? _c("div", { staticClass: "ml-1" }, [
                      _c("p", { staticClass: "mb-0 border-bottom-1" }, [
                        _c("small", [
                          _vm._v(
                            _vm._s(_vm.selectedVendor[0]["vendor_phone"]) +
                              ", " +
                              _vm._s(_vm.selectedVendor[0]["vendor_email"])
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0 border-bottom-1" }, [
                        _c("small", [
                          _vm._v(
                            "Vendor Type: " +
                              _vm._s(_vm.selectedVendor[0]["vendor_type"])
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0 border-bottom-1" }, [
                        _c("small", [
                          _vm._v(
                            _vm._s(_vm.selectedVendor[0]["vendor_address"])
                          )
                        ])
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _vm.authUser.role_id === 1
                ? _c("div", { staticClass: "row form-group mb-1" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-7" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.branch_id,
                              expression: "form.branch_id"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { name: "branch_id" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "branch_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.onChangeBranch($event)
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Select Branch/Store")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.branches, function(branch) {
                            return _c(
                              "option",
                              {
                                key: branch.id,
                                domProps: { value: branch.id }
                              },
                              [_vm._v(_vm._s(branch.branch_name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-7" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po_invoice,
                        expression: "form.po_invoice"
                      }
                    ],
                    ref: "po_invoice",
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      type: "text",
                      name: "po_invoice",
                      readonly: "",
                      min: "0",
                      step: ".01",
                      placeholder: "Ex. PO20-0001"
                    },
                    domProps: { value: _vm.form.po_invoice },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "po_invoice", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-7" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po_date,
                        expression: "form.po_date"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      type: "date",
                      name: "po_date",
                      placeholder: "Purchase Date"
                    },
                    domProps: { value: _vm.form.po_date },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "po_date", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-7" },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.po_payment_term,
                            expression: "form.po_payment_term"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        class: {
                          "is-invalid": _vm.form.errors.has("po_payment_term")
                        },
                        attrs: {
                          id: "po_payment_term",
                          name: "po_payment_term"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "po_payment_term",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { disabled: "", value: "" } }, [
                          _vm._v("Select payment term ..")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.PaymentTerms, function(pt) {
                          return _c(
                            "option",
                            { domProps: { value: pt.name } },
                            [
                              _vm._v(
                                "\r\n                    " +
                                  _vm._s(pt.name) +
                                  "\r\n                  "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "po_payment_term" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-7" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.po_payment_method,
                          expression: "form.po_payment_method"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: { name: "po_payment_method" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "po_payment_method",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("Payment by ..")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.paymentMethods, function(pm) {
                        return _c("option", { domProps: { value: pm.name } }, [
                          _vm._v(_vm._s(pm.name))
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-7" },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.status_m_id,
                            expression: "form.status_m_id"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        class: {
                          "is-invalid": _vm.form.errors.has("status_m_id")
                        },
                        attrs: { id: "status_m_id", name: "status_m_id" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "status_m_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select order Status")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.AllStatus, function(as) {
                          return _c(
                            "option",
                            { key: as.id, domProps: { value: as.id } },
                            [_vm._v(_vm._s(as.status_name))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "status_m_id" }
                    })
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "table-responsive-" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table-sm table table-striped style-order-form-input"
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._l(_vm.form.pur_order_details, function(input, key) {
                      return _c("tr", { key: key }, [
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    key ||
                                    (!key &&
                                      _vm.form.pur_order_details.length > 1),
                                  expression:
                                    "key || ( !key && form.pur_order_details.length > 1)"
                                }
                              ],
                              staticClass: "fas fa-minus-circle danger pointer",
                              attrs: { title: "Remove" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.remove_order_item(key)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    key ==
                                    _vm.form.pur_order_details.length - 1,
                                  expression:
                                    "key == form.pur_order_details.length-1"
                                }
                              ],
                              staticClass: "fas fa-plus-circle green pointer",
                              attrs: { title: "Add" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.add_order_item(key)
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c(
                            "div",
                            { staticClass: "form-group-" },
                            [
                              _c("single-select-app-two", {
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "pur_order_details." + [key] + ".product_id"
                                  )
                                },
                                attrs: {
                                  options: _vm.selectedProductList,
                                  autoSearchOptions: _vm.autoSearchProduct,
                                  filterBy: _vm.filterBy_product,
                                  "place-holder": _vm.placeHolder_product,
                                  "value-property": _vm.valueProperty_product
                                },
                                on: {
                                  getAllDataListByIds:
                                    _vm.getSelectedDataByIdsForProduct,
                                  AutoCompleteSearchForData:
                                    _vm.AutoCompleteSearchForDataProduct
                                },
                                model: {
                                  value: input.product_id,
                                  callback: function($$v) {
                                    _vm.$set(input, "product_id", $$v)
                                  },
                                  expression: "input.product_id"
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field:
                                    "pur_order_details." + [key] + ".product_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.batch_no,
                                  expression: "input.batch_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", name: "batch_no" },
                              domProps: { value: input.batch_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "batch_no",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.mfg_date,
                                  expression: "input.mfg_date"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "text",
                                name: "mfg_date",
                                placeholder: "3/20"
                              },
                              domProps: { value: input.mfg_date },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "mfg_date",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.exp_date,
                                  expression: "input.exp_date"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "text",
                                name: "exp_date",
                                placeholder: "7/20"
                              },
                              domProps: { value: input.exp_date },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "exp_date",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.product_desc,
                                  expression: "input.product_desc"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", name: "product_desc" },
                              domProps: { value: input.product_desc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "product_desc",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c(
                            "div",
                            { staticClass: "form-group-" },
                            [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.unit_id,
                                      expression: "input.unit_id"
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "pur_order_details." + [key] + ".unit_id"
                                    )
                                  },
                                  attrs: { id: "unit_id", name: "unit_id" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        input,
                                        "unit_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.allUnits, function(unit) {
                                  return _c(
                                    "option",
                                    {
                                      key: unit.id,
                                      domProps: { value: unit.id }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                          " +
                                          _vm._s(unit.unit_title) +
                                          " (" +
                                          _vm._s(unit.unit_code) +
                                          ")\r\n                      "
                                      )
                                    ]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field:
                                    "pur_order_details." + [key] + ".unit_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.p_unit_value,
                                  expression: "input.p_unit_value"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", name: "p_unit_value" },
                              domProps: { value: input.p_unit_value },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "p_unit_value",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c(
                            "div",
                            { staticClass: "form-group-" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.mrp_price,
                                    expression: "input.mrp_price"
                                  }
                                ],
                                staticClass: "form-control form-control-sm",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "pur_order_details." + [key] + ".mrp_price"
                                  )
                                },
                                attrs: {
                                  type: "number",
                                  min: "1",
                                  step: "any",
                                  name: "mrp_price"
                                },
                                domProps: { value: input.mrp_price },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "mrp_price",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field:
                                    "pur_order_details." + [key] + ".mrp_price"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c(
                            "div",
                            { staticClass: "form-group-" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.pro_qty,
                                    expression: "input.pro_qty"
                                  }
                                ],
                                staticClass: "form-control form-control-sm",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "pur_order_details." + [key] + ".pro_qty"
                                  )
                                },
                                attrs: { type: "number", name: "pro_qty" },
                                domProps: { value: input.pro_qty },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "pro_qty",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field:
                                    "pur_order_details." + [key] + ".pro_qty"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.pro_free_qty,
                                  expression: "input.pro_free_qty"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "number", name: "pro_free_qty" },
                              domProps: { value: input.pro_free_qty },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "pro_free_qty",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.pro_qty_adjustment,
                                  expression: "input.pro_qty_adjustment"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                name: "pro_qty_adjustment",
                                placeholder: "+1,-1"
                              },
                              domProps: { value: input.pro_qty_adjustment },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "pro_qty_adjustment",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.discount_fixed,
                                  expression: "input.discount_fixed"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "number", name: "discount_fixed" },
                              domProps: { value: input.discount_fixed },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "discount_fixed",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.discount_percent,
                                  expression: "input.discount_percent"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                name: "discount_percent"
                              },
                              domProps: { value: input.discount_percent },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "discount_percent",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.vat_fixed,
                                  expression: "input.vat_fixed"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "number", name: "vat_fixed" },
                              domProps: { value: input.vat_fixed },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "vat_fixed",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.vat_percent,
                                  expression: "input.vat_percent"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "number", name: "vat_percent" },
                              domProps: { value: input.vat_percent },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "vat_percent",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { scope: "col" } }, [
                          _c("div", { staticClass: "form-group-" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.pod_line_total,
                                  expression: "input.pod_line_total"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                readonly: "",
                                min: "0",
                                step: ".01"
                              },
                              domProps: { value: input.pod_line_total },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "pod_line_total",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group mb-0" }, [
                _vm._m(7),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.po_vendor_invoice_no,
                      expression: "form.po_vendor_invoice_no"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: {
                    name: "po_vendor_invoice_no",
                    placeholder: "Supplier invoice no, if any"
                  },
                  domProps: { value: _vm.form.po_vendor_invoice_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "po_vendor_invoice_no",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mb-0" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.po_details,
                      expression: "form.po_details"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { name: "po_details" },
                  domProps: { value: _vm.form.po_details },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "po_details", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "row form-group mb-0" }, [
                _vm._m(9),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2" }, [
                  _c("div", { staticClass: "form-check text-right" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.is_approved,
                          expression: "form.is_approved"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "checkbox",
                        name: "is_enabled",
                        value: "1"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.form.is_approved)
                          ? _vm._i(_vm.form.is_approved, "1") > -1
                          : _vm.form.is_approved
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.form.is_approved,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "1",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.form,
                                  "is_approved",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "is_approved",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "is_approved", $$c)
                          }
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-0" }, [
                _vm._m(10),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2" }, [
                  _c("div", { staticClass: "form-check text-right" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.print_after_save,
                          expression: "print_after_save"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "checkbox",
                        name: "is_enabled",
                        value: "1"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.print_after_save)
                          ? _vm._i(_vm.print_after_save, "1") > -1
                          : _vm.print_after_save
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.print_after_save,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "1",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.print_after_save = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.print_after_save = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.print_after_save = $$c
                          }
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 text-right" }, [
              _c("div", { staticClass: "row form-group mb-1 mb-1" }, [
                _vm._m(11),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("span", [
                    _vm._v(" " + _vm._s(_vm.invoiceSubTotalAmount) + " ")
                  ]),
                  _c("span", [
                    _vm._v(
                      "  " +
                        _vm._s(
                          _vm.systemSettings.belongs_to_currency
                            .currency_short_code
                        ) +
                        "  "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-1" }, [
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "row form-group mb-1" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.po_discount_fixed,
                            expression: "form.po_discount_fixed"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "number",
                          name: "po_discount_fixed",
                          placeholder: "Fixed"
                        },
                        domProps: { value: _vm.form.po_discount_fixed },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "po_discount_fixed",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.po_discount_percent,
                            expression: "form.po_discount_percent"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "number",
                          name: "po_discount_percent",
                          placeholder: "%"
                        },
                        domProps: { value: _vm.form.po_discount_percent },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "po_discount_percent",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-2" }, [
                _vm._m(13),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "span",
                    {
                      staticClass: "pointer",
                      on: {
                        click: function($event) {
                          return _vm.pushTotalToPaidAmount(
                            _vm.form.po_invoice_total
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                 " +
                          _vm._s(_vm.form.po_invoice_total) +
                          " "
                      )
                    ]
                  ),
                  _c("span", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.systemSettings.belongs_to_currency
                            .currency_short_code
                        ) +
                        " "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(14),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po_paid_amount,
                        expression: "form.po_paid_amount"
                      }
                    ],
                    ref: "po_paid_amount",
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "text", name: "po_paid_amount" },
                    domProps: { value: _vm.form.po_paid_amount },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "po_paid_amount",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-2" }, [
                _vm._m(15),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("span", [
                    _vm._v(" " + _vm._s(_vm.form.po_due_amount) + " ")
                  ]),
                  _c("span", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.systemSettings.belongs_to_currency
                            .currency_short_code
                        ) +
                        " "
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.form.is_approved === 0
            ? _c("div", { staticClass: "row mr-4- mt-2" }, [
                _c("div", { staticClass: "col-12  text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-flat btn-sm ",
                      attrs: { type: "submit" }
                    },
                    [
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.editMode,
                              expression: "!editMode"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "fas fa-save" }),
                          _vm._v(" Place Order")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editMode,
                              expression: "editMode"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "far fa-edit" }),
                          _vm._v(" Update order")
                        ]
                      )
                    ]
                  )
                ])
              ])
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Select Branch")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [_c("small", [_vm._v("*Invoice")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Purchase Date")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("b", [_vm._v("*Payment Terms")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Payment Method")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("*Order Status")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "3%", scope: "col" } }, [
        _c("small", [_vm._v("#")])
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%", scope: "col" } }, [
        _c("small", [_vm._v("Product")])
      ]),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "3%", scope: "col", title: "Batch No of product" } },
        [_c("small", [_vm._v("Batch No")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "3%", scope: "col", title: "MFG Date (3/20)" } },
        [_c("small", [_vm._v("MFG")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "3%", scope: "col", title: "Expire Date (7/20)" } },
        [_c("small", [_vm._v("EXP")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "5%", scope: "col", title: "Details of product" } },
        [_c("small", [_vm._v("Details")])]
      ),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", scope: "col" } }, [
        _c("small", [_vm._v("Unit")])
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", scope: "col" } }, [
        _c("small", [_vm._v("U.Value")])
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "4%", scope: "col" } }, [
        _c("small", [_vm._v("MRP")])
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "2%", scope: "col" } }, [
        _c("small", [_vm._v("Qty")])
      ]),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "3%", scope: "col", title: "Free qty of product" } },
        [_c("small", [_vm._v("Free Qty")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        {
          attrs: {
            width: "3%",
            scope: "col",
            title: "if wrong quantity was store, Adjust like -10, +10"
          }
        },
        [_c("small", [_vm._v("Adj")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "2%", scope: "col", title: "Discount Fixed" } },
        [_c("small", [_vm._v("D.F")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "2%", scope: "col", title: "Discount Percent" } },
        [_c("small", [_vm._v("D.%")])]
      ),
      _vm._v(" "),
      _c("th", { attrs: { width: "3%", scope: "col", title: "Vat Fixed" } }, [
        _c("small", [_vm._v("V.F")])
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "3%", scope: "col", title: "Vat Percent" } }, [
        _c("small", [_vm._v("V.%")])
      ]),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "5%", scope: "col", title: "Product wise Total" } },
        [_c("small", [_vm._v("Total")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "po_vendor_invoice_no" } }, [
      _c("small", [_vm._v("Vendor / Supplier invoice")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "po_details" } }, [
      _c("small", [_vm._v("Order Description")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-9 text-right" }, [
      _c("label", { staticClass: "form-check-label" }, [_vm._v("Is approved:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-9 text-right" }, [
      _c(
        "label",
        { staticClass: "form-check-label", attrs: { for: "checkbox" } },
        [_vm._v("Print after Save:")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Sub Total:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Discount:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("Total:")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("Paid Amount:")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("Due Amount:")])])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseOrderForm.vue?vue&type=template&id=2febef94& */ "./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94&");
/* harmony import */ var _PurchaseOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseOrderForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PurchaseOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrderForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrderForm.vue?vue&type=template&id=2febef94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Purchase/Purchase/PurchaseOrderForm.vue?vue&type=template&id=2febef94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrderForm_vue_vue_type_template_id_2febef94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PurchaseOrderForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      deleteImageIcon: false,
      //Delete Image icon if image exist
      editMode: false,
      //Use this for add edit using the same form   
      PaymentTerms: [{
        name: 'Due'
      }, {
        name: 'Partial'
      }, {
        name: 'Paid'
      }],
      //For Single select app
      placeHolder: 'Select Vendor',
      filterBy: 'vendor_name',
      valueProperty: 'id',
      //Single select app for product
      placeHolder_product: 'Product',
      filterBy_product: 'sys_pro_name',
      valueProperty_product: 'id',
      //multi product id
      product_id_list: [],
      // Create a new form instance
      form: new Form({
        id: '',
        vendor_id: '',
        po_date: '',
        po_payment_term: '',
        po_due_date: '',
        pur_order_details: [{
          product_id: '',
          batch_no: '',
          mfg_date: '',
          exp_date: '',
          pro_desc: '',
          pro_size: '',
          pro_color: '',
          mrp_price: '',
          pro_qty: '',
          pro_free_qty: '',
          pro_unit: '',
          unit_mrp: '',
          discount_fixed: '',
          discount_percent: '',
          vat_percent: '',
          vat_fixed: '',
          pod_line_total: 0.00
        }],
        po_payment_method: '',
        po_details: '',
        po_discount_fixed: '',
        po_discount_percent: '',
        po_paid_amount: 0.00,
        po_invoice_sub_total: 0.00,
        po_invoice_total: 0.00
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('ProductMasterStore', ['products', 'pagination']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['userStatus']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('PurchaseOrderMasterStore', ['selectedVendor', 'autoSearchVendor', 'selectedProductList', 'autoSearchProduct']), {
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
      return price;
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
          if (p.discount_fixed != '' && p.discount_percent === '' && p.vat_fixed === '' && p.vat_percent === '') {
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed;
          } else if (p.discount_fixed === '' && p.discount_percent != '' && p.vat_fixed === '' && p.vat_percent === '') {
            var DiscountPercent = p.discount_percent / 100 * p.mrp_price;
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * DiscountPercent;
          } else if (p.discount_fixed === '' && p.discount_percent === '' && p.vat_fixed != '' && p.vat_percent === '') {
            p.pod_line_total = p.mrp_price * p.pro_qty + p.pro_qty * p.vat_fixed;
          } else if (p.discount_fixed === '' && p.discount_percent === '' && p.vat_fixed === '' && p.vat_percent != '') {
            var vatPercent = p.vat_percent / 100 * p.mrp_price;
            p.pod_line_total = p.mrp_price * p.pro_qty + p.pro_qty * vatPercent; //console.log(p.pod_line_total);
          } else if (p.discount_fixed != '' && p.discount_percent === '' && p.vat_fixed != '' && p.vat_percent === '') {
            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed + p.pro_qty * p.vat_fixed;
          } else if (p.discount_fixed != '' && p.discount_percent === '' && p.vat_fixed === '' && p.vat_percent != '') {
            var _vatPercent = p.vat_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * p.discount_fixed + p.pro_qty * _vatPercent;
          } else if (p.discount_fixed === '' && p.discount_percent != '' && p.vat_fixed != '' && p.vat_percent === '') {
            var _DiscountPercent = p.discount_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * _DiscountPercent + p.pro_qty * p.vat_fixed;
          } else if (p.discount_fixed === '' && p.discount_percent != '' && p.vat_fixed === '' && p.vat_percent != '') {
            var _DiscountPercent2 = p.discount_percent / 100 * p.mrp_price;

            var _vatPercent2 = p.vat_percent / 100 * p.mrp_price;

            p.pod_line_total = p.mrp_price * p.pro_qty - p.pro_qty * _DiscountPercent2 + p.pro_qty * _vatPercent2;
          } else {
            p.pod_line_total = p.mrp_price * p.pro_qty;
          }
        });
      },
      deep: true
    },
    form: {
      handler: function handler(value) {
        if (value.po_discount_fixed != '' && value.po_discount_percent === '') {
          value.po_invoice_total = value.po_invoice_sub_total - value.po_discount_fixed;
        } else if (value.po_discount_fixed === '' && value.po_discount_percent != '') {
          var o_discountPercent = value.po_discount_percent / 100 * value.po_invoice_sub_total;
          value.po_invoice_total = value.po_invoice_sub_total - o_discountPercent;
        } else {
          value.po_invoice_total = value.po_invoice_sub_total;
        }
      },
      deep: true
    }
  },
  //end watch
  methods: {
    //###################################### Purchase Order Details ################################################
    add_order_item: function add_order_item() {
      this.form.pur_order_details.push({
        product_id: '',
        batch_no: '',
        mfg_date: '',
        exp_date: '',
        pro_desc: '',
        pro_size: '',
        pro_color: '',
        mrp_price: '',
        pro_qty: '',
        pro_free_qty: '',
        pro_unit: '',
        unit_mrp: '',
        discount_fixed: '',
        discount_percent: '',
        vat_percent: '',
        vat_fixed: '',
        pod_line_total: 0.00
      });
    },
    remove_order_item: function remove_order_item(index) {
      this.form.pur_order_details.splice(index, 1);
      this.product_id_list.splice(index, 1); //remove form product_id_list
    },
    //###################################### End Purchase Order Details ################################################
    //Make image as base64 
    onImageChange: function onImageChange(e) {
      var _this = this;

      //let file = e.target.files || e.dataTransfer.files;
      var file = e.target.files[0]; //console.log(file);

      this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image

      var reader = new FileReader(); //let vm = this;

      if (file['size'] > 512000) {
        //512Kb = 512000Byte
        toastr.warning('Please select file size within 500kb');
      } else {
        reader.onloadend = function (file) {
          //console.log(reader.result);
          _this.form.avatar = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this2 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/PurchaseOrder-Info')

      this.form.post('/spa/PurchaseOrder-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this2.$Progress.finish();

          _this2.form.reset(); //reset from after submit	


          _this2.$refs.avatar.value = ''; //clear file input tag 

          _this2.ShowOnChangeImage = null;

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
    updateFormData: function updateFormData() {
      var _this3 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/PurchaseOrder-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this3.$Progress.finish();

          toastr.success(data.success);

          _this3.form.reset(); //reset from after submit


          _this3.editMode = false;
          _this3.$refs.avatar.value = ''; //clear file input tag 

          _this3.ShowOnChangeImage = null;

          _this3.$router.push({
            path: '/spa/EmployeeMaster'
          }); //route after successfule submit

        }

        if (data.errors) {
          _this3.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    deleteImage: function deleteImage(id) {
      var _this4 = this;

      this.$Progress.start(); //using progress-bar package        
      //console.log(this.form.has_many_image);

      axios.post('/spa/PurchaseOrder-Info-DeleteImage/' + id).then(function (_ref3) {
        var data = _ref3.data;
        // this.ShowOnChangeImage = null;
        _this4.deleteImageIcon = false;
        _this4.form.avatar = null;

        _this4.$Progress.finish();

        toastr.success(data.success);
      })["catch"](function () {
        _this4.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.po_invoice.focus();  

        if (this.$route.params.data.departments.length === 0) {
          this.form.departments = [];
        } else {
          //return only department id from depertment list 
          this.form.departments = Object.values(this.$route.params.data.departments).map(function (item) {
            //return item['id'];
            return item.id;
          });
        }

        if (this.$route.params.data.avatar != null) {
          this.deleteImageIcon = true;
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

      this.$store.dispatch('PurchaseOrderMasterStore/fetchSelectedProductList', this.product_id_list);
    }
  },
  created: function created() {
    var _this5 = this;

    this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);
    this.fillForm();
    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
    //call from multi-select-app-one.vue

    FireEvent.$on('AutoCompleteSearchForData', function (data) {
      _this5.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data);
    }); //console.log(this.form);
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
    _c("div", { staticClass: "card-header" }),
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
                { staticClass: "form-group" },
                [
                  _c("single-select-app-two", {
                    class: { "is-invalid": _vm.form.errors.has("vendor_id") },
                    staticStyle: { "margin-top": "10px !important" },
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
              )
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-7" },
                  [
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
                      class: {
                        "is-invalid": _vm.form.errors.has("po_invoice")
                      },
                      attrs: {
                        type: "text",
                        name: "po_invoice",
                        placeholder: "Purchase order invoice"
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
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "po_invoice" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(3),
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
                _vm._m(4),
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
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-7" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po_due_date,
                        expression: "form.po_due_date"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      type: "date",
                      name: "po_due_date",
                      placeholder: "Due Date"
                    },
                    domProps: { value: _vm.form.po_due_date },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "po_due_date", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-4" }, [
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
                          _c("div", { staticClass: "form-group-" }, [
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
                                  value: input.pro_qty,
                                  expression: "input.pro_qty"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
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
                                  value: input.pro_unit,
                                  expression: "input.pro_unit"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", name: "pro_unit" },
                              domProps: { value: input.pro_unit },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "pro_unit",
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
                                  value: input.unit_mrp,
                                  expression: "input.unit_mrp"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                type: "number",
                                min: "0",
                                step: ".01",
                                name: "unit_mrp"
                              },
                              domProps: { value: input.unit_mrp },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "unit_mrp",
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
                                readonly: "",
                                type: "number",
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
              _c("div", { staticClass: "form-group" }, [
                _vm._m(7),
                _vm._v(" "),
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
                    attrs: {
                      id: "po_payment_method",
                      name: "po_payment_method"
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
                      _vm._v("Payment Type ..")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [_vm._v("Cash")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Bank Transfer")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [_vm._v("Cheque")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
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
                  staticClass: "form-control",
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
            _c("div", { staticClass: "col-md-5" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 text-right" }, [
              _c("div", { staticClass: "row form-group mb-1 mb-1" }, [
                _vm._m(9),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("span", [
                    _vm._v(" " + _vm._s(_vm.invoiceSubTotalAmount) + " ")
                  ]),
                  _c("span", [_vm._v("Tk")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-1" }, [
                _vm._m(10),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
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
                _vm._m(11),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("span", [
                    _vm._v(" " + _vm._s(_vm.form.po_invoice_total) + " ")
                  ]),
                  _c("span", [_vm._v("Tk")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row form-group mb-1" }, [
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po_paid_amount,
                        expression: "form.po_paid_amount"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "number", name: "po_paid_amount" },
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
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mr-4- mt-2" }, [
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
                    [_c("i", { staticClass: "far fa-edit" }), _vm._v(" Update")]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" }),
    _vm._v(" "),
    _vm._v("\r\n    " + _vm._s(_vm.product_id_list) + "\r\n\r\n")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("h4", [_vm._v(" Middle")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("h4", [_vm._v(" Middle")])
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
      _c("label", { staticClass: "pt-2-" }, [_c("small", [_vm._v("Due Date")])])
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
        { attrs: { width: "3%", scope: "col", title: "Product Unit" } },
        [_c("small", [_vm._v("Unit")])]
      ),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "4%", scope: "col", title: "Product Unit Price" } },
        [_c("small", [_vm._v("Unit MRP")])]
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
        { attrs: { width: "3%", scope: "col", title: "Product wise Total" } },
        [_c("small", [_vm._v("Total")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("small", [_vm._v("Payment Method")])])
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
    return _c("div", { staticClass: "col-sm-8 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Sub Total:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_vm._v("Discount:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("Total:")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8 text-right" }, [
      _c("label", { staticClass: "pt-2-" }, [
        _c("small", [_c("strong", [_vm._v("Paid Amount:")])])
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
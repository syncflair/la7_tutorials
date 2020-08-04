(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProductMasterForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      editMode: false,
      //Use this for add edit using the same form   
      productTypes: [{
        name: 'General'
      }, {
        name: 'Virtual'
      }, {
        name: 'Service'
      }, {
        name: 'Downloadable'
      }],
      CustomerGroups: [{
        name: 'Default'
      }, {
        name: 'Wholesale'
      }],
      //form multiselect app for category
      placeHolder: 'Search Category',
      filterBy: 'cat_name',
      valueProperty: 'id',
      //multiselect app for category
      placeHolder_pro: 'Search Product',
      filterBy_pro: 'sys_pro_name',
      valueProperty_pro: 'id',
      // Create a new form instance
      form: new Form({
        id: '',
        user_id: '',
        sys_pro_name: '',
        pro_code: '',
        pro_type: '',
        pro_slug: '',
        status_m_id: '',
        brand_id: '',
        pro_model: '',
        sku: '',
        upc: '',
        isbn: '',
        mpn: '',
        pro_qty: '',
        pro_price: '',
        pro_sale_price: '',
        pro_image: '',
        is_enabled: '',
        pro_category: [],
        pro_attributes: [],
        pro_specification: [{
          specification_name: '',
          specification_desc: '',
          specification_serial: ''
        }],
        pro_discount: [{
          customer_group: '',
          discount_qty: '',
          discount_price: '',
          discount_priority: '',
          discount_start_date: '',
          discount_end_date: ''
        }],
        related_products: [],
        pro_translation: [],
        //pro_suppliers:[],
        //pro_shops:[],
        multi_image: []
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['allLanguages', 'AllStatus', 'AllBrands', 'AllCategory', 'autoSearchCategories', 'AllSpecifications', 'AllAttributes', 'AllAttributeValues'])),
  //end Computed
  methods: {
    //###################################### Specification Function ################################################
    add_specificaton: function add_specificaton() {
      this.form.pro_specification.push({
        specification_name: '',
        specification_desc: ''
      }); //alert('Kkk');
    },
    remove_specification: function remove_specification(index) {
      this.form.pro_specification.splice(index, 1);
    },
    //###################################### End Specification Function ############################################
    //###################################### Discount Function ################################################
    add_discount: function add_discount() {
      this.form.pro_discount.push({
        customer_group: '',
        discount_qty: '',
        discount_price: '',
        discount_priority: '',
        discount_start_date: '',
        discount_end_date: ''
      });
    },
    remove_discount: function remove_discount(index) {
      this.form.pro_discount.splice(index, 1);
    },
    //###################################### End Discount Function ############################################
    //###################################### End Attribute Function ############################################
    generateAttribute: function generateAttribute(data, key, event) {
      //console.log(data+'='+event.target.checked);
      if (event.target.checked === true) {
        //console.log(data);
        var data = this.data;
        this.form.pro_attributes.push({
          data: [{
            attribute_vale: '',
            quantity: '',
            price: '',
            priority: ''
          }]
        });
      } else {
        //console.log('No '+data);
        this.form.pro_attributes.splice(key, 1);
      }
    },
    //###################################### End Attribute Function ############################################
    pushToLanguageTranslationArray: function pushToLanguageTranslationArray() {
      // for(let i in this.allLanguages){
      //   this.form.pro_translation.push({ language_id:this.allLanguages[i].id, lang_code:this.allLanguages[i].lang_code, product_name: '', product_desc: '' }); 
      // }
      for (var i = 0; i < this.allLanguages.length; i++) {
        this.form.pro_translation.push({
          language_id: this.allLanguages[i].id,
          lang_code: this.allLanguages[i].lang_code,
          product_name: '',
          product_desc: ''
        });
      }
    },
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
      //this.form.post('/spa/Product-Info')

      this.form.post('/spa/Product-Info').then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this2.$Progress.finish();

          _this2.form.reset(); //reset from after submit	
          // this.$refs.avatar.value = ''; //clear file input tag 
          //this.ShowOnChangeImage = null;


          _this2.$router.push({
            path: '/spa/ProductMaster'
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

      this.form.put('/spa/Product-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this3.$Progress.finish();

          toastr.success(data.success);

          _this3.form.reset(); //reset from after submit


          _this3.editMode = false; // this.$refs.avatar.value = ''; //clear file input tag 
          // this.ShowOnChangeImage = null;

          _this3.$router.push({
            path: '/spa/ProductMaster'
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
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.emp_name.focus();

        if (this.$route.params.data.pro_specification === null) {
          this.form.pro_specification = [{
            specification_name: '',
            specification_desc: '',
            specification_serial: ''
          }];
        }

        if (this.$route.params.data.pro_discount === null) {
          this.form.pro_discount = [{
            customer_group: '',
            discount_qty: '',
            discount_price: '',
            discount_priority: '',
            discount_start_date: '',
            discount_end_date: ''
          }];
        }

        if (this.$route.params.data.pro_category === null) {
          this.form.pro_category = [];
        } //   else{
        // 	 // this.form.departments = Object.values(this.$route.params.data.departments).filter(
        // 	 this.form.departments = Object.values(this.$route.params.data.departments).map(
        //  		 		item => {	
        //  		 			//return item['id'];
        //  		 			 return item.id;
        //  		 		}
        //   		 );
        // }	    	

      }
    }
  },
  //end Methods
  created: function created() {
    var _this4 = this;

    this.fillForm();
    this.$store.dispatch('commonStoreForAll/AllStatus', 'Product'); //get status with "Product" keyword

    this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get all language

    this.$store.dispatch('commonStoreForAll/fetchBrands'); //get all brands

    this.$store.dispatch('commonStoreForAll/fetchCategory'); //get all category

    this.$store.dispatch('commonStoreForAll/fetchSpecifications'); //get all Specification

    this.$store.dispatch('commonStoreForAll/fetchAttributeList'); //get all Attribute

    this.$store.dispatch('commonStoreForAll/fetchAttributeValue'); //get all Attribute Value
    //call from multi-select-app-one.vue

    FireEvent.$on('AutoCompleteSearchForData', function (data) {
      _this4.$store.dispatch('commonStoreForAll/AutoCompleteSearchForCategory', data);
    });

    if (this.editMode === false) {
      setTimeout(function () {
        _this4.pushToLanguageTranslationArray();
      }, 2000);
    } //console.log(this.form);

  },
  //end Created
  mounted: function mounted() {//console.log(this.form.pro_translation);        
    //console.log(this.form.pro_translation);
  }
}); //end export Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
            [_vm._v("New Product")]
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
            [_vm._v("Update Product")]
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
                attrs: { to: "/spa/ProductMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-user-tie" }),
                _vm._v(" Products\r\n        \t")
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
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card card-primary card-outline card-outline-tabs"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-content",
                        attrs: { id: "custom-tabs-Content" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade active show",
                            attrs: {
                              id: "tabs-body-one",
                              role: "tabpanel",
                              "aria-labelledby": "tab-one"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [
                                      _vm._v("Product name for system *")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.sys_pro_name,
                                          expression: "form.sys_pro_name"
                                        }
                                      ],
                                      ref: "sys_pro_name",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "sys_pro_name"
                                        )
                                      },
                                      attrs: {
                                        type: "text",
                                        name: "sys_pro_name",
                                        placeholder: "product name for system"
                                      },
                                      domProps: {
                                        value: _vm.form.sys_pro_name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "sys_pro_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "sys_pro_name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("Product type *")]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.pro_type,
                                            expression: "form.pro_type"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-sm-",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "pro_type"
                                          )
                                        },
                                        attrs: {
                                          id: "pro_type",
                                          name: "pro_type"
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "pro_type",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Select type ..")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.productTypes, function(pt) {
                                          return _c(
                                            "option",
                                            { domProps: { value: pt.name } },
                                            [
                                              _vm._v(
                                                "\r\n                      " +
                                                  _vm._s(pt.name) +
                                                  "\r\n                    "
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_type"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("Status *")]),
                                    _vm._v(" "),
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
                                        staticClass:
                                          "form-control form-control-sm-",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "status_m_id"
                                          )
                                        },
                                        attrs: {
                                          id: "status_m_id",
                                          name: "status_m_id"
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
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
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Select product status ..")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.AllStatus, function(
                                          a_status
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: a_status.id,
                                              domProps: { value: a_status.id }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(a_status.status_name)
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "status_m_id"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12 col-sm-12" },
                                [
                                  _c(
                                    "table",
                                    { staticClass: "table" },
                                    _vm._l(_vm.form.pro_translation, function(
                                      pt,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "alert- alert-warning- text-center mb-0",
                                              staticStyle: {
                                                background:
                                                  "rgba(0, 0, 0, 0.06)"
                                              }
                                            },
                                            [_vm._v(_vm._s(pt.lang_code))]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: pt.language_id,
                                                expression: "pt.language_id"
                                              }
                                            ],
                                            attrs: {
                                              type: "hidden",
                                              name: "language_id[]"
                                            },
                                            domProps: { value: pt.language_id },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  pt,
                                                  "language_id",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: pt.lang_code,
                                                expression: "pt.lang_code"
                                              }
                                            ],
                                            attrs: {
                                              type: "hidden",
                                              name: "lang_code[]"
                                            },
                                            domProps: { value: pt.lang_code },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  pt,
                                                  "lang_code",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cat_img" } },
                                                [
                                                  _vm._v(
                                                    "Product " +
                                                      _vm._s(pt.lang_code)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: pt.product_name,
                                                    expression:
                                                      "pt.product_name"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "product_name"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  name: "product_name[]"
                                                },
                                                domProps: {
                                                  value: pt.product_name
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      pt,
                                                      "product_name",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "product_name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cat_img" } },
                                                [
                                                  _vm._v(
                                                    "Detials " +
                                                      _vm._s(pt.lang_code)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("vue-editor", {
                                                attrs: {
                                                  name: "product_desc[]",
                                                  placeholder: "Product Details"
                                                },
                                                model: {
                                                  value: pt.product_desc,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      pt,
                                                      "product_desc",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "pt.product_desc"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-two",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-two"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Product code ")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_code,
                                        expression: "form.pro_code"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_code",
                                      placeholder: "Internal product code"
                                    },
                                    domProps: { value: _vm.form.pro_code },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_code",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Model ")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_model,
                                        expression: "form.pro_model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_model",
                                      placeholder: "Product Model"
                                    },
                                    domProps: { value: _vm.form.pro_model },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_model",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("SKU")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.sku,
                                        expression: "form.sku"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "sku",
                                      placeholder: "Stock Keeping Unit"
                                    },
                                    domProps: { value: _vm.form.sku },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "sku",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("UPS")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.ups,
                                        expression: "form.ups"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "ups",
                                      placeholder: "Universal Product Code"
                                    },
                                    domProps: { value: _vm.form.ups },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "ups",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("ISBN")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.isbn,
                                        expression: "form.isbn"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "isbn",
                                      placeholder: "International Book Number"
                                    },
                                    domProps: { value: _vm.form.isbn },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "isbn",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("MPN")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mpn,
                                        expression: "form.mpn"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "mpn",
                                      placeholder: "Manufacture Part Number"
                                    },
                                    domProps: { value: _vm.form.mpn },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mpn",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Quantity")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_qty,
                                        expression: "form.pro_qty"
                                      }
                                    ],
                                    ref: "pro_qty",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_qty",
                                      placeholder: "Product quantity"
                                    },
                                    domProps: { value: _vm.form.pro_qty },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_qty",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Price")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_price,
                                        expression: "form.pro_price"
                                      }
                                    ],
                                    ref: "pro_price",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_price",
                                      placeholder: "Product price"
                                    },
                                    domProps: { value: _vm.form.pro_price },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_price",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Sale Price")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_sale_price,
                                        expression: "form.pro_sale_price"
                                      }
                                    ],
                                    ref: "pro_sale_price",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_sale_price",
                                      placeholder: "Product Sale price"
                                    },
                                    domProps: {
                                      value: _vm.form.pro_sale_price
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_sale_price",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Brand")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.brand_id,
                                          expression: "form.brand_id"
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm-",
                                      attrs: {
                                        id: "brand_id",
                                        name: "brand_id"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "brand_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Select brand ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.AllBrands, function(brand) {
                                        return _c(
                                          "option",
                                          {
                                            key: brand.id,
                                            domProps: { value: brand.id }
                                          },
                                          [_vm._v(_vm._s(brand.brand_name))]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-left": "0px !important"
                                        }
                                      },
                                      [_vm._v("Select Category")]
                                    ),
                                    _vm._v(" "),
                                    _c("multi-select-app-one", {
                                      attrs: {
                                        options: _vm.AllCategory,
                                        autoSearchOptions:
                                          _vm.autoSearchCategories,
                                        filterBy: _vm.filterBy,
                                        "place-holder": _vm.placeHolder,
                                        "value-property": _vm.valueProperty
                                      },
                                      model: {
                                        value: _vm.form.pro_category,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "pro_category",
                                            $$v
                                          )
                                        },
                                        expression: "form.pro_category"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._m(2),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-three",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-three"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12",
                                  staticStyle: {
                                    border: "1px solid rgba(0, 0, 0, 0.06)",
                                    background: "rgba(0, 0, 0, 0.06)"
                                  }
                                },
                                _vm._l(_vm.AllAttributes, function(
                                  attrib,
                                  key
                                ) {
                                  return _c("span", [
                                    _vm._v(
                                      "\r\n                    " +
                                        _vm._s(attrib.attribute_name) +
                                        " \r\n                   "
                                    ),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                      on: {
                                        click: function($event) {
                                          return _vm.generateAttribute(
                                            attrib.attribute_name,
                                            key,
                                            $event
                                          )
                                        }
                                      }
                                    })
                                  ])
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _vm._v(
                                  "\r\n              " +
                                    _vm._s(_vm.form.pro_attributes) +
                                    "\r\n              "
                                ),
                                _vm._v("\r\n              }\r\n            ")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-four",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-four"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table-sm table table-striped"
                                  },
                                  [
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.pro_specification, function(
                                      input,
                                      key
                                    ) {
                                      return _c("tr", { key: key }, [
                                        _c("td", [
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    input.specification_name,
                                                  expression:
                                                    "input.specification_name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                id: "",
                                                name: "specification_name"
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    input,
                                                    "specification_name",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: {
                                                    disabled: "",
                                                    value: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Select specification .."
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.AllSpecifications,
                                                function(specification) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value:
                                                          specification.specification_name
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          specification.specification_name
                                                        )
                                                      )
                                                    ]
                                                  )
                                                }
                                              )
                                            ],
                                            2
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: input.specification_desc,
                                                expression:
                                                  "input.specification_desc"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              name: "specification_desc",
                                              placeholder: "Description"
                                            },
                                            domProps: {
                                              value: input.specification_desc
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  input,
                                                  "specification_desc",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  input.specification_serial,
                                                expression:
                                                  "input.specification_serial"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              name: "specification_serial",
                                              placeholder: "Serial Number"
                                            },
                                            domProps: {
                                              value: input.specification_serial
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  input,
                                                  "specification_serial",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    key ||
                                                    (!key &&
                                                      _vm.form.pro_specification
                                                        .length > 1),
                                                  expression:
                                                    "key || ( !key && form.pro_specification.length > 1)"
                                                }
                                              ],
                                              staticClass:
                                                "btn btn-sm btn-danger",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.remove_specification(
                                                    key
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-minus-square"
                                              }),
                                              _vm._v(" Remove")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    key ==
                                                    _vm.form.pro_specification
                                                      .length -
                                                      1,
                                                  expression:
                                                    "key == form.pro_specification.length-1"
                                                }
                                              ],
                                              staticClass:
                                                "btn btn-sm btn-success",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.add_specificaton(
                                                    key
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-plus-square"
                                              }),
                                              _vm._v(" Add ")
                                            ]
                                          )
                                        ])
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-five",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-five"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table-sm table table-striped"
                                  },
                                  [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.pro_discount, function(
                                      input,
                                      key
                                    ) {
                                      return _c("tr", { key: key }, [
                                        _c("td", [
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
                                                      value:
                                                        input.customer_group,
                                                      expression:
                                                        "input.customer_group"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "",
                                                    name: "customer_group"
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$selectedVal = Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function(o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function(o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                      _vm.$set(
                                                        input,
                                                        "customer_group",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        disabled: "",
                                                        value: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Select customer group .."
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.CustomerGroups,
                                                    function(cg) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value: cg.name
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(cg.name)
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.discount_qty,
                                                    expression:
                                                      "input.discount_qty"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "number",
                                                  name: "discount_qty",
                                                  placeholder: "Quantity"
                                                },
                                                domProps: {
                                                  value: input.discount_qty
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_qty",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.discount_price,
                                                    expression:
                                                      "input.discount_price"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  name: "discount_price",
                                                  placeholder: "Price"
                                                },
                                                domProps: {
                                                  value: input.discount_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_priority,
                                                    expression:
                                                      "input.discount_priority"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  name: "discount_priority",
                                                  placeholder: "Priority"
                                                },
                                                domProps: {
                                                  value: input.discount_priority
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_priority",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_start_date,
                                                    expression:
                                                      "input.discount_start_date"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "date",
                                                  name: "discount_start_date",
                                                  placeholder: "Start Date"
                                                },
                                                domProps: {
                                                  value:
                                                    input.discount_start_date
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_start_date",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_end_date,
                                                    expression:
                                                      "input.discount_end_date"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "date",
                                                  name: "discount_end_date",
                                                  placeholder: "End Date"
                                                },
                                                domProps: {
                                                  value: input.discount_end_date
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_end_date",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        key ||
                                                        (!key &&
                                                          _vm.form.pro_discount
                                                            .length > 1),
                                                      expression:
                                                        "key || ( !key && form.pro_discount.length > 1)"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "btn btn-sm btn-danger",
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.remove_discount(
                                                        key
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-minus-square"
                                                  }),
                                                  _vm._v(" Remove")
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        key ==
                                                        _vm.form.pro_discount
                                                          .length -
                                                          1,
                                                      expression:
                                                        "key == form.pro_discount.length-1"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "btn btn-sm btn-success",
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.add_discount(
                                                        key
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-plus-square"
                                                  }),
                                                  _vm._v(" Add ")
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-six",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-six"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n           Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. \r\n        "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mr-4" }, [
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
                    [_vm._v("Save")]
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
                    [_vm._v("Update")]
                  )
                ]
              )
            ])
          ])
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
    return _c("div", { staticClass: "card-header p-0 border-bottom-0" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "custom-tabs", role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  id: "tab-one",
                  "data-toggle": "pill",
                  href: "#tabs-body-one",
                  role: "tab",
                  "aria-controls": "tabs-body-one",
                  "aria-selected": "true"
                }
              },
              [_vm._v("General")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-two",
                  "data-toggle": "pill",
                  href: "#tabs-body-two",
                  role: "tab",
                  "aria-controls": "tabs-body-two",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Data & Link")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-three",
                  "data-toggle": "pill",
                  href: "#tabs-body-three",
                  role: "tab",
                  "aria-controls": "tabs-body-three",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Attribute")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-four",
                  "data-toggle": "pill",
                  href: "#tabs-body-four",
                  role: "tab",
                  "aria-controls": "tabs-body-four",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Specification")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-five",
                  "data-toggle": "pill",
                  href: "#tabs-body-five",
                  role: "tab",
                  "aria-controls": "tabs-body-five",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Discount")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-six",
                  "data-toggle": "pill",
                  href: "#tabs-body-six",
                  role: "tab",
                  "aria-controls": "tabs-body-six",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Images")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "0px !important" } }, [
            _vm._v("Select Supplier")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "0px !important" } }, [
            _vm._v("Select Shop")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "0px !important" } }, [
            _vm._v("Related Product")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "0px !important" } }, [
            _vm._v("Downloadable Link")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Specification Name")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "45%" } }, [_vm._v("Details")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Serial No")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Action")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "20%" } }, [_vm._v("Customer Group")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "9%" } }, [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%" } }, [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%" } }, [_vm._v("Priority")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Start Date")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("End Date")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductMasterForm.vue?vue&type=template&id=802f46aa& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&");
/* harmony import */ var _ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductMasterForm.vue?vue&type=template&id=802f46aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
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
      //form multiselect app
      placeHolder: 'Select departments',
      filterBy: 'dept_name',
      valueProperty: 'id',
      // Create a new form instance
      form: new Form({
        id: '',
        user_id: '',
        //shop_id:'',
        //supplier_id:'',
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
        pro_features: [],
        related_products: [],
        pro_translation: [],
        multi_image: []
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['allLanguages', 'AllStatus'])),
  methods: {
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
        // if(this.$route.params.data.departments.length === 0){
        // 	this.form.departments = [];
        // }else{
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
  created: function created() {
    var _this4 = this;

    this.fillForm();
    this.$store.dispatch('commonStoreForAll/AllStatus', 'Product'); //get status with "Product" keyword

    this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get all language

    FireEvent.$on('AutoCompleteSearchForDepartment', function (data) {
      _this4.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data);
    });

    if (this.editMode === false) {
      setTimeout(function () {
        _this4.pushToLanguageTranslationArray();
      }, 2000);
    } //console.log(this.form);

  },
  mounted: function mounted() {
    console.log(this.form.pro_translation); //console.log(this.form.pro_translation);
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
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
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
                                      ref: "pro_code",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "pro_code"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_code"
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
                                      ref: "pro_model",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "pro_model"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_model"
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
                                      ref: "sku",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has("sku")
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "sku" }
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
                                      ref: "ups",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has("ups")
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "ups" }
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
                                      ref: "isbn",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "isbn"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "isbn" }
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
                                      ref: "mpn",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has("mpn")
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "mpn" }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
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
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "pro_qty"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_qty"
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
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "pro_price"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_price"
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
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "pro_sale_price"
                                        )
                                      },
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
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_sale_price"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" })
                            ])
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
                            _vm._v(
                              "\r\n           Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna. \r\n        "
                            )
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
                            _vm._v(
                              "\r\n           Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. \r\n        "
                            )
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
                            _vm._v(
                              "\r\n           Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. \r\n        "
                            )
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
              [_vm._v("Feature")]
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
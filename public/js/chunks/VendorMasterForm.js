(self["webpackChunk"] = self["webpackChunk"] || []).push([["VendorMasterForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VendorMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      deleteImageIcon: false,
      //Delete Image icon if image exist
      editMode: false,
      //Use this for add edit using the same form   
      VendorTypes: [{
        name: 'Person'
      }, {
        name: 'Organization'
      }, {
        name: 'Shop'
      }],
      //form Single app
      placeHolder: 'Select Brand Shop',
      filterBy: 'brand_shop_title',
      valueProperty: 'id',
      // Create a new form instance
      form: new Form({
        id: '',
        status_id: '',
        brand_shop_id: '',
        vendor_name: '',
        vendor_email: '',
        vendor_phone: '',
        vendor_type: '',
        vendor_contact_name: '',
        vendor_nid: '',
        vendor_tin: '',
        vendor_bank_details: '',
        vendor_desc: '',
        vendor_address: '',
        dist_zone_id: '',
        enable_notify: '',
        //is_enabled: '',
        vendor_img: ''
      })
    };
  },
  //end data
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('commonStoreForAll', ['userStatus', 'branches', 'Dist_Zones'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('VendorMasterStore', ['autoSearchBrandShop', 'selectedBrandShop'])),
  methods: {
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
          _this.form.vendor_img = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this2 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/Vendor-Info')

      this.form.post('/spa/Vendor-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this2.$Progress.finish();

          _this2.form.reset(); //reset from after submit	


          _this2.$refs.vendor_img.value = ''; //clear file input tag 

          _this2.ShowOnChangeImage = null;

          _this2.$router.push({
            path: '/spa/VendorMaster'
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

      this.form.put('/spa/Vendor-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this3.$Progress.finish();

          toastr.success(data.success);

          _this3.form.reset(); //reset from after submit


          _this3.editMode = false;
          _this3.$refs.vendor_img.value = ''; //clear file input tag 

          _this3.ShowOnChangeImage = null;

          _this3.$router.push({
            path: '/spa/VendorMaster'
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

      this.$Progress.start();
      axios.post('/spa/Vendor-Info-DeleteImage/' + id).then(function (_ref3) {
        var data = _ref3.data;
        // this.ShowOnChangeImage = null;
        _this4.deleteImageIcon = false;
        _this4.form.vendor_img = null;

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
        //this.$refs.vendor_name.focus();  

        if (this.$route.params.data.brand_shop_id === null) {
          this.form.brand_shop_id = '';
        }

        if (this.$route.params.data.vendor_img != null) {
          this.deleteImageIcon = true;
        }
      } //load selected brand shop


      this.$store.dispatch('VendorMasterStore/fetchSelectedBrandShop', this.form.brand_shop_id);
    },
    AutoCompleteSearchForDataBrandShop: function AutoCompleteSearchForDataBrandShop(data) {
      this.$store.dispatch('VendorMasterStore/AutoCompleteSearchForDataBrandShop', data);
    },
    getSelectedDataByIdsForBrandShop: function getSelectedDataByIdsForBrandShop(data) {
      this.$store.dispatch('VendorMasterStore/fetchSelectedBrandShop', this.form.brand_shop_id);
    }
  },
  created: function created() {
    this.fillForm();
    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
    //this.$store.dispatch('commonStoreForAll/fetchBrandShops'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchBranches'); //get job title
    //console.log(this.form);
  }
}); //end export Default

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorMasterForm.vue?vue&type=template&id=deff5c9c& */ "./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c&");
/* harmony import */ var _VendorMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VendorMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VendorMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorMasterForm_vue_vue_type_template_id_deff5c9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VendorMasterForm.vue?vue&type=template&id=deff5c9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/Vendor/VendorMasterForm.vue?vue&type=template&id=deff5c9c& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-5 col-sm-6" }, [
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
            [_vm._v("New Vendor")]
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
            [_vm._v("Update - " + _vm._s(_vm.form.vendor_name))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-6 text-right" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/VendorMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-user-tie" }),
                _vm._v(" Vendor List\r\n        \t")
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
            _c("div", { staticClass: "col-md-10 offset-1" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-9 col-sm-12" }, [
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.vendor_name,
                              expression: "form.vendor_name"
                            }
                          ],
                          ref: "vendor_name",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("vendor_name")
                          },
                          attrs: {
                            type: "text",
                            name: "vendor_name",
                            placeholder: "Vendor Name"
                          },
                          domProps: { value: _vm.form.vendor_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "vendor_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "vendor_name" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.vendor_contact_name,
                            expression: "form.vendor_contact_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "vendor_contact_name",
                          placeholder: "Contact person name"
                        },
                        domProps: { value: _vm.form.vendor_contact_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "vendor_contact_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.vendor_email,
                              expression: "form.vendor_email"
                            }
                          ],
                          ref: "vendor_email",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("vendor_email")
                          },
                          attrs: {
                            type: "text",
                            name: "vendor_email",
                            placeholder: "Vendor Email"
                          },
                          domProps: { value: _vm.form.vendor_email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "vendor_email",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "vendor_email" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "div",
                        { staticClass: "input-group input-group-sm- mb-3" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.vendor_phone,
                                expression: "form.vendor_phone"
                              }
                            ],
                            ref: "vendor_phone",
                            staticClass: "form-control form-control-sm-",
                            class: {
                              "is-invalid": _vm.form.errors.has("vendor_phone")
                            },
                            attrs: {
                              type: "number",
                              name: "vendor_phone",
                              placeholder: "Enter vendor_phone number"
                            },
                            domProps: { value: _vm.form.vendor_phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "vendor_phone",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "vendor_phone" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.status_id,
                                expression: "form.status_id"
                              }
                            ],
                            staticClass: "form-control form-control-sm-",
                            class: {
                              "is-invalid": _vm.form.errors.has("status_id")
                            },
                            attrs: { id: "status_id", name: "status_id" },
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
                                  "status_id",
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
                              [_vm._v("Select Status ..")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.userStatus, function(u_status) {
                              return _c(
                                "option",
                                {
                                  key: u_status.id,
                                  domProps: { value: u_status.id }
                                },
                                [_vm._v(_vm._s(u_status.us_name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "status_id" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.vendor_type,
                                expression: "form.vendor_type"
                              }
                            ],
                            staticClass: "form-control form-control-sm-",
                            class: {
                              "is-invalid": _vm.form.errors.has("vendor_type")
                            },
                            attrs: { id: "vendor_type", name: "vendor_type" },
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
                                  "vendor_type",
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
                              [_vm._v("Select Vendor type ..")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.VendorTypes, function(vt) {
                              return _c(
                                "option",
                                { domProps: { value: vt.name } },
                                [
                                  _vm._v(
                                    "\r\n                          " +
                                      _vm._s(vt.name) +
                                      "\r\n                        "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "vendor_type" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("single-select-app-one", {
                          attrs: {
                            options: _vm.selectedBrandShop,
                            autoSearchOptions: _vm.autoSearchBrandShop,
                            filterBy: _vm.filterBy,
                            "place-holder": _vm.placeHolder,
                            "value-property": _vm.valueProperty
                          },
                          on: {
                            getAllDataListByIds:
                              _vm.getSelectedDataByIdsForBrandShop,
                            AutoCompleteSearchForData:
                              _vm.AutoCompleteSearchForDataBrandShop
                          },
                          model: {
                            value: _vm.form.brand_shop_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "brand_shop_id", $$v)
                            },
                            expression: "form.brand_shop_id"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(8),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.vendor_nid,
                            expression: "form.vendor_nid"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "vendor_nid",
                          placeholder: "NID"
                        },
                        domProps: { value: _vm.form.vendor_nid },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "vendor_nid",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.vendor_tin,
                            expression: "form.vendor_tin"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "vendor_tin",
                          placeholder: "TIN"
                        },
                        domProps: { value: _vm.form.vendor_tin },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "vendor_tin",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.vendor_bank_details,
                            expression: "form.vendor_bank_details"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "vendor_bank_details",
                          placeholder: "Bank account details"
                        },
                        domProps: { value: _vm.form.vendor_bank_details },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "vendor_bank_details",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.vendor_address,
                            expression: "form.vendor_address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "vendor_address",
                          placeholder: "Vendor Address"
                        },
                        domProps: { value: _vm.form.vendor_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "vendor_address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(12),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dist_zone_id,
                              expression: "form.dist_zone_id"
                            }
                          ],
                          staticClass: "form-control form-control-sm-",
                          attrs: { id: "dist_zone_id", name: "dist_zone_id" },
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
                                "dist_zone_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Select zone / Area ..")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.Dist_Zones, function(zone) {
                            return _c(
                              "option",
                              { key: zone.id, domProps: { value: zone.id } },
                              [
                                _vm._v(
                                  _vm._s(zone.zone_name) +
                                    " (" +
                                    _vm._s(zone.zip_code) +
                                    ")"
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _vm._m(13),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("vue-editor", {
                          staticClass: "form-control-",
                          attrs: {
                            name: "vendor_desc",
                            placeholder: "Vendor Details"
                          },
                          model: {
                            value: _vm.form.vendor_desc,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "vendor_desc", $$v)
                            },
                            expression: "form.vendor_desc"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "row pt-2" }, [
                    _c("div", { staticClass: "col-md-12 text-center" }, [
                      _vm.ShowOnChangeImage != null
                        ? _c("span", [
                            _vm.ShowOnChangeImage != null
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px",
                                    "//height": "auto"
                                  },
                                  attrs: { src: _vm.ShowOnChangeImage }
                                })
                              : _vm._e()
                          ])
                        : _c("span", [
                            _vm.form.vendor_img == "undefined"
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.form.vendor_img === ""
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm.form.vendor_img === null
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm.form.vendor_img != ""
                              ? _c("img", {
                                  staticClass:
                                    "img-fluid img-thumbnail focusImgOnHover",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: _vm.form.vendor_img }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.deleteImageIcon
                              ? _c("i", {
                                  staticClass: "far fa-times-circle",
                                  staticStyle: {
                                    cursor: "pointer",
                                    background: "#fff",
                                    padding: "4px 2px 2px 2px",
                                    color: "red",
                                    "border-radius": "10px",
                                    "margin-left": "-15px"
                                  },
                                  attrs: { title: "click to Delete" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteImage(_vm.form.id)
                                    }
                                  }
                                })
                              : _vm._e()
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "vendor_img" } }),
                        _vm._v(" "),
                        _c("input", {
                          ref: "vendor_img",
                          staticClass: "form-control",
                          attrs: { type: "file", name: "vendor_img" },
                          on: { change: _vm.onImageChange }
                        })
                      ])
                    ])
                  ])
                ])
              ])
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
                    [_c("i", { staticClass: "fas fa-save" }), _vm._v(" Save")]
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
    _c("div", { staticClass: "card-footer" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Vendor Name *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Contact Person")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Email *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Phone *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v(" +88 ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Status *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Vendor Type *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Brand Shop")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("NID")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("TIN")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Bank details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Zone")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
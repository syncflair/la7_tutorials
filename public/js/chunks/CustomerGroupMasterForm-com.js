(self["webpackChunk"] = self["webpackChunk"] || []).push([["CustomerGroupMasterForm-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomerGroupMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      editMode: false,
      //Use this for add edit using the same form     
      // Create a new form instance
      form: new Form({
        id: '',
        group_name: '',
        group_desc: '',
        cg_img: '',
        is_enabled: ''
      })
    };
  },
  //end data
  methods: {
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
          _this.form.cg_img = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    },
    addData: function addData() {
      var _this2 = this;

      this.editMode = false;
      this.form.reset();
      setTimeout(function () {
        _this2.$refs.group_name.focus();
      }, 600);
    },
    editData: function editData(data) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(data); //this.$refs.group_name.focus();    		
    },
    ClearForm: function ClearForm() {
      this.editMode = false;
      this.form.reset(); //reset from after submit

      this.form.clear(); //this.$refs.group_name.focus()
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar Customer Group

      this.form.post('/spa/customerGroup-Info').then(function (_ref) {
        var data = _ref.data;

        //alert('ok');
        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this3.$Progress.finish();

          _this3.form.reset(); //reset from after submit


          _this3.$refs.cg_img.value = ''; //clear file input tag 

          _this3.ShowOnChangeImage = null;
          $('#formModal').modal('hide');
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this4 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar Customer Group

      this.form.put('/spa/customerGroup-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this4.$Progress.finish();

          toastr.success(data.success);

          _this4.form.reset(); //reset from after submit


          _this4.editMode = false;
          _this4.$refs.cg_img.value = ''; //clear file input tag 

          _this4.ShowOnChangeImage = null;
          $('#formModal').modal('hide'); //  this.$refs.group_name.focus(); 
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this4.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    }
  },
  created: function created() {
    var _this5 = this;

    FireEvent.$on('editData', function (data) {
      //alert(data.id);
      //this.form.fill(data);   //this is also work
      _this5.editData(data);
    });
    FireEvent.$on('addData', function () {
      _this5.addData();
    });
  }
}); //End Exprot Default

/***/ }),

/***/ "./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerGroupMasterForm.vue?vue&type=template&id=34023d64& */ "./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64&");
/* harmony import */ var _CustomerGroupMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerGroupMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerGroupMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerGroupMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerGroupMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerGroupMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerGroupMasterForm_vue_vue_type_template_id_34023d64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerGroupMasterForm.vue?vue&type=template&id=34023d64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/CustomerGroup/CustomerGroupMasterForm.vue?vue&type=template&id=34023d64& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "formModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "",
          "aria-hidden": "true",
          "data-backdrop": "static"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg-",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title", attrs: { id: "" } }, [
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
                    [_vm._v("Add Customer Group")]
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
                    [_vm._v("Update Customer Group")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        return _vm.ClearForm()
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
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
                  _c("div", { staticClass: "modal-body pt-0" }, [
                    _c("div", { staticClass: "card--" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12 col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Group Name*")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.group_name,
                                    expression: "form.group_name"
                                  }
                                ],
                                ref: "group_name",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "group_name"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "group_name",
                                  placeholder: "Customer Group Name"
                                },
                                domProps: { value: _vm.form.group_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "group_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "group_name" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Details")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.group_desc,
                                  expression: "form.group_desc"
                                }
                              ],
                              ref: "group_desc",
                              staticClass: "form-control",
                              attrs: {
                                name: "group_desc",
                                placeholder: "Details"
                              },
                              domProps: { value: _vm.form.group_desc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "group_desc",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.is_enabled,
                                  expression: "form.is_enabled"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "checkbox",
                                name: "is_enabled",
                                id: "checkbox",
                                value: "1"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.form.is_enabled)
                                  ? _vm._i(_vm.form.is_enabled, "1") > -1
                                  : _vm.form.is_enabled
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.form.is_enabled,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "1",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.form,
                                          "is_enabled",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.form,
                                          "is_enabled",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.form, "is_enabled", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "checkbox" }
                              },
                              [_vm._v("Is Active")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row pt-3" }, [
                            _c("div", { staticClass: "col-md-9" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "cg_img" } }, [
                                  _vm._v("Image")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  ref: "cg_img",
                                  staticClass: "form-control",
                                  attrs: { type: "file", name: "cg_img" },
                                  on: { change: _vm.onImageChange }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _vm.ShowOnChangeImage != null
                                ? _c("span", [
                                    _vm.ShowOnChangeImage != null
                                      ? _c("img", {
                                          staticClass:
                                            "img-fluid img-thumbnail",
                                          staticStyle: {
                                            width: "65px",
                                            height: "65px"
                                          },
                                          attrs: { src: _vm.ShowOnChangeImage }
                                        })
                                      : _vm._e()
                                  ])
                                : _c("span", [
                                    _vm.form.cg_img == "undefined"
                                      ? _c("img", {
                                          staticClass:
                                            "img-fluid img-thumbnail",
                                          staticStyle: {
                                            width: "65px",
                                            height: "65px"
                                          },
                                          attrs: { src: "../" + _vm.NoIconUrl }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.form.cg_img === ""
                                      ? _c("img", {
                                          staticClass:
                                            "img-fluid img-thumbnail",
                                          staticStyle: {
                                            width: "65px",
                                            height: "65px"
                                          },
                                          attrs: { src: "../" + _vm.NoIconUrl }
                                        })
                                      : _vm.form.cg_img === null
                                      ? _c("img", {
                                          staticClass:
                                            "img-fluid img-thumbnail",
                                          staticStyle: {
                                            width: "65px",
                                            height: "65px"
                                          },
                                          attrs: { src: "../" + _vm.NoIconUrl }
                                        })
                                      : _vm.form.cg_img != ""
                                      ? _c("img", {
                                          staticClass:
                                            "img-fluid img-thumbnail focusImgOnHover",
                                          staticStyle: {
                                            width: "65px",
                                            height: "65px"
                                          },
                                          attrs: { src: _vm.form.cg_img }
                                        })
                                      : _vm._e()
                                  ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-danger btn-flat btn-sm close-form",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: {
                          click: function($event) {
                            return _vm.ClearForm()
                          }
                        }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-flat btn-sm",
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
                            _vm._v(" Save")
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
                            _vm._v(" Update")
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
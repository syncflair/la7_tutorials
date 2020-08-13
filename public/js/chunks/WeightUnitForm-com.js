(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WeightUnitForm-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      //  ShowOnChangeImage:null,	
      editMode: false,
      //Use this for add edit using the same form     
      // Create a new form instance
      form: new Form({
        id: '',
        weight_title: '',
        weight_unit: '',
        weight_value: '',
        weight_desc: '',
        is_enabled: ''
      })
    };
  },
  //end data
  methods: {
    addWeightUnit: function addWeightUnit() {
      var _this = this;

      this.editMode = false;
      this.form.reset();
      setTimeout(function () {
        _this.$refs.weight_title.focus();
      }, 600);
    },
    editWeightUnit: function editWeightUnit(data) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(data); //this.$refs.weight_title.focus();    		
    },
    ClearForm: function ClearForm() {
      this.editMode = false;
      this.form.reset(); //reset from after submit

      this.form.clear(); //this.$refs.weight_title.focus()
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/spa/WeightUnit-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this2.$Progress.finish();

          _this2.form.reset(); //reset from after submit


          $('#WeightUnitModal').modal('hide');
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this3 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/WeightUnit-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this3.$Progress.finish();

          toastr.success(data.success);

          _this3.form.reset(); //reset from after submit


          _this3.editMode = false;
          $('#WeightUnitModal').modal('hide'); //  this.$refs.weight_title.focus(); 
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    }
  },
  created: function created() {
    var _this4 = this;

    FireEvent.$on('editWeightUnit', function (data) {
      //alert(data.id);
      //this.form.fill(data);   //this is also work
      _this4.editWeightUnit(data);
    });
    FireEvent.$on('addWeightUnit', function () {
      _this4.addWeightUnit();
    });
  }
}); //End Exprot Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c& ***!
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
  return _c("span", [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "WeightUnitModal",
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
                    [_vm._v("Add Weight Unit")]
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
                    [_vm._v("Update Weight Unit")]
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
                              _c("label", [_vm._v("Weight Unit Name *")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.weight_title,
                                    expression: "form.weight_title"
                                  }
                                ],
                                ref: "weight_title",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "weight_title"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "weight_title",
                                  placeholder: "Weight Unit Name"
                                },
                                domProps: { value: _vm.form.weight_title },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "weight_title",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "weight_title" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Unit")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.weight_unit,
                                    expression: "form.weight_unit"
                                  }
                                ],
                                ref: "weight_unit",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "weight_unit"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "weight_unit",
                                  placeholder: "Enter Weight Unit code"
                                },
                                domProps: { value: _vm.form.weight_unit },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "weight_unit",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "weight_unit" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Value")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.weight_value,
                                    expression: "form.weight_value"
                                  }
                                ],
                                ref: "weight_value",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "weight_value"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "weight_value",
                                  placeholder: "Enter Weight Unit value"
                                },
                                domProps: { value: _vm.form.weight_value },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "weight_value",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "weight_value" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Details")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.weight_desc,
                                    expression: "form.weight_desc"
                                  }
                                ],
                                ref: "weight_desc",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "weight_desc"
                                  )
                                },
                                attrs: {
                                  name: "weight_desc",
                                  placeholder: "Weight details"
                                },
                                domProps: { value: _vm.form.weight_desc },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "weight_desc",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "weight_desc" }
                              })
                            ],
                            1
                          ),
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



/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightUnitForm.vue?vue&type=template&id=9477e19c& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c&");
/* harmony import */ var _WeightUnitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightUnitForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WeightUnitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnitForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnitForm.vue?vue&type=template&id=9477e19c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue?vue&type=template&id=9477e19c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitForm_vue_vue_type_template_id_9477e19c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
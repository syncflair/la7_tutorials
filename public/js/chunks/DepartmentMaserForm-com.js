(self["webpackChunk"] = self["webpackChunk"] || []).push([["DepartmentMaserForm-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Erorrs = /*#__PURE__*/function () {
  function Erorrs() {
    _classCallCheck(this, Erorrs);

    this.errors = {};
  } //this field get from form input error field like errors.get('name')


  _createClass(Erorrs, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors.errors;
    }
  }]);

  return Erorrs;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DepartmentMasterForm",
  data: function data() {
    return {
      editMode: false,
      //Use this for add edit using the same form     
      // Create a new form instance
      // form: new Form({
      //   id: '',
      //   dept_name: '',
      //   dept_desc: '',
      //   is_enabled: '',	          
      // }),
      formData: {
        id: '',
        dept_name: '',
        dept_desc: '',
        is_enabled: ''
      },
      //errors:{},
      errors: new Erorrs()
    };
  },
  //end data
  computed: {},
  methods: {
    addDepartment: function addDepartment() {
      var _this = this;

      this.editMode = false;
      this.formData = {};
      this.errors.errors = {}; //return empty errors to  errors constructor inside error class         
      //this.form.reset();	    		

      setTimeout(function () {
        _this.$refs.dept_name.focus();
      }, 600);
    },
    editDepartment: function editDepartment(data) {
      this.editMode = true; //this.form.reset(); 
      //this.form.fill(data); 

      this.formData = {};
      this.errors.errors = {}; //return empty errors to  errors constructor inside error class 

      this.formData = data; //fill the form when update	 
      //this.$refs.dept_name.focus();    		
    },
    ClearForm: function ClearForm() {
      this.editMode = false; //this.form.reset();  //reset from after submit
      //this.form.clear(); 
      //this.$refs.dept_name.focus()

      this.formData = {};
      this.errors.errors = {}; //return empty errors to  errors constructor inside error class 
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/spa/Department-Info', this.formData) //this.form.post('/spa/Department-Info')
      .then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this2.$Progress.finish(); //this.form.reset();  //reset from after submit


          _this2.formData = {};
          _this2.errors.errors = {}; //return empty errors to  errors constructor inside error class 

          $('#DepartmentModal').modal('hide');
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function (error) {
        _this2.$Progress.fail(); //toastr.warning('Something is wrong!');
        // this.errors = error.response.data;


        _this2.errors.record(error.response.data); //send data to Erorrs class

      });
    },
    updateFormData: function updateFormData() {
      var _this3 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      axios.put('/spa/Department-Info/' + this.formData.id, this.formData) // this.form.put('/spa/Department-Info/'+this.form.id)
      .then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this3.$Progress.finish();

          toastr.success(data.success); //this.form.reset();  //reset from after submit

          _this3.formData = {};
          _this3.errors.errors = {}; //return empty errors to  errors constructor inside error class 

          _this3.editMode = false;
          $('#DepartmentModal').modal('hide'); //  this.$refs.dept_name.focus(); 
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail(); //toastr.warning('Something is wrong!');


        _this3.errors.record(error.response.data); //send data to Erorrs class

      });
    }
  },
  created: function created() {
    var _this4 = this;

    FireEvent.$on('editDepartment', function (data) {
      //alert(data.id);
      //this.form.fill(data);   //this is also work
      _this4.editDepartment(data);
    });
    FireEvent.$on('addDepartment', function () {
      _this4.addDepartment();
    });
  }
}); //End Exprot Default

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepartmentMaserForm.vue?vue&type=template&id=19066c78& */ "./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78&");
/* harmony import */ var _DepartmentMaserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentMaserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DepartmentMaserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__.render,
  _DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentMaserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepartmentMaserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentMaserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentMaserForm_vue_vue_type_template_id_19066c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepartmentMaserForm.vue?vue&type=template&id=19066c78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Department/DepartmentMaserForm.vue?vue&type=template&id=19066c78& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
          id: "DepartmentModal",
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
                    [_vm._v("Add Department")]
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
                    [_vm._v("Update Department")]
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
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Department Name *")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.dept_name,
                                  expression: "formData.dept_name"
                                }
                              ],
                              ref: "dept_name",
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "dept_name",
                                placeholder: "Department Name"
                              },
                              domProps: { value: _vm.formData.dept_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formData,
                                    "dept_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.get("dept_name")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Details")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.dept_desc,
                                  expression: "formData.dept_desc"
                                }
                              ],
                              ref: "dept_desc",
                              staticClass: "form-control",
                              attrs: {
                                name: "dept_desc",
                                placeholder: "Department details"
                              },
                              domProps: { value: _vm.formData.dept_desc },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.formData,
                                    "dept_desc",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.get("dept_desc")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.is_enabled,
                                  expression: "formData.is_enabled"
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
                                checked: Array.isArray(_vm.formData.is_enabled)
                                  ? _vm._i(_vm.formData.is_enabled, "1") > -1
                                  : _vm.formData.is_enabled
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.formData.is_enabled,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "1",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.formData,
                                          "is_enabled",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.formData,
                                          "is_enabled",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.formData, "is_enabled", $$c)
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
              ),
              _vm._v(" "),
              _vm._v(
                "\r\n  \t " + _vm._s(_vm.errors.dept_name) + "\r\n\r\n    "
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
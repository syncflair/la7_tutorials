(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WeightUnit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeightUnitList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightUnitList.vue */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue");
/* harmony import */ var _WeightUnitForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightUnitForm.vue */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CurrencyMaster",
  components: {
    WeightUnitList: _WeightUnitList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    WeightUnitForm: _WeightUnitForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  //end data	
  methods: {},
  //end Methods
  created: function created() {}
}); //end export default

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WeightUnitList",
  data: function data() {
    return {
      WeightUnits: {} // perPage: 0,                 

    };
  },
  computed: {},
  methods: {
    fetchWeightUnit: function fetchWeightUnit() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/WeightUnit-Info').then(function (response) {
        _this.WeightUnits = response.data; // is an object... use when pagination
        //this.weightUn = response.data.data; //is an object... default 
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addWeightUnit: function addWeightUnit() {
      FireEvent.$emit('addWeightUnit');
    },
    editWeightUnit: function editWeightUnit(data) {
      //alert(data.id);
      FireEvent.$emit('editWeightUnit', data);
    },
    DeleteData: function DeleteData(id) {
      Swal.fire({
        title: 'Are you sure to Delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/spa/WeightUnit-Info/' + id).then(function (_ref) {
            var data = _ref.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            toastr.warning('Something is wrong!');
          });
        } else {
          toastr.info('Your data is safe!');
        }
      });
    } //end delete

  },
  created: function created() {
    var _this2 = this;

    this.fetchWeightUnit();
    FireEvent.$on('AfterChange', function () {
      _this2.fetchWeightUnit();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchWeightUnit();  
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "card vue-card" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row mt-2 mb-3" }, [
              _c("div", { staticClass: "col-md-12" }, [_c("WeightUnitList")], 1)
            ])
          ]),
          _vm._v(" "),
          _c("WeightUnitForm")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 col-6 text-left" }, [
          _c("h5", [_vm._v("Weight Units")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-6 text-right" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Weight Units")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8& ***!
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
        _c("div", { staticClass: "col-md-8 col-sm-6 col-6" }, [
          _vm._v("Weight Unit List")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-6 col-6 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: {
                "data-toggle": "modal",
                "data-target": "#WeightUnitModal"
              },
              on: { click: _vm.addWeightUnit }
            },
            [_c("i", { staticClass: "icon fas fa-plus" }), _vm._v(" Add New")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("table", { staticClass: "table table-striped table-sm" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.WeightUnits, function(weight, index) {
              return _c("tr", { key: index }, [
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(" " + _vm._s(weight.weight_title) + " ")
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(weight.weight_unit) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(weight.weight_value) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(weight.weight_desc) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: weight.is_enabled === 1,
                          expression: "weight.is_enabled === 1"
                        }
                      ],
                      staticClass: "green"
                    },
                    [_vm._v(" Active")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: weight.is_enabled === 0,
                          expression: "weight.is_enabled === 0"
                        }
                      ],
                      staticClass: "red text-bold"
                    },
                    [_vm._v(" Inactive")]
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary- btn-flat btn-sm",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#WeightUnitModal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.editWeightUnit(weight)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-edit primary " })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-block- btn-danger- btn-flat btn-sm",
                      attrs: { id: "delete" },
                      on: {
                        click: function($event) {
                          return _vm.DeleteData(weight.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "far fa-trash-alt red" })]
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c(
              "tr",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.WeightUnits.data && !_vm.WeightUnits.weight,
                    expression: "WeightUnits.data && !WeightUnits.weight"
                  }
                ]
              },
              [_vm._m(1)]
            )
          ],
          2
        )
      ])
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Weight Title")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" }, attrs: { scope: "col" } }, [
          _vm._v("Unit")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Value")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Details")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "8%" }, attrs: { scope: "col" } }, [
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: { width: "15%", "text-align": "right" },
            attrs: { scope: "col" }
          },
          [_vm._v("Action")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "6" } }, [
      _c(
        "div",
        {
          staticClass: "alert alert-danger text-center red mb-0",
          attrs: { role: "alert" }
        },
        [_vm._v("Sorry : No data found.")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightUnit.vue?vue&type=template&id=31aceb4e& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e&");
/* harmony import */ var _WeightUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightUnit.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WeightUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnit.vue?vue&type=template&id=31aceb4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnit.vue?vue&type=template&id=31aceb4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnit_vue_vue_type_template_id_31aceb4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightUnitList.vue?vue&type=template&id=2c8593e8& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8&");
/* harmony import */ var _WeightUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightUnitList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WeightUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnitList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightUnitList.vue?vue&type=template&id=2c8593e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/WeightUnit/WeightUnitList.vue?vue&type=template&id=2c8593e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightUnitList_vue_vue_type_template_id_2c8593e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
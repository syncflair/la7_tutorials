(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue */ "./resources/js/components/Admin/Category/CategoryList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //const axios = require('axios');
//import axios from 'axios'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Category",
  data: function data() {
    return {
      editMode: false,
      categories: [],
      //this is an object
      // Create a new form instance
      form: new Form({
        id: '',
        cat_name: '',
        cat_slug: '',
        is_enabled: '' //remember: false

      })
    };
  },
  methods: {
    fetchCategory: function fetchCategory() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package
      //axios.get('http://127.0.0.1:8000/spa/category')

      this.form.get('http://127.0.0.1:8000/spa/category').then(function (response) {
        _this.categories = response.data.data;

        _this.$Progress.finish();
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    // Submit the form via a POST request
    storeCategory: function storeCategory() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/spa/category').then(function (_ref) {
        var data = _ref.data;
        Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

        toastr.success(data.success);

        _this2.$Progress.finish();

        _this2.form.reset(); //reset from after submit


        _this2.form.clear();
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    },
    editCategory: function editCategory(category) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(category); //category get from table data
    },
    clearEditCategory: function clearEditCategory() {
      this.editMode = false;
      this.form.reset(); //reset from after submit

      this.form.clear();
    },
    updateCategory: function updateCategory() {
      var _this3 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/category/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;
        Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

        _this3.$Progress.finish();

        toastr.success(data.success);

        _this3.form.reset(); //reset from after submit


        _this3.form.clear();

        _this3.editMode = false;
      })["catch"](function () {
        _this3.$Progress.fail();
      }); //this.form.reset();  //reset from after submit
      //this.form.clear();
      //this.editMode = false;
    },
    deleteCategory: function deleteCategory(id) {
      var _this4 = this;

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
          _this4.form["delete"]('/spa/category/' + id).then(function (_ref3) {
            var data = _ref3.data;

            if (data.success) {
              Fire.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {});
        } else {
          toastr.info('Your data is safe!');
        }
      })["catch"](function () {});
    } //end Swal

  },
  // mounted() {
  //     //console.log('Component mounted.')
  // },
  created: function created() {
    var _this5 = this;

    /*Load when page called*/
    this.fetchCategory();
    /*Call Fire $on event when create or update data named as AfterChange*/

    Fire.$on('AfterChange', function () {
      _this5.fetchCategory();
    });
    /*Load every 10 seconds (ES 6 version) but having performence issue */
    //setInterval( () => this.fetchCategory(), 10000);  
  },
  components: {
    CategoryList: _CategoryList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
/*--/export default--*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-striped table-sm" }, [
      _c("thead", [
        _c("tr", [
          _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "35%" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "35px" } }, [_vm._v("Parent")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Status")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "20%", "text-align": "right" } }, [
            _vm._v("Action")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("1")]),
          _vm._v(" "),
          _c("td", [_vm._v("Name")]),
          _vm._v(" "),
          _c("td", [_vm._v("Sub")]),
          _vm._v(" "),
          _c("td", [_vm._v("\n            Status\n          ")]),
          _vm._v(" "),
          _c("td", { staticClass: "text-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-danger- btn-flat btn-sm",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "right",
                  title: "Click to Unactive"
                }
              },
              [_c("i", { staticClass: "far fa-thumbs-down danger" })]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "btn  btn-primary- btn-flat btn-sm" }, [
              _c("i", { staticClass: "fas fa-edit primary " })
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-block- btn-danger- btn-flat btn-sm",
                attrs: { id: "delete" }
              },
              [_c("i", { staticClass: "far fa-trash-alt red" })]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card vue-card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8 col-sm-7" }, [
              _c("div", { staticClass: "card vue-card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("table", { staticClass: "table table-striped table-sm" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.categories, function(category) {
                        return _c("tr", { key: category.id }, [
                          _c("td", [_vm._v(_vm._s(category.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(category.cat_name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("upText")(category.cat_slug)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\r\n                          " +
                                _vm._s(category.is_enabled) +
                                "\r\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("formatDate")(category.updated_at))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn  btn-primary- btn-flat btn-sm",
                                on: {
                                  click: function($event) {
                                    return _vm.editCategory(category)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit primary " })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-block- btn-danger- btn-flat btn-sm",
                                attrs: { id: "delete" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteCategory(category.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "far fa-trash-alt red" })]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-sm-5 text-right-" }, [
              _c("div", { staticClass: "card vue-card-item" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editMode,
                        expression: "!editMode"
                      }
                    ],
                    staticClass: "card-header"
                  },
                  [_c("h4", [_vm._v("Add Category")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editMode,
                        expression: "editMode"
                      }
                    ],
                    staticClass: "card-header"
                  },
                  [_c("h4", [_vm._v("Update Category")])]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body card-body-custome" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.editMode
                            ? _vm.updateCategory()
                            : _vm.storeCategory()
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "card--" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { attrs: { for: "exampleInputEmail1" } },
                              [_vm._v("Name")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.cat_name,
                                  expression: "form.cat_name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("cat_name")
                              },
                              attrs: {
                                type: "text",
                                name: "cat_name",
                                placeholder: "Enter name"
                              },
                              domProps: { value: _vm.form.cat_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "cat_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "cat_name" }
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
                              { attrs: { for: "exampleInputEmail1" } },
                              [_vm._v("Slug")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.cat_slug,
                                  expression: "form.cat_slug"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("cat_slug")
                              },
                              attrs: {
                                type: "text",
                                name: "cat_slug",
                                placeholder: "Enter slug"
                              },
                              domProps: { value: _vm.form.cat_slug },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "cat_slug",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "cat_slug" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group mt-2" }, [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.editMode,
                                  expression: "editMode"
                                }
                              ],
                              staticClass: "btn btn-primary btn-flat btn-sm",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.clearEditCategory()
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.editMode,
                                  expression: "editMode"
                                }
                              ],
                              staticClass: "btn btn-primary btn-flat btn-sm",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Update")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.editMode,
                                  expression: "!editMode"
                                }
                              ],
                              staticClass: "btn btn-primary btn-flat btn-sm",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Submit")]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
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
        _c("div", { staticClass: "col-md-6" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-left" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Category")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-right" }, [
          _vm._v("Navigation")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "25px" } }, [_vm._v("Parent")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("Updated At")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%", "text-align": "right" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-danger- btn-flat btn-sm",
        attrs: {
          "data-toggle": "tooltip",
          "data-placement": "right",
          title: "Click to Unactive"
        }
      },
      [_c("i", { staticClass: "far fa-thumbs-down danger" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox", name: "is_enabled", id: "exampleCheck1" }
      }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "form-check-label", attrs: { for: "exampleCheck1" } },
        [_vm._v("Is Active")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryList.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryList.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=template&id=d491285c& */ "./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Category/CategoryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=template&id=d491285c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=44399ff4& */ "./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Category/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=44399ff4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
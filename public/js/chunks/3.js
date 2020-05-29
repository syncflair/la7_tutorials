(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // name: "Product",
  data: function data() {
    return {
      searchText: '',
      //v-model="search" in input tag
      countProduct: '',
      //user for count
      products: {} //this is an object           

    };
  },
  methods: {
    //Searchit function using lodash. call searchit function every 1 secound when call the function
    searchit: _.debounce(function () {
      FireEvent.$emit('searching');
    }, 500),
    //function for pagination // Our method to GET results from a Laravel endpoint
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/spa/product?page=' + page).then(function (response) {
        _this.products = response.data;
      });
    },
    fetchProduct: function fetchProduct() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/product').then(function (response) {
        _this2.products = response.data; // is an object... use when pagination
        //this.products = response.data.data; //is an object... default 

        _this2.$Progress.finish();
      })["catch"](function (errors) {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    countTotalProduct: function countTotalProduct() {
      var _this3 = this;

      axios.get('/spa/count-product').then(function (response) {
        _this3.countProduct = response.data; //for total count show  
      })["catch"](function (errors) {
        toastr.warning('Something is wrong!');
      });
    },
    deleteProduct: function deleteProduct(id) {
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
          axios["delete"]('/spa/product/' + id).then(function (_ref) {
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
    },
    //end Swal
    unactivePro: function unactivePro(id) {
      // alert(id);
      axios.get('/spa/unactive-product/' + id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //this will reload data after create or update               

          toastr.warning(data.success);
        }
      })["catch"](function () {
        toastr.warning('Something is wrong!');
      });
    },
    activePro: function activePro(id) {
      axios.get('/spa/active-product/' + id).then(function (_ref3) {
        var data = _ref3.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //this will reload data after create or update               

          toastr.success(data.success);
        }
      })["catch"](function () {
        toastr.warning('Something is wrong!');
      });
    }
  },
  created: function created() {
    var _this4 = this;

    this.fetchProduct();
    /*fetch product when Load page and also call from other FireEvent*/

    this.countTotalProduct();
    /*Count total product When Load page*/

    /*Call FireEvent $on event when create or update data named as AfterChange*/

    FireEvent.$on('AfterChange', function () {
      _this4.fetchProduct();

      _this4.countTotalProduct();
      /*Count total product When Load page*/

    }); //Call Searching FireEvent

    FireEvent.$on('searching', function () {
      var query = _this4.searchText;
      axios.get('/spa/search-product?q=' + query) //this.form.get('/spa/search-product?q='+query)
      .then(function (response) {
        _this4.products = response.data; // is an object... use when pagination
      })["catch"](function () {
        toastr.warning('No Data Found');
      });
    });
  } // mounted() {
  //     console.log('Component mounted.')
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-md-12 col-sm-12" }, [
              _c("div", { staticClass: "card vue-card-item" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-8 col-sm-6" }, [
                      _vm._v("Product List")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 col-sm-6 text-right" }, [
                      _c(
                        "div",
                        { staticClass: "input-group input-control-sm" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.searchText,
                                expression: "searchText"
                              }
                            ],
                            staticClass:
                              "form-control form-control-sm form-control-navbar",
                            attrs: {
                              type: "text",
                              name: "",
                              placeholder: "Search...",
                              "aria-label": "Search"
                            },
                            domProps: { value: _vm.searchText },
                            on: {
                              keyup: _vm.searchit,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.searchText = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-navbar btn-sm border",
                                on: { click: _vm.searchit }
                              },
                              [_c("i", { staticClass: "fas fa-search blue" })]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("table", { staticClass: "table table-striped table-sm" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.products.data, function(product) {
                        return _c("tr", { key: product.id }, [
                          _c("td", [_vm._v(_vm._s(product.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product.pro_name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("upText")(product.pro_slug)))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: product.is_enabled == 1,
                                  expression: "product.is_enabled == 1"
                                }
                              ],
                              staticClass: "green"
                            },
                            [_vm._v(" Active ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: product.is_enabled == 0,
                                  expression: "product.is_enabled == 0"
                                }
                              ],
                              staticClass: "red text-bold"
                            },
                            [_vm._v(" Inactive ")]
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("formatDate")(product.updated_at))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: product.is_enabled == 1,
                                    expression: "product.is_enabled == 1"
                                  }
                                ],
                                staticClass: "btn btn-flat btn-sm",
                                attrs: { title: "Click to Unactive" },
                                on: {
                                  click: function($event) {
                                    return _vm.unactivePro(product.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-thumbs-down red"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: product.is_enabled == 0,
                                    expression: "product.is_enabled == 0"
                                  }
                                ],
                                staticClass: "btn btn-flat btn-sm",
                                attrs: { title: "Click to Active" },
                                on: {
                                  click: function($event) {
                                    return _vm.activePro(product.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-thumbs-up green"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-block- btn-danger- btn-flat btn-sm",
                                attrs: { id: "delete" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteProduct(product.id)
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("span", [
                        _vm._v(" Total: " + _vm._s(_vm.countProduct))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "pagination",
                          {
                            attrs: {
                              data: _vm.products,
                              align: "right",
                              size: "small"
                            },
                            on: { "pagination-change-page": _vm.getResults }
                          },
                          [
                            _c(
                              "span",
                              { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                              [_vm._v("< Previous")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { attrs: { slot: "next-nav" }, slot: "next-nav" },
                              [_vm._v("Next >")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
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
              _c("a", [_vm._v("Product")])
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
        _c("th", { staticStyle: { width: "25px" } }, [_vm._v("Slug")]),
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
    return _c("a", { staticClass: "btn  btn-primary- btn-flat btn-sm" }, [
      _c("i", { staticClass: "fas fa-edit primary " })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
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


/***/ }),

/***/ "./resources/js/components/Admin/Product/Product.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/Product/Product.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=9f467018& */ "./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=9f467018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Product/Product.vue?vue&type=template&id=9f467018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_9f467018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-products-auth-sspa"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Layouts_NavForAdminSupplier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/NavForAdminSupplier */ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue");
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
 //for user MapState



var SupplierProductViewComponent = function SupplierProductViewComponent() {
  return __webpack_require__.e(/*! import() | SupplierProductViewComponent-com */ "SupplierProductViewComponent-com").then(__webpack_require__.bind(null, /*! ./SupplierProductView */ "./resources/js/components/AdminSupplier/Product/SupplierProductView.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // use for sortable
      currentSort: 'sys_pro_name',
      currentSortDir: 'asc'
    };
  },
  components: {
    NavForAdminSupplier: _Layouts_NavForAdminSupplier__WEBPACK_IMPORTED_MODULE_1__["default"],
    SupplierProductViewComponent: SupplierProductViewComponent
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('AuthenticationForSupplier', ['authSupplier', 'products', 'pagination'])), {}, {
    // use for sortable
    sortedProducts: function sortedProducts() {
      var _this = this;

      var fo = Object.values(this.products).sort(function (a, b) {
        var modifier = 1;
        if (_this.currentSortDir === 'desc') modifier = -1;
        if (a[_this.currentSort] < b[_this.currentSort]) return -1 * modifier;
        if (a[_this.currentSort] > b[_this.currentSort]) return 1 * modifier;
        return 0;
      });
      return fo;
    }
  }),
  methods: {
    // use for sortable
    sort: function sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      this.currentSort = s;
    },
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start(); // this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', this.pagination.per_page);

      this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', {
        perPage: this.pagination.per_page,
        vendor_id: this.authSupplier.vendor_id
      });
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    ViewDetails: function ViewDetails(data) {
      //alert(data.sys_pro_name);
      FireEvent.$emit('SupplierProductDataView', data);
    }
  },
  created: function created() {
    //{search_key: SearchKey, search_option: this.selectOption}
    this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', {
      vendor_id: this.authSupplier.vendor_id
    }); //setTimeout(() => {
    //    this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
    //}, 300);//call after 800 miliscound       
  },
  mounted: function mounted() {//console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
    //console.log(JSON.parse(this.authPermissions.permission));
    //console.log(this.authPermissions.permission['BranchInfo']['delete']);
    // console.log(this.products);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content pt-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "d-none d-xl-block col-xl-2 col-wd-2gdot5-" },
              [_c("NavForAdminSupplier")],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-" },
              [
                _c(
                  "div",
                  { staticClass: "card" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body p-0" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table m-0 table-custome-two table-striped table-sm-",
                            staticStyle: { "min-height": "200px" }
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticStyle: { width: "3%" } }, [
                                  _vm._v("Img")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "sortable-title",
                                    staticStyle: { width: "40%" },
                                    on: {
                                      click: function($event) {
                                        return _vm.sort("sys_pro_name")
                                      }
                                    }
                                  },
                                  [_vm._v("Name")]
                                ),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "6%" } }, [
                                  _vm._v("Category")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "5%" } }, [
                                  _vm._v("Brand")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "6%" } }, [
                                  _vm._v("Status")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "4%" } }, [
                                  _vm._v("Stock")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "5%" } }, [
                                  _vm._v("price")
                                ]),
                                _vm._v(" "),
                                _vm._m(1)
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.sortedProducts, function(
                                product,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", [
                                    product.pro_image != null
                                      ? _c("span", [
                                          _c("img", {
                                            attrs: {
                                              src: "../" + product.pro_image,
                                              loading: "lazy",
                                              height: "20px",
                                              width: "20px"
                                            }
                                          })
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    product.pro_image === null
                                      ? _c("span", [
                                          _c("img", {
                                            attrs: {
                                              src: _vm.NoImageAvailable,
                                              height: "20px",
                                              width: "20px"
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(product.sys_pro_name))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.pro_category != null
                                      ? _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(product.pro_category) +
                                              " "
                                          )
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product["belongs_to_brand"] != null
                                      ? _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                product["belongs_to_brand"][
                                                  "brand_name"
                                                ]
                                              ) +
                                              " "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    product["belongs_to_brand"] === null
                                      ? _c(
                                          "span",
                                          { staticClass: "red text-bold" },
                                          [_vm._v(" No Brand ")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\r\n                          " +
                                        _vm._s(product.pro_status) +
                                        " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("small", [
                                      product.pro_qty > 5
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "green",
                                                "font-weight": "500"
                                              }
                                            },
                                            [_vm._v(" Available")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty <= 5 &&
                                      product.pro_qty > 0
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "500"
                                              }
                                            },
                                            [_vm._v(" Low Stock")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty === 0
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "bold"
                                              }
                                            },
                                            [_vm._v(" Out of Stock")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty === null
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "bold"
                                              }
                                            },
                                            [_vm._v("Update")]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.pro_sale_price
                                      ? _c("span", [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "text-decoration":
                                                  "line-through"
                                              },
                                              attrs: { title: "Main Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(product.pro_price) +
                                                  " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-weight": "600",
                                                color: "green"
                                              },
                                              attrs: { title: "Sale Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    product.pro_sale_price
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !product.pro_sale_price
                                      ? _c("span", [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-weight": "600",
                                                color: "green"
                                              },
                                              attrs: { title: "Main Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(product.pro_price) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-right" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn-group option-dropdown-manu-style left"
                                      },
                                      [
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown-menu dropdown-menu-right"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "dropdown-item text-green",
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(product.sys_pro_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticClass: "dropdown-divider"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary- btn-flat btn-sm",
                                                attrs: {
                                                  "data-toggle": "modal",
                                                  "data-target": "#formModal"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.ViewDetails(
                                                      product
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-eye primary "
                                                }),
                                                _vm._v(
                                                  " More Details ...\r\n                              "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-footer bg-white clearfix mt-2 pb-0 pl-3 pr-3"
                      },
                      [
                        _vm.pagination.last_page >= 1
                          ? _c("pagination-app", {
                              attrs: { pagination: _vm.pagination, offset: 5 },
                              on: {
                                paginate: function($event) {
                                  return _vm.fetchData()
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("SupplierProductViewComponent")
                  ],
                  1
                )
              ]
            )
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
    return _c("div", { staticClass: "card-header border-transparent pl-2" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Products")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "2%", "text-align": "right" } }, [
      _c("strong", [_vm._v("...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-flat btn-sm btn-warning dropdown-toggle-",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v text-white" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupplierProducts.vue?vue&type=template&id=727af3a2& */ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&");
/* harmony import */ var _SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupplierProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminSupplier/Product/SupplierProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierProducts.vue?vue&type=template&id=727af3a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
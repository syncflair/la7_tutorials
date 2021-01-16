(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-dashboard-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Include/NavForAdminCustomer */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customer-dashboard-website-auth",
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('AuthenticationForWebsite', ['authCustomer'])),
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {},
  created: function created() {
    this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data            
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mb-10 mt-4" }, [
      _c(
        "div",
        { staticClass: "d-none- d-xl-block col-xl-2 col-wd-2gdot5-" },
        [_c("NavForAdminCustomer")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-" },
        [
          _c("div", { staticClass: "row pt-3" }, [
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-danger- bg-white" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h5", { staticClass: "text-white- text-secondary" }, [
                      _c("small", [_vm._v(_vm._s(_vm.authCustomer.name))])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-white- text-secondary mb-2" },
                      [
                        _c("i", { staticClass: "fas fa-at" }),
                        _vm._v(" " + _vm._s(_vm.authCustomer.email))
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-white- text-secondary mb-2" },
                      [
                        _c("i", { staticClass: "fas fa-phone" }),
                        _vm._v(" " + _vm._s(_vm.authCustomer.phone))
                      ]
                    ),
                    _vm._v(" "),
                    _vm.authCustomer.status_id === 1
                      ? _c(
                          "p",
                          { staticClass: "text-white- text-secondary mb-2" },
                          [_vm._m(0)]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer text-secondary",
                      attrs: { to: "/auth/my-profile" }
                    },
                    [
                      _vm._v("Profile "),
                      _c("i", { staticClass: "fas fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-info- bg-white" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer text-secondary",
                      attrs: { to: "/auth/my-orders" }
                    },
                    [
                      _vm._v("My Orders "),
                      _c("i", { staticClass: "fas fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-success- bg-white" },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer text-secondary",
                      attrs: { to: "/auth/my-cart" }
                    },
                    [
                      _vm._v("Cart "),
                      _c("i", { staticClass: "fas fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-warning- bg-white" },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer text-secondary",
                      attrs: { to: "/auth/my-wishlist" }
                    },
                    [
                      _vm._v("Wishlist "),
                      _c("i", { staticClass: "fas fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._v(
            "\r\n\r\n            " +
              _vm._s(_vm.authCustomer) +
              "\r\n\r\n            "
          ),
          _c("br")
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "btn- px-1 bg-success text-white font-size-9- rounded-lg"
      },
      [
        _c("i", { staticClass: "fas fa-check font-size-8" }),
        _vm._v(" "),
        _c("small", [_vm._v("Verified")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inner" }, [
      _c("h3", { staticClass: "text-white- text-secondary" }, [_vm._v("150")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-white- text-secondary" }, [_vm._v("Orders")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-shopping-cart" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inner" }, [
      _c("h3", { staticClass: "text-white- text-secondary" }, [_vm._v("53")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-white- text-secondary" }, [_vm._v("Cart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-shopping-bag" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "inner" }, [
      _c("h3", { staticClass: "text-white- text-secondary" }, [_vm._v("44")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-white- text-secondary" }, [
        _vm._v("Wishlist")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-cart-plus" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDashboard.vue?vue&type=template&id=e2290eac& */ "./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac&");
/* harmony import */ var _CustomerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDashboard.vue?vue&type=template&id=e2290eac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Dashboard/CustomerDashboard.vue?vue&type=template&id=e2290eac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDashboard_vue_vue_type_template_id_e2290eac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
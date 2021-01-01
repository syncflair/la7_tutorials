(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-profile-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
  name: "customer-Profile-website-auth",
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('commonStoreForWebsite', ['authCustomer', 'authCustomerAddress'])),
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    DeleteCustomerAddress: function DeleteCustomerAddress(id) {
      var _this = this;

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
          axios["delete"]('/auth/my-address/' + id).then(function (_ref) {
            var data = _ref.data;

            if (data.success) {
              _this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerAddress', _this.authCustomer.id);

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

    this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerData'); //get auth customer data 

    setTimeout(function () {
      _this2.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerAddress', _this2.authCustomer.id); //get auth customer address

    }, 2000);
  },
  mounted: function mounted() {//console.log(this.authCustomerAddress);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-" },
        [
          _c("div", { staticClass: "row " }, [
            _c("div", { staticClass: "col-lg-12 col- order-lg-1" }, [
              _c("div", { staticClass: "row pb-7 mb-7" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-6 mb-1 col-6-" }, [
                  _c("h3", { staticClass: " mb-0 pb-1 pl-2- font-size-14" }, [
                    _vm._v("Full Name")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" " + _vm._s(_vm.authCustomer.name))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-6 col-6-" }, [
                  _c("h3", { staticClass: " mb-0 pb-1 pl-2- font-size-14" }, [
                    _vm._v("Email Address")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" " + _vm._s(_vm.authCustomer.email))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-2 col-6 mb-1 col-6-" }, [
                  _c("h3", { staticClass: " mb-0 pb-1 pl-2- font-size-14" }, [
                    _vm._v("Phone")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" +88 " + _vm._s(_vm.authCustomer.phone))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-2 col-6 mb-1 col-6-" }, [
                  _c("h3", { staticClass: " mb-0 pb-1 pl-2- font-size-14" }, [
                    _vm._v("Birthday")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("formatDate")(_vm.authCustomer.date_of_birth)
                        ) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-1 col-6 mb-1 col-6-" }, [
                  _c("h3", { staticClass: " mb-0 pb-1 pl-2- font-size-14" }, [
                    _vm._v("Gender")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.authCustomer.gender))])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-12 col-12 mb-1 text-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-primary ml-md-2 px-2 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block",
                        attrs: { to: "/auth/my-profile-update" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-plus" }),
                        _vm._v(" Edit Profile")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "mb-4 w-100 wishlist-table cart-wishlist-custome"
                    },
                    [
                      _c("div", { staticClass: "table-responsive-" }, [
                        _c(
                          "table",
                          { staticClass: "table", attrs: { cellspacing: "0" } },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.authCustomerAddress, function(
                                aca,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c(
                                    "td",
                                    { attrs: { "data-title": "Address" } },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "text-gray-90",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          aca.customer_name
                                            ? _c("span", [
                                                _vm._v(
                                                  _vm._s(aca.customer_name) +
                                                    ", "
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          aca.company
                                            ? _c("span", [
                                                _vm._v(
                                                  _vm._s(aca.company) + ", "
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          aca.address_1
                                            ? _c("span", [
                                                _vm._v(
                                                  _vm._s(aca.address_1) + ", "
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-right" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto",
                                          attrs: {
                                            to: {
                                              name: "CustomerAddressForm",
                                              params: { data: aca }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-edit"
                                          }),
                                          _vm._v(" Edit")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto pointer",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.DeleteCustomerAddress(
                                                aca.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash-alt"
                                          }),
                                          _vm._v(" Delete")
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-12 col-12 mb-1 text-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-primary ml-md-2 px-2 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block",
                        attrs: { to: "/auth/my-address-update" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-plus" }),
                        _vm._v(" Add Address")
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12  col- order-lg-1" })
          ])
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
      "div",
      { staticClass: "col-lg-12 border-bottom border-color-1 mb-3 col-6-" },
      [
        _c(
          "h3",
          { staticClass: "section-title- mb-0 pb-1 pl-2- font-size-18" },
          [_vm._v("My Profile")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "product-name" }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { staticClass: "product-subtotal min-width-200-md-lg" }, [
          _vm._v(" ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=template&id=539d1914& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914&");
/* harmony import */ var _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerProfile.vue?vue&type=template&id=539d1914& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfile.vue?vue&type=template&id=539d1914&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_539d1914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customer-address-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "nav-for-admin-customer-website-auth",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForCustomer', ['authCustomer'])), {}, {
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    }
  }),
  components: {},
  methods: {
    Logout: function Logout() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/customer/logout').then(function (_ref) {
        var response = _ref.response;

        //console.log(response); 
        //if(response.success){             
        // toastr.success(response.success);         
        _this.$Progress.finish();

        _this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false);

        window.location = '/home'; //this.$router.push({ path : '/home' });   //route after successfule 
        //this.$router.replace({ path : '/home' });   //route after successfule 
        //this.$router.go('/home');

        toastr.success('Logout successfule'); //}
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Logout 

  },
  created: function created() {},
  mounted: function mounted() {// console.log(this.baseURL);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Include/NavForAdminCustomer */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "customer-address-website-auth",
  data: function data() {
    return {};
  },
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddress.vue?vue&type=template&id=1223e442& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442&");
/* harmony import */ var _CustomerAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddress.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerAddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");


/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddress_vue_vue_type_template_id_1223e442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerAddress.vue?vue&type=template&id=1223e442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass:
        "mb-8 border- border-width-2- border-color-3- borders-radius-6"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top- section-title"
        },
        [
          _c("div", { staticClass: "info border- bg-gray-1- rounded-lg-" }, [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.authCustomer,
                    expression: "authCustomer"
                  }
                ],
                staticClass: "font-size-10 text-black"
              },
              [_vm._v(" " + _vm._s(_vm.authCustomer.name) + " ")]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "list-unstyled dropdown-list dropdown-list-custome",
          attrs: { id: "sidebarNav" }
        },
        [
          _c(
            "li",
            { staticClass: "border-bottom-" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-dashboard")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-dashboard" }
                },
                [_vm._v("Dashboard\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-orders")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-orders" }
                },
                [_vm._v("My Orders\n                    ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-cart")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-cart" }
                },
                [_vm._v("My Cart\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-wishlist")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-wishlist" }
                },
                [_vm._v("Wishlist\n            \t")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-profile")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-profile" }
                },
                [_vm._v(" My Profile\n\t            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-vouchers")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-vouchers" }
                },
                [_vm._v("Vouchers\n            \t")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-reviews")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-reviews" }
                },
                [_vm._v("My Reviews\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "border-top-" }, [
            _c(
              "a",
              {
                staticClass:
                  "dropdown-item dropdown-item-custome transition-3d-hover",
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.Logout()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-sign-out-alt" }),
                _vm._v(" Logout")
              ]
            )
          ])
        ]
      )
    ]
  )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddress.vue?vue&type=template&id=1223e442& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mb-5 mt-4" }, [
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
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-1 col text-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "btn btn-primary-dark ml-md-2 px-5 px-md-4 px-lg-5 w-100- w-md-auto d-none- d-md-inline-block",
                    attrs: { to: "/auth/my-address-update" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus" }),
                    _vm._v(" Add new address")
                  ]
                )
              ],
              1
            )
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
    return _c("div", { staticClass: "border-bottom border-color-1 mb-1" }, [
      _c("h5", { staticClass: "section-title- mb-0 pb-1 pl-2- font-size-18" }, [
        _vm._v("My Address")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mb-8 w-100 wishlist-table cart-wishlist-custome" },
      [
        _c("div", { staticClass: "table-responsive-" }, [
          _c("table", { staticClass: "table", attrs: { cellspacing: "0" } }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "product-thumbnail" }, [_vm._v(" ")]),
                _vm._v(" "),
                _c("th", { staticClass: "product-name" }, [_vm._v("Address")]),
                _vm._v(" "),
                _c("th", { staticClass: "product-name" }, [_vm._v("For")]),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "product-subtotal min-width-200-md-lg" },
                  [_vm._v(" ")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", { staticClass: "text-center" }, [
                  _c("span", {}, [_vm._v("#")])
                ]),
                _vm._v(" "),
                _c("td", { attrs: { "data-title": "Address" } }, [
                  _c(
                    "a",
                    { staticClass: "text-gray-90", attrs: { href: "#" } },
                    [_vm._v("100/5, Bordhonbari, Mirpur 1")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-center-",
                    attrs: { "data-title": "for" }
                  },
                  [_c("span", {}, [_vm._v("Shiping")])]
                ),
                _vm._v(" "),
                _c("td", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto",
                      attrs: { type: "button" }
                    },
                    [_c("i", { staticClass: "far fa-edit" }), _vm._v(" Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto",
                      attrs: { type: "button" }
                    },
                    [
                      _c("i", { staticClass: "fas fa-trash-alt" }),
                      _vm._v(" Delete")
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
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
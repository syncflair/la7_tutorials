(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-address-website-auth~customer-dashboard-website-auth~customer-order-website-auth~customer-p~051e807c"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nav-for-admin-customer-website-auth",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  cumputed: {
    currentPage: function currentPage() {
      return this.$route.path;
    }
  },
  components: {},
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "mb-8 border- border-width-2- border-color-3- borders-radius-6"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "list-unstyled dropdown-list",
          attrs: { id: "sidebarNav-" }
        },
        [
          _c(
            "li",
            { staticClass: "border-bottom-" },
            [
              _c(
                "router-link",
                {
                  staticClass: "dropdown-item dropdown-item-custome",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-dashboard" }
                },
                [_vm._v(" Dashboard\n                ")]
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
                  staticClass: "dropdown-item dropdown-item-custome",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-orders" }
                },
                [_vm._v("My Orders\n\t            ")]
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
                  staticClass: "dropdown-item dropdown-item-custome ",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-wishlist" }
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
                  staticClass: "dropdown-item dropdown-item-custome ",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-reviews" }
                },
                [_vm._v("My Reviews\n            \t")]
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
                  staticClass: "dropdown-item dropdown-item-custome ",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-profile" }
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
                  staticClass: "dropdown-item dropdown-item-custome ",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-address" }
                },
                [_vm._v(" Address Book\n            \t")]
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
                  staticClass: "dropdown-item dropdown-item-custome ",
                  class:  true
                    ? _vm.ActiveLinkClass
                    : undefined,
                  attrs: { to: "/customer-vouchers" }
                },
                [_vm._v(" Vouchers\n            \t")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "border-top-" },
            [
              _c(
                "router-link",
                {
                  staticClass: "dropdown-item dropdown-item-custome ",
                  attrs: { to: "" }
                },
                [
                  _c("i", { staticClass: "fas fa-sign-out-alt" }),
                  _vm._v(" Logout")
                ]
              )
            ],
            1
          )
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
      "div",
      {
        staticClass:
          "user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top-"
      },
      [
        _c("div", { staticClass: "info border- bg-gray-1- rounded-lg-" }, [
          _c("span", { staticClass: "font-size-10 text-black" }, [
            _vm._v(" Mahmudur Rahman sumon Sumon")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "btn- px-1 bg-success text-white font-size-9- rounded-lg"
            },
            [
              _c("i", { staticClass: "fas fa-check font-size-8" }),
              _vm._v(" "),
              _c("small", [_vm._v("Verified")])
            ]
          )
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


/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
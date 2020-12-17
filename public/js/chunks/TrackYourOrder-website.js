(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TrackYourOrder-website"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js& ***!
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
//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
//const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Track-Your-Order-Public-website",
  data: function data() {
    return {};
  },
  components: {//HeaderTopbar, FooterComponent,
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {// initialization of slick carousel (Slick Slider call from here, otherwise it get error)
    //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "bg-gray-13 bg-md-transparent" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "my-md-3" }, [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c(
                "ol",
                {
                  staticClass:
                    "breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble"
                },
                [
                  _c(
                    "li",
                    {
                      staticClass:
                        "breadcrumb-item flex-shrink-0 flex-xl-shrink-1"
                    },
                    [
                      _c("a", { attrs: { href: "../home/index.html" } }, [
                        _vm._v("Home")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v("Track your Order")]
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "mx-xl-10" }, [
          _c("div", { staticClass: "mb-6 text-center" }, [
            _c("h1", { staticClass: "mb-6" }, [_vm._v("Track your Order")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-gray-90 px-xl-10" }, [
              _vm._v(
                'To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.'
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "my-4 my-xl-8" }, [
            _c(
              "form",
              {
                staticClass: "js-validate",
                attrs: { novalidate: "novalidate" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6 mb-3" }, [
                    _c("div", { staticClass: "js-form-message form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "orderid" }
                        },
                        [_vm._v("Order ID\r\n                                ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "text",
                          id: "orderid",
                          placeholder:
                            "Found in your order confirmation email.",
                          "aria-label":
                            "Found in your order confirmation email."
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 mb-3" }, [
                    _c("div", { staticClass: "js-form-message form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "billingemail" }
                        },
                        [
                          _vm._v(
                            "Billing email\r\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          name: "email",
                          id: "billingemail",
                          placeholder: "Email you used during checkout.",
                          "aria-label": "Email you used during checkout.",
                          required: "",
                          "data-msg": "Please enter a valid email address.",
                          "data-error-class": "u-has-error",
                          "data-success-class": "u-has-success"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col mb-1" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Track")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
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

/***/ "./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrackYourOrder.vue?vue&type=template&id=64fce3f5& */ "./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5&");
/* harmony import */ var _TrackYourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrackYourOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrackYourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackYourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrackYourOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackYourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrackYourOrder.vue?vue&type=template&id=64fce3f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/Public/TrackOrder/TrackYourOrder.vue?vue&type=template&id=64fce3f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackYourOrder_vue_vue_type_template_id_64fce3f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
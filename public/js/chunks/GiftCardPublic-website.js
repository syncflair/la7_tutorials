(self["webpackChunk"] = self["webpackChunk"] || []).push([["GiftCardPublic-website"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Gift-Card-Public-website",
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {
    this.$nextTick(function () {
      //initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      }); // initialization of svg injector module

      $.HSCore.components.HSSVGIngector.init('.js-svg-injector'); // initialization of header

      $.HSCore.components.HSHeader.init($('#header')); // initialization of animation

      $.HSCore.components.HSOnScrollAnimation.init('[data-animation]'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function afterOpen() {
          $(this).find('input[type="search"]').focus();
        }
      }); // initialization of countdowns
      // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
      //     yearsElSelector: '.js-cd-years',
      //     monthsElSelector: '.js-cd-months',
      //     daysElSelector: '.js-cd-days',
      //     hoursElSelector: '.js-cd-hours',
      //     minutesElSelector: '.js-cd-minutes',
      //     secondsElSelector: '.js-cd-seconds'
      // });
      // initialization of malihu scrollbar

      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar')); // initialization of forms

      $.HSCore.components.HSFocusState.init(); // initialization of form validation
      // $.HSCore.components.HSValidation.init('.js-validate', {
      //     rules: {
      //         confirmPassword: {
      //             equalTo: '#signupPassword'
      //         }
      //     }
      // });
      // initialization of show animations

      $.HSCore.components.HSShowAnimation.init('.js-animation-link'); // initialization of fancybox
      // initialization of popups

      $.HSCore.components.HSFancyBox.init('.js-fancybox'); // initialization of slick carousel
      // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      // initialization of go to

      $.HSCore.components.HSGoTo.init('.js-go-to'); // initialization of hamburgers

      $.HSCore.components.HSHamburgers.init('#hamburgerTrigger'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function beforeClose() {
          $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function afterClose() {
          $('#headerSidebarList .collapse.show').collapse('hide');
        }
      });
      $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        if ($(this).attr('aria-expanded') === "true") {
          $(target).collapse('hide');
        } else {
          $(target).collapse('show');
        }
      }); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]')); // initialization of select picker
      // $.HSCore.components.HSSelectPicker.init('.js-select');
      // initialization of HSScrollNav component
      // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
      //   duration: 700
      // });
      // initialization of quantity counter
      //$.HSCore.components.HSQantityCounter.init('.js-quantity');
      // initialization of forms
      //$.HSCore.components.HSRangeSlider.init('.js-range-slider');
    }); //end this.$nextTick
  }
});

/***/ }),

/***/ "./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GiftCardPublic.vue?vue&type=template&id=1bc78e11& */ "./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11&");
/* harmony import */ var _GiftCardPublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GiftCardPublic.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GiftCardPublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__.render,
  _GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftCardPublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GiftCardPublic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftCardPublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftCardPublic_vue_vue_type_template_id_1bc78e11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GiftCardPublic.vue?vue&type=template&id=1bc78e11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/GiftCard/GiftCardPublic.vue?vue&type=template&id=1bc78e11& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "container mt-10 mb-10" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 mb-4 mb-md-0" }, [
            _c(
              "div",
              { staticClass: "card mb-3 border-0 text-center rounded-0" },
              [
                _c("img", {
                  staticClass: "img-fluid mb-3",
                  attrs: {
                    src: "website/assets/img/500X300/img1.jpg",
                    alt: "Card image cap"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "h5",
                    { staticClass: "font-size-18 font-weight-semi-bold mb-3" },
                    [_vm._v("1000 Tk")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "text-gray-90 max-width-334 mx-auto" },
                    [
                      _vm._v(
                        "Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus."
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 mb-4 mb-md-0" }, [
            _c(
              "div",
              { staticClass: "card mb-3 border-0 text-center rounded-0" },
              [
                _c("img", {
                  staticClass: "img-fluid mb-3",
                  attrs: {
                    src: "website/assets/img/500X300/img2.jpg",
                    alt: "Card image cap"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "h5",
                    { staticClass: "font-size-18 font-weight-semi-bold mb-3" },
                    [_vm._v("2000 Tk")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "text-gray-90 max-width-334 mx-auto" },
                    [
                      _vm._v(
                        "Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus."
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              { staticClass: "card mb-3 border-0 text-center rounded-0" },
              [
                _c("img", {
                  staticClass: "img-fluid mb-3",
                  attrs: {
                    src: "website/assets/img/500X300/img3.jpg",
                    alt: "Card image cap"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "h5",
                    { staticClass: "font-size-18 font-weight-semi-bold mb-3" },
                    [_vm._v("5000 Tk")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "text-gray-90 max-width-334 mx-auto" },
                    [
                      _vm._v(
                        "Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus."
                      )
                    ]
                  )
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
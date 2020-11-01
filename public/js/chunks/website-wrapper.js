(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["website-wrapper"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Website-Wrapper-master",
  //Get props form views/admin/dashboard.blade.php
  // props:['user','permissions','settings'], 
  props: ['isitwebsite'],
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {
    //direct commit (mutations) to resources/js/store/commonStoreForAll.js
    this.$store.commit('commonStoreForAll/IS_IT_WEBSITE_CHECK', this.isitwebsite);
  },
  mounted: function mounted() {//console.log(this.isitwebsite);
    // //############################# Windown Load ###################################            
    // //initialization of HSMegaMenu component
    // $('.js-mega-menu').HSMegaMenu({
    //     event: 'hover',
    //     direction: 'horizontal',
    //     pageContainer: $('.container'),
    //     breakpoint: 767.98,
    //     hideTimeOut: 0
    // });
    // // initialization of svg injector module
    // $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    // //############################# Windown ready ###################################
    // // initialization of header
    // $.HSCore.components.HSHeader.init($('#header'));
    // // initialization of animation
    // $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
    // // initialization of unfold component
    // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    //     afterOpen: function () {
    //         $(this).find('input[type="search"]').focus();
    //     }
    // });
    // // initialization of popups
    // $.HSCore.components.HSFancyBox.init('.js-fancybox');
    // // initialization of countdowns
    // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
    //     yearsElSelector: '.js-cd-years',
    //     monthsElSelector: '.js-cd-months',
    //     daysElSelector: '.js-cd-days',
    //     hoursElSelector: '.js-cd-hours',
    //     minutesElSelector: '.js-cd-minutes',
    //     secondsElSelector: '.js-cd-seconds'
    // });
    // // initialization of malihu scrollbar
    // $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));
    // // initialization of forms
    // $.HSCore.components.HSFocusState.init();
    // // initialization of form validation
    // $.HSCore.components.HSValidation.init('.js-validate', {
    //     rules: {
    //         confirmPassword: {
    //             equalTo: '#signupPassword'
    //         }
    //     }
    // });
    // // initialization of show animations
    // $.HSCore.components.HSShowAnimation.init('.js-animation-link');
    // // initialization of fancybox
    // $.HSCore.components.HSFancyBox.init('.js-fancybox');
    // // initialization of slick carousel
    // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    // // initialization of go to
    // $.HSCore.components.HSGoTo.init('.js-go-to');
    // // initialization of hamburgers
    // $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');
    // // initialization of unfold component
    // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    //     beforeClose: function () {
    //         $('#hamburgerTrigger').removeClass('is-active');
    //     },
    //     afterClose: function() {
    //         $('#headerSidebarList .collapse.show').collapse('hide');
    //     }
    // });
    // $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = $(this).data('target');
    //     if($(this).attr('aria-expanded') === "true") {
    //         $(target).collapse('hide');
    //     } else {
    //         $(target).collapse('show');
    //     }
    // });
    // // initialization of unfold component
    // $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
    // // initialization of select picker
    // $.HSCore.components.HSSelectPicker.init('.js-select');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [_c("router-view")], 1)
}
var staticRenderFns = []
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

/***/ "./resources/js/components/Website/WebsiteWrapper.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsiteWrapper.vue?vue&type=template&id=02c0adb7& */ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&");
/* harmony import */ var _WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsiteWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/WebsiteWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsiteWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsiteWrapper.vue?vue&type=template&id=02c0adb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
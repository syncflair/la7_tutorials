(self["webpackChunk"] = self["webpackChunk"] || []).push([["Multicomponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import dataList from './dataList.vue'	
//import viewCategory from './viewCategory.vue'
//import countCategory from './countCategory.vue'
//import childCategory from './childCategory.vue'
//import ProductListMultiComponent from './ProductListMultiComponent.vue'
var dataList = function dataList() {
  return __webpack_require__.e(/*! import() | dataList-com */ "dataList-com").then(__webpack_require__.bind(__webpack_require__, /*! ./dataList.vue */ "./resources/js/components/Admin/MultiComponent/dataList.vue"));
};

var viewCategory = function viewCategory() {
  return __webpack_require__.e(/*! import() | viewCategory-com */ "viewCategory-com").then(__webpack_require__.bind(__webpack_require__, /*! ./viewCategory.vue */ "./resources/js/components/Admin/MultiComponent/viewCategory.vue"));
};

var countCategory = function countCategory() {
  return __webpack_require__.e(/*! import() | countCategory-com */ "countCategory-com").then(__webpack_require__.bind(__webpack_require__, /*! ./countCategory.vue */ "./resources/js/components/Admin/MultiComponent/countCategory.vue"));
};

var childCategory = function childCategory() {
  return __webpack_require__.e(/*! import() | childCategory-com */ "childCategory-com").then(__webpack_require__.bind(__webpack_require__, /*! ./childCategory.vue */ "./resources/js/components/Admin/MultiComponent/childCategory.vue"));
};

var ProductListMultiComponent = function ProductListMultiComponent() {
  return __webpack_require__.e(/*! import() | ProductListMultiComponent-com */ "ProductListMultiComponent-com").then(__webpack_require__.bind(__webpack_require__, /*! ./ProductListMultiComponent.vue */ "./resources/js/components/Admin/MultiComponent/ProductListMultiComponent.vue"));
}; //import searchBox from './searchBox.vue'
//import formBox from './formBox.vue'


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "multiComponent",
  data: function data() {
    return {
      categories: {},
      viewCategoryData: '' //listCategoryId: '',	    		

    };
  },
  methods: {
    fetchCategory: function fetchCategory() {
      var _this = this;

      axios.get('/spa/MultiComponent').then(function (response) {
        _this.categories = response.data; // is an object... use when pagination	
      })["catch"](function () {//toastr.warning('Something is wrong!');
      });
    },
    //function for pagination // Our method to GET results from a Laravel endpoint
    getResults: function getResults(page) {
      var _this2 = this;

      axios.get('/spa/MultiComponent?page=' + page).then(function (response) {
        _this2.categories = response.data; //console.log(JSON.stringify(this.categories));
      });
    },
    viewCategory: function viewCategory(data) {
      this.viewCategoryData = data; //data get from dataList.vue using viewCategory click event
    },
    listCategory: function listCategory(id) {
      FireEvent.$emit('getCategoryID', id); //this.listCategoryId = id;
      //data get from dataList.vue using listCategory click event
    },
    deleteCategory: function deleteCategory(id) {
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
          axios["delete"]('/spa/MultiComponent/' + id).then(function (_ref) {
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
    } //end delete,

  },
  //end methods
  mounted: function mounted() {// console.log('Component mounted.')
  },
  created: function created() {
    var _this3 = this;

    //this.fetchCategory(); //Fatch data when reload
    // Fetch initial results
    this.getResults(); //this event come from searchBox.vue component

    FireEvent.$on('searching', function (data) {
      var query = data;

      if (query == '') {
        _this3.getResults();
      } else {
        axios.get('/spa/searchCategoryData?q=' + query) //this.form.get('/spa/search-category?q='+query)
        .then(function (response) {
          _this3.categories = response.data; // is an object... use when pagination
        })["catch"](function () {});
      }
    });
    FireEvent.$on('getResultsPage', function (page) {
      _this3.getResults(page);
    });
    /*Call FireEvent $on event when create or update data named as AfterChange*/

    FireEvent.$on('AfterChange', function () {
      _this3.fetchCategory(); //this.countTotalCategory(); /*Count total category When Load page*/
      //this.parentCategory(); //get parent category only

    });
  },
  components: {
    dataList: dataList,
    viewCategory: viewCategory,
    countCategory: countCategory,
    childCategory: childCategory,
    ProductListMultiComponent: ProductListMultiComponent,
    //load component by ES6 rule. lazy loading
    searchBox: function searchBox() {
      return __webpack_require__.e(/*! import() | searchBox */ "searchBox").then(__webpack_require__.bind(__webpack_require__, /*! ./searchBox */ "./resources/js/components/Admin/MultiComponent/searchBox.vue"));
    },
    formBox: function formBox() {
      return __webpack_require__.e(/*! import() | formBox */ "formBox").then(__webpack_require__.bind(__webpack_require__, /*! ./formBox */ "./resources/js/components/Admin/MultiComponent/formBox.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/multiComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/multiComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiComponent.vue?vue&type=template&id=508d46f4& */ "./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4&");
/* harmony import */ var _multiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _multiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MultiComponent/multiComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./multiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiComponent_vue_vue_type_template_id_508d46f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./multiComponent.vue?vue&type=template&id=508d46f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/multiComponent.vue?vue&type=template&id=508d46f4& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "card vue-card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [_vm._v("Data List ")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-5 text-left" },
                  [_c("countCategory")],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [_c("searchBox")], 1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c("dataList", {
                      attrs: { categories: _vm.categories },
                      on: {
                        viewCategory: _vm.viewCategory,
                        listCategory: _vm.listCategory,
                        deleteCategory: _vm.deleteCategory
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [_c("formBox")], 1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-0" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [_c("ProductListMultiComponent")],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-0" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c("viewCategory", {
                      attrs: { viewCategoryData: _vm.viewCategoryData }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-0" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [_c("childCategory")],
                  1
                )
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
              _vm._v("Dashboard ")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Component Communication")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-right" }, [
          _vm._v("Navigation")
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
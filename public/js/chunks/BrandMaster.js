(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BrandMaster"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
var BrandMasterList = function BrandMasterList() {
  return __webpack_require__.e(/*! import() | BrandMasterList-com */ "BrandMasterList-com").then(__webpack_require__.bind(null, /*! ./BrandMasterList */ "./resources/js/components/Admin/Catalog/Brand/BrandMasterList.vue"));
};

var BrandMasterForm = function BrandMasterForm() {
  return __webpack_require__.e(/*! import() | BrandMasterForm-com */ "BrandMasterForm-com").then(__webpack_require__.bind(null, /*! ./BrandMasterForm */ "./resources/js/components/Admin/Catalog/Brand/BrandMasterForm.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BrandMasterInfo",
  components: {
    BrandMasterList: BrandMasterList,
    BrandMasterForm: BrandMasterForm
  },
  data: function data() {
    return {};
  },
  //end data	
  methods: {},
  //end Methods
  created: function created() {}
}); //end export default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "card vue-card" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row mt-2 mb-3" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [_c("BrandMasterList")],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("BrandMasterForm")
        ],
        1
      )
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
        _c("div", { staticClass: "col-md-6 col-sm-6 text-left" }, [
          _c("h5", [_vm._v("Brands")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-sm-6 text-right" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Catalog")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Brands")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandMaster.vue?vue&type=template&id=a9c238e0& */ "./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0&");
/* harmony import */ var _BrandMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandMaster.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BrandMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Catalog/Brand/BrandMaster.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandMaster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BrandMaster.vue?vue&type=template&id=a9c238e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Brand/BrandMaster.vue?vue&type=template&id=a9c238e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandMaster_vue_vue_type_template_id_a9c238e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
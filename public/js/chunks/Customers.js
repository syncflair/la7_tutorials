(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Customers"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
// import CustomerList from './CustomerList.vue'
// import CustomerForm from './CustomerForm.vue'
var CustomerList = function CustomerList() {
  return __webpack_require__.e(/*! import() | CustomerList-com */ "CustomerList-com").then(__webpack_require__.bind(null, /*! ./CustomerList */ "./resources/js/components/Admin/Customers/Customers/CustomerList.vue"));
};

var CustomerForm = function CustomerForm() {
  return __webpack_require__.e(/*! import() | CustomerForm-com */ "CustomerForm-com").then(__webpack_require__.bind(null, /*! ./CustomerForm */ "./resources/js/components/Admin/Customers/Customers/CustomerForm.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomerForAdmim",
  components: {
    CustomerList: CustomerList,
    CustomerForm: CustomerForm
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-md-12" }, [_c("CustomerList")], 1)
            ])
          ]),
          _vm._v(" "),
          _c("CustomerForm")
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
          _c("h5", [_vm._v("Customer")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-sm-6 text-right" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Customer")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/Customers.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/Customers.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=3ac776a6& */ "./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Customers/Customers/Customers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=3ac776a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/Customers.vue?vue&type=template&id=3ac776a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_3ac776a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
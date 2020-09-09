(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewCategory-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['viewCategoryData'] //get from parent component
  // props: {
  // 	//viewCategoryId: Number,
  //        //data get from dataList.vue through Multicomponent.vue
  //        viewCategoryData:{ 
  //          default: 0,
  //       required: true,
  //       validator: function (value) {
  //         return value >= 0
  //       }
  //     },
  //    },

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [_vm._v(" Category Details")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _vm.viewCategoryData
        ? _c("div", [
            _c("span", [
              _vm._v(" ID: " + _vm._s(_vm.viewCategoryData.id) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", [
              _vm._v(" Name: " + _vm._s(_vm.viewCategoryData.cat_name) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", [
              _vm._v(" Sulg: " + _vm._s(_vm.viewCategoryData.cat_slug) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _vm.viewCategoryData.is_enabled === 1
              ? _c("span", [_vm._v("Status: Active ")])
              : _vm._e(),
            _vm._v(" "),
            _vm.viewCategoryData.is_enabled === 0
              ? _c("span", [_vm._v("Status: Unactive ")])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.viewCategoryData ? _c("span", [_vm._v(" No Data ")]) : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/viewCategory.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/viewCategory.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewCategory.vue?vue&type=template&id=090fb71a& */ "./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a&");
/* harmony import */ var _viewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MultiComponent/viewCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewCategory.vue?vue&type=template&id=090fb71a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/viewCategory.vue?vue&type=template&id=090fb71a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCategory_vue_vue_type_template_id_090fb71a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
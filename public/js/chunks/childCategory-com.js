(self["webpackChunk"] = self["webpackChunk"] || []).push([["childCategory-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "childCategory",
  //props:['listCategoryId'], //get from parent component
  // props: {
  // 	//listCategoryId: Number,	        
  //        //data get from dataList.vue through Multicomponent.vue
  //        listCategoryId:{ 
  //       required: true,
  //       // validator: function (value) {
  //       //   return value >= 0
  //       // }
  //     },
  //    },
  data: function data() {
    return {
      //getId: this.listCategoryId,  //this.$props.listCategoryId
      //getId: this.listCategoryId,  //this.$props.listCategoryId
      //getCategoryId: '', 
      categoryList: ''
    };
  },
  methods: {
    getCategoryList: function getCategoryList(id) {
      var _this = this;

      //alert(id)
      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/getCatList/' + id).then(function (response) {
        _this.$Progress.finish();

        _this.categoryList = response.data; //FireEvent.$emit('AfterChange'); //this will reload data after create or update               
        //toastr.warning(data.success); 
      })["catch"](function () {});
    }
  },
  mounted: function mounted() {},
  computed: {// ids: function () {
    //   return this.listCategoryId
    // },
    // get_id: {
    //          get: function ()  {
    //              return this.listCategoryId
    //          },
    //          set:function (data) {
    //              return this.getId = data
    //          }
    //    },
  },
  created: function created() {
    var _this2 = this;

    //this.getId = this.listCategoryId;
    FireEvent.$on('getCategoryID', function (data) {
      //this.getCategoryId = data;
      _this2.getCategoryList(data);
    });
  }
}); //end export default

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/childCategory.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/childCategory.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childCategory.vue?vue&type=template&id=55752e3a& */ "./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a&");
/* harmony import */ var _childCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./childCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _childCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MultiComponent/childCategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_childCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./childCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_childCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_childCategory_vue_vue_type_template_id_55752e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./childCategory.vue?vue&type=template&id=55752e3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/childCategory.vue?vue&type=template&id=55752e3a& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _vm._v(" Display Child Category here")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _vm.categoryList.length === 0
        ? _c("div", [_c("span", [_vm._v(" -- No Child Category Found")])])
        : _c("div", [
            _c(
              "ul",
              _vm._l(_vm.categoryList, function(list) {
                return _c("li", [
                  _vm._v(_vm._s(list.id) + " - " + _vm._s(list.cat_name) + " ")
                ])
              }),
              0
            )
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
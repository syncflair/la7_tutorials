(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
  name: "dataList",
  //props:['categories'], //get from parent component
  props: {
    categories: {
      type: Object,
      //type: Object,
      required: true //validator: (value) => { return value.lenght <= 10; }

    }
  },
  data: function data() {
    return {// categories: '',
      // getResults: 1,
    };
  },
  methods: {
    //function for pagination // Our method to GET results from a Laravel endpoint
    // getResults(page = 1) {
    //     axios.get('/spa/MultiComponent?page=' + page)
    //       .then( (response) => {
    //         this.categories = response.data;
    //       });
    // },
    getResults: function getResults() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //alert(data.id);
      FireEvent.$emit('getResultsPage', page);
    },
    //send data to formBox.vue
    editCategory: function editCategory(data) {
      //alert(data.id);
      FireEvent.$emit('fillEditCategory', data);
    }
  },
  created: function created() {},
  mounted: function mounted() {//console.log('Component mounted.')
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("table", { staticClass: "table table-striped table-sm" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.categories.data, function(category, index) {
            return _c("tr", { key: index }, [
              _c("td", [_vm._v(" " + _vm._s(category.id) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(category.cat_name))]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    attrs: { title: "Single View" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("viewCategory", category)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-eye primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    attrs: { title: "List View" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("listCategory", category.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-list primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.editCategory(category)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-edit primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-block- btn-danger- btn-flat btn-sm",
                    attrs: { id: "delete" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("deleteCategory", category.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "far fa-trash-alt red" })]
                )
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c(
              "pagination",
              {
                attrs: { data: _vm.categories, align: "right", size: "small" },
                on: { "pagination-change-page": _vm.getResults }
              },
              [
                _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                  _vm._v("< Previous")
                ]),
                _vm._v(" "),
                _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                  _vm._v("Next >")
                ])
              ]
            )
          ],
          1
        )
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
        _c("div", { staticClass: "col-md-8 col-sm-6" }, [
          _vm._v("Category List")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-6 text-right" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "25%" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "16%", "text-align": "right" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [_c("span")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/dataList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/dataList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataList.vue?vue&type=template&id=3526c2d0& */ "./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0&");
/* harmony import */ var _dataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MultiComponent/dataList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataList.vue?vue&type=template&id=3526c2d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MultiComponent/dataList.vue?vue&type=template&id=3526c2d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataList_vue_vue_type_template_id_3526c2d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
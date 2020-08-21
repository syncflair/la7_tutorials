(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      module: 'role'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['authUser', 'authPermissions'])),
  methods: {},
  mounted: function mounted() {//console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
    //console.log(JSON.parse(this.authPermissions.permission));
    //console.log(this.authPermissions.permission['BranchInfo']['delete']);
    // console.log(this.systemSettings);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "h2",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.authPermissionsData.BranchInfo.view === true,
              expression: "authPermissionsData.BranchInfo.view === true"
            }
          ]
        },
        [_vm._v(" This Permission check")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card vue-card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-left" }, [
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 text-right" }, [
            _vm._v("Navigation")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-3 col-6" }, [
            _c("div", { staticClass: "small-box bg-info" }, [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v("4500 "), _c("small", [_vm._v("tk")])]),
                _vm._v(" "),
                _c("p", [_vm._v("Sales")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "ion ion-bag" })
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "small-box-footer", attrs: { href: "#" } },
                [
                  _vm._v("More info "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-6" }, [
            _c("div", { staticClass: "small-box bg-info" }, [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v("4500 "), _c("small", [_vm._v("tk")])]),
                _vm._v(" "),
                _c("p", [_vm._v("Sales")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "ion ion-bag" })
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "small-box-footer", attrs: { href: "#" } },
                [
                  _vm._v("More info "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("br"),
            _vm._v(" "),
            _c("h3", { staticClass: "m-0 text-dark" }, [_vm._v("Bank & Cash")]),
            _c("br")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box" }, [
              _c(
                "span",
                { staticClass: "info-box-icon bg-success elevation-1" },
                [_c("i", { staticClass: "fas fa-money-bill-alt" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "info-box-content" }, [
                _c("span", { staticClass: "info-box-text success" }, [
                  _vm._v("Bank Balance")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "info-box-number success" }, [
                  _vm._v(
                    "\r\n                      200000\r\n                      "
                  ),
                  _c("small", [_vm._v("tk")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box" }, [
              _c(
                "span",
                { staticClass: "info-box-icon bg-success elevation-1" },
                [_c("i", { staticClass: "fas fa-money-bill-alt" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "info-box-content" }, [
                _c("span", { staticClass: "info-box-text success" }, [
                  _vm._v("Cash In Hand")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "info-box-number success" }, [
                  _vm._v(
                    "\r\n                      70000\r\n                      "
                  ),
                  _c("small", [_vm._v("tk")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box" }, [
              _c(
                "span",
                { staticClass: "info-box-icon bg-success elevation-1" },
                [_c("i", { staticClass: "fas fa-money-check-alt" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "info-box-content" }, [
                _c("span", { staticClass: "info-box-text success" }, [
                  _vm._v("Cheques")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "info-box-number success" }, [
                  _vm._v("Received(2) 4000 "),
                  _c("small", [_vm._v("tk")])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "info-box-number danger" }, [
                  _vm._v("Paid(1) 3000 "),
                  _c("small", [_vm._v("tk")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box" }, [
              _c(
                "span",
                { staticClass: "info-box-icon bg-danger elevation-1" },
                [_c("i", { staticClass: "fas fa-hand-holding-usd" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "info-box-content" }, [
                _c("span", { staticClass: "info-box-text danger" }, [
                  _vm._v("Loan")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "info-box-number danger" }, [
                  _vm._v(
                    "\r\n                      130000\r\n                      "
                  ),
                  _c("small", [_vm._v("tk")])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/DashboardAdmin.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/DashboardAdmin.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAdmin.vue?vue&type=template&id=48360366& */ "./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366&");
/* harmony import */ var _DashboardAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAdmin.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/DashboardAdmin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAdmin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAdmin.vue?vue&type=template&id=48360366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/DashboardAdmin.vue?vue&type=template&id=48360366&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdmin_vue_vue_type_template_id_48360366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
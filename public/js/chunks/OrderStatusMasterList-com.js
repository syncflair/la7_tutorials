(self["webpackChunk"] = self["webpackChunk"] || []).push([["OrderStatusMasterList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
//import { mapState } from 'vuex' //for user MapState
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "OrderStatuslist-info",
  data: function data() {
    return {
      OrderStatus: {} // perPage: 0,                 

    };
  },
  computed: {// ...mapState( 
    //      'VatRatesStore', ['authUser', 'pagination','autoCompleteData']
    //   ),        
  },
  methods: {
    fetchOrderStatus: function fetchOrderStatus() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/order-status-info').then(function (response) {
        _this.OrderStatus = response.data; // is an object... use when pagination
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addOrderStatus: function addOrderStatus() {
      FireEvent.$emit('addOrderStatus');
    },
    editOrderStatus: function editOrderStatus(data) {
      //alert(data.id);
      FireEvent.$emit('editOrderStatus', data);
    },
    DeleteData: function DeleteData(id) {
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
          axios["delete"]('/spa/order-status-info/' + id).then(function (_ref) {
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
    } //end delete

  },
  created: function created() {
    var _this2 = this;

    this.fetchOrderStatus();
    FireEvent.$on('AfterChange', function () {
      _this2.fetchOrderStatus();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
  }
});
/*End export default*/

/***/ }),

/***/ "./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0& */ "./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0&");
/* harmony import */ var _OrderStatusMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderStatusMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OrderStatusMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderStatusMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusMasterList_vue_vue_type_template_id_4a49b2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Settings/OrderStatus/OrderStatusMasterList.vue?vue&type=template&id=4a49b2d0& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [_vm._v("User Status")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { "data-toggle": "modal", "data-target": "#formModal" },
              on: { click: _vm.addOrderStatus }
            },
            [_c("i", { staticClass: "icon fas fa-plus" }), _vm._v(" Add New")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "table",
        { staticClass: "table table-striped table-sm table-responsive-" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.OrderStatus, function(o_status, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(" " + _vm._s(o_status.id) + " ")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-bold green-",
                      attrs: { scope: "col" }
                    },
                    [_vm._v(" " + _vm._s(o_status.order_status_name) + " ")]
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(o_status.order_status_desc) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: o_status.is_enabled === 1,
                            expression: "o_status.is_enabled === 1"
                          }
                        ],
                        staticClass: "green"
                      },
                      [_vm._v(" Active")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: o_status.is_enabled === 0,
                            expression: "o_status.is_enabled === 0"
                          }
                        ],
                        staticClass: "red text-bold"
                      },
                      [_vm._v(" Inactive")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _vm.authUser.role_id === 1
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-primary- btn-flat btn-sm",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#formModal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editOrderStatus(o_status)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-edit primary " })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 1
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-block- btn-danger- btn-flat btn-sm",
                            attrs: { id: "delete" },
                            on: {
                              click: function($event) {
                                return _vm.DeleteData(o_status.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "far fa-trash-alt red" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id != 1
                      ? _c("span", { staticClass: "red text-bold" }, [
                          _vm._v("No Action")
                        ])
                      : _vm._e()
                  ])
                ])
              }),
              _vm._v(" "),
              _c(
                "tr",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.OrderStatus && !_vm.OrderStatus.length,
                      expression: "OrderStatus && !OrderStatus.length"
                    }
                  ]
                },
                [_vm._m(1)]
              )
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("#")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Title")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "45%" }, attrs: { scope: "col" } }, [
          _vm._v("Details")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: { width: "15%", "text-align": "right" },
            attrs: { scope: "col" }
          },
          [_vm._v("Action")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "5" } }, [
      _c(
        "div",
        {
          staticClass: "alert alert-warning text-center red mb-0",
          attrs: { role: "alert" }
        },
        [_vm._v("Sorry : No data found.")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);
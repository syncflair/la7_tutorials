(self["webpackChunk"] = self["webpackChunk"] || []).push([["CashAccountMasterList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CashAccountMasterList",
  data: function data() {
    return {
      cashAccounts: {},
      // perPage: 0, 
      filterBy: 'name',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'name',
        'show_name': 'name'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('CashAccountMasterStore', ['account_head_details', 'pagination', 'autoCompleteData'])),
  methods: {
    viewDetials: function viewDetials(data) {
      //alert(id);
      FireEvent.$emit('CashAccountMasterContentHead', data);
    },
    fetchData: function fetchData() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/BankAccount-Info').then(function (response) {
        _this.cashAccounts = response.data; // is an object... use when pagination
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addCashAccount: function addCashAccount() {
      FireEvent.$emit('addCashAccount');
    },
    editCashAccount: function editCashAccount(data) {
      //alert(data.id);
      FireEvent.$emit('editCashAccount', data);
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
          axios["delete"]('/spa/BankAccount-Info/' + id).then(function (_ref) {
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
    },
    //end delete
    // ################################ For search App ###############################################
    searchData: function searchData(data) {
      this.$store.dispatch('CashAccountMasterStore/searching', data);
    },
    AutoCompleteSearch: function AutoCompleteSearch(data) {
      if (data != '') {
        this.$store.dispatch('CashAccountMasterStore/AutoCompleteSearch', data);
      }
    } // ################################ For search App ###############################################

  },
  created: function created() {
    var _this2 = this;

    this.fetchData();
    setTimeout(function () {
      //console.log(this.cashAccounts);
      _this2.viewDetials(_this2.cashAccounts[0]);
    }, 1000);
    FireEvent.$on('AfterChange', function () {
      _this2.fetchData();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchData();  
  }
});
/*End export default*/

/***/ }),

/***/ "./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CashAccountMasterList.vue?vue&type=template&id=101f8394& */ "./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394&");
/* harmony import */ var _CashAccountMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CashAccountMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CashAccountMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__.render,
  _CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashAccountMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashAccountMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashAccountMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashAccountMasterList_vue_vue_type_template_id_101f8394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashAccountMasterList.vue?vue&type=template&id=101f8394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Accounting/CashAccount/CashAccountMasterList.vue?vue&type=template&id=101f8394& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "card vue-card-item vue-card-item-multi-layer",
      staticStyle: { "min-height": "665px !important" }
    },
    [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-6" },
            [
              _c("search-app-master", {
                attrs: {
                  SearchByOptions: _vm.SearchByOptions,
                  filterBy: _vm.filterBy,
                  autoCompleteData: _vm.autoCompleteData,
                  pagination: _vm.pagination
                },
                on: {
                  searchData: _vm.searchData,
                  AutoCompleteSearch: _vm.AutoCompleteSearch
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 text-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { "data-toggle": "modal", "data-target": "#formModal" },
                on: { click: _vm.addCashAccount }
              },
              [_c("i", { staticClass: "icon fas fa-plus" }), _vm._v("New")]
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
              _vm._l(_vm.cashAccounts, function(ba, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _c(
                      "p",
                      {
                        staticClass: "pointer mb-0",
                        on: {
                          click: function($event) {
                            return _vm.viewDetials(ba)
                          }
                        }
                      },
                      [
                        _vm._v(
                          " \r\n                " +
                            _vm._s(ba.bank_account_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [_vm._v(" " + _vm._s(ba.bank_name) + " ")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        ba.account_opening_balance != null
                          ? _c("span", { staticClass: "green" }, [
                              _vm._v(
                                _vm._s(ba.account_opening_balance) +
                                  " \r\n                  "
                              ),
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    _vm.systemSettings.belongs_to_currency
                                      .currency_short_code
                                  ) + " "
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        ba.account_opening_balance === null
                          ? _c("span", [
                              _vm._v(" 0.00 \r\n                  "),
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    _vm.systemSettings.belongs_to_currency
                                      .currency_short_code
                                  ) + " "
                                )
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group option-dropdown-manu-style left"
                      },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-menu-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.viewDetials(ba)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-eye primary" }),
                                _vm._v(" View ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target": "#formModal"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editCashAccount(ba)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-eye primary" }),
                                _vm._v(" Edit ")
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-divider" }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: { id: "delete" },
                                on: {
                                  click: function($event) {
                                    return _vm.DeleteData(ba.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-trash-alt red"
                                }),
                                _vm._v(" Delete\r\n                  ")
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._v("\r\n    " + _vm._s(_vm.autoCompleteData) + "\r\n\r\n    "),
      _c("div", { staticClass: "card-footer" })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "60%" }, attrs: { scope: "col" } }, [
          _vm._v("Accounts")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: { width: "10%", "text-align": "right" },
            attrs: { scope: "col" }
          },
          [_vm._v("...")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-flat btn-sm btn-warning dropdown-toggle-",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v" })]
    )
  }
]
render._withStripped = true



/***/ })

}]);
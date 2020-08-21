(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CurrencyList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CurrencyList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      Currencies: {} // perPage: 0,                 

    };
  },
  computed: {},
  methods: {
    fetchCurrencies: function fetchCurrencies() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/Currency-Info').then(function (response) {
        _this.Currencies = response.data; // is an object... use when pagination
        //this.Currencies = response.data.data; //is an object... default 
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addCurrency: function addCurrency() {
      FireEvent.$emit('addCurrency');
    },
    editCurrency: function editCurrency(data) {
      //alert(data.id);
      FireEvent.$emit('editCurrency', data);
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
          axios["delete"]('/spa/Currency-Info/' + id).then(function (_ref) {
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

    this.fetchCurrencies();
    FireEvent.$on('AfterChange', function () {
      _this2.fetchCurrencies();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchCurrencies();  
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6 " }, [_vm._v("Currency List")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: {
                "data-toggle": "modal",
                "data-target": "#currencyModal"
              },
              on: { click: _vm.addCurrency }
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
              _vm._l(_vm.Currencies, function(currency, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(currency.currency_name) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(currency.currency_code) +
                        " / " +
                        _vm._s(currency.currency_short_code) +
                        " / \r\n                "
                    ),
                    currency.currency_icon != null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + currency.currency_icon,
                              height: "15px",
                              width: "15px"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    currency.currency_icon === null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + _vm.NoIconUrl,
                              height: "15px",
                              width: "15px"
                            }
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(currency.currency_value) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm._f("formatDate")(currency.updated_at)) + " "
                    )
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
                            value: currency.is_enabled === 1,
                            expression: "currency.is_enabled === 1"
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
                            value: currency.is_enabled === 0,
                            expression: "currency.is_enabled === 0"
                          }
                        ],
                        staticClass: "red text-bold"
                      },
                      [_vm._v(" Inactive")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary- btn-flat btn-sm",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#currencyModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editCurrency(currency)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-edit primary " })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-block- btn-danger- btn-flat btn-sm",
                        attrs: { id: "delete" },
                        on: {
                          click: function($event) {
                            return _vm.DeleteData(currency.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "far fa-trash-alt red" })]
                    )
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
                      value: _vm.Currencies && !_vm.Currencies.length,
                      expression: "Currencies && !Currencies.length"
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
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Currency Title")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "25%" }, attrs: { scope: "col" } }, [
          _vm._v("Code")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Value (Equal to 1$)")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
          _vm._v("Updated At")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: { width: "10%", "text-align": "right" },
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
    return _c("td", { attrs: { colspan: "6" } }, [
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



/***/ }),

/***/ "./resources/js/components/Admin/Settings/Currency/CurrencyList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Currency/CurrencyList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrencyList.vue?vue&type=template&id=bbaf7428& */ "./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428&");
/* harmony import */ var _CurrencyList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CurrencyList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/Currency/CurrencyList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrencyList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrencyList.vue?vue&type=template&id=bbaf7428& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Currency/CurrencyList.vue?vue&type=template&id=bbaf7428&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyList_vue_vue_type_template_id_bbaf7428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VatRateList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VatRateList",
  data: function data() {
    return {
      filterBy: 'vat_name',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'vat_name',
        'show_name': 'Title'
      }, {
        'field_name': 'vat_code',
        'show_name': 'Vat Code'
      }, {
        'field_name': 'vat_rate',
        'show_name': 'Vat Rate'
      }, {
        'field_name': 'vat_type',
        'show_name': 'Vat Type'
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('VatRatesStore', ['VatRates', 'pagination', 'autoCompleteData'])),
  methods: {
    // fetchVatRate(){
    //   this.$Progress.start(); //using progress-bar package
    //   axios.get('/spa/VatRate-Info')
    //     .then( ( response ) => {
    //       this.VatRates = response.data; // is an object... use when pagination
    //         //this.vatRateUn = response.data.data; //is an object... default 
    //       //console.log(response.data); 
    //       this.$Progress.finish(); 
    //     })
    //     .catch( (errors) => {  
    //       //console.log(errors); 
    //       this.$Progress.fail(); 
    //       toastr.warning('Something is wrong!');
    //     })
    // },
    addVatRate: function addVatRate() {
      FireEvent.$emit('addVatRate');
    },
    editVatRate: function editVatRate(data) {
      //alert(data.id);
      FireEvent.$emit('editVatRate', data);
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
          axios["delete"]('/spa/VatRate-Info/' + id).then(function (_ref) {
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
    //Function call from Pagination-app.vue
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start();
      this.$store.dispatch('VatRatesStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    }
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('VatRatesStore/fetchData'); //call this function at first loading from Action with Modules namespace 

    FireEvent.$on('AfterChange', function () {
      _this.$Progress.start();

      _this.$store.dispatch('VatRatesStore/fetchData', _this.pagination.per_page);

      _this.$Progress.finish();
    }); //this event call from Pagination-app component for change number of data show per page

    FireEvent.$on('changPerPage', function (data) {
      _this.$store.dispatch('VatRatesStore/fetchData', data);
    }); //This is come from search-app-one.vue file for serch data

    FireEvent.$on('searchData', function (data) {
      //alert(data.search_key+'-'+data.search_option);
      _this.$store.dispatch('VatRatesStore/searching', data);
    }); //This is come from search-app-one.vue file for Auto Complete data

    FireEvent.$on('AutoCompleteSearch', function (data) {
      //alert(data);
      if (data != '') {
        _this.$store.dispatch('VatRatesStore/AutoCompleteSearch', data);
      }
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "col-md-5 col-sm-6 col-6 col-6" },
          [
            _c("search-app-one", {
              attrs: {
                SearchByOptions: _vm.SearchByOptions,
                filterBy: _vm.filterBy,
                autoCompleteData: _vm.autoCompleteData,
                pagination: _vm.pagination
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-7 col-sm-6 col-6 col-6 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { "data-toggle": "modal", "data-target": "#VatRateModal" },
              on: { click: _vm.addVatRate }
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
              _vm._l(_vm.VatRates, function(vatRate, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(vatRate.vat_name) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(vatRate.vat_code) + " ")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " + _vm._s(vatRate.vat_rate) + " \r\n              "
                    ),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vatRate.vat_type === "Percent",
                            expression: "vatRate.vat_type === 'Percent' "
                          }
                        ]
                      },
                      [_vm._v(" (%) ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vatRate.vat_type === "Fixed",
                            expression: "vatRate.vat_type === 'Fixed' "
                          }
                        ]
                      },
                      [_vm._v(" (Fixed)  ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(vatRate.vat_desc) + " ")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vatRate.is_enabled === 1,
                            expression: "vatRate.is_enabled === 1"
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
                            value: vatRate.is_enabled === 0,
                            expression: "vatRate.is_enabled === 0"
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
                          "data-target": "#VatRateModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editVatRate(vatRate)
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
                            return _vm.DeleteData(vatRate.id)
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
                      value: _vm.VatRates && !_vm.VatRates.length,
                      expression: "VatRates && !VatRates.length"
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
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _vm.pagination.last_page >= 1
          ? _c("pagination-app", {
              attrs: { pagination: _vm.pagination, offset: 5 },
              on: {
                paginate: function($event) {
                  return _vm.fetchData()
                }
              }
            })
          : _vm._e()
      ],
      1
    )
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
          _vm._v("Title")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" }, attrs: { scope: "col" } }, [
          _vm._v("Code")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Value")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Details")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "8%" }, attrs: { scope: "col" } }, [
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

/***/ "./resources/js/components/Admin/Settings/VatRate/VatRateList.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/VatRate/VatRateList.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VatRateList.vue?vue&type=template&id=2a379a60& */ "./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60&");
/* harmony import */ var _VatRateList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VatRateList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VatRateList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/VatRate/VatRateList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VatRateList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VatRateList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VatRateList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VatRateList.vue?vue&type=template&id=2a379a60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/VatRate/VatRateList.vue?vue&type=template&id=2a379a60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VatRateList_vue_vue_type_template_id_2a379a60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["BrandShopMasterList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BrandShopsMasterList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      //User for search 
      filterBy: 'brand_shop_title',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'brand_shop_title',
        'show_name': 'Name'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('BrandShopMasterStore', ['BrandShops', 'pagination', 'autoCompleteData'])),
  methods: {
    // fetchData(){
    //   this.$Progress.start(); //using progress-bar package
    //   axios.get('/spa/BrandShop-Info')
    //     .then( ( response ) => {
    //       this.BrandShops = response.data; // is an object... use when pagination
    //         //this.BrandShops = response.data.data; //is an object... default 
    //       //console.log(response.data); 
    //       this.$Progress.finish(); 
    //     })
    //     .catch( (errors) => {  
    //       //console.log(errors); 
    //       this.$Progress.fail(); 
    //       toastr.warning('Something is wrong!');
    //     })
    // },
    addBrandShop: function addBrandShop() {
      FireEvent.$emit('addBrandShop');
    },
    editBrandShop: function editBrandShop(data) {
      //alert(data.id);
      FireEvent.$emit('editBrandShop', data);
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
          axios["delete"]('/spa/BrandShop-Info/' + id).then(function (_ref) {
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
      this.$store.dispatch('BrandShopMasterStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    reloadThis: function reloadThis() {
      this.fetchData();
    },
    // ################################ For search App ###############################################
    searchData: function searchData(data) {
      this.$store.dispatch('BrandShopMasterStore/searching', data);
    },
    AutoCompleteSearch: function AutoCompleteSearch(data) {
      if (data != '') {
        this.$store.dispatch('BrandShopMasterStore/AutoCompleteSearch', data);
      }
    } // ################################ For search App ###############################################

  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('BrandShopMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

    FireEvent.$on('AfterChange', function () {
      _this.$Progress.start();

      _this.$store.dispatch('BrandShopMasterStore/fetchData', _this.pagination.per_page);

      _this.$Progress.finish();
    }); //this event call from Pagination-app component for change number of data show per page

    FireEvent.$on('changPerPage', function (data) {
      _this.$store.dispatch('BrandShopMasterStore/fetchData', data);
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchData();  
  }
});
/*End export default*/

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandShopMasterList.vue?vue&type=template&id=57517370& */ "./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370&");
/* harmony import */ var _BrandShopMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandShopMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BrandShopMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__.render,
  _BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandShopMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandShopMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandShopMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandShopMasterList_vue_vue_type_template_id_57517370___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandShopMasterList.vue?vue&type=template&id=57517370& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Suppliers/BrandShop/BrandShopMasterList.vue?vue&type=template&id=57517370& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "col-md-6 col-sm-9" },
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
        _c("div", { staticClass: "col-md-6 col-sm-3 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { title: "reload" },
              on: { click: _vm.reloadThis }
            },
            [_c("i", { staticClass: "fas fa-sync-alt" })]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { "data-toggle": "modal", "data-target": "#formModal" },
              on: { click: _vm.addBrandShop }
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
              _vm._l(_vm.BrandShops, function(bs, index) {
                return _c("tr", { key: index }, [
                  _c("td", [
                    bs.bs_img != null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: bs.bs_img,
                              height: "20px",
                              width: "20px"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    bs.bs_img === null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + _vm.NoIconUrl,
                              height: "30px",
                              width: "60px"
                            }
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(bs.brand_shop_title) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      domProps: { innerHTML: _vm._s(bs.brand_shop_desc) }
                    })
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
                            value: bs.is_enabled === 1,
                            expression: "bs.is_enabled === 1"
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
                            value: bs.is_enabled === 0,
                            expression: "bs.is_enabled === 0"
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
                          "data-target": "#formModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editBrandShop(bs)
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
                            return _vm.DeleteData(bs.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "far fa-trash-alt red" })]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _vm.BrandShops && !_vm.BrandShops.length
                ? _c("tr", [_vm._m(1)])
                : _vm._e()
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
        _c("th", { staticStyle: { width: "6%" }, attrs: { scope: "col" } }, [
          _vm._v("Image")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "45%" }, attrs: { scope: "col" } }, [
          _vm._v("Details")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
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
          staticClass: "alert alert-warning text-center mb-0",
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PackageUnitList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PackageUnitList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      PackageUnits: {} // perPage: 0,                 

    };
  },
  computed: {},
  methods: {
    fetchPackageUnit: function fetchPackageUnit() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/PackageUnit-Info').then(function (response) {
        _this.PackageUnits = response.data; // is an object... use when pagination
        //this.PackageUnit = response.data.data; //is an object... default 
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addPackageUnit: function addPackageUnit() {
      FireEvent.$emit('addPackageUnit');
    },
    editPackageUnit: function editPackageUnit(data) {
      //alert(data.id);
      FireEvent.$emit('editPackageUnit', data);
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
          axios["delete"]('/spa/PackageUnit-Info/' + id).then(function (_ref) {
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

    this.fetchPackageUnit();
    FireEvent.$on('AfterChange', function () {
      _this2.fetchPackageUnit();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchPackageUnit();  
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-6" }, [_vm._v("PackageUnit List")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { "data-toggle": "modal", "data-target": "#PackageModal" },
              on: { click: _vm.addPackageUnit }
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
              _vm._l(_vm.PackageUnits, function(pacakge_unit, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(pacakge_unit.package_title) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(pacakge_unit.package_unit) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(pacakge_unit.package_desc) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    pacakge_unit.package_icon != null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + pacakge_unit.package_icon,
                              height: "30px",
                              width: "30px"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    pacakge_unit.package_icon === null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + _vm.NoIconUrl,
                              height: "30px",
                              width: "30px"
                            }
                          })
                        ])
                      : _vm._e()
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
                            value: pacakge_unit.is_enabled === 1,
                            expression: "pacakge_unit.is_enabled === 1"
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
                            value: pacakge_unit.is_enabled === 0,
                            expression: "pacakge_unit.is_enabled === 0"
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
                          "data-target": "#PackageModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editPackageUnit(pacakge_unit)
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
                            return _vm.DeleteData(pacakge_unit.id)
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
                      value: _vm.PackageUnits && !_vm.PackageUnits.length,
                      expression: "PackageUnits && !PackageUnits.length"
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
          _vm._v("PackageUnit Title")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" }, attrs: { scope: "col" } }, [
          _vm._v("Code")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Details")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Icon")
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

/***/ "./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageUnitList.vue?vue&type=template&id=04f1c162& */ "./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162&");
/* harmony import */ var _PackageUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageUnitList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageUnitList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageUnitList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageUnitList.vue?vue&type=template&id=04f1c162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/PackageUnit/PackageUnitList.vue?vue&type=template&id=04f1c162&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageUnitList_vue_vue_type_template_id_04f1c162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
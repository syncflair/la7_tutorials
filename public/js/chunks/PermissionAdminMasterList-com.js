(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PermissionAdminMasterList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PermissionAdminMasterList",
  data: function data() {
    return {
      Permissions: {} // perPage: 0,                 

    };
  },
  computed: {},
  methods: {
    fetchPermission: function fetchPermission() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/Permissions-Info').then(function (response) {
        _this.Permissions = response.data; // is an object... use when pagination
        //this.permissionUn = response.data.data; //is an object... default 
        //console.log(response.data); 

        _this.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    addPermission: function addPermission() {
      FireEvent.$emit('addPermission');
    },
    editPermission: function editPermission(data) {
      //alert(data.id);
      FireEvent.$emit('editPermission', data);
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
          axios["delete"]('/spa/Permissions-Info/' + id).then(function (_ref) {
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

    this.fetchPermission();
    FireEvent.$on('AfterChange', function () {
      _this2.fetchPermission();
    });
  },
  mounted: function mounted() {//console.log(this.categories)    
    //this.fetchPermission();  
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-6" }, [_vm._v("Permission List")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6 text-right" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: {
                  "data-toggle": "modal",
                  "data-target": "#PermissionModal"
                },
                on: { click: _vm.addPermission }
              },
              [_c("i", { staticClass: "icon fas fa-plus" }), _vm._v(" Add New")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/PermissionAddMaster" }
              },
              [
                _c("i", { staticClass: "icon fas fa-plus" }),
                _vm._v(" Add Permission")
              ]
            )
          ],
          1
        )
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
              _vm._l(_vm.Permissions, function(permission, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(permission["role"]["name"]) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(JSON.parse(permission.permission)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm._f("formatDate")(permission.updated_at)) + " "
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
                          "data-target": "#PermissionModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editPermission(permission)
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
                            return _vm.DeleteData(permission.id)
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
                      value:
                        _vm.Permissions.data && !_vm.Permissions.permission,
                      expression: "Permissions.data && !Permissions.permission"
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
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
          _vm._v("Role")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "70%" }, attrs: { scope: "col" } }, [
          _vm._v("Permissions")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
          _vm._v("Updated At")
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
          staticClass: "alert alert-danger text-center red mb-0",
          attrs: { role: "alert" }
        },
        [_vm._v("Sorry : No data found.")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a& */ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a&");
/* harmony import */ var _PermissionAdminMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionAdminMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionAdminMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAdminMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionAdminMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAdminMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/Permission/PermissionAdminMasterList.vue?vue&type=template&id=15c52c4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAdminMasterList_vue_vue_type_template_id_15c52c4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
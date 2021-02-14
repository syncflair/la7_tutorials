(self["webpackChunk"] = self["webpackChunk"] || []).push([["PermissionAddForm-com"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//class for error handeling
var Erorrs = /*#__PURE__*/function () {
  function Erorrs() {
    _classCallCheck(this, Erorrs);

    this.errors = {};
  } //this field get from form input error field like errors.get('name')


  _createClass(Erorrs, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors.errors;
    }
  }]);

  return Erorrs;
}(); //end Erorrs class


 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PermissionAddMaster",
  data: function data() {
    return {
      editMode: false,
      //Use this for add edit using the same form 
      roles: [],
      errors: new Erorrs(),
      allSelected: false,
      view: [],
      formData: {
        id: '',
        role_id: '' //permission: '' 

      },
      resources: {
        BranchInfo: {
          module: 'BranchInfo',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'BranchInfo'
        },
        permission: {
          module: 'permission',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'permission'
        },
        role: {
          module: 'role',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'role'
        },
        user: {
          module: 'user',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'user'
        }
      },
      defaultResources: {
        BranchInfo: {
          module: 'BranchInfo',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'BranchInfo'
        },
        permission: {
          module: 'permission',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'permission'
        },
        role: {
          module: 'role',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'role'
        },
        user: {
          module: 'user',
          view: false,
          read: false,
          write: false,
          update: false,
          "delete": false,
          name: 'user'
        }
      } // },
      // resources: [
      //   {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
      //   {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
      //   {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
      // ],
      // defaultResources:[
      //   {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
      //   {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
      //   {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
      // ],

    };
  },
  //end data
  computed: {// ...mapState( 
    //    'CountryStore', ['Countries', 'pagination','autoCompleteData']
    // ),
  },
  methods: {
    // selectAllCheckbox(event){
    //     //alert(event.target.checked);
    //     //this.view = [];
    //     // if (!this.allSelected) {
    //     //     //console.log(true)
    //     //     for (r in this.resources) {
    //     //     }
    //     // }else{
    //     //     //console.log(false)
    //     // }
    //  },
    fetchRole: function fetchRole() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.get('/spa/Roles-Info').then(function (response) {
        _this.roles = response.data; // is an object... use when pagination

        _this.$Progress.finish();
      })["catch"](function (error) {
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    changeRole: function changeRole(event) {
      var _this2 = this;

      //alert(event.target.value)
      var role_id = event.target.value;
      axios.get('/spa/Permissions-Info/' + role_id).then(function (_ref) {
        var data = _ref.data;

        if (!data) {
          //console.log('No data'); 
          _this2.editMode = false;
          _this2.resources = _this2.defaultResources; //this.resources = this.resources;        	  		
        } else {
          //console.log('data');  
          _this2.editMode = true;
          _this2.resources = JSON.parse(data.permission);
          _this2.formData.id = data.id;
        } //console.log(JSON.parse(data.permission));

      })["catch"](function (error) {});
    },
    assignPermission: function assignPermission() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package
      // alert(this.formData.role_id); //alert(JSON.stringify(this.resources));
      //let permission = JSON.stringify(this.resources)

      var permission = this.resources;
      this.$Progress.start(); //using progress-bar package

      axios.post('/spa/Permissions-Info', {
        'permission': permission,
        'role_id': this.formData.role_id
      }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);
          _this3.resources = _this3.defaultResources;
          _this3.formData.role_id = "";
          _this3.errors.errors = {};
          t;

          _this3.$Progress.finish();
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function (error) {
        _this3.$Progress.fail();

        if (error.response) {
          _this3.errors.record(error.response.data); //send data to Erorrs class

        } // console.log(error.response);

      });
    },
    updatePermission: function updatePermission() {
      var _this4 = this;

      this.$Progress.start(); //using progress-bar package
      // alert(this.formData.role_id); //alert(JSON.stringify(this.resources));
      // let permission = JSON.stringify(this.resources)

      var permission = this.resources;
      this.$Progress.start(); //using progress-bar package

      axios.put('/spa/Permissions-Info/' + this.formData.id, {
        'permission': permission,
        'role_id': this.formData.role_id
      }).then(function (_ref3) {
        var data = _ref3.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);
          _this4.resources = _this4.defaultResources;
          _this4.formData.id = "";
          _this4.formData.role_id = "";
          _this4.errors.errors = {};

          _this4.$Progress.finish();

          _this4.editMode = false;
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function (error) {
        _this4.$Progress.fail();

        if (error.response) {
          _this4.errors.record(error.response.data); //send data to Erorrs class

        } // console.log(error.response);

      });
    }
  },
  //end Methods
  created: function created() {
    var _this5 = this;

    this.fetchRole();
    FireEvent.$on('AfterChange', function () {
      _this5.fetchRole();
    }); //console.log(JSON.parse(this.authUser.role.permission.permission));
    //console.log(this.authUser); //get data from commonGlobal.js
    //console.log(JSON.parse(this.authPermissions.permission));
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionAddForm.vue?vue&type=template&id=6fc9bd11& */ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11&");
/* harmony import */ var _PermissionAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionAddForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PermissionAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__.render,
  _PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionAddForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionAddForm_vue_vue_type_template_id_6fc9bd11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionAddForm.vue?vue&type=template&id=6fc9bd11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminUsers/Permission/PermissionAddForm.vue?vue&type=template&id=6fc9bd11& ***!
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
  return _c("span", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 col-sm-12" }, [
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-3", attrs: { for: "role_id" } }, [
            _vm._v("Role *")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-9" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.role_id,
                    expression: "formData.role_id"
                  }
                ],
                staticClass: "form-control form-control-sm",
                attrs: { id: "role_id", name: "role_id" },
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formData,
                        "role_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function($event) {
                      return _vm.changeRole($event)
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { disabled: "", value: "" } }, [
                  _vm._v("Select Role ..")
                ]),
                _vm._v(" "),
                _vm._l(_vm.roles, function(role) {
                  return _c("option", { domProps: { value: role.id } }, [
                    _vm._v(
                      "\r\n              \t" +
                        _vm._s(role.name) +
                        "\r\n              "
                    )
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("span", { staticClass: "text-danger" }, [
              _vm._v(_vm._s(_vm.errors.get("role_id")))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8 col-sm-12" }, [
        _c(
          "table",
          { staticClass: "table table-striped table-sm table-responsive-" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.resources, function(r, i) {
                return _c("tr", { key: i }, [
                  _c("td", [_vm._v(_vm._s(i))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(r.module))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: r.view,
                          expression: "r.view"
                        }
                      ],
                      staticClass: "mycheckbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(r.view)
                          ? _vm._i(r.view, null) > -1
                          : r.view
                      },
                      on: {
                        change: function($event) {
                          var $$a = r.view,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && _vm.$set(r, "view", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  r,
                                  "view",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(r, "view", $$c)
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: r.read,
                          expression: "r.read"
                        }
                      ],
                      staticClass: "mycheckbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(r.read)
                          ? _vm._i(r.read, null) > -1
                          : r.read
                      },
                      on: {
                        change: function($event) {
                          var $$a = r.read,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && _vm.$set(r, "read", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  r,
                                  "read",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(r, "read", $$c)
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: r.write,
                          expression: "r.write"
                        }
                      ],
                      staticClass: "mycheckbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(r.write)
                          ? _vm._i(r.write, null) > -1
                          : r.write
                      },
                      on: {
                        change: function($event) {
                          var $$a = r.write,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && _vm.$set(r, "write", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  r,
                                  "write",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(r, "write", $$c)
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: r.update,
                          expression: "r.update"
                        }
                      ],
                      staticClass: "mycheckbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(r.update)
                          ? _vm._i(r.update, null) > -1
                          : r.update
                      },
                      on: {
                        change: function($event) {
                          var $$a = r.update,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(r, "update", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  r,
                                  "update",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(r, "update", $$c)
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: r.delete,
                          expression: "r.delete"
                        }
                      ],
                      staticClass: "mycheckbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(r.delete)
                          ? _vm._i(r.delete, null) > -1
                          : r.delete
                      },
                      on: {
                        change: function($event) {
                          var $$a = r.delete,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(r, "delete", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  r,
                                  "delete",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(r, "delete", $$c)
                          }
                        }
                      }
                    })
                  ])
                ])
              }),
              0
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 align-center form-group" }, [
        _vm.editMode === false
          ? _c(
              "button",
              {
                attrs: { type: "btn btn-danger btn-flat btn-sm" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.assignPermission($event)
                  }
                }
              },
              [_vm._v("\r\n  \t\t\tSave Permission\r\n  \t\t")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.editMode === true
          ? _c(
              "button",
              {
                attrs: { type: "btn btn-danger btn-flat btn-sm" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.updatePermission($event)
                  }
                }
              },
              [_vm._v("\r\n  \t\t\tUpdate Permission\r\n  \t\t")]
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "30%" }, attrs: { scope: "col" } }, [
          _vm._v("Module")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" }, attrs: { scope: "col" } }, [
          _vm._v("name")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("View")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("Read")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("Write")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("Update")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("Delete")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
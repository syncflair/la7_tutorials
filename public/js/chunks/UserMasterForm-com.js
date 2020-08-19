(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserMasterForm-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      deleteImageIcon: false,
      //Delete Image icon if image exist
      editMode: false,
      //Use this for add edit using the same form 
      //form Single app
      placeHolder: 'Select Employee',
      filterBy: 'emp_name',
      valueProperty: 'id',
      // Create a new form instance
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
        status_id: '',
        employee_id: '',
        branch_id: '',
        avatar: ''
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usersAdminStore', ['pagination', 'autoSearchEmployee', 'selectedEmployee']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['userStatus', 'adminRoles', 'branches'])),
  methods: {
    //Make image as base64 
    onImageChange: function onImageChange(e) {
      var _this = this;

      //let file = e.target.files || e.dataTransfer.files;
      var file = e.target.files[0]; //console.log(file);

      this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image

      var reader = new FileReader(); //let vm = this;

      if (file['size'] > 512000) {
        //512Kb = 512000Byte
        toastr.warning('Please select file size within 500kb');
      } else {
        reader.onloadend = function (file) {
          //console.log(reader.result);
          _this.form.avatar = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    },
    //this event call from CustomerList component
    addData: function addData() {
      var _this2 = this;

      this.editMode = false;
      this.deleteImageIcon = false;
      this.form.reset();
      setTimeout(function () {
        _this2.$refs.name.focus();
      }, 600);
    },
    //this event call from CustomerList component
    editData: function editData(data) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(data); //this.$refs.name.focus();  

      if (data.avatar != null) {
        this.deleteImageIcon = true;
      }

      this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);
    },
    ClearForm: function ClearForm() {
      this.editMode = false;
      this.form.reset(); //reset from after submit

      this.form.clear(); //this.$refs.name.focus()

      this.$refs.avatar.value = ''; //clear file input tag 

      this.ShowOnChangeImage = null;
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/Users-Info')

      this.form.post('/spa/Users-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this3.$Progress.finish();

          _this3.form.reset(); //reset from after submit


          _this3.$refs.avatar.value = ''; //clear file input tag 

          _this3.ShowOnChangeImage = null;
          $('#FormModal').modal('hide');
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this4 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/Users-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this4.$Progress.finish();

          toastr.success(data.success);

          _this4.form.reset(); //reset from after submit


          _this4.editMode = false;
          _this4.$refs.avatar.value = ''; //clear file input tag 

          _this4.ShowOnChangeImage = null;
          $('#FormModal').modal('hide'); //  this.$refs.name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this4.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    deleteImage: function deleteImage(id) {
      var _this5 = this;

      this.$Progress.start(); //using progress-bar package        
      //console.log(this.form.has_many_image);

      axios.post('/spa/Users-Info-DeleteImage/' + id).then(function (_ref3) {
        var data = _ref3.data;
        _this5.deleteImageIcon = false;
        _this5.form.avatar = null;

        _this5.$Progress.finish();

        toastr.success(data.success);
      })["catch"](function () {
        _this5.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    AutoCompleteSearchForDataEmployee: function AutoCompleteSearchForDataEmployee(data) {
      this.$store.dispatch('usersAdminStore/AutoCompleteSearchForDataEmployee', data);
    },
    getSelectedDataByIdsForEmployee: function getSelectedDataByIdsForEmployee(data) {
      this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);
    }
  },
  created: function created() {
    var _this6 = this;

    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchRoles'); //get user role for admin (1 to 6)

    this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branchs

    FireEvent.$on('AfterChange', function () {
      _this6.$Progress.start();

      _this6.$store.dispatch('usersAdminStore/fetchData', _this6.pagination.per_page);

      _this6.$Progress.finish();
    }); //this event call from CustomerList component

    FireEvent.$on('editData', function (data) {
      //alert(data.id);
      //this.form.fill(data);   //this is also work
      _this6.editData(data);
    }); //this event call from CustomerList component

    FireEvent.$on('addData', function () {
      _this6.addData();
    });
  }
}); //End Exprot Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a& ***!
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
  return _c("span", [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "FormModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "",
          "aria-hidden": "true",
          "data-backdrop": "static"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header pb-1" }, [
                _c("h5", { staticClass: "modal-title", attrs: { id: "" } }, [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editMode,
                          expression: "!editMode"
                        }
                      ]
                    },
                    [_vm._v("Add user (Credential)")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editMode,
                          expression: "editMode"
                        }
                      ]
                    },
                    [_vm._v("Update -" + _vm._s(_vm.form.name))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        return _vm.ClearForm()
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editMode ? _vm.updateFormData() : _vm.storeFormData()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body pt-1" }, [
                    _c("div", { staticClass: "card--" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-9 col-sm-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Name *")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name"
                                  }
                                ],
                                ref: "name",
                                staticClass: "form-control form-control-sm",
                                class: {
                                  "is-invalid": _vm.form.errors.has("name")
                                },
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  placeholder: "User Name"
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "name" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Email *")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email"
                                  }
                                ],
                                ref: "email",
                                staticClass: "form-control form-control-sm",
                                class: {
                                  "is-invalid": _vm.form.errors.has("email")
                                },
                                attrs: {
                                  type: "text",
                                  name: "email",
                                  placeholder: "User email"
                                },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "email" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Role *")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.role_id,
                                      expression: "form.role_id"
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("role_id")
                                  },
                                  attrs: { id: "role_id", name: "role_id" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "role_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { disabled: "", value: "" } },
                                    [_vm._v("Select role ..")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.adminRoles, function(role) {
                                    return _c(
                                      "option",
                                      { domProps: { value: role.id } },
                                      [
                                        _vm._v(
                                          "\r\n\t\t\t                  \t" +
                                            _vm._s(role.name) +
                                            "\r\n\t\t\t                  "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "role_id" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("User Status *")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.status_id,
                                          expression: "form.status_id"
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "status_id"
                                        )
                                      },
                                      attrs: {
                                        id: "status_id",
                                        name: "status_id"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "status_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Select user Status ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.userStatus, function(
                                        u_status
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: u_status.id,
                                            domProps: { value: u_status.id }
                                          },
                                          [_vm._v(_vm._s(u_status.us_name))]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "status_id"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Branch *")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.branch_id,
                                          expression: "form.branch_id"
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "branch_id"
                                        )
                                      },
                                      attrs: {
                                        id: "branch_id",
                                        name: "branch_id"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "branch_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Select user Status ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.branches, function(branch) {
                                        return _c(
                                          "option",
                                          {
                                            key: branch.id,
                                            domProps: { value: branch.id }
                                          },
                                          [_vm._v(_vm._s(branch.branch_name))]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "branch_id"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Select Employee ")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c("single-select-app-one", {
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "employee_id"
                                    )
                                  },
                                  attrs: {
                                    options: _vm.selectedEmployee,
                                    autoSearchOptions: _vm.autoSearchEmployee,
                                    filterBy: _vm.filterBy,
                                    "place-holder": _vm.placeHolder,
                                    "value-property": _vm.valueProperty
                                  },
                                  on: {
                                    getAllDataListByIds:
                                      _vm.getSelectedDataByIdsForEmployee,
                                    AutoCompleteSearchForData:
                                      _vm.AutoCompleteSearchForDataEmployee
                                  },
                                  model: {
                                    value: _vm.form.employee_id,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "employee_id", $$v)
                                    },
                                    expression: "form.employee_id"
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "employee_id"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [
                                    _vm._v("Password  "),
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.editMode === false,
                                            expression: "editMode === false"
                                          }
                                        ]
                                      },
                                      [_vm._v(" * ")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.password,
                                        expression: "form.password"
                                      }
                                    ],
                                    ref: "password",
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password"
                                      )
                                    },
                                    attrs: {
                                      type: "password",
                                      name: "password",
                                      placeholder: "Password"
                                    },
                                    domProps: { value: _vm.form.password },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "password" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Password Confirm")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.password_confirmation,
                                        expression: "form.password_confirmation"
                                      }
                                    ],
                                    ref: "password_confirmation",
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password_confirmation"
                                      )
                                    },
                                    attrs: {
                                      type: "password",
                                      name: "password_confirmation",
                                      placeholder: "Confirm Password"
                                    },
                                    domProps: {
                                      value: _vm.form.password_confirmation
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "password_confirmation",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "password_confirmation"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12 text-center" },
                              [
                                _vm.ShowOnChangeImage != null
                                  ? _c("span", [
                                      _vm.ShowOnChangeImage != null
                                        ? _c("img", {
                                            staticClass:
                                              "img-fluid img-thumbnail",
                                            staticStyle: {
                                              width: "150px",
                                              height: "auto"
                                            },
                                            attrs: {
                                              src: _vm.ShowOnChangeImage
                                            }
                                          })
                                        : _vm._e()
                                    ])
                                  : _c("span", [
                                      _vm.form.avatar == "undefined"
                                        ? _c("img", {
                                            staticClass:
                                              "img-fluid img-thumbnail",
                                            staticStyle: {
                                              width: "150px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: "../" + _vm.NoIconUrl
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.form.avatar === ""
                                        ? _c("img", {
                                            staticClass:
                                              "img-fluid img-thumbnail",
                                            staticStyle: {
                                              width: "150px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: "../" + _vm.NoIconUrl
                                            }
                                          })
                                        : _vm.form.avatar === null
                                        ? _c("img", {
                                            staticClass:
                                              "img-fluid img-thumbnail",
                                            staticStyle: {
                                              width: "150px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: "../" + _vm.NoIconUrl
                                            }
                                          })
                                        : _vm.form.avatar != ""
                                        ? _c("img", {
                                            staticClass:
                                              "img-fluid img-thumbnail focusImgOnHover",
                                            staticStyle: {
                                              width: "150px",
                                              height: "150px"
                                            },
                                            attrs: { src: _vm.form.avatar }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.deleteImageIcon
                                        ? _c("i", {
                                            staticClass: "far fa-times-circle",
                                            staticStyle: {
                                              cursor: "pointer",
                                              background: "#fff",
                                              padding: "4px 2px 2px 2px",
                                              color: "red",
                                              "border-radius": "10px",
                                              "margin-left": "-15px"
                                            },
                                            attrs: { title: "click to Delete" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteImage(
                                                  _vm.form.id
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e()
                                    ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "avatar" } }, [
                                  _vm._v("Picture")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  ref: "avatar",
                                  staticClass: "form-control",
                                  attrs: { type: "file", name: "avatar" },
                                  on: { change: _vm.onImageChange }
                                })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-danger btn-flat btn-sm close-form",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: {
                          click: function($event) {
                            return _vm.ClearForm()
                          }
                        }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-flat btn-sm",
                        attrs: { type: "submit" }
                      },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.editMode,
                                expression: "!editMode"
                              }
                            ]
                          },
                          [
                            _c("i", { staticClass: "fas fa-save" }),
                            _vm._v(" Save")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.editMode,
                                expression: "editMode"
                              }
                            ]
                          },
                          [
                            _c("i", { staticClass: "far fa-edit" }),
                            _vm._v("  Update")
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMasterForm.vue?vue&type=template&id=727b9a6a& */ "./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a&");
/* harmony import */ var _UserMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMasterForm.vue?vue&type=template&id=727b9a6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterForm.vue?vue&type=template&id=727b9a6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterForm_vue_vue_type_template_id_727b9a6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
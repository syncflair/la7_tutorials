(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EmployeeMasterForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EmployeeMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      editMode: false,
      //Use this for add edit using the same form   
      genders: [{
        name: 'Male'
      }, {
        name: 'Female'
      }],
      options: {},
      // Create a new form instance
      form: new Form({
        id: '',
        branch_id: '',
        job_title_id: '',
        emp_name: '',
        emp_father_name: '',
        emp_mother_name: '',
        emp_wife_name: '',
        emp_dob: '',
        emp_gender: '',
        emp_email: '',
        emp_phone: '',
        emp_nid: '',
        emp_passport: '',
        emp_driving_license: '',
        emp_hire_date: '',
        avatar: '',
        status_id: '',
        emp_desc: '',
        emp_qualification: '',
        emp_experience: '',
        emp_previous_job_history: '',
        emp_permanent_address: '',
        departments: [1, 2]
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['userStatus', 'jobTitles', 'branches'])),
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
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this2 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/Employee-Info')

      this.form.post('/spa/Employee-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this2.$Progress.finish();

          _this2.form.reset(); //reset from after submit	


          _this2.$refs.avatar.value = ''; //clear file input tag 

          _this2.ShowOnChangeImage = null;

          _this2.$router.push({
            path: '/spa/EmployeeMaster'
          }); //route after successfule submit	      

        }

        if (data.errors) {
          _this2.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this3 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/Employee-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this3.$Progress.finish();

          toastr.success(data.success);

          _this3.form.reset(); //reset from after submit


          _this3.editMode = false;
          _this3.$refs.avatar.value = ''; //clear file input tag 

          _this3.ShowOnChangeImage = null;

          _this3.$router.push({
            path: '/spa/EmployeeMaster'
          }); //route after successfule submit

        }

        if (data.errors) {
          _this3.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.emp_name.focus();  

        if (this.$route.params.data.departments.length === 0) {
          this.form.departments = [];
        } else {
          // this.form.departments = Object.values(this.$route.params.data.departments).filter(
          this.form.departments = Object.values(this.$route.params.data.departments).map(function (item) {
            //return item['id'];
            return item.id;
          });
        }
      }
    }
  },
  created: function created() {
    this.fillForm();
    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchJobTitles'); //get job title

    this.$store.dispatch('commonStoreForAll/fetchBranches'); //get job title
    //console.log(this.form);
  }
}); //end export Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-5 col-sm-9" }, [
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
            [_vm._v("New Employee")]
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
            [_vm._v("Update Employee")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-3 text-right" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/EmployeeMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-user-tie" }),
                _vm._v(" Employees\r\n        \t")
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-10 offset-1" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-9" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-7" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Employee Name *")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.emp_name,
                                expression: "form.emp_name"
                              }
                            ],
                            ref: "emp_name",
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("emp_name")
                            },
                            attrs: {
                              type: "text",
                              name: "emp_name",
                              placeholder: "Employee Name"
                            },
                            domProps: { value: _vm.form.emp_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "emp_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "emp_name" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-5" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "job_title_id" } }, [
                            _vm._v("Title *")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.job_title_id,
                                  expression: "form.job_title_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm-",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "job_title_id"
                                )
                              },
                              attrs: {
                                id: "job_title_id",
                                name: "job_title_id"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "job_title_id",
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
                                [_vm._v("Select Job Title ..")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.jobTitles, function(j_title) {
                                return _c(
                                  "option",
                                  {
                                    key: j_title.id,
                                    domProps: { value: j_title.id }
                                  },
                                  [_vm._v(_vm._s(j_title.job_title_name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "job_title_id" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status_id" } }, [
                            _vm._v("Status *")
                          ]),
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
                              staticClass: "form-control form-control-sm-",
                              class: {
                                "is-invalid": _vm.form.errors.has("status_id")
                              },
                              attrs: { id: "status_id", name: "status_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                                [_vm._v("Select Status ..")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.userStatus, function(u_status) {
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
                            attrs: { form: _vm.form, field: "status_id" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Join Date")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.emp_hire_date,
                                expression: "form.emp_hire_date"
                              }
                            ],
                            ref: "emp_hire_date",
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("emp_hire_date")
                            },
                            attrs: {
                              type: "date",
                              name: "emp_hire_date",
                              placeholder: "Join Date"
                            },
                            domProps: { value: _vm.form.emp_hire_date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "emp_hire_date",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "emp_hire_date" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "branch_id" } }, [
                            _vm._v("Branch *")
                          ]),
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
                              staticClass: "form-control form-control-sm-",
                              class: {
                                "is-invalid": _vm.form.errors.has("branch_id")
                              },
                              attrs: { id: "branch_id", name: "branch_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                                [_vm._v("Select Branch ..")]
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
                            attrs: { form: _vm.form, field: "branch_id" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Date of birth *")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.emp_dob,
                                expression: "form.emp_dob"
                              }
                            ],
                            ref: "emp_dob",
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("emp_dob")
                            },
                            attrs: {
                              type: "date",
                              name: "emp_dob",
                              placeholder: "Date of birth"
                            },
                            domProps: { value: _vm.form.emp_dob },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "emp_dob",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "emp_dob" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "role_id" } }, [
                            _vm._v("Gender *")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.emp_gender,
                                  expression: "form.emp_gender"
                                }
                              ],
                              staticClass: "form-control form-control-sm-",
                              class: {
                                "is-invalid": _vm.form.errors.has("emp_gender")
                              },
                              attrs: { id: "emp_gender", name: "emp_gender" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "emp_gender",
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
                                [_vm._v("Select Gender ..")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.genders, function(gender) {
                                return _c(
                                  "option",
                                  { domProps: { value: gender.name } },
                                  [
                                    _vm._v(
                                      "\r\n\t\t\t\t                  \t" +
                                        _vm._s(gender.name) +
                                        "\r\n\t\t\t\t                  "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "emp_gender" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-3" }, [
                  _c("div", { staticClass: "row pt-2" }, [
                    _c("div", { staticClass: "col-md-12 text-center" }, [
                      _vm.ShowOnChangeImage != null
                        ? _c("span", [
                            _vm.ShowOnChangeImage != null
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px",
                                    "//height": "auto"
                                  },
                                  attrs: { src: _vm.ShowOnChangeImage }
                                })
                              : _vm._e()
                          ])
                        : _c("span", [
                            _vm.form.avatar == "undefined"
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.form.avatar === ""
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm.form.avatar === null
                              ? _c("img", {
                                  staticClass: "img-fluid img-thumbnail",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.NoIconUrl }
                                })
                              : _vm.form.avatar != ""
                              ? _c("img", {
                                  staticClass:
                                    "img-fluid img-thumbnail focusImgOnHover",
                                  staticStyle: {
                                    width: "150px",
                                    height: "130px"
                                  },
                                  attrs: { src: "../" + _vm.form.avatar }
                                })
                              : _vm._e()
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "avatar" } }),
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_email,
                            expression: "form.emp_email"
                          }
                        ],
                        ref: "emp_email",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("emp_email")
                        },
                        attrs: {
                          type: "email",
                          name: "emp_email",
                          placeholder: "Email Address"
                        },
                        domProps: { value: _vm.form.emp_email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "emp_email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_email" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      staticStyle: { "margin-top": "-12px" }
                    },
                    [
                      _c("label", [_vm._v("Phone *")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "input-group input-group-sm- mb-3" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.emp_phone,
                                expression: "form.emp_phone"
                              }
                            ],
                            ref: "emp_phone",
                            staticClass: "form-control form-control-sm-",
                            class: {
                              "is-invalid": _vm.form.errors.has("emp_phone")
                            },
                            attrs: {
                              type: "number",
                              name: "emp_phone",
                              placeholder: "Enter phone number"
                            },
                            domProps: { value: _vm.form.emp_phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "emp_phone",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "emp_phone" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("NID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_nid,
                            expression: "form.emp_nid"
                          }
                        ],
                        ref: "emp_nid",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("emp_nid") },
                        attrs: {
                          type: "text",
                          name: "emp_nid",
                          placeholder: "National ID"
                        },
                        domProps: { value: _vm.form.emp_nid },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "emp_nid", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_nid" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Passport")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_passport,
                            expression: "form.emp_passport"
                          }
                        ],
                        ref: "emp_passport",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("emp_passport")
                        },
                        attrs: {
                          type: "text",
                          name: "emp_passport",
                          placeholder: "Passport Number"
                        },
                        domProps: { value: _vm.form.emp_passport },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "emp_passport",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_passport" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Driving License")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_driving_license,
                            expression: "form.emp_driving_license"
                          }
                        ],
                        ref: "emp_driving_license",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "emp_driving_license"
                          )
                        },
                        attrs: {
                          type: "text",
                          name: "emp_driving_license",
                          placeholder: "Driving License"
                        },
                        domProps: { value: _vm.form.emp_driving_license },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "emp_driving_license",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_driving_license" }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Father Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_father_name,
                            expression: "form.emp_father_name"
                          }
                        ],
                        ref: "emp_father_name",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("emp_father_name")
                        },
                        attrs: {
                          type: "text",
                          name: "emp_father_name",
                          placeholder: "Employee Father Name"
                        },
                        domProps: { value: _vm.form.emp_father_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "emp_father_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_father_name" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Mother Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_mother_name,
                            expression: "form.emp_mother_name"
                          }
                        ],
                        ref: "emp_mother_name",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("emp_mother_name")
                        },
                        attrs: {
                          type: "text",
                          name: "emp_mother_name",
                          placeholder: "Employee Mother Name"
                        },
                        domProps: { value: _vm.form.emp_mother_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "emp_mother_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_mother_name" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Wife Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.emp_wife_name,
                            expression: "form.emp_wife_name"
                          }
                        ],
                        ref: "emp_wife_name",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("emp_wife_name")
                        },
                        attrs: {
                          type: "text",
                          name: "emp_wife_name",
                          placeholder: "Employee Wife Name"
                        },
                        domProps: { value: _vm.form.emp_wife_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "emp_wife_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "emp_wife_name" }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_desc" } }, [
                    _vm._v("Details")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_desc,
                        expression: "form.emp_desc"
                      }
                    ],
                    ref: "emp_desc",
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("emp_desc") },
                    attrs: {
                      name: "emp_desc",
                      placeholder: "Employee Details"
                    },
                    domProps: { value: _vm.form.emp_desc },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "emp_desc", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_desc" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_qualification" } }, [
                    _vm._v("Qualification")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_qualification,
                        expression: "form.emp_qualification"
                      }
                    ],
                    ref: "emp_qualification",
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("emp_qualification")
                    },
                    attrs: {
                      name: "emp_qualification",
                      placeholder: "Qualification"
                    },
                    domProps: { value: _vm.form.emp_qualification },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "emp_qualification",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_qualification" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_experience" } }, [
                    _vm._v("Experience")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_experience,
                        expression: "form.emp_experience"
                      }
                    ],
                    ref: "emp_experience",
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("emp_experience")
                    },
                    attrs: {
                      name: "emp_experience",
                      placeholder: "Experience"
                    },
                    domProps: { value: _vm.form.emp_experience },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "emp_experience",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_experience" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_previous_job_history" } }, [
                    _vm._v("Previous Job History")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_previous_job_history,
                        expression: "form.emp_previous_job_history"
                      }
                    ],
                    ref: "emp_previous_job_history",
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has(
                        "emp_previous_job_history"
                      )
                    },
                    attrs: {
                      name: "emp_previous_job_history",
                      placeholder: "Job History"
                    },
                    domProps: { value: _vm.form.emp_previous_job_history },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "emp_previous_job_history",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_previous_job_history" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_Present_address" } }, [
                    _vm._v("Present Address")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_Present_address,
                        expression: "form.emp_Present_address"
                      }
                    ],
                    ref: "emp_Present_address",
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("emp_Present_address")
                    },
                    attrs: {
                      name: "emp_Present_address",
                      placeholder: "Present Address"
                    },
                    domProps: { value: _vm.form.emp_Present_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "emp_Present_address",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_Present_address" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "emp_permanent_address" } }, [
                    _vm._v("Permanent Address")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.emp_permanent_address,
                        expression: "form.emp_permanent_address"
                      }
                    ],
                    ref: "emp_permanent_address",
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("emp_permanent_address")
                    },
                    attrs: {
                      name: "emp_permanent_address",
                      placeholder: "Permanent Address"
                    },
                    domProps: { value: _vm.form.emp_permanent_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "emp_permanent_address",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "emp_permanent_address" }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mr-4" }, [
            _c("div", { staticClass: "col-12  text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-flat btn-sm ",
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
                    [_vm._v("Save")]
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
                    [_vm._v("Update")]
                  )
                ]
              )
            ])
          ])
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v(" +88 ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeMasterForm.vue?vue&type=template&id=7adcea6e& */ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e&");
/* harmony import */ var _EmployeeMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMasterForm.vue?vue&type=template&id=7adcea6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HRM/Employee/EmployeeMasterForm.vue?vue&type=template&id=7adcea6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterForm_vue_vue_type_template_id_7adcea6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
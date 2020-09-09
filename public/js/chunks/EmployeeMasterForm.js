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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      deleteImageIcon: false,
      //Delete Image icon if image exist
      editMode: false,
      //Use this for add edit using the same form   
      genders: [{
        name: 'Male'
      }, {
        name: 'Female'
      }],
      empJobStatus: [{
        name: 'Employee'
      }, {
        name: 'Terminate'
      }, {
        name: 'Fired'
      }],
      employeeJobTypes: [{
        name: 'Permanent'
      }, {
        name: 'Part time'
      }, {
        name: 'Intractual'
      }, {
        name: 'Internship'
      }],
      empPayrolls: [{
        name: 'Active'
      }, {
        name: 'Previous'
      }],
      //form multiselect app
      placeHolder: 'Select departments',
      filterBy: 'dept_name',
      valueProperty: 'id',
      // Create a new form instance
      form: new Form({
        id: '',
        branch_id: '',
        job_title_id: '',
        emp_job_type: '',
        emp_job_status: '',
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
        emp_tin: '',
        emp_hire_date: '',
        avatar: '',
        status_id: '',
        emp_desc: '',
        emp_qualification: '',
        emp_experience: '',
        emp_previous_job_history: '',
        emp_permanent_address: '',
        departments: [],
        emp_payrolls: [{
          payroll_status: '',
          basic_salary: '',
          house_rent: '',
          medical_allowance: '',
          ta_daily: '',
          ta_monthly: '',
          da_daily: '',
          da_monthly: '',
          over_time: '',
          bonuse_percent: '',
          increment_percent: '',
          payroll_desc: '',
          starting_date: ''
        }]
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['userStatus', 'jobTitles', 'branches', 'allDepertments', 'autoSearchDepartments']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('EmployeeMasterStore', ['selectedDepartmentList', 'autoSearchDepartments'])),
  methods: {
    //###################################### Payrole Function ################################################
    add_payroll: function add_payroll() {
      this.form.emp_payrolls.push({
        payroll_status: '',
        basic_salary: '',
        house_rent: '',
        medical_allowance: '',
        ta_daily: '',
        ta_monthly: '',
        da_daily: '',
        da_monthly: '',
        over_time: '',
        bonuse_percent: '',
        increment_percent: '',
        payroll_desc: '',
        starting_date: ''
      });
    },
    remove_payroll: function remove_payroll(index) {
      this.form.emp_payrolls.splice(index, 1);
    },
    //###################################### End Payrole Function ############################################
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
    deleteImage: function deleteImage(id) {
      var _this4 = this;

      this.$Progress.start(); //using progress-bar package        
      //console.log(this.form.has_many_image);

      axios.post('/spa/Employee-Info-DeleteImage/' + id).then(function (_ref3) {
        var data = _ref3.data;
        // this.ShowOnChangeImage = null;
        _this4.deleteImageIcon = false;
        _this4.form.avatar = null;

        _this4.$Progress.finish();

        toastr.success(data.success);
      })["catch"](function () {
        _this4.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.emp_name.focus(); 
        //payroll section

        if (this.$route.params.data.has_many_payroll.length === 0) {
          this.form.emp_payrolls = [{
            payroll_status: '',
            basic_salary: '',
            house_rent: '',
            medical_allowance: '',
            ta_daily: '',
            ta_monthly: '',
            da_daily: '',
            da_monthly: '',
            over_time: '',
            bonuse_percent: '',
            increment_percent: '',
            payroll_desc: '',
            starting_date: ''
          }];
        } else {
          this.form.emp_payrolls = this.$route.params.data.has_many_payroll;
        }

        if (this.$route.params.data.departments.length === 0) {
          this.form.departments = [];
        } else {
          //return only department id from depertment list 
          this.form.departments = Object.values(this.$route.params.data.departments).map(function (item) {
            //return item['id'];
            return item.id;
          });
        }

        if (this.$route.params.data.avatar != null) {
          this.deleteImageIcon = true;
        }
      } //get department list based on form.departments array ids


      this.$store.dispatch('EmployeeMasterStore/fetchSelectedDepartmentList', this.form.departments);
    },
    AutoCompleteSearchForDataDepartment: function AutoCompleteSearchForDataDepartment(data) {
      this.$store.dispatch('EmployeeMasterStore/AutoCompleteSearchForDataDepartment', data);
    },
    getSelectedDataByIdsForDepartment: function getSelectedDataByIdsForDepartment(data) {
      this.$store.dispatch('EmployeeMasterStore/fetchSelectedDepartmentList', this.form.departments);
    }
  },
  created: function created() {
    var _this5 = this;

    this.fillForm();
    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchJobTitles'); //get job title

    this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branch

    this.$store.dispatch('commonStoreForAll/fetchDepartments'); //fetchDepartments
    //call from multi-select-app-one.vue

    FireEvent.$on('AutoCompleteSearchForData', function (data) {
      _this5.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data);
    }); //console.log(this.form);
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
            [_vm._v("Update - " + _vm._s(_vm.form.emp_name))]
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
                _vm._v(" Employee List\r\n        \t")
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
            _c("div", { staticClass: "col-md-12 offset-1-" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card card-primary card-outline card-outline-tabs"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-content",
                        attrs: { id: "custom-tabs-Content" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade active show",
                            attrs: {
                              id: "tabs-body-one",
                              role: "tabpanel",
                              "aria-labelledby": "tab-one"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-9 col-sm-12" }, [
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
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
                                          "is-invalid": _vm.form.errors.has(
                                            "emp_name"
                                          )
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_name"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
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
                                          staticClass:
                                            "form-control form-control-sm-",
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Select Job Title ..")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.jobTitles, function(
                                            j_title
                                          ) {
                                            return _c(
                                              "option",
                                              {
                                                key: j_title.id,
                                                domProps: { value: j_title.id }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(j_title.job_title_name)
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "job_title_id"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.emp_job_type,
                                              expression: "form.emp_job_type"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm-",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "emp_job_type"
                                            )
                                          },
                                          attrs: {
                                            id: "emp_job_type",
                                            name: "emp_job_type"
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
                                                "emp_job_type",
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Job type ..")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.employeeJobTypes, function(
                                            jobType
                                          ) {
                                            return _c(
                                              "option",
                                              {
                                                domProps: {
                                                  value: jobType.name
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                " +
                                                    _vm._s(jobType.name) +
                                                    "\r\n                              "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_job_type"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.emp_job_status,
                                              expression: "form.emp_job_status"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm-",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "emp_job_status"
                                            )
                                          },
                                          attrs: {
                                            id: "emp_job_status",
                                            name: "emp_job_status"
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
                                                "emp_job_status",
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Job status ..")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.empJobStatus, function(
                                            ejs
                                          ) {
                                            return _c(
                                              "option",
                                              { domProps: { value: ejs.name } },
                                              [
                                                _vm._v(
                                                  "\r\n                                " +
                                                    _vm._s(ejs.name) +
                                                    "\r\n                              "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_job_status"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
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
                                            "form-control form-control-sm-",
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Select Status ..")]
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
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(6),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
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
                                            "form-control form-control-sm-",
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Select Branch ..")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.branches, function(
                                            branch
                                          ) {
                                            return _c(
                                              "option",
                                              {
                                                key: branch.id,
                                                domProps: { value: branch.id }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(branch.branch_name)
                                                )
                                              ]
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
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(7),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
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
                                          "is-invalid": _vm.form.errors.has(
                                            "emp_hire_date"
                                          )
                                        },
                                        attrs: {
                                          type: "date",
                                          name: "emp_hire_date",
                                          placeholder: "Join Date"
                                        },
                                        domProps: {
                                          value: _vm.form.emp_hire_date
                                        },
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_hire_date"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(8),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-sm-9",
                                      staticStyle: { "margin-top": "-12px" }
                                    },
                                    [
                                      _c("multi-select-app-one", {
                                        attrs: {
                                          options: _vm.selectedDepartmentList,
                                          autoSearchOptions:
                                            _vm.autoSearchDepartments,
                                          filterBy: _vm.filterBy,
                                          "place-holder": _vm.placeHolder,
                                          "value-property": _vm.valueProperty
                                        },
                                        on: {
                                          getAllDataListByIds:
                                            _vm.getSelectedDataByIdsForDepartment,
                                          AutoCompleteSearchForData:
                                            _vm.AutoCompleteSearchForDataDepartment
                                        },
                                        model: {
                                          value: _vm.form.departments,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "departments",
                                              $$v
                                            )
                                          },
                                          expression: "form.departments"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(9),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "input-group input-group-sm- mb-3"
                                      },
                                      [
                                        _vm._m(10),
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
                                          staticClass:
                                            "form-control form-control-sm-",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "emp_phone"
                                            )
                                          },
                                          attrs: {
                                            type: "number",
                                            name: "emp_phone",
                                            placeholder: "Enter phone number"
                                          },
                                          domProps: {
                                            value: _vm.form.emp_phone
                                          },
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
                                          attrs: {
                                            form: _vm.form,
                                            field: "emp_phone"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "row form-group",
                                    staticStyle: { "margin-top": "-12px" }
                                  },
                                  [
                                    _vm._m(11),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9" },
                                      [
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
                                            "is-invalid": _vm.form.errors.has(
                                              "emp_email"
                                            )
                                          },
                                          attrs: {
                                            type: "email",
                                            name: "emp_email",
                                            placeholder: "Email Address"
                                          },
                                          domProps: {
                                            value: _vm.form.emp_email
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "emp_email",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "emp_email"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                                _c("div", { staticClass: "row pt-2" }, [
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
                                                    height: "130px",
                                                    "//height": "auto"
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
                                                    height: "130px"
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
                                                    height: "130px"
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
                                                    height: "130px"
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
                                                    height: "130px"
                                                  },
                                                  attrs: {
                                                    src: _vm.form.avatar
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.deleteImageIcon
                                              ? _c("i", {
                                                  staticClass:
                                                    "far fa-times-circle",
                                                  staticStyle: {
                                                    cursor: "pointer",
                                                    background: "#fff",
                                                    padding: "4px 2px 2px 2px",
                                                    color: "red",
                                                    "border-radius": "10px",
                                                    "margin-left": "-15px"
                                                  },
                                                  attrs: {
                                                    title: "click to Delete"
                                                  },
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
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-two",
                              role: "tabpanel",
                              "aria-labelledby": "tab-two"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
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
                                          staticClass:
                                            "form-control form-control-sm-",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "emp_gender"
                                            )
                                          },
                                          attrs: {
                                            id: "emp_gender",
                                            name: "emp_gender"
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [_vm._v("Select Gender ..")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.genders, function(gender) {
                                            return _c(
                                              "option",
                                              {
                                                domProps: { value: gender.name }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                              " +
                                                    _vm._s(gender.name) +
                                                    "\r\n                            "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_gender"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(13),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
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
                                          "is-invalid": _vm.form.errors.has(
                                            "emp_dob"
                                          )
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_dob"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(14),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.emp_nid,
                                            expression: "form.emp_nid"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "emp_nid"
                                          )
                                        },
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
                                            _vm.$set(
                                              _vm.form,
                                              "emp_nid",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "emp_nid"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(15),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_passport,
                                          expression: "form.emp_passport"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_passport",
                                        placeholder: "Passport Number"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_passport
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(16),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_driving_license,
                                          expression: "form.emp_driving_license"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_driving_license",
                                        placeholder: "Driving License"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_driving_license
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(17),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_tin,
                                          expression: "form.emp_tin"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_tin",
                                        placeholder: "TIN"
                                      },
                                      domProps: { value: _vm.form.emp_tin },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "emp_tin",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(18),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_father_name,
                                          expression: "form.emp_father_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_father_name",
                                        placeholder: "Employee Father Name"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_father_name
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(19),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_mother_name,
                                          expression: "form.emp_mother_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_mother_name",
                                        placeholder: "Employee Mother Name"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_mother_name
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(20),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_wife_name,
                                          expression: "form.emp_wife_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "emp_wife_name",
                                        placeholder: "Employee Wife Name"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_wife_name
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(21),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_Present_address,
                                          expression: "form.emp_Present_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "emp_Present_address",
                                        placeholder: "Present Address"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_Present_address
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(22),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.emp_permanent_address,
                                          expression:
                                            "form.emp_permanent_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "emp_permanent_address",
                                        placeholder: "Permanent Address"
                                      },
                                      domProps: {
                                        value: _vm.form.emp_permanent_address
                                      },
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
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(23),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
                                      _c("vue-editor", {
                                        staticClass: "form-control-",
                                        attrs: {
                                          name: "emp_desc",
                                          placeholder: "Employee Details"
                                        },
                                        model: {
                                          value: _vm.form.emp_desc,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "emp_desc", $$v)
                                          },
                                          expression: "form.emp_desc"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(24),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
                                      _c("vue-editor", {
                                        staticClass: "form-control-",
                                        attrs: {
                                          name: "emp_qualification",
                                          placeholder: "Qualification"
                                        },
                                        model: {
                                          value: _vm.form.emp_qualification,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "emp_qualification",
                                              $$v
                                            )
                                          },
                                          expression: "form.emp_qualification"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(25),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
                                      _c("vue-editor", {
                                        staticClass: "form-control-",
                                        attrs: {
                                          name: "emp_experience",
                                          placeholder: "Experience"
                                        },
                                        model: {
                                          value: _vm.form.emp_experience,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "emp_experience",
                                              $$v
                                            )
                                          },
                                          expression: "form.emp_experience"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _vm._m(26),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-10" },
                                    [
                                      _c("vue-editor", {
                                        staticClass: "form-control-",
                                        attrs: {
                                          name: "emp_previous_job_history",
                                          placeholder: "Job History"
                                        },
                                        model: {
                                          value:
                                            _vm.form.emp_previous_job_history,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "emp_previous_job_history",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.emp_previous_job_history"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-three",
                              role: "tabpanel",
                              "aria-labelledby": "tab-three"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table-sm table table-striped"
                                  },
                                  [
                                    _vm._m(27),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.emp_payrolls, function(
                                      input,
                                      key
                                    ) {
                                      return _c("tr", { key: key }, [
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        input.payroll_status,
                                                      expression:
                                                        "input.payroll_status"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "emp_payrolls." +
                                                        [key] +
                                                        ".payroll_status"
                                                    )
                                                  },
                                                  attrs: {
                                                    id: "",
                                                    name: "payroll_status"
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
                                                        input,
                                                        "payroll_status",
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
                                                    {
                                                      attrs: {
                                                        disabled: "",
                                                        value: ""
                                                      }
                                                    },
                                                    [_vm._v("Select status")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.empPayrolls,
                                                    function(ep) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value: ep.name
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(ep.name)
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field:
                                                    "emp_payrolls." +
                                                    [key] +
                                                    ".payroll_status"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.basic_salary,
                                                    expression:
                                                      "input.basic_salary"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "emp_payrolls." +
                                                      [key] +
                                                      ".basic_salary"
                                                  )
                                                },
                                                attrs: {
                                                  type: "number",
                                                  name: "basic_salary"
                                                },
                                                domProps: {
                                                  value: input.basic_salary
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "basic_salary",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field:
                                                    "emp_payrolls." +
                                                    [key] +
                                                    ".basic_salary"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.house_rent,
                                                    expression:
                                                      "input.house_rent"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "house_rent"
                                                },
                                                domProps: {
                                                  value: input.house_rent
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "house_rent",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.medical_allowance,
                                                    expression:
                                                      "input.medical_allowance"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "text",
                                                  name: "medical_allowance"
                                                },
                                                domProps: {
                                                  value: input.medical_allowance
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "medical_allowance",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.ta_daily,
                                                    expression: "input.ta_daily"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "ta_daily"
                                                },
                                                domProps: {
                                                  value: input.ta_daily
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "ta_daily",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.ta_monthly,
                                                    expression:
                                                      "input.ta_monthly"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "ta_monthly"
                                                },
                                                domProps: {
                                                  value: input.ta_monthly
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "ta_monthly",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.da_daily,
                                                    expression: "input.da_daily"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "da_daily"
                                                },
                                                domProps: {
                                                  value: input.da_daily
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "da_daily",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.da_monthly,
                                                    expression:
                                                      "input.da_monthly"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "da_monthly"
                                                },
                                                domProps: {
                                                  value: input.da_monthly
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "da_monthly",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.over_time,
                                                    expression:
                                                      "input.over_time"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "over_time"
                                                },
                                                domProps: {
                                                  value: input.over_time
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "over_time",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.bonuse_percent,
                                                    expression:
                                                      "input.bonuse_percent"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "bonuse_percent"
                                                },
                                                domProps: {
                                                  value: input.bonuse_percent
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "bonuse_percent",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.increment_percent,
                                                    expression:
                                                      "input.increment_percent"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "increment_percent"
                                                },
                                                domProps: {
                                                  value: input.increment_percent
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "increment_percent",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.payroll_desc,
                                                    expression:
                                                      "input.payroll_desc"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "text",
                                                  name: "payroll_desc"
                                                },
                                                domProps: {
                                                  value: input.payroll_desc
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "payroll_desc",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.starting_date,
                                                    expression:
                                                      "input.starting_date"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "date",
                                                  name: "starting_date",
                                                  placeholder: "End Date"
                                                },
                                                domProps: {
                                                  value: input.starting_date
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "starting_date",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      key ||
                                                      (!key &&
                                                        _vm.form.emp_payrolls
                                                          .length > 1),
                                                    expression:
                                                      "key || ( !key && form.emp_payrolls.length > 1)"
                                                  }
                                                ],
                                                staticClass:
                                                  "fas fa-minus-circle danger pointer",
                                                attrs: { title: "Remove" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.remove_payroll(
                                                      key
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      key ==
                                                      _vm.form.emp_payrolls
                                                        .length -
                                                        1,
                                                    expression:
                                                      "key == form.emp_payrolls.length-1"
                                                  }
                                                ],
                                                staticClass:
                                                  "fas fa-plus-circle green pointer",
                                                attrs: { title: "Add" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.add_payroll(key)
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ]
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
                    [_c("i", { staticClass: "fas fa-save" }), _vm._v(" Save")]
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
                    [_c("i", { staticClass: "far fa-edit" }), _vm._v(" Update")]
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
    return _c("div", { staticClass: "card-header p-0 border-bottom-0" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "custom-tabs", role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  id: "tab-one",
                  "data-toggle": "pill",
                  href: "#tabs-body-one",
                  role: "tab",
                  "aria-controls": "tabs-body-one",
                  "aria-selected": "true"
                }
              },
              [_vm._v("Employment")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-two",
                  "data-toggle": "pill",
                  href: "#tabs-body-two",
                  role: "tab",
                  "aria-controls": "tabs-body-two",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Personal")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-three",
                  "data-toggle": "pill",
                  href: "#tabs-body-three",
                  role: "tab",
                  "aria-controls": "tabs-body-three",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Payrolls")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Employee Name *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Job Title *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Job Type *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Job status *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Job Status *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Branch *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Join Date *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Select Department *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Phone *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v(" +88 ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Email *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Gender *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("DOB ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("NID")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Passport")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Driving License")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("TIN")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Father Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Mother Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Wife Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Present Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Permanent Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Employee Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Qualification")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Experience")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Previous Job History")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "6%" } }, [_vm._v("Status")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%", title: "Basic salary" } }, [
        _vm._v("Basic")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%", title: "House Rent" } }, [
        _vm._v("H.Rent")
      ]),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "6%", title: "Madical Allowance per month" } },
        [_vm._v("Medical")]
      ),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Transport Allowance Daily" } }, [
        _vm._v("TA.D")
      ]),
      _vm._v(" "),
      _c(
        "th",
        { attrs: { width: "5%", title: "Transport Allowance Monthly" } },
        [_vm._v("TA.M")]
      ),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Daily Allowance Daily" } }, [
        _vm._v("DA.D")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Daily Allowance Monthly" } }, [
        _vm._v("DA.M")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Over time rate per hour" } }, [
        _vm._v("O.T")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Bonues Percent" } }, [
        _vm._v("B.%")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%", title: "Salary Increment Percent" } }, [
        _vm._v("Inc.%")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "10%", title: "Details" } }, [
        _vm._v("Details")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "1%", title: "Starting From" } }, [
        _vm._v("S.Date")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { width: "1%" } }, [_c("strong", [_vm._v("...")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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
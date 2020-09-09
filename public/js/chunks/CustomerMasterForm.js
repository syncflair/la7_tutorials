(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CustomerMasterForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customerMasterFormForAdmin",
  data: function data() {
    return {
      editMode: false,
      //Use this for add edit using the same form   
      //   CustomerGroups: [
      //   { name: 'Default' },
      //   { name: 'Wholesale' },
      // ],
      // Create a new form instance
      form: new Form({
        id: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        //customer_group:'',
        status_id: '',
        customer_group_id: '',
        customer_membership_id: '',
        enable_notify: '',
        customer_address: [{
          customer_name: '',
          company: '',
          address_1: '',
          address_2: '',
          country_id: '',
          division_id: '',
          district_id: '',
          area_zone_id: '',
          city: '',
          zip: '',
          default_address: ''
        }]
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CustomerForAdminStore', ['pagination']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['userStatus', 'allCustomerGroups', 'allCustomerMemberships', 'Countries', 'Divisions', 'Districts', 'Dist_Zones'])),
  methods: {
    //###################################### Address Function ################################################
    add_payroll: function add_payroll() {
      this.form.customer_address.push({
        customer_name: '',
        company: '',
        address_1: '',
        address_2: '',
        country_id: '',
        division_id: '',
        district_id: '',
        area_zone_id: '',
        city: '',
        zip: '',
        default_address: ''
      });
    },
    remove_payroll: function remove_payroll(index) {
      this.form.customer_address.splice(index, 1);
    },
    //###################################### End Address Function ############################################
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/Customer-Info')

      this.form.post('/spa/customer-Info').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this.$Progress.finish();

          _this.form.reset(); //reset from after submit


          _this.$router.push({
            path: '/spa/CustomerMaster'
          }); //route after successfule submit		      

        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this2 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/customer-Info/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this2.$Progress.finish();

          toastr.success(data.success);

          _this2.form.reset(); //reset from after submit


          _this2.editMode = false;

          _this2.$router.push({
            path: '/spa/CustomerMaster'
          }); //route after successfule submit
          //  this.$refs.name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use

        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

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

        if (this.$route.params.data.has_many_address.length === 0) {
          this.form.customer_address = [{
            customer_name: '',
            company: '',
            address_1: '',
            address_2: '',
            country_id: '',
            division_id: '',
            district_id: '',
            area_zone_id: '',
            city: '',
            zip: '',
            default_address: ''
          }];
        } else {
          this.form.customer_address = this.$route.params.data.has_many_address;
        }
      }
    },
    getDivision: function getDivision(e) {
      // alert(e.target.value);
      var data = e.target.value;
      this.$store.dispatch('commonStoreForAll/fetchDivisionList', data); //get Division
    },
    getDistrict: function getDistrict(e) {
      var data = e.target.value;
      this.$store.dispatch('commonStoreForAll/fetchDistrictList', data); //get Division
    },
    getDistrictZone: function getDistrictZone(e) {
      var data = e.target.value;
      this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', data); //get District Zone
    }
  },
  created: function created() {
    var _this3 = this;

    this.fillForm();
    this.$store.dispatch('commonStoreForAll/userStatus'); //get user status

    this.$store.dispatch('commonStoreForAll/fetchCustomerGroups'); //get customer Groups

    this.$store.dispatch('commonStoreForAll/fetchCustomerMemberships'); //get customer Memberships

    this.$store.dispatch('commonStoreForAll/fetchCountryList'); //get country

    this.$store.dispatch('commonStoreForAll/fetchDivisionList', ''); //get Division

    this.$store.dispatch('commonStoreForAll/fetchDistrictList', ''); //get District

    this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', ''); //get zone Area

    FireEvent.$on('AfterChange', function () {
      _this3.$Progress.start();

      _this3.$store.dispatch('CustomerForAdminStore/fetchData', _this3.pagination.per_page);

      _this3.$Progress.finish();
    }); //this event call from CustomerList component
    // FireEvent.$on('editCustomer', (data) => {
    //      //alert(data.id);
    //      //this.form.fill(data);   //this is also work
    //      this.editCustomer(data);
    //    });
    //this event call from CustomerList component
    // FireEvent.$on('addCustomer', () => {
    //   this.addCustomer();
    // });
    //console.log(this.form);
  }
}); //end export Default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
            [_vm._v("New Customer")]
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
            [_vm._v("Update - " + _vm._s(_vm.form.name))]
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
                attrs: { to: "/spa/CustomerMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-user-tie" }),
                _vm._v(" Customer List\r\n        \t")
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
                              _c("div", { staticClass: "col-md-12" }, [
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
                                            value: _vm.form.name,
                                            expression: "form.name"
                                          }
                                        ],
                                        ref: "name",
                                        staticClass:
                                          "form-control form-control-sm",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "name"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "name",
                                          placeholder: "Customer Name"
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
                                        staticClass:
                                          "form-control form-control-sm",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "email"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "email",
                                          placeholder: "Enter Email"
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "email"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "row form-group mb-0" },
                                  [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "input-group input-group-sm mb-3"
                                        },
                                        [
                                          _vm._m(4),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.phone,
                                                expression: "form.phone"
                                              }
                                            ],
                                            ref: "phone",
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid": _vm.form.errors.has(
                                                "phone"
                                              )
                                            },
                                            attrs: {
                                              type: "number",
                                              name: "phone",
                                              placeholder: "Enter phone number"
                                            },
                                            domProps: { value: _vm.form.phone },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.form,
                                                  "phone",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("has-error", {
                                            attrs: {
                                              form: _vm.form,
                                              field: "phone"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  ]
                                ),
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
                                              value: _vm.form.customer_group_id,
                                              expression:
                                                "form.customer_group_id"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "customer_group_id"
                                            )
                                          },
                                          attrs: {
                                            id: "customer_group_id",
                                            name: "customer_group_id"
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
                                                "customer_group_id",
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
                                            [_vm._v("Select customer Group")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.allCustomerGroups,
                                            function(c_group) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: {
                                                    value: c_group.id
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n\t\t\t                  \t" +
                                                      _vm._s(
                                                        c_group.group_name
                                                      ) +
                                                      "\r\n\t\t\t                  "
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
                                          field: "customer_group_id"
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
                                              value:
                                                _vm.form.customer_membership_id,
                                              expression:
                                                "form.customer_membership_id"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "customer_membership_id"
                                            )
                                          },
                                          attrs: {
                                            id: "customer_membership_id",
                                            name: "customer_membership_id"
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
                                                "customer_membership_id",
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
                                            [_vm._v("Select membership")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.allCustomerMemberships,
                                            function(cus_mem) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: {
                                                    value: cus_mem.id
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n\t\t\t\t                  \t" +
                                                      _vm._s(
                                                        cus_mem.membership_title
                                                      ) +
                                                      "\r\n\t\t\t\t                "
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
                                          field: "customer_membership_id"
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
                                            {
                                              attrs: { disabled: "", value: "" }
                                            },
                                            [
                                              _vm._v(
                                                "Select Customer Status .."
                                              )
                                            ]
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
                                _c(
                                  "div",
                                  { staticClass: "row form-group mb-0" },
                                  [
                                    _vm._m(8),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-md-6 col-sm-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("label", [
                                                  _vm._v(" Password  "),
                                                  _c(
                                                    "span",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            _vm.editMode ===
                                                            false,
                                                          expression:
                                                            "editMode === false"
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
                                                      expression:
                                                        "form.password"
                                                    }
                                                  ],
                                                  ref: "password",
                                                  staticClass:
                                                    "form-control form-control-sm",
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
                                                  domProps: {
                                                    value: _vm.form.password
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                  attrs: {
                                                    form: _vm.form,
                                                    field: "password"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-md-6 col-sm-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("label", [
                                                  _vm._v("Confirm Password")
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .password_confirmation,
                                                      expression:
                                                        "form.password_confirmation"
                                                    }
                                                  ],
                                                  ref: "password_confirmation",
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "password_confirmation"
                                                    )
                                                  },
                                                  attrs: {
                                                    type: "password",
                                                    name:
                                                      "password_confirmation",
                                                    placeholder:
                                                      "Confirm Password"
                                                  },
                                                  domProps: {
                                                    value:
                                                      _vm.form
                                                        .password_confirmation
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                    field:
                                                      "password_confirmation"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row form-group" }, [
                                  _c("div", {
                                    staticClass: "col-sm-3 text-right"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("div", { staticClass: "form-check" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.enable_notify,
                                            expression: "form.enable_notify"
                                          }
                                        ],
                                        ref: "enable_notify",
                                        staticClass: "form-check-input",
                                        attrs: {
                                          type: "checkbox",
                                          name: "enable_notify",
                                          id: "checkbox",
                                          value: "1"
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.form.enable_notify
                                          )
                                            ? _vm._i(
                                                _vm.form.enable_notify,
                                                "1"
                                              ) > -1
                                            : _vm.form.enable_notify
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.form.enable_notify,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = "1",
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "enable_notify",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "enable_notify",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.form,
                                                "enable_notify",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-check-label",
                                          attrs: { for: "checkbox" }
                                        },
                                        [_vm._v("Notification")]
                                      )
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
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                _vm._l(_vm.form.customer_address, function(
                                  input,
                                  key
                                ) {
                                  return _c(
                                    "div",
                                    { key: key, staticClass: "card" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-header",
                                          staticStyle: {
                                            "background-color":
                                              "rgba(0, 0, 0, 0.03)"
                                          }
                                        },
                                        [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-md-6" },
                                              [
                                                _c("strong", [
                                                  _vm._v(
                                                    "Address " +
                                                      _vm._s(key + 1) +
                                                      " "
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-md-6 text-right"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "form-group-"
                                                  },
                                                  [
                                                    _c("i", {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            key ||
                                                            (!key &&
                                                              _vm.form
                                                                .customer_address
                                                                .length > 1),
                                                          expression:
                                                            "key || ( !key && form.customer_address.length > 1)"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "fas fa-minus-circle danger pointer",
                                                      attrs: {
                                                        title: "Remove"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
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
                                                            _vm.form
                                                              .customer_address
                                                              .length -
                                                              1,
                                                          expression:
                                                            "key == form.customer_address.length-1"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "fas fa-plus-circle green pointer",
                                                      attrs: { title: "Add" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.add_payroll(
                                                            key
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "card-body" }, [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-5" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Customer Name*")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          input.customer_name,
                                                        expression:
                                                          "input.customer_name"
                                                      }
                                                    ],
                                                    ref: "customer_name",
                                                    refInFor: true,
                                                    staticClass:
                                                      "form-control form-control-sm",
                                                    class: {
                                                      "is-invalid": _vm.form.errors.has(
                                                        "customer_name"
                                                      )
                                                    },
                                                    attrs: {
                                                      type: "text",
                                                      name: "customer_name",
                                                      placeholder:
                                                        "Customer Name"
                                                    },
                                                    domProps: {
                                                      value: input.customer_name
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "customer_name",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("has-error", {
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "customer_name"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-5" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Company")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: input.company,
                                                        expression:
                                                          "input.company"
                                                      }
                                                    ],
                                                    ref: "company",
                                                    refInFor: true,
                                                    staticClass:
                                                      "form-control form-control-sm",
                                                    attrs: {
                                                      type: "text",
                                                      name: "company",
                                                      placeholder:
                                                        "Company Name"
                                                    },
                                                    domProps: {
                                                      value: input.company
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "company",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-2 mt-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-check" },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          input.default_address,
                                                        expression:
                                                          "input.default_address"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "form-check-input",
                                                    attrs: {
                                                      type: "checkbox",
                                                      name: "default_address",
                                                      value: "1"
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        input.default_address
                                                      )
                                                        ? _vm._i(
                                                            input.default_address,
                                                            "1"
                                                          ) > -1
                                                        : input.default_address
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a =
                                                            input.default_address,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = "1",
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                input,
                                                                "default_address",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                input,
                                                                "default_address",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            input,
                                                            "default_address",
                                                            $$c
                                                          )
                                                        }
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "form-check-label",
                                                      attrs: { for: "checkbox" }
                                                    },
                                                    [_vm._v(" Default")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Address 1 *")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: input.address_1,
                                                        expression:
                                                          "input.address_1"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      name: "address_1",
                                                      placeholder: "Address 1"
                                                    },
                                                    domProps: {
                                                      value: input.address_1
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "address_1",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("has-error", {
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "address_1"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Address 2")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: input.address_2,
                                                        expression:
                                                          "input.address_2"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      name: "address_2",
                                                      placeholder: "Address 2"
                                                    },
                                                    domProps: {
                                                      value: input.address_2
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "address_2",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Country *")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            input.country_id,
                                                          expression:
                                                            "input.country_id"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      class: {
                                                        "is-invalid": _vm.form.errors.has(
                                                          "country_id"
                                                        )
                                                      },
                                                      attrs: {
                                                        id: "country_id",
                                                        name: "country_id"
                                                      },
                                                      on: {
                                                        change: [
                                                          function($event) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
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
                                                              "country_id",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          },
                                                          function($event) {
                                                            return _vm.getDivision(
                                                              $event
                                                            )
                                                          }
                                                        ]
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
                                                        [
                                                          _vm._v(
                                                            "Select country"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.Countries,
                                                        function(country) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value:
                                                                  country.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n\t\t\t\t\t                  \t" +
                                                                  _vm._s(
                                                                    country.country_name
                                                                  ) +
                                                                  " - " +
                                                                  _vm._s(
                                                                    country.phone_code
                                                                  ) +
                                                                  "\r\n\t\t\t\t\t                  "
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
                                                      field: "country_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Division /State *")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            input.division_id,
                                                          expression:
                                                            "input.division_id"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      class: {
                                                        "is-invalid": _vm.form.errors.has(
                                                          "division_id"
                                                        )
                                                      },
                                                      attrs: {
                                                        id: "division_id",
                                                        name: "division_id"
                                                      },
                                                      on: {
                                                        change: [
                                                          function($event) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
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
                                                              "division_id",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          },
                                                          function($event) {
                                                            return _vm.getDistrict(
                                                              $event
                                                            )
                                                          }
                                                        ]
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
                                                        [
                                                          _vm._v(
                                                            "Select division / state"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.Divisions,
                                                        function(division) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value:
                                                                  division.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n\t\t\t\t\t                  \t" +
                                                                  _vm._s(
                                                                    division.division_name
                                                                  ) +
                                                                  "\r\n\t\t\t\t\t                  "
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
                                                      field: "division_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("District / City *")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            input.district_id,
                                                          expression:
                                                            "input.district_id"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      class: {
                                                        "is-invalid": _vm.form.errors.has(
                                                          "district_id"
                                                        )
                                                      },
                                                      attrs: {
                                                        id: "district_id",
                                                        name: "district_id"
                                                      },
                                                      on: {
                                                        change: [
                                                          function($event) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
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
                                                              "district_id",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          },
                                                          function($event) {
                                                            return _vm.getDistrictZone(
                                                              $event
                                                            )
                                                          }
                                                        ]
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
                                                        [
                                                          _vm._v(
                                                            "Select district / city"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.Districts,
                                                        function(district) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value:
                                                                  district.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n\t\t\t\t\t                  \t" +
                                                                  _vm._s(
                                                                    district.district_name
                                                                  ) +
                                                                  "\r\n\t\t\t\t\t                  "
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
                                                      field: "district_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v(
                                                      "Zone / Area / Zip *"
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            input.area_zone_id,
                                                          expression:
                                                            "input.area_zone_id"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      class: {
                                                        "is-invalid": _vm.form.errors.has(
                                                          "area_zone_id"
                                                        )
                                                      },
                                                      attrs: {
                                                        id: "area_zone_id",
                                                        name: "area_zone_id"
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$selectedVal = Array.prototype.filter
                                                            .call(
                                                              $event.target
                                                                .options,
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
                                                            "area_zone_id",
                                                            $event.target
                                                              .multiple
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
                                                        [
                                                          _vm._v(
                                                            "Zone / Area / Zip"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.Dist_Zones,
                                                        function(zone) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value: zone.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n\t\t\t\t\t                  \t" +
                                                                  _vm._s(
                                                                    zone.zone_name
                                                                  ) +
                                                                  " - " +
                                                                  _vm._s(
                                                                    zone.zip_code
                                                                  ) +
                                                                  "\r\n\t\t\t\t\t                  "
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
                                                      field: "area_zone_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [_vm._v("City")]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: input.city,
                                                        expression: "input.city"
                                                      }
                                                    ],
                                                    ref: "city",
                                                    refInFor: true,
                                                    staticClass:
                                                      "form-control form-control-sm",
                                                    attrs: {
                                                      type: "text",
                                                      name: "city",
                                                      placeholder: "City"
                                                    },
                                                    domProps: {
                                                      value: input.city
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "city",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [_vm._v("Zip")]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: input.zip,
                                                        expression: "input.zip"
                                                      }
                                                    ],
                                                    ref: "zip",
                                                    refInFor: true,
                                                    staticClass:
                                                      "form-control form-control-sm",
                                                    attrs: {
                                                      type: "text",
                                                      name: "zip",
                                                      placeholder: "zip"
                                                    },
                                                    domProps: {
                                                      value: input.zip
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          input,
                                                          "zip",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
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
              [_vm._v("Customer Details")]
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
              [_vm._v("Customer Address")]
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
      _c("label", [_vm._v("Customer Name *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", [_vm._v("Email *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", [_vm._v("Phone *")])
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
      _c("label", { attrs: { for: "role_id" } }, [_vm._v("Customer Group *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { attrs: { for: "role_id" } }, [_vm._v("Membership *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { attrs: { for: "role_id" } }, [_vm._v("Status *")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", { staticClass: "pt-3", attrs: { for: "role_id" } }, [
        _vm._v("password")
      ])
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

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerMasterForm.vue?vue&type=template&id=a2e0217a& */ "./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a&");
/* harmony import */ var _CustomerMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerMasterForm.vue?vue&type=template&id=a2e0217a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Customers/Customers/CustomerMasterForm.vue?vue&type=template&id=a2e0217a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterForm_vue_vue_type_template_id_a2e0217a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
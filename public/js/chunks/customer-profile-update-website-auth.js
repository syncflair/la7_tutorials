(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-profile-update-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Include/NavForAdminCustomer */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customer-Profile-Update-website-auth",
  data: function data() {
    return {
      //for change email address management
      change_email: false,
      change_phone: false,
      gender_type: [{
        name: 'Male'
      }, {
        name: 'Female'
      }, {
        name: 'Other'
      }],
      //editMode: false, //Use this for add edit using the same form 
      form: new Form({
        id: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        old_password: '',
        password_confirmation: '',
        gender: '',
        date_of_birth: '',
        email_verification_code: '',
        new_email: '',
        phone_verification_code: '',
        new_phone: ''
      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('AuthenticationForCustomer', ['authCustomer'])),
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    editData: function editData(data) {
      //this.editMode = true;
      this.form.fill(data);
    },
    CustomerProfileUpdate: function CustomerProfileUpdate() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerProfileUpdate').then(function (_ref) {
        var data = _ref.data;

        _this.$Progress.finish();

        if (data.success) {
          _this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
        }

        if (data.error) {
          _this.$Progress.fail();

          toastr.warning(data.error);
        } //console.log(data);

      })["catch"](function (data) {
        _this.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    SendCustomerEmailChangeVerificationCode: function SendCustomerEmailChangeVerificationCode() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/SendCustomerEmailChangeVerificationCode').then(function (_ref2) {
        var data = _ref2.data;

        _this2.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this2.change_email = true;
        }

        if (data.error) {
          _this2.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this2.$Progress.fail(); //toastr.warning('The given data was invalid.');
        // console.log(data.message);

      });
    },
    CustomerChangeEmail: function CustomerChangeEmail() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangeEmail').then(function (_ref3) {
        var data = _ref3.data;

        _this3.$Progress.finish();

        if (data.success) {
          _this3.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
          _this3.change_email = false;
          _this3.form.new_email = '';
          _this3.form.email_verification_code = '';
        }

        if (data.error) {
          _this3.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this3.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    CancelChangeEmail: function CancelChangeEmail() {
      this.change_email = false;
      this.form.new_email = '';
      this.form.email_verification_code = '';
    },
    SendCustomerPhoneChangeVerificationCode: function SendCustomerPhoneChangeVerificationCode() {
      var _this4 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/SendCustomerPhoneChangeVerificationCode').then(function (_ref4) {
        var data = _ref4.data;

        _this4.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this4.change_phone = true;
        }

        if (data.error) {
          _this4.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this4.$Progress.fail(); //toastr.warning('The given data was invalid.');

      });
    },
    CustomerChangePhone: function CustomerChangePhone() {
      var _this5 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangePhone').then(function (_ref5) {
        var data = _ref5.data;

        _this5.$Progress.finish();

        if (data.success) {
          _this5.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
          _this5.change_phone = false;
          _this5.form.new_phone = '';
          _this5.form.phone_verification_code = '';
        }

        if (data.error) {
          _this5.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this5.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    CancelChangePhone: function CancelChangePhone() {
      this.change_phone = false;
      this.form.new_phone = '';
      this.form.phone_verification_code = '';
    },
    CustomerChangePassword: function CustomerChangePassword() {
      var _this6 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangePassword').then(function (_ref6) {
        var data = _ref6.data;

        _this6.$Progress.finish();

        if (data.success) {
          //this.form.reset();  //reset from after submit
          _this6.form.old_password = '';
          _this6.form.password = '';
          _this6.form.password_confirmation = '';

          _this6.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data                         


          toastr.success(data.success); //console.log(data.success); 
        }

        if (data.error) {
          _this6.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this6.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    }
  },
  created: function created() {
    this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 

    this.editData(this.authCustomer);
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mb-10 mt-4" }, [
      _c(
        "div",
        { staticClass: "d-none- d-xl-block col-xl-2 col-wd-2gdot5-" },
        [_c("NavForAdminCustomer")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-" },
        [
          _c("div", { staticClass: "row " }, [
            _c("div", { staticClass: "col-lg-12  col- order-lg-1" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-content",
                  attrs: { id: "pills-tabContent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2 show active",
                      attrs: {
                        id: "pills-one-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-one-example1-tab"
                      }
                    },
                    [
                      _c(
                        "form",
                        {
                          staticClass: "js-validate-",
                          attrs: { novalidate: "novalidate-" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.CustomerProfileUpdate()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row text-center-" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Full Name ")
                                  ]),
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
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("name")
                                    },
                                    attrs: { type: "text" },
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
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Gender ")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.gender,
                                          expression: "form.gender"
                                        }
                                      ],
                                      staticClass:
                                        "form-control js-select- selectpicker- dropdown-select",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "gender"
                                        )
                                      },
                                      attrs: {
                                        "data-style":
                                          "form-control border-color-1 font-weight-normal",
                                        name: "gender"
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
                                            "gender",
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
                                        [_vm._v("Select gender ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.gender_type, function(gt) {
                                        return _c(
                                          "option",
                                          { domProps: { value: gt.name } },
                                          [
                                            _vm._v(
                                              "\n                                                      " +
                                                _vm._s(gt.name) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "gender" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v("Dath of Birth")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.date_of_birth,
                                        expression: "form.date_of_birth"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "date_of_birth"
                                      )
                                    },
                                    attrs: { type: "date", placeholder: "" },
                                    domProps: { value: _vm.form.date_of_birth },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "date_of_birth",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "date_of_birth"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-two-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-two-example1-tab"
                      }
                    },
                    [
                      !_vm.change_email
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-3 col-6 offset-3 mb-1 col-6-"
                            },
                            [
                              _c(
                                "dir",
                                { staticClass: "row" },
                                [
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          " mb-0 pb-1 pl-2- font-size-14"
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-1" }, [
                                      _vm._v(
                                        " " + _vm._s(_vm.authCustomer.email)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 text-left" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary-dark-w px-5",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.SendCustomerEmailChangeVerificationCode()
                                              }
                                            }
                                          },
                                          [_vm._v("Change Email")]
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.change_email
                        ? _c(
                            "form",
                            {
                              staticClass: "js-validate-",
                              attrs: { novalidate: "novalidate-" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.CustomerChangeEmail()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-white- text-secondary mb-3"
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v("Existing email:")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-blue" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.authCustomer.email)
                                            )
                                          ]
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
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-6" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("New email")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.new_email,
                                              expression: "form.new_email"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "new_email"
                                            )
                                          },
                                          attrs: {
                                            type: "new_email",
                                            placeholder:
                                              "Enter your new email address"
                                          },
                                          domProps: {
                                            value: _vm.form.new_email
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "new_email",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "new_email"
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
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-3" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("Verification Code")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.form
                                                  .email_verification_code,
                                              expression:
                                                "form.email_verification_code"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "email_verification_code"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Enter your verification code"
                                          },
                                          domProps: {
                                            value:
                                              _vm.form.email_verification_code
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "email_verification_code",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "email_verification_code"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.change_email
                                ? _c("dir", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 offset-md-3" },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "small text-muted" },
                                          [
                                            _vm._v(
                                              "Check your email to verification code, if did't get "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.SendCustomerEmailChangeVerificationCode()
                                                  }
                                                }
                                              },
                                              [_vm._v(" Resend")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-3 text-right" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.CancelChangePhone()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Save Email")]
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-three-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-three-example1-tab"
                      }
                    },
                    [
                      !_vm.change_phone
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-3 col-6 offset-3 mb-1 col-6-"
                            },
                            [
                              _c(
                                "dir",
                                { staticClass: "row" },
                                [
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          " mb-0 pb-1 pl-2- font-size-14"
                                      },
                                      [_vm._v("Phone")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-1" }, [
                                      _vm._v(
                                        " " + _vm._s(_vm.authCustomer.phone)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 text-left" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary-dark-w px-5",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.SendCustomerPhoneChangeVerificationCode()
                                              }
                                            }
                                          },
                                          [_vm._v("Change Phone")]
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.change_phone
                        ? _c(
                            "form",
                            {
                              staticClass: "js-validate-",
                              attrs: { novalidate: "novalidate-" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.CustomerChangePhone()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-white- text-secondary mb-3"
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v("Existing phone:")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-blue" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.authCustomer.phone)
                                            )
                                          ]
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
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-6" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("New Phone")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _vm._m(2),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.form.new_phone,
                                                  expression: "form.new_phone"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid": _vm.form.errors.has(
                                                  "new_phone"
                                                )
                                              },
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter your new phone"
                                              },
                                              domProps: {
                                                value: _vm.form.new_phone
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form,
                                                    "new_phone",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("has-error", {
                                              attrs: {
                                                form: _vm.form,
                                                field: "new_phone"
                                              }
                                            })
                                          ],
                                          1
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
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-3" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("Verification Code")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.form
                                                  .phone_verification_code,
                                              expression:
                                                "form.phone_verification_code"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "phone_verification_code"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Enter your verification code"
                                          },
                                          domProps: {
                                            value:
                                              _vm.form.phone_verification_code
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "phone_verification_code",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "phone_verification_code"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.change_email
                                ? _c("dir", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 offset-md-3" },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "small text-muted" },
                                          [
                                            _vm._v(
                                              "Check your phone to verification code, if did't get "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.SendCustomerPhoneChangeVerificationCode()
                                                  }
                                                }
                                              },
                                              [_vm._v(" Resend")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-3 text-right" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.CancelChangeEmail()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Save Phone")]
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-four-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-four-example1-tab"
                      }
                    },
                    [
                      _c(
                        "form",
                        {
                          staticClass: "js-validate-",
                          attrs: { novalidate: "novalidate-" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.CustomerChangePassword()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Old Password ")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.old_password,
                                        expression: "form.old_password"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "old_password"
                                      )
                                    },
                                    attrs: { type: "password" },
                                    domProps: { value: _vm.form.old_password },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "old_password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "old_password"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" New Password ")
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
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password"
                                      )
                                    },
                                    attrs: { type: "password" },
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
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Retype Password ")
                                  ]),
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
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password_confirmation"
                                      )
                                    },
                                    attrs: { type: "password" },
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
                          ]),
                          _vm._v(" "),
                          _vm._m(3)
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "position-relative bg-white- text-center- text-left z-index-2 pb-3"
      },
      [
        _c(
          "ul",
          {
            staticClass:
              "nav nav-classic nav-tab justify-content-left justify-content-center-",
            attrs: { id: "pills-tab", role: "tablist" }
          },
          [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom active ",
                  attrs: {
                    id: "pills-one-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-one-example1",
                    role: "tab",
                    "aria-controls": "pills-one-example1",
                    "aria-selected": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            General Details\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-two-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-two-example1",
                    role: "tab",
                    "aria-controls": "pills-two-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Email\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-three-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-three-example1",
                    role: "tab",
                    "aria-controls": "pills-three-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Phone\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-four-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-four-example1",
                    role: "tab",
                    "aria-controls": "pills-three-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Password\n                                        "
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary-dark-w px-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "signinPhoneLabel" } },
        [
          _vm._v(
            " +88\n                                                        "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary-dark-w px-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save Password")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerProfileUpdate.vue?vue&type=template&id=51785706& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&");
/* harmony import */ var _CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerProfileUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerProfileUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerProfileUpdate.vue?vue&type=template&id=51785706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
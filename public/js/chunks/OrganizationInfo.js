(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OrganizationInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrganizationInfo",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      // Create a new form instance
      form: new Form({
        id: '',
        org_name: '',
        org_business_type: '',
        org_desc: '',
        org_license_desc: '',
        closing_period: '',
        org_email: '',
        org_phone: '',
        org_url: '',
        org_address: '',
        city: '',
        state: '',
        country: '',
        org_logo: ''
      })
    };
  },
  //end data
  methods: {
    fetchOrgInfo: function fetchOrgInfo() {
      var _this = this;

      //axios.get('http://127.0.0.1:8000/spa/OrgInfo')
      axios.get('/spa/OrgInfo/1/edit').then(function (response) {
        _this.form.fill(response.data); //console.log(response.data);

      })["catch"](function (errors) {
        //console.log(errors); 
        toastr.warning('Something is wrong!');
      });
    },
    updateOrganizationInfo: function updateOrganizationInfo() {
      this.form.put('/spa/OrgInfo/' + this.form.id).then(function (_ref) {
        var data = _ref.data;

        //console.log(data.data);
        if (data.success) {
          toastr.success(data.success);
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        toastr.warning('Something is wrong!');
      });
    },
    //Make image as base64 
    onImageChange: function onImageChange(e) {
      var _this2 = this;

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
          _this2.form.org_logo = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    }
  },
  //end Methods
  created: function created() {
    this.fetchOrgInfo();
  }
}); //end export default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "card vue-card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row mt-1 mb-4" }, [
            _c(
              "div",
              { staticClass: "col-md-10 col-sm-10 offset-md-1 text-right-" },
              [
                _c(
                  "div",
                  { staticClass: "card vue-card-item border-lef-style" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body card-body-custome" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateOrganizationInfo()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "card--" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-7 col-sm-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [
                                      _vm._v("Organization Name *")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.org_name,
                                          expression: "form.org_name"
                                        }
                                      ],
                                      ref: "org_name",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "org_name"
                                        )
                                      },
                                      attrs: {
                                        type: "text",
                                        name: "org_name",
                                        placeholder: "Organization Name"
                                      },
                                      domProps: { value: _vm.form.org_name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "org_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "org_name"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("Business Type")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.org_business_type,
                                              expression:
                                                "form.org_business_type"
                                            }
                                          ],
                                          ref: "org_business_type",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "org_business_type"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "org_business_type",
                                            placeholder: "Enter business type"
                                          },
                                          domProps: {
                                            value: _vm.form.org_business_type
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "org_business_type",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "org_business_type"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("Closing period")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.closing_period,
                                              expression: "form.closing_period"
                                            }
                                          ],
                                          ref: "closing_period",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "closing_period"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "closing_period",
                                            placeholder: "Closing period"
                                          },
                                          domProps: {
                                            value: _vm.form.closing_period
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "closing_period",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "closing_period"
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
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "org_desc" } },
                                      [_vm._v("Business Descsiption")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.org_desc,
                                          expression: "form.org_desc"
                                        }
                                      ],
                                      ref: "org_desc",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "org_desc"
                                        )
                                      },
                                      attrs: {
                                        name: "org_desc",
                                        placeholder: "Business Descsiption"
                                      },
                                      domProps: { value: _vm.form.org_desc },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "org_desc",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "org_desc"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("License Details")]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.org_license_desc,
                                          expression: "form.org_license_desc"
                                        }
                                      ],
                                      ref: "org_license_desc",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "org_license_desc"
                                        )
                                      },
                                      attrs: {
                                        name: "org_license_desc",
                                        placeholder: "License Details"
                                      },
                                      domProps: {
                                        value: _vm.form.org_license_desc
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "org_license_desc",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "org_license_desc"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("Address")]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.org_address,
                                          expression: "form.org_address"
                                        }
                                      ],
                                      ref: "org_address",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "org_address"
                                        )
                                      },
                                      attrs: {
                                        name: "org_address",
                                        placeholder: "Address"
                                      },
                                      domProps: { value: _vm.form.org_address },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "org_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "org_address"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-4" }, [
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
                                              value: _vm.form.city,
                                              expression: "form.city"
                                            }
                                          ],
                                          ref: "city",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "city"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "city",
                                            placeholder: "City"
                                          },
                                          domProps: { value: _vm.form.city },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "city",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "city"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("State")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.state,
                                              expression: "form.state"
                                            }
                                          ],
                                          ref: "state",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "state"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "state",
                                            placeholder: "State"
                                          },
                                          domProps: { value: _vm.form.state },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "state",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "state"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("Country")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.country,
                                              expression: "form.country"
                                            }
                                          ],
                                          ref: "country",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "country"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "country",
                                            placeholder: "Country"
                                          },
                                          domProps: { value: _vm.form.country },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "country",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "country"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-5 col-sm-6" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("Phone")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.org_phone,
                                              expression: "form.org_phone"
                                            }
                                          ],
                                          ref: "org_phone",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "org_phone"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "org_phone",
                                            placeholder: "Phone"
                                          },
                                          domProps: {
                                            value: _vm.form.org_phone
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "org_phone",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "org_phone"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
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
                                              value: _vm.form.org_email,
                                              expression: "form.org_email"
                                            }
                                          ],
                                          ref: "org_email",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "org_email"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "org_email",
                                            placeholder: "Email"
                                          },
                                          domProps: {
                                            value: _vm.form.org_email
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "org_email",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "org_email"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("URL")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.org_url,
                                              expression: "form.org_url"
                                            }
                                          ],
                                          ref: "org_url",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "org_url"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "org_url",
                                            placeholder: "Website"
                                          },
                                          domProps: { value: _vm.form.org_url },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "org_url",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "org_url"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
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
                                            _vm.form.org_logo == "undefined"
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
                                            _vm.form.org_logo === ""
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
                                              : _vm.form.org_logo === null
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
                                              : _vm.form.org_logo != ""
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-fluid img-thumbnail focusImgOnHover",
                                                  staticStyle: {
                                                    width: "150px",
                                                    height: "150px"
                                                  },
                                                  attrs: {
                                                    src:
                                                      "../" + _vm.form.org_logo
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
                                      _c(
                                        "label",
                                        { attrs: { for: "org_logo" } },
                                        [_vm._v("Logo")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        ref: "org_logo",
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "file",
                                          name: "org_logo"
                                        },
                                        on: { change: _vm.onImageChange }
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(2)
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 text-left" }, [
          _c("h5", [_vm._v("Organization Information")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Settings")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Organization Information")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Organization Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mt-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-flat btn-sm",
          attrs: { type: "submit" }
        },
        [_c("i", { staticClass: "far fa-edit" }), _vm._v(" Update")]
      )
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

/***/ "./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrganizationInfo.vue?vue&type=template&id=e84e25a4& */ "./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4&");
/* harmony import */ var _OrganizationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrganizationInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrganizationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationInfo.vue?vue&type=template&id=e84e25a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/OrganizationInfo/OrganizationInfo.vue?vue&type=template&id=e84e25a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationInfo_vue_vue_type_template_id_e84e25a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
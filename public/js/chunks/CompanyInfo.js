(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CompanyInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CompanyInformation",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      // Create a new form instance
      form: new Form({
        id: '',
        com_name: '',
        com_business_type: '',
        com_desc: '',
        com_license_desc: '',
        closing_period: '',
        com_email: '',
        com_phone: '',
        com_url: '',
        com_address: '',
        city: '',
        state: '',
        country: '',
        com_logo: ''
      })
    };
  },
  //end data
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
          _this.form.logo = reader.result; //push base64 to logo veriable
        };

        reader.readAsDataURL(file);
      }
    }
  } //end Methods

}); //end export default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row mt-4" }, [
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
                              return _vm.updateCompanyInfo()
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
                                    _c("label", [_vm._v("Company Name *")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.com_name,
                                          expression: "form.com_name"
                                        }
                                      ],
                                      ref: "com_name",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "com_name"
                                        )
                                      },
                                      attrs: { type: "text", name: "com_name" },
                                      domProps: { value: _vm.form.com_name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "com_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "com_name"
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
                                              value: _vm.form.com_business_type,
                                              expression:
                                                "form.com_business_type"
                                            }
                                          ],
                                          ref: "com_business_type",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "com_business_type"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "com_business_type",
                                            placeholder: "Enter business type"
                                          },
                                          domProps: {
                                            value: _vm.form.com_business_type
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "com_business_type",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "com_business_type"
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
                                      { attrs: { for: "com_desc" } },
                                      [_vm._v("Business Descsiption")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.com_desc,
                                          expression: "form.com_desc"
                                        }
                                      ],
                                      ref: "com_desc",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "com_desc"
                                        )
                                      },
                                      attrs: {
                                        name: "com_desc",
                                        placeholder: "Business Descsiption"
                                      },
                                      domProps: { value: _vm.form.com_desc },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "com_desc",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "com_desc"
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
                                    _c(
                                      "label",
                                      { attrs: { for: "com_desc" } },
                                      [_vm._v("License Details")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.com_license_desc,
                                          expression: "form.com_license_desc"
                                        }
                                      ],
                                      ref: "com_license_desc",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "com_license_desc"
                                        )
                                      },
                                      attrs: {
                                        name: "com_license_desc",
                                        placeholder: "License Details"
                                      },
                                      domProps: {
                                        value: _vm.form.com_license_desc
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "com_license_desc",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "com_license_desc"
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
                                    _c(
                                      "label",
                                      { attrs: { for: "com_desc" } },
                                      [_vm._v("Address")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.com_address,
                                          expression: "form.com_address"
                                        }
                                      ],
                                      ref: "com_address",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "com_address"
                                        )
                                      },
                                      attrs: {
                                        name: "com_address",
                                        placeholder: "Address"
                                      },
                                      domProps: { value: _vm.form.com_address },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "com_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "com_address"
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
                                            placeholder: "Enter business type"
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
                                            placeholder: "Closing period"
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
                                            placeholder: "Closing period"
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
                                              value: _vm.form.com_phone,
                                              expression: "form.com_phone"
                                            }
                                          ],
                                          ref: "com_phone",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "com_phone"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "com_phone",
                                            placeholder: "Phone"
                                          },
                                          domProps: {
                                            value: _vm.form.com_phone
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "com_phone",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "com_phone"
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
                                              value: _vm.form.com_email,
                                              expression: "form.com_email"
                                            }
                                          ],
                                          ref: "com_email",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "com_email"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "com_email",
                                            placeholder: "Email"
                                          },
                                          domProps: {
                                            value: _vm.form.com_email
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "com_email",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "com_email"
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
                                              value: _vm.form.com_url,
                                              expression: "form.com_url"
                                            }
                                          ],
                                          ref: "com_url",
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "com_url"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            name: "com_url",
                                            placeholder: "Website"
                                          },
                                          domProps: { value: _vm.form.com_url },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "com_url",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "com_url"
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
                                            _vm.form.logo == "undefined"
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-fluid img-thumbnail",
                                                  staticStyle: {
                                                    width: "150px",
                                                    height: "auto"
                                                  },
                                                  attrs: {
                                                    src: "../" + _vm.NoIconUrl
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.form.logo === ""
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-fluid img-thumbnail",
                                                  staticStyle: {
                                                    width: "150px",
                                                    height: "auto"
                                                  },
                                                  attrs: {
                                                    src: "../" + _vm.NoIconUrl
                                                  }
                                                })
                                              : _vm.form.logo === null
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-fluid img-thumbnail",
                                                  staticStyle: {
                                                    width: "150px",
                                                    height: "auto"
                                                  },
                                                  attrs: {
                                                    src: "../" + _vm.NoIconUrl
                                                  }
                                                })
                                              : _vm.form.logo != ""
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-fluid img-thumbnail focusImgOnHover",
                                                  staticStyle: {
                                                    width: "150px",
                                                    height: "auto"
                                                  },
                                                  attrs: {
                                                    src: "../" + _vm.form.logo
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
                                      _c("label", { attrs: { for: "logo" } }, [
                                        _vm._v("Logo")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        ref: "logo",
                                        staticClass: "form-control",
                                        attrs: { type: "file", name: "logo" },
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
          _c("h4", [_vm._v("Company Information")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Company Information")])
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
      _c("h4", [_vm._v("Company Information")])
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
        [_vm._v("Update")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyInfo.vue?vue&type=template&id=20dbe8ac& */ "./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac&");
/* harmony import */ var _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/CompanyInfo/CompanyInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInfo.vue?vue&type=template&id=20dbe8ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CompanyInfo/CompanyInfo.vue?vue&type=template&id=20dbe8ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_20dbe8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
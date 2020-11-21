(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SettingsMaster"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SettingsMaster-Info",
  data: function data() {
    return {
      //NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      //ShowOnChangeImage:null,
      //s3 input is show or not
      show_s3_input: false,
      show_watermark_icon: false,
      show_watermark_text: false,
      // Create a new form instance
      form: new Form({
        id: '',
        //General Settings
        site_title: '',
        site_admin_email: '',
        site_desc: '',
        site_keys: '',
        site_url: '',
        //option
        language_id: '',
        currency_id: '',
        //Image Settings
        image_store_to: '',
        aws_s3_url: '',
        watermark_by: '',
        watermark_icon: '',
        watermark_text: '',
        image_resolution: []
      })
    };
  },
  //end data
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['allLanguages', 'allCurrencies'])),
  methods: {
    // add_img_resolution() {
    //       this.form.image_resolution.push({ img_module:'', width_pixels: '', height_pixels:'', img_resulution_desc:''  });
    //    },
    //    remove_img_resolution(index) { 
    //      this.form.image_resolution.splice(index, 1);
    //    },
    fetchSettings: function fetchSettings() {
      var _this = this;

      axios.get('/spa/Settings-Info/1/edit').then(function (response) {
        _this.form.fill(response.data);

        if (response.data.image_store_to === 'local') {
          _this.show_s3_input = false;
        } else {
          _this.show_s3_input = true;
        }

        if (response.data.watermark_by === 'wByIcon') {
          _this.show_watermark_icon = true;
          _this.show_watermark_text = false;
        } else if (response.data.watermark_by === 'wByText') {
          _this.show_watermark_text = true;
          _this.show_watermark_icon = false;
        }

        if (response.data.image_resolution === null) {
          _this.form.image_resolution = [{
            img_module: '',
            width_pixels: '',
            height_pixels: '',
            img_resulution_desc: ''
          }];
        }
      })["catch"](function (errors) {
        //console.log(errors); 
        toastr.warning('Something is wrong!');
      });
    },
    updateSettingsMasterInfo: function updateSettingsMasterInfo() {
      this.form.put('/spa/Settings-Info/' + this.form.id).then(function (_ref) {
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
    } //Make image as base64 
    // onImageChange(e){
    //   //let file = e.target.files || e.dataTransfer.files;
    //   let file = e.target.files[0];        
    //   //console.log(file);
    //   this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
    //   let reader = new FileReader();
    //   //let vm = this;
    //   if(file['size'] > 512000 ){  //512Kb = 512000Byte
    //     toastr.warning('Please select file size within 500kb');
    //   }else{          
    //     reader.onloadend = (file) => {
    //       //console.log(reader.result);
    //       this.form.org_logo = reader.result; //push base64 to logo veriable
    //     };          
    //     reader.readAsDataURL(file);
    //   }
    // }

  },
  //end Methods
  created: function created() {
    this.fetchSettings();
    this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get Language

    this.$store.dispatch('commonStoreForAll/fetchCurrencies'); //get currency
  }
}); //end export default

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
              { staticClass: "col-md-12 col-sm-10- offset-md-1- text-right-" },
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
                              return _vm.updateSettingsMasterInfo()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card card-primary card-outline card-outline-tabs"
                            },
                            [
                              _vm._m(2),
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
                                        staticClass:
                                          "tab-pane fade active show",
                                        attrs: {
                                          id: "tabs-body-one",
                                          role: "tabpanel",
                                          "aria-labelledby": "tab-one"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-md-10 offset-1"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(3),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .site_title,
                                                            expression:
                                                              "form.site_title"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          "is-invalid": _vm.form.errors.has(
                                                            "site_title"
                                                          )
                                                        },
                                                        attrs: {
                                                          type: "text",
                                                          name: "site_title",
                                                          placeholder:
                                                            "Site Title"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.form.site_title
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "site_title",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("has-error", {
                                                        attrs: {
                                                          form: _vm.form,
                                                          field: "site_title"
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
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(4),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .site_admin_email,
                                                            expression:
                                                              "form.site_admin_email"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          "is-invalid": _vm.form.errors.has(
                                                            "site_admin_email"
                                                          )
                                                        },
                                                        attrs: {
                                                          type: "text",
                                                          name:
                                                            "site_admin_email",
                                                          placeholder:
                                                            "Admin Email"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.form
                                                              .site_admin_email
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "site_admin_email",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("has-error", {
                                                        attrs: {
                                                          form: _vm.form,
                                                          field:
                                                            "site_admin_email"
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
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(5),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form.site_url,
                                                            expression:
                                                              "form.site_url"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          name: "site_url",
                                                          placeholder:
                                                            "Ex. http://sorboraho.com"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.form.site_url
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "site_url",
                                                              $event.target
                                                                .value
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
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(6),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c("textarea", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .site_desc,
                                                            expression:
                                                              "form.site_desc"
                                                          }
                                                        ],
                                                        ref: "site_desc",
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          name: "site_desc",
                                                          placeholder:
                                                            "Site Descsiption"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.form.site_desc
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "site_desc",
                                                              $event.target
                                                                .value
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
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(7),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c("textarea", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .site_keys,
                                                            expression:
                                                              "form.site_keys"
                                                          }
                                                        ],
                                                        ref: "site_keys",
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          name: "site_keys",
                                                          placeholder: "Meta"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.form.site_keys
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "site_keys",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane fade show",
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
                                            {
                                              staticClass: "col-md-10 offset-1"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(8),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c(
                                                        "select",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.form
                                                                  .language_id,
                                                              expression:
                                                                "form.language_id"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control form-control-sm-",
                                                          attrs: {
                                                            name: "language_id"
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
                                                                .map(function(
                                                                  o
                                                                ) {
                                                                  var val =
                                                                    "_value" in
                                                                    o
                                                                      ? o._value
                                                                      : o.value
                                                                  return val
                                                                })
                                                              _vm.$set(
                                                                _vm.form,
                                                                "language_id",
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
                                                                "Select Status .."
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.allLanguages,
                                                            function(lan) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  key: lan.id,
                                                                  domProps: {
                                                                    value:
                                                                      lan.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n\t\t\t                      \t" +
                                                                      _vm._s(
                                                                        lan.lang_name
                                                                      ) +
                                                                      " ( " +
                                                                      _vm._s(
                                                                        lan.lang_code
                                                                      ) +
                                                                      " )\r\n\t\t\t                      "
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(9),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c(
                                                        "select",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.form
                                                                  .currency_id,
                                                              expression:
                                                                "form.currency_id"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control form-control-sm-",
                                                          attrs: {
                                                            name: "currency_id"
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
                                                                .map(function(
                                                                  o
                                                                ) {
                                                                  var val =
                                                                    "_value" in
                                                                    o
                                                                      ? o._value
                                                                      : o.value
                                                                  return val
                                                                })
                                                              _vm.$set(
                                                                _vm.form,
                                                                "currency_id",
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
                                                                "Select Status .."
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.allCurrencies,
                                                            function(curr) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  key: curr.id,
                                                                  domProps: {
                                                                    value:
                                                                      curr.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n\t\t\t                      \t" +
                                                                      _vm._s(
                                                                        curr.currency_name
                                                                      ) +
                                                                      " ( " +
                                                                      _vm._s(
                                                                        curr.currency_code
                                                                      ) +
                                                                      " / " +
                                                                      _vm._s(
                                                                        curr.currency_short_code
                                                                      ) +
                                                                      " )\r\n\t\t\t                      "
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane fade show",
                                        attrs: {
                                          id: "tabs-body-three",
                                          role: "tabpanel",
                                          "aria-labelledby": "tab-three"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-md-10 offset-1"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(10),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-sm-10 pl-4 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-sm-2"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.form
                                                                        .image_store_to,
                                                                    expression:
                                                                      "form.image_store_to"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-check-input",
                                                                attrs: {
                                                                  type: "radio",
                                                                  value: "local"
                                                                },
                                                                domProps: {
                                                                  checked: _vm._q(
                                                                    _vm.form
                                                                      .image_store_to,
                                                                    "local"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.show_s3_input = false
                                                                  },
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$set(
                                                                      _vm.form,
                                                                      "image_store_to",
                                                                      "local"
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "form-check-label"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Local Sotre"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-sm-2"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.form
                                                                        .image_store_to,
                                                                    expression:
                                                                      "form.image_store_to"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-check-input",
                                                                attrs: {
                                                                  type: "radio",
                                                                  value: "s3"
                                                                },
                                                                domProps: {
                                                                  checked: _vm._q(
                                                                    _vm.form
                                                                      .image_store_to,
                                                                    "s3"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.show_s3_input = true
                                                                  },
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$set(
                                                                      _vm.form,
                                                                      "image_store_to",
                                                                      "s3"
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "form-check-label"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "s3 Bucket"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("div", {
                                                            staticClass:
                                                              "col-sm-6"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.show_s3_input === true
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "row form-group"
                                                    },
                                                    [
                                                      _vm._m(11),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-10"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .aws_s3_url,
                                                                expression:
                                                                  "form.aws_s3_url"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "aws_s3_url",
                                                              placeholder:
                                                                "s3 bucket url"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .aws_s3_url
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "aws_s3_url",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(12),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-sm-10 pl-4 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-sm-3"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.form
                                                                        .watermark_by,
                                                                    expression:
                                                                      "form.watermark_by"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-check-input",
                                                                attrs: {
                                                                  type: "radio",
                                                                  value:
                                                                    "wByIcon"
                                                                },
                                                                domProps: {
                                                                  checked: _vm._q(
                                                                    _vm.form
                                                                      .watermark_by,
                                                                    "wByIcon"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.show_watermark_text = false
                                                                    _vm.show_watermark_icon = true
                                                                  },
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$set(
                                                                      _vm.form,
                                                                      "watermark_by",
                                                                      "wByIcon"
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "form-check-label"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Watermark by Icon"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-sm-3"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.form
                                                                        .watermark_by,
                                                                    expression:
                                                                      "form.watermark_by"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-check-input",
                                                                attrs: {
                                                                  type: "radio",
                                                                  value:
                                                                    "wByText"
                                                                },
                                                                domProps: {
                                                                  checked: _vm._q(
                                                                    _vm.form
                                                                      .watermark_by,
                                                                    "wByText"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.show_watermark_icon = false
                                                                    _vm.show_watermark_text = true
                                                                  },
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$set(
                                                                      _vm.form,
                                                                      "watermark_by",
                                                                      "wByText"
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "form-check-label"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Watermark by Text"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("div", {
                                                            staticClass:
                                                              "col-sm-4"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.show_watermark_icon === true
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "row form-group"
                                                    },
                                                    [
                                                      _vm._m(13),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-10"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .watermark_icon,
                                                                expression:
                                                                  "form.watermark_icon"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "watermark_icon",
                                                              placeholder:
                                                                "Watermark image url"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .watermark_icon
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "watermark_icon",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.show_watermark_text === true
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "row form-group"
                                                    },
                                                    [
                                                      _vm._m(14),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-10"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .watermark_text,
                                                                expression:
                                                                  "form.watermark_text"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "watermark_text",
                                                              placeholder:
                                                                "Watermark text"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .watermark_text
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "watermark_text",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row form-group"
                                                },
                                                [
                                                  _vm._m(15),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-sm-10"
                                                    },
                                                    [
                                                      _c(
                                                        "table",
                                                        {
                                                          staticClass:
                                                            "table-sm table table-striped"
                                                        },
                                                        [
                                                          _vm._m(16),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.form
                                                              .image_resolution,
                                                            function(
                                                              input,
                                                              key
                                                            ) {
                                                              return _c(
                                                                "tr",
                                                                { key: key },
                                                                [
                                                                  _c("td", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group-"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  input.img_module,
                                                                                expression:
                                                                                  "input.img_module"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control form-control-sm",
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              name:
                                                                                "img_module",
                                                                              placeholder:
                                                                                "Module"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                input.img_module
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  input,
                                                                                  "img_module",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group-"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  input.width_pixels,
                                                                                expression:
                                                                                  "input.width_pixels"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control form-control-sm",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              name:
                                                                                "width_pixels",
                                                                              placeholder:
                                                                                "Width pixels"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                input.width_pixels
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  input,
                                                                                  "width_pixels",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group-"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  input.height_pixels,
                                                                                expression:
                                                                                  "input.height_pixels"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control form-control-sm",
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              name:
                                                                                "height_pixels",
                                                                              placeholder:
                                                                                "Height pixels"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                input.height_pixels
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  input,
                                                                                  "height_pixels",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group-"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  input.img_resulution_desc,
                                                                                expression:
                                                                                  "input.img_resulution_desc"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control form-control-sm",
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              name:
                                                                                "img_resulution_desc",
                                                                              placeholder:
                                                                                "Details"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                input.img_resulution_desc
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  input,
                                                                                  "img_resulution_desc",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group-"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "i",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "show",
                                                                                rawName:
                                                                                  "v-show",
                                                                                value:
                                                                                  key ||
                                                                                  (!key &&
                                                                                    _vm
                                                                                      .form
                                                                                      .image_resolution
                                                                                      .length >
                                                                                      1),
                                                                                expression:
                                                                                  "key || ( !key && form.image_resolution.length > 1)"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "fas fa-minus-circle danger pointer",
                                                                            attrs: {
                                                                              title:
                                                                                "Remove"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                $event.preventDefault()
                                                                                return _vm.remove_img_resolution(
                                                                                  key
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "i",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "show",
                                                                                rawName:
                                                                                  "v-show",
                                                                                value:
                                                                                  key ==
                                                                                  _vm
                                                                                    .form
                                                                                    .image_resolution
                                                                                    .length -
                                                                                    1,
                                                                                expression:
                                                                                  "key == form.image_resolution.length-1"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "fas fa-plus-circle green pointer",
                                                                            attrs: {
                                                                              title:
                                                                                "Add"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                $event.preventDefault()
                                                                                return _vm.add_img_resolution(
                                                                                  key
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane fade show",
                                        attrs: {
                                          id: "tabs-body-four",
                                          role: "tabpanel",
                                          "aria-labelledby": "tab-four"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n              \t  \t\tFour\r\n              \t  \t"
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(17)
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
          _c("h5", [_vm._v("Settings")])
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
              _c("a", [_vm._v("Settings")])
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
      _c("h4", [_vm._v("Settings")])
    ])
  },
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
              [_vm._v("General")]
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
              [_vm._v("Options")]
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
              [_vm._v("Image Settings")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-four",
                  "data-toggle": "pill",
                  href: "#tabs-body-four",
                  role: "tab",
                  "aria-controls": "tabs-body-four",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Others")]
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
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Site Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Admin Email")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("URL")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Site Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Meta")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Select Language")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Select Currency")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Image Store to")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("AWS S3 URL")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Watermark by")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Watermark URL")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Watermark Text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 text-right" }, [
      _c("label", { staticClass: "pt-2" }, [_vm._v("Image Resolation")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "30%" } }, [_vm._v("Modules")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "10%" } }, [_vm._v("Width Pixels")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "10%" } }, [_vm._v("Height Pixels")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "45%" } }, [_vm._v("Details")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "5%" } }, [_vm._v("#")])
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
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

/***/ "./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsMaster.vue?vue&type=template&id=a75c6720& */ "./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720&");
/* harmony import */ var _SettingsMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsMaster.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Settings/Settings/SettingsMaster.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMaster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMaster.vue?vue&type=template&id=a75c6720& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Settings/Settings/SettingsMaster.vue?vue&type=template&id=a75c6720&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMaster_vue_vue_type_template_id_a75c6720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
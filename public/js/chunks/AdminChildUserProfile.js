(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminChildUserProfile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "admin-child-profile-master",
  //Get props form views/admin/dashboard.blade.php
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      ShowOnChangeImage: null,
      deleteImageIcon: false,
      //Delete Image icon if image exist
      //for images manipulation
      show_image_name: null,
      //use only to show image name in text field
      UserInfo: '',
      // Create a new form instance
      form: new Form({
        id: '',
        name: '',
        email: '',
        current_password: '',
        password: '',
        password_confirmation: '' // role_id:'',
        // status_id: '',
        // employee_id: '',
        // branch_id: '',
        // avatar: '',

      })
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('commonStoreForAll', ['authUser', 'systemSettings'])),
  methods: {
    showFilePicker: function showFilePicker() {
      //click input file (hidden) when showFilePicker click.
      this.$refs.avatar.click();
    },
    getFilesName: function getFilesName() {
      //show name to showFilePicker input field
      return this.show_image_name;
    },
    //Make image as base64 
    onImageChange: function onImageChange(e) {
      var _this = this;

      //let file = e.target.files || e.dataTransfer.files;
      this.show_image_name = e.target.files[0].name; //show single image name to input box using getFilesName()

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
      } // console.log(e.target.files[0].name);

    },
    fetchUserStatus: function fetchUserStatus() {
      var _this2 = this;

      //this.$Progress.start(); //using progress-bar package
      axios.get('/spaa/admin-child-profille-info?&id=' + this.authUser.id).then(function (response) {
        _this2.UserInfo = response.data; //console.log(response);
      })["catch"](function (errors) {//toastr.warning('Something is wrong!');
      });
    },
    ChangePassword: function ChangePassword() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.put('/spaa/admin-child-profille-change-password/' + this.form.id) //axios.post('/spaa/admin-child-profille-change-password/'+ this.authUser.id)
      .then(function (_ref) {
        var data = _ref.data;

        //console.log(data); 
        if (data.success) {
          toastr.success(data.success);

          _this3.$Progress.finish();

          _this3.form.reset(); //reset from after submit
          // console.log(data.success);  


          _this3.fillData(_this3.authUser);
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function (errors) {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    fillData: function fillData(data) {
      // this.form.name = data.name;
      // this.form.email = data.email;   
      this.form.fill(data);
    }
  },
  created: function created() {
    this.fetchUserStatus();
    this.fillData(this.authUser);
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "card card-primary card-outline" }, [
                _c("div", { staticClass: "card-body box-profile" }, [
                  _c("div", { staticClass: "text-center" }, [
                    _vm.authUser.avatar === null
                      ? _c("img", {
                          staticClass: "profile-user-img img-fluid img-circle",
                          attrs: {
                            src: "../" + _vm.NoIconUrl,
                            alt: "User profile picture"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.avatar != null
                      ? _c("img", {
                          staticClass: "profile-user-img img-fluid img-circle",
                          attrs: {
                            src: _vm.authUser.avatar,
                            alt: "User profile picture"
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "profile-username text-center" }, [
                    _vm._v(_vm._s(_vm.UserInfo.name))
                  ]),
                  _vm._v(" "),
                  _vm.UserInfo.belongs_to_employee != null
                    ? _c("p", { staticClass: "text-muted text-center" }, [
                        _vm._v(
                          _vm._s(
                            _vm.UserInfo.belongs_to_employee[
                              "belongs_to_j_ob_title"
                            ]["job_title_name"]
                          )
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "list-group list-group-unbordered mb-3" },
                    [
                      _vm.UserInfo.belongs_to_branch != null
                        ? _c("li", { staticClass: "list-group-item" }, [
                            _c("b", [_vm._v("Branch")]),
                            _vm._v(" "),
                            _c("a", { staticClass: "float-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.UserInfo.belongs_to_branch["branch_name"]
                                )
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.UserInfo.belongs_to_employee != null
                        ? _c("li", { staticClass: "list-group-item" }, [
                            _c("b", [_vm._v("Job Type")]),
                            _vm._v(" "),
                            _c("a", { staticClass: "float-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.UserInfo.belongs_to_employee[
                                    "emp_job_type"
                                  ]
                                )
                              )
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "tab-content" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane active",
                        attrs: { id: "tab-one" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "timeline timeline-inverse" },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "far fa-id-badge bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Name:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.UserInfo.belongs_to_employee
                                                .emp_name
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Office ID:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.UserInfo.belongs_to_employee
                                                .employee_code
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Job Status:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.UserInfo.belongs_to_employee
                                                .emp_job_status
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Job Type:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.UserInfo.belongs_to_employee
                                                .emp_job_type
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Designation:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.UserInfo.belongs_to_employee[
                                                "belongs_to_j_ob_title"
                                              ]["job_title_name"]
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "timeline-header" },
                                      [
                                        _c("strong", [_vm._v("Join Date:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("formatDate")(
                                                _vm.UserInfo
                                                  .belongs_to_employee[
                                                  "emp_hire_date"
                                                ]
                                              )
                                            )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.UserInfo.belongs_to_employee.emp_desc !=
                                    null
                                      ? _c(
                                          "div",
                                          { staticClass: "timeline-body" },
                                          [
                                            _vm._v(
                                              " \r\n                            " +
                                                _vm._s(
                                                  _vm.UserInfo
                                                    .belongs_to_employee
                                                    .emp_desc
                                                ) +
                                                "\r\n                          "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-envelope bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass: "timeline-header border-0"
                                      },
                                      [
                                        _c("strong", [_vm._v("Email: ")]),
                                        _vm._v(
                                          _vm._s(
                                            _vm.UserInfo.belongs_to_employee[
                                              "emp_email"
                                            ]
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-mobile-alt bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass: "timeline-header border-0"
                                      },
                                      [
                                        _c("strong", [_vm._v("Phone: ")]),
                                        _vm._v(
                                          _vm._s(
                                            _vm.UserInfo.belongs_to_employee[
                                              "emp_phone"
                                            ]
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane", attrs: { id: "tab-two" } },
                      [
                        _c(
                          "div",
                          { staticClass: "timeline timeline-inverse" },
                          [
                            _vm._m(5),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-info-circle bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      { staticClass: "timeline-header" },
                                      [_vm._v("Personal Details")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "timeline-body" },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass: "timeline-header mb-0"
                                          },
                                          [
                                            _c("strong", [_vm._v("DOB:")]),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.UserInfo
                                                    .belongs_to_employee.emp_dob
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass: "timeline-header mb-0"
                                          },
                                          [
                                            _c("strong", [_vm._v("Gender:")]),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.UserInfo
                                                    .belongs_to_employee
                                                    .emp_gender
                                                )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_father_name != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Father Name:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_father_name
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_mother_name != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Mother Name:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_mother_name
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_wife_name != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Wife Name:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_wife_name
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_tin != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [_vm._v("TIN:")]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_tin
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_nid != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [_vm._v("NID:")]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_nid
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_driving_license != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Driving License:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_driving_license
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_passport != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "timeline-header mb-0"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Passport:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_passport
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass:
                                      "far fa-address-card bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      { staticClass: "timeline-header" },
                                      [_vm._v("Address")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "timeline-body" },
                                      [
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_Present_address != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "timeline-header"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Present Address:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_Present_address
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_permanent_address != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "timeline-header"
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v("Permanent Address:")
                                                ]),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_permanent_address
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass:
                                      "fas fa-graduation-cap bg-success"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      { staticClass: "timeline-header" },
                                      [_vm._v("Qualification")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "timeline-body" },
                                      [
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_qualification != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "timeline-header"
                                              },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_qualification
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-briefcase bg-primary"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      { staticClass: "timeline-header" },
                                      [_vm._v("Experience")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "timeline-body" },
                                      [
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_experience != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "timeline-header"
                                              },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_experience
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.UserInfo.belongs_to_employee != null
                              ? _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-history bg-warning"
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "timeline-item" }, [
                                    _c(
                                      "h3",
                                      { staticClass: "timeline-header" },
                                      [_vm._v("Job History")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "timeline-body" },
                                      [
                                        _vm.UserInfo.belongs_to_employee
                                          .emp_previous_job_history != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "timeline-header"
                                              },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.UserInfo
                                                        .belongs_to_employee
                                                        .emp_previous_job_history
                                                    )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(6)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane", attrs: { id: "tab-three" } },
                      [
                        _c(
                          "form",
                          {
                            staticClass: "form-horizontal",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.ChangePassword()
                              }
                            }
                          },
                          [
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
                                        value: _vm.form.current_password,
                                        expression: "form.current_password"
                                      }
                                    ],
                                    ref: "current_password",
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "current_password"
                                      )
                                    },
                                    attrs: {
                                      type: "current_password",
                                      name: "current_password",
                                      placeholder: "Current Password"
                                    },
                                    domProps: {
                                      value: _vm.form.current_password
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "current_password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "current_password"
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
                                { staticClass: "col-sm-9" },
                                [
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
                                      placeholder: "New Password"
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
                            _c("div", { staticClass: "row form-group" }, [
                              _vm._m(9),
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
                                      placeholder: "Confirm new Password"
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
                            ]),
                            _vm._v(" "),
                            _vm._m(10)
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
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
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6 col-6" }, [
            _c("h5", { staticClass: "m-0- text-dark" }, [_vm._v("Profile")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 col-6" }, [
            _c("ol", { staticClass: "breadcrumb float-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Profile")])
              ])
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
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#tab-one", "data-toggle": "tab" }
            },
            [_vm._v("Job Details")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#tab-two", "data-toggle": "tab" }
            },
            [_vm._v("My Details")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#tab-three", "data-toggle": "tab" }
            },
            [_vm._v("Change password")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "time-label" }, [
      _c("span", { staticClass: "bg-danger" }, [
        _vm._v(
          "\r\n                          Job Details\r\n                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("i", { staticClass: "fas fa-qrcode bg-purple" }),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-item" }, [
        _c("h3", { staticClass: "timeline-header" }, [_vm._v(" QR Code")]),
        _vm._v(" "),
        _c("div", { staticClass: "timeline-body" }, [
          _c("img", {
            attrs: { src: "http://placehold.it/150x100", alt: "..." }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "time-label" }, [
      _c("span", { staticClass: "bg-danger" }, [_vm._v(" My Detials ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", [_vm._v("Current Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", [_vm._v("New Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 text-right" }, [
      _c("label", [_vm._v("New Password Confirm")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "offset-sm-3 col-sm-10" }, [
        _c(
          "button",
          { staticClass: "btn btn-danger", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
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

/***/ "./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminChildProfileMaster.vue?vue&type=template&id=40619fd4& */ "./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4&");
/* harmony import */ var _AdminChildProfileMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminChildProfileMaster.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminChildProfileMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildProfileMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminChildProfileMaster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildProfileMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminChildProfileMaster.vue?vue&type=template&id=40619fd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminChild/AdminChildProfile/AdminChildProfileMaster.vue?vue&type=template&id=40619fd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildProfileMaster_vue_vue_type_template_id_40619fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
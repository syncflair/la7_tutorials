(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserMasterList-com"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js& ***!
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserMasterList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      // use for sortable
      currentSort: 'name',
      currentSortDir: 'asc',
      //User for search
      filterBy: 'name',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'name',
        'show_name': 'Name'
      }, {
        'field_name': 'email',
        'show_name': 'Email'
      }, {
        'field_name': 'us_name',
        'show_name': 'User Status'
      }, {
        'field_name': 'role_name',
        'show_name': 'User Role'
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usersAdminStore', ['users', 'pagination', 'autoCompleteData']), {
    // use for sortable
    sortedObjects: function sortedObjects() {
      var _this = this;

      var fo = Object.values(this.users).sort(function (a, b) {
        var modifier = 1;
        if (_this.currentSortDir === 'desc') modifier = -1;
        if (a[_this.currentSort] < b[_this.currentSort]) return -1 * modifier;
        if (a[_this.currentSort] > b[_this.currentSort]) return 1 * modifier;
        return 0;
      });
      return fo;
    }
  }),
  methods: {
    // use for sortable
    sort: function sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      this.currentSort = s;
    },
    // ChangeNotify(id, event){
    //   axios.post('/spa/user-change-notify/'+id+'/'+event.target.checked)
    //     .then( ({data}) => {
    //       //console.log(data);
    //       if(data.success){                  
    //         FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
    //         toastr.success(data.success);                 
    //       } 
    //     })                          
    //     .catch(() => {
    //       toastr.warning('Something is wrong!');
    //     })
    // },
    // verifyByUser(id){
    //   axios.post('/spa/user-verify-by-admin/'+id)
    //     .then( ({data}) => {
    //       //console.log(data);
    //       if(data.success){                  
    //         FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
    //         toastr.success(data.success);                 
    //       } 
    //     })                          
    //     .catch(() => {
    //       toastr.warning('Something is wrong!');
    //     })
    // },
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start();
      this.$store.dispatch('usersAdminStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    ViewDetails: function ViewDetails() {
      alert('ok');
    },
    addData: function addData() {
      FireEvent.$emit('addData'); //call to form components
    },
    editData: function editData(data) {
      //alert(data.id);
      FireEvent.$emit('editData', data); //call to form components
    },
    DeleteData: function DeleteData(id) {
      Swal.fire({
        title: 'Are you sure to Delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/spa/Users-Info/' + id).then(function (_ref) {
            var data = _ref.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            toastr.warning('Something is wrong!');
          });
        } else {
          toastr.info('Your data is safe!');
        }
      });
    } //end delete

  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('usersAdminStore/fetchData'); //call this function at first loading from Action with Modules namespace 

    FireEvent.$on('AfterChange', function () {
      _this2.$Progress.start();

      _this2.$store.dispatch('usersAdminStore/fetchData', _this2.pagination.per_page);

      _this2.$Progress.finish();
    }); //this event call from Pagination-app component for change number of data show per page

    FireEvent.$on('changPerPage', function (data) {
      _this2.$store.dispatch('usersAdminStore/fetchData', data);
    }); //This is come from search-app-one.vue file for serch data

    FireEvent.$on('searchData', function (data) {
      //alert(data.search_key+'-'+data.search_option);
      _this2.$store.dispatch('usersAdminStore/searching', data);
    }); //This is come from search-app-one.vue file for Auto Complete data

    FireEvent.$on('AutoCompleteSearch', function (data) {
      //alert(data);
      if (data != '') {
        _this2.$store.dispatch('usersAdminStore/AutoCompleteSearch', data);
      }
    });
  },
  mounted: function mounted() {//console.log(this.categories)   
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78& ***!
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-5 col-sm-9" },
          [
            _c("search-app-one", {
              attrs: {
                SearchByOptions: _vm.SearchByOptions,
                filterBy: _vm.filterBy,
                autoCompleteData: _vm.autoCompleteData,
                pagination: _vm.pagination
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-7 col-sm-3 text-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-flat btn-sm",
              attrs: { "data-toggle": "modal", "data-target": "#userModal" },
              on: { click: _vm.addData }
            },
            [_c("i", { staticClass: "icon fas fa-plus" }), _vm._v(" Add New")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "table",
        { staticClass: "table table-striped table-sm table-responsive" },
        [
          _c("thead", [
            _c("tr", [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "5%" }, attrs: { scope: "col" } },
                [_vm._v("Avatar")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "20%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("name")
                    }
                  }
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "20%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("email")
                    }
                  }
                },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "5%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("role_name")
                    }
                  }
                },
                [_vm._v("Role")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "3%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("phone")
                    }
                  }
                },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "3%" }, attrs: { scope: "col" } },
                [_vm._v("Nofify")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "8%" }, attrs: { scope: "col" } },
                [_vm._v("Date")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticStyle: { width: "10%", "text-align": "right" },
                  attrs: { scope: "col" }
                },
                [_vm._v("Action")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.sortedObjects, function(user, index) {
                return _c("tr", { key: index }, [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("td", [
                    user.avatar != null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + user.avatar,
                              height: "20px",
                              width: "20px"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    user.avatar === null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + _vm.NoIconUrl,
                              height: "20px",
                              width: "20px"
                            }
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(user.name) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(user.email) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(user["role"]["name"]) + " ")]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "text-align": "center" } }, [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: user.status_id === 1,
                            expression: "user.status_id === 1"
                          }
                        ],
                        attrs: { title: "Active user" }
                      },
                      [_c("i", { staticClass: "fas fa-user-check green" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: user.status_id === 2,
                            expression: "user.status_id === 2"
                          }
                        ],
                        attrs: { title: "Inactive user" }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-user-times yellow",
                          staticStyle: { "font-size": "18px !important" }
                        })
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
                            value: user.status_id === 3,
                            expression: "user.status_id === 3"
                          }
                        ],
                        attrs: { title: "Panding user" }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-user-lock red",
                          staticStyle: { "font-size": "18px !important" }
                        })
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
                            value: user.status_id === 4,
                            expression: "user.status_id === 4"
                          }
                        ],
                        attrs: { title: "Not Verified user, Click to verify" },
                        on: {
                          click: function($event) {
                            return _vm.verifyByUser(user.id)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-user-secret red pointer",
                          staticStyle: { "font-size": "22px !important" }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "text-align": "center" } }, [
                    _vm._v("\r\n              data\r\n              ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("small", [
                      _vm._v(
                        " " + _vm._s(_vm._f("formatDate")(user.created_at))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-flat btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.ViewDetails()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-eye primary" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary- btn-flat btn-sm",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#userModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editData(user)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-edit primary " })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-block- btn-danger- btn-flat btn-sm",
                        attrs: { id: "delete" },
                        on: {
                          click: function($event) {
                            return _vm.DeleteData(user.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "far fa-trash-alt red" })]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _c(
                "tr",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.users && !_vm.users.length,
                      expression: "users && !users.length"
                    }
                  ]
                },
                [_vm._m(2)]
              )
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _vm.pagination.last_page >= 1
          ? _c("pagination-app", {
              attrs: { pagination: _vm.pagination, offset: 5 },
              on: {
                paginate: function($event) {
                  return _vm.fetchData()
                }
              }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "2%" }, attrs: { scope: "col" } }, [
      _c("input", { attrs: { type: "checkbox", name: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { scope: "col" } }, [
      _c("input", { attrs: { type: "checkbox", name: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "9" } }, [
      _c(
        "div",
        {
          staticClass: "alert alert-warning text-center red mb-0",
          attrs: { role: "alert" }
        },
        [_vm._v("Sorry : No data found.")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMasterList.vue?vue&type=template&id=b3167d78& */ "./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78&");
/* harmony import */ var _UserMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminUsers/User/UserMasterList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMasterList.vue?vue&type=template&id=b3167d78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminUsers/User/UserMasterList.vue?vue&type=template&id=b3167d78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMasterList_vue_vue_type_template_id_b3167d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
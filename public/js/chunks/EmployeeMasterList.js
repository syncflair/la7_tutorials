(self["webpackChunk"] = self["webpackChunk"] || []).push([["EmployeeMasterList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EmployeeMasterList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      //checkbox selecting data
      selectAllCheckbox: false,
      selectedCheckbox: [],
      // use for sortable
      currentSort: 'emp_name',
      currentSortDir: 'asc',
      //User for search
      filterBy: 'emp_name',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'emp_name',
        'show_name': 'Name'
      }, {
        'field_name': 'emp_email',
        'show_name': 'Email'
      }, {
        'field_name': 'emp_phone',
        'show_name': 'Phone'
      }, {
        'field_name': 'emp_gender',
        'show_name': 'Gender'
      }, {
        'field_name': 'us_name',
        'show_name': 'Status'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('EmployeeMasterStore', ['employees', 'pagination', 'autoCompleteData'])), {}, {
    // use for sortable
    sortedemployees: function sortedemployees() {
      var _this = this;

      var fo = Object.values(this.employees).sort(function (a, b) {
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
    //checkbox select
    selectCheckbox: function selectCheckbox() {
      this.selectedCheckbox = [];

      if (!this.selectAllCheckbox) {
        for (var i in this.employees) {
          this.selectedCheckbox.push(this.employees[i].id); //all id push into selectedCheckbox array
        }
      }
    },
    // use for sortable
    sort: function sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      this.currentSort = s;
    },
    // ChangeNotify(id, event){
    //   this.$Progress.start();
    //   axios.post('/spa/employee-change-notify/'+id+'/'+event.target.checked)
    //     .then( ({data}) => {
    //       //console.log(data);
    //       if(data.success){                  
    //         FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update             
    //         this.$Progress.finish();    
    //         toastr.success(data.success);                 
    //       } 
    //     })                          
    //     .catch(() => {
    //       this.$Progress.fail();
    //       toastr.warning('Something is wrong!');
    //     })
    // },
    inactiveEmployee: function inactiveEmployee(id) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure to Inactive this employee?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Inactive!'
      }).then(function (result) {
        if (result.value) {
          _this2.$Progress.start();

          axios.post('/spa/Employee-Info/inactive-employee/' + id).then(function (_ref) {
            var data = _ref.data;

            //console.log(data);
            if (data.success) {
              _this2.$Progress.finish();

              toastr.warning(data.success);
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update                                                      
            }
          })["catch"](function () {
            _this2.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this2.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    activeEmployee: function activeEmployee(id) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure to Active this user?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Active!'
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          axios.post('/spa/Employee-Info/active-employee/' + id).then(function (_ref2) {
            var data = _ref2.data;

            //console.log(data);
            if (data.success) {
              _this3.$Progress.finish();

              toastr.success(data.success);
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update                                                       
            }
          })["catch"](function () {
            _this3.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this3.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    verifyByUser: function verifyByUser(id) {
      var _this4 = this;

      this.$Progress.start();
      Swal.fire({
        title: 'Are you sure to Verify this user?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Verified!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/spa/employee-verify-by-admin/' + id).then(function (_ref3) {
            var data = _ref3.data;

            //console.log(data);
            if (data.success) {
              _this4.$Progress.finish();

              toastr.success(data.success);
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 
            }
          })["catch"](function () {
            _this4.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this4.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start();
      this.$store.dispatch('EmployeeMasterStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    reloadThis: function reloadThis() {
      this.fetchData();
    },
    ViewDetails: function ViewDetails() {
      alert('ok');
    },
    addData: function addData() {
      FireEvent.$emit('addData');
    },
    editData: function editData(data) {
      //alert(data.id);
      FireEvent.$emit('editData', data);
    },
    DeleteData: function DeleteData(id) {
      var _this5 = this;

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
          _this5.$Progress.start();

          axios["delete"]('/spa/Employee-Info/' + id).then(function (_ref4) {
            var data = _ref4.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              _this5.$Progress.finish();

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            _this5.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this5.$Progress.finish();

          toastr.info('Your data is safe!');
        }
      });
    },
    //end delete
    // ################################ For search App ###############################################
    searchData: function searchData(data) {
      this.$store.dispatch('EmployeeMasterStore/searching', data);
    },
    AutoCompleteSearch: function AutoCompleteSearch(data) {
      if (data != '') {
        this.$store.dispatch('EmployeeMasterStore/AutoCompleteSearch', data);
      }
    } // ################################ For search App ###############################################

  },
  created: function created() {
    var _this6 = this;

    this.$store.dispatch('EmployeeMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

    FireEvent.$on('AfterChange', function () {
      _this6.$Progress.start();

      _this6.$store.dispatch('EmployeeMasterStore/fetchData', _this6.pagination.per_page);

      _this6.$Progress.finish();
    }); //this event call from Pagination-app component for change number of data show per page

    FireEvent.$on('changPerPage', function (data) {
      _this6.$store.dispatch('EmployeeMasterStore/fetchData', data);
    });
  },
  mounted: function mounted() {//console.log(this.categories)   
  }
});
/*End export default*/

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeMasterList.vue?vue&type=template&id=a253dd70& */ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70&");
/* harmony import */ var _EmployeeMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmployeeMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMasterList_vue_vue_type_template_id_a253dd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeMasterList.vue?vue&type=template&id=a253dd70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/HRM/Employee/EmployeeMasterList.vue?vue&type=template&id=a253dd70& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
            _c("search-app-master", {
              attrs: {
                SearchByOptions: _vm.SearchByOptions,
                filterBy: _vm.filterBy,
                autoCompleteData: _vm.autoCompleteData,
                pagination: _vm.pagination
              },
              on: {
                searchData: _vm.searchData,
                AutoCompleteSearch: _vm.AutoCompleteSearch
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-3 text-right" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { title: "reload" },
                on: { click: _vm.reloadThis }
              },
              [_c("i", { staticClass: "fas fa-sync-alt" })]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/EmployeeMasterForm" }
              },
              [
                _c("i", { staticClass: "icon fas fa-plus" }),
                _vm._v(" Add New\r\n\t        ")
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
        "table",
        { staticClass: "table table-striped table-sm table-responsive-" },
        [
          _c("thead", [
            _c("tr", [
              _c(
                "th",
                { staticStyle: { width: "2%" }, attrs: { scope: "col" } },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectAllCheckbox,
                        expression: "selectAllCheckbox"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.selectAllCheckbox)
                        ? _vm._i(_vm.selectAllCheckbox, null) > -1
                        : _vm.selectAllCheckbox
                    },
                    on: {
                      click: _vm.selectCheckbox,
                      change: function($event) {
                        var $$a = _vm.selectAllCheckbox,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.selectAllCheckbox = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selectAllCheckbox = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selectAllCheckbox = $$c
                        }
                      }
                    }
                  })
                ]
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
                      return _vm.sort("employee_code")
                    }
                  }
                },
                [_vm._v("code")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "15%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("emp_name")
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
                  staticStyle: { width: "15%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("emp_email")
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
                  staticStyle: { width: "7%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("emp_phone")
                    }
                  }
                },
                [_vm._v("Phone")]
              ),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Branch")]),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "10%" }, attrs: { scope: "col" } },
                [_vm._v("Job Title")]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "10%" }, attrs: { scope: "col" } },
                [_vm._v("Dept")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "3%" }, attrs: { scope: "col" } },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.sortedemployees, function(employee, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedCheckbox,
                          expression: "selectedCheckbox"
                        }
                      ],
                      attrs: { type: "checkbox", name: "" },
                      domProps: {
                        value: employee.id,
                        checked: Array.isArray(_vm.selectedCheckbox)
                          ? _vm._i(_vm.selectedCheckbox, employee.id) > -1
                          : _vm.selectedCheckbox
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.selectedCheckbox,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = employee.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.selectedCheckbox = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.selectedCheckbox = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.selectedCheckbox = $$c
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { scope: "col" } }, [
                    _c("small", [_vm._v(_vm._s(employee.employee_code))])
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(" " + _vm._s(employee.emp_name) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(employee.emp_email) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(employee.emp_phone) + " ")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(employee["belongs_to_branch"]["branch_name"]) +
                        " "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("small", [
                      _vm._v(
                        _vm._s(
                          employee["belongs_to_job_title"]["job_title_name"]
                        ) + " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    employee.has_one_user != null
                      ? _c("small", [
                          _vm._v(
                            "\r\n                  " +
                              _vm._s(employee.has_one_user.name) +
                              "\r\n              "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(employee.departments, function(dept) {
                      return _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: employee.departments != null,
                              expression: "employee.departments != null"
                            }
                          ]
                        },
                        [
                          _vm._v(
                            "\r\n                      " +
                              _vm._s(dept.dept_name) +
                              ", \r\n                  "
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "text-align": "center" } }, [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: employee.status_id === 1,
                            expression: "employee.status_id === 1"
                          }
                        ],
                        attrs: { title: "Active employee, Click to inactive" },
                        on: {
                          click: function($event) {
                            return _vm.inactiveEmployee(employee.id)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-user-check green pointer"
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
                            value: employee.status_id === 2,
                            expression: "employee.status_id === 2"
                          }
                        ],
                        attrs: { title: "Inactive employee, Click to active" },
                        on: {
                          click: function($event) {
                            return _vm.activeEmployee(employee.id)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-user-times yellow pointer"
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
                            value: employee.status_id === 3,
                            expression: "employee.status_id === 3"
                          }
                        ],
                        attrs: { title: "Panding employee, Click to active" },
                        on: {
                          click: function($event) {
                            return _vm.activeEmployee(employee.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-user-lock red pointer" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: employee.status_id === 4,
                            expression: "employee.status_id === 4"
                          }
                        ],
                        attrs: {
                          title: "Not Verified employee, Click to verify"
                        },
                        on: {
                          click: function($event) {
                            return _vm.verifyByUser(employee.id)
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
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group option-dropdown-manu-style left"
                      },
                      [
                        _vm._m(2, true),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-menu-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.ViewDetails(employee.id)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-eye primary" }),
                                _vm._v(" View ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: {
                                  to: {
                                    name: "EmployeeMasterForm",
                                    params: { data: employee }
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-edit primary "
                                }),
                                _vm._v(" Edit\r\n                  ")
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-divider" }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: { id: "delete" },
                                on: {
                                  click: function($event) {
                                    return _vm.DeleteData(employee.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-trash-alt red"
                                }),
                                _vm._v(" Delete\r\n                  ")
                              ]
                            )
                          ],
                          1
                        )
                      ]
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
                      value: _vm.employees && !_vm.employees.length,
                      expression: "employees && !employees.length"
                    }
                  ]
                },
                [_vm._m(3)]
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
    return _c(
      "th",
      { staticStyle: { width: "15%" }, attrs: { scope: "col" } },
      [_c("small", [_vm._v("Assign to User")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "th",
      {
        staticStyle: { width: "2%", "text-align": "right" },
        attrs: { scope: "col" }
      },
      [_c("strong", [_vm._v("...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-flat btn-sm btn-warning dropdown-toggle-",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "12" } }, [
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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


/***/ })

}]);
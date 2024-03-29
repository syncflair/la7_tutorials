(self["webpackChunk"] = self["webpackChunk"] || []).push([["CustomerMasterList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  name: "customerMasterListForAdmin",
  data: function data() {
    return {
      //checkbox selecting data
      selectAllCheckbox: false,
      selectedCheckbox: [],
      // use for sortable
      currentSort: 'name',
      currentSortDir: 'asc',
      lists: [],
      page: 1,
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
        'field_name': 'phone',
        'show_name': 'Phone'
      }, {
        'field_name': 'group_name',
        'show_name': 'Group'
      }, {
        'field_name': 'us_name',
        'show_name': 'Status'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('CustomerForAdminStore', ['customers', 'pagination', 'autoCompleteData'])), {}, {
    // use for sortable
    sortedCustomers: function sortedCustomers() {
      var _this = this;

      // let fo = Object.values(this.customers).sort((a,b) => {
      var fo = Object.values(this.lists).sort(function (a, b) {
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
        for (var i in this.customers) {
          this.selectedCheckbox.push(this.customers[i].id); //all id push into selectedCheckbox array
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
    ChangeNotify: function ChangeNotify(id, event) {
      var _this2 = this;

      this.$Progress.start();
      axios.post('/spa/customer-change-notify/' + id + '/' + event.target.checked).then(function (_ref) {
        var data = _ref.data;

        //console.log(data);
        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update             

          _this2.$Progress.finish();

          toastr.success(data.success);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    inactiveCustomer: function inactiveCustomer(id) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure to Active this Customer?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Inactive!'
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          axios.post('/spa/customer-Info/inactive-customer/' + id).then(function (_ref2) {
            var data = _ref2.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this3.$Progress.finish();

              toastr.warning(data.success);
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
    activeCustomer: function activeCustomer(id) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure to Active this Customer?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Active!'
      }).then(function (result) {
        if (result.value) {
          _this4.$Progress.start();

          axios.post('/spa/customer-Info/active-customer/' + id).then(function (_ref3) {
            var data = _ref3.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this4.$Progress.finish();

              toastr.success(data.success);
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
    verifyByUser: function verifyByUser(id) {
      var _this5 = this;

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
          _this5.$Progress.start();

          axios.post('/spa/customer-verify-by-admin/' + id).then(function (_ref4) {
            var data = _ref4.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this5.$Progress.finish();

              toastr.success(data.success);
            }
          })["catch"](function () {
            _this5.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this5.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start();
      this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this6 = this;

      //let vm =this;
      axios.get('/spa/customer-Info?page=' + this.page) // .then( ( {response} ) => {
      .then(function (response) {
        //console.log(response);
        if (response.data.data.length) {
          var _this6$lists;

          _this6.page += 1;

          (_this6$lists = _this6.lists).push.apply(_this6$lists, _toConsumableArray(response.data.data));

          $state.loaded();
        } else {
          $state.complete();
        }
      }); // this.page = this.page + 1;
    },
    reloadThis: function reloadThis() {
      this.infiniteHandler(); // this.fetchData();
    },
    ViewDetails: function ViewDetails() {
      alert('ok');
    },
    addCustomer: function addCustomer() {
      FireEvent.$emit('addCustomer');
    },
    editCustomer: function editCustomer(data) {
      //alert(data.id);
      FireEvent.$emit('editCustomer', data);
    },
    DeleteData: function DeleteData(id) {
      var _this7 = this;

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
          _this7.$Progress.start();

          axios["delete"]('/spa/customer-Info/' + id).then(function (_ref5) {
            var data = _ref5.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              _this7.$Progress.finish();

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            _this7.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this7.$Progress.finish();

          toastr.info('Your data is safe!');
        }
      });
    },
    //end delete
    // ################################ For search App ###############################################
    searchData: function searchData(data) {
      this.$store.dispatch('CustomerForAdminStore/searching', data);
    },
    AutoCompleteSearch: function AutoCompleteSearch(data) {
      if (data != '') {
        this.$store.dispatch('CustomerForAdminStore/AutoCompleteSearch', data);
      }
    } // ################################ For search App ###############################################

  },
  created: function created() {
    //this.infiniteHandler();
    //this.$store.dispatch('CustomerForAdminStore/fetchData'); //call this function at first loading from Action with Modules namespace 
    // FireEvent.$on('AfterChange', () => {
    //     this.$Progress.start();
    //     this.infiniteHandler();
    //     //this.$store.dispatch('CustomerForAdminStore/fetchData', this.pagination.per_page);
    //     this.$Progress.finish();
    // }); 
    //this event call from Pagination-app component for change number of data show per page
    FireEvent.$on('changPerPage', function (data) {//this.infiniteHandler();
      //this.$store.dispatch('CustomerForAdminStore/fetchData',data);
    });
  },
  mounted: function mounted() {//console.log(this.categories)   
  }
});
/*End export default*/

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerMasterList.vue?vue&type=template&id=3aedd3c6& */ "./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6&");
/* harmony import */ var _CustomerMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerMasterList_vue_vue_type_template_id_3aedd3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerMasterList.vue?vue&type=template&id=3aedd3c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Customers/Customers/CustomerMasterList.vue?vue&type=template&id=3aedd3c6& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: "/spa/CustomerMasterForm" }
              },
              [
                _c("i", { staticClass: "icon fas fa-plus" }),
                _vm._v(" Add New\r\n          ")
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
                  staticStyle: { width: "6%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("customer_code")
                    }
                  }
                },
                [_vm._v("Code")]
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
                  staticStyle: { width: "14%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("phone")
                    }
                  }
                },
                [_vm._v("Phone")]
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
                      return _vm.sort("customer_group")
                    }
                  }
                },
                [_vm._v("Group")]
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
                      return _vm.sort("us_name")
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
                { staticStyle: { width: "3%" }, attrs: { scope: "col" } },
                [_vm._v("Date")]
              ),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.sortedCustomers, function(customer, index) {
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
                      value: customer.id,
                      checked: Array.isArray(_vm.selectedCheckbox)
                        ? _vm._i(_vm.selectedCheckbox, customer.id) > -1
                        : _vm.selectedCheckbox
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.selectedCheckbox,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = customer.id,
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
                  _c("small", [_vm._v(_vm._s(customer.customer_code) + " ")])
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(" " + _vm._s(customer.name) + " ")
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(customer.email) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(customer.phone) + " ")]),
                _vm._v(" "),
                _c("td", [
                  customer.customer_group_id != 0
                    ? _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(
                              customer.belongs_to_customer_group.group_name
                            ) +
                            " "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "center" } }, [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: customer.status_id === 1,
                          expression: "customer.status_id === 1"
                        }
                      ],
                      attrs: { title: "Active Customer, Click to inactive" },
                      on: {
                        click: function($event) {
                          return _vm.inactiveCustomer(customer.id)
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
                          value: customer.status_id === 2,
                          expression: "customer.status_id === 2"
                        }
                      ],
                      attrs: { title: "Inactive Customer, Click to active" },
                      on: {
                        click: function($event) {
                          return _vm.activeCustomer(customer.id)
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
                          value: customer.status_id === 3,
                          expression: "customer.status_id === 3"
                        }
                      ],
                      attrs: { title: "Panding Customer, Click to active" },
                      on: {
                        click: function($event) {
                          return _vm.activeCustomer(customer.id)
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
                          value: customer.status_id === 4,
                          expression: "customer.status_id === 4"
                        }
                      ],
                      attrs: {
                        title: "Not Verified Customer, Click to verify"
                      },
                      on: {
                        click: function($event) {
                          return _vm.verifyByUser(customer.id)
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
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: customer.enable_notify,
                        expression: "customer.enable_notify"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      name: "enable_notify",
                      value: "1"
                    },
                    domProps: {
                      checked: Array.isArray(customer.enable_notify)
                        ? _vm._i(customer.enable_notify, "1") > -1
                        : customer.enable_notify
                    },
                    on: {
                      click: function($event) {
                        return _vm.ChangeNotify(customer.id, $event)
                      },
                      change: function($event) {
                        var $$a = customer.enable_notify,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "1",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                customer,
                                "enable_notify",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                customer,
                                "enable_notify",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(customer, "enable_notify", $$c)
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "span",
                    {
                      staticClass: "pointer",
                      attrs: {
                        title: _vm._f("formatDate")(customer.created_at)
                      }
                    },
                    [_c("i", { staticClass: "far fa-calendar-check" })]
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
                      _vm._m(1, true),
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
                                  return _vm.ViewDetails(customer.id)
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
                                  name: "CustomerMasterForm",
                                  params: { data: customer }
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-edit primary " }),
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
                                  return _vm.DeleteData(customer.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "far fa-trash-alt red" }),
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
            0
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _c(
          "infinite-loading",
          {
            attrs: { spinner: "spiral" },
            on: {
              distance: function($event) {
                1
              },
              infinite: _vm.infiniteHandler
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "text-warning text-center text-bold",
                attrs: { slot: "no-more" },
                slot: "no-more"
              },
              [_vm._v("No more data")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text-danger text-center text-bold",
                attrs: { slot: "no-results" },
                slot: "no-results"
              },
              [_vm._v("No results")]
            )
          ]
        )
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
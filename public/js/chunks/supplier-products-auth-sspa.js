(self["webpackChunk"] = self["webpackChunk"] || []).push([["supplier-products-auth-sspa"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "nav-for-admin-supplier-auth",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForSupplier', ['authSupplier', 'authVendor'])), {}, {
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    }
  }),
  components: {},
  methods: {
    Logout: function Logout() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/supplier/logout').then(function (_ref) {
        var response = _ref.response;

        //console.log(response); 
        //if(response.success){             
        // toastr.success(response.success);         
        _this.$Progress.finish(); //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false );  


        window.location = '/supplier/login'; //this.$router.push({ path : '/home' });   //route after successfule 
        //this.$router.replace({ path : '/home' });   //route after successfule 
        //this.$router.go('/home');

        toastr.success('Logout successfule'); //}
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Logout 

  },
  created: function created() {
    var _this2 = this;

    setTimeout(function () {
      _this2.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', _this2.authSupplier.vendor_id);
    }, 300); //call after 800 miliscound 
  },
  mounted: function mounted() {// console.log(this.baseURL);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Layouts_NavForAdminSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/NavForAdminSupplier */ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue");
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
 //for user MapState



var SupplierProductViewComponent = function SupplierProductViewComponent() {
  return __webpack_require__.e(/*! import() | SupplierProductViewComponent-com */ "SupplierProductViewComponent-com").then(__webpack_require__.bind(__webpack_require__, /*! ./SupplierProductView */ "./resources/js/components/AdminSupplier/Product/SupplierProductView.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // use for sortable
      currentSort: 'sys_pro_name',
      currentSortDir: 'asc'
    };
  },
  components: {
    NavForAdminSupplier: _Layouts_NavForAdminSupplier__WEBPACK_IMPORTED_MODULE_0__.default,
    SupplierProductViewComponent: SupplierProductViewComponent
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('AuthenticationForSupplier', ['authSupplier', 'products', 'pagination'])), {}, {
    // use for sortable
    sortedProducts: function sortedProducts() {
      var _this = this;

      var fo = Object.values(this.products).sort(function (a, b) {
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
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start(); // this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', this.pagination.per_page);

      this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', {
        perPage: this.pagination.per_page,
        vendor_id: this.authSupplier.vendor_id
      });
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    ViewDetails: function ViewDetails(data) {
      //alert(data.sys_pro_name);
      FireEvent.$emit('SupplierProductDataView', data);
    }
  },
  created: function created() {
    //{search_key: SearchKey, search_option: this.selectOption}
    this.$store.dispatch('AuthenticationForSupplier/fetchProductListData', {
      vendor_id: this.authSupplier.vendor_id
    }); //setTimeout(() => {
    //    this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
    //}, 300);//call after 800 miliscound       
  },
  mounted: function mounted() {//console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
    //console.log(JSON.parse(this.authPermissions.permission));
    //console.log(this.authPermissions.permission['BranchInfo']['delete']);
    // console.log(this.products);
  }
});

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavForAdminSupplier.vue?vue&type=template&id=32284940& */ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940&");
/* harmony import */ var _NavForAdminSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavForAdminSupplier.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavForAdminSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupplierProducts.vue?vue&type=template&id=727af3a2& */ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&");
/* harmony import */ var _SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupplierProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminSupplier/Product/SupplierProducts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminSupplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SupplierProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminSupplier_vue_vue_type_template_id_32284940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminSupplier.vue?vue&type=template&id=32284940& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940&");


/***/ }),

/***/ "./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierProducts_vue_vue_type_template_id_727af3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SupplierProducts.vue?vue&type=template&id=727af3a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Layouts/NavForAdminSupplier.vue?vue&type=template&id=32284940& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass:
        "mb-8 border- border-width-2- border-color-3- borders-radius-6"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "user-panel pl-2- pr-2- mt-0 pb-2 mb-1 d-flex border-bottom-primary- border-bottom- border-top- section-title"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "info- border- bg-gray-1- rounded-lg- w-100 border-bottom-"
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.authVendor,
                      expression: "authVendor"
                    }
                  ],
                  staticClass:
                    "col-lg-12 btn- px-1- pl-0 pr-0 pb-1  bg-primary- text-black font-size-9- rounded-lg- border-bottom",
                  staticStyle: { overflow: "auto" }
                },
                [
                  _c(
                    "div",
                    { staticStyle: { float: "left", "padding-right": "5px" } },
                    [
                      _vm.authVendor.vendor_img
                        ? _c("img", {
                            staticClass: "img-circle img-bordered-sm",
                            staticStyle: { width: "50", height: "auto" },
                            attrs: {
                              src: _vm.authVendor.vendor_img,
                              alt: "user image"
                            }
                          })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "pl-3",
                      staticStyle: { "white-space": "normal" }
                    },
                    [_c("small", [_vm._v(_vm._s(_vm.authVendor.vendor_name))])]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.authSupplier,
                      expression: "authSupplier"
                    }
                  ],
                  staticClass:
                    "col-lg-12 font-size-10 pl-0 mt-2 mb-1 text-black border-bottom"
                },
                [_c("span", [_vm._v(_vm._s(_vm.authSupplier.name))])]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "list-unstyled dropdown-list dropdown-list-custome pb-3",
          attrs: { id: "sidebarNav" }
        },
        [
          _c(
            "li",
            { staticClass: "border-bottom-" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-dashboard")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-dashboard" }
                },
                [_vm._v(" Dashboard\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-profile")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-profile" }
                },
                [_vm._v("My Profile ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-orders")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-orders" }
                },
                [_vm._v("My Orders\n\t            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-return")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-return" }
                },
                [_vm._v("Return")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-eplace")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-replace" }
                },
                [_vm._v(" Replace ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-products")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-products" }
                },
                [_vm._v("Product List ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-payment-receivable")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-payment-receivable" }
                },
                [_vm._v("Amount Receivable\n            \t")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-payment-history")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/sspa/my-payment-history" }
                },
                [_vm._v("Payment History\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "dropdown-item dropdown-item-custome transition-3d-hover",
                  class: [_vm.currentPage.includes("my-payment-history")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/supplier/login" }
                },
                [_vm._v("Login\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "border-top- mt-2- pt-2-" }, [
            _c(
              "a",
              {
                staticClass:
                  "dropdown-item dropdown-item-custome transition-3d-hover",
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.Logout()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-sign-out-alt" }),
                _vm._v(" Logout")
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminSupplier/Product/SupplierProducts.vue?vue&type=template&id=727af3a2& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "content pt-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "d-none d-xl-block col-xl-2 col-wd-2gdot5-" },
              [_c("NavForAdminSupplier")],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-" },
              [
                _c(
                  "div",
                  { staticClass: "card" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body p-0" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table m-0 table-custome-two table-striped table-sm-",
                            staticStyle: { "min-height": "200px" }
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticStyle: { width: "3%" } }, [
                                  _vm._v("Img")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "sortable-title",
                                    staticStyle: { width: "40%" },
                                    on: {
                                      click: function($event) {
                                        return _vm.sort("sys_pro_name")
                                      }
                                    }
                                  },
                                  [_vm._v("Name")]
                                ),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "6%" } }, [
                                  _vm._v("Category")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "5%" } }, [
                                  _vm._v("Brand")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "6%" } }, [
                                  _vm._v("Status")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "4%" } }, [
                                  _vm._v("Stock")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "5%" } }, [
                                  _vm._v("price")
                                ]),
                                _vm._v(" "),
                                _vm._m(1)
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.sortedProducts, function(
                                product,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", [
                                    product.pro_image != null
                                      ? _c("span", [
                                          _c("img", {
                                            attrs: {
                                              src: "../" + product.pro_image,
                                              loading: "lazy",
                                              height: "20px",
                                              width: "20px"
                                            }
                                          })
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    product.pro_image === null
                                      ? _c("span", [
                                          _c("img", {
                                            attrs: {
                                              src: _vm.NoImageAvailable,
                                              height: "20px",
                                              width: "20px"
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(product.sys_pro_name))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.pro_category != null
                                      ? _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(product.pro_category) +
                                              " "
                                          )
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product["belongs_to_brand"] != null
                                      ? _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                product["belongs_to_brand"][
                                                  "brand_name"
                                                ]
                                              ) +
                                              " "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    product["belongs_to_brand"] === null
                                      ? _c(
                                          "span",
                                          { staticClass: "red text-bold" },
                                          [_vm._v(" No Brand ")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\r\n                          " +
                                        _vm._s(product.pro_status) +
                                        " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("small", [
                                      product.pro_qty > 5
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "green",
                                                "font-weight": "500"
                                              }
                                            },
                                            [_vm._v(" Available")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty <= 5 &&
                                      product.pro_qty > 0
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "500"
                                              }
                                            },
                                            [_vm._v(" Low Stock")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty === 0
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "bold"
                                              }
                                            },
                                            [_vm._v(" Out of Stock")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      product.pro_qty === null
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "red",
                                                "font-weight": "bold"
                                              }
                                            },
                                            [_vm._v("Update")]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.pro_sale_price
                                      ? _c("span", [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "text-decoration":
                                                  "line-through"
                                              },
                                              attrs: { title: "Main Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(product.pro_price) +
                                                  " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-weight": "600",
                                                color: "green"
                                              },
                                              attrs: { title: "Sale Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    product.pro_sale_price
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !product.pro_sale_price
                                      ? _c("span", [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-weight": "600",
                                                color: "green"
                                              },
                                              attrs: { title: "Main Price" }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(product.pro_price) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-right" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn-group option-dropdown-manu-style left"
                                      },
                                      [
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown-menu dropdown-menu-right"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "dropdown-item text-green",
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(product.sys_pro_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticClass: "dropdown-divider"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary- btn-flat btn-sm",
                                                attrs: {
                                                  "data-toggle": "modal",
                                                  "data-target": "#formModal"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.ViewDetails(
                                                      product
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-eye primary "
                                                }),
                                                _vm._v(
                                                  " More Details ...\r\n                              "
                                                )
                                              ]
                                            )
                                          ]
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
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-footer bg-white clearfix mt-2 pb-0 pl-3 pr-3"
                      },
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
                    ),
                    _vm._v(" "),
                    _c("SupplierProductViewComponent")
                  ],
                  1
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
    return _c("div", { staticClass: "card-header border-transparent pl-2" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Products")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "2%", "text-align": "right" } }, [
      _c("strong", [_vm._v("...")])
    ])
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
      [_c("i", { staticClass: "fas fa-ellipsis-v text-white" })]
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
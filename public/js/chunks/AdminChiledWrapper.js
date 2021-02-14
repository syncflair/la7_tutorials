(self["webpackChunk"] = self["webpackChunk"] || []).push([["AdminChiledWrapper"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_NavbarTop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layouts/NavbarTop.vue */ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue");
/* harmony import */ var _Layouts_AssideLeftForAdminChild_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layouts/AssideLeftForAdminChild.vue */ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue");
/* harmony import */ var _Layouts_FooterforAdminChild_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layouts/FooterforAdminChild.vue */ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //Load to every page

 //Load to every page
//import AssideRightForAdminChild from './Layouts/AssideRightForAdminChild.vue' //Load to every page

 //Load to every page

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Admin-Child-Wrapper",
  //Get props form views/admin/dashboard.blade.php
  props: ['isadminauthenticated', 'user', 'settings'],
  data: function data() {
    return {};
  },
  components: {
    NavbarTop: _Layouts_NavbarTop_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    AssideLeftForAdminChild: _Layouts_AssideLeftForAdminChild_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    //AssideRightForAdminChild,
    FooterforAdminChild: _Layouts_FooterforAdminChild_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  methods: {},
  created: function created() {
    //direct commit (mutations) to resources/js/store/commonStoreForAll.js
    this.$store.commit('AuthenticationForAdmin/IS_AUTHENTICATED_CHECK', this.isadminauthenticated);
    this.$store.commit('AuthenticationForAdmin/AUTH_USER', this.user);
    this.$store.commit('AuthenticationForAdmin/SYSTEM_SETTINGS', this.settings); // this.$store.commit('commonStoreForAll/AUTH_USER', this.user ); 
    // this.$store.commit('commonStoreForAll/AUTH_PERMISSIONS', this.permissions ); 
  },
  mounted: function mounted() {//console.log(this.user)
    //console.log(this.myName)
    //console.log()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  name: "admin-child-left-asside-component",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForAdmin', ['authUser'])), {}, {
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    }
  }),
  watch: {},
  components: {},
  methods: {
    Logout: function Logout() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/logout').then(function (_ref) {
        var response = _ref.response;

        _this.$Progress.finish(); //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false );  


        window.location = '/'; //this.$router.push({ path : '/home' });   //route after successfule 
        //this.$router.replace({ path : '/home' });   //route after successfule 
        //this.$router.go('/home');                  
        //toastr.success('Logout successfule');              
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Logout          

  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
//const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "admin-child-footer-component",
  data: function data() {
    return {};
  },
  watch: {//for title
    // '$route': function (val){
    //     this.breadcrumb = $route.meta.breadcrumb;
    // }
    // $route:{
    //     handler: (to, from) => {
    //         this.breadcrumb = $route.meta.breadcrumb;
    //     },
    //      //immediate: true,
    // }
  },
  components: {//HeaderTopbar, FooterComponent,
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {
    console.log();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "admin-child-navbar-top-component",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForAdmin', ['authUser', 'systemSettings'])), {}, {
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    }
  }),
  watch: {},
  components: {},
  methods: {
    Logout: function Logout() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/logout').then(function (_ref) {
        var response = _ref.response;

        _this.$Progress.finish(); //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false );                    


        window.location = '/home'; //this.$router.push({ path : '/home' });   //route after successfule 
        //this.$router.replace({ path : '/home' });   //route after successfule 
        //this.$router.go('/home');                  
        //toastr.success('Logout successfule');              
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Logout        

  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/AdminChild/AdminChildWrapper.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildWrapper.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminChildWrapper.vue?vue&type=template&id=0d34ba0f& */ "./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f&");
/* harmony import */ var _AdminChildWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminChildWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AdminChildWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminChild/AdminChildWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssideLeftForAdminChild.vue?vue&type=template&id=35949f49& */ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49&");
/* harmony import */ var _AssideLeftForAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssideLeftForAdminChild.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AssideLeftForAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterforAdminChild.vue?vue&type=template&id=bbf35a44& */ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44&");
/* harmony import */ var _FooterforAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterforAdminChild.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FooterforAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/NavbarTop.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarTop.vue?vue&type=template&id=023b17c8& */ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8&");
/* harmony import */ var _NavbarTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarTop.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavbarTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminChild/Layouts/NavbarTop.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminChildWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssideLeftForAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssideLeftForAdminChild.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssideLeftForAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterforAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterforAdminChild.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterforAdminChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminChildWrapper_vue_vue_type_template_id_0d34ba0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminChildWrapper.vue?vue&type=template&id=0d34ba0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f&");


/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssideLeftForAdminChild_vue_vue_type_template_id_35949f49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssideLeftForAdminChild.vue?vue&type=template&id=35949f49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49&");


/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterforAdminChild_vue_vue_type_template_id_bbf35a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterforAdminChild.vue?vue&type=template&id=bbf35a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44&");


/***/ }),

/***/ "./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTop_vue_vue_type_template_id_023b17c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTop.vue?vue&type=template&id=023b17c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/AdminChildWrapper.vue?vue&type=template&id=0d34ba0f& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c("NavbarTop"),
      _vm._v(" "),
      _c("AssideLeftForAdminChild"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-wrapper" },
        [_c("router-view"), _vm._v(" "), _c("vue-progress-bar")],
        1
      ),
      _vm._v(" "),
      _c("FooterforAdminChild")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/AssideLeftForAdminChild.vue?vue&type=template&id=35949f49& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "aside",
    { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar" }, [
        _c("div", { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
          _c("div", { staticClass: "image" }),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("a", { staticClass: "d-block", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.authUser.name))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("nav", { staticClass: "mt-2" }, [
          _c(
            "ul",
            {
              staticClass: "nav nav-pills nav-sidebar flex-column",
              attrs: {
                "data-widget": "treeview",
                role: "menu",
                "data-accordion": "false"
              }
            },
            [
              _vm.authUser.role_id === 7 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 8 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 9 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 10
                ? _c("span", [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("dashboard-order")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/dashboard-order" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-tachometer-alt text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Dashboard")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("order-all")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/order-all" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-list-ul text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("All Order")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("order-complete")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/order-complete" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-list-ul text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Order Complete")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("order-failed")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/order-failed" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-list-ul text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Order failed")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("dashboard-delivery")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/dashboard-delivery" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-tachometer-alt text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Dashboard --")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("delivery-pending")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/delivery-pending" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-list-ul text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Delivery Pending")])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 11 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 12 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 13
                ? _c("span", [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("dashboard-delivery")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/dashboard-delivery" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-tachometer-alt text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Dashboard")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("delivery-pending")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/delivery-pending" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-list-ul text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Delivery Pending")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("delivery-complete")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/delivery-complete" }
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon fas fa-truck text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Delivery Complete")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("delivery-failed")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/delivery-failed" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-exclamation-triangle text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Delivery Failed")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link dropdown-item-custome",
                            class: [_vm.currentPage.includes("delivery-report")]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/delivery-report" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon fas fa-history text-warning"
                            }),
                            _vm._v(" "),
                            _c("p", [_vm._v("Reports ")])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 14 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 15 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 16 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _vm.authUser.role_id === 17 ? _c("span") : _vm._e(),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link dropdown-item-custome",
                      class: [_vm.currentPage.includes("admin-user-profile")]
                        ? _vm.ActiveLinkClass
                        : 0,
                      attrs: { to: "/spaa/admin-user-profile" }
                    },
                    [
                      _c("i", {
                        staticClass: "nav-icon- far fa-user-circle text-warning"
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("My profile")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-item-custome pl-4-",
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.Logout()
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "nav-icon-  fas fa-sign-out-alt text-warning"
                    }),
                    _vm._v(" Logout")
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "brand-link", attrs: { href: "/" } }, [
      _c("span", { staticClass: "brand-text font-weight-light" }, [
        _vm._v("SORBORAHO Logo")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/FooterforAdminChild.vue?vue&type=template&id=bbf35a44& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-footer" }, [
      _c("div", { staticClass: "text-center" }, [
        _c("small", [
          _vm._v("Copyright © 2014-2019 "),
          _c("a", { attrs: { href: "https://sorboraho.com" } }, [
            _vm._v("Sorboraho")
          ]),
          _vm._v(". All rights reserved.  ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AdminChild/Layouts/NavbarTop.vue?vue&type=template&id=023b17c8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass:
        "main-header navbar navbar-expand-md navbar-light navbar-white"
    },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "router-link",
            {
              staticClass: "navbar-brand",
              attrs: { to: "/dashboard-delivery" }
            },
            [
              _c("img", {
                staticClass: "brand-image img-circle elevation-3",
                staticStyle: { opacity: ".8", "max-width": "200px !important" },
                attrs: { src: "", alt: "Sorboraho Logo" }
              })
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass:
                "order-1 order-md-3 navbar-nav navbar-no-expand ml-auto"
            },
            [
              _c("li", { staticClass: "nav-item dropdown" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-lg dropdown-menu-right"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item dropdown-footer",
                        attrs: { to: "/spaa/admin-user-notification" }
                      },
                      [_vm._v("See All Messages")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-lg dropdown-menu-right"
                  },
                  [
                    _c("span", { staticClass: "dropdown-header" }, [
                      _vm._v("15 Notifications")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item dropdown-footer",
                        attrs: { to: "/spaa/admin-user-notification" }
                      },
                      [_vm._v("See All Notifications")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      id: "dropdownSubMenu1",
                      href: "#",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v(_vm._s(_vm.authUser.name))]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "dropdown-menu border-0 shadow dropdown-menu-right",
                    attrs: { "aria-labelledby": "dropdownSubMenu1" }
                  },
                  [
                    _vm.authUser.role_id === 7 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 8 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 9 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 10
                      ? _c("span", [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes("dashboard-order")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/dashboard-order" }
                                },
                                [_vm._v(" Dashboard")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [_vm.currentPage.includes("order-all")]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/order-all" }
                                },
                                [_vm._v(" All Order")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes("order-complete")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/order-complete" }
                                },
                                [_vm._v(" Order Complete")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes("order-failed")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/order-failed" }
                                },
                                [_vm._v(" Order failed")]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 11 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 12 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 13
                      ? _c("span", [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes(
                                      "dashboard-delivery"
                                    )
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/dashboard-delivery" }
                                },
                                [_vm._v(" Dashboard")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes("delivery-pending")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/delivery-pending" }
                                },
                                [_vm._v(" Delivery Pending")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes(
                                      "delivery-complete"
                                    )
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/delivery-complete" }
                                },
                                [_vm._v(" Delivery Complete")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes("delivery-failed")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/delivery-failed" }
                                },
                                [_vm._v(" Delivery Failed")]
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
                                    "dropdown-item dropdown-item-custome",
                                  class: [
                                    _vm.currentPage.includes(
                                      "admin-user-profile"
                                    )
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/spaa/delivery-report" }
                                },
                                [_vm._v(" Report / History")]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 14 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 15 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 16 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm.authUser.role_id === 17 ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item dropdown-item-custome",
                            class: [
                              _vm.currentPage.includes("admin-user-profile")
                            ]
                              ? _vm.ActiveLinkClass
                              : 0,
                            attrs: { to: "/spaa/admin-user-profile" }
                          },
                          [_vm._v(" My Profile")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item dropdown-item-custome",
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
              ])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "navbar-brand",
        attrs: { "data-widget": "pushmenu", href: "#", role: "button" }
      },
      [_c("i", { staticClass: "fas fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link",
        attrs: { "data-toggle": "dropdown", href: "#" }
      },
      [
        _c("i", { staticClass: "fas fa-comments" }),
        _vm._v(" "),
        _c("span", { staticClass: "badge badge-danger navbar-badge" }, [
          _vm._v("3")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("div", { staticClass: "media" }, [
        _c("div", { staticClass: "media-body" }, [
          _c("h3", { staticClass: "dropdown-item-title" }, [
            _vm._v(
              "\r\n                    Brad Diesel\r\n                    "
            ),
            _c("span", { staticClass: "float-right text-sm text-danger" }, [
              _c("i", { staticClass: "fas fa-star" })
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm" }, [
            _vm._v("Call me whenever you can...")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm text-muted" }, [
            _c("i", { staticClass: "far fa-clock mr-1" }),
            _vm._v(" 4 Hours Ago")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("div", { staticClass: "media" }, [
        _c("div", { staticClass: "media-body" }, [
          _c("h3", { staticClass: "dropdown-item-title" }, [
            _vm._v(
              "\r\n                    John Pierce\r\n                    "
            ),
            _c("span", { staticClass: "float-right text-sm text-muted" }, [
              _c("i", { staticClass: "fas fa-star" })
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm" }, [
            _vm._v("I got your message bro")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm text-muted" }, [
            _c("i", { staticClass: "far fa-clock mr-1" }),
            _vm._v(" 4 Hours Ago")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("div", { staticClass: "media" }, [
        _c("div", { staticClass: "media-body" }, [
          _c("h3", { staticClass: "dropdown-item-title" }, [
            _vm._v(
              "\r\n                    Nora Silvester\r\n                    "
            ),
            _c("span", { staticClass: "float-right text-sm text-warning" }, [
              _c("i", { staticClass: "fas fa-star" })
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm" }, [
            _vm._v("The subject goes here")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm text-muted" }, [
            _c("i", { staticClass: "far fa-clock mr-1" }),
            _vm._v(" 4 Hours Ago")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link",
        attrs: { "data-toggle": "dropdown", href: "#" }
      },
      [
        _c("i", { staticClass: "far fa-bell" }),
        _vm._v(" "),
        _c("span", { staticClass: "badge badge-warning navbar-badge" }, [
          _vm._v("15")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-envelope mr-2" }),
      _vm._v(" 4 new messages\r\n              "),
      _c("span", { staticClass: "float-right text-muted text-sm" }, [
        _vm._v("3 mins")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-users mr-2" }),
      _vm._v(" 8 friend requests\r\n              "),
      _c("span", { staticClass: "float-right text-muted text-sm" }, [
        _vm._v("12 hours")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-file mr-2" }),
      _vm._v(" 3 new reports\r\n              "),
      _c("span", { staticClass: "float-right text-muted text-sm" }, [
        _vm._v("2 days")
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
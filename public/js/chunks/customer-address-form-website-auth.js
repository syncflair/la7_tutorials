(self["webpackChunk"] = self["webpackChunk"] || []).push([["customer-address-form-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "nav-for-admin-customer-website-auth",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForCustomer', ['authCustomer'])), {}, {
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

      axios.post('/customer/logout').then(function (_ref) {
        var response = _ref.response;

        //console.log(response); 
        //if(response.success){             
        // toastr.success(response.success);         
        _this.$Progress.finish();

        _this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false);

        window.location = '/home'; //this.$router.push({ path : '/home' });   //route after successfule 
        //this.$router.replace({ path : '/home' });   //route after successfule 
        //this.$router.go('/home');
        //toastr.success('Logout successfule'); 
        //}
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Logout 

  },
  created: function created() {},
  mounted: function mounted() {// console.log(this.baseURL);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "customer-address-form-website-auth",
  data: function data() {
    return {
      editMode: false,
      //Use this for add edit using the same form 
      form: new Form({
        id: '',
        customer_id: '',
        customer_name: '',
        company: '',
        address_1: '',
        //address_2:'', 
        country_id: 18,
        //this id use for bangladesh 
        division_id: '',
        district_id: '',
        area_zone_id: '',
        city: '',
        zip: '' //default_address:'',		          

      })
    };
  },
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__.default
  },
  // watch: {
  //     /*Add Remove Class based on window width change*/
  //     'form.customer_id': function (val) {               
  //        this.customer_id == 2
  //     },
  // },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('AuthenticationForCustomer', ['authCustomer'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('commonStoreForAll', ['Divisions', 'Districts', 'Dist_Zones'])),
  methods: {
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data);
      }
    },
    storeFormData: function storeFormData() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package
      // this.form.post('/auth/my-address')

      this.form.post('/api/afc/my-address').then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        if (data.success) {
          _this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerAddress', _this.authCustomer.id); //get auth customer address 


          _this.$Progress.finish();

          toastr.success(data.success);

          _this.$router.push({
            path: '/auth/my-profile'
          })["catch"](function (err) {});

          _this.form.reset(); //reset from after submit                 

        }

        if (data.error) {
          toastr.warning(data.success);

          _this.$Progress.finish();
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package
      // this.form.put('/auth/my-address/'+this.form.id)

      this.form.put('/api/afc/my-address/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          _this2.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerAddress', _this2.authCustomer.id); //get auth customer address 


          _this2.$Progress.finish();

          toastr.success(data.success); //this.form.reset();  //reset from after submit

          _this2.editMode = false;

          _this2.$router.push({
            path: '/auth/my-profile'
          })["catch"](function (err) {});
        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    // getDivision(e){
    //     // alert(e.target.value);
    //     let data = e.target.value;
    //     this.$store.dispatch('commonStoreForAll/fetchDivisionList', data); //get Division
    // },
    getDistrict: function getDistrict(e) {
      //alert('Ok')
      var data = e.target.value;
      this.$store.dispatch('commonStoreForAll/fetchDistrictList', data); //get Division
    },
    getDistrictZone: function getDistrictZone(e) {
      var data = e.target.value;
      this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', data); //get District Zone
    }
  },
  created: function created() {
    this.fillForm(); //this.$store.dispatch('commonStoreForAll/fetchCountryList'); //get country

    this.$store.dispatch('commonStoreForAll/fetchDivisionList', ''); //get Division

    this.$store.dispatch('commonStoreForAll/fetchDistrictList', ''); //get District

    this.$store.dispatch('commonStoreForAll/fetchDistrictZoneList', ''); //get zone Area
  },
  mounted: function mounted() {
    var _this3 = this;

    //$.HSCore.components.HSSelectPicker.init('.js-select');
    setTimeout(function () {
      // initialization of select picker
      //$.HSCore.components.HSSelectPicker.init('.js-select');
      _this3.form.customer_id = _this3.authCustomer.id;
    }, 3000);
    this.$nextTick(function () {
      FireEvent.$emit('Call_all_javascript_function_for_theme'); // call all javascript for theme
    }); //end this.$nextTick
  }
});

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");
/* harmony import */ var _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a&");
/* harmony import */ var _CustomerAddressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddressForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerAddressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerAddressForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddressForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavForAdminCustomer_vue_vue_type_template_id_7edd6422___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavForAdminCustomer.vue?vue&type=template&id=7edd6422& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&");


/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddressForm_vue_vue_type_template_id_4cc0fd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue?vue&type=template&id=7edd6422& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
            "user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top- section-title"
        },
        [
          _c("div", { staticClass: "info border- bg-gray-1- rounded-lg-" }, [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.authCustomer,
                    expression: "authCustomer"
                  }
                ],
                staticClass: "font-size-10 text-black"
              },
              [_vm._v(" " + _vm._s(_vm.authCustomer.name) + " ")]
            ),
            _vm._v(" "),
            _c("br")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "list-unstyled dropdown-list dropdown-list-custome",
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
                  attrs: { to: "/auth/my-dashboard" }
                },
                [_vm._v("Dashboard\n                ")]
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
                  attrs: { to: "/auth/my-orders" }
                },
                [_vm._v("My Orders\n                    ")]
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
                  class: [_vm.currentPage.includes("my-cart")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-cart" }
                },
                [_vm._v("My Cart\n                ")]
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
                  class: [_vm.currentPage.includes("my-wishlist")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-wishlist" }
                },
                [_vm._v("Wishlist\n            \t")]
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
                  attrs: { to: "/auth/my-profile" }
                },
                [_vm._v(" My Profile\n\t            ")]
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
                  class: [_vm.currentPage.includes("my-vouchers")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-vouchers" }
                },
                [_vm._v("Vouchers\n            \t")]
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
                  class: [_vm.currentPage.includes("my-reviews")]
                    ? _vm.ActiveLinkClass
                    : 0,
                  attrs: { to: "/auth/my-reviews" }
                },
                [_vm._v("My Reviews\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "border-top-" }, [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerAddressForm.vue?vue&type=template&id=4cc0fd7a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mb-5 mt-4" }, [
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
            _c(
              "div",
              { staticClass: "col-md-12 border-bottom border-color-1 mb-3" },
              [
                _c(
                  "h3",
                  {
                    staticClass: "section-title- mb-0 pb-1 pl-2- font-size-18"
                  },
                  [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.editMode,
                            expression: "!editMode"
                          }
                        ]
                      },
                      [_vm._v("Add Address")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editMode,
                            expression: "editMode"
                          }
                        ]
                      },
                      [_vm._v("Update Address")]
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
                  "col-md-8 offset-md-2 mb-8 w-100 wishlist-table cart-wishlist-custome"
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
                        _vm.editMode
                          ? _vm.updateFormData()
                          : _vm.storeFormData()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row text-center-" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "js-form-message- mb-2" },
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
                                  value: _vm.form.customer_name,
                                  expression: "form.customer_name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "customer_name"
                                )
                              },
                              attrs: {
                                type: "text",
                                name: "customer_name",
                                placeholder: "Enter Name"
                              },
                              domProps: { value: _vm.form.customer_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "customer_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "customer_name" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "js-form-message- mb-2" },
                          [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(" Company ")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.company,
                                  expression: "form.company"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("company")
                              },
                              attrs: {
                                type: "text",
                                name: "company",
                                placeholder: "Enter Company name"
                              },
                              domProps: { value: _vm.form.company },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "company",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "company" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "js-form-message- mb-2" }, [
                          _c("label", { staticClass: "form-label" }, [
                            _vm._v("Address")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "input-group" },
                            [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.address_1,
                                    expression: "form.address_1"
                                  }
                                ],
                                staticClass: "form-control p-2",
                                class: {
                                  "is-invalid": _vm.form.errors.has("address_1")
                                },
                                staticStyle: {
                                  "margin-top": "0px",
                                  "margin-bottom": "0px"
                                },
                                attrs: {
                                  name: "address_1",
                                  rows: "2",
                                  placeholder: "",
                                  placeholder: "Enter Address"
                                },
                                domProps: { value: _vm.form.address_1 },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "address_1",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "address_1" }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "js-form-message mb-2" },
                          [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(" Division *")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.division_id,
                                    expression: "form.division_id"
                                  }
                                ],
                                staticClass:
                                  "form-control js-select- selectpicker- dropdown-select-",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "division_id"
                                  )
                                },
                                attrs: {
                                  "data-style":
                                    "form-control border-color-1 font-weight-normal",
                                  name: "division_id"
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "division_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.getDistrict($event)
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [_vm._v("Select division ")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.Divisions, function(division) {
                                  return _c(
                                    "option",
                                    { domProps: { value: division.id } },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(division.division_name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "division_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "js-form-message- mb-2" },
                          [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(" District / City *")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.district_id,
                                    expression: "form.district_id"
                                  }
                                ],
                                staticClass:
                                  "form-control js-select- selectpicker- dropdown-select-",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "district_id"
                                  )
                                },
                                attrs: {
                                  "data-style":
                                    "form-control border-color-1 font-weight-normal",
                                  name: "district_id"
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "district_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.getDistrictZone($event)
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [_vm._v("Select district / city")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.Districts, function(district) {
                                  return _c(
                                    "option",
                                    { domProps: { value: district.id } },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(district.district_name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "district_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "js-form-message- mb-2" },
                          [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v(" Zone / Area *")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.area_zone_id,
                                    expression: "form.area_zone_id"
                                  }
                                ],
                                staticClass:
                                  "form-control js-select- selectpicker- dropdown-select-",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "area_zone_id"
                                  )
                                },
                                attrs: {
                                  "data-style":
                                    "form-control border-color-1 font-weight-normal",
                                  name: "area_zone_id"
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "area_zone_id",
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
                                  [_vm._v("Select zone / area")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.Dist_Zones, function(zone) {
                                  return _c(
                                    "option",
                                    { domProps: { value: zone.id } },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(zone.zone_name) +
                                          " - " +
                                          _vm._s(zone.zip_code) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "area_zone_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "js-form-message- mb-2" }, [
                          _c("label", { staticClass: "form-label" }, [
                            _vm._v("City")
                          ]),
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
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "city",
                              placeholder: "Enter City"
                            },
                            domProps: { value: _vm.form.city },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "city", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "js-form-message- mb-2" }, [
                          _c("label", { staticClass: "form-label" }, [
                            _vm._v("Zip")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.zip,
                                expression: "form.zip"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "zip",
                              placeholder: "Enter ZIP"
                            },
                            domProps: { value: _vm.form.zip },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "zip", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3 text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary-dark-w px-5",
                          attrs: { type: "submit" }
                        },
                        [
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.editMode,
                                  expression: "!editMode"
                                }
                              ]
                            },
                            [
                              _c("i", { staticClass: "fas fa-save" }),
                              _vm._v(" Save")
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
                                  value: _vm.editMode,
                                  expression: "editMode"
                                }
                              ]
                            },
                            [
                              _c("i", { staticClass: "far fa-edit" }),
                              _vm._v(" Update")
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v("\n        " + _vm._s(_vm.authCustomer.id) + "\n    ")
  ])
}
var staticRenderFns = []
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
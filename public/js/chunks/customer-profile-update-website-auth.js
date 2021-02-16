(self["webpackChunk"] = self["webpackChunk"] || []).push([["customer-profile-update-website-auth"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "customer-Profile-Update-website-auth",
  data: function data() {
    return {
      //for change email address management
      change_email: false,
      change_phone: false,
      gender_type: [{
        name: 'Male'
      }, {
        name: 'Female'
      }, {
        name: 'Other'
      }],
      //editMode: false, //Use this for add edit using the same form 
      form: new Form({
        id: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        old_password: '',
        password_confirmation: '',
        gender: '',
        date_of_birth: '',
        email_verification_code: '',
        new_email: '',
        phone_verification_code: '',
        new_phone: ''
      })
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('AuthenticationForCustomer', ['authCustomer'])),
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    editData: function editData(data) {
      //this.editMode = true;
      this.form.fill(data);
    },
    CustomerProfileUpdate: function CustomerProfileUpdate() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerProfileUpdate').then(function (_ref) {
        var data = _ref.data;

        _this.$Progress.finish();

        if (data.success) {
          _this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
        }

        if (data.error) {
          _this.$Progress.fail();

          toastr.warning(data.error);
        } //console.log(data);

      })["catch"](function (data) {
        _this.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    SendCustomerEmailChangeVerificationCode: function SendCustomerEmailChangeVerificationCode() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/SendCustomerEmailChangeVerificationCode').then(function (_ref2) {
        var data = _ref2.data;

        _this2.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this2.change_email = true;
        }

        if (data.error) {
          _this2.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this2.$Progress.fail(); //toastr.warning('The given data was invalid.');
        // console.log(data.message);

      });
    },
    CustomerChangeEmail: function CustomerChangeEmail() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangeEmail').then(function (_ref3) {
        var data = _ref3.data;

        _this3.$Progress.finish();

        if (data.success) {
          _this3.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
          _this3.change_email = false;
          _this3.form.new_email = '';
          _this3.form.email_verification_code = '';
        }

        if (data.error) {
          _this3.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this3.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    CancelChangeEmail: function CancelChangeEmail() {
      var _this4 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CancelChangeEmail').then(function (_ref4) {
        var data = _ref4.data;

        _this4.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this4.change_email = false;
          _this4.form.new_email = '';
          _this4.form.email_verification_code = '';
        }

        if (data.error) {
          _this4.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this4.$Progress.fail();
      });
    },
    SendCustomerPhoneChangeVerificationCode: function SendCustomerPhoneChangeVerificationCode() {
      var _this5 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/SendCustomerPhoneChangeVerificationCode').then(function (_ref5) {
        var data = _ref5.data;

        _this5.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this5.change_phone = true;
        }

        if (data.error) {
          _this5.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this5.$Progress.fail(); //toastr.warning('The given data was invalid.');

      });
    },
    CustomerChangePhone: function CustomerChangePhone() {
      var _this6 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangePhone').then(function (_ref6) {
        var data = _ref6.data;

        _this6.$Progress.finish();

        if (data.success) {
          _this6.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 


          toastr.success(data.success);
          _this6.change_phone = false;
          _this6.form.new_phone = '';
          _this6.form.phone_verification_code = '';
        }

        if (data.error) {
          _this6.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this6.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    CancelChangePhone: function CancelChangePhone() {
      var _this7 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CancelChangePhone').then(function (_ref7) {
        var data = _ref7.data;

        _this7.$Progress.finish();

        if (data.success) {
          toastr.success(data.success);
          _this7.change_phone = false;
          _this7.form.new_phone = '';
          _this7.form.phone_verification_code = '';
        }

        if (data.error) {
          _this7.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this7.$Progress.fail();
      });
    },
    CustomerChangePassword: function CustomerChangePassword() {
      var _this8 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/auth/CustomerChangePassword').then(function (_ref8) {
        var data = _ref8.data;

        _this8.$Progress.finish();

        if (data.success) {
          //this.form.reset();  //reset from after submit
          _this8.form.old_password = '';
          _this8.form.password = '';
          _this8.form.password_confirmation = '';

          _this8.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data                         


          toastr.success(data.success); //console.log(data.success); 
        }

        if (data.error) {
          _this8.$Progress.fail();

          toastr.warning(data.error);
        }
      })["catch"](function (data) {
        _this8.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    }
  },
  created: function created() {
    this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 

    this.editData(this.authCustomer);
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      //initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      }); // initialization of svg injector module

      $.HSCore.components.HSSVGIngector.init('.js-svg-injector'); // initialization of header

      $.HSCore.components.HSHeader.init($('#header')); // initialization of animation

      $.HSCore.components.HSOnScrollAnimation.init('[data-animation]'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function afterOpen() {
          $(this).find('input[type="search"]').focus();
        }
      }); // initialization of countdowns
      // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
      //     yearsElSelector: '.js-cd-years',
      //     monthsElSelector: '.js-cd-months',
      //     daysElSelector: '.js-cd-days',
      //     hoursElSelector: '.js-cd-hours',
      //     minutesElSelector: '.js-cd-minutes',
      //     secondsElSelector: '.js-cd-seconds'
      // });
      // initialization of malihu scrollbar

      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar')); // initialization of forms

      $.HSCore.components.HSFocusState.init(); // initialization of form validation
      // $.HSCore.components.HSValidation.init('.js-validate', {
      //     rules: {
      //         confirmPassword: {
      //             equalTo: '#signupPassword'
      //         }
      //     }
      // });
      // initialization of show animations

      $.HSCore.components.HSShowAnimation.init('.js-animation-link'); // initialization of fancybox
      // initialization of popups

      $.HSCore.components.HSFancyBox.init('.js-fancybox'); // initialization of slick carousel
      // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      // initialization of go to

      $.HSCore.components.HSGoTo.init('.js-go-to'); // initialization of hamburgers

      $.HSCore.components.HSHamburgers.init('#hamburgerTrigger'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function beforeClose() {
          $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function afterClose() {
          $('#headerSidebarList .collapse.show').collapse('hide');
        }
      });
      $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        if ($(this).attr('aria-expanded') === "true") {
          $(target).collapse('hide');
        } else {
          $(target).collapse('show');
        }
      }); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]')); // initialization of select picker
      // $.HSCore.components.HSSelectPicker.init('.js-select');
      // initialization of HSScrollNav component
      // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
      //   duration: 700
      // });
      // initialization of quantity counter
      //$.HSCore.components.HSQantityCounter.init('.js-quantity');
      // initialization of forms
      //$.HSCore.components.HSRangeSlider.init('.js-range-slider');
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

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerProfileUpdate.vue?vue&type=template&id=51785706& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&");
/* harmony import */ var _CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerProfileUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue"
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

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfileUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfileUpdate_vue_vue_type_template_id_51785706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfileUpdate.vue?vue&type=template&id=51785706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&");


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
            _c("br"),
            _vm._v(" "),
            _vm._m(0)
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "btn- px-1 bg-success text-white font-size-9- rounded-lg"
      },
      [
        _c("i", { staticClass: "fas fa-check font-size-8" }),
        _vm._v(" "),
        _c("small", [_vm._v("Verified")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AdminCustomer/Profile/CustomerProfileUpdate.vue?vue&type=template&id=51785706& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mb-10 mt-4" }, [
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
            _c("div", { staticClass: "col-lg-12  col- order-lg-1" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-content",
                  attrs: { id: "pills-tabContent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2 show active",
                      attrs: {
                        id: "pills-one-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-one-example1-tab"
                      }
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
                              return _vm.CustomerProfileUpdate()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row text-center-" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
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
                                        value: _vm.form.name,
                                        expression: "form.name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("name")
                                    },
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.form.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "name" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Gender ")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.gender,
                                          expression: "form.gender"
                                        }
                                      ],
                                      staticClass:
                                        "form-control js-select- selectpicker- dropdown-select",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "gender"
                                        )
                                      },
                                      attrs: {
                                        "data-style":
                                          "form-control border-color-1 font-weight-normal",
                                        name: "gender"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "gender",
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
                                        [_vm._v("Select gender ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.gender_type, function(gt) {
                                        return _c(
                                          "option",
                                          { domProps: { value: gt.name } },
                                          [
                                            _vm._v(
                                              "\n                                                      " +
                                                _vm._s(gt.name) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "gender" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v("Dath of Birth")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.date_of_birth,
                                        expression: "form.date_of_birth"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "date_of_birth"
                                      )
                                    },
                                    attrs: { type: "date", placeholder: "" },
                                    domProps: { value: _vm.form.date_of_birth },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "date_of_birth",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "date_of_birth"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-two-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-two-example1-tab"
                      }
                    },
                    [
                      !_vm.change_email
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-3 col-6 offset-3 mb-1 col-6-"
                            },
                            [
                              _c(
                                "dir",
                                { staticClass: "row" },
                                [
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          " mb-0 pb-1 pl-2- font-size-14"
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-1" }, [
                                      _vm._v(
                                        " " + _vm._s(_vm.authCustomer.email)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 text-left" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary-dark-w px-5",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.SendCustomerEmailChangeVerificationCode()
                                              }
                                            }
                                          },
                                          [_vm._v("Change Email")]
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.change_email
                        ? _c(
                            "form",
                            {
                              staticClass: "js-validate-",
                              attrs: { novalidate: "novalidate-" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.CustomerChangeEmail()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-white- text-secondary mb-3"
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v("Existing email:")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-blue" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.authCustomer.email)
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-6" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("New email")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.new_email,
                                              expression: "form.new_email"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "new_email"
                                            )
                                          },
                                          attrs: {
                                            type: "new_email",
                                            placeholder:
                                              "Enter your new email address"
                                          },
                                          domProps: {
                                            value: _vm.form.new_email
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "new_email",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "new_email"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-3" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("Verification Code")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.form
                                                  .email_verification_code,
                                              expression:
                                                "form.email_verification_code"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "email_verification_code"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Enter your verification code"
                                          },
                                          domProps: {
                                            value:
                                              _vm.form.email_verification_code
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "email_verification_code",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "email_verification_code"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.change_email
                                ? _c("dir", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 offset-md-3" },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "small text-muted" },
                                          [
                                            _vm._v(
                                              "Check your email to verification code, if did't get "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.SendCustomerEmailChangeVerificationCode()
                                                  }
                                                }
                                              },
                                              [_vm._v(" Resend")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-3 text-right" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.CancelChangeEmail()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Save Email")]
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-three-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-three-example1-tab"
                      }
                    },
                    [
                      !_vm.change_phone
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-3 col-6 offset-3 mb-1 col-6-"
                            },
                            [
                              _c(
                                "dir",
                                { staticClass: "row" },
                                [
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          " mb-0 pb-1 pl-2- font-size-14"
                                      },
                                      [_vm._v("Phone")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-1" }, [
                                      _vm._v(
                                        " " + _vm._s(_vm.authCustomer.phone)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("dir", { staticClass: "col-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "mb-3 text-left" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary-dark-w px-5",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.SendCustomerPhoneChangeVerificationCode()
                                              }
                                            }
                                          },
                                          [_vm._v("Change Phone")]
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.change_phone
                        ? _c(
                            "form",
                            {
                              staticClass: "js-validate-",
                              attrs: { novalidate: "novalidate-" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.CustomerChangePhone()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-white- text-secondary mb-3"
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v("Existing phone:")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-blue" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.authCustomer.phone)
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-6" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("New Phone")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _vm._m(2),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.form.new_phone,
                                                  expression: "form.new_phone"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid": _vm.form.errors.has(
                                                  "new_phone"
                                                )
                                              },
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter your new phone"
                                              },
                                              domProps: {
                                                value: _vm.form.new_phone
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form,
                                                    "new_phone",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("has-error", {
                                              attrs: {
                                                form: _vm.form,
                                                field: "new_phone"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6 offset-md-3" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "js-form-message- mb-3" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("Verification Code")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.form
                                                  .phone_verification_code,
                                              expression:
                                                "form.phone_verification_code"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "phone_verification_code"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Enter your verification code"
                                          },
                                          domProps: {
                                            value:
                                              _vm.form.phone_verification_code
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "phone_verification_code",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "phone_verification_code"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.change_email
                                ? _c("dir", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-6 offset-md-3" },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "small text-muted" },
                                          [
                                            _vm._v(
                                              "Check your phone to verification code, if did't get "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.SendCustomerPhoneChangeVerificationCode()
                                                  }
                                                }
                                              },
                                              [_vm._v(" Resend")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-3 text-right" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.CancelChangePhone()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary-dark-w px-5",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Save Phone")]
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade pt-2",
                      attrs: {
                        id: "pills-four-example1",
                        role: "tabpanel",
                        "aria-labelledby": "pills-four-example1-tab"
                      }
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
                              return _vm.CustomerChangePassword()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Old Password ")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.old_password,
                                        expression: "form.old_password"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "old_password"
                                      )
                                    },
                                    attrs: { type: "password" },
                                    domProps: { value: _vm.form.old_password },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "old_password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "old_password"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" New Password ")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.password,
                                        expression: "form.password"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password"
                                      )
                                    },
                                    attrs: { type: "password" },
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
                            _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "js-form-message- mb-4" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v(" Retype Password ")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.password_confirmation,
                                        expression: "form.password_confirmation"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "password_confirmation"
                                      )
                                    },
                                    attrs: { type: "password" },
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
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(3)
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "position-relative bg-white- text-center- text-left z-index-2 pb-3"
      },
      [
        _c(
          "ul",
          {
            staticClass:
              "nav nav-classic nav-tab justify-content-left justify-content-center-",
            attrs: { id: "pills-tab", role: "tablist" }
          },
          [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom active ",
                  attrs: {
                    id: "pills-one-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-one-example1",
                    role: "tab",
                    "aria-controls": "pills-one-example1",
                    "aria-selected": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            General Details\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-two-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-two-example1",
                    role: "tab",
                    "aria-controls": "pills-two-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Email\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-three-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-three-example1",
                    role: "tab",
                    "aria-controls": "pills-three-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Phone\n                                        "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-custom",
                  attrs: {
                    id: "pills-four-example1-tab",
                    "data-toggle": "pill",
                    href: "#pills-four-example1",
                    role: "tab",
                    "aria-controls": "pills-three-example1",
                    "aria-selected": "false"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-md-flex justify-content-md-center align-items-md-center"
                    },
                    [
                      _vm._v(
                        "\n                                            Password\n                                        "
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary-dark-w px-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "signinPhoneLabel" } },
        [
          _vm._v(
            " +88\n                                                        "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary-dark-w px-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save Password")]
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
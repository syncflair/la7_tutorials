(self["webpackChunk"] = self["webpackChunk"] || []).push([["website-wrapper"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
//const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Account-Sidebar-Navigation-Toggler-Public-website",
  data: function data() {
    var _Form;

    return {
      //for form top error display
      display_error: false,
      error_message: '',
      form: new Form((_Form = {
        name: '',
        username: '',
        password: '',
        remember: true,

        /*By default remember me true*/
        email: '',
        phone: ''
      }, _defineProperty(_Form, "password", ''), _defineProperty(_Form, "password_confirmation", ''), _Form))
    };
  },
  components: {//HeaderTopbar, FooterComponent,
  },
  methods: {
    sidebarContentClose: function sidebarContentClose() {
      //close sidebar content after submit
      setTimeout(function () {
        $("#sidebarContentClose").trigger('click');
      }, 300);
    },
    // Submit the form via a POST request
    CustomerLogin: function CustomerLogin() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/customer/login') // axios.post('/customer/login',{
      //       username: this.form.login.username,
      //       password: this.form.login.password
      //   }
      // )
      .then(function (_ref) {
        var data = _ref.data;

        //console.log(data);                 
        if (data.success) {
          _this.$Progress.finish();

          _this.display_error = false;

          _this.sidebarContentClose();

          _this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true);

          _this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data      
          // window.location = '/auth/my-dashboard';  
          //window.location = '/home'; 
          //this.$router.go();   
          //window.location = '/home';    
          //this.$router.reload(); //self reload                     
          //this.$router.push({ path : '/home' }).catch(err => {});   //route after successfule submit                   
          //this.$router.replace({ path : '/home' }).catch(err => {});   //route after successfule submit


          _this.form.reset(); //reset from after submit 
          //toastr.success('Login successfule'); 


          FireEvent.$emit('Call_HSCore_components_HSUnfold'); // initialization of unfold component
          //for api
          // localStorage.setItem('Auth_token', data.data.token ); //set token to store
          // this.$router.push({ path : '/dashboard' }).catch(err => {});  
        }

        if (data.error) {
          _this.$Progress.finish();

          _this.display_error = true;
          _this.error_message = data.error;
        }

        if (data.errors) {
          _this.$Progress.finish();

          _this.display_error = false;
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this.display_error = false;

        _this.$Progress.fail(); //toastr.warning('Something is wrong!');

      });
    },
    //End login  
    CustomerRegister: function CustomerRegister() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/customer/register').then(function (_ref2) {
        var data = _ref2.data;

        //console.log(data); 
        _this2.$Progress.finish();

        _this2.sidebarContentClose();

        window.location = '/home'; //this.$router.push({ path : '/home' });   //route after successfule submit                   
        // this.$router.push({ path : '/auth/login' });   //route after successfule submit                   
        //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit 

        _this2.form.reset(); //reset from after submit


        toastr.success('Registration successfule, Please verify');
      })["catch"](function (data) {
        _this2.$Progress.fail();

        toastr.warning('The given data was invalid.'); // console.log(data.message);
      });
    },
    //End reset password
    CustomerResetPassword: function CustomerResetPassword() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package
      // $("#signup").hide('fist',function(){
      //     $(this).addClass("animated slideInUp");
      //     $(this).css('opacity', '0');
      //     $(this).css('display', 'none');
      // });
      // $("#forgotPassword").hide('fist',function(){
      //     $(this).addClass("animated slideInUp");
      //     $(this).css('opacity', '0');
      //     $(this).css('display', 'none');
      // });
      // $("#login").show(function(){
      // // $("#login").show('slideUp', function(){
      //     $(this).css('display', 'block');
      //     $(this).css('opacity', '1');
      //     $(this).addClass("animated slideInUp");
      // });              

      this.form.post('/customer/password/email').then(function (_ref3) {
        var data = _ref3.data;

        //console.log(data);    
        _this3.$Progress.finish();

        _this3.sidebarContentClose(); //this.$router.push({ path : '/auth/login' });   //route after successfule submit                   
        //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit


        _this3.form.reset(); //reset from after submit 


        toastr.success(data.message);
      })["catch"](function () {
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    } //End reset password

  },
  created: function created() {
    var _this4 = this;

    //call this action from HeaderTopBar.vue component
    FireEvent.$on('FocusUsername', function () {
      setTimeout(function () {
        _this4.$refs.username.focus();
      }, 600);
    });
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "breadcrumb-Public-website",
  data: function data() {
    return {
      breadcrumb: ''
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer-website",
  components: {},
  data: function data() {
    return {};
  },
  //end data	
  methods: {// GotoHome(){
    // 	//alert('0k');
    //   		//this.$router.push({ name: 'home' });
    //   		const HomePath = "/home";
    //   		if (this.$route.path !== HomePath) {
    //   			this.$router.push(HomePath)
    //   		}
    //   	},
  },
  //end Methods
  created: function created() {// console.log(this.baseURL);
  }
}); //end export default

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CartLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartLink.vue */ "./resources/js/components/Website/Layouts/CartLink.vue");
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
 //for user MapState

 //Load to all
//import CartPopup from './CartPopup.vue' //Load to all

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header-Logo-Search-Icons-For-Home-website",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  components: {
    CartLink: _CartLink_vue__WEBPACK_IMPORTED_MODULE_0__.default //CartPopup,

  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('AuthenticationForCustomer', ['authCustomer'])), {}, {
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    }
  }),
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarNavigationHeader1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNavigationHeader1.vue */ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue");
/* harmony import */ var _CartLink_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartLink.vue */ "./resources/js/components/Website/Layouts/CartLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //Load to all

 //Load to all

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header-Logo-Menu-For-All-Page-website",
  props: ['topHeaderFixedClass'],
  data: function data() {
    return {};
  },
  components: {
    SidebarNavigationHeader1: _SidebarNavigationHeader1_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    CartLink: _CartLink_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarNavigationHeader1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNavigationHeader1.vue */ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue");
/* harmony import */ var _CartLink_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartLink.vue */ "./resources/js/components/Website/Layouts/CartLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //Load to all

 //Load to all
// import CartPopup from './CartPopup.vue' //Load to all

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header-Logo-Search-Icons-For-Home-website",
  props: ['topHeaderFixedClass'],
  data: function data() {
    return {};
  },
  components: {
    SidebarNavigationHeader1: _SidebarNavigationHeader1_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    CartLink: _CartLink_vue__WEBPACK_IMPORTED_MODULE_1__.default //CartPopup,

  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js& ***!
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
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HeaderTopbar-website",
  data: function data() {
    return {
      ActiveLinkClass: 'active'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForCustomer', ['authCustomer'])), {}, {
    // ...mapState( 'AuthenticationForSupplier', ['authSupplier'] ),
    //for active link management
    currentPage: function currentPage() {
      return this.$route.path;
    } // AccountNavLinkShow(){
    //   // // return ? false : true;
    //   //return this.authCustomer;
    //   if(this.authCustomer){
    //   // if(this.authCustomer || this.authSupplier){
    //     return false;
    //   }else{
    //     return true; //f
    //   }
    //   //return true;
    //   // if(Object.values( this.authCustomer ).length == 0 ){ return true;}
    //   //if( Object.values( this.authSupplier ).length === 0 ){ return true;}
    //   // else if(Object.keys( this.authSupplier ).length == 0 ){ return true;}
    // },

  }),
  components: {//UnitsMasterList, UnitsMasterForm,
  },
  methods: {
    GotoHome: function GotoHome() {//alert('0k');
      //this.$router.push({ name: 'home' });
      // const HomePath = "/home";
      // if (this.$route.path !== HomePath) {
      // 	this.$router.push(HomePath)
      // }
    },
    FocusUsername: function FocusUsername() {
      FireEvent.$emit('FocusUsername'); //call to AccountSidebarNavigationToggler.vue component for focus username                
    },
    CustomerLogout: function CustomerLogout() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      axios.post('/customer/logout').then(function (_ref) {
        var response = _ref.response;

        //console.log(response); 
        //if(response.success){             
        // toastr.success(response.success);         
        _this.$Progress.finish(); //for security reson, Best Policy for API Based Authentication
        //localStorage.setItem('isAuthenticated', false);  
        //localStorage.removeItem('isAuthenticated');  


        _this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false); //


        window.location = '/home'; //this.$router.push({ path : '/auth/login' });   //route after successfule 
        //this.$router.replace({ path : '/auth/login' });   //route after successfule 
        //this.$router.go('/auth/login');
        //toastr.success('Logout successfule'); 
        //}
        //for api
        // localStorage.removeItem('tokenName'); //remove token
        // this.$router.push({ path : '/' }); //redirect
        //this.$router.push({ path : '/home' }).catch(err => {});  
      })["catch"](function () {
        _this.$Progress.fail();
      });
    } //End Customer Logout  
    // SupplierLogout(){  
    //   this.$Progress.start(); //using progress-bar package
    //   axios.post('/supplier/logout')
    //   .then(({ response }) => {          
    //       this.$Progress.finish(); 
    //       //for security reson, Best Policy for API Based Authentication
    //       //localStorage.setItem('isAuthenticated', false);  
    //       //localStorage.removeItem('isAuthenticated');  
    //       this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false ); //
    //       window.location = '/home';
    //       //this.$router.push({ path : '/auth/login' });   //route after successfule 
    //       //this.$router.replace({ path : '/auth/login' });   //route after successfule 
    //       //this.$router.go('/auth/login');
    //       toastr.success('Logout successfule'); 
    //   })
    //   .catch( () => {
    //     this.$Progress.fail();
    //   })   
    // },  //End Supplier Logout  

  },
  //end Methods
  created: function created() {//console.log(this.AccountNavLinkShow);
  }
}); //end export default

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartLink.vue */ "./resources/js/components/Website/Layouts/CartLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //Load to all
//import CartPopup from './CartPopup.vue' //Load to all

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header-Vertical-And-Search-For-All-Page-website",
  data: function data() {
    return {};
  },
  components: {
    CartLink: _CartLink_vue__WEBPACK_IMPORTED_MODULE_0__.default //CartPopup,

  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_HeaderTopbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layouts/HeaderTopbar.vue */ "./resources/js/components/Website/Layouts/HeaderTopbar.vue");
/* harmony import */ var _Layouts_HeaderLogoSearchIconsForHome_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layouts/HeaderLogoSearchIconsForHome.vue */ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue");
/* harmony import */ var _Layouts_HeaderVerticalAndSecondaryMenuForHome_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layouts/HeaderVerticalAndSecondaryMenuForHome.vue */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue");
/* harmony import */ var _Layouts_HeaderLogoMenuForAllPage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layouts/HeaderLogoMenuForAllPage.vue */ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue");
/* harmony import */ var _Layouts_HeaderVerticalAndSearchForAllPage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layouts/HeaderVerticalAndSearchForAllPage.vue */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue");
/* harmony import */ var _Layouts_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layouts/Breadcrumb.vue */ "./resources/js/components/Website/Layouts/Breadcrumb.vue");
/* harmony import */ var _Layouts_AccountSidebarNavigationToggler_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layouts/AccountSidebarNavigationToggler.vue */ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue");
/* harmony import */ var _Layouts_SidebarCartContent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layouts/SidebarCartContent.vue */ "./resources/js/components/Website/Layouts/SidebarCartContent.vue");
/* harmony import */ var _Layouts_GoToTopButton_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layouts/GoToTopButton.vue */ "./resources/js/components/Website/Layouts/GoToTopButton.vue");
/* harmony import */ var _Layouts_Footer_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layouts/Footer.vue */ "./resources/js/components/Website/Layouts/Footer.vue");
/* harmony import */ var _Layouts_FooterFixed_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Layouts/FooterFixed.vue */ "./resources/js/components/Website/Layouts/FooterFixed.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

 //Load to only Home

 //Load to only Home
// const HeaderLogoSearchIconsForHome = () => import( /* webpackChunkName: "HeaderLogoSearchIconsForHome-com" */ './Layouts/HeaderLogoSearchIconsForHome.vue')
// const HeaderVerticalAndSecondaryMenuForHome = () => import( /* webpackChunkName: "HeaderVerticalAndSecondaryMenuForHome-com" */ './Layouts/HeaderVerticalAndSecondaryMenuForHome.vue')
//import SidebarNavigationHeader1 from './Layouts/SidebarNavigationHeader1.vue' //Load to all

 //Load to all page without home

 //Load to all page without home
// const HeaderLogoMenuForAllPage = () => import( /* webpackChunkName: "HeaderLogoMenuForAllPage-com" */ './Layouts/HeaderLogoMenuForAllPage.vue')
// const HeaderVerticalAndSearchForAllPage = () => import( /* webpackChunkName: "HeaderVerticalAndSearchForAllPage-com" */ './Layouts/HeaderVerticalAndSearchForAllPage.vue')

 //Load to every page

 //Load to every page

 //Load to every page
//const AccountSidebarNavigationToggler = () => import( /* webpackChunkName: "AccountSidebarNavigationToggler-com" */ './Layouts/AccountSidebarNavigationToggler.vue')

 //Load to every page

 //Load to every page   

 //Load to every page   
//const UnitsMasterForm = () => import( /* webpackChunkName: "UnitsMasterForm-com" */ './UnitsMasterForm')

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Website-Wrapper-master",
  //Get props form views/admin/dashboard.blade.php
  // props:['user','permissions','settings'], 
  //props:['isitwebsite', 'authcustomer', 'isauthenticated', 'authsupplier', 'issspaauthenticated'],
  props: {
    isitwebsite: {
      type: Number,
      required: true
    },
    authcustomer: {
      type: Object //required: true

    },
    isauthenticated: {
      type: Boolean //required: true

    } // authsupplier: {
    //   type: Object,
    //   //required: true
    // },
    // issspaauthenticated:{
    //   type: Boolean,
    //   //required: true
    // },

  },
  data: function data() {
    return {
      mainContentMarginTopWhenHeaderFiexd: '',
      topHeaderFixedClass: ''
    };
  },
  components: {
    HeaderTopbar: _Layouts_HeaderTopbar_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    HeaderLogoSearchIconsForHome: _Layouts_HeaderLogoSearchIconsForHome_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    HeaderVerticalAndSecondaryMenuForHome: _Layouts_HeaderVerticalAndSecondaryMenuForHome_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    //SidebarNavigationHeader1,
    HeaderLogoMenuForAllPage: _Layouts_HeaderLogoMenuForAllPage_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    HeaderVerticalAndSearchForAllPage: _Layouts_HeaderVerticalAndSearchForAllPage_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Breadcrumb: _Layouts_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    AccountSidebarNavigationToggler: _Layouts_AccountSidebarNavigationToggler_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    SidebarCartContent: _Layouts_SidebarCartContent_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    GoToTopButton: _Layouts_GoToTopButton_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    FooterComponent: _Layouts_Footer_vue__WEBPACK_IMPORTED_MODULE_9__.default,
    FooterFixed: _Layouts_FooterFixed_vue__WEBPACK_IMPORTED_MODULE_10__.default
  },
  computed: {},
  watch: {
    /*************************************************************************************/

    /*Add Remove Class based on window width change (Call from CommonGlobal.js)*/

    /*************************************************************************************/
    'window.width': function windowWidth(val) {
      if (val < 1200) {
        this.mainContentMarginTopWhenHeaderFiexd = 'mainContentMarginTopWhenHeaderFiexd';
        this.topHeaderFixedClass = 'u-header--sticky-top';
      } else if (val > 1200) {
        this.mainContentMarginTopWhenHeaderFiexd = '';
        this.topHeaderFixedClass = '';
      }
    }
  },
  methods: {},
  created: function created() {
    //direct commit (mutations) to resources/js/store/commonStoreForAll.js
    this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', this.isauthenticated);
    this.$store.commit('AuthenticationForCustomer/AUTH_CUSTOMER_CHECK', this.authcustomer); //commit from props
    //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', this.issspaauthenticated );             
    //this.$store.commit('AuthenticationForSupplier/AUTH_SUPPLIER_CHECK', this.authsupplier ); //commit from props

    this.$store.commit('commonStoreForWebsite/IS_IT_WEBSITE_CHECK', this.isitwebsite);
  },
  destroyed: function destroyed() {},
  mounted: function mounted() {// console.log('website-wrapper');
    // console.log('Height: ' +window.innerHeight + ' - Width: ' + window.innerWidth);
    // //  [App.vue specific] When App.vue is finish loading finish the progress bar
    // this.$Progress.finish()
    //initialization of slick carousel (Slick Slider call from here, otherwise it get error)
    //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    // alert(this.$refs.screenWidth.clientHeight +' '+  this.$refs.screenWidth.clientWidth);
    //this.toggleBodyClass('screenWidth', 'TestClassTEse');
    // document.getElementsByClassName('screenWidth').classList.add('testClass');
    // document.body.classList.add('testClass');
    // document.getElementsByClassName(‘classname’).classList.remove(‘classname’)
    //console.log(window.innerHeight);
    //alert('Height: ' +window.innerHeight + ' - Width: ' + window.innerWidth);
    //alert(this.$refs.screenWidth.clientHeight + '-' + this.$refs.screenWidth.clientWidth); //working
    //console.log('Width: '+this.window.width+ ' Height: ' + this.window.height );  
  }
});

/***/ }),

/***/ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6& */ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6&");
/* harmony import */ var _AccountSidebarNavigationToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSidebarNavigationToggler.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AccountSidebarNavigationToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/Breadcrumb.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Breadcrumb.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=73f36da8& */ "./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8&");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/Breadcrumb.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/CartLink.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/CartLink.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartLink.vue?vue&type=template&id=750d989f& */ "./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f&");
/* harmony import */ var _CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartLink.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__.render,
  _CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/CartLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/Footer.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Footer.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=73b8b5c0& */ "./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/FooterFixed.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/FooterFixed.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterFixed.vue?vue&type=template&id=ef4ed478& */ "./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478&");
/* harmony import */ var _FooterFixed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterFixed.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FooterFixed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/FooterFixed.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/GoToTopButton.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/GoToTopButton.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoToTopButton.vue?vue&type=template&id=bf2c08e2& */ "./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2&");
/* harmony import */ var _GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoToTopButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/GoToTopButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a& */ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a&");
/* harmony import */ var _HeaderLogoMenuForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderLogoMenuForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a& */ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a&");
/* harmony import */ var _HeaderLogoSearchIconsForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderLogoSearchIconsForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderTopbar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderTopbar.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderTopbar.vue?vue&type=template&id=775bf9f0& */ "./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0&");
/* harmony import */ var _HeaderTopbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderTopbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderTopbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/HeaderTopbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e& */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e&");
/* harmony import */ var _HeaderVerticalAndSearchForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderVerticalAndSearchForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8& */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8&");
/* harmony import */ var _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarCartContent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarCartContent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarCartContent.vue?vue&type=template&id=48df6be2& */ "./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2&");
/* harmony import */ var _SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarCartContent.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/SidebarCartContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNavigationHeader1.vue?vue&type=template&id=767828f9& */ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9&");
/* harmony import */ var _SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarNavigationHeader1.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/WebsiteWrapper.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsiteWrapper.vue?vue&type=template&id=02c0adb7& */ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&");
/* harmony import */ var _WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsiteWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/WebsiteWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSidebarNavigationToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSidebarNavigationToggler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSidebarNavigationToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFixed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterFixed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFixed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GoToTopButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoMenuForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoMenuForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoSearchIconsForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoSearchIconsForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTopbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderTopbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTopbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSearchForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSearchForAllPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarCartContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarNavigationHeader1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsiteWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSidebarNavigationToggler_vue_vue_type_template_id_2b09b0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_73f36da8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=73f36da8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartLink_vue_vue_type_template_id_750d989f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartLink.vue?vue&type=template&id=750d989f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_73b8b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=73b8b5c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFixed_vue_vue_type_template_id_ef4ed478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterFixed.vue?vue&type=template&id=ef4ed478& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoToTopButton_vue_vue_type_template_id_bf2c08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GoToTopButton.vue?vue&type=template&id=bf2c08e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoMenuForAllPage_vue_vue_type_template_id_2c569a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderLogoSearchIconsForHome_vue_vue_type_template_id_b65d951a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTopbar_vue_vue_type_template_id_775bf9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderTopbar.vue?vue&type=template&id=775bf9f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSearchForAllPage_vue_vue_type_template_id_31333a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderVerticalAndSecondaryMenuForHome_vue_vue_type_template_id_d06273d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCartContent_vue_vue_type_template_id_48df6be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarCartContent.vue?vue&type=template&id=48df6be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2&");


/***/ }),

/***/ "./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNavigationHeader1_vue_vue_type_template_id_767828f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarNavigationHeader1.vue?vue&type=template&id=767828f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9&");


/***/ }),

/***/ "./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsiteWrapper_vue_vue_type_template_id_02c0adb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsiteWrapper.vue?vue&type=template&id=02c0adb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/AccountSidebarNavigationToggler.vue?vue&type=template&id=2b09b0e6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "u-sidebar u-sidebar__lg",
      attrs: { id: "sidebarContent", "aria-labelledby": "sidebarNavToggler" }
    },
    [
      _c("div", { staticClass: "u-sidebar__scroller" }, [
        _c("div", { staticClass: "u-sidebar__container" }, [
          _c(
            "div",
            {
              staticClass: "js-scrollbar u-header-sidebar__footer-offset pb-3"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "js-scrollbar u-sidebar__body" }, [
                _c(
                  "div",
                  {
                    staticClass: "u-sidebar__content u-header-sidebar__content"
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "js-validate-",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.CustomerLogin()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            attrs: {
                              id: "login",
                              "data-target-group": "idForm"
                            }
                          },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _vm.display_error
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "text-danger text-center mb-3"
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "small text-muted-" },
                                      [_vm._v(_vm._s(_vm.error_message))]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "js-form-message- js-focus-state-"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signinEmail" }
                                    },
                                    [_vm._v("Email")]
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
                                            value: _vm.form.username,
                                            expression: "form.username"
                                          }
                                        ],
                                        ref: "username",
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "username"
                                          )
                                        },
                                        attrs: {
                                          type: "email",
                                          name: "username",
                                          placeholder: "Email Or Phone"
                                        },
                                        domProps: { value: _vm.form.username },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "username",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "username"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "js-form-message js-focus-state"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signinPassword" }
                                    },
                                    [_vm._v("Password")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(3),
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
                                        attrs: {
                                          type: "password",
                                          name: "password",
                                          placeholder: "Password"
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "password"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _vm._m(5),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _vm._m(7),
                            _vm._v(" "),
                            _vm._m(8)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.CustomerRegister()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: { display: "none", opacity: "0" },
                            attrs: {
                              id: "signup",
                              "data-target-group": "idForm"
                            }
                          },
                          [
                            _vm._m(9),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "js-form-message- js-focus-state-"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signinEmail" }
                                    },
                                    [_vm._v("Name")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(10),
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
                                          "is-invalid": _vm.form.errors.has(
                                            "name"
                                          )
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "name",
                                          id: "signinName",
                                          placeholder: "Full name"
                                        },
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
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "js-form-message js-focus-state"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signupEmail" }
                                    },
                                    [_vm._v("Email")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(11),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.email,
                                            expression: "form.email"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "email"
                                          )
                                        },
                                        attrs: {
                                          type: "email",
                                          name: "email",
                                          placeholder: "Email"
                                        },
                                        domProps: { value: _vm.form.email },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "username"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "js-form-message- js-focus-state-"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signinEmail" }
                                    },
                                    [_vm._v("Phone")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(12),
                                      _vm._v(" "),
                                      _vm._m(13),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.phone,
                                            expression: "form.phone"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "phone"
                                          )
                                        },
                                        attrs: {
                                          type: "number",
                                          name: "phone",
                                          id: "signinPhone",
                                          placeholder: "Phone"
                                        },
                                        domProps: { value: _vm.form.phone },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "phone",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "phone"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "js-form-message js-focus-state"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "signupPassword" }
                                    },
                                    [_vm._v("Password")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(14),
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
                                        attrs: {
                                          type: "password",
                                          name: "password",
                                          placeholder: "Password"
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
                                        attrs: {
                                          form: _vm.form,
                                          field: "password"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "js-form-message js-focus-state"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: {
                                        for: "signuppassword_confirmation"
                                      }
                                    },
                                    [_vm._v("Confirm Password")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(15),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.form.password_confirmation,
                                            expression:
                                              "form.password_confirmation"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          name: "password_confirmation",
                                          placeholder: "Confirm Password"
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
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(16),
                            _vm._v(" "),
                            _vm._m(17),
                            _vm._v(" "),
                            _vm._m(18),
                            _vm._v(" "),
                            _vm._m(19)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.CustomerResetPassword()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: { display: "none", opacity: "0" },
                            attrs: {
                              id: "forgotPassword",
                              "data-target-group": "idForm"
                            }
                          },
                          [
                            _vm._m(20),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "js-form-message js-focus-state"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "sr-only",
                                      attrs: { for: "recoverEmail" }
                                    },
                                    [_vm._v("Your email")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(21),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.email,
                                            expression: "form.email"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "email"
                                          )
                                        },
                                        attrs: {
                                          type: "email",
                                          name: "email",
                                          id: "recoverEmail",
                                          placeholder: "Your email",
                                          "aria-label": "Your email"
                                        },
                                        domProps: { value: _vm.form.email },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "email"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(22),
                            _vm._v(" "),
                            _vm._m(23)
                          ]
                        )
                      ]
                    )
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
    return _c("div", { staticClass: "d-flex align-items-center pt-4 px-7" }, [
      _c(
        "button",
        {
          staticClass: "close ml-auto",
          attrs: {
            type: "button",
            id: "sidebarContentClose",
            "aria-controls": "sidebarContent",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "data-unfold-event": "click",
            "data-unfold-hide-on-scroll": "false",
            "data-unfold-target": "#sidebarContent",
            "data-unfold-type": "css-animation",
            "data-unfold-animation-in": "fadeInRight",
            "data-unfold-animation-out": "fadeOutRight",
            "data-unfold-duration": "500"
          }
        },
        [_c("i", { staticClass: "ec ec-close-remove" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "text-center mb-7" }, [
      _c("h2", { staticClass: "h4 mb-0" }, [_vm._v("Welcome Back!")]),
      _vm._v(" "),
      _c("p", [_vm._v("Login to manage your account.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        {
          staticClass: "input-group-text",
          attrs: { id: "signinPasswordLabel" }
        },
        [_c("span", { staticClass: "fas fa-lock" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-end mb-4" }, [
      _c(
        "a",
        {
          staticClass: "js-animation-link small link-muted",
          attrs: {
            href: "javascript:;",
            "data-target": "#forgotPassword",
            "data-link-group": "idForm",
            "data-animation-in": "slideInUp"
          }
        },
        [_vm._v("Forgot Password?")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-block btn-sm btn-primary transition-3d-hover",
          attrs: { type: "submit" }
        },
        [_vm._v("Login")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("span", { staticClass: "small text-muted" }, [
        _vm._v("Do not have an account?")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "js-animation-link small text-dark",
          attrs: {
            href: "javascript:;",
            "data-target": "#signup",
            "data-link-group": "idForm",
            "data-animation-in": "slideInUp"
          }
        },
        [_vm._v("Signup\n                                    ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "span",
        { staticClass: "u-divider u-divider--xs u-divider--text mb-4" },
        [_vm._v("OR")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1",
          attrs: { href: "#" }
        },
        [
          _c("span", { staticClass: "fab fa-facebook-square mr-1" }),
          _vm._v(
            "\n                                      Facebook\n                                    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0",
          attrs: { href: "#" }
        },
        [
          _c("span", { staticClass: "fab fa-google mr-1" }),
          _vm._v(
            "\n                                      Google\n                                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "text-center mb-7" }, [
      _c("h2", { staticClass: "h4 mb-0" }, [_vm._v("Welcome to Electro.")]),
      _vm._v(" "),
      _c("p", [_vm._v("Fill out the form to get started.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "signinEmailLabel" } },
        [_c("span", { staticClass: "fas fa-user" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" })
      ])
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
        [_c("i", { staticClass: "fas fa-mobile-alt" })]
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
        [_vm._v(" +88\n                                                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-lock" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-key" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-block btn-sm btn-primary transition-3d-hover",
          attrs: { type: "submit" }
        },
        [_vm._v("Get Started")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("span", { staticClass: "small text-muted" }, [
        _vm._v("Already have an account?")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "js-animation-link small text-dark",
          attrs: {
            href: "javascript:;",
            "data-target": "#login",
            "data-link-group": "idForm",
            "data-animation-in": "slideInUp"
          }
        },
        [_vm._v("Login\n                                    ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "span",
        { staticClass: "u-divider u-divider--xs u-divider--text mb-4" },
        [_vm._v("OR")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1",
          attrs: { href: "#" }
        },
        [
          _c("span", { staticClass: "fab fa-facebook-square mr-1" }),
          _vm._v(
            "\n                                        Facebook\n                                    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0",
          attrs: { href: "#" }
        },
        [
          _c("span", { staticClass: "fab fa-google mr-1" }),
          _vm._v(
            "\n                                        Google\n                                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "text-center mb-7" }, [
      _c("h2", { staticClass: "h4 mb-0" }, [_vm._v("Recover Password.")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Enter your email address and an email with instructions will be sent to you."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-block btn-sm btn-primary transition-3d-hover",
          attrs: { type: "submit" }
        },
        [_vm._v("Recover Password")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("span", { staticClass: "small text-muted" }, [
        _vm._v("Remember your password?")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "js-animation-link small",
          attrs: {
            href: "javascript:;",
            "data-target": "#login",
            "data-link-group": "idForm",
            "data-animation-in": "slideInUp"
          }
        },
        [_vm._v("Login\n                                    ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Breadcrumb.vue?vue&type=template&id=73f36da8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.$route.meta.breadcrumb,
          expression: "$route.meta.breadcrumb"
        }
      ],
      staticClass: "bg-gray-13 bg-md-transparent"
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "my-md-3" }, [
          _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
            _c(
              "ol",
              {
                staticClass:
                  "breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble"
              },
              [
                _c(
                  "li",
                  {
                    staticClass:
                      "breadcrumb-item flex-shrink-0 flex-xl-shrink-1"
                  },
                  [
                    _c("router-link", { attrs: { to: "/home" } }, [
                      _vm._v("Home")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active",
                    attrs: { "aria-current": "page" }
                  },
                  [
                    _vm._v(
                      "\n                    \t" +
                        _vm._s(_vm.$route.meta.breadcrumb) +
                        "\n                    "
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/CartLink.vue?vue&type=template&id=750d989f& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    return _c(
      "div",
      {
        staticClass: "text-gray-90 position-relative d-flex ",
        staticStyle: { cursor: "pointer" },
        attrs: {
          id: "sidebarCartToggler",
          "data-toggle": "tooltip",
          "data-placement": "top",
          title: "Cart",
          "aria-controls": "sidebarCartContent",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-unfold-event": "click",
          "data-unfold-target": "#sidebarCartContent",
          "data-unfold-type": "css-animation",
          "data-unfold-hide-on-scroll": "false",
          "data-unfold-animation-in": "fadeInRight",
          "data-unfold-animation-out": "fadeOutRight",
          "data-unfold-duration": "500"
        }
      },
      [
        _c("i", { staticClass: "font-size-22 ec ec-shopping-bag" }),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12"
          },
          [_vm._v("3")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "d-none- d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3"
          },
          [_vm._v("1785.00$")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/Footer.vue?vue&type=template&id=73b8b5c0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("footer", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "pt-8 pb-4 bg-gray-13" }, [
      _c("div", { staticClass: "container mt-1" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-5" }, [
            _c("div", { staticClass: "mb-6" }, [
              _c("a", { staticClass: "d-inline-block", attrs: { href: "#" } }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      version: "1.1",
                      x: "0px",
                      y: "0px",
                      width: "156px",
                      height: "37px",
                      viewBox: "0 0 175.748 42.52",
                      "enable-background": "new 0 0 175.748 42.52"
                    }
                  },
                  [
                    _c("ellipse", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        fill: "#FDD700",
                        cx: "170.05",
                        cy: "36.341",
                        rx: "5.32",
                        ry: "5.367"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        fill: "#333E48",
                        d:
                          "M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\n                                        C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\n                                        c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\n                                        c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\n                                        c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\n                                        c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\n                                        c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\n                                        c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\n                                        c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\n                                        M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\n                                        c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\n                                        c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\n                                        c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\n                                        c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\n                                        M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\n                                        c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\n                                        c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\n                                        C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\n                                        C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\n                                        c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\n                                        c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\n                                        c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\n                                        C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\n                                        c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\n                                        c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\n                                        c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\n                                        c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\n                                        c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\n                                        c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\n                                        C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\n                                        c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\n                                        c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\n                                        c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\n                                        c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\n                                        c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                      }
                    })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-7" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md mb-4 mb-md-0" }, [
                _c("h6", { staticClass: "mb-3 font-weight-bold" }, [
                  _vm._v("Customer Care")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "list-group list-group-flush list-group-borderless mb-0 list-group-transparent"
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item list-group-item-action",
                            attrs: { to: "/home" }
                          },
                          [_vm._v(" My Account")]
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
                              "list-group-item list-group-item-action",
                            attrs: { to: "/track-order" }
                          },
                          [_vm._v("Order Tracking")]
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
                              "list-group-item list-group-item-action",
                            attrs: { to: "/wishlist" }
                          },
                          [_vm._v("Wish List")]
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
                              "list-group-item list-group-item-action",
                            attrs: { to: "/faq" }
                          },
                          [_vm._v("FAQs")]
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
                              "list-group-item list-group-item-action",
                            attrs: { to: "/terms-and-conditions" }
                          },
                          [_vm._v("Terms and Conditions")]
                        )
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-gray-14 py-2" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "flex-center-between d-block d-md-flex" }, [
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "text-md-right" }, [
            _c(
              "span",
              { staticClass: "d-inline-block bg-white border rounded p-1" },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value:
                        _vm.baseURL + "/website/assets/img/100X60/img1.jpg",
                      expression:
                        "baseURL+'/website/assets/img/100X60/img1.jpg'"
                    }
                  ],
                  staticClass: "max-width-5",
                  attrs: { alt: "Image Description" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "d-inline-block bg-white border rounded p-1" },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value:
                        _vm.baseURL + "/website/assets/img/100X60/img2.jpg",
                      expression:
                        "baseURL+'/website/assets/img/100X60/img2.jpg'"
                    }
                  ],
                  staticClass: "max-width-5",
                  attrs: { alt: "Image Description" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "d-inline-block bg-white border rounded p-1" },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value:
                        _vm.baseURL + "/website/assets/img/100X60/img3.jpg",
                      expression:
                        "baseURL+'/website/assets/img/100X60/img3.jpg'"
                    }
                  ],
                  staticClass: "max-width-5",
                  attrs: { alt: "Image Description" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "d-inline-block bg-white border rounded p-1" },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value:
                        _vm.baseURL + "/website/assets/img/100X60/img4.jpg",
                      expression:
                        "baseURL+'/website/assets/img/100X60/img4.jpg'"
                    }
                  ],
                  staticClass: "max-width-5",
                  attrs: { alt: "Image Description" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "d-inline-block bg-white border rounded p-1" },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value:
                        _vm.baseURL + "/website/assets/img/100X60/img5.jpg",
                      expression:
                        "baseURL+'/website/assets/img/100X60/img5.jpg'"
                    }
                  ],
                  staticClass: "max-width-5",
                  attrs: { alt: "Image Description" }
                })
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
    return _c("div", { staticClass: "bg-primary py-3" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c("div", { staticClass: "col-lg-7 mb-md-3 mb-lg-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-auto flex-horizontal-center" }, [
                _c("i", { staticClass: "ec ec-newsletter font-size-40" }),
                _vm._v(" "),
                _c("h2", { staticClass: "font-size-20 mb-0 ml-3" }, [
                  _vm._v("Sign up to Newsletter")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col my-4 my-md-0" }, [
                _c("h5", { staticClass: "font-size-15 ml-4 mb-0" }, [
                  _vm._v("...and receive "),
                  _c("strong", [_vm._v("$20 coupon for first shopping.")])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-5" }, [
            _c("form", { staticClass: "js-validate js-form-message" }, [
              _c(
                "label",
                { staticClass: "sr-only", attrs: { for: "subscribeSrEmail" } },
                [_vm._v("Email address")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group input-group-pill" }, [
                _c("input", {
                  staticClass: "form-control border-0 height-40",
                  attrs: {
                    type: "email",
                    name: "email",
                    id: "subscribeSrEmail",
                    placeholder: "Email address",
                    "aria-label": "Email address",
                    "aria-describedby": "subscribeButton",
                    required: "",
                    "data-msg": "Please enter a valid email address."
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-dark btn-sm-wide height-40 py-2",
                      attrs: { type: "submit", id: "subscribeButton" }
                    },
                    [_vm._v("Sign Up")]
                  )
                ])
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
    return _c("div", { staticClass: "mb-4" }, [
      _c("div", { staticClass: "row no-gutters" }, [
        _c("div", { staticClass: "col-auto" }, [
          _c("i", { staticClass: "ec ec-support text-primary font-size-56" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col pl-3" }, [
          _c("div", { staticClass: "font-size-13 font-weight-light" }, [
            _vm._v("Got questions? Call us 24/7!")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "font-size-20 text-gray-90",
              attrs: { href: "tel:+80080018588" }
            },
            [_vm._v("(+880) 1714-013558 ")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4" }, [
      _c("h6", { staticClass: "mb-1 font-weight-bold" }, [
        _vm._v("Contact info")
      ]),
      _vm._v(" "),
      _c("address", {}, [
        _vm._v(
          "\n                                100/1, Golartake, Mirpur 1, Dhaka 1216, Bangladesh.\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-4 my-md-4" }, [
      _c("ul", { staticClass: "list-inline mb-0 opacity-7" }, [
        _c("li", { staticClass: "list-inline-item mr-0" }, [
          _c(
            "a",
            {
              staticClass:
                "btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",
              attrs: { href: "#" }
            },
            [_c("span", { staticClass: "fab fa-facebook-f btn-icon__inner" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item mr-0" }, [
          _c(
            "a",
            {
              staticClass:
                "btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",
              attrs: { href: "#" }
            },
            [_c("span", { staticClass: "fab fa-google btn-icon__inner" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item mr-0" }, [
          _c(
            "a",
            {
              staticClass:
                "btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",
              attrs: { href: "#" }
            },
            [_c("span", { staticClass: "fab fa-twitter btn-icon__inner" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item mr-0" }, [
          _c(
            "a",
            {
              staticClass:
                "btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",
              attrs: { href: "#" }
            },
            [_c("span", { staticClass: "fab fa-github btn-icon__inner" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md mb-4 mb-md-0" }, [
      _c("h6", { staticClass: "mb-3 font-weight-bold" }, [
        _vm._v("Find it Fast")
      ]),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass:
            "list-group list-group-flush list-group-borderless mb-0 list-group-transparent"
        },
        [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Laptops & Computers")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Cameras & Photography")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Smart Phones & Tablets")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Video Games & Consoles")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("TV & Audio")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Gadgets")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Car Electronic & GPS")]
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
    return _c("div", { staticClass: "col-12 col-md mb-4 mb-md-0" }, [
      _c(
        "ul",
        {
          staticClass:
            "list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6"
        },
        [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Printers & Ink")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Software")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Office Supplies")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Computer Components")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "list-group-item list-group-item-action",
                attrs: {
                  href: "../shop/product-categories-5-column-sidebar.html"
                }
              },
              [_vm._v("Accesories")]
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
    return _c("div", { staticClass: "mb-3 mb-md-0" }, [
      _vm._v("© "),
      _c(
        "a",
        {
          staticClass: "font-weight-bold text-gray-90",
          attrs: { href: "/home" }
        },
        [_vm._v("SORBORAHO")]
      ),
      _vm._v(" - All rights Reserved")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/FooterFixed.vue?vue&type=template&id=ef4ed478& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "py-2 py-xl-5 bg-primary-down-lg u-header--sticky-bottom-md u-header--sticky-bottom-sm u-header--sticky-bottom ",
      staticStyle: { "z-index": "999 !important", width: "100%" }
    },
    [
      _c("div", { staticClass: "container my-0dot5 my-xl-0" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c(
            "div",
            {
              staticClass:
                "col col-xl-auto text-center text-right- text-xl-left pl-0 pl-xl-3 position-static"
            },
            [
              _c("div", { staticClass: "d-inline-flex" }, [
                _c(
                  "ul",
                  {
                    staticClass: "d-flex list-unstyled mb-0 align-items-center"
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "col d-xl-none- d-xl-block px-2 px-sm-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "u-header-topbar__nav-link",
                            attrs: { to: "#", title: "Get Apps" }
                          },
                          [_c("i", { staticClass: "fab fa-app-store mr-1" })]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "col d-xl-none- d-xl-block px-2 px-sm-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "u-header-topbar__nav-link",
                            attrs: { to: "/track-order" }
                          },
                          [_c("i", { staticClass: "ec ec-transport mr-1" })]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "col d-xl-none- d-xl-block px-2 px-sm-3" },
                      [_c("CartLink")],
                      1
                    ),
                    _vm._v(" "),
                    !_vm.authCustomer
                      ? _c(
                          "li",
                          {
                            staticClass:
                              "col d-xl-none- d-xl-block px-2 px-sm-3"
                          },
                          [_vm._m(0)]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.authCustomer
                      ? _c(
                          "li",
                          {
                            staticClass:
                              "col d-xl-none- d-xl-block px-2 px-sm-3"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "text-gray-90",
                                attrs: {
                                  to: "/auth/my-dashboard",
                                  "data-toggle": "tooltip",
                                  "data-placement": "top",
                                  title: "My Account"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "font-size-22 ec ec-user"
                                })
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
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
    return _c(
      "a",
      {
        staticClass: "u-header-topbar__nav-link",
        attrs: {
          id: "sidebarNavToggler",
          href: "javascript:;",
          role: "button",
          "data-toggle": "tooltip",
          "data-placement": "top",
          title: "My Account",
          "aria-controls": "sidebarContent",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-unfold-event": "click",
          "data-unfold-hide-on-scroll": "false",
          "data-unfold-target": "#sidebarContent",
          "data-unfold-type": "css-animation",
          "data-unfold-animation-in": "fadeInRight",
          "data-unfold-animation-out": "fadeOutRight",
          "data-unfold-duration": "500"
        }
      },
      [_c("i", { staticClass: "ec ec-user mr-1" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/GoToTopButton.vue?vue&type=template&id=bf2c08e2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    return _c(
      "a",
      {
        staticClass: "js-go-to u-go-to d-none d-xl-block",
        attrs: {
          href: "#",
          "data-position": '{"bottom": 15, "right": 15 }',
          "data-type": "fixed",
          "data-offset-top": "400",
          "data-compensation": "#header",
          "data-show-effect": "slideInUp",
          "data-hide-effect": "slideOutDown"
        }
      },
      [_c("span", { staticClass: "fas fa-arrow-up u-go-to__inner" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoMenuForAllPage.vue?vue&type=template&id=2c569a3a& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
        "py-2 py-xl-4- py-xl-2 bg-primary-down-lg d-none- d-xl-block- ",
      class: _vm.topHeaderFixedClass
    },
    [
      _c("div", { staticClass: "container my-0dot5 my-xl-0" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c(
            "div",
            { staticClass: "col-auto" },
            [
              _c(
                "nav",
                {
                  staticClass:
                    "navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center",
                      attrs: { to: "/home", "aria-label": "Electro" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticStyle: { "margin-bottom": "0" },
                          attrs: {
                            version: "1.1",
                            x: "0px",
                            y: "0px",
                            width: "175.748px",
                            height: "42.52px",
                            viewBox: "0 0 175.748 42.52",
                            "enable-background": "new 0 0 175.748 42.52"
                          }
                        },
                        [
                          _c("ellipse", {
                            staticClass: "ellipse-bg",
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#FDD700",
                              cx: "170.05",
                              cy: "36.341",
                              rx: "5.32",
                              ry: "5.367"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#333E48",
                              d:
                                "M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\r\n                                C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\r\n                                c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\r\n                                c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\r\n                                c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\r\n                                c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\r\n                                c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\r\n                                c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\r\n                                c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\r\n                                M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\r\n                                c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\r\n                                c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\r\n                                c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\r\n                                c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\r\n                                M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\r\n                                c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\r\n                                c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\r\n                                C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\r\n                                C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\r\n                                c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\r\n                                c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\r\n                                c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\r\n                                C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\r\n                                c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\r\n                                c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\r\n                                c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\r\n                                c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\r\n                                c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\r\n                                c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\r\n                                C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\r\n                                c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\r\n                                c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\r\n                                c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\r\n                                c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\r\n                                c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c("SidebarNavigationHeader1")
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col d-none d-xl-block" }, [
            _c(
              "nav",
              {
                staticClass:
                  "js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "collapse navbar-collapse u-header__navbar-collapse",
                    attrs: { id: "navBar" }
                  },
                  [
                    _c(
                      "ul",
                      { staticClass: "navbar-nav u-header__navbar-nav" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            staticClass:
                              "nav-item hs-has-sub-menu u-header__nav-item",
                            attrs: {
                              "data-event": "hover",
                              "data-animation-in": "slideInUp",
                              "data-animation-out": "fadeOut"
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "nav-link u-header__nav-link u-header__nav-link-toggle",
                                attrs: {
                                  id: "blogMegaMenu",
                                  href: "javascript:;",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false",
                                  "aria-labelledby": "blogSubMenu"
                                }
                              },
                              [_vm._v("Admin")]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass: "hs-sub-menu u-header__sub-menu",
                                staticStyle: { "min-width": "230px" },
                                attrs: {
                                  id: "blogSubMenu",
                                  "aria-labelledby": "blogMegaMenu"
                                }
                              },
                              [
                                _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/auth/my-dashboard" }
                                      },
                                      [_vm._v("Dashboard")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/auth/my-profile" }
                                      },
                                      [_vm._v("Profile")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/auth/login" }
                                      },
                                      [_vm._v("Login")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/auth/register" }
                                      },
                                      [_vm._v("Register")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/login-abc" }
                                      },
                                      [_vm._v("Admin Login")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/spa/ProductMaster" }
                                      },
                                      [_vm._v("Admin Product")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/pagenotfound" }
                                      },
                                      [_vm._v("Check Not Found Page")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/sspa/login" }
                                      },
                                      [_vm._v("Supplier Login")]
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
                                          "nav-link u-header__sub-menu-nav-link",
                                        attrs: { to: "/sspa/my-profile" }
                                      },
                                      [_vm._v("Supplier Profile")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._m(3),
                                _vm._v(" "),
                                _vm._m(4)
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _vm._m(7)
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-xl-none col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static"
            },
            [
              _c("div", { staticClass: "d-inline-flex" }, [
                _c(
                  "ul",
                  {
                    staticClass: "d-flex list-unstyled mb-0 align-items-center"
                  },
                  [
                    _vm._m(9),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "col pr-xl-0 px-2 px-sm-3" },
                      [_c("CartLink")],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(11)
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
    return _c(
      "button",
      {
        staticClass: "navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0",
        attrs: {
          id: "sidebarHeaderInvoker",
          type: "button",
          "aria-controls": "sidebarHeader",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-unfold-event": "click",
          "data-unfold-hide-on-scroll": "false",
          "data-unfold-target": "#sidebarHeader1",
          "data-unfold-type": "css-animation",
          "data-unfold-animation-in": "fadeInLeft",
          "data-unfold-animation-out": "fadeOutLeft",
          "data-unfold-duration": "500"
        }
      },
      [
        _c(
          "span",
          {
            staticClass: "u-hamburger__box",
            attrs: { id: "hamburgerTriggerMenu" }
          },
          [_c("span", { staticClass: "u-hamburger__inner" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "nav-item hs-has-sub-menu u-header__nav-item",
        attrs: {
          "data-event": "hover",
          "data-animation-in": "slideInUp",
          "data-animation-out": "fadeOut"
        }
      },
      [
        _c(
          "a",
          {
            staticClass:
              "nav-link u-header__nav-link u-header__nav-link-toggle",
            attrs: {
              id: "HomeMegaMenu",
              href: "javascript:;",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              "aria-labelledby": "HomeSubMenu"
            }
          },
          [_vm._v("Home")]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "hs-sub-menu u-header__sub-menu animated fadeOut",
            staticStyle: { "min-width": "230px", display: "none" },
            attrs: { id: "HomeSubMenu", "aria-labelledby": "HomeMegaMenu" }
          },
          [
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/index.html" }
                },
                [_vm._v("Home v1")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v2.html" }
                },
                [_vm._v("Home v2")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v3.html" }
                },
                [_vm._v("Home v3")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v3-full-color-bg.html" }
                },
                [_vm._v("Home v3.1")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v4.html" }
                },
                [_vm._v("Home v4")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v5.html" }
                },
                [_vm._v("Home v5")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v6.html" }
                },
                [_vm._v("Home v6")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link u-header__sub-menu-nav-link",
                  attrs: { href: "../home/home-v7.html" }
                },
                [_vm._v("Home v7")]
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
    return _c(
      "li",
      {
        staticClass: "nav-item hs-has-mega-menu u-header__nav-item",
        attrs: {
          "data-event": "hover",
          "data-animation-in": "slideInUp",
          "data-animation-out": "fadeOut"
        }
      },
      [
        _c(
          "a",
          {
            staticClass:
              "nav-link u-header__nav-link u-header__nav-link-toggle",
            attrs: {
              id: "pagesMegaMenu",
              href: "javascript:;",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("Pages")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "hs-mega-menu w-100 u-header__sub-menu",
            attrs: { "aria-labelledby": "pagesMegaMenu" }
          },
          [
            _c("div", { staticClass: "row u-header__mega-menu-wrapper" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Home & Static Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/index.html" }
                      },
                      [_vm._v("Home v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v2.html" }
                      },
                      [_vm._v("Home v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v3.html" }
                      },
                      [_vm._v("Home v3")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v3-full-color-bg.html" }
                      },
                      [_vm._v("Home v3.1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v4.html" }
                      },
                      [_vm._v("Home v4")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v5.html" }
                      },
                      [_vm._v("Home v5")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v6.html" }
                      },
                      [_vm._v("Home v6")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/home-v7.html" }
                      },
                      [_vm._v("Home v7")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/about.html" }
                      },
                      [_vm._v("About")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/contact-v1.html" }
                      },
                      [_vm._v("Contact v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/contact-v2.html" }
                      },
                      [_vm._v("Contact v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/faq.html" }
                      },
                      [_vm._v("FAQ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/store-directory.html" }
                      },
                      [_vm._v("Store Directory")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/terms-and-conditions.html" }
                      },
                      [_vm._v("Terms and Conditions")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../home/404.html" }
                      },
                      [_vm._v("404")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Shop Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-grid.html" }
                      },
                      [_vm._v("Shop Grid")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-grid-extended.html" }
                      },
                      [_vm._v("Shop Grid Extended")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-list-view.html" }
                      },
                      [_vm._v("Shop List View")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-list-view-small.html" }
                      },
                      [_vm._v("Shop List View Small")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-left-sidebar.html" }
                      },
                      [_vm._v("Shop Left Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-full-width.html" }
                      },
                      [_vm._v("Shop Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-right-sidebar.html" }
                      },
                      [_vm._v("Shop Right Sidebar")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Product Categories")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-4-column-sidebar.html"
                        }
                      },
                      [_vm._v("4 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-5-column-sidebar.html"
                        }
                      },
                      [_vm._v("5 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-6-column-full-width.html"
                        }
                      },
                      [_vm._v("6 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-7-column-full-width.html"
                        }
                      },
                      [_vm._v("7 Column Full width")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Single Product Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-extended.html" }
                      },
                      [_vm._v("Single Product Extended")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-fullwidth.html" }
                      },
                      [_vm._v("Single Product Fullwidth")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-sidebar.html" }
                      },
                      [_vm._v("Single Product Sidebar")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Ecommerce Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop.html" }
                      },
                      [_vm._v("Shop")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/cart.html" }
                      },
                      [_vm._v("Cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/checkout.html" }
                      },
                      [_vm._v("Checkout")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/my-account.html" }
                      },
                      [_vm._v("My Account")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/track-your-order.html" }
                      },
                      [_vm._v("Track your Order")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/compare.html" }
                      },
                      [_vm._v("Compare")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Blog Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v1.html" }
                      },
                      [_vm._v("Blog v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v2.html" }
                      },
                      [_vm._v("Blog v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v3.html" }
                      },
                      [_vm._v("Blog v3")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-full-width.html" }
                      },
                      [_vm._v("Blog Full Width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/single-blog-post.html" }
                      },
                      [_vm._v("Single Blog Post")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Shop Columns")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href: "../shop/shop-7-columns-full-width.html"
                        }
                      },
                      [_vm._v("7 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href: "../shop/shop-6-columns-full-width.html"
                        }
                      },
                      [_vm._v("6 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-5-columns-sidebar.html" }
                      },
                      [_vm._v("5 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-4-columns-sidebar.html" }
                      },
                      [_vm._v("4 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-3-columns-sidebar.html" }
                      },
                      [_vm._v("3 Column Sidebar")]
                    )
                  ])
                ])
              ])
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
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__sub-menu-nav-link",
          attrs: { href: "/sspa/my-profile" }
        },
        [_vm._v("Supplier Profile link")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__sub-menu-nav-link",
          attrs: { href: "/spaa/admin-user-profile" }
        },
        [_vm._v("Admin Child Profile")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item u-header__nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__nav-link",
          attrs: { href: "../home/about.html" }
        },
        [_vm._v("About us")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item u-header__nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__nav-link",
          attrs: { href: "../home/faq.html" }
        },
        [_vm._v("FAQs")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item u-header__nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__nav-link",
          attrs: { href: "../home/contact-v1.html" }
        },
        [_vm._v("Contact Us")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-none d-xl-block col-md-auto" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c("i", { staticClass: "ec ec-support font-size-50 text-primary" }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-2" }, [
          _c("div", { staticClass: "phone" }, [
            _c("strong", [_vm._v("Support")]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "text-gray-90",
                attrs: { href: "tel:800856800604" }
              },
              [_vm._v("(+800) 856 800 604")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "email" }, [
            _vm._v("\r\n                            E-mail: "),
            _c(
              "a",
              {
                staticClass: "text-gray-90",
                attrs: { href: "mailto:info@electro.com?subject=Help Need" }
              },
              [_vm._v("info@electro.com")]
            )
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
      "li",
      { staticClass: "col d-xl-none px-2 px-sm-3 position-static" },
      [
        _c(
          "a",
          {
            staticClass:
              "font-size-22 text-gray-90 text-lh-1 btn-text-secondary",
            attrs: {
              id: "searchClassicInvoker",
              href: "javascript:;",
              role: "button",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Search",
              "aria-controls": "searchClassic",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              "data-unfold-target": "#searchClassic",
              "data-unfold-type": "css-animation",
              "data-unfold-duration": "300",
              "data-unfold-delay": "300",
              "data-unfold-hide-on-scroll": "true",
              "data-unfold-animation-in": "slideInUp",
              "data-unfold-animation-out": "fadeOut"
            }
          },
          [_c("span", { staticClass: "ec ec-search" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2",
            attrs: {
              id: "searchClassic",
              "aria-labelledby": "searchClassicInvoker"
            }
          },
          [
            _c("form", { staticClass: "js-focus-state input-group px-3" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "search", placeholder: "Search Product" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary px-3",
                    attrs: { type: "button" }
                  },
                  [_c("i", { staticClass: "font-size-18 ec ec-search" })]
                )
              ])
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
    return _c("li", { staticClass: "col d-none d-xl-block" }, [
      _c(
        "a",
        {
          staticClass: "text-gray-90",
          attrs: {
            href: "../shop/wishlist.html",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "Favorites"
          }
        },
        [_c("i", { staticClass: "font-size-22 ec ec-favorites" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "col d-xl-none px-2 px-sm-3" }, [
      _c(
        "a",
        {
          staticClass: "u-header-topbar__nav-link",
          attrs: {
            id: "sidebarNavToggler",
            href: "javascript:;",
            role: "button",
            "aria-controls": "sidebarContent",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "data-unfold-event": "click",
            "data-unfold-hide-on-scroll": "false",
            "data-unfold-target": "#sidebarContent",
            "data-unfold-type": "css-animation",
            "data-unfold-animation-in": "fadeInRight",
            "data-unfold-animation-out": "fadeOutRight",
            "data-unfold-duration": "500"
          }
        },
        [_c("i", { staticClass: "ec ec-user mr-1" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderLogoSearchIconsForHome.vue?vue&type=template&id=b65d951a& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "py-2 py-xl-5- py-xl-4 bg-primary-down-lg d-none- d-xl-block-",
      class: _vm.topHeaderFixedClass
    },
    [
      _c("div", { staticClass: "container my-0dot5 my-xl-0" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c(
            "div",
            { staticClass: "col-auto" },
            [
              _c(
                "nav",
                {
                  staticClass:
                    "navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center",
                      attrs: { to: "/home", "aria-label": "Electro" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticStyle: { "margin-bottom": "0" },
                          attrs: {
                            version: "1.1",
                            x: "0px",
                            y: "0px",
                            width: "175.748px",
                            height: "42.52px",
                            viewBox: "0 0 175.748 42.52",
                            "enable-background": "new 0 0 175.748 42.52"
                          }
                        },
                        [
                          _c("ellipse", {
                            staticClass: "ellipse-bg",
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#FDD700",
                              cx: "170.05",
                              cy: "36.341",
                              rx: "5.32",
                              ry: "5.367"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#333E48",
                              d:
                                "M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\r\n                                C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\r\n                                c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\r\n                                c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\r\n                                c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\r\n                                c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\r\n                                c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\r\n                                c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\r\n                                c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\r\n                                M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\r\n                                c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\r\n                                c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\r\n                                c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\r\n                                c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\r\n                                M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\r\n                                c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\r\n                                c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\r\n                                C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\r\n                                C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\r\n                                c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\r\n                                c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\r\n                                c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\r\n                                C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\r\n                                c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\r\n                                c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\r\n                                c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\r\n                                c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\r\n                                c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\r\n                                c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\r\n                                C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\r\n                                c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\r\n                                c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\r\n                                c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\r\n                                c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\r\n                                c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c("SidebarNavigationHeader1")
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static"
            },
            [
              _c("div", { staticClass: "d-inline-flex" }, [
                _c(
                  "ul",
                  {
                    staticClass: "d-flex list-unstyled mb-0 align-items-center"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "col pr-xl-0 px-2 px-sm-3 d-none- d-xl-block"
                      },
                      [_c("CartLink")],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(4)
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
    return _c(
      "button",
      {
        staticClass: "navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0",
        attrs: {
          id: "sidebarHeaderInvokerMenu",
          type: "button",
          "aria-controls": "sidebarHeader",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-unfold-event": "click",
          "data-unfold-hide-on-scroll": "false",
          "data-unfold-target": "#sidebarHeader1",
          "data-unfold-type": "css-animation",
          "data-unfold-animation-in": "fadeInLeft",
          "data-unfold-animation-out": "fadeOutLeft",
          "data-unfold-duration": "500"
        }
      },
      [
        _c(
          "span",
          {
            staticClass: "u-hamburger__box",
            attrs: { id: "hamburgerTriggerMenu" }
          },
          [_c("span", { staticClass: "u-hamburger__inner" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col d-none d-xl-block" }, [
      _c("form", { staticClass: "js-focus-state" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "searchproduct" } },
          [_vm._v("Search")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass:
              "form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary",
            attrs: {
              type: "email",
              name: "email",
              id: "searchproduct-item",
              placeholder: "Search for Products",
              "aria-label": "Search for Products",
              "aria-describedby": "searchProduct1",
              required: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "select",
              {
                staticClass:
                  "js-select selectpicker dropdown-select custom-search-categories-select",
                attrs: {
                  "data-style":
                    "btn height-40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2"
                }
              },
              [
                _c("option", { attrs: { value: "one", selected: "" } }, [
                  _vm._v("All Categories")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "two" } }, [_vm._v("Two")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "three" } }, [_vm._v("Three")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "four" } }, [_vm._v("Four")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-primary height-40 py-2 px-3 rounded-right-pill",
                attrs: { type: "button", id: "searchProduct1" }
              },
              [_c("span", { staticClass: "ec ec-search font-size-24" })]
            )
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
      "li",
      { staticClass: "col d-xl-none px-2 px-sm-3 position-static" },
      [
        _c(
          "a",
          {
            staticClass:
              "font-size-22 text-gray-90 text-lh-1 btn-text-secondary",
            attrs: {
              id: "searchClassicInvoker",
              href: "javascript:;",
              role: "button",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Search",
              "aria-controls": "searchClassic",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              "data-unfold-target": "#searchClassic",
              "data-unfold-type": "css-animation",
              "data-unfold-duration": "300",
              "data-unfold-delay": "300",
              "data-unfold-hide-on-scroll": "true",
              "data-unfold-animation-in": "slideInUp",
              "data-unfold-animation-out": "fadeOut"
            }
          },
          [_c("span", { staticClass: "ec ec-search" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2",
            attrs: {
              id: "searchClassic",
              "aria-labelledby": "searchClassicInvoker"
            }
          },
          [
            _c("form", { staticClass: "js-focus-state input-group px-3" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "search", placeholder: "Search Product" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary px-3",
                    attrs: { type: "button" }
                  },
                  [_c("i", { staticClass: "font-size-18 ec ec-search" })]
                )
              ])
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
    return _c("li", { staticClass: "col d-none d-xl-block" }, [
      _c(
        "a",
        {
          staticClass: "text-gray-90",
          attrs: {
            href: "../shop/wishlist.html",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "Favorites"
          }
        },
        [_c("i", { staticClass: "font-size-22 ec ec-favorites" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "col d-xl-none px-2 px-sm-3" }, [
      _c(
        "a",
        {
          staticClass: "u-header-topbar__nav-link",
          attrs: {
            id: "sidebarNavToggler",
            href: "javascript:;",
            role: "button",
            "aria-controls": "sidebarContent",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "data-unfold-event": "click",
            "data-unfold-hide-on-scroll": "false",
            "data-unfold-target": "#sidebarContent",
            "data-unfold-type": "css-animation",
            "data-unfold-animation-in": "fadeInRight",
            "data-unfold-animation-out": "fadeOutRight",
            "data-unfold-duration": "500"
          }
        },
        [_c("i", { staticClass: "ec ec-user mr-1" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderTopbar.vue?vue&type=template&id=775bf9f0& ***!
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
    "div",
    { staticClass: "u-header-topbar py-2- py-1 d-none d-xl-block" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "topbar-right ml-auto" }, [
            _c("ul", { staticClass: "list-inline mb-0" }, [
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "/404" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-map-pointer mr-1" }),
                      _vm._v(" 404")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "/categories" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-map-pointer mr-1" }),
                      _vm._v(" Category")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "/about" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-map-pointer mr-1" }),
                      _vm._v(" About")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "/contact" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-map-pointer mr-1" }),
                      _vm._v(" Contact")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "/track-order" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-transport mr-1" }),
                      _vm._v(" Track Order")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass:
                    "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "u-header-topbar__nav-link",
                      attrs: { to: "#" }
                    },
                    [
                      _c("i", { staticClass: "ec ec-transport mr-1" }),
                      _vm._v("Get Apps")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              !_vm.authCustomer
                ? _c(
                    "li",
                    {
                      staticClass:
                        "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "u-header-topbar__nav-link",
                          attrs: {
                            id: "sidebarNavToggler",
                            href: "javascript:;",
                            role: "button",
                            "aria-controls": "sidebarContent",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            "data-unfold-event": "click",
                            "data-unfold-hide-on-scroll": "false",
                            "data-unfold-target": "#sidebarContent",
                            "data-unfold-type": "css-animation",
                            "data-unfold-animation-in": "fadeInRight",
                            "data-unfold-animation-out": "fadeOutRight",
                            "data-unfold-duration": "500"
                          },
                          on: {
                            "~click": function($event) {
                              return _vm.FocusUsername()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "ec ec-user mr-1" }),
                          _vm._v(" Register "),
                          _c("span", { staticClass: "text-gray-50" }, [
                            _vm._v("or")
                          ]),
                          _vm._v(" Sign in\n                            ")
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.authCustomer
                ? _c(
                    "li",
                    {
                      staticClass:
                        "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single"
                    },
                    [
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c("div", { staticClass: "position-relative" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu dropdown-unfold",
                              attrs: {
                                id: "MyAccountDropdown",
                                "aria-labelledby": "MyAccountDropdownInvoker"
                              }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item active- dropdown-item-custome transition-3d-hover",
                                  class: [
                                    _vm.currentPage.includes("my-dashboard")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/auth/my-dashboard" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-tachometer-alt"
                                  }),
                                  _vm._v(" Dashboard")
                                ]
                              ),
                              _vm._v(" "),
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
                                [
                                  _c("i", {
                                    staticClass:
                                      "font-size-18 ec ec-shopping-bag"
                                  }),
                                  _vm._v(" My Orders")
                                ]
                              ),
                              _vm._v(" "),
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
                                [
                                  _c("i", {
                                    staticClass: "font-size-18 ec ec-favorites"
                                  }),
                                  _vm._v(" My Cart")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome transition-3d-hover",
                                  class: [
                                    _vm.currentPage.includes("my-wishlist")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/auth/my-wishlist" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "font-size-18 ec ec-favorites"
                                  }),
                                  _vm._v(" My Wishlist")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome transition-3d-hover",
                                  class: [
                                    _vm.currentPage.includes("my-profile")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/auth/my-profile" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "font-size-18 ec ec-user"
                                  }),
                                  _vm._v(" My Profile")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome transition-3d-hover",
                                  class: [
                                    _vm.currentPage.includes("my-vouchers")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/auth/my-vouchers" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "font-size-18 ec ec-payment"
                                  }),
                                  _vm._v(" My Vouchers")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome transition-3d-hover",
                                  class: [
                                    _vm.currentPage.includes("my-reviews")
                                  ]
                                    ? _vm.ActiveLinkClass
                                    : 0,
                                  attrs: { to: "/auth/my-reviews" }
                                },
                                [
                                  _c("i", { staticClass: "far fa-star" }),
                                  _vm._v(" My Reviews")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "dropdown-item dropdown-item-custome transition-3d-hover",
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.CustomerLogout()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-sign-out-alt pl-1"
                                  }),
                                  _vm._v(" Logout")
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ])
          ])
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
    return _c("div", { staticClass: "topbar-left" }, [
      _c(
        "a",
        {
          staticClass: "text-gray-110 font-size-13 hover-on-dark",
          attrs: { href: "#" }
        },
        [_vm._v("Welcome to SORBORAHO")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single"
      },
      [
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _c("div", { staticClass: "position-relative" }, [
            _c(
              "a",
              {
                staticClass:
                  "dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal",
                attrs: {
                  id: "languageDropdownInvoker",
                  href: "javascript:;",
                  role: "button",
                  "aria-controls": "languageDropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  "data-unfold-event": "hover",
                  "data-unfold-target": "#languageDropdown",
                  "data-unfold-type": "css-animation",
                  "data-unfold-duration": "300",
                  "data-unfold-delay": "300",
                  "data-unfold-hide-on-scroll": "true",
                  "data-unfold-animation-in": "slideInUp",
                  "data-unfold-animation-out": "fadeOut"
                }
              },
              [
                _c("span", { staticClass: "d-inline-block d-sm-none" }, [
                  _vm._v("US")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "d-none d-sm-inline-flex align-items-center" },
                  [
                    _c("i", { staticClass: "ec ec-dollar mr-1" }),
                    _vm._v(" Dollar (US)")
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "dropdown-menu dropdown-unfold",
                attrs: {
                  id: "languageDropdown",
                  "aria-labelledby": "languageDropdownInvoker"
                }
              },
              [
                _c(
                  "a",
                  { staticClass: "dropdown-item active", attrs: { href: "#" } },
                  [_vm._v("English")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Deutsch")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Español‎")]
                )
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal",
        attrs: {
          id: "MyAccountDropdownInvoker",
          href: "javascript:;",
          role: "button",
          "aria-controls": "MyAccountDropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-unfold-event": "click",
          "data-unfold-target": "#MyAccountDropdown",
          "data-unfold-type": "css-animation",
          "data-unfold-duration": "300",
          "data-unfold-delay": "300",
          "data-unfold-hide-on-scroll": "true",
          "data-unfold-animation-in": "slideInUp",
          "data-unfold-animation-out": "fadeOut"
        }
      },
      [
        _c(
          "span",
          { staticClass: "d-none d-sm-inline-flex align-items-center" },
          [
            _c("i", { staticClass: "ec ec-user mr-1" }),
            _vm._v(
              "\n                                             My Account\n                                        "
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSearchForAllPage.vue?vue&type=template&id=31333a4e& ***!
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
  return _c("div", { staticClass: "d-none d-xl-block bg-primary" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row align-items-stretch min-height-50" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-auto align-self-center" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("ul", { staticClass: "d-flex list-unstyled mb-0" }, [
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("li", { staticClass: "col pr-0" }, [_c("CartLink")], 1)
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
    return _c(
      "div",
      { staticClass: "col-md-auto d-none d-xl-flex align-items-end" },
      [
        _c("div", { staticClass: "max-width-270 min-width-270" }, [
          _c("div", { attrs: { id: "basicsAccordion" } }, [
            _c("div", { staticClass: "card border-0 rounded-0" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header bg-primary rounded-0 card-collapse border-0",
                  attrs: { id: "basicsHeadingOne" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90",
                      attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#basicsCollapseOne",
                        "aria-expanded": "true",
                        "aria-controls": "basicsCollapseOne"
                      }
                    },
                    [
                      _c("span", { staticClass: "pl-1 text-gray-90" }, [
                        _vm._v("Shop By Department")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-90 ml-3" }, [
                        _c("span", { staticClass: "ec ec-arrow-down-search" })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse vertical-menu v1",
                  attrs: {
                    id: "basicsCollapseOne",
                    "aria-labelledby": "basicsHeadingOne",
                    "data-parent": "#basicsAccordion"
                  }
                },
                [
                  _c("div", { staticClass: "card-body p-0" }, [
                    _c(
                      "nav",
                      {
                        staticClass:
                          "js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "collapse navbar-collapse u-header__navbar-collapse",
                            attrs: { id: "navBar" }
                          },
                          [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "navbar-nav u-header__navbar-nav border-primary border-top-0"
                              },
                              [
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link font-weight-bold",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Value of the Day")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link font-weight-bold",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Top 100 Offers")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link font-weight-bold",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("New Arrivals")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-animation-in": "slideInUp",
                                      "data-animation-out": "fadeOut",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Computers & Accessories")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img1.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Computers & Accessories"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Computers & Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Laptops, Desktops & Monitors"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Printers & Ink"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Networking & Internet Devices"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Computer Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Software")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("div", {}, [
                                                            _vm._v(
                                                              "All Electronics"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "u-nav-subtext font-size-11 text-gray-30"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Discover more products"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Office & Stationery"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Office & Stationery"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu1",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Cameras, Audio & Video")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu1"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img4.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Cameras & Photography"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Lenses")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Camera Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Security & Surveillance"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Binoculars & Telescopes"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Camcorders")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Software")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("div", {}, [
                                                            _vm._v(
                                                              "All Electronics"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "u-nav-subtext font-size-11 text-gray-30"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Discover more products"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Audio & Video")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Audio & Video"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Headphones & Speakers"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu2",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Mobiles & Tablets")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu2"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img3.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Mobiles & Tablets")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Mobile Phones"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Smartphones")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Refurbished Mobiles"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link border-top pt-2",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Mobile Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Cases & Covers"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("div", {}, [
                                                            _vm._v(
                                                              "All Electronics"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "u-nav-subtext font-size-11 text-gray-30"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Discover more products"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("All Tablets")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Tablet Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu3",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Movies, Music & Video")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu3"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img2.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Movies & TV Shows")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Movies & TV Shows"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("All English")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link border-bottom pb-3",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("All Hindi")]
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Video Games")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("PC Games")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Consoles")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Accessories")]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Music")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("All Music")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Indian Classical"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Musical Instruments"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu4",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("TV & Audio")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu4"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img5.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Audio & Video")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Audio & Video"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Televisions")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Headphones")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Speakers")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Audio & Video Accessories"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("div", {}, [
                                                            _vm._v(
                                                              "Electro Home Appliances"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "u-nav-subtext font-size-11 text-gray-30"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Available in select cities"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Music")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Televisions")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Headphones")]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu5",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Watches & Eyewear")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu5"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img6.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Watches")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("All Watches")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Men's Watches"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Women's Watches"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Premium Watches"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Deals on Watches"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Eyewear")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Men's Sunglasses"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-mega-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "hover",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle",
                                        attrs: {
                                          id: "basicMegaMenu3",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [_vm._v("Car, Motorbike & Industrial")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "hs-mega-menu vmm-tfw u-header__sub-menu",
                                        attrs: {
                                          "aria-labelledby": "basicMegaMenu3"
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "vmm-bg" }, [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                "website/assets/img/500X400/img7.png",
                                              alt: "Image Description"
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row u-header__mega-menu-wrapper"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Car & Motorbike")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group mb-3"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Cars & Bikes"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Car & Bike Care"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link border-bottom pb-3",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Lubricants")]
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [_vm._v("Shop for Bike")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Helmets & Gloves"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [_vm._v("Bike Parts")]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col mb-3 mb-sm-0"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Industrial Supplies"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "u-header__sub-menu-nav-group"
                                                  },
                                                  [
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "All Industrial Supplies"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "nav-link u-header__sub-menu-nav-link",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Lab & Scientific"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass:
                                      "nav-item hs-has-sub-menu u-header__nav-item",
                                    attrs: {
                                      "data-event": "click",
                                      "data-animation-in": "slideInUp",
                                      "data-animation-out": "fadeOut",
                                      "data-position": "left"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle",
                                        attrs: {
                                          id: "homeMegaMenu",
                                          href: "javascript:;",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false",
                                          "aria-labelledby": "homeSubMenu"
                                        }
                                      },
                                      [_vm._v("Accessories")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut",
                                        staticStyle: {
                                          "min-width": "230px",
                                          display: "none"
                                        },
                                        attrs: {
                                          id: "homeSubMenu",
                                          "aria-labelledby": "homeMegaMenu"
                                        }
                                      },
                                      [
                                        _c(
                                          "li",
                                          { staticClass: "hs-has-sub-menu" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "nav-link u-header__sub-menu-nav-link ",
                                                attrs: { href: "index.html" }
                                              },
                                              [_vm._v("Home-v1")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          { staticClass: "hs-has-sub-menu" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "nav-link u-header__sub-menu-nav-link ",
                                                attrs: { href: "home-v2.html" }
                                              },
                                              [_vm._v("Home-v2")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          { staticClass: "hs-has-sub-menu" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "nav-link u-header__sub-menu-nav-link ",
                                                attrs: { href: "home-v3.html" }
                                              },
                                              [_vm._v("Home-v3")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          { staticClass: "hs-has-sub-menu" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "nav-link u-header__sub-menu-nav-link ",
                                                attrs: { href: "home-v4.html" }
                                              },
                                              [_vm._v("Home-v4")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col align-self-center" }, [
      _c("form", { staticClass: "js-focus-state" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "searchProduct" } },
          [_vm._v("Search")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass:
              "form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill",
            attrs: {
              type: "email",
              name: "email",
              id: "searchProduct",
              placeholder: "Search for Products",
              "aria-label": "Search for Products",
              "aria-describedby": "searchProduct1",
              required: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "select",
              {
                staticClass:
                  "js-select selectpicker dropdown-select custom-search-categories-select",
                attrs: {
                  "data-style":
                    "btn height-40 text-gray-60 font-weight-normal border-0 rounded-0 bg-white px-5 py-2"
                }
              },
              [
                _c("option", { attrs: { value: "one", selected: "" } }, [
                  _vm._v("All Categories")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "two" } }, [_vm._v("Two")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "three" } }, [_vm._v("Three")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "four" } }, [_vm._v("Four")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-dark height-40 py-2 px-3 rounded-right-pill",
                attrs: { type: "button", id: "searchProduct1" }
              },
              [_c("span", { staticClass: "ec ec-search font-size-24" })]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "col" }, [
      _c(
        "a",
        {
          staticClass: "text-gray-90",
          attrs: {
            href: "../shop/compare.html",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "Compare"
          }
        },
        [_c("i", { staticClass: "font-size-22 ec ec-compare" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "col" }, [
      _c(
        "a",
        {
          staticClass: "text-gray-90",
          attrs: {
            href: "../shop/wishlist.html",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "Favorites"
          }
        },
        [_c("i", { staticClass: "font-size-22 ec ec-favorites" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/HeaderVerticalAndSecondaryMenuForHome.vue?vue&type=template&id=d06273d8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-none d-xl-block container" }, [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c(
          "nav",
          {
            staticClass:
              "js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "collapse navbar-collapse u-header__navbar-collapse",
                attrs: { id: "navBar" }
              },
              [
                _c("ul", { staticClass: "navbar-nav u-header__navbar-nav" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item u-header__nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link u-header__nav-link",
                          attrs: {
                            to: "/gift-card",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [_vm._v("Gift Cards")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-auto d-none d-xl-block" }, [
      _c("div", { staticClass: "max-width-270 min-width-270" }, [
        _c("div", { attrs: { id: "basicsAccordion" } }, [
          _c("div", { staticClass: "card border-0" }, [
            _c(
              "div",
              {
                staticClass: "card-header card-collapse border-0",
                attrs: { id: "basicsHeadingOne" }
              },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90",
                    attrs: {
                      type: "button",
                      "data-toggle": "collapse",
                      "data-target": "#basicsCollapseOne",
                      "aria-expanded": "true",
                      "aria-controls": "basicsCollapseOne"
                    }
                  },
                  [
                    _c("span", { staticClass: "ml-0 text-gray-90 mr-2" }, [
                      _c("span", { staticClass: "fa fa-list-ul" })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "pl-1 text-gray-90" }, [
                      _vm._v("All Departments")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse show vertical-menu",
                attrs: {
                  id: "basicsCollapseOne",
                  "aria-labelledby": "basicsHeadingOne",
                  "data-parent": "#basicsAccordion"
                }
              },
              [
                _c("div", { staticClass: "card-body p-0" }, [
                  _c(
                    "nav",
                    {
                      staticClass:
                        "js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "collapse navbar-collapse u-header__navbar-collapse",
                          attrs: { id: "navBar" }
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "navbar-nav u-header__navbar-nav" },
                            [
                              _c(
                                "li",
                                {
                                  staticClass: "nav-item u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link font-weight-bold",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("Value of the Day")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "nav-item u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link font-weight-bold",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("Top 100 Offers")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "nav-item u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link font-weight-bold",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v("New Arrivals")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-animation-in": "slideInUp",
                                    "data-animation-out": "fadeOut",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Computers & Accessories")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img1.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [
                                                  _vm._v(
                                                    "Computers & Accessories"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Computers & Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Laptops, Desktops & Monitors"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Printers & Ink")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Networking & Internet Devices"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Computer Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Software")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _c("div", {}, [
                                                          _vm._v(
                                                            "All Electronics"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "u-nav-subtext font-size-11 text-gray-30"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Discover more products"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Office & Stationery")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Office & Stationery"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu1",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Cameras, Audio & Video")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu1"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img4.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [
                                                  _vm._v(
                                                    "Cameras & Photography"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Lenses")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Camera Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Security & Surveillance"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Binoculars & Telescopes"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Camcorders")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Software")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _c("div", {}, [
                                                          _vm._v(
                                                            "All Electronics"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "u-nav-subtext font-size-11 text-gray-30"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Discover more products"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Audio & Video")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Audio & Video"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Headphones & Speakers"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu2",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Mobiles & Tablets")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu2"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img3.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Mobiles & Tablets")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Mobile Phones"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Smartphones")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Refurbished Mobiles"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link border-top pt-2",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Mobile Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Cases & Covers")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _c("div", {}, [
                                                          _vm._v(
                                                            "All Electronics"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "u-nav-subtext font-size-11 text-gray-30"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Discover more products"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("All Tablets")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Tablet Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu3",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Movies, Music & Video Game")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu3"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img2.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Movies & TV Shows")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Movies & TV Shows"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("All English")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link border-bottom pb-3",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("All Hindi")]
                                                    )
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Video Games")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("PC Games")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Consoles")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Accessories")]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Music")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("All Music")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Indian Classical"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Musical Instruments"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu4",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("TV & Audio")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu4"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img5.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Audio & Video")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Audio & Video"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Televisions")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Headphones")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Speakers")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Audio & Video Accessories"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _c("div", {}, [
                                                          _vm._v(
                                                            "Electro Home Appliances"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "u-nav-subtext font-size-11 text-gray-30"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Available in select cities"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Music")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Televisions")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Headphones")]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu5",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Watches & Eyewear")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu5"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img6.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Watches")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("All Watches")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Men's Watches")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Women's Watches"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Premium Watches"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Deals on Watches"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Eyewear")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Men's Sunglasses"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-mega-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "hover",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle",
                                      attrs: {
                                        id: "basicMegaMenu3",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [_vm._v("Car, Motorbike & Industrial")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "hs-mega-menu vmm-tfw u-header__sub-menu",
                                      attrs: {
                                        "aria-labelledby": "basicMegaMenu3"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "vmm-bg" }, [
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              "website/assets/img/500X400/img7.png",
                                            alt: "Image Description"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "row u-header__mega-menu-wrapper"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Car & Motorbike")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group mb-3"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Cars & Bikes"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Car & Bike Care"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link border-bottom pb-3",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Lubricants")]
                                                    )
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Shop for Bike")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Helmets & Gloves"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [_vm._v("Bike Parts")]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col mb-3 mb-sm-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-title"
                                                },
                                                [_vm._v("Industrial Supplies")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "u-header__sub-menu-nav-group"
                                                },
                                                [
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "All Industrial Supplies"
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nav-link u-header__sub-menu-nav-link",
                                                        attrs: { href: "#" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Lab & Scientific"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "nav-item hs-has-sub-menu u-header__nav-item",
                                  attrs: {
                                    "data-event": "click",
                                    "data-animation-in": "slideInUp",
                                    "data-animation-out": "fadeOut",
                                    "data-position": "left"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle",
                                      attrs: {
                                        id: "homeMegaMenu",
                                        href: "javascript:;",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        "aria-labelledby": "homeSubMenu"
                                      }
                                    },
                                    [_vm._v("Accessories")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut",
                                      staticStyle: {
                                        "min-width": "230px",
                                        display: "none"
                                      },
                                      attrs: {
                                        id: "homeSubMenu",
                                        "aria-labelledby": "homeMegaMenu"
                                      }
                                    },
                                    [
                                      _c(
                                        "li",
                                        { staticClass: "hs-has-sub-menu" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "nav-link u-header__sub-menu-nav-link ",
                                              attrs: { href: "index.html" }
                                            },
                                            [_vm._v("Home-v1")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { staticClass: "hs-has-sub-menu" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "nav-link u-header__sub-menu-nav-link ",
                                              attrs: { href: "home-v2.html" }
                                            },
                                            [_vm._v("Home-v2")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { staticClass: "hs-has-sub-menu" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "nav-link u-header__sub-menu-nav-link ",
                                              attrs: { href: "home-v3.html" }
                                            },
                                            [_vm._v("Home-v3")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { staticClass: "hs-has-sub-menu" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "nav-link u-header__sub-menu-nav-link ",
                                              attrs: { href: "home-v4.html" }
                                            },
                                            [_vm._v("Home-v4")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
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
      "li",
      {
        staticClass: "nav-item hs-has-mega-menu u-header__nav-item",
        attrs: {
          "data-event": "click",
          "data-animation-in": "slideInUp",
          "data-animation-out": "fadeOut",
          "data-position": "left"
        }
      },
      [
        _c(
          "a",
          {
            staticClass:
              "nav-link u-header__nav-link u-header__nav-link-toggle text-sale",
            attrs: {
              id: "homeMegaMenu",
              href: "javascript:;",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("Super Deals")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "hs-mega-menu w-100 u-header__sub-menu",
            attrs: { "aria-labelledby": "homeMegaMenu" }
          },
          [
            _c("div", { staticClass: "row u-header__mega-menu-wrapper" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Home & Static Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "index.html" }
                      },
                      [_vm._v("Home v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v2.html" }
                      },
                      [_vm._v("Home v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v3.html" }
                      },
                      [_vm._v("Home v3")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v3-full-color-bg.html" }
                      },
                      [_vm._v("Home v3.1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v4.html" }
                      },
                      [_vm._v("Home v4")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v5.html" }
                      },
                      [_vm._v("Home v5")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v6.html" }
                      },
                      [_vm._v("Home v6")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "home-v7.html" }
                      },
                      [_vm._v("Home v7")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "about.html" }
                      },
                      [_vm._v("About")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "contact-v1.html" }
                      },
                      [_vm._v("Contact v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "contact-v2.html" }
                      },
                      [_vm._v("Contact v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "faq.html" }
                      },
                      [_vm._v("FAQ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "store-directory.html" }
                      },
                      [_vm._v("Store Directory")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "terms-and-conditions.html" }
                      },
                      [_vm._v("Terms and Conditions")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "404.html" }
                      },
                      [_vm._v("404")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Shop Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-grid.html" }
                      },
                      [_vm._v("Shop Grid")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-grid-extended.html" }
                      },
                      [_vm._v("Shop Grid Extended")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-list-view.html" }
                      },
                      [_vm._v("Shop List View")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-list-view-small.html" }
                      },
                      [_vm._v("Shop List View Small")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-left-sidebar.html" }
                      },
                      [_vm._v("Shop Left Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-full-width.html" }
                      },
                      [_vm._v("Shop Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-right-sidebar.html" }
                      },
                      [_vm._v("Shop Right Sidebar")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Product Categories")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-4-column-sidebar.html"
                        }
                      },
                      [_vm._v("4 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-5-column-sidebar.html"
                        }
                      },
                      [_vm._v("5 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-6-column-full-width.html"
                        }
                      },
                      [_vm._v("6 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href:
                            "../shop/product-categories-7-column-full-width.html"
                        }
                      },
                      [_vm._v("7 Column Full width")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Single Product Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-extended.html" }
                      },
                      [_vm._v("Single Product Extended")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-fullwidth.html" }
                      },
                      [_vm._v("Single Product Fullwidth")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/single-product-sidebar.html" }
                      },
                      [_vm._v("Single Product Sidebar")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Ecommerce Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop.html" }
                      },
                      [_vm._v("Shop")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/cart.html" }
                      },
                      [_vm._v("Cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/checkout.html" }
                      },
                      [_vm._v("Checkout")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/my-account.html" }
                      },
                      [_vm._v("My Account")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/track-your-order.html" }
                      },
                      [_vm._v("Track your Order")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/compare.html" }
                      },
                      [_vm._v("Compare")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Blog Pages")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group mb-3" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v1.html" }
                      },
                      [_vm._v("Blog v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v2.html" }
                      },
                      [_vm._v("Blog v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-v3.html" }
                      },
                      [_vm._v("Blog v3")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/blog-full-width.html" }
                      },
                      [_vm._v("Blog Full Width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../blog/single-blog-post.html" }
                      },
                      [_vm._v("Single Blog Post")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "u-header__sub-menu-title" }, [
                  _vm._v("Shop Columns")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "u-header__sub-menu-nav-group" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href: "../shop/shop-7-columns-full-width.html"
                        }
                      },
                      [_vm._v("7 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: {
                          href: "../shop/shop-6-columns-full-width.html"
                        }
                      },
                      [_vm._v("6 Column Full width")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-5-columns-sidebar.html" }
                      },
                      [_vm._v("5 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-4-columns-sidebar.html" }
                      },
                      [_vm._v("4 Column Sidebar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link u-header__sub-menu-nav-link",
                        attrs: { href: "../shop/shop-3-columns-sidebar.html" }
                      },
                      [_vm._v("3 Column Sidebar")]
                    )
                  ])
                ])
              ])
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
    return _c("li", { staticClass: "nav-item u-header__nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__nav-link",
          attrs: {
            href: "#",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "aria-labelledby": "pagesSubMenu"
          }
        },
        [_vm._v("Featured Brands")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item u-header__nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link u-header__nav-link",
          attrs: {
            href: "#",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "aria-labelledby": "blogSubMenu"
          }
        },
        [_vm._v("Trending Styles")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item u-header__nav-last-item" }, [
      _c(
        "a",
        { staticClass: "text-gray-90", attrs: { href: "#", target: "_blank" } },
        [
          _vm._v(
            "\r\n                                Free Shipping on Orders $50+\r\n                            "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarCartContent.vue?vue&type=template&id=48df6be2& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "u-sidebar u-sidebar__lg",
      attrs: {
        id: "sidebarCartContent",
        "aria-labelledby": "sidebarCartToggler"
      }
    },
    [
      _c("div", { staticClass: "u-sidebar__scroller" }, [
        _c("div", { staticClass: "u-sidebar__container" }, [
          _c(
            "div",
            {
              staticClass: "js-scrollbar- u-header-sidebar__footer-offset pb-3"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "js-scrollbar u-sidebar__body" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "pb-3" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex-center-between px-4 pt-2 pb-4" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5",
                          attrs: { to: "/cart" }
                        },
                        [_vm._v("Cart")]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5",
                          attrs: { to: "/checkout" }
                        },
                        [_vm._v("Checkout")]
                      )
                    ],
                    1
                  )
                ])
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
    return _c(
      "div",
      { staticClass: "d-flex bg-primary align-items-center pb-2 pt-2 px-3" },
      [
        _c("span", [_vm._v("My Cart")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close ml-auto",
            attrs: {
              type: "button",
              "aria-controls": "sidebarCartContent",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              "data-unfold-event": "click",
              "data-unfold-hide-on-scroll": "false",
              "data-unfold-target": "#sidebarCartContent",
              "data-unfold-type": "css-animation",
              "data-unfold-animation-in": "fadeInRight",
              "data-unfold-animation-out": "fadeOutRight",
              "data-unfold-duration": "500"
            }
          },
          [_c("i", { staticClass: "ec ec-close-remove" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "js-scrollbar u-sidebar__content- u-header-sidebar__content_cart",
        staticStyle: { "max-height": "250px" }
      },
      [
        _c("div", { staticClass: "pb-2" }, [
          _c("ul", { staticClass: "list-unstyled px-3- pt-3" }, [
            _c("li", { staticClass: "border-bottom pb-2 mb-3" }, [
              _c("div", {}, [
                _c("ul", { staticClass: "list-unstyled row mx-n2" }, [
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "website/assets/img/75X75/img1.jpg",
                        alt: "Image Description"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col" }, [
                    _c(
                      "h5",
                      {
                        staticClass: "text-blue font-size-14 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "Ultra Wireless S50 Headphones S50 with Bluetooth"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-size-14" }, [
                      _vm._v("1 × $1,100.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "ec ec-close-remove" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "border-bottom pb-2 mb-3" }, [
              _c("div", {}, [
                _c("ul", { staticClass: "list-unstyled row mx-n2" }, [
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "website/assets/img/75X75/img2.jpg",
                        alt: "Image Description"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col" }, [
                    _c(
                      "h5",
                      {
                        staticClass: "text-blue font-size-14 font-weight-bold"
                      },
                      [_vm._v("Widescreen NX Mini F1 SMART NX")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-size-14" }, [
                      _vm._v("1 × $685.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "ec ec-close-remove" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "border-bottom pb-2 mb-3" }, [
              _c("div", {}, [
                _c("ul", { staticClass: "list-unstyled row mx-n2" }, [
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "website/assets/img/75X75/img2.jpg",
                        alt: "Image Description"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col" }, [
                    _c(
                      "h5",
                      {
                        staticClass: "text-blue font-size-14 font-weight-bold"
                      },
                      [_vm._v("Widescreen NX Mini F1 SMART NX")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-size-14" }, [
                      _vm._v("1 × $685.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "ec ec-close-remove" })]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "border-bottom pb-2 mb-3" }, [
              _c("div", {}, [
                _c("ul", { staticClass: "list-unstyled row mx-n2" }, [
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "website/assets/img/75X75/img2.jpg",
                        alt: "Image Description"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col" }, [
                    _c(
                      "h5",
                      {
                        staticClass: "text-blue font-size-14 font-weight-bold"
                      },
                      [_vm._v("Widescreen NX Mini F1 SMART NX")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-size-14" }, [
                      _vm._v("1 × $685.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-2 col-auto" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "ec ec-close-remove" })]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-center-between px-4 pt-2 pb-2" }, [
      _c("table", { staticClass: "table mb-3 mb-md-0" }, [
        _c("tbody", [
          _c("tr", { staticClass: "cart-subtotal" }, [
            _c("th", [_vm._v("Subtotal")]),
            _vm._v(" "),
            _c("td", { attrs: { "data-title": "Subtotal" } }, [
              _c("span", { staticClass: "amount" }, [_vm._v("$1,785.00")])
            ])
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "shipping" }, [
            _c("th", [_vm._v("Shipping")]),
            _vm._v(" "),
            _c("td", { attrs: { "data-title": "Shipping" } }, [
              _vm._v(
                "\n\t\t\t\t                                    Flat Rate: "
              ),
              _c("span", { staticClass: "amount" }, [_vm._v("$300.00")])
            ])
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "order-total" }, [
            _c("th", [_vm._v("Total")]),
            _vm._v(" "),
            _c("td", { attrs: { "data-title": "Total" } }, [
              _c("strong", [
                _c("span", { staticClass: "amount" }, [_vm._v("$2,085.00")])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Layouts/SidebarNavigationHeader1.vue?vue&type=template&id=767828f9& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "u-sidebar u-sidebar--left",
      attrs: { id: "sidebarHeader1", "aria-labelledby": "sidebarHeaderInvoker" }
    },
    [
      _c("div", { staticClass: "u-sidebar__scroller" }, [
        _c("div", { staticClass: "u-sidebar__container" }, [
          _c("div", { staticClass: "u-header-sidebar__footer-offset" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "js-scrollbar u-sidebar__body" }, [
              _c(
                "div",
                {
                  staticClass: "u-sidebar__content u-header-sidebar__content",
                  attrs: { id: "headerSidebarContent" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3",
                      attrs: { href: "index.html", "aria-label": "Electro" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticStyle: { "margin-bottom": "0" },
                          attrs: {
                            version: "1.1",
                            x: "0px",
                            y: "0px",
                            width: "175.748px",
                            height: "42.52px",
                            viewBox: "0 0 175.748 42.52",
                            "enable-background": "new 0 0 175.748 42.52"
                          }
                        },
                        [
                          _c("ellipse", {
                            staticClass: "ellipse-bg",
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#FDD700",
                              cx: "170.05",
                              cy: "36.341",
                              rx: "5.32",
                              ry: "5.367"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              fill: "#333E48",
                              d:
                                "M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\r\n                                    C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\r\n                                    c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\r\n                                    c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\r\n                                    c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\r\n                                    c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\r\n                                    c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\r\n                                    c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\r\n                                    c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\r\n                                    M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\r\n                                    c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\r\n                                    c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\r\n                                    c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\r\n                                    c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\r\n                                    M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\r\n                                    c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\r\n                                    c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\r\n                                    C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\r\n                                    C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\r\n                                    c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\r\n                                    c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\r\n                                    c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\r\n                                    C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\r\n                                    c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\r\n                                    c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\r\n                                    c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\r\n                                    c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\r\n                                    c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\r\n                                    c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\r\n                                    C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\r\n                                    c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\r\n                                    c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\r\n                                    c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\r\n                                    c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\r\n                                    c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "footer",
            {
              staticClass: "svg-preloader u-header-sidebar__footer",
              attrs: { id: "SVGwaveWithDots" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "position-absolute right-0 bottom-0 left-0 z-index-n1"
                },
                [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value:
                          _vm.baseURL +
                          "/website/assets/svg/components/wave-bottom-with-dots.svg",
                        expression:
                          "baseURL+'/website/assets/svg/components/wave-bottom-with-dots.svg'"
                      }
                    ],
                    staticClass: "js-svg-injector",
                    attrs: {
                      alt: "Image Description",
                      "data-parent": "#SVGwaveWithDots"
                    }
                  })
                ]
              )
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
    return _c(
      "div",
      {
        staticClass:
          "position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white"
      },
      [
        _c(
          "button",
          {
            staticClass: "close ml-auto",
            attrs: {
              type: "button",
              "aria-controls": "sidebarHeader",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              "data-unfold-event": "click",
              "data-unfold-hide-on-scroll": "false",
              "data-unfold-target": "#sidebarHeader1",
              "data-unfold-type": "css-animation",
              "data-unfold-animation-in": "fadeInLeft",
              "data-unfold-animation-out": "fadeOutLeft",
              "data-unfold-duration": "500"
            }
          },
          [
            _c("span", { attrs: { "aria-hidden": "true" } }, [
              _c("i", {
                staticClass: "ec ec-close-remove text-gray-90 font-size-20"
              })
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
    return _c(
      "ul",
      {
        staticClass: "u-header-collapse__nav",
        attrs: { id: "headerSidebarList" }
      },
      [
        _c("li", {}, [
          _c(
            "a",
            {
              staticClass: "u-header-collapse__nav-link font-weight-bold",
              attrs: { href: "#" }
            },
            [_vm._v("Deal of the Day")]
          )
        ]),
        _vm._v(" "),
        _c("li", {}, [
          _c(
            "a",
            {
              staticClass: "u-header-collapse__nav-link font-weight-bold",
              attrs: { href: "#" }
            },
            [_vm._v("Daily Needs")]
          )
        ]),
        _vm._v(" "),
        _c("li", {}, [
          _c(
            "a",
            {
              staticClass: "u-header-collapse__nav-link font-weight-bold",
              attrs: { href: "#" }
            },
            [_vm._v("Signeture Products")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarComputersCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarComputersCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Computers & Accessories\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarComputersCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Computers & Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Computers & Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Laptops, Desktops & Monitors")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Printers & Ink")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Networking & Internet Devices")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Computer Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Software")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Office & Stationery")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Office & Stationery")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Electronics")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarCamerasCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarCamerasCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Cameras, Audio & Video\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarCamerasCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Cameras & Photography")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Lenses")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Camera Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Security & Surveillance")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Binoculars & Telescopes")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Camcorders")]
                  )
                ]),
                _vm._v(" "),
                _c("li", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Software")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Audio & Video")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Audio & Video")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphones & Speakers")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Electronics")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarMobilesCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarMobilesCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Mobiles & Tablets\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarMobilesCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Mobiles & Tablets")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Mobile Phones")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Smartphones")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Refurbished Mobiles")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Cases & Covers")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Mobile Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Cases & Covers")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Tablets")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Tablet Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Electronics")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarMoviesCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarMoviesCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Movies, Music & Video\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarMoviesCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Movies & TV Shows")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Movies & TV Shows")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All English")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Hindi")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Video Games")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("PC Games")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Consoles")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Music")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Music")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Indian Classical")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Musical Instruments")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarTvCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarTvCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    TV & Audio\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarTvCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Audio & Video")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Audio & Video")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Televisions")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphones")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Speakers")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Audio & Video Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Music")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Televisions")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphones")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Electro Home Appliances")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarWatchesCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarWatchesCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Watches & Eyewear\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarWatchesCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Men's Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Women's Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Premium Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Deals on Watches")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Eyewear")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Men's Sunglasses")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarCarCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarCarCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Car, Motorbike & Industrial\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarCarCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Car & Motorbike")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Cars & Bikes")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Car & Bike Care")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Lubricants")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Shop for Bike")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Helmets & Gloves")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Bike Parts")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "span",
                    { staticClass: "u-header-sidebar__sub-menu-title" },
                    [_vm._v("Industrial Supplies")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Industrial Supplies")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Lab & Scientific")]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "u-has-submenu u-header-collapse__submenu" }, [
          _c(
            "a",
            {
              staticClass:
                "u-header-collapse__nav-link u-header-collapse__nav-pointer",
              attrs: {
                href: "javascript:;",
                "data-target": "#headerSidebarAccessoriesCollapse",
                role: "button",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "headerSidebarAccessoriesCollapse"
              }
            },
            [
              _vm._v(
                "\r\n                                    Accessories\r\n                                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse",
              attrs: {
                id: "headerSidebarAccessoriesCollapse",
                "data-parent": "#headerSidebarContent"
              }
            },
            [
              _c("ul", { staticClass: "u-header-collapse__nav-list" }, [
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Cases")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Chargers")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphone Accessories")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphone Cases")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Headphones")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("All Industrial Supplies")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "u-header-collapse__submenu-nav-link",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Lab & Scientific")]
                  )
                ])
              ])
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-inline mb-0" }, [
      _c("li", { staticClass: "list-inline-item pr-3" }, [
        _c(
          "a",
          {
            staticClass: "u-header-sidebar__footer-link text-gray-90",
            attrs: { href: "#" }
          },
          [_vm._v("Privacy")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-inline-item pr-3" }, [
        _c(
          "a",
          {
            staticClass: "u-header-sidebar__footer-link text-gray-90",
            attrs: { href: "#" }
          },
          [_vm._v("Terms")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-inline-item" }, [
        _c(
          "a",
          {
            staticClass: "u-header-sidebar__footer-link text-gray-90",
            attrs: { href: "#" }
          },
          [_c("i", { staticClass: "fas fa-info-circle" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/WebsiteWrapper.vue?vue&type=template&id=02c0adb7& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "header",
        {
          staticClass: "u-header u-header-left-aligned-nav",
          attrs: { id: "header" }
        },
        [
          _c(
            "div",
            { staticClass: "u-header__section" },
            [
              _c("HeaderTopbar"),
              _vm._v(" "),
              this.$route.path === "/home"
                ? _c("HeaderLogoSearchIconsForHome", {
                    attrs: { topHeaderFixedClass: _vm.topHeaderFixedClass }
                  })
                : _vm._e(),
              _vm._v(" "),
              this.$route.path === "/home"
                ? _c("HeaderVerticalAndSecondaryMenuForHome")
                : _vm._e(),
              _vm._v(" "),
              this.$route.path !== "/home"
                ? _c("HeaderLogoMenuForAllPage", {
                    attrs: { topHeaderFixedClass: _vm.topHeaderFixedClass }
                  })
                : _vm._e(),
              _vm._v(" "),
              this.$route.path !== "/home"
                ? _c("HeaderVerticalAndSearchForAllPage")
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "main",
        {
          class: _vm.mainContentMarginTopWhenHeaderFiexd,
          attrs: { id: "content", role: "main" }
        },
        [
          _c("Breadcrumb"),
          _vm._v(" "),
          _c("router-view"),
          _vm._v(" "),
          _c("vue-progress-bar")
        ],
        1
      ),
      _vm._v(" "),
      _c("FooterComponent"),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "d-xl-none", staticStyle: { "margin-top": "45px" } },
        [_c("FooterFixed")],
        1
      ),
      _vm._v(" "),
      _c("AccountSidebarNavigationToggler"),
      _vm._v(" "),
      _c("SidebarCartContent"),
      _vm._v(" "),
      _c("GoToTopButton")
    ],
    1
  )
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
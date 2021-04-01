(self["webpackChunk"] = self["webpackChunk"] || []).push([["customer-login-website"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
 //for user MapState
//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
//const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "customer-login-Public-website",
  data: function data() {
    return {
      //for form top error display
      display_error: false,
      error_message: '',
      form: new Form({
        username: '',
        password: '',
        remember: true
        /*By default remember me true*/

      })
    };
  },
  components: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('AuthenticationForCustomer', ['spac_access_token'])),
  methods: {
    // Submit the form via a POST request
    CustomerLogin: function CustomerLogin() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/customer/login').then(function (_ref) {
        var data = _ref.data;

        // console.log(data.success); 
        if (data.success) {
          _this.$Progress.finish();

          _this.display_error = false; // console.log(data);
          //for security reson, Best Policy for API Based Authentication
          // localStorage.setItem('c_access_token', true); 

          _this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true);

          _this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
          // window.location = '/auth/my-dashboard';   
          //window.location = '/home';                       


          _this.$router.push({
            path: '/home'
          })["catch"](function (err) {}); //route after successfule submit                   
          //this.$router.replace({ path : '/home' }).catch(err => {});   //route after successfule submit
          //this.$router.go('/auth/my-dashboard');


          _this.form.reset(); //reset from after submit
          //toastr.success('Login successfule'); 

        }

        if (data.error) {
          _this.$Progress.finish();

          _this.display_error = true;
          _this.error_message = data.error;
          toastr.warning(data.error);
        }

        if (data.errors) {
          _this.$Progress.finish();

          _this.display_error = false;
        }
      })["catch"](function () {
        _this.display_error = false;

        _this.$Progress.fail(); //toastr.warning('Something is wrong!');

      });
    },
    //End Customer Login    
    getUser: function getUser() {
      this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
    },
    CustomerLoginAPI: function CustomerLoginAPI() {
      var _this2 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/api/afc/login').then(function (_ref2) {
        var data = _ref2.data;

        //console.log(data);
        if (data) {
          // if(data.access_token){ 
          _this2.$Progress.finish();

          _this2.display_error = false; // var date = new Date(); //$date = new DateTime(); //Date.now();
          // const expireTime = CurrentDateTime.setSeconds( CurrentDateTime.getSeconds() + data.expires_in * 1000 ); 
          //for security reson, Best Policy for API Based Authentication

          localStorage.setItem('_spac_et', Date.now() + data.expires_in * 1000); //add with current time

          localStorage.setItem('_spac_at', data.access_token);
          localStorage.setItem('_spac_rt', data.refresh_token); // localStorage.setItem('_spac_et', data.expires_in);             

          localStorage.setItem('_spac_ug', 'spac');

          _this2.$store.commit('AuthenticationForCustomer/ACCESS_TOKEN_SET', data.access_token);

          _this2.$store.commit('AuthenticationForCustomer/REFRESH_TOKEN_SET', data.refresh_token);

          _this2.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true);

          axios.defaults.headers.common["Authorization"] = 'Bearer ' + data.access_token; //update axios header

          axios.defaults.headers.common["RefreshToken"] = data.refresh_token; //update axios header

          _this2.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
          // console.log(this.spa_spac_at);


          FireEvent.$emit('Call_HSCore_components_HSUnfold'); // initialization of unfold component                        
          // window.location = '/auth/my-dashboard';   
          // window.location = '/home';                       

          _this2.$router.push({
            path: '/auth/my-dashboard'
          })["catch"](function (err) {}); //route after successfule submit                   
          //this.$router.replace({ path : '/home' }).catch(err => {});   //route after successfule submit
          //this.$router.go('/auth/my-dashboard');


          _this2.form.reset(); //reset from after submit
          //toastr.success('Login successfule'); 

        }

        if (data.error) {
          _this2.$Progress.finish();

          _this2.display_error = true;
          _this2.error_message = data.error;
          toastr.warning(data.error); // console.log(data);

          localStorage.removeItem('_spac_at');
        }

        if (data.errors) {
          _this2.$Progress.finish();

          _this2.display_error = false;
          localStorage.removeItem('_spac_at');
        }
      })["catch"](function () {
        _this2.display_error = false;

        _this2.$Progress.fail();

        localStorage.removeItem('_spac_at');
        localStorage.removeItem('_spac_rt');
        localStorage.removeItem('_spac_et');
        localStorage.removeItem('_spac_ug'); //toastr.warning('Something is wrong!');
      });
    } //End Customer Login    

  },
  created: function created() {// FireEvent.$on('AfterLogin', () => {
    //     // alert('ok');
    //     setTimeout(() => {                
    //         this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
    //     }, 5000);//call after 10000 miliscound
    // });
  },
  mounted: function mounted() {
    // console.log(this.isAuthenticated);
    // if(this.isAuthenticated){
    //     if(this.$route.path === '/auth/login'){
    //         this.$router.push({ path : '/auth/my-dashboard' }).catch(err => {});                        
    //     }
    // }
    this.$nextTick(function () {
      FireEvent.$emit('Call_all_javascript_function_for_theme'); // call all javascript for theme
    }); //end this.$nextTick  
  }
});

/***/ }),

/***/ "./resources/js/components/Website/AuthCustomer/login.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Website/AuthCustomer/login.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=1610b07f& */ "./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AuthCustomer/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1610b07f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=1610b07f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/AuthCustomer/login.vue?vue&type=template&id=1610b07f& ***!
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
  return _c("span", [
    _c("div", { staticClass: "container mb-8 mt-0 mb-lg-0-" }, [
      _c("div", { staticClass: "row mb-8 bg-gray-1- rounded-lg pt-5 pb-5" }, [
        _c(
          "div",
          {
            staticClass:
              "col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mb-5- mt--"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "js-validate-",
                attrs: { novalidate: "novalidate-" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.CustomerLoginAPI()
                  }
                }
              },
              [
                _vm.display_error
                  ? _c("div", { staticClass: "text-danger text-center mb-3" }, [
                      _c("span", { staticClass: "small text-muted-" }, [
                        _vm._v(_vm._s(_vm.error_message))
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "div",
                    { staticClass: "js-form-message- js-focus-state-" },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "username" } },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "input-group" },
                        [
                          _vm._m(1),
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
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("username")
                            },
                            attrs: {
                              type: "email",
                              name: "username",
                              placeholder: "Email or Phone"
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
                            attrs: { form: _vm.form, field: "username" }
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
                    { staticClass: "js-form-message- js-focus-state-" },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "password" } },
                        [_vm._v("Password")]
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
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("password")
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
                            attrs: { form: _vm.form, field: "password" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-end mb-4" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "js-animation-link small link-muted",
                        attrs: {
                          to: "/auth/password-recover",
                          "data-target": "#forgotPassword",
                          "data-link-group": "idForm",
                          "data-animation-in": "slideInUp"
                        }
                      },
                      [_vm._v("Forgot Password?")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center mb-4" },
                  [
                    _c("span", { staticClass: "small text-muted" }, [
                      _vm._v("Do not have an account?")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "js-animation-link small text-dark",
                        attrs: {
                          to: "/auth/register",
                          "data-target": "#signup",
                          "data-link-group": "idForm",
                          "data-animation-in": "slideInUp"
                        }
                      },
                      [_vm._v("Signup\r\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.getUser()
                          }
                        }
                      },
                      [_vm._v("get user ")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _vm._m(5)
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
    return _c("div", { staticClass: "border-bottom border-color-1 mb-3" }, [
      _c(
        "h3",
        { staticClass: "d-inline-block section-title mb-0 pb-2 font-size-18" },
        [_vm._v("Welcome to SORBORAHO! Please login.")]
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
      _c("span", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-lock" })
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
        [_vm._v("Login")]
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
            "\r\n                          Facebook\r\n                        "
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
            "\r\n                          Google\r\n                        "
          )
        ]
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
(self["webpackChunk"] = self["webpackChunk"] || []).push([["single-select-app-one-global"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//import { mapState } from 'vuex' //for user MapState
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "multi-select-app-one",
  //props:['options','filterBy','placeHolder'], //get from parent component
  props: {
    //get all data
    options: {
      //type: Object,
      required: true
    },
    //get only by auto search 
    autoSearchOptions: {
      //type: Object,
      required: true
    },
    //get only selectedItem
    //value:{ 
    //	default: () => [],
    //},
    value: {
      //type: Number,
      required: true
    },
    //filter by data field name
    filterBy: {
      type: String,
      required: true
    },
    //value property is id
    valueProperty: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      "default": 'Click to select'
    }
  },
  data: function data() {
    return {
      optionTopHeight: '38.75px',
      //33.75 
      selectOption: '',
      itemListHeight: 38.75,
      //33.75
      selectedItem: null,
      searchText: '',
      autoQuery: '',
      selected: 0,
      visible: false,
      listVisible: false
    };
  },
  computed: {
    FormatedOptions: function FormatedOptions() {
      var _this = this;

      var fo = Object.values(this.autoSearchOptions).map(function (option) {
        var checked = _this.value === option[_this.valueProperty];
        return _objectSpread(_objectSpread({}, option), {}, {
          checked: checked
        });
      });
      return fo;
    },
    selectedOptions: function selectedOptions() {
      var _this2 = this;

      var fo = Object.values(this.options).filter(function (data) {
        return _this2.value === data.id; //options match with value
      });
      return fo;
    }
  },
  methods: {
    fixTop: function fixTop() {
      this.optionTopHeight = this.$refs.parentBox.clientHeight + 1 + 'px'; //console.log(this.optionTopHeight);
    },
    // autoSearch: _.debounce( (e) => {        		
    // 	//alert(e.target.value)
    //   	FireEvent.$emit('AutoCompleteSearchForData', e.target.value );	          
    // },200 ),
    autoSearch: function autoSearch(e) {
      if (e.target.value != '') {
        //FireEvent.$emit('AutoCompleteSearchForDataOne', e.target.value );
        this.$emit('AutoCompleteSearchForData', e.target.value);
      }
    },
    ToggleItem: function ToggleItem() {
      var _this3 = this;

      this.visible = !this.visible; //this.autoQuery = '';

      setTimeout(function () {
        _this3.$refs.autoSearchField.focus();
      }, 50); //console.log(this.optionTopHeight);
    },
    preventClose: function preventClose(e) {
      //e.stopPropagation(); //
      e.stopImmediatePropagation(); //$(this).off("blur");
    },
    removeSelectItem: function removeSelectItem(key) {
      var NewValue = '';
      this.$emit('input', NewValue); //auto syncronize with v-model array in parent component
      //toastr.warning('Removed!');
    },
    itemClicked: function itemClicked(index, id) {
      //console.log(this.autoSearchData[index]['cat_name']);
      //console.log(this.autoSearchData[index]);
      this.selected = index; //alert(id);
      //this.selectItem(index);

      this.selectItem(); //get index value atometically and pass through usign this.selected ....
    },
    selectItem: function selectItem() {
      var _this4 = this;

      var SelectedValue = this.FormatedOptions[this.selected][this.valueProperty];
      var NewValue = this.value; //spred oparetor

      var existIndex = this.value === SelectedValue;

      if (existIndex) {
        this.$emit('input', SelectedValue); //but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
        //console.log(this.value);
        //toastr.success('Added!');
      } else {
        this.$emit('input', SelectedValue); //but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
        //toastr.warning('Removed!');
      } //this.value.push(SelectedValue); //this is also work	        	
      //this.$emit('input', NewValue)


      this.$emit('getAllDataListByIds');
      setTimeout(function () {
        _this4.fixTop();
      }, 50); //this.visible = false;	        
    },
    up: function up() {
      if (this.selected === 0) {
        return;
      }

      this.selected -= 1;
      this.scrollToItem();
    },
    down: function down() {
      if (this.selected >= this.autoSearchOptions.length - 1) {
        // if (this.selected >= this.options.length - 1) {
        return;
      }

      this.selected += 1;
      this.scrollToItem();
    },
    scrollToItem: function scrollToItem() {
      this.$refs.optionList.scrollTop = this.selected * this.itemListHeight;
    }
  },
  created: function created() {},
  mounted: function mounted() {//this.fixTop();
    //console.log(this.value);
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-select-app-one.vue?vue&type=template&id=4cba2d63& */ "./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63&");
/* harmony import */ var _single_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-select-app-one.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _single_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__.render,
  _single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/GlobalComponents/single-select-app-one.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./single-select-app-one.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_select_app_one_vue_vue_type_template_id_4cba2d63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./single-select-app-one.vue?vue&type=template&id=4cba2d63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/single-select-app-one.vue?vue&type=template&id=4cba2d63& ***!
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
  return _c("div", { staticClass: "row multi-select-app-one" }, [
    _c("div", { staticClass: "col-md-12 offset-md-3-" }, [
      _c(
        "div",
        {
          ref: "parentBox",
          staticClass: "my-multiselect",
          staticStyle: { "margin-top": "0px" },
          attrs: { title: "click to open autocomplete option and also close" },
          on: { click: _vm.ToggleItem }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "selected-item-box form-control form-control-sm- form-control-navba-"
            },
            [
              _vm.selectedOptions.length === 0
                ? _c("span", [
                    _vm._v(
                      "\n\t        \t\t" +
                        _vm._s(this.placeHolder) +
                        " \n\t        "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.selectedOptions.length > 0
                ? _c(
                    "ul",
                    _vm._l(_vm.selectedOptions, function(option, key) {
                      return _c(
                        "li",
                        {
                          key: key,
                          staticClass: "selected-item",
                          staticStyle: { width: "100%" }
                        },
                        [
                          _vm._v(
                            "\n\t        \t\t" +
                              _vm._s(option[_vm.filterBy]) +
                              " \n\t        \t\t"
                          ),
                          _c("i", {
                            staticClass: "far fa-times-circle",
                            on: {
                              click: function($event) {
                                _vm.preventClose($event)
                                _vm.removeSelectItem(key)
                              }
                            }
                          })
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e()
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
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              staticClass: "popOverBox",
              style: { top: _vm.optionTopHeight },
              on: {
                click: function($event) {
                  return _vm.preventClose($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.autoQuery,
                    expression: "autoQuery"
                  }
                ],
                ref: "autoSearchField",
                staticClass: "form-control form-control-sm form-control-navbar",
                attrs: {
                  type: "text",
                  autocomplete: "off",
                  placeHolder: this.placeHolder,
                  id: "autoSearchField"
                },
                domProps: { value: _vm.autoQuery },
                on: {
                  keyup: _vm.autoSearch,
                  keydown: [
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "up", 38, $event.key, [
                          "Up",
                          "ArrowUp"
                        ])
                      ) {
                        return null
                      }
                      return _vm.up($event)
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "down", 40, $event.key, [
                          "Down",
                          "ArrowDown"
                        ])
                      ) {
                        return null
                      }
                      return _vm.down($event)
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      $event.preventDefault()
                      return _vm.selectItem($event)
                    }
                  ],
                  click: function($event) {
                    return _vm.preventClose($event)
                  },
                  blur: function($event) {
                    _vm.visible = false
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.autoQuery = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.listVisible === true,
                      expression: "listVisible === true"
                    }
                  ],
                  ref: "optionList",
                  staticClass: "optionList dropdown-menu-"
                },
                _vm._l(_vm.FormatedOptions, function(option, index) {
                  return (_vm.autoQuery === ""
                  ? (_vm.listVisible = false)
                  : (_vm.listVisible = true))
                    ? _c(
                        "li",
                        {
                          key: index,
                          class: {
                            selected: _vm.selected === index || option.checked
                          },
                          on: {
                            mousedown: function($event) {
                              _vm.itemClicked(index, option.id)
                              _vm.preventClose($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "checkbox" }, [
                            option.checked
                              ? _c("div", { staticClass: "checkbox-after" })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", [_vm._v(_vm._s(option[_vm.filterBy]))]),
                          _c("br")
                        ]
                      )
                    : _vm._e()
                }),
                0
              )
            ]
          )
        ]
      )
    ])
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
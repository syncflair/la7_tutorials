(self["webpackChunk"] = self["webpackChunk"] || []).push([["search-app-master"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
//import { mapState } from 'vuex' //for user MapState
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "search-app-one",
  props: {
    autoCompleteData: {
      //type: Object,
      required: true
    },
    SearchByOptions: {
      //type: Object,
      required: true
    },
    filterBy: {
      //type: Object,
      required: true
    },
    pagination: {
      //type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      selectOption: '',
      itemListHeight: 33.75,
      selectedItem: null,
      searchText: '',
      autoQuery: '',
      selected: 0,
      visible: false,
      listVisible: false //filterBy: 'cat_name', //define the key that want to search

    };
  },
  computed: {// ...mapState( 
    //        'CountryStore', ['autoCompleteData', 'pagination']
    //     	),
    //     	matches() {
    //     // this.$emit('change', this.query);
    //     // if (this.query == '') {
    //     //   return [];
    //     // }
    //     // return this.autoCompleteData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )
    //     //return this.autoCompleteData.filter( (item) => item[this.filterby].toLowerCase() )
    // },
  },
  methods: {
    searchIt: function searchIt() {
      var SearchKey = this.selectedItem === null ? this.searchText : this.selectedItem[this.filterBy]; //FireEvent.$emit('searching', SearchKey); 
      // if(SearchKey === ''){
      //   		FireEvent.$emit('AfterChange'); 
      //   		//this.$store.dispatch('CountryStore/fetchCountry', this.pagination.per_page);
      //  	}else{
      //     //this.$store.dispatch('CountryStore/searching', {'key1': 'SearchKey', 'key2': 'Data1'}); 
      //     //let payload = {'key1': SearchKey, 'key2': 'value2'}
      //     //console.log(this.selectedItem[this.filterBy])
      //     //this.$store.dispatch('CountryStore/searching', {key1: SearchKey, key2: this.selectOption}); 		            
      //     //FireEvent.$emit('searchData', {search_key: SearchKey, search_option: this.selectOption}); 
      //     this.$emit('searchData', {search_key: SearchKey, search_option: this.selectOption}); 
      //  	}

      this.$emit('searchData', {
        search_key: SearchKey,
        search_option: this.selectOption
      });

      if (this.selectedItem) {
        this.searchText = this.selectedItem[this.filterBy]; //push autosearch value to searchText

        this.selectedItem = null; //null after enter 
      } else {
          return; //return this.searchText;
        }
    },
    // autoSearch: _.debounce( (e) => {        		
    // 	//alert(e.target.value)	          
    //   	// FireEvent.$emit('AutoCompleteSearch', e.target.value );	          
    //   	// this.$emit('AutoCompleteSearch', e.target.value );	
    //   	this.$emit('AutoCompleteSearch', e.target.value );       
    // },200 ),
    autoSearch: function autoSearch(e) {
      this.$emit('AutoCompleteSearch', e.target.value);
    },
    toggleVisible: function toggleVisible() {
      var _this = this;

      this.visible = !this.visible; //this.$refs.autoSearchField.focus();

      this.autoQuery = '';
      setTimeout(function () {
        _this.$refs.autoSearchField.focus();
      }, 50);
    },
    itemClicked: function itemClicked(index) {
      //console.log(this.autoCompleteData[index]['cat_name']);
      this.selected = index; //alert(this.selected);

      this.selectItem();
    },
    selectItem: function selectItem() {
      if (this.autoCompleteData[this.selected] != null) {
        this.selectedItem = this.autoCompleteData[this.selected];
      }

      this.visible = false; //console.log(this.selectedItem[this.filterBy]);

      this.$refs.searchText.focus();
    },
    up: function up() {
      if (this.selected === 0) {
        return;
      }

      this.selected -= 1;
      this.scrollToItem();
    },
    down: function down() {
      if (this.selected >= this.autoCompleteData.length - 1) {
        return;
      }

      this.selected += 1;
      this.scrollToItem();
    },
    scrollToItem: function scrollToItem() {
      this.$refs.optionList.scrollTop = this.selected * this.itemListHeight;
    }
  },
  created: function created() {// FireEvent.$on('AutoCompleteSearch', (data) => {
    // 	//alert(data);
    //   if(data != ''){
    //     this.$store.dispatch('CountryStore/AutoCompleteSearch', {key1: data, key2: 'ta'}); 
    //   }
    // });
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/search-app-master.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/search-app-master.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-app-master.vue?vue&type=template&id=48f4a928& */ "./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928&");
/* harmony import */ var _search_app_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-app-master.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _search_app_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/GlobalComponents/search-app-master.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_app_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search-app-master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_app_master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_app_master_vue_vue_type_template_id_48f4a928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search-app-master.vue?vue&type=template&id=48f4a928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/GlobalComponents/search-app-master.vue?vue&type=template&id=48f4a928& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-6" }, [
      _c("div", { staticClass: "select-option" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selectOption,
                expression: "selectOption"
              }
            ],
            staticClass: "form-control form-control-sm",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.selectOption = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Search by...")]),
            _vm._v(" "),
            _vm._l(_vm.SearchByOptions, function(serchOption, index) {
              return _c(
                "option",
                { key: index, domProps: { value: serchOption.field_name } },
                [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(serchOption.show_name) +
                      "\n\t\t\t\t"
                  )
                ]
              )
            })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-6" }, [
      _c("div", { staticClass: "autoCompleteSearch " }, [
        _c("div", { staticClass: "input-group input-control-sm searchBox" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selectedItem
                  ? _vm.selectedItem[_vm.filterBy]
                  : _vm.searchText,
                expression:
                  "selectedItem ? selectedItem[filterBy] : searchText "
              }
            ],
            ref: "searchText",
            staticClass: "form-control form-control-sm form-control-navbar",
            attrs: {
              type: "text",
              placeholder: "Search...",
              "aria-label": "Search"
            },
            domProps: {
              value: _vm.selectedItem
                ? _vm.selectedItem[_vm.filterBy]
                : _vm.searchText
            },
            on: {
              mousedown: _vm.toggleVisible,
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.searchIt($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.selectedItem
                  ? _vm.selectedItem[_vm.filterBy]
                  : (_vm.searchText = $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-navbar btn-sm border",
                on: { click: _vm.searchIt }
              },
              [_c("i", { staticClass: "fas fa-search blue" })]
            )
          ])
        ]),
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
            staticClass: "popOver"
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
              attrs: { type: "text", placeholder: "Start typing..." },
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
                    return _vm.selectItem($event)
                  }
                ],
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
              _vm._l(_vm.autoCompleteData, function(item, index) {
                return (_vm.autoQuery === ""
                ? (_vm.listVisible = false)
                : (_vm.listVisible = true))
                  ? _c(
                      "li",
                      {
                        key: item[_vm.filterBy],
                        class: { selected: _vm.selected == index },
                        on: {
                          mousedown: function($event) {
                            return _vm.itemClicked(index)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\t        \t\n\t        \t\t" +
                            _vm._s(item[_vm.filterBy]) +
                            "\t \n\t        \t\t                      \n\t        "
                        )
                      ]
                    )
                  : _vm._e()
              }),
              0
            )
          ]
        )
      ])
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
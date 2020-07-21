(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-select-app-one-global"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
//import { mapState } from 'vuex' //for user MapState
/* harmony default export */ __webpack_exports__["default"] = ({
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
    value: {
      "default": function _default() {
        return [];
      }
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
      optionTopHeight: '33.75px',
      selectOption: '',
      itemListHeight: 33.75,
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
        //let fo = this.options.map( option => {
        var checked = _this.value.some(function (v) {
          return v === option[_this.valueProperty];
        });

        return _objectSpread({}, option, {
          checked: checked
        });
      });
      return fo; // this.$emit('change', this.query);
      // if (this.query == '') {
      //   return [];
      // }
      // return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )
      //return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase() )
    },
    selectedOptions: function selectedOptions() {
      var _this2 = this;

      var fo = Object.values(this.options).filter(function (data) {
        //let fo = this.options.map( option => {
        return _this2.value.includes(data.id);
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
    //   	FireEvent.$emit('AutoCompleteSearchForDepartment', e.target.value );	          
    // },200 ),
    autoSearch: function autoSearch(e) {
      if (e.target.value != '') {
        FireEvent.$emit('AutoCompleteSearchForDepartment', e.target.value);
      } // else{
      // 	//this.autoSearchOptions = [] //dont do this because it's props
      // 	//FireEvent.$emit('EmptyAutoSerchData'); //go to parent and empty the array
      // 	this.listVisible =  false;
      // }

    },
    ToggleItem: function ToggleItem() {
      var _this3 = this;

      this.visible = !this.visible; //this.visible = true;

      this.autoQuery = '';
      setTimeout(function () {
        _this3.$refs.autoSearchField.focus();
      }, 50); //document.getElementById('autoSearchField').focus();
      //this.$refs.autoSearchField.focus();
      // setTimeout(() => {
      //   this.$refs.autoSearchField.focus();
      // }, 50);
      //      this.$nextTick(() => {
      //   let editButtonRef = this.$refs.autoSearchField;
      //   editButtonRef.focus();
      // });
    },
    preventClose: function preventClose(e) {
      //e.stopPropagation(); //
      e.stopImmediatePropagation(); //$(this).off("blur");
    },
    removeSelectItem: function removeSelectItem(key) {
      var _this4 = this;

      //alert(key);
      // let SelectedValue = this.FormatedOptions[key][this.valueProperty];
      var SelectedValue = this.selectedOptions[key][this.valueProperty];

      var NewValue = _toConsumableArray(this.value); //spred oparetor


      var existIndex = this.value.findIndex(function (v) {
        return v === SelectedValue;
      }); //this.value.splice(key, 1);

      NewValue.splice(existIndex, 1);
      this.$emit('input', NewValue); //auto syncronize with v-model array in parent component

      setTimeout(function () {
        _this4.fixTop();
      }, 50); //toastr.warning('Removed!');
    },
    itemClicked: function itemClicked(index) {
      //console.log(this.autoSearchData[index]['cat_name']);
      //console.log(this.autoSearchData[index]);
      this.selected = index; //alert(this.selected);
      //this.selectItem(index);

      this.selectItem(); //get index value atometically and pass through usign this.selected ....
    },
    selectItem: function selectItem() {
      var _this5 = this;

      //console.log(this.FormatedOptions[index]);
      //this.selectedItem = this.autoSearchData[this.selected];
      var SelectedValue = this.FormatedOptions[this.selected][this.valueProperty];

      var NewValue = _toConsumableArray(this.value); //spred oparetor


      var existIndex = this.value.findIndex(function (v) {
        return v === SelectedValue;
      });

      if (existIndex === -1) {
        NewValue.push(SelectedValue); //toastr.success('Added!');
      } else {
        NewValue.splice(existIndex, 1); //toastr.warning('Removed!');
      } //this.value.push(SelectedValue); //this is also work	        	


      this.$emit('input', NewValue); //but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword

      setTimeout(function () {
        _this5.fixTop();
      }, 50); //this.visible = false;	        
    },
    // selectItem(index) {
    // 	//console.log(this.FormatedOptions[index]);
    // 	//this.selectedItem = this.autoSearchData[this.selected];
    // 	let SelectedValue = this.FormatedOptions[index][this.valueProperty];
    // 	let NewValue = [...this.value]; //spred oparetor
    // 	let existIndex = this.value.findIndex(v => v === SelectedValue);
    // 	if(existIndex === -1){
    // 		NewValue.push(SelectedValue);
    // 		toastr.success('Added!');
    // 	}
    // 	else{
    // 		NewValue.splice(existIndex, 1);
    // 		toastr.warning('Removed!');
    // 	}
    // 	//this.value.push(SelectedValue); //this is also work	        	
    // 	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
    // 	setTimeout(() => {   
    // 		this.fixTop();
    //  }, 50);
    //  //this.visible = false;	        
    // },
    //this is for selected option
    // onChangeSelect(event){
    // 	let index = event.target.selectedIndex;
    // 	let id = event.target.value;
    // 	//console.log(event.target.selectedIndex);
    // 	let SelectedValue = this.FormatedOptions[index][this.valueProperty];
    // 	let NewValue = [...this.value]; //spred oparetor
    // 	let existIndex = this.value.findIndex(v => v === SelectedValue);
    // 	if(existIndex === -1){
    // 		NewValue.push(SelectedValue);
    // 	}
    // 	else{
    // 		//NewValue.splice(existIndex, 1);
    // 		toastr.warning('Already Selected this one!');
    // 	}
    // 	//this.value.push(SelectedValue); //this is also work	        	
    // 	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
    // 	setTimeout(() => {   
    // 		this.fixTop();
    //  }, 50);
    // },
    up: function up() {
      if (this.selected === 0) {
        return;
      }

      this.selected -= 1;
      this.scrollToItem();
    },
    down: function down() {
      if (this.selected >= this.options.length - 1) {
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
  mounted: function mounted() {
    this.fixTop();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
          on: {
            click: _vm.ToggleItem,
            blur: function($event) {
              _vm.visible = false
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "selected-item-box form-control- form-control-sm- form-control-navba-"
            },
            [
              _c(
                "ul",
                [
                  _vm.selectedOptions.length === 0
                    ? _c("span", [_vm._v(" " + _vm._s(this.placeHolder) + " ")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.selectedOptions, function(option, key) {
                    return _c(
                      "li",
                      { key: key, staticClass: "selected-item" },
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
                  })
                ],
                2
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
                            click: function($event) {
                              _vm.itemClicked(index)
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

/***/ "./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-select-app-one.vue?vue&type=template&id=42f1dfb8& */ "./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8&");
/* harmony import */ var _multi_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-select-app-one.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _multi_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./multi-select-app-one.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_select_app_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./multi-select-app-one.vue?vue&type=template&id=42f1dfb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/multi-select-app-one.vue?vue&type=template&id=42f1dfb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_select_app_one_vue_vue_type_template_id_42f1dfb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
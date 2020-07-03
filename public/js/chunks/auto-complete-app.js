(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auto-complete-app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "auto-complete-app",
  //props:['options','filterBy','placeholder'], //get from parent component
  props: {
    options: {
      //type: Object,
      required: true
    },
    // 	  value:{
    // 	default: () => [],
    // },
    filterBy: {
      type: String,
      required: true
    } // valueProperty:{
    // 	type: String,
    //   required: true
    // },
    // placeholder: {
    // 	type: String,
    //   default: 'Click to select'
    // },

  },
  data: function data() {
    return {
      searchText: '',
      visibleList: false,
      //   	options:[
      // 	'Electronic','Lifestyle','Home Applience','Vehicle','Agriculture','TV','Refregerator','AC'
      // ],
      filterOptions: [],
      selected: 0,
      itemListHeight: 33.75
    };
  },
  mounted: function mounted() {},
  computed: {// ...mapState( 
    //        'CategoryStore', ['autoSearchData']
    //     	),
  },
  // watch:{
  // 	searchText(){ //v-model searchText
  // 		this.filterOption();
  // 	}
  // },
  methods: {
    autoSearch: function autoSearch() {
      FireEvent.$emit('AutoCompleteSearch', this.searchText);
    },
    // autoSearch: _.debounce( (e) => {        		
    // 	//alert(e.target.value) //console.log(e.target.value);
    //   	FireEvent.$emit('AutoCompleteSearch', e.target.value );
    // },200 ),
    filterOption: function filterOption() {
      var _this = this;

      if (this.searchText.length === 0) {
        this.filterOptions = [];
      } else {
        this.filterOptions = Object.values(this.options).filter( //this.filterOptions = this.Options.filter( //this is for normal array
        function (item) {
          //return item[this.filterBy].toLowerCase().startsWith(this.searchText.toLowerCase());
          return item[_this.filterBy].toLowerCase().includes(_this.searchText.toLowerCase());
        }); //return fo;
        // return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )
      }
    },
    searching: function searching() {
      alert(this.searchText);
    },
    setSearchedText: function setSearchedText(text) {
      this.searchText = text[this.filterBy]; //set text to input field  when click on list text

      this.visibleList = false;
      this.filterOptions = [];
      this.$refs.searchText.focus();
    },
    preventClose: function preventClose(e) {
      //e.stopPropagation(); //
      e.stopImmediatePropagation(); //$(this).off("blur");
    } // up(){
    // 	if(this.selected === 0){
    // 		return;
    // 	}
    // 	this.selected -= 1;
    // 	this.scrollToItem();
    // },
    // down(){
    // 	 if (this.selected >= this.options.length - 1) {
    //    return;
    //  }
    //  this.selected += 1;
    //  this.scrollToItem();
    // },
    // scrollToItem(){
    // 	this.$refs.optionList.scrollTop = this.selected * this.itemListHeight;
    // },

  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.my-multiselect{\n\t\tbackground: #ffffff;\n\t\tposition: relative;\n\t\tpadding: 6px 6px; \n\t\tmargin:8px 0;\n\t\t//display: inline-block;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tborder: 1px solid #ced4da;\n\t    border-radius: 0.2rem;\n\t    box-sizing: border-box;\n\t    //min-height: 33px;\n\t    //max-width: 222px;\t    \n\t    //line-height: 1.5;\n}\n.my-multiselect:focus{\n\t\toutline: none;\n}\n.selected-item-box{\n\t\tbackground: #ffffff;\n\t\tmin-height: 40px;\n\t\tdisplay: inline-table;\n}\n.selected-item-box > ul{\n\t\tmargin-bottom: 0px !important; \n\t\tpadding-left: 0px !important;\n}\n.selected-item{\n\t\tborder: 1px solid #ced4da;\n\t    padding: 4px;\n\t    border-radius: 4px;\n\t    margin: 2px 3px 2px 3px;\n    \tlist-style: none;\n\t\tfloat: left;\n}\n.selected-item > i{\n\t\tcolor:red;\n\t\tcursor: pointer;\n\t\tpadding-left: 5px;\n}\n.popOverBox{\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\tleft:0;\n\t\tright: 0;\n\t\tz-index:3;\n\t\tbackground: #ffffff;\n\t\tborder: 1px solid #dee2e6;\n\t\tdisplay: flex;\n\t\t//display: inline-table;\n\t\t//flex-direction: column;\n\t\ttop:47px;\n}\n.selected{\n\t\tbackground: #fd7e14;\n\t\tcolor: #fff;\n\t\tborder-bottom: 1px solid #fff;\n}\n.optionList{\n\t\tmin-height: 1px;\n\t\tmax-height: 250px;\n\t\toverflow-y: scroll;\n\t\tpadding: 0px;\n}\n.optionList > li{\n\t\tlist-style: none;\n\t\tpadding: 3px 10px;\n}\n.optionList > li > div{ float: left;\n}\n.optionList > li:hover{\n\t\tbackground: #dee2e6;\n\t\tcursor: pointer;\n}\n.optionList > .selected{\n\t\tbackground: #fd7e14;\n\t\tcolor: #fff;\n}\n.optionList > .selected:hover{\n\t\tbackground: #fd7e14;\n\t\tcolor: #fff;\n\t\tcursor: pointer;\n}\n.checkbox{\n\t\twidth: 22px; height: 22px;border: 1px solid #969696; margin-right: 7px; position: relative;\n\t\t//background: #000;\n}\n.checkbox-after{\n\t\twidth: 11px; height: 6px;\n\t\tborder-left: 3px solid rgb(255,255, 255);\n\t\tborder-bottom: 2px solid rgb(255, 255, 255);\n\t\tcontent: \"\";\n\t\tz-index: 9999;position: absolute; transform: rotate(-45deg);\n\t\tleft:3px;\n\t\ttop: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-complete-app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6 offset-md-3" }, [
      _c("h5", [_vm._v("Auto Search")]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "my-multiselect-",
          staticStyle: { position: "relative" }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchText,
                expression: "searchText"
              }
            ],
            ref: "searchText",
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "",
              autocomplete: "off",
              tabindex: "1"
            },
            domProps: { value: _vm.searchText },
            on: {
              keyup: [
                _vm.autoSearch,
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.searching($event)
                }
              ],
              focus: function($event) {
                _vm.visibleList = true
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchText = $event.target.value
                },
                _vm.filterOption
              ]
            }
          }),
          _vm._v(" "),
          _vm.filterOptions && _vm.visibleList
            ? _c("div", { staticClass: "popOverBox-" }, [
                _c(
                  "ul",
                  { ref: "optionList", staticClass: "optionList" },
                  _vm._l(_vm.filterOptions, function(option, index) {
                    return _c(
                      "li",
                      {
                        class: { selected: _vm.selected === index },
                        attrs: { tabindex: "2" },
                        on: {
                          click: function($event) {
                            return _vm.setSearchedText(option)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\n\t  \t\t\t\t\t" +
                            _vm._s(option[_vm.filterBy]) +
                            "\n\t  \t\t\t\t\t"
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-complete-app.vue?vue&type=template&id=5bdde340& */ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340&");
/* harmony import */ var _auto_complete_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-complete-app.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-complete-app.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _auto_complete_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__["render"],
  _auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/GlobalComponents/auto-complete-app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-complete-app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-complete-app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-complete-app.vue?vue&type=template&id=5bdde340& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/GlobalComponents/auto-complete-app.vue?vue&type=template&id=5bdde340&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_complete_app_vue_vue_type_template_id_5bdde340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["formBox"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "formBox",
  data: function data() {
    return {
      editMode: false,
      //Use this for add edit using the same form
      // Create a new form instance
      form: new Form({
        id: '',
        cat_name: '' //remember: false

      })
    };
  },
  methods: {
    // Submit the form via a POST request
    storeCategory: function storeCategory() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/spa/MultiComponent').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          toastr.success(data.success);

          _this.$Progress.finish();

          _this.form.reset(); //reset from after submit
          //this.form.clear();
          //this.$refs.cat_img.value = ''; //clear file input tag  
          //this.ShowOnChangeImage = null;
          //this.$refs.cat_name.focus(); //ret focus to first input filed. ref="" tag must be use

        }

        if (data.errors) {
          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    editCategory: function editCategory(category) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(category); //category get from table data

      this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
    },
    clearEditCategory: function clearEditCategory() {
      this.editMode = false;
      this.form.reset(); //reset from after submit     
    },
    updateCategory: function updateCategory() {
      var _this2 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/MultiComponent/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

          _this2.$Progress.finish();

          toastr.success(data.success);

          _this2.form.reset(); //reset from after submit                


          _this2.editMode = false;

          _this2.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use

        }

        if (data.errors) {
          s;
          toastr.danger(data.errors);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      }); //this.form.reset();  //reset from after submit
      //this.form.clear();
      //this.editMode = false;
    }
  },
  created: function created() {
    var _this3 = this;

    //this event come from searchBox.vue component
    FireEvent.$on('fillEditCategory', function (data) {
      //alert(data.cat_name);
      //this.form.fill(data);   //this is also work
      _this3.editCategory(data);
    });
  },
  mounted: function mounted() {//console.log('Component mounted.')
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/formBox.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/formBox.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formBox.vue?vue&type=template&id=d112d432& */ "./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432&");
/* harmony import */ var _formBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formBox.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _formBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__.render,
  _formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MultiComponent/formBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formBox_vue_vue_type_template_id_d112d432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formBox.vue?vue&type=template&id=d112d432& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/MultiComponent/formBox.vue?vue&type=template&id=d112d432& ***!
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.editMode,
            expression: "!editMode"
          }
        ],
        staticClass: "card-header"
      },
      [_c("h4", [_vm._v("Add Category")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.editMode,
            expression: "editMode"
          }
        ],
        staticClass: "card-header"
      },
      [_c("h4", [_vm._v("Update Category")])]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-body card-body-custome" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.editMode ? _vm.updateCategory() : _vm.storeCategory()
            }
          }
        },
        [
          _c("div", { staticClass: "card--" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Name *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.cat_name,
                      expression: "form.cat_name"
                    }
                  ],
                  ref: "cat_name",
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.form.errors.has("cat_name") },
                  attrs: {
                    type: "text",
                    name: "cat_name",
                    placeholder: "Enter name"
                  },
                  domProps: { value: _vm.form.cat_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "cat_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "cat_name" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mt-2" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editMode,
                      expression: "editMode"
                    }
                  ],
                  staticClass: "btn btn-primary btn-flat btn-sm",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.clearEditCategory()
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editMode,
                      expression: "editMode"
                    }
                  ],
                  staticClass: "btn btn-primary btn-flat btn-sm",
                  attrs: { type: "submit" }
                },
                [_vm._v("Update")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.editMode,
                      expression: "!editMode"
                    }
                  ],
                  staticClass: "btn btn-primary btn-flat btn-sm",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
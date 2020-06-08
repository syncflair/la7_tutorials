(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VuexComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vxDataList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxDataList.vue */ "./resources/js/components/Admin/VuexComponent/vxDataList.vue");
/* harmony import */ var _vxViewCategory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vxViewCategory.vue */ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue");
/* harmony import */ var _vxChildCategory_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vxChildCategory.vue */ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue");
/* harmony import */ var _vxSearchBox_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vxSearchBox.vue */ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue");
/* harmony import */ var _vxFormBox_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vxFormBox.vue */ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //for user MapGatters
//import { mapState } from 'vuex' //for user MapState





 //import vxPerPage from './vxPerPage.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  //name: "vuexComponent",
  computed: {
    getVuexTest: function getVuexTest() {
      return this.$store.getters.getVuexTest;
    } // ...mapState( 
    //           'CategoryStore', ['pagination']
    //       	)

  },
  components: {
    vxDataList: _vxDataList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vxViewCategory: _vxViewCategory_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    vxChildCategory: _vxChildCategory_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    vxSearchBox: _vxSearchBox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    vxFormBox: _vxFormBox_vue__WEBPACK_IMPORTED_MODULE_5__["default"] //vxPerPage,

  },
  methods: {},
  mounted: function mounted() {//console.log('Component mounted.')
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CategoryStore', ['categoryList'])),
  created: function created() {}
}); //end export default

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 //for user MapGatters

 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "vxDataList",
  data: function data() {
    return {// perPage: 0,        
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CategoryStore', ['vuexTest', 'categories', 'pagination'])),
  methods: {
    fetchData: function fetchData() {
      this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page); //console.log(this.pagination.total);
    },
    listCategory: function listCategory(id) {
      this.$Progress.start();
      this.$store.dispatch('CategoryStore/listCategory', id);
      this.$Progress.finish();
    },
    viewCategory: function viewCategory(data) {
      this.$Progress.start();
      this.$store.dispatch('CategoryStore/viewCategory', data);
      this.$Progress.finish();
    },
    editCategory: function editCategory(data) {
      //alert(data.id);
      FireEvent.$emit('fillEditCategory', data);
    },
    deleteCategory: function deleteCategory(id) {
      var _this = this;

      Swal.fire({
        title: 'Are you sure to Delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/spa/MultiComponent/' + id).then(function (_ref) {
            var data = _ref.data;

            if (data.success) {
              _this.$store.dispatch('CategoryStore/fetchCategory', _this.pagination.per_page);

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            toastr.warning('Something is wrong!');
          });
        } else {
          toastr.info('Your data is safe!');
        }
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('CategoryStore/fetchCategory'); //call this function at first loading from Action with Modules namespace       

    FireEvent.$on('changPerPage', function (data) {
      //alert(data) 
      _this2.$store.dispatch('CategoryStore/fetchCategory', data); // this.$store.dispatch('CategoryStore/fetchCategoryPerPage', data );

    });
  },
  mounted: function mounted() {//console.log('Component mounted.')      
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "vxFormBox",
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CategoryStore', ['pagination'])),
  methods: {
    // Submit the form via a POST request
    storeCategory: function storeCategory() {
      var _this = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/spa/MultiComponent').then(function (_ref) {
        var data = _ref.data;

        if (data.success) {
          _this.$store.dispatch('CategoryStore/fetchCategory', _this.pagination.per_page);

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
          _this2.$store.dispatch('CategoryStore/fetchCategory', _this2.pagination.per_page); //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update


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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "vxSearchBox",
  data: function data() {
    return {
      searchText: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CategoryStore', ['pagination'])),
  methods: {
    searchit: _.debounce(function () {
      FireEvent.$emit('searching'); //this.$store.dispatch('CategoryStore/searching', this.searchText); 
    }, 500) // searchit(){
    //   this.$store.dispatch('CategoryStore/searching', this.searchText); 
    //  //FireEvent.$emit('searching', this.searchText);
    //  //alert(this.searchText)
    // }

  },
  created: function created() {
    var _this = this;

    FireEvent.$on('searching', function () {
      if (_this.searchText === '') {
        _this.$store.dispatch('CategoryStore/fetchCategory', _this.pagination.per_page);
      } else {
        _this.$store.dispatch('CategoryStore/searching', _this.searchText);
      }
    });
  },
  mounted: function mounted() {//console.log('Component mounted.')
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 //for user MapState

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "vxViewCategory",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('CategoryStore', ['viewCategoryData']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "card vue-card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "row pb-2" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _vm._v("\r\n\t\t\t\t\t\tCategory List\r\n\t\t\t\t\t\t")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 text-left" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [_c("vxSearchBox")], 1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [_c("vxDataList")], 1)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [_c("vxFormBox")], 1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-0" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [_c("vxViewCategory")],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-0" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [_c("vxChildCategory")],
                  1
                )
              ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-left" }, [
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Dashboard ")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Component Communication with VueX")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-right" }, [
          _vm._v("Navigation")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _vm._v(" Display Child Category here")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _vm.categoryList.length === 0
        ? _c("div", [_c("span", [_vm._v(" -- No Child Category Found")])])
        : _c("div", [
            _c(
              "ul",
              _vm._l(_vm.categoryList, function(list) {
                return _c("li", [
                  _vm._v(_vm._s(list.id) + " - " + _vm._s(list.cat_name) + " ")
                ])
              }),
              0
            )
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("table", { staticClass: "table table-striped table-sm" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.categories.data, function(category, index) {
            return _c("tr", { key: category.id }, [
              _c("td", [_vm._v(" " + _vm._s(category.id) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(category.cat_name))]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    attrs: { title: "Single View" },
                    on: {
                      click: function($event) {
                        return _vm.viewCategory(category)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-eye primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    attrs: { title: "List View" },
                    on: {
                      click: function($event) {
                        return _vm.listCategory(category.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-list primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn  btn-primary- btn-flat btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.editCategory(category)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-edit primary " })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-block- btn-danger- btn-flat btn-sm",
                    attrs: { id: "delete" },
                    on: {
                      click: function($event) {
                        return _vm.deleteCategory(category.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "far fa-trash-alt red" })]
                )
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _vm.pagination.last_page >= 1
          ? _c("pagination-app", {
              attrs: { pagination: _vm.pagination, offset: 5 },
              on: {
                paginate: function($event) {
                  return _vm.fetchData()
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._m(2)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8 col-sm-6" }, [
          _vm._v("Category List")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-6 text-right" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "25%" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "16%", "text-align": "right" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [_c("span")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6& ***!
  \********************************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _c(
      "div",
      {
        staticClass: "input-group input-control-sm search-box",
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
          staticClass: "form-control form-control-sm form-control-navbar",
          attrs: {
            type: "text",
            name: "",
            placeholder: "Search...",
            "aria-label": "Search"
          },
          domProps: { value: _vm.searchText },
          on: {
            keyup: _vm.searchit,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.searchText = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-navbar btn-sm border" }, [
        _c("i", { staticClass: "fas fa-search blue" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [_vm._v(" Category Details")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _vm.viewCategoryData
        ? _c("div", [
            _c("span", [
              _vm._v(" ID: " + _vm._s(_vm.viewCategoryData.id) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", [
              _vm._v(" Name: " + _vm._s(_vm.viewCategoryData.cat_name) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", [
              _vm._v(" Sulg: " + _vm._s(_vm.viewCategoryData.cat_slug) + " ")
            ]),
            _c("br"),
            _vm._v(" "),
            _vm.viewCategoryData.is_enabled === 1
              ? _c("span", [_vm._v("Status: Active ")])
              : _vm._e(),
            _vm._v(" "),
            _vm.viewCategoryData.is_enabled === 0
              ? _c("span", [_vm._v("Status: Unactive ")])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.viewCategoryData ? _c("span", [_vm._v(" No Data ")]) : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vuexComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vuexComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vuexComponent.vue?vue&type=template&id=3ac3f88c& */ "./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c&");
/* harmony import */ var _vuexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vuexComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vuexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vuexComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vuexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vuexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vuexComponent.vue?vue&type=template&id=3ac3f88c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vuexComponent.vue?vue&type=template&id=3ac3f88c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vuexComponent_vue_vue_type_template_id_3ac3f88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxChildCategory.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxChildCategory.vue?vue&type=template&id=3576c4f9& */ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9&");
/* harmony import */ var _vxChildCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxChildCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vxChildCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vxChildCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxChildCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxChildCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxChildCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxChildCategory.vue?vue&type=template&id=3576c4f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxChildCategory.vue?vue&type=template&id=3576c4f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxChildCategory_vue_vue_type_template_id_3576c4f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxDataList.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxDataList.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxDataList.vue?vue&type=template&id=612ce70e& */ "./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e&");
/* harmony import */ var _vxDataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxDataList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vxDataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vxDataList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxDataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxDataList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxDataList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxDataList.vue?vue&type=template&id=612ce70e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxDataList.vue?vue&type=template&id=612ce70e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxDataList_vue_vue_type_template_id_612ce70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxFormBox.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxFormBox.vue?vue&type=template&id=2323e7e6& */ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6&");
/* harmony import */ var _vxFormBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxFormBox.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vxFormBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vxFormBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxFormBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxFormBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxFormBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxFormBox.vue?vue&type=template&id=2323e7e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxFormBox.vue?vue&type=template&id=2323e7e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxFormBox_vue_vue_type_template_id_2323e7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxSearchBox.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxSearchBox.vue?vue&type=template&id=27c088c2& */ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2&");
/* harmony import */ var _vxSearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxSearchBox.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vxSearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vxSearchBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxSearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxSearchBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxSearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxSearchBox.vue?vue&type=template&id=27c088c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxSearchBox.vue?vue&type=template&id=27c088c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxSearchBox_vue_vue_type_template_id_27c088c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxViewCategory.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxViewCategory.vue?vue&type=template&id=c0cd8c58& */ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58&");
/* harmony import */ var _vxViewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vxViewCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vxViewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VuexComponent/vxViewCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxViewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxViewCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vxViewCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vxViewCategory.vue?vue&type=template&id=c0cd8c58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/VuexComponent/vxViewCategory.vue?vue&type=template&id=c0cd8c58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vxViewCategory_vue_vue_type_template_id_c0cd8c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
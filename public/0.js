(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue */ "./resources/js/components/Admin/Category/CategoryList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //const axios = require('axios');
//import axios from 'axios'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Category",
  data: function data() {
    return {
      searchText: '',
      //v-model="search" in input tag
      editMode: false,
      //Use this for add edit using the same form
      parentCategories: '',
      // 
      countCategory: '',
      //user for count
      categories: {},
      //this is an object
      // Create a new form instance
      form: new Form({
        id: '',
        parent_id: '',
        cat_name: '',
        cat_slug: '',
        is_enabled: '' //remember: false

      })
    };
  },
  methods: {
    //Searchit function using lodash. call searchit function every 1 secound when call the function
    searchit: _.debounce(function () {
      FireEvent.$emit('searching');
    }, 500),
    // searchit(){
    //   FireEvent.$emit('searching');
    // },
    //function for pagination // Our method to GET results from a Laravel endpoint
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/spa/category?page=' + page).then(function (response) {
        _this.categories = response.data;
      });
    },
    parentCategory: function parentCategory() {
      var _this2 = this;

      axios.get('/spa/parent-category').then(function (response) {
        _this2.parentCategories = response.data;
      });
    },
    fetchCategory: function fetchCategory() {
      var _this3 = this;

      this.$Progress.start(); //using progress-bar package
      //axios.get('http://127.0.0.1:8000/spa/category')

      this.form.get('/spa/category').then(function (response) {
        _this3.categories = response.data; // is an object... use when pagination
        //this.categories = response.data.data; //is an object... default 

        _this3.$Progress.finish();
      })["catch"](function (errors) {
        //console.log(errors); 
        _this3.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    countTotalCategory: function countTotalCategory() {
      var _this4 = this;

      axios.get('/spa/count-category').then(function (response) {
        _this4.countCategory = response.data; //for total count show  
      })["catch"](function (errors) {
        toastr.warning('Something is wrong!');
      });
    },
    // Submit the form via a POST request
    storeCategory: function storeCategory() {
      var _this5 = this;

      this.$Progress.start(); //using progress-bar package

      this.form.post('/spa/category').then(function (_ref) {
        var data = _ref.data;
        FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

        toastr.success(data.success);

        _this5.$Progress.finish();

        _this5.form.reset(); //reset from after submit


        _this5.form.clear();

        _this5.$refs.cat_name.focus(); //ret focus to first input filed. ref="" tag must be use

      })["catch"](function () {
        _this5.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    editCategory: function editCategory(category) {
      this.editMode = true;
      this.form.reset();
      this.form.fill(category); //category get from table data
    },
    clearEditCategory: function clearEditCategory() {
      this.editMode = false;
      this.form.reset(); //reset from after submit

      this.form.clear();
    },
    updateCategory: function updateCategory() {
      var _this6 = this;

      //console.log('Update is working!'); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/category/' + this.form.id).then(function (_ref2) {
        var data = _ref2.data;
        FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update

        _this6.$Progress.finish();

        toastr.success(data.success);

        _this6.form.reset(); //reset from after submit


        _this6.form.clear();

        _this6.editMode = false;

        _this6.$refs.cat_name.focus(); //ret focus to first input filed. ref="" tag must be use

      })["catch"](function () {
        _this6.$Progress.fail();

        toastr.warning('Something is wrong!');
      }); //this.form.reset();  //reset from after submit
      //this.form.clear();
      //this.editMode = false;
    },
    deleteCategory: function deleteCategory(id) {
      var _this7 = this;

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
          _this7.form["delete"]('/spa/category/' + id).then(function (_ref3) {
            var data = _ref3.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

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
    },
    //end Swal
    unactiveCat: function unactiveCat(id) {
      // alert(id);
      this.form.get('/spa/unactive-category/' + id).then(function (_ref4) {
        var data = _ref4.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //this will reload data after create or update               

          toastr.warning(data.success);
        }
      })["catch"](function () {
        toastr.warning('Something is wrong!');
      });
    },
    activeCat: function activeCat(id) {
      this.form.get('/spa/active-category/' + id).then(function (_ref5) {
        var data = _ref5.data;

        if (data.success) {
          FireEvent.$emit('AfterChange'); //this will reload data after create or update               

          toastr.success(data.success);
        }
      })["catch"](function () {
        toastr.warning('Something is wrong!');
      });
    }
  },

  /*--/method--*/
  // mounted() {
  //     //console.log('Component mounted.')
  // },
  created: function created() {
    var _this8 = this;

    this.fetchCategory();
    /*fetch category when Load page and also call from other FireEvent*/

    this.countTotalCategory();
    /*Count total category When Load page*/

    this.parentCategory(); //get parent category only
    //Call Searching FireEvent

    FireEvent.$on('searching', function () {
      var query = _this8.searchText;
      axios.get('/spa/search-category?q=' + query) //this.form.get('/spa/search-category?q='+query)
      .then(function (response) {
        _this8.categories = response.data; // is an object... use when pagination
      })["catch"](function () {});
    });
    /*Call FireEvent $on event when create or update data named as AfterChange*/

    FireEvent.$on('AfterChange', function () {
      _this8.fetchCategory();

      _this8.countTotalCategory();
      /*Count total category When Load page*/


      _this8.parentCategory(); //get parent category only

    });
    /*Load every 10 seconds (ES 6 version) but having performence issue */
    //setInterval( () => this.fetchCategory(), 10000);  
  },
  components: {
    CategoryList: _CategoryList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
/*--/export default--*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-md-8 col-sm-7" }, [
              _c("div", { staticClass: "card vue-card-item" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-8 col-sm-6" }, [
                      _vm._v("Category List")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 col-sm-6 text-right" }, [
                      _c(
                        "div",
                        { staticClass: "input-group input-control-sm" },
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
                            staticClass:
                              "form-control form-control-sm form-control-navbar",
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
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-navbar btn-sm border",
                                on: { click: _vm.searchit }
                              },
                              [_c("i", { staticClass: "fas fa-search blue" })]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("table", { staticClass: "table table-striped table-sm" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.categories.data, function(category) {
                        return _c("tr", { key: category.id }, [
                          _c("td", [_vm._v(_vm._s(category.id))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("p", { attrs: { title: category.cat_slug } }, [
                              _vm._v(
                                _vm._s(_vm._f("upText")(category.cat_name))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(category.cat_slug))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: category.is_enabled == 1,
                                  expression: "category.is_enabled == 1"
                                }
                              ],
                              staticClass: "green"
                            },
                            [_vm._v(" Active ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: category.is_enabled == 0,
                                  expression: "category.is_enabled == 0"
                                }
                              ],
                              staticClass: "red text-bold"
                            },
                            [_vm._v(" Inactive ")]
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("formatDate")(category.updated_at))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: category.is_enabled == 1,
                                    expression: "category.is_enabled == 1"
                                  }
                                ],
                                staticClass: "btn btn-flat btn-sm",
                                attrs: { title: "Click to Unactive" },
                                on: {
                                  click: function($event) {
                                    return _vm.unactiveCat(category.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-thumbs-down red"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: category.is_enabled == 0,
                                    expression: "category.is_enabled == 0"
                                  }
                                ],
                                staticClass: "btn btn-flat btn-sm",
                                attrs: { title: "Click to Active" },
                                on: {
                                  click: function($event) {
                                    return _vm.activeCat(category.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-thumbs-up green"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn  btn-primary- btn-flat btn-sm",
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
                                staticClass:
                                  "btn btn-block- btn-danger- btn-flat btn-sm",
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
                _c("div", { staticClass: "card-footer" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("span", [
                        _vm._v(" Total: " + _vm._s(_vm.countCategory))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "pagination",
                          {
                            attrs: {
                              data: _vm.categories,
                              align: "right",
                              size: "small"
                            },
                            on: { "pagination-change-page": _vm.getResults }
                          },
                          [
                            _c(
                              "span",
                              { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                              [_vm._v("< Previous")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { attrs: { slot: "next-nav" }, slot: "next-nav" },
                              [_vm._v("Next >")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-sm-5 text-right-" }, [
              _c("div", { staticClass: "card vue-card-item" }, [
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
                          _vm.editMode
                            ? _vm.updateCategory()
                            : _vm.storeCategory()
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "card--" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { attrs: { for: "exampleInputEmail1" } },
                              [_vm._v("Name")]
                            ),
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
                              class: {
                                "is-invalid": _vm.form.errors.has("cat_name")
                              },
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
                                  _vm.$set(
                                    _vm.form,
                                    "cat_name",
                                    $event.target.value
                                  )
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
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Select Parent")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.parent_id,
                                  expression: "form.parent_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "parent_id" },
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
                                    "parent_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" Select Parent ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.parentCategories, function(parentCat) {
                                return _c(
                                  "option",
                                  {
                                    key: parentCat.id,
                                    domProps: { value: parentCat.id }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                " +
                                        _vm._s(parentCat.cat_name) +
                                        "\r\n                              "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-check" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.is_enabled,
                                expression: "form.is_enabled"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              name: "is_enabled",
                              id: "checkbox",
                              value: "1"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.form.is_enabled)
                                ? _vm._i(_vm.form.is_enabled, "1") > -1
                                : _vm.form.is_enabled
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.is_enabled,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "1",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "is_enabled",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "is_enabled",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "is_enabled", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "checkbox" }
                            },
                            [_vm._v("Is Active")]
                          )
                        ]),
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
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", [_vm._v("Category")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-right" }, [
          _vm._v("Navigation")
        ])
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
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "25px" } }, [_vm._v("Parent")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("Updated At")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%", "text-align": "right" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
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


/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryList.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryList.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=template&id=d491285c& */ "./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Category/CategoryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=template&id=d491285c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/CategoryList.vue?vue&type=template&id=d491285c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_d491285c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=44399ff4& */ "./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Category/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=44399ff4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Category/category.vue?vue&type=template&id=44399ff4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_44399ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
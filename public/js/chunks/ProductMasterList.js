(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProductMasterList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductMasterList",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      expendView: false,
      //checkbox selecting data
      selectAllCheckbox: false,
      selectedCheckbox: [],
      // use for sortable
      currentSort: 'sys_pro_name',
      currentSortDir: 'asc',
      //User for search
      filterBy: 'sys_pro_name',
      // this is use for which field use for auto search, default
      SearchByOptions: [{
        'field_name': 'sys_pro_name',
        'show_name': 'Name'
      }, {
        'field_name': 'pro_price',
        'show_name': 'price'
      }, {
        'field_name': 'brand_name',
        'show_name': 'Brand'
      }, {
        'field_name': 'cat_name',
        'show_name': 'Category'
      }, {
        'field_name': 'status_name',
        'show_name': 'Product Status'
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('ProductMasterStore', ['products', 'pagination', 'autoCompleteData']), {
    // use for sortable
    sortedProducts: function sortedProducts() {
      var _this = this;

      var fo = Object.values(this.products).sort(function (a, b) {
        var modifier = 1;
        if (_this.currentSortDir === 'desc') modifier = -1;
        if (a[_this.currentSort] < b[_this.currentSort]) return -1 * modifier;
        if (a[_this.currentSort] > b[_this.currentSort]) return 1 * modifier;
        return 0;
      });
      return fo;
    }
  }),
  methods: {
    //checkbox select
    selectCheckbox: function selectCheckbox() {
      this.selectedCheckbox = [];

      if (!this.selectAllCheckbox) {
        for (var i in this.products) {
          this.selectedCheckbox.push(this.products[i].id); //all id push into selectedCheckbox array
        }
      }
    },
    // use for sortable
    sort: function sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      this.currentSort = s;
    },
    ChangeNotify: function ChangeNotify(id, event) {
      var _this2 = this;

      this.$Progress.start();
      axios.post('/spa/product-change-notify/' + id + '/' + event.target.checked).then(function (_ref) {
        var data = _ref.data;

        //console.log(data);
        if (data.success) {
          FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update             

          _this2.$Progress.finish();

          toastr.success(data.success);
        }
      })["catch"](function () {
        _this2.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    inactiveProduct: function inactiveProduct(id) {
      var _this3 = this;

      this.$Progress.start();
      Swal.fire({
        title: 'Are you sure to Active this product?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Inactive!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/spa/Product-Info/inactive-product/' + id).then(function (_ref2) {
            var data = _ref2.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this3.$Progress.finish();

              toastr.warning(data.success);
            }
          })["catch"](function () {
            _this3.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this3.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    activeProduct: function activeProduct(id) {
      var _this4 = this;

      this.$Progress.start();
      Swal.fire({
        title: 'Are you sure to Active this user?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Active!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/spa/Product-Info/active-product/' + id).then(function (_ref3) {
            var data = _ref3.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this4.$Progress.finish();

              toastr.success(data.success);
            }
          })["catch"](function () {
            _this4.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this4.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    verifyByUser: function verifyByUser(id) {
      var _this5 = this;

      this.$Progress.start();
      Swal.fire({
        title: 'Are you sure to Verify this user?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Verified!'
      }).then(function (result) {
        if (result.value) {
          axios.post('/spa/product-verify-by-admin/' + id).then(function (_ref4) {
            var data = _ref4.data;

            //console.log(data);
            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update 

              _this5.$Progress.finish();

              toastr.success(data.success);
            }
          })["catch"](function () {
            _this5.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this5.$Progress.finish();

          toastr.info('Your action canceled!');
        }
      });
    },
    fetchData: function fetchData() {
      //this function call from Pagination-app component
      this.$Progress.start();
      this.$store.dispatch('ProductMasterStore/fetchData', this.pagination.per_page);
      this.$Progress.finish(); //console.log(this.pagination.total);
    },
    reloadThis: function reloadThis() {
      this.fetchData();
    },
    ViewDetails: function ViewDetails() {
      alert('ok');
    },
    // addData(){
    // 	FireEvent.$emit('addData');
    // },
    // editData(data){
    // 	//alert(data.id);
    // 	FireEvent.$emit('editData', data);
    // },
    DeleteData: function DeleteData(id) {
      var _this6 = this;

      this.$Progress.start();
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
          axios["delete"]('/spa/Product-Info/' + id).then(function (_ref5) {
            var data = _ref5.data;

            if (data.success) {
              FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               

              _this6.$Progress.finish();

              toastr.warning(data.success);
            }

            if (data.errors) {
              toastr.warning(data.errors);
            }
          })["catch"](function () {
            _this6.$Progress.fail();

            toastr.warning('Something is wrong!');
          });
        } else {
          _this6.$Progress.finish();

          toastr.info('Your data is safe!');
        }
      });
    },
    //end delete
    // ################################ For search App ###############################################
    searchData: function searchData(data) {
      this.$store.dispatch('ProductMasterStore/searching', data);
    },
    AutoCompleteSearch: function AutoCompleteSearch(data) {
      if (data != '') {
        this.$store.dispatch('ProductMasterStore/AutoCompleteSearch', data);
      }
    } // ################################ For search App ###############################################

  },
  created: function created() {
    var _this7 = this;

    this.$store.dispatch('ProductMasterStore/fetchData'); //call this function at first loading from Action with Modules namespace 

    FireEvent.$on('AfterChange', function () {
      _this7.$Progress.start();

      _this7.$store.dispatch('ProductMasterStore/fetchData', _this7.pagination.per_page);

      _this7.$Progress.finish();
    }); //this event call from Pagination-app component for change number of data show per page

    FireEvent.$on('changPerPage', function (data) {
      _this7.$store.dispatch('ProductMasterStore/fetchData', data);
    });
  },
  mounted: function mounted() {//console.log(this.products)   
  }
});
/*End export default*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6& ***!
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
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-5 col-sm-9" },
          [
            _c("search-app-master", {
              attrs: {
                SearchByOptions: _vm.SearchByOptions,
                filterBy: _vm.filterBy,
                autoCompleteData: _vm.autoCompleteData,
                pagination: _vm.pagination
              },
              on: {
                searchData: _vm.searchData,
                AutoCompleteSearch: _vm.AutoCompleteSearch
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-3 text-right" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { title: "reload" },
                on: { click: _vm.reloadThis }
              },
              [_c("i", { staticClass: "fas fa-sync-alt" })]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/ProductMasterForm" }
              },
              [
                _c("i", { staticClass: "icon fas fa-plus" }),
                _vm._v(" Add New\r\n\t        ")
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "table",
        { staticClass: "table table-striped table-sm table-responsive" },
        [
          _c("thead", [
            _c("tr", [
              _c(
                "th",
                { staticStyle: { width: "2%" }, attrs: { scope: "col" } },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectAllCheckbox,
                        expression: "selectAllCheckbox"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.selectAllCheckbox)
                        ? _vm._i(_vm.selectAllCheckbox, null) > -1
                        : _vm.selectAllCheckbox
                    },
                    on: {
                      click: _vm.selectCheckbox,
                      change: function($event) {
                        var $$a = _vm.selectAllCheckbox,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.selectAllCheckbox = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selectAllCheckbox = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selectAllCheckbox = $$c
                        }
                      }
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "3%" }, attrs: { scope: "col" } },
                [_vm._v("Img")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "15%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("sys_pro_name")
                    }
                  }
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "5%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("brand_id")
                    }
                  }
                },
                [_vm._v("Brand")]
              ),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "6%" } }, [_vm._v("Category")]),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "2%" }, attrs: { scope: "col" } },
                [_vm._v("Qty ")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "4%" }, attrs: { scope: "col" } },
                [_vm._v("Stock")]
              ),
              _vm._v(" "),
              _c(
                "th",
                {
                  staticClass: "sortable-title",
                  staticStyle: { width: "5%" },
                  attrs: { scope: "col" },
                  on: {
                    click: function($event) {
                      return _vm.sort("pro_price")
                    }
                  }
                },
                [_vm._v("price ")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "3%" }, attrs: { scope: "col" } },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.sortedProducts, function(product, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "col" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedCheckbox,
                          expression: "selectedCheckbox"
                        }
                      ],
                      attrs: { type: "checkbox", name: "" },
                      domProps: {
                        value: product.id,
                        checked: Array.isArray(_vm.selectedCheckbox)
                          ? _vm._i(_vm.selectedCheckbox, product.id) > -1
                          : _vm.selectedCheckbox
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.selectedCheckbox,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = product.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.selectedCheckbox = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.selectedCheckbox = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.selectedCheckbox = $$c
                          }
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    product.pro_image != null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + product.pro_image,
                              loading: "lazy",
                              height: "20px",
                              width: "20px"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    product.pro_image === null
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src: "../" + _vm.NoIconUrl,
                              height: "20px",
                              width: "20px"
                            }
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { scope: "col" } }, [
                    _vm._v(
                      " " + _vm._s(product.sys_pro_name) + " \r\n              "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    product["belongs_to_brand"] != null
                      ? _c("span", [
                          _vm._v(
                            " " +
                              _vm._s(
                                product["belongs_to_brand"]["brand_name"]
                              ) +
                              " "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    product["belongs_to_brand"] === null
                      ? _c("span", { staticClass: "red text-bold" }, [
                          _vm._v(" No Brand ")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    product.pro_category != null
                      ? _c("span", [
                          _vm._v(" " + _vm._s(product.pro_category) + " ")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(" " + _vm._s(product.pro_qty) + " ")
                    ]),
                    _vm._v(" "),
                    product.pro_qty === null
                      ? _c("small", { staticStyle: { color: "red" } }, [
                          _vm._v(" No Qty ")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("small", [
                      product.pro_qty > 5
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                color: "green",
                                "font-weight": "500"
                              }
                            },
                            [_vm._v(" Available")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      product.pro_qty <= 5 && product.pro_qty > 0
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                color: "red",
                                "font-weight": "500"
                              }
                            },
                            [_vm._v(" Low Stock")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      product.pro_qty === 0
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                color: "red",
                                "font-weight": "bold"
                              }
                            },
                            [_vm._v(" Out of Stock")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      product.pro_qty === null
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                color: "red",
                                "font-weight": "bold"
                              }
                            },
                            [_vm._v("Update")]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    product.pro_sale_price
                      ? _c("span", [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "text-decoration": "line-through"
                              },
                              attrs: { title: "Main Price" }
                            },
                            [_vm._v(" " + _vm._s(product.pro_price) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "600",
                                color: "green"
                              },
                              attrs: { title: "Sale Price" }
                            },
                            [_vm._v(" " + _vm._s(product.pro_sale_price) + " ")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !product.pro_sale_price
                      ? _c("span", [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "600",
                                color: "green"
                              },
                              attrs: { title: "Main Price" }
                            },
                            [_vm._v(" " + _vm._s(product.pro_price) + " ")]
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          product["belongs_to_status_master"]["status_name"]
                        )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group option-dropdown-manu-style left"
                      },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-menu-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.ViewDetails()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-eye primary" }),
                                _vm._v(" View ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: {
                                  to: {
                                    name: "ProductMasterForm",
                                    params: { data: product }
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-edit primary "
                                }),
                                _vm._v(" Edit\r\n                  ")
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-divider" }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item pointer",
                                attrs: { id: "delete" },
                                on: {
                                  click: function($event) {
                                    return _vm.DeleteData(product.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-trash-alt red"
                                }),
                                _vm._v(" Delete\r\n                  ")
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _c(
                "tr",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.products && !_vm.products.length,
                      expression: "products && !products.length"
                    }
                  ]
                },
                [_vm._m(2)]
              )
            ],
            2
          )
        ]
      )
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
          : _vm._e()
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
    return _c(
      "th",
      {
        staticStyle: { width: "2%", "text-align": "right" },
        attrs: { scope: "col" }
      },
      [_c("strong", [_vm._v("...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-flat btn-sm btn-warning dropdown-toggle-",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "12" } }, [
      _c(
        "div",
        {
          staticClass: "alert alert-warning text-center red mb-0",
          attrs: { role: "alert" }
        },
        [_vm._v("Sorry : No data found.")]
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

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductMasterList.vue?vue&type=template&id=183cf8f6& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6&");
/* harmony import */ var _ProductMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductMasterList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Catalog/Products/ProductMasterList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductMasterList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductMasterList.vue?vue&type=template&id=183cf8f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Catalog/Products/ProductMasterList.vue?vue&type=template&id=183cf8f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterList_vue_vue_type_template_id_183cf8f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-reviews-website-auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Include/NavForAdminCustomer */ "./resources/js/components/Website/AdminCustomer/Include/NavForAdminCustomer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customer-Reviews-website-auth",
  metaInfo: {},
  // meta: {
  //         title: 'Reviews', 
  //         breadcrumb: 'Reviews'
  //     },
  data: function data() {
    return {};
  },
  components: {
    NavForAdminCustomer: _Include_NavForAdminCustomer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mb-10" }, [
      _c(
        "div",
        { staticClass: "d-none- d-xl-block col-xl-2 col-wd-2gdot5-" },
        [_c("NavForAdminCustomer")],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
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
      { staticClass: "bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-" },
      [
        _c("div", { staticClass: "row " }, [
          _c("div", { staticClass: "border-bottom border-color-1 mb-1" }, [
            _c(
              "h3",
              { staticClass: "section-title mb-0 pb-2 pl-2 font-size-25" },
              [_vm._v("My Reviews")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-8 w-100 wishlist-table cart-wishlist-custome" },
            [
              _c(
                "form",
                { staticClass: "mb-2", attrs: { action: "#", method: "post" } },
                [
                  _c("div", { staticClass: "table-responsive-" }, [
                    _c(
                      "table",
                      { staticClass: "table", attrs: { cellspacing: "0" } },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "product-thumbnail" }, [
                              _vm._v(" ")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "product-name" }, [
                              _vm._v("Product")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "product-price" }, [
                              _vm._v("Qty")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "product-price" }, [
                              _vm._v("Price")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "product-Stock w-lg-15" }, [
                              _vm._v("Review")
                            ]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass:
                                  "product-subtotal min-width-200-md-lg"
                              },
                              [_vm._v(" ")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c(
                              "td",
                              { staticClass: "d-none d-md-table-cell" },
                              [
                                _c("a", { attrs: { href: "#" } }, [
                                  _c("img", {
                                    staticClass:
                                      "img-fluid max-width-70 p-1 border border-color-1",
                                    attrs: {
                                      src:
                                        "/../website/assets/img/300X300/img6.jpg",
                                      loading: "lazy",
                                      alt: "Image Description"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { "data-title": "Product" } }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-gray-90",
                                  attrs: { href: "#" }
                                },
                                [
                                  _vm._v(
                                    "Ultra Wireless S50 Headphones S50 with Bluetooth"
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("span", {}, [_vm._v("1")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Unit Price" } },
                              [_c("span", {}, [_vm._v("$1,100.00")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Stock Status" } },
                              [
                                _c("div", { staticClass: "mb-2" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "d-inline-flex align-items-center small font-size-15 text-lh-1",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-warning mr-2" },
                                        [
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass:
                                              "far fa-star text-muted"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto",
                                  attrs: { type: "button" }
                                },
                                [_vm._v(" Manage")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", {}, [
                            _c(
                              "td",
                              { staticClass: "d-none d-md-table-cell" },
                              [
                                _c("a", { attrs: { href: "#" } }, [
                                  _c("img", {
                                    staticClass:
                                      "img-fluid max-width-70 p-1 border border-color-1",
                                    attrs: {
                                      src:
                                        "/../website/assets/img/300X300/img7.png",
                                      alt: "Image Description"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { "data-title": "Product" } }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-gray-90",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Widescreen NX Mini F1 SMART NX")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("span", {}, [_vm._v("2")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Unit Price" } },
                              [_c("span", {}, [_vm._v("$685.00")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Stock Status" } },
                              [
                                _c("div", { staticClass: "mb-2" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "d-inline-flex align-items-center small font-size-15 text-lh-1",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-warning mr-2" },
                                        [
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass:
                                              "far fa-star text-muted"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",
                                  attrs: { type: "button" }
                                },
                                [_vm._v("Manage")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", {}, [
                            _c(
                              "td",
                              { staticClass: "d-none d-md-table-cell" },
                              [
                                _c("a", { attrs: { href: "#" } }, [
                                  _c("img", {
                                    staticClass:
                                      "img-fluid max-width-70 p-1 border border-color-1",
                                    attrs: {
                                      src:
                                        "/../website/assets/img/300X300/img7.png",
                                      alt: "Image Description"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { "data-title": "Product" } }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-gray-90",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Widescreen NX Mini F1 SMART NX")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("span", {}, [_vm._v("1")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Unit Price" } },
                              [_c("span", {}, [_vm._v("$685.00")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Stock Status" } },
                              [
                                _c("div", { staticClass: "mb-2" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "d-inline-flex align-items-center small font-size-15 text-lh-1",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-warning mr-2" },
                                        [
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass:
                                              "far fa-star text-muted"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",
                                  attrs: { type: "button" }
                                },
                                [_vm._v("Manage")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", {}, [
                            _c(
                              "td",
                              { staticClass: "d-none d-md-table-cell" },
                              [
                                _c("a", { attrs: { href: "#" } }, [
                                  _c("img", {
                                    staticClass:
                                      "img-fluid max-width-70 p-1 border border-color-1",
                                    attrs: {
                                      src:
                                        "/../website/assets/img/300X300/img7.png",
                                      alt: "Image Description"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { "data-title": "Product" } }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-gray-90",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Widescreen NX Mini F1 SMART NX")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("span", {}, [_vm._v("1")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Unit Price" } },
                              [_c("span", {}, [_vm._v("$685.00")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { "data-title": "Stock Status" } },
                              [
                                _c("div", { staticClass: "mb-2" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "d-inline-flex align-items-center small font-size-15 text-lh-1",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-warning mr-2" },
                                        [
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass: "fas fa-star"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass:
                                              "fas fa-star text-muted"
                                          }),
                                          _vm._v(" "),
                                          _c("small", {
                                            staticClass:
                                              "far fa-star text-muted"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",
                                  attrs: { type: "button" }
                                },
                                [_vm._v("Manage")]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerReviews.vue?vue&type=template&id=f2784eb2& */ "./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2&");
/* harmony import */ var _CustomerReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerReviews.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerReviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerReviews.vue?vue&type=template&id=f2784eb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Website/AdminCustomer/Review/CustomerReviews.vue?vue&type=template&id=f2784eb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerReviews_vue_vue_type_template_id_f2784eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
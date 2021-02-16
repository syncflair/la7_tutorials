(self["webpackChunk"] = self["webpackChunk"] || []).push([["ComparePublic-website"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
//const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Compare-Public-website",
  data: function data() {
    return {};
  },
  components: {//HeaderTopbar, FooterComponent,
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {
    this.$nextTick(function () {
      //initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      }); // initialization of svg injector module

      $.HSCore.components.HSSVGIngector.init('.js-svg-injector'); // initialization of header

      $.HSCore.components.HSHeader.init($('#header')); // initialization of animation

      $.HSCore.components.HSOnScrollAnimation.init('[data-animation]'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function afterOpen() {
          $(this).find('input[type="search"]').focus();
        }
      }); // initialization of countdowns
      // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
      //     yearsElSelector: '.js-cd-years',
      //     monthsElSelector: '.js-cd-months',
      //     daysElSelector: '.js-cd-days',
      //     hoursElSelector: '.js-cd-hours',
      //     minutesElSelector: '.js-cd-minutes',
      //     secondsElSelector: '.js-cd-seconds'
      // });
      // initialization of malihu scrollbar

      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar')); // initialization of forms

      $.HSCore.components.HSFocusState.init(); // initialization of form validation
      // $.HSCore.components.HSValidation.init('.js-validate', {
      //     rules: {
      //         confirmPassword: {
      //             equalTo: '#signupPassword'
      //         }
      //     }
      // });
      // initialization of show animations

      $.HSCore.components.HSShowAnimation.init('.js-animation-link'); // initialization of fancybox
      // initialization of popups

      $.HSCore.components.HSFancyBox.init('.js-fancybox'); // initialization of slick carousel
      // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      // initialization of go to

      $.HSCore.components.HSGoTo.init('.js-go-to'); // initialization of hamburgers

      $.HSCore.components.HSHamburgers.init('#hamburgerTrigger'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function beforeClose() {
          $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function afterClose() {
          $('#headerSidebarList .collapse.show').collapse('hide');
        }
      });
      $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        if ($(this).attr('aria-expanded') === "true") {
          $(target).collapse('hide');
        } else {
          $(target).collapse('show');
        }
      }); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]')); // initialization of select picker
      // $.HSCore.components.HSSelectPicker.init('.js-select');
      // initialization of HSScrollNav component
      // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
      //   duration: 700
      // });
      // initialization of quantity counter
      //$.HSCore.components.HSQantityCounter.init('.js-quantity');
      // initialization of forms
      //$.HSCore.components.HSRangeSlider.init('.js-range-slider');
    }); //end this.$nextTick
  }
});

/***/ }),

/***/ "./resources/js/components/Website/Public/Compare/ComparePublic.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Website/Public/Compare/ComparePublic.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComparePublic.vue?vue&type=template&id=3acf4b9d& */ "./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d&");
/* harmony import */ var _ComparePublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComparePublic.vue?vue&type=script&lang=js& */ "./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ComparePublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Website/Public/Compare/ComparePublic.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparePublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComparePublic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparePublic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparePublic_vue_vue_type_template_id_3acf4b9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComparePublic.vue?vue&type=template&id=3acf4b9d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Website/Public/Compare/ComparePublic.vue?vue&type=template&id=3acf4b9d& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "table-responsive table-bordered table-compare-list mb-10 border-0"
          },
          [
            _c("table", { staticClass: "table" }, [
              _c("tbody", [
                _c("tr", [
                  _c("th", { staticClass: "min-width-200" }, [
                    _vm._v("Product")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      { staticClass: "product d-block", attrs: { href: "#" } },
                      [
                        _c("div", { staticClass: "product-compare-image" }, [
                          _c("div", { staticClass: "d-flex mb-3" }, [
                            _c("img", {
                              staticClass: "img-fluid mx-auto",
                              attrs: {
                                src: "website/assets/img/212X200/img1.jpg",
                                alt: "Image Description"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "h3",
                          {
                            staticClass:
                              "product-item__title text-blue font-weight-bold mb-3"
                          },
                          [
                            _vm._v(
                              "Protection Plan for MacBook Air / 13 inch MacBook Pro"
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-warning mb-2" }, [
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", { staticClass: "product", attrs: { href: "#" } }, [
                      _c("div", { staticClass: "product-compare-image" }, [
                        _c("div", { staticClass: "d-flex mb-3" }, [
                          _c("img", {
                            staticClass: "img-fluid mx-auto",
                            attrs: {
                              src: "website/assets/img/212X200/img6.jpg",
                              alt: "Image Description"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        {
                          staticClass:
                            "product-item__title text-blue font-weight-bold mb-3"
                        },
                        [_vm._v("Purple NX Mini F1 aparat  SMART NX")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-warning mb-2" }, [
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", { staticClass: "product", attrs: { href: "#" } }, [
                      _c("div", { staticClass: "product-compare-image" }, [
                        _c("div", { staticClass: "d-flex mb-3" }, [
                          _c("img", {
                            staticClass: "img-fluid mx-auto",
                            attrs: {
                              src: "website/assets/img/212X200/img7.jpg",
                              alt: "Image Description"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        {
                          staticClass:
                            "product-item__title text-blue font-weight-bold mb-3"
                        },
                        [_vm._v("White Solo 2 Wireless")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-warning mb-2" }, [
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", { staticClass: "product", attrs: { href: "#" } }, [
                      _c("div", { staticClass: "product-compare-image" }, [
                        _c("div", { staticClass: "d-flex mb-3" }, [
                          _c("img", {
                            staticClass: "img-fluid mx-auto",
                            attrs: {
                              src: "website/assets/img/212X200/img8.jpg",
                              alt: "Image Description"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        {
                          staticClass:
                            "product-item__title text-blue font-weight-bold mb-3"
                        },
                        [_vm._v("Tablet Red EliteBook Revolve 810 G2")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-warning mb-2" }, [
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "fas fa-star" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "far fa-star text-muted" }),
                      _vm._v(" "),
                      _c("small", { staticClass: "far fa-star text-muted" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Price")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price" }, [
                      _vm._v("$250.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price" }, [
                      _vm._v("$559.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price" }, [
                      _vm._v("$248.99")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price" }, [
                      _vm._v("$2,299.00")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Availability")]),
                  _vm._v(" "),
                  _c("td", [_c("span", [_vm._v("In stock")])]),
                  _c("td", [_c("span", [_vm._v("82 in stock")])]),
                  _c("td", [_c("span", [_vm._v("73 in stock")])]),
                  _c("td", [_c("span", [_vm._v("54 in stock")])])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("ul", [
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Intel Core i5 processors (13-inch model)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Intel Iris Graphics 6100 (13-inch model)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [_c("span", {}, [_vm._v("Flash storage")])]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v(
                            "Up to 10 hours of battery life2 (13-inch model)"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Force Touch trackpad (13-inch model)")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("ul", [
                      _c("li", [
                        _c("span", {}, [_vm._v("No more blur and noise")])
                      ]),
                      _vm._v(" "),
                      _c("li", [_c("span", {}, [_vm._v("Cloud storage")])]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [_vm._v("HD video recording")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [_vm._v("Perfect for Selfies")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v(
                            "Enjoy advanced editing capabilities with the bundled Adobe Photoshop Lightroom 5 software."
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("ul", [
                      _c("li", [
                        _c("span", {}, [
                          _vm._v(
                            "Pair and Play with your Bluetooth® device with 30' range"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("12 hour rechargeable battery with Fuel Gauge")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Take hands-free calls with built-in mic*")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v(
                            "Fine-tuned acoustics for clarity, breadth and balance"
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("ul", [
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Intel Core i5 processors (13-inch model)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Intel Iris Graphics 6100 (13-inch model)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [_c("span", {}, [_vm._v("Flash storage")])]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v(
                            "Up to 10 hours of battery life2 (13-inch model)"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", {}, [
                          _vm._v("Force Touch trackpad (13-inch model)")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Add to cart")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {}, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Add to cart")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {}, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Add to cart")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {}, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Add to cart")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {}, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Add to cart")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Sku")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("5487FB8/44")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("5487FB8/43")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("5487FB8/42")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("5487FB8/41")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Weight")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("500g")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("40g")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("1759g")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("90g")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Dimensions")]),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td")
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("brands")]),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td")
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("color")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Red")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Green")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Blue")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Yellow")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Price")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price price" }, [
                      _vm._v("$250.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price price" }, [
                      _vm._v("$559.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price price" }, [
                      _vm._v("$248.99")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "product-price price" }, [
                      _vm._v("$2,299.00")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Remove")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "a",
                      { staticClass: "text-gray-90", attrs: { href: "#" } },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
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
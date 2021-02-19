(self.webpackChunk=self.webpackChunk||[]).push([[2141],{37415:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(20629);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const o={data:function(){return{module:"role"}},components:{NavForAdminSupplier:s(89233).Z},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,a.rn)("AuthenticationForSupplier",["authSupplier","authVendor"])),methods:{},created:function(){var t=this;setTimeout((function(){t.$store.dispatch("AuthenticationForSupplier/fetchAuthVendorData",t.authSupplier.vendor_id)}),300)},mounted:function(){}};const n=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"content pt-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"d-none d-xl-block d-md-block- mt-0 col-xl-2 col-wd-2gdot5-"},[s("NavForAdminSupplier")],1),t._v(" "),s("div",{staticClass:"bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-"},[s("div",{staticClass:"row pt-3-"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body",staticStyle:{display:"block"}},[s("div",{staticClass:"row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-12 col-md-12 col-lg-4 order-1- order-md-2-"},[s("div",{staticClass:"card"},[t._m(2),t._v(" "),s("div",{staticClass:"card-body p-0 mt-2"},[t.authVendor.vendor_img?s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-circle img-bordered-sm",staticStyle:{width:"50%"},attrs:{src:t.authVendor.vendor_img,alt:"user image"}})]):t._e(),t._v(" "),s("div",{staticClass:"text-muted- text-secondary"},[s("p",{staticClass:"text-sm mb-2"},[t._v("Vendor / Supplier\r\n                                  "),s("b",{staticClass:"d-block"},[s("small",{attrs:{title:"Supplier / Vendor Code"}},[t._v("("+t._s(t.authVendor.vendor_code)+")")]),t._v(" "+t._s(t.authVendor.vendor_name))])]),t._v(" "),s("p",{staticClass:"text-sm mb-2"},[t._v("Supplier Type\r\n                                  "),s("b",{staticClass:"d-block"},[t._v(t._s(t.authVendor.vendor_type))])]),t._v(" "),t.authVendor.brand_shop_id?s("p",{staticClass:"text-sm mb-2"},[t._v("Brand shop\r\n                                  "),s("b",{staticClass:"d-block"},[t._v(t._s(t.authVendor.belongs_to_brand_shop.brand_shop_title))])]):t._e()]),t._v(" "),s("h6",{staticClass:"mt-4 text-muted- text-secondary"},[t._v("Contact Info")]),t._v(" "),s("ul",{staticClass:"list-unstyled"},[t.authVendor.vendor_phone?s("li",{staticClass:"pb-1"},[s("a",{staticClass:"btn-link text-secondary",attrs:{href:"javascript:void(0);"}},[t._m(3),t._v(" "+t._s(t.authVendor.vendor_phone)+" ")])]):t._e(),t._v(" "),t.authVendor.vendor_email?s("li",{staticClass:"pb-1"},[s("a",{staticClass:"btn-link text-secondary",attrs:{href:"javascript:void(0);"}},[t._m(4),t._v(" "+t._s(t.authVendor.vendor_email))])]):t._e(),t._v(" "),t.authVendor.vendor_address?s("li",{staticClass:"pb-1"},[s("a",{staticClass:"btn-link text-secondary",attrs:{href:"javascript:void(0);"}},[t._m(5),t._v(" "+t._s(t.authVendor.vendor_address))])]):t._e()]),t._v(" "),s("h6",{staticClass:"mt-4 text-muted- text-secondary"},[t._v("Other Info")]),t._v(" "),s("ul",{staticClass:"list-unstyled"},[t.authVendor.vendor_tin?s("li",[s("span",{staticClass:"btn-link- text-secondary"},[s("small",{staticClass:"text-dark"},[t._v("TIN")]),t._v(" "+t._s(t.authVendor.vendor_tin))])]):t._e(),t._v(" "),t.authVendor.vendor_nid?s("li",[s("span",{staticClass:"btn-link- text-secondary"},[s("small",{staticClass:"text-dark"},[t._v("NID")]),t._v(" "+t._s(t.authVendor.vendor_nid))])]):t._e(),t._v(" "),t.authVendor.vendor_bank_details?s("li",[s("span",{staticClass:"btn-link- text-secondary"},[s("small",{staticClass:"text-dark"},[t._v("Financial")]),t._v(" "+t._s(t.authVendor.vendor_bank_details))])]):t._e()]),t._v(" "),t.authVendor.vendor_desc?s("p",{staticClass:"text-white- text-justify text-muted- mb-3",attrs:{title:"Vendor Type"}},[s("span",{domProps:{innerHTML:t._s(t.authVendor.vendor_desc)}})]):t._e()])])])])])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[t._v("Summary")]),t._v(" "),s("div",{staticClass:"card-tools"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-md-12 col-lg-8 order-2- order-md-1- mb-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"info-box bg-light"},[s("div",{staticClass:"info-box-content text-secondary"},[s("span",{staticClass:"info-box-text text-center text-muted-"},[t._v("Order's")]),t._v(" "),s("span",{staticClass:"info-box-number text-center text-muted- mb-0"},[t._v("2300")])])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"info-box bg-light"},[s("div",{staticClass:"info-box-content text-secondary"},[s("span",{staticClass:"info-box-text text-center text-muted-"},[t._v("Complete")]),t._v(" "),s("span",{staticClass:"info-box-number text-center text-muted- mb-0"},[t._v("2000")])])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"info-box bg-light"},[s("div",{staticClass:"info-box-content text-secondary"},[s("span",{staticClass:"info-box-text text-center text-muted- green"},[t._v("Payment Receivable")]),t._v(" "),s("span",{staticClass:"info-box-number text-center text-muted- mb-0 green"},[t._v("20,786.00 "),s("span")])])])])]),t._v(" "),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-12"},[s("h6",{staticClass:"text-secondary"},[t._v("Recent orders")]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table m-0 table-custome-one"},[s("thead",{staticClass:"text-secondary"},[s("tr",[s("th",[t._v("Order ID")]),t._v(" "),s("th",[t._v("Item")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Popularity")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR9842")])]),t._v(" "),s("td",[t._v("Call of Duty IV")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-success"},[t._v("Shipped")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#00a65a","data-height":"20"}},[t._v("90,80,90,-70,61,-83,63")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR1848")])]),t._v(" "),s("td",[t._v("Samsung Smart TV")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-warning"},[t._v("Pending")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#f39c12","data-height":"20"}},[t._v("90,80,-90,70,61,-83,68")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR7429")])]),t._v(" "),s("td",[t._v("iPhone 6 Plus")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-danger"},[t._v("Delivered")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#f56954","data-height":"20"}},[t._v("90,-80,90,70,-61,83,63")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR7429")])]),t._v(" "),s("td",[t._v("Samsung Smart TV")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-info"},[t._v("Processing")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#00c0ef","data-height":"20"}},[t._v("90,80,-90,70,-61,83,63")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR1848")])]),t._v(" "),s("td",[t._v("Samsung Smart TV")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-warning"},[t._v("Pending")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#f39c12","data-height":"20"}},[t._v("90,80,-90,70,61,-83,68")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR7429")])]),t._v(" "),s("td",[t._v("iPhone 6 Plus")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-danger"},[t._v("Delivered")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#f56954","data-height":"20"}},[t._v("90,-80,90,70,-61,83,63")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"pages/examples/invoice.html"}},[t._v("OR9842")])]),t._v(" "),s("td",[t._v("Call of Duty IV")]),t._v(" "),s("td",[s("span",{staticClass:"badge badge-success"},[t._v("Shipped")])]),t._v(" "),s("td",[s("div",{staticClass:"sparkbar",attrs:{"data-color":"#00a65a","data-height":"20"}},[t._v("90,80,90,-70,61,-83,63")])])])])])]),t._v(" "),s("div",{staticClass:"card-footer- text-right"},[s("a",{staticClass:"uppercase",attrs:{href:"javascript:void(0)"}},[t._v("View All order's")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header bg-light",staticStyle:{"box-shadow":"0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)","border-radius":"0.25rem"}},[s("h5",{staticClass:"card-title text-secondary mb-1-"},[s("i",{staticClass:"fas fa-info-circle"}),t._v(" Supplier / Vendor Info ")]),t._v(" "),s("div",{staticClass:"card-tools"},[s("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[s("i",{staticClass:"fas fa-minus"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("i",{staticClass:"fas fa-phone"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("i",{staticClass:"far fa-fw fa-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("i",{staticClass:"fas fa-map-marker-alt"})])}],!1,null,null,null).exports},89233:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const o={name:"nav-for-admin-supplier-auth",data:function(){return{ActiveLinkClass:"active"}},computed:r(r({},(0,s(20629).rn)("AuthenticationForSupplier",["authSupplier","authVendor"])),{},{currentPage:function(){return this.$route.path}}),components:{},methods:{Logout:function(){var t=this;this.$Progress.start(),axios.post("/supplier/logout").then((function(e){e.response;t.$Progress.finish(),window.location="/supplier/login",toastr.success("Logout successfule")})).catch((function(){t.$Progress.fail()}))}},created:function(){var t=this;setTimeout((function(){t.$store.dispatch("AuthenticationForSupplier/fetchAuthVendorData",t.authSupplier.vendor_id)}),300)},mounted:function(){}};const n=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-8 border- border-width-2- border-color-3- borders-radius-6"},[s("div",{staticClass:"user-panel pl-2- pr-2- mt-0 pb-2 mb-1 d-flex border-bottom-primary- border-bottom- border-top- section-title"},[s("div",{staticClass:"info- border- bg-gray-1- rounded-lg- w-100 border-bottom-"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.authVendor,expression:"authVendor"}],staticClass:"col-lg-12 btn- px-1- pl-0 pr-0 pb-1  bg-primary- text-black font-size-9- rounded-lg- border-bottom",staticStyle:{overflow:"auto"}},[s("div",{staticStyle:{float:"left","padding-right":"5px"}},[t.authVendor.vendor_img?s("img",{staticClass:"img-circle img-bordered-sm",staticStyle:{width:"50",height:"auto"},attrs:{src:t.authVendor.vendor_img,alt:"user image"}}):t._e()]),t._v(" "),s("div",{staticClass:"pl-3",staticStyle:{"white-space":"normal"}},[s("small",[t._v(t._s(t.authVendor.vendor_name))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.authSupplier,expression:"authSupplier"}],staticClass:"col-lg-12 font-size-10 pl-0 mt-2 mb-1 text-black border-bottom"},[s("span",[t._v(t._s(t.authSupplier.name))])])])]),t._v(" "),s("ul",{staticClass:"list-unstyled dropdown-list dropdown-list-custome pb-3",attrs:{id:"sidebarNav"}},[s("li",{staticClass:"border-bottom-"},[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-dashboard")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-dashboard"}},[t._v(" Dashboard\n                ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-profile")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-profile"}},[t._v("My Profile ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-orders")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-orders"}},[t._v("My Orders\n\t            ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-return")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-return"}},[t._v("Return")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-eplace")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-replace"}},[t._v(" Replace ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-products")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-products"}},[t._v("Product List ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-payment-receivable")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-payment-receivable"}},[t._v("Amount Receivable\n            \t")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-payment-history")]?t.ActiveLinkClass:0,attrs:{to:"/sspa/my-payment-history"}},[t._v("Payment History\n                ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-payment-history")]?t.ActiveLinkClass:0,attrs:{to:"/supplier/login"}},[t._v("Login\n                ")])],1),t._v(" "),s("li",{staticClass:"border-top- mt-2- pt-2-"},[s("a",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.Logout()}}},[s("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout")])])])])}),[],!1,null,null,null).exports},51900:(t,e,s)=>{"use strict";function a(t,e,s,a,r,i,o,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=n?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}s.d(e,{Z:()=>a})}}]);
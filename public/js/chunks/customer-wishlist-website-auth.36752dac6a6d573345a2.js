(self.webpackChunk=self.webpackChunk||[]).push([[7854],{28815:(t,s,e)=>{"use strict";e.d(s,{Z:()=>n});function a(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?a(Object(e),!0).forEach((function(s){o(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function o(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}const i={name:"nav-for-admin-customer-website-auth",data:function(){return{ActiveLinkClass:"active"}},computed:r(r({},(0,e(20629).rn)("AuthenticationForCustomer",["authCustomer"])),{},{currentPage:function(){return this.$route.path}}),components:{},methods:{Logout:function(){var t=this;this.$Progress.start(),axios.post("/customer/logout").then((function(s){s.response;t.$Progress.finish(),t.$store.commit("AuthenticationForCustomer/IS_AUTHENTICATED_CHECK",!1),window.location="/home",toastr.success("Logout successfule")})).catch((function(){t.$Progress.fail()}))}},created:function(){},mounted:function(){}};const n=(0,e(51900).Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-8 border- border-width-2- border-color-3- borders-radius-6"},[e("div",{staticClass:"user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top- section-title"},[e("div",{staticClass:"info border- bg-gray-1- rounded-lg-"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.authCustomer,expression:"authCustomer"}],staticClass:"font-size-10 text-black"},[t._v(" "+t._s(t.authCustomer.name)+" ")]),t._v(" "),e("br"),t._v(" "),t._m(0)])]),t._v(" "),e("ul",{staticClass:"list-unstyled dropdown-list dropdown-list-custome",attrs:{id:"sidebarNav"}},[e("li",{staticClass:"border-bottom-"},[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-dashboard")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-dashboard"}},[t._v("Dashboard\n                ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-orders")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-orders"}},[t._v("My Orders\n                    ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-cart")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-cart"}},[t._v("My Cart\n                ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-wishlist")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-wishlist"}},[t._v("Wishlist\n            \t")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-profile")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-profile"}},[t._v(" My Profile\n\t            ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-vouchers")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-vouchers"}},[t._v("Vouchers\n            \t")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",class:[t.currentPage.includes("my-reviews")]?t.ActiveLinkClass:0,attrs:{to:"/auth/my-reviews"}},[t._v("My Reviews\n                ")])],1),t._v(" "),e("li",{staticClass:"border-top-"},[e("a",{staticClass:"dropdown-item dropdown-item-custome transition-3d-hover",attrs:{href:"javascript:;"},on:{click:function(s){return s.preventDefault(),t.Logout()}}},[e("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout")])])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"btn- px-1 bg-success text-white font-size-9- rounded-lg"},[e("i",{staticClass:"fas fa-check font-size-8"}),t._v(" "),e("small",[t._v("Verified")])])}],!1,null,null,null).exports},73661:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});const a={name:"customer-Wishlist-website-auth",data:function(){return{}},components:{NavForAdminCustomer:e(28815).Z},methods:{},created:function(){},mounted:function(){}};const r=(0,e(51900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-10 mt-4"},[e("div",{staticClass:"bg-gray-1- d-none- d-xl-block col-xl-2 col-wd-2gdot5-"},[e("NavForAdminCustomer")],1),t._v(" "),t._m(0)])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-"},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-lg-12 border-bottom border-color-1 mb-3 col-6-"},[e("h3",{staticClass:"section-title- mb-0 pb-1 pl-2- font-size-18"},[t._v("My Wishlist")])]),t._v(" "),e("div",{staticClass:"mb-8 w-100 wishlist-table cart-wishlist-custome"},[e("form",{staticClass:"mb-2",attrs:{action:"#",method:"post"}},[e("div",{staticClass:"table-responsive-"},[e("table",{staticClass:"table",attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",{staticClass:"product-remove"},[t._v(" ")]),t._v(" "),e("th",{staticClass:"product-thumbnail"},[t._v(" ")]),t._v(" "),e("th",{staticClass:"product-name"},[t._v("Product")]),t._v(" "),e("th",{staticClass:"product-price"},[t._v("Unit Price")]),t._v(" "),e("th",{staticClass:"product-Stock w-lg-15"},[t._v("Stock Status")]),t._v(" "),e("th",{staticClass:"product-subtotal min-width-200-md-lg"},[t._v(" ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"text-center"},[e("a",{staticClass:"text-gray-32 font-size-26",attrs:{href:"#"}},[t._v("×")])]),t._v(" "),e("td",{staticClass:"d-none d-md-table-cell"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid max-width-70 p-1 border border-color-1",attrs:{src:"/../website/assets/img/300X300/img6.jpg",loading:"lazy",alt:"Image Description"}})])]),t._v(" "),e("td",{attrs:{"data-title":"Product"}},[e("a",{staticClass:"text-gray-90",attrs:{href:"#"}},[t._v("Ultra Wireless S50 Headphones S50 with Bluetooth")])]),t._v(" "),e("td",{attrs:{"data-title":"Unit Price"}},[e("span",{},[t._v("$1,100.00")])]),t._v(" "),e("td",{attrs:{"data-title":"Stock Status"}},[e("span",[t._v("In stock")])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto",attrs:{type:"button"}},[t._v(" Add to Cart")])])]),t._v(" "),e("tr",{},[e("td",{staticClass:"text-center"},[e("a",{staticClass:"text-gray-32 font-size-26",attrs:{href:"#"}},[t._v("×")])]),t._v(" "),e("td",{staticClass:"d-none d-md-table-cell"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid max-width-70 p-1 border border-color-1",attrs:{src:"/../website/assets/img/300X300/img7.png",alt:"Image Description"}})])]),t._v(" "),e("td",{attrs:{"data-title":"Product"}},[e("a",{staticClass:"text-gray-90",attrs:{href:"#"}},[t._v("Widescreen NX Mini F1 SMART NX")])]),t._v(" "),e("td",{attrs:{"data-title":"Unit Price"}},[e("span",{},[t._v("$685.00")])]),t._v(" "),e("td",{attrs:{"data-title":"Stock Status"}},[e("span",[t._v("In stock")])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",attrs:{type:"button"}},[t._v("Add to Cart")])])]),t._v(" "),e("tr",{},[e("td",{staticClass:"text-center"},[e("a",{staticClass:"text-gray-32 font-size-26",attrs:{href:"#"}},[t._v("×")])]),t._v(" "),e("td",{staticClass:"d-none d-md-table-cell"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid max-width-70 p-1 border border-color-1",attrs:{src:"/../website/assets/img/300X300/img7.png",alt:"Image Description"}})])]),t._v(" "),e("td",{attrs:{"data-title":"Product"}},[e("a",{staticClass:"text-gray-90",attrs:{href:"#"}},[t._v("Widescreen NX Mini F1 SMART NX")])]),t._v(" "),e("td",{attrs:{"data-title":"Unit Price"}},[e("span",{},[t._v("$685.00")])]),t._v(" "),e("td",{attrs:{"data-title":"Stock Status"}},[e("span",[t._v("In stock")])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",attrs:{type:"button"}},[t._v("Add to Cart")])])]),t._v(" "),e("tr",{},[e("td",{staticClass:"text-center"},[e("a",{staticClass:"text-gray-32 font-size-26",attrs:{href:"#"}},[t._v("×")])]),t._v(" "),e("td",{staticClass:"d-none d-md-table-cell"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid max-width-70 p-1 border border-color-1",attrs:{src:"/../website/assets/img/300X300/img7.png",alt:"Image Description"}})])]),t._v(" "),e("td",{attrs:{"data-title":"Product"}},[e("a",{staticClass:"text-gray-90",attrs:{href:"#"}},[t._v("Widescreen NX Mini F1 SMART NX")])]),t._v(" "),e("td",{attrs:{"data-title":"Unit Price"}},[e("span",{},[t._v("$685.00")])]),t._v(" "),e("td",{attrs:{"data-title":"Stock Status"}},[e("span",[t._v("In stock")])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto",attrs:{type:"button"}},[t._v("Add to Cart")])])])])])])])])])])}],!1,null,null,null).exports},51900:(t,s,e)=>{"use strict";function a(t,s,e,a,r,o,i,n){var c,l="function"==typeof t?t.options:t;if(s&&(l.render=s,l.staticRenderFns=e,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=n?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,s){return c.call(s),d(t,s)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}e.d(s,{Z:()=>a})}}]);
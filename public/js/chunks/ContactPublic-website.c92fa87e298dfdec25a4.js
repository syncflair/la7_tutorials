(self.webpackChunk=self.webpackChunk||[]).push([[8696],{82738:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});const a={name:"Contact-Public-website",data:function(){return{form:new Form({firstName:"",lastName:"",email:"",phone:"",subject:"",visitorQuery:""})}},components:{},methods:{SendPublicQueryEmail:function(){var s=this;this.$Progress.start(),this.form.post("/send-visitor-query").then((function(t){var e=t.data;e.success&&(toastr.success(e.success),s.form.reset(),s.$Progress.finish())})).catch((function(){s.$Progress.fail()}))}},created:function(){},mounted:function(){}};const r=(0,e(51900).Z)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",[e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-10 mt-6-"},[e("div",{staticClass:"col-lg-7 col-xl-6 mb-8 mb-lg-0"},[e("div",{staticClass:"mr-xl-6"},[s._m(0),s._v(" "),e("form",{staticClass:"js-validate-",attrs:{novalidate:"novalidate-"},on:{submit:function(t){return t.preventDefault(),s.SendPublicQueryEmail()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-4"},[s._m(1),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.firstName,expression:"form.firstName"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("firstName")},attrs:{type:"text",name:"firstName",placeholder:"","aria-label":"","data-msg":"Please enter your frist name.","data-error-class":"u-has-error","data-success-class":"u-has-success",autocomplete:"off"},domProps:{value:s.form.firstName},on:{input:function(t){t.target.composing||s.$set(s.form,"firstName",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"firstName"}})],1)]),s._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-4"},[s._m(2),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.lastName,expression:"form.lastName"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("lastName")},attrs:{type:"text",name:"lastName",placeholder:"","aria-label":"","data-msg":"Please enter your last name.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:s.form.lastName},on:{input:function(t){t.target.composing||s.$set(s.form,"lastName",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"lastName"}})],1)]),s._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-4"},[s._m(3),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("email")},attrs:{type:"text",name:"email",placeholder:"","aria-label":"","data-msg":"Please enter your Email.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"email"}})],1)]),s._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-4"},[e("label",{staticClass:"form-label"},[s._v(" Phone ")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:"","aria-label":"","data-msg":"Please enter your Phone.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:s.form.phone},on:{input:function(t){t.target.composing||s.$set(s.form,"phone",t.target.value)}}})])]),s._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"js-form-message mb-4"},[s._m(4),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.subject,expression:"form.subject"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("subject")},attrs:{type:"text",name:"subject",placeholder:"","aria-label":"","data-msg":"Please enter subject.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:s.form.subject},on:{input:function(t){t.target.composing||s.$set(s.form,"subject",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"subject"}})],1)]),s._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"js-form-message mb-4"},[s._m(5),s._v(" "),e("div",{staticClass:"input-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:s.form.visitorQuery,expression:"form.visitorQuery"}],staticClass:"form-control p-5",class:{"is-invalid":s.form.errors.has("visitorQuery")},attrs:{rows:"4",name:"visitorQuery",placeholder:""},domProps:{value:s.form.visitorQuery},on:{input:function(t){t.target.composing||s.$set(s.form,"visitorQuery",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"visitorQuery"}})],1)])])]),s._v(" "),s._m(6)])])]),s._v(" "),s._m(7)])])])}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"border-bottom border-color-1 mb-5"},[e("h3",{staticClass:"section-title mb-0 pb-2 font-size-25"},[s._v("Leave us a Message")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"form-label"},[s._v(" First name "),e("span",{staticClass:"text-danger"},[s._v("*")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"form-label"},[s._v(" Last name "),e("span",{staticClass:"text-danger"},[s._v("*")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"form-label"},[s._v(" Email "),e("span",{staticClass:"text-danger"},[s._v("*")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"form-label"},[s._v(" Subject "),e("span",{staticClass:"text-danger"},[s._v("*")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"form-label"},[s._v("Your Message "),e("span",{staticClass:"text-danger"},[s._v("*")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"mb-3"},[e("button",{staticClass:"btn btn-primary-dark-w px-5",attrs:{type:"submit"}},[s._v("Send Message")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"col-lg-5 col-xl-6"},[e("div",{staticClass:"mb-6"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311872784!2d90.34510366942551!3d23.794582086915813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x986dd0410c32fa76!2sBogura%20Doi%20Hat!5e0!3m2!1sen!2sbd!4v1606833752759!5m2!1sen!2sbd",width:"100%",height:"200",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),s._v(" "),e("div",{staticClass:"border-bottom border-color-1 mb-5"},[e("h3",{staticClass:"section-title mb-0 pb-2 font-size-25"},[s._v("Our Address")])]),s._v(" "),e("address",{staticClass:"mb-6 text-lh-23"},[s._v("\r\n                    100/1, Golartake,\r\n                    Mirpur 1, Dhaka 1216,\r\n                    Bangladesh\r\n                    "),e("div",{},[s._v("Support +880 1714 017558")]),s._v(" "),e("div",{},[s._v("Email: "),e("a",{staticClass:"text-blue text-decoration-on",attrs:{href:"mailto:sorboraho@gmail.com"}},[s._v("sorboraho@gmail.com")])])]),s._v(" "),e("h5",{staticClass:"font-size-14 font-weight-bold mb-3"},[s._v("Opening Hours")]),s._v(" "),e("div",{},[s._v("Monday to Friday: 9am-9pm")]),s._v(" "),e("div",{staticClass:"mb-6"},[s._v("Saturday to Sunday: 9am-11pm")]),s._v(" "),e("h5",{staticClass:"font-size-14 font-weight-bold mb-3"},[s._v("Careers")]),s._v(" "),e("p",{staticClass:"text-gray-90"},[s._v("If you’re interested in employment opportunities at SORBORAHO, please email us: "),e("a",{staticClass:"text-blue text-decoration-on",attrs:{href:"mailto:sorboraho@gmail.com"}},[s._v("sorboraho@gmail.com")])])])}],!1,null,null,null).exports},51900:(s,t,e)=>{"use strict";function a(s,t,e,a,r,o,i,l){var n,m="function"==typeof s?s.options:s;if(t&&(m.render=t,m.staticRenderFns=e,m._compiled=!0),a&&(m.functional=!0),o&&(m._scopeId="data-v-"+o),i?(n=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),r&&r.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(i)},m._ssrRegister=n):r&&(n=l?function(){r.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(m.functional){m._injectStyles=n;var c=m.render;m.render=function(s,t){return n.call(t),c(s,t)}}else{var d=m.beforeCreate;m.beforeCreate=d?[].concat(d,n):[n]}return{exports:s,options:m}}e.d(t,{Z:()=>a})}}]);
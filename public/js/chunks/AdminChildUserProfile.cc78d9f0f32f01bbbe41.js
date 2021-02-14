(self.webpackChunk=self.webpackChunk||[]).push([[7915],{12687:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(20629);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const r={name:"admin-child-profile-master",data:function(){return{ShowOnChangeImage:null,deleteImageIcon:!1,show_image_name:null,form:new Form({id:"",name:"",email:"",current_password:"",password:"",password_confirmation:""})}},components:{Breadcrumb:s(1878).Z},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},(0,a.rn)("AuthenticationForAdmin",["authUser","systemSettings","authUserInfo"])),methods:{showFilePicker:function(){this.$refs.avatar.click()},getFilesName:function(){return this.show_image_name},onImageChange:function(e){var t=this;this.show_image_name=e.target.files[0].name;var s=e.target.files[0];this.ShowOnChangeImage=URL.createObjectURL(s);var a=new FileReader;s.size>512e3?toastr.warning("Please select file size within 500kb"):(a.onloadend=function(e){t.form.avatar=a.result},a.readAsDataURL(s))},ChangePassword:function(){var e=this;this.$Progress.start(),this.form.put("/spaa/admin-child-profille-change-password/"+this.form.id).then((function(t){var s=t.data;s.success&&(toastr.success(s.success),e.$Progress.finish(),e.form.reset(),e.fillData(e.authUser)),s.errors&&toastr.warning(s.errors)})).catch((function(t){e.$Progress.fail(),toastr.warning("Something is wrong!")}))},fillData:function(e){this.form.fill(e)}},created:function(){this.$store.dispatch("AuthenticationForAdmin/fetchAuthUserInfo",this.authUser.id),this.fillData(this.authUser)},mounted:function(){}};const n=(0,s(51900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"container-fluid"},[s("Breadcrumb"),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 offset-1-"},[s("div",{staticClass:"card card-widget widget-user"},[s("div",{staticClass:"widget-user-header bg-info"},[s("h3",{staticClass:"widget-user-username"},[e._v(e._s(e.authUserInfo.name))]),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("h5",{staticClass:"widget-user-desc"},[e._v(e._s(e.authUserInfo.belongs_to_employee.belongs_to_j_ob_title.job_title_name))]):e._e()]),e._v(" "),s("div",{staticClass:"widget-user-image"},[null===e.authUserInfo.belongs_to_employee.avavtar?s("img",{staticClass:"img-circle elevation-2",attrs:{src:e.NoImageAvailable,alt:""}}):e._e(),e._v(" "),null!==e.authUserInfo.belongs_to_employee.avatar?s("img",{staticClass:"img-circle elevation-2",staticStyle:{height:"85px"},attrs:{src:e.authUserInfo.belongs_to_employee.avatar,alt:""}}):e._e()]),e._v(" "),s("div",{staticClass:"card-footer bg-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4 border-right"},[s("div",{staticClass:"description-block"},[null!=e.authUserInfo.belongs_to_branch?s("h5",{staticClass:"description-header"},[e._v(e._s(e.authUserInfo.belongs_to_branch.branch_name))]):e._e(),e._v(" "),s("span",{staticClass:"description-text"},[e._v("Branch")])])]),e._v(" "),s("div",{staticClass:"col-sm-4 border-right"},[s("div",{staticClass:"description-block"},[null!=e.authUserInfo.belongs_to_employee?s("h5",{staticClass:"description-header"},[e._v(e._s(e.authUserInfo.belongs_to_employee.emp_job_type))]):e._e(),e._v(" "),s("span",{staticClass:"description-text"},[e._v("Employee Type")])])]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"description-block"},[s("h5",{staticClass:"description-header"},[e._v(e._s(e._f("formatDate")(e.authUserInfo.belongs_to_employee.emp_hire_date)))]),e._v(" "),s("span",{staticClass:"description-text"},[e._v("Join")])])])])])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10 offset-md-1 "},[s("div",{staticClass:"card"},[e._m(0),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"tab-one"}},[s("div",{staticClass:"timeline timeline-inverse"},[e._m(1),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"far fa-id-badge bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Name:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_name))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Office ID:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.employee_code))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Job Status:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_job_status))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Job Type:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_job_type))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Branch:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_branch.branch_name))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Designation:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.belongs_to_j_ob_title.job_title_name))]),e._v(" "),s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Join Date:")]),e._v(" "+e._s(e._f("formatDate")(e.authUserInfo.belongs_to_employee.emp_hire_date)))]),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_desc?s("div",{staticClass:"timeline-body"},[e._v(" \r\n                            "+e._s(e.authUserInfo.belongs_to_employee.emp_desc)+"\r\n                          ")]):e._e()])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-envelope bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header border-0"},[s("strong",[e._v("Email: ")]),e._v(e._s(e.authUserInfo.belongs_to_employee.emp_email))])])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-mobile-alt bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header border-0"},[s("strong",[e._v("Phone: ")]),e._v(e._s(e.authUserInfo.belongs_to_employee.emp_phone))])])]):e._e(),e._v(" "),e._m(2),e._v(" "),e._m(3)])]),e._v(" "),s("div",{staticClass:"tab-pane",attrs:{id:"tab-two"}},[s("div",{staticClass:"timeline timeline-inverse"},[e._m(4),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-info-circle bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v("Personal Details")]),e._v(" "),s("div",{staticClass:"timeline-body"},[s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("DOB:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_dob))]),e._v(" "),s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Gender:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_gender))]),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_father_name?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Father Name:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_father_name))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_mother_name?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Mother Name:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_mother_name))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_wife_name?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Wife Name:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_wife_name))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_tin?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("TIN:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_tin))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_nid?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("NID:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_nid))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_driving_license?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Driving License:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_driving_license))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_passport?s("p",{staticClass:"timeline-header mb-0"},[s("strong",[e._v("Passport:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_passport))]):e._e()])])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"far fa-address-card bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v("Address")]),e._v(" "),s("div",{staticClass:"timeline-body"},[null!=e.authUserInfo.belongs_to_employee.emp_Present_address?s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Present Address:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_Present_address))]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee.emp_permanent_address?s("p",{staticClass:"timeline-header"},[s("strong",[e._v("Permanent Address:")]),e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_permanent_address))]):e._e()])])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-graduation-cap bg-success"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v("Qualification")]),e._v(" "),s("div",{staticClass:"timeline-body"},[null!=e.authUserInfo.belongs_to_employee.emp_qualification?s("p",{staticClass:"timeline-header"},[e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_qualification))]):e._e()])])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-briefcase bg-primary"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v("Experience")]),e._v(" "),s("div",{staticClass:"timeline-body"},[null!=e.authUserInfo.belongs_to_employee.emp_experience?s("p",{staticClass:"timeline-header"},[e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_experience))]):e._e()])])]):e._e(),e._v(" "),null!=e.authUserInfo.belongs_to_employee?s("div",[s("i",{staticClass:"fas fa-history bg-warning"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v("Job History")]),e._v(" "),s("div",{staticClass:"timeline-body"},[null!=e.authUserInfo.belongs_to_employee.emp_previous_job_history?s("p",{staticClass:"timeline-header"},[e._v(" "+e._s(e.authUserInfo.belongs_to_employee.emp_previous_job_history))]):e._e()])])]):e._e(),e._v(" "),e._m(5)])]),e._v(" "),s("div",{staticClass:"tab-pane",attrs:{id:"tab-three"}},[s("form",{staticClass:"form-horizontal",on:{submit:function(t){return t.preventDefault(),e.ChangePassword()}}},[s("div",{staticClass:"row form-group"},[e._m(6),e._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.current_password,expression:"form.current_password"}],staticClass:"form-control form-control-sm",class:{"is-invalid":e.form.errors.has("current_password")},attrs:{type:"current_password",name:"current_password",placeholder:"Current Password"},domProps:{value:e.form.current_password},on:{input:function(t){t.target.composing||e.$set(e.form,"current_password",t.target.value)}}}),e._v(" "),s("has-error",{attrs:{form:e.form,field:"current_password"}})],1)]),e._v(" "),s("div",{staticClass:"row form-group"},[e._m(7),e._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control form-control-sm",class:{"is-invalid":e.form.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"New Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),s("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),s("div",{staticClass:"row form-group"},[e._m(8),e._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control form-control-sm",class:{"is-invalid":e.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation",placeholder:"Confirm new Password"},domProps:{value:e.form.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.form,"password_confirmation",t.target.value)}}}),e._v(" "),s("has-error",{attrs:{form:e.form,field:"password_confirmation"}})],1)]),e._v(" "),e._m(9)])])])])])])])])])],1)])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-header p-2"},[s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#tab-one","data-toggle":"tab"}},[e._v("Job Details")])]),e._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tab-two","data-toggle":"tab"}},[e._v("My Details")])]),e._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tab-three","data-toggle":"tab"}},[e._v("Change password")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"time-label"},[s("span",{staticClass:"bg-danger"},[e._v("\r\n                          Job Details\r\n                        ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("i",{staticClass:"fas fa-qrcode bg-purple"}),e._v(" "),s("div",{staticClass:"timeline-item"},[s("h3",{staticClass:"timeline-header"},[e._v(" QR Code")]),e._v(" "),s("div",{staticClass:"timeline-body"},[s("img",{attrs:{src:"http://placehold.it/150x100",alt:"..."}})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("i",{staticClass:"far fa-clock bg-gray"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"time-label"},[s("span",{staticClass:"bg-danger"},[e._v(" My Detials ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("i",{staticClass:"far fa-clock bg-gray"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3 text-right"},[s("label",[e._v("Current Password")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3 text-right"},[s("label",[e._v("New Password")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3 text-right"},[s("label",[e._v("New Password Confirm")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"offset-sm-3 col-sm-10"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[e._v("Submit")])])])}],!1,null,null,null).exports},1878:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const a={name:"breadcrumb-for-admin-chiled",data:function(){return{breadcrumb:""}},methods:{},created:function(){},mounted:function(){console.log()}};const i=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.breadcrumb,expression:"$route.meta.breadcrumb"}],staticClass:"content-header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row mb-2-"},[s("div",{staticClass:"col-sm-12 col-12"},[s("ol",{staticClass:"breadcrumb float-right- float-left"},["Dashboard"!==e.$route.meta.breadcrumb?s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"#"}},[e._v("Dashboard")])],1):e._e(),e._v(" "),s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"#"}},[e._v(e._s(e.$route.meta.breadcrumb))])])])])])])])}),[],!1,null,null,null).exports},51900:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o,r,n){var l,_="function"==typeof e?e.options:e;if(t&&(_.render=t,_.staticRenderFns=s,_._compiled=!0),a&&(_.functional=!0),o&&(_._scopeId="data-v-"+o),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},_._ssrRegister=l):i&&(l=n?function(){i.call(this,(_.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(_.functional){_._injectStyles=l;var c=_.render;_.render=function(e,t){return l.call(t),c(e,t)}}else{var m=_.beforeCreate;_.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:_}}s.d(t,{Z:()=>a})}}]);
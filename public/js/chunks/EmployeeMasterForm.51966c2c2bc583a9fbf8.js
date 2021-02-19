(self.webpackChunk=self.webpackChunk||[]).push([[5311],{87584:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(20629);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const l={name:"EmployeeMasterForm",data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",ShowOnChangeImage:null,deleteImageIcon:!1,editMode:!1,genders:[{name:"Male"},{name:"Female"}],empJobStatus:[{name:"Employee"},{name:"Terminate"},{name:"Fired"}],employeeJobTypes:[{name:"Permanent"},{name:"Part time"},{name:"Intractual"},{name:"Internship"}],empPayrolls:[{name:"Active"},{name:"Previous"}],placeHolder:"Select departments",filterBy:"dept_name",valueProperty:"id",form:new Form({id:"",branch_id:"",job_title_id:"",emp_job_type:"",emp_job_status:"",emp_name:"",emp_father_name:"",emp_mother_name:"",emp_wife_name:"",emp_dob:"",emp_gender:"",emp_email:"",emp_phone:"",emp_nid:"",emp_passport:"",emp_driving_license:"",emp_tin:"",emp_hire_date:"",avatar:"",status_id:"",emp_desc:"",emp_qualification:"",emp_experience:"",emp_previous_job_history:"",emp_permanent_address:"",departments:[],emp_payrolls:[{payroll_status:"",basic_salary:"",house_rent:"",medical_allowance:"",ta_daily:"",ta_monthly:"",da_daily:"",da_monthly:"",over_time:"",bonuse_percent:"",increment_percent:"",payroll_desc:"",starting_date:""}]})}},computed:o(o({},(0,s.rn)("commonStoreForAll",["userStatus","jobTitles","branches","allDepertments","autoSearchDepartments"])),(0,s.rn)("EmployeeMasterStore",["selectedDepartmentList","autoSearchDepartments"])),methods:{add_payroll:function(){this.form.emp_payrolls.push({payroll_status:"",basic_salary:"",house_rent:"",medical_allowance:"",ta_daily:"",ta_monthly:"",da_daily:"",da_monthly:"",over_time:"",bonuse_percent:"",increment_percent:"",payroll_desc:"",starting_date:""})},remove_payroll:function(t){this.form.emp_payrolls.splice(t,1)},onImageChange:function(t){var e=this,a=t.target.files[0];this.ShowOnChangeImage=URL.createObjectURL(a);var s=new FileReader;a.size>512e3?toastr.warning("Please select file size within 500kb"):(s.onloadend=function(t){e.form.avatar=s.result},s.readAsDataURL(a))},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/Employee-Info").then((function(e){var a=e.data;a.success&&(toastr.success(a.success),t.$Progress.finish(),t.form.reset(),t.$refs.avatar.value="",t.ShowOnChangeImage=null,t.$router.push({path:"/spa/EmployeeMaster"})),a.errors&&(t.$Progress.fail(),toastr.warning(a.errors))})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/Employee-Info/"+this.form.id).then((function(e){var a=e.data;a.success&&(t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.editMode=!1,t.$refs.avatar.value="",t.ShowOnChangeImage=null,t.$router.push({path:"/spa/EmployeeMaster"})),a.errors&&(t.$Progress.fail(),toastr.warning(a.errors))})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},deleteImage:function(t){var e=this;this.$Progress.start(),axios.post("/spa/Employee-Info-DeleteImage/"+t).then((function(t){var a=t.data;e.deleteImageIcon=!1,e.form.avatar=null,e.$Progress.finish(),toastr.success(a.success)})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))},fillForm:function(){null!=this.$route.params.data&&(this.editMode=!0,this.form.reset(),this.form.fill(this.$route.params.data),0===this.$route.params.data.has_many_payroll.length?this.form.emp_payrolls=[{payroll_status:"",basic_salary:"",house_rent:"",medical_allowance:"",ta_daily:"",ta_monthly:"",da_daily:"",da_monthly:"",over_time:"",bonuse_percent:"",increment_percent:"",payroll_desc:"",starting_date:""}]:this.form.emp_payrolls=this.$route.params.data.has_many_payroll,0===this.$route.params.data.departments.length?this.form.departments=[]:this.form.departments=Object.values(this.$route.params.data.departments).map((function(t){return t.id})),null!=this.$route.params.data.avatar&&(this.deleteImageIcon=!0)),this.$store.dispatch("EmployeeMasterStore/fetchSelectedDepartmentList",this.form.departments)},AutoCompleteSearchForDataDepartment:function(t){this.$store.dispatch("EmployeeMasterStore/AutoCompleteSearchForDataDepartment",t)},getSelectedDataByIdsForDepartment:function(t){this.$store.dispatch("EmployeeMasterStore/fetchSelectedDepartmentList",this.form.departments)}},created:function(){var t=this;this.fillForm(),this.$store.dispatch("commonStoreForAll/userStatus"),this.$store.dispatch("commonStoreForAll/fetchJobTitles"),this.$store.dispatch("commonStoreForAll/fetchBranches"),this.$store.dispatch("commonStoreForAll/fetchDepartments"),FireEvent.$on("AutoCompleteSearchForData",(function(e){t.$store.dispatch("commonStoreForAll/AutoCompleteSearchForDepartment",e)}))}};const n=(0,a(51900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 col-sm-9"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("New Employee")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update - "+t._s(t.form.emp_name))])]),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-3 text-right"},[a("router-link",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{to:"/spa/EmployeeMaster"}},[a("i",{staticClass:"fas fa-user-tie"}),t._v(" Employee List\r\n        \t")])],1)])]),t._v(" "),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 offset-1-"},[a("div",{staticClass:"card card-primary card-outline card-outline-tabs"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"tab-content",attrs:{id:"custom-tabs-Content"}},[a("div",{staticClass:"tab-pane fade active show",attrs:{id:"tabs-body-one",role:"tabpanel","aria-labelledby":"tab-one"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9 col-sm-12"},[a("div",{staticClass:"row form-group"},[t._m(1),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_name,expression:"form.emp_name"}],ref:"emp_name",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("emp_name")},attrs:{type:"text",name:"emp_name",placeholder:"Employee Name"},domProps:{value:t.form.emp_name},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_name"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(2),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.job_title_id,expression:"form.job_title_id"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("job_title_id")},attrs:{id:"job_title_id",name:"job_title_id"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"job_title_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select Job Title ..")]),t._v(" "),t._l(t.jobTitles,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.job_title_name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"job_title_id"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(3),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_job_type,expression:"form.emp_job_type"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("emp_job_type")},attrs:{id:"emp_job_type",name:"emp_job_type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"emp_job_type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Job type ..")]),t._v(" "),t._l(t.employeeJobTypes,(function(e){return a("option",{domProps:{value:e.name}},[t._v("\r\n                                "+t._s(e.name)+"\r\n                              ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_job_type"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(4),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_job_status,expression:"form.emp_job_status"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("emp_job_status")},attrs:{id:"emp_job_status",name:"emp_job_status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"emp_job_status",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Job status ..")]),t._v(" "),t._l(t.empJobStatus,(function(e){return a("option",{domProps:{value:e.name}},[t._v("\r\n                                "+t._s(e.name)+"\r\n                              ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_job_status"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(5),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status_id,expression:"form.status_id"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("status_id")},attrs:{id:"status_id",name:"status_id"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select Status ..")]),t._v(" "),t._l(t.userStatus,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.us_name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"status_id"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(6),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.branch_id,expression:"form.branch_id"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("branch_id")},attrs:{id:"branch_id",name:"branch_id"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"branch_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select Branch ..")]),t._v(" "),t._l(t.branches,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.branch_name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"branch_id"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(7),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_hire_date,expression:"form.emp_hire_date"}],ref:"emp_hire_date",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("emp_hire_date")},attrs:{type:"date",name:"emp_hire_date",placeholder:"Join Date"},domProps:{value:t.form.emp_hire_date},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_hire_date",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_hire_date"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(8),t._v(" "),a("div",{staticClass:"col-sm-9",staticStyle:{"margin-top":"-12px"}},[a("multi-select-app-one",{attrs:{options:t.selectedDepartmentList,autoSearchOptions:t.autoSearchDepartments,filterBy:t.filterBy,"place-holder":t.placeHolder,"value-property":t.valueProperty},on:{getAllDataListByIds:t.getSelectedDataByIdsForDepartment,AutoCompleteSearchForData:t.AutoCompleteSearchForDataDepartment},model:{value:t.form.departments,callback:function(e){t.$set(t.form,"departments",e)},expression:"form.departments"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(9),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("div",{staticClass:"input-group input-group-sm- mb-3"},[t._m(10),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_phone,expression:"form.emp_phone"}],ref:"emp_phone",staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("emp_phone")},attrs:{type:"number",name:"emp_phone",placeholder:"Enter phone number"},domProps:{value:t.form.emp_phone},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_phone",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_phone"}})],1)])]),t._v(" "),a("div",{staticClass:"row form-group",staticStyle:{"margin-top":"-12px"}},[t._m(11),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_email,expression:"form.emp_email"}],ref:"emp_email",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("emp_email")},attrs:{type:"email",name:"emp_email",placeholder:"Email Address"},domProps:{value:t.form.emp_email},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_email"}})],1)])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-12"},[a("div",{staticClass:"row pt-2"},[a("div",{staticClass:"col-md-12 text-center"},[null!=t.ShowOnChangeImage?a("span",[null!=t.ShowOnChangeImage?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"130px","//height":"auto"},attrs:{src:t.ShowOnChangeImage}}):t._e()]):a("span",["undefined"==t.form.avatar?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"130px"},attrs:{src:"../"+t.NoIconUrl}}):t._e(),t._v(" "),""===t.form.avatar||null===t.form.avatar?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"130px"},attrs:{src:"../"+t.NoIconUrl}}):""!=t.form.avatar?a("img",{staticClass:"img-fluid img-thumbnail focusImgOnHover",staticStyle:{width:"150px",height:"130px"},attrs:{src:t.form.avatar}}):t._e(),t._v(" "),t.deleteImageIcon?a("i",{staticClass:"far fa-times-circle",staticStyle:{cursor:"pointer",background:"#fff",padding:"4px 2px 2px 2px",color:"red","border-radius":"10px","margin-left":"-15px"},attrs:{title:"click to Delete"},on:{click:function(e){return t.deleteImage(t.form.id)}}}):t._e()])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"avatar"}}),t._v(" "),a("input",{ref:"avatar",staticClass:"form-control",attrs:{type:"file",name:"avatar"},on:{change:t.onImageChange}})])])])])])]),t._v(" "),a("div",{staticClass:"tab-pane fade",attrs:{id:"tabs-body-two",role:"tabpanel","aria-labelledby":"tab-two"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row form-group"},[t._m(12),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_gender,expression:"form.emp_gender"}],staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("emp_gender")},attrs:{id:"emp_gender",name:"emp_gender"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"emp_gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select Gender ..")]),t._v(" "),t._l(t.genders,(function(e){return a("option",{domProps:{value:e.name}},[t._v("\r\n                              "+t._s(e.name)+"\r\n                            ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_gender"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(13),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_dob,expression:"form.emp_dob"}],ref:"emp_dob",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("emp_dob")},attrs:{type:"date",name:"emp_dob",placeholder:"Date of birth"},domProps:{value:t.form.emp_dob},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_dob",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_dob"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(14),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_nid,expression:"form.emp_nid"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("emp_nid")},attrs:{type:"text",name:"emp_nid",placeholder:"National ID"},domProps:{value:t.form.emp_nid},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_nid",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_nid"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(15),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_passport,expression:"form.emp_passport"}],staticClass:"form-control",attrs:{type:"text",name:"emp_passport",placeholder:"Passport Number"},domProps:{value:t.form.emp_passport},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_passport",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(16),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_driving_license,expression:"form.emp_driving_license"}],staticClass:"form-control",attrs:{type:"text",name:"emp_driving_license",placeholder:"Driving License"},domProps:{value:t.form.emp_driving_license},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_driving_license",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(17),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_tin,expression:"form.emp_tin"}],staticClass:"form-control",attrs:{type:"text",name:"emp_tin",placeholder:"TIN"},domProps:{value:t.form.emp_tin},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_tin",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(18),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_father_name,expression:"form.emp_father_name"}],staticClass:"form-control",attrs:{type:"text",name:"emp_father_name",placeholder:"Employee Father Name"},domProps:{value:t.form.emp_father_name},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_father_name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(19),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_mother_name,expression:"form.emp_mother_name"}],staticClass:"form-control",attrs:{type:"text",name:"emp_mother_name",placeholder:"Employee Mother Name"},domProps:{value:t.form.emp_mother_name},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_mother_name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(20),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_wife_name,expression:"form.emp_wife_name"}],staticClass:"form-control",attrs:{type:"text",name:"emp_wife_name",placeholder:"Employee Wife Name"},domProps:{value:t.form.emp_wife_name},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_wife_name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(21),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_Present_address,expression:"form.emp_Present_address"}],staticClass:"form-control",attrs:{name:"emp_Present_address",placeholder:"Present Address"},domProps:{value:t.form.emp_Present_address},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_Present_address",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(22),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.emp_permanent_address,expression:"form.emp_permanent_address"}],staticClass:"form-control",attrs:{name:"emp_permanent_address",placeholder:"Permanent Address"},domProps:{value:t.form.emp_permanent_address},on:{input:function(e){e.target.composing||t.$set(t.form,"emp_permanent_address",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(23),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("vue-editor",{staticClass:"form-control-",attrs:{name:"emp_desc",placeholder:"Employee Details"},model:{value:t.form.emp_desc,callback:function(e){t.$set(t.form,"emp_desc",e)},expression:"form.emp_desc"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(24),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("vue-editor",{staticClass:"form-control-",attrs:{name:"emp_qualification",placeholder:"Qualification"},model:{value:t.form.emp_qualification,callback:function(e){t.$set(t.form,"emp_qualification",e)},expression:"form.emp_qualification"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(25),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("vue-editor",{staticClass:"form-control-",attrs:{name:"emp_experience",placeholder:"Experience"},model:{value:t.form.emp_experience,callback:function(e){t.$set(t.form,"emp_experience",e)},expression:"form.emp_experience"}})],1)]),t._v(" "),a("div",{staticClass:"row form-group"},[t._m(26),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("vue-editor",{staticClass:"form-control-",attrs:{name:"emp_previous_job_history",placeholder:"Job History"},model:{value:t.form.emp_previous_job_history,callback:function(e){t.$set(t.form,"emp_previous_job_history",e)},expression:"form.emp_previous_job_history"}})],1)])])])]),t._v(" "),a("div",{staticClass:"tab-pane fade",attrs:{id:"tabs-body-three",role:"tabpanel","aria-labelledby":"tab-three"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table-sm table table-striped"},[t._m(27),t._v(" "),t._l(t.form.emp_payrolls,(function(e,s){return a("tr",{key:s},[a("td",[a("div",{staticClass:"form-group-"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.payroll_status,expression:"input.payroll_status"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("emp_payrolls."+[s]+".payroll_status")},attrs:{id:"",name:"payroll_status"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"payroll_status",a.target.multiple?s:s[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select status")]),t._v(" "),t._l(t.empPayrolls,(function(e){return a("option",{domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_payrolls."+[s]+".payroll_status"}})],1)]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.basic_salary,expression:"input.basic_salary"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("emp_payrolls."+[s]+".basic_salary")},attrs:{type:"number",name:"basic_salary"},domProps:{value:e.basic_salary},on:{input:function(a){a.target.composing||t.$set(e,"basic_salary",a.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"emp_payrolls."+[s]+".basic_salary"}})],1)]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.house_rent,expression:"input.house_rent"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"house_rent"},domProps:{value:e.house_rent},on:{input:function(a){a.target.composing||t.$set(e,"house_rent",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medical_allowance,expression:"input.medical_allowance"}],staticClass:"form-control form-control-sm",attrs:{type:"text",name:"medical_allowance"},domProps:{value:e.medical_allowance},on:{input:function(a){a.target.composing||t.$set(e,"medical_allowance",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ta_daily,expression:"input.ta_daily"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"ta_daily"},domProps:{value:e.ta_daily},on:{input:function(a){a.target.composing||t.$set(e,"ta_daily",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ta_monthly,expression:"input.ta_monthly"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"ta_monthly"},domProps:{value:e.ta_monthly},on:{input:function(a){a.target.composing||t.$set(e,"ta_monthly",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.da_daily,expression:"input.da_daily"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"da_daily"},domProps:{value:e.da_daily},on:{input:function(a){a.target.composing||t.$set(e,"da_daily",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.da_monthly,expression:"input.da_monthly"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"da_monthly"},domProps:{value:e.da_monthly},on:{input:function(a){a.target.composing||t.$set(e,"da_monthly",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.over_time,expression:"input.over_time"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"over_time"},domProps:{value:e.over_time},on:{input:function(a){a.target.composing||t.$set(e,"over_time",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.bonuse_percent,expression:"input.bonuse_percent"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"bonuse_percent"},domProps:{value:e.bonuse_percent},on:{input:function(a){a.target.composing||t.$set(e,"bonuse_percent",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.increment_percent,expression:"input.increment_percent"}],staticClass:"form-control form-control-sm",attrs:{type:"number",name:"increment_percent"},domProps:{value:e.increment_percent},on:{input:function(a){a.target.composing||t.$set(e,"increment_percent",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.payroll_desc,expression:"input.payroll_desc"}],staticClass:"form-control form-control-sm",attrs:{type:"text",name:"payroll_desc"},domProps:{value:e.payroll_desc},on:{input:function(a){a.target.composing||t.$set(e,"payroll_desc",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.starting_date,expression:"input.starting_date"}],staticClass:"form-control form-control-sm",attrs:{type:"date",name:"starting_date",placeholder:"End Date"},domProps:{value:e.starting_date},on:{input:function(a){a.target.composing||t.$set(e,"starting_date",a.target.value)}}})])]),t._v(" "),a("td",[a("div",{staticClass:"form-group-"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s||!s&&t.form.emp_payrolls.length>1,expression:"key || ( !key && form.emp_payrolls.length > 1)"}],staticClass:"fas fa-minus-circle danger pointer",attrs:{title:"Remove"},on:{click:function(e){return e.preventDefault(),t.remove_payroll(s)}}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:s==t.form.emp_payrolls.length-1,expression:"key == form.emp_payrolls.length-1"}],staticClass:"fas fa-plus-circle green pointer",attrs:{title:"Add"},on:{click:function(e){return e.preventDefault(),t.add_payroll(s)}}})])])])}))],2)])])])])])])])]),t._v(" "),a("div",{staticClass:"row mr-4"},[a("div",{staticClass:"col-12  text-right"},[a("button",{staticClass:"btn btn-primary btn-flat btn-sm ",attrs:{type:"submit"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[a("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[a("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])]),t._v(" "),a("div",{staticClass:"card-footer"})])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header p-0 border-bottom-0"},[a("ul",{staticClass:"nav nav-tabs",attrs:{id:"custom-tabs",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"tab-one","data-toggle":"pill",href:"#tabs-body-one",role:"tab","aria-controls":"tabs-body-one","aria-selected":"true"}},[t._v("Employment")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"tabs-two","data-toggle":"pill",href:"#tabs-body-two",role:"tab","aria-controls":"tabs-body-two","aria-selected":"false"}},[t._v("Personal")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"tabs-three","data-toggle":"pill",href:"#tabs-body-three",role:"tab","aria-controls":"tabs-body-three","aria-selected":"false"}},[t._v("Payrolls")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Employee Name *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Job Title *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Job Type *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Job status *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Job Status *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Branch *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Join Date *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Select Department *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Phone *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v(" +88 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Email *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Gender *")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("DOB ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("NID")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Passport")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Driving License")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("TIN")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Father Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Mother Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Wife Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Present Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Permanent Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Employee Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Qualification")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Experience")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2 text-right"},[a("label",{staticClass:"pt-2"},[t._v("Previous Job History")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"mb-2"},[a("th",{attrs:{width:"6%"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{width:"7%",title:"Basic salary"}},[t._v("Basic")]),t._v(" "),a("th",{attrs:{width:"7%",title:"House Rent"}},[t._v("H.Rent")]),t._v(" "),a("th",{attrs:{width:"6%",title:"Madical Allowance per month"}},[t._v("Medical")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Transport Allowance Daily"}},[t._v("TA.D")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Transport Allowance Monthly"}},[t._v("TA.M")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Daily Allowance Daily"}},[t._v("DA.D")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Daily Allowance Monthly"}},[t._v("DA.M")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Over time rate per hour"}},[t._v("O.T")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Bonues Percent"}},[t._v("B.%")]),t._v(" "),a("th",{attrs:{width:"5%",title:"Salary Increment Percent"}},[t._v("Inc.%")]),t._v(" "),a("th",{attrs:{width:"10%",title:"Details"}},[t._v("Details")]),t._v(" "),a("th",{attrs:{width:"1%",title:"Starting From"}},[t._v("S.Date")]),t._v(" "),a("th",{attrs:{width:"1%"}},[a("strong",[t._v("...")])])])}],!1,null,null,null).exports},51900:(t,e,a)=>{"use strict";function s(t,e,a,s,r,o,i,l){var n,m="function"==typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=a,m._compiled=!0),s&&(m.functional=!0),o&&(m._scopeId="data-v-"+o),i?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},m._ssrRegister=n):r&&(n=l?function(){r.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(m.functional){m._injectStyles=n;var c=m.render;m.render=function(t,e){return n.call(e),c(t,e)}}else{var p=m.beforeCreate;m.beforeCreate=p?[].concat(p,n):[n]}return{exports:t,options:m}}a.d(e,{Z:()=>s})}}]);
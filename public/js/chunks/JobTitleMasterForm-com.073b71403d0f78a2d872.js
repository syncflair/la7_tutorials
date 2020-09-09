(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{337:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{editMode:!1,form:new Form({id:"",job_title_name:"",job_title_desc:"",is_enabled:""})}},methods:{addData:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.job_title_name.focus()}),600)},editData:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/JobTitle-Info").then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.success(a.success),t.$Progress.finish(),t.form.reset(),$("#FormModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/JobTitle-Info/"+this.form.id).then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.editMode=!1,$("#FormModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editData",(function(e){t.editData(e)})),FireEvent.$on("addData",(function(){t.addData()}))}},o=a(0),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"modal fade",attrs:{id:"FormModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:""}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Job Title")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Job Title")])]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[a("div",{staticClass:"modal-body pt-0"},[a("div",{staticClass:"card--"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label",attrs:{for:"job_title_name"}},[t._v("Job Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.job_title_name,expression:"form.job_title_name"}],ref:"job_title_name",staticClass:"form-control form-control-sm-",class:{"is-invalid":t.form.errors.has("job_title_name")},attrs:{type:"text",name:"job_title_name",placeholder:"Job Title"},domProps:{value:t.form.job_title_name},on:{input:function(e){e.target.composing||t.$set(t.form,"job_title_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"job_title_name"}})],1),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label",attrs:{for:"job_title_desc"}},[t._v("Details")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.job_title_desc,expression:"form.job_title_desc"}],ref:"job_title_desc",staticClass:"form-control form-control-sm-",attrs:{name:"job_title_desc",placeholder:"Job Title details"},domProps:{value:t.form.job_title_desc},on:{input:function(e){e.target.composing||t.$set(t.form,"job_title_desc",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var a=t.form.is_enabled,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=t._i(a,"1");s.checked?i<0&&t.$set(t.form,"is_enabled",a.concat(["1"])):i>-1&&t.$set(t.form,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.form,"is_enabled",o)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[a("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[a("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);
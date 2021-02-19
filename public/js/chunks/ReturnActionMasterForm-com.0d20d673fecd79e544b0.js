(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{384:function(t,e,a){"use strict";a.r(e);var r={data:function(){return{editMode:!1,form:new Form({id:"",return_action_name:"",return_action_desc:"",is_enabled:""})}},methods:{addReturnAction:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.return_action_name.focus()}),600)},editReturnAction:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/return-action-info").then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.success(a.success),t.$Progress.finish(),t.form.reset(),$("#formModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/return-action-info/"+this.form.id).then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.editMode=!1,$("#formModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editReturnAction",(function(e){t.editReturnAction(e)})),FireEvent.$on("addReturnAction",(function(){t.addReturnAction()}))}},s=a(0),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"modal fade",attrs:{id:"formModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:""}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Return action")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Return action")])]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[a("div",{staticClass:"modal-body pt-0"},[a("div",{staticClass:"card--"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Return action *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.return_action_name,expression:"form.return_action_name"}],ref:"return_action_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("return_action_name")},attrs:{type:"text",name:"return_action_name",placeholder:"Return action"},domProps:{value:t.form.return_action_name},on:{input:function(e){e.target.composing||t.$set(t.form,"return_action_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"return_action_name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Details")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.return_action_desc,expression:"form.return_action_desc"}],ref:"return_action_desc",staticClass:"form-control form-control-sm",attrs:{name:"return_action_desc",placeholder:"Details"},domProps:{value:t.form.return_action_desc},on:{input:function(e){e.target.composing||t.$set(t.form,"return_action_desc",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var a=t.form.is_enabled,r=e.target,s=!!r.checked;if(Array.isArray(a)){var o=t._i(a,"1");r.checked?o<0&&t.$set(t.form,"is_enabled",a.concat(["1"])):o>-1&&t.$set(t.form,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.form,"is_enabled",s)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[a("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[a("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[8648],{54965:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});const a={data:function(){return{editMode:!1,form:new Form({id:"",us_name:"",us_desc:""})}},methods:{addUserStatus:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.us_name.focus()}),600)},editUserStatus:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/user-status-info").then((function(s){var e=s.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.success(e.success),t.$Progress.finish(),t.form.reset(),$("#UserStatusModal").modal("hide")),e.errors&&toastr.warning(e.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/user-status-info/"+this.form.id).then((function(s){var e=s.data;e.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(e.success),t.form.reset(),t.editMode=!1,$("#UserStatusModal").modal("hide")),e.errors&&toastr.warning(e.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editUserStatus",(function(s){t.editUserStatus(s)})),FireEvent.$on("addUserStatus",(function(){t.addUserStatus()}))}};const r=(0,e(51900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("div",{staticClass:"modal fade",attrs:{id:"UserStatusModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[e("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add User Status")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update User Status")])]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(s){return t.ClearForm()}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[e("div",{staticClass:"modal-body pt-0"},[e("div",{staticClass:"card--"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("User Status *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.us_name,expression:"form.us_name"}],ref:"us_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("us_name")},attrs:{type:"text",name:"us_name",placeholder:"User Status"},domProps:{value:t.form.us_name},on:{input:function(s){s.target.composing||t.$set(t.form,"us_name",s.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"us_name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Details")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.us_desc,expression:"form.us_desc"}],ref:"us_desc",staticClass:"form-control form-control-sm",attrs:{name:"us_desc",placeholder:"User Status details"},domProps:{value:t.form.us_desc},on:{input:function(s){s.target.composing||t.$set(t.form,"us_desc",s.target.value)}}})])])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[e("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[e("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null).exports}}]);
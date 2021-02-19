(self.webpackChunk=self.webpackChunk||[]).push([[5618],{62106:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});const o={data:function(){return{editMode:!1,form:new Form({id:"",bank_account_code:"",bank_account_name:"",bank_account_number:"",bank_name:"",bank_branch:"",account_opening_balance:"",account_open_date:"",bank_account_desc:"",is_enabled:""})}},methods:{addBankAccount:function(){var a=this;this.editMode=!1,this.form.reset(),this.form.account_open_date=(new Date).toISOString().substr(0,10),setTimeout((function(){a.$refs.bank_account_name.focus()}),600)},editBankAccount:function(a){this.editMode=!0,this.form.reset(),this.form.fill(a)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var a=this;this.$Progress.start(),this.form.post("/spa/BankAccount-Info").then((function(e){var t=e.data;t.success&&(FireEvent.$emit("AfterChange"),toastr.success(t.success),a.$Progress.finish(),a.form.reset(),$("#formModal").modal("hide")),t.errors&&toastr.warning(t.errors)})).catch((function(){a.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var a=this;this.$Progress.start(),this.form.put("/spa/BankAccount-Info/"+this.form.id).then((function(e){var t=e.data;t.success&&(FireEvent.$emit("AfterChange"),a.$Progress.finish(),toastr.success(t.success),a.form.reset(),a.editMode=!1,$("#formModal").modal("hide")),t.errors&&toastr.warning(t.errors)})).catch((function(){a.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var a=this;FireEvent.$on("editBankAccount",(function(e){a.editBankAccount(e)})),FireEvent.$on("addBankAccount",(function(){a.addBankAccount()}))}};const n=(0,t(51900).Z)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("span",[t("div",{staticClass:"modal fade",attrs:{id:"AdjustBankAccountModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[t("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:""}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!a.editMode,expression:"!editMode"}]},[a._v("Adjust Bank Account Form")]),a._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.editMode,expression:"editMode"}]},[a._v("Update - "+a._s(a.form.bank_account_name))])]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return a.ClearForm()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("form",{on:{submit:function(e){e.preventDefault(),a.editMode?a.updateFormData():a.storeFormData()}}},[t("div",{staticClass:"modal-body pt-0"},[t("div",{staticClass:"card--"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 col-sm-12"},[t("div",{staticClass:"form-group"},[t("label",[a._v("Account Name*")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_account_name,expression:"form.bank_account_name"}],ref:"bank_account_name",staticClass:"form-control form-control-sm",class:{"is-invalid":a.form.errors.has("bank_account_name")},attrs:{type:"text",name:"bank_account_name",placeholder:"Account Name"},domProps:{value:a.form.bank_account_name},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_account_name",e.target.value)}}}),a._v(" "),t("has-error",{attrs:{form:a.form,field:"bank_account_name"}})],1),a._v(" "),t("div",{staticClass:"form-group"},[t("label",[a._v("Account Number *")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_account_number,expression:"form.bank_account_number"}],ref:"bank_account_number",staticClass:"form-control form-control-sm",class:{"is-invalid":a.form.errors.has("bank_account_number")},attrs:{type:"text",name:"bank_account_number",placeholder:"Account Number"},domProps:{value:a.form.bank_account_number},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_account_number",e.target.value)}}}),a._v(" "),t("has-error",{attrs:{form:a.form,field:"bank_account_number"}})],1),a._v(" "),t("div",{staticClass:"form-group"},[t("label",[a._v("Bank Name *")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_name,expression:"form.bank_name"}],ref:"bank_name",staticClass:"form-control form-control-sm",class:{"is-invalid":a.form.errors.has("bank_name")},attrs:{type:"text",name:"bank_name",placeholder:"Bank Name"},domProps:{value:a.form.bank_name},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_name",e.target.value)}}}),a._v(" "),t("has-error",{attrs:{form:a.form,field:"bank_name"}})],1),a._v(" "),t("div",{staticClass:"form-group"},[t("label",[a._v("Bank branch *")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_branch,expression:"form.bank_branch"}],ref:"bank_branch",staticClass:"form-control form-control-sm",class:{"is-invalid":a.form.errors.has("bank_branch")},attrs:{type:"text",name:"bank_branch",placeholder:"Bank Branch"},domProps:{value:a.form.bank_branch},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_branch",e.target.value)}}}),a._v(" "),t("has-error",{attrs:{form:a.form,field:"bank_branch"}})],1),a._v(" "),t("div",{staticClass:"form-group"},[t("label",[a._v("Oppening Balance")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.account_opening_balance,expression:"form.account_opening_balance"}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"1",step:"any",name:"account_opening_balance"},domProps:{value:a.form.account_opening_balance},on:{input:function(e){e.target.composing||a.$set(a.form,"account_opening_balance",e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-md-6 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",[a._v("Oppening Date *")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.account_open_date,expression:"form.account_open_date"}],staticClass:"form-control form-control-sm",attrs:{type:"date",name:"account_open_date"},domProps:{value:a.form.account_open_date},on:{input:function(e){e.target.composing||a.$set(a.form,"account_open_date",e.target.value)}}})]),a._v(" "),t("div",{staticClass:"form-group"},[t("label",[a._v("Account Details")]),a._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_account_desc,expression:"form.bank_account_desc"}],ref:"bank_account_desc",staticClass:"form-control",attrs:{name:"bank_account_desc",placeholder:"Details"},domProps:{value:a.form.bank_account_desc},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_account_desc",e.target.value)}}})]),a._v(" "),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(a.form.is_enabled)?a._i(a.form.is_enabled,"1")>-1:a.form.is_enabled},on:{change:function(e){var t=a.form.is_enabled,o=e.target,n=!!o.checked;if(Array.isArray(t)){var r=a._i(t,"1");o.checked?r<0&&a.$set(a.form,"is_enabled",t.concat(["1"])):r>-1&&a.$set(a.form,"is_enabled",t.slice(0,r).concat(t.slice(r+1)))}else a.$set(a.form,"is_enabled",n)}}}),a._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[a._v("Is Active")])]),a._v(" "),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bank_account_code,expression:"form.bank_account_code"}],ref:"bank_account_code",staticClass:"form-control form-control-sm",attrs:{type:"hidden",name:"bank_account_code",readonly:"",min:"0",step:".01",placeholder:"Ex. BA-01"},domProps:{value:a.form.bank_account_code},on:{input:function(e){e.target.composing||a.$set(a.form,"bank_account_code",e.target.value)}}})])])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return a.ClearForm()}}},[a._v("Close")]),a._v(" "),t("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!a.editMode,expression:"!editMode"}]},[t("i",{staticClass:"fas fa-save"}),a._v(" Save")]),a._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.editMode,expression:"editMode"}]},[t("i",{staticClass:"far fa-edit"}),a._v(" Update")])])])])])])])])}),[],!1,null,null,null).exports}}]);
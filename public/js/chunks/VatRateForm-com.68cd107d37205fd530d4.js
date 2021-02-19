(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{362:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{editMode:!1,VatTypes:[{name:"Percent"},{name:"Fixed"}],form:new Form({id:"",vat_name:"",vat_code:"",vat_rate:"",vat_desc:"",vat_type:"",is_enabled:""})}},methods:{addVatRate:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.vat_name.focus()}),600)},editVatRate:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/VatRate-Info").then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.success(a.success),t.$Progress.finish(),t.form.reset(),$("#VatRateModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/VatRate-Info/"+this.form.id).then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.editMode=!1,$("#VatRateModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editVatRate",(function(e){t.editVatRate(e)})),FireEvent.$on("addVatRate",(function(){t.addVatRate()}))}},r=a(0),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"modal fade",attrs:{id:"VatRateModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:""}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Vat Rate")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Vat Rate")])]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[a("div",{staticClass:"modal-body pt-0"},[a("div",{staticClass:"card--"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Vat Title *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vat_name,expression:"form.vat_name"}],ref:"vat_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("vat_name")},attrs:{type:"text",name:"vat_name",placeholder:"Vat Title"},domProps:{value:t.form.vat_name},on:{input:function(e){e.target.composing||t.$set(t.form,"vat_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vat_name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Vat Code")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vat_code,expression:"form.vat_code"}],ref:"vat_code",staticClass:"form-control  form-control-sm",class:{"is-invalid":t.form.errors.has("vat_code")},attrs:{type:"text",name:"vat_code",placeholder:"Enter Vat code"},domProps:{value:t.form.vat_code},on:{input:function(e){e.target.composing||t.$set(t.form,"vat_code",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vat_code"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Vat Rate *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vat_rate,expression:"form.vat_rate"}],ref:"vat_rate",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("vat_rate")},attrs:{type:"text",name:"vat_rate",placeholder:"Enter Vat Rate"},domProps:{value:t.form.vat_rate},on:{input:function(e){e.target.composing||t.$set(t.form,"vat_rate",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vat_rate"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"role_id"}},[t._v("Vat Type *")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.vat_type,expression:"form.vat_type"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("vat_type")},attrs:{id:"vat_type",name:"vat_type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"vat_type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select Vat Type ..")]),t._v(" "),t._l(t.VatTypes,(function(e){return a("option",{domProps:{value:e.name}},[t._v("\r\n\t\t                  \t"+t._s(e.name)+"\r\n\t\t                  ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vat_type"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Details")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.vat_desc,expression:"form.vat_desc"}],ref:"vat_desc",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("vat_desc")},attrs:{name:"vat_desc",placeholder:"Length details"},domProps:{value:t.form.vat_desc},on:{input:function(e){e.target.composing||t.$set(t.form,"vat_desc",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vat_desc"}})],1),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var a=t.form.is_enabled,s=e.target,r=!!s.checked;if(Array.isArray(a)){var o=t._i(a,"1");s.checked?o<0&&t.$set(t.form,"is_enabled",a.concat(["1"])):o>-1&&t.$set(t.form,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.form,"is_enabled",r)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[a("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[a("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
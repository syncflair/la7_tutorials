(self.webpackChunk=self.webpackChunk||[]).push([[5045],{36314:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={data:function(){return{editMode:!1,form:new Form({id:"",attribute_value:"",attribute_id:"",is_enabled:""})}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(20629).rn)("commonStoreForAll",["AllAttributes"])),methods:{addAttribValue:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.attribute_value.focus()}),600)},editAttribValue:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/AttributeValue-Info").then((function(e){var r=e.data;r.success&&(FireEvent.$emit("AfterChange"),toastr.success(r.success),t.$Progress.finish(),t.form.reset(),$("#formModal").modal("hide")),r.errors&&toastr.warning(r.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/AttributeValue-Info/"+this.form.id).then((function(e){var r=e.data;r.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(r.success),t.form.reset(),t.editMode=!1,$("#formModal").modal("hide")),r.errors&&toastr.warning(r.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;this.$store.dispatch("commonStoreForAll/fetchAttributeList"),FireEvent.$on("editAttribValue",(function(e){t.editAttribValue(e)})),FireEvent.$on("addAttribValue",(function(){t.addAttribValue()}))}};const o=(0,r(51900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("div",{staticClass:"modal fade",attrs:{id:"formModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[r("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:""}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Attribute Value")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Attribute Value")])]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[r("div",{staticClass:"modal-body pt-0"},[r("div",{staticClass:"card--"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Attribute Value *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.attribute_value,expression:"form.attribute_value"}],ref:"attribute_value",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("attribute_value")},attrs:{type:"text",name:"attribute_value",placeholder:"Attribute Value"},domProps:{value:t.form.attribute_value},on:{input:function(e){e.target.composing||t.$set(t.form,"attribute_value",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"attribute_value"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role_id"}},[t._v("Attribute *")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.attribute_id,expression:"form.attribute_id"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("attribute_id")},attrs:{id:"attribute_id",name:"attribute_id"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"attribute_id",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select Attribute ..")]),t._v(" "),t._l(t.AllAttributes,(function(e){return r("option",{domProps:{value:e.id}},[t._v("\r\n\t\t                  \t"+t._s(e.attribute_name)+"\r\n\t\t                  ")])}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"attribute_id"}})],1),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var r=t.form.is_enabled,a=e.target,s=!!a.checked;if(Array.isArray(r)){var i=t._i(r,"1");a.checked?i<0&&t.$set(t.form,"is_enabled",r.concat(["1"])):i>-1&&t.$set(t.form,"is_enabled",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"is_enabled",s)}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])])])])])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[r("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[r("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null).exports}}]);
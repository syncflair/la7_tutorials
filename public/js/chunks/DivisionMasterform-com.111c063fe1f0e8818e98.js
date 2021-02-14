(self.webpackChunk=self.webpackChunk||[]).push([[9962],{81015:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const r={data:function(){return{editMode:!1,form:new Form({id:"",division_name:"",division_name_lang:"",division_desc:"",country_id:""})}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,i(20629).rn)("commonStoreForAll",["Countries"])),methods:{addDivision:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.division_name.focus()}),600)},editDivision:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/Division-Info").then((function(e){var i=e.data;i.success&&(FireEvent.$emit("AfterChange"),toastr.success(i.success),t.$Progress.finish(),t.form.reset(),$("#DivisionModal").modal("hide")),i.errors&&toastr.warning(i.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/Division-Info/"+this.form.id).then((function(e){var i=e.data;i.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(i.success),t.form.reset(),t.editMode=!1,$("#DivisionModal").modal("hide")),i.errors&&toastr.warning(i.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;this.$store.dispatch("commonStoreForAll/fetchCountryList"),FireEvent.$on("editDivision",(function(e){t.editDivision(e)})),FireEvent.$on("addDivision",(function(){t.addDivision()}))}};const a=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("div",{staticClass:"modal fade",attrs:{id:"DivisionModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[i("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title",attrs:{id:""}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Division")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Division")])]),t._v(" "),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),i("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[i("div",{staticClass:"modal-body pt-0"},[i("div",{staticClass:"card--"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12 col-sm-12"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Division Name *")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.division_name,expression:"form.division_name"}],ref:"division_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("division_name")},attrs:{type:"text",name:"division_name",placeholder:"Division Name"},domProps:{value:t.form.division_name},on:{input:function(e){e.target.composing||t.$set(t.form,"division_name",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"division_name"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Division Name (BN)")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.division_name_lang,expression:"form.division_name_lang"}],ref:"division_name_lang",staticClass:"form-control  form-control-sm",class:{"is-invalid":t.form.errors.has("division_name_lang")},attrs:{type:"text",name:"division_name_lang",placeholder:"Enter Division Name (BN) "},domProps:{value:t.form.division_name_lang},on:{input:function(e){e.target.composing||t.$set(t.form,"division_name_lang",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"division_name_lang"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"role_id"}},[t._v("Country*")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.country_id,expression:"form.country_id"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("country_id")},attrs:{id:"country_id",name:"country_id"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"country_id",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Select Country ..")]),t._v(" "),t._l(t.Countries,(function(e){return i("option",{domProps:{value:e.id}},[t._v("\r\n\t\t                  \t"+t._s(e.country_name)+"\r\n\t\t                  ")])}))],2),t._v(" "),i("has-error",{attrs:{form:t.form,field:"country_id"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Details")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.division_desc,expression:"form.division_desc"}],ref:"division_desc",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("division_desc")},attrs:{name:"division_desc",placeholder:"Details"},domProps:{value:t.form.division_desc},on:{input:function(e){e.target.composing||t.$set(t.form,"division_desc",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"division_desc"}})],1)])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[i("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[i("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null).exports}}]);
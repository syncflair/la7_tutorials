(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{374:function(t,i,e){"use strict";e.r(i);var r=e(1);function s(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,r)}return e}function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var o={data:function(){return{editMode:!1,form:new Form({id:"",district_name:"",district_name_lang:"",district_desc:"",division_id:""})}},computed:function(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(Object(e),!0).forEach((function(i){a(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}({},Object(r.b)("commonStoreForAll",["Divisions"])),methods:{addDistrict:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.district_name.focus()}),600)},editDistrict:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/District-Info").then((function(i){var e=i.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.success(e.success),t.$Progress.finish(),t.form.reset(),$("#DistrictModal").modal("hide")),e.errors&&toastr.warning(e.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/District-Info/"+this.form.id).then((function(i){var e=i.data;e.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(e.success),t.form.reset(),t.editMode=!1,$("#DistrictModal").modal("hide")),e.errors&&toastr.warning(e.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;this.$store.dispatch("commonStoreForAll/fetchDivisionList"),FireEvent.$on("editDistrict",(function(i){t.editDistrict(i)})),FireEvent.$on("addDistrict",(function(){t.addDistrict()}))}},n=e(0),d=Object(n.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",[e("div",{staticClass:"modal fade",attrs:{id:"DistrictModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[e("div",{staticClass:"modal-dialog modal-lg-",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add District")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update District")])]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(i){return t.ClearForm()}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("form",{on:{submit:function(i){i.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[e("div",{staticClass:"modal-body pt-0"},[e("div",{staticClass:"card--"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Division Name *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.district_name,expression:"form.district_name"}],ref:"district_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("district_name")},attrs:{type:"text",name:"district_name",placeholder:"Division Name"},domProps:{value:t.form.district_name},on:{input:function(i){i.target.composing||t.$set(t.form,"district_name",i.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"district_name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Division Name (BN)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.district_name_lang,expression:"form.district_name_lang"}],ref:"district_name_lang",staticClass:"form-control  form-control-sm",class:{"is-invalid":t.form.errors.has("district_name_lang")},attrs:{type:"text",name:"district_name_lang",placeholder:"Enter Division Name (BN) "},domProps:{value:t.form.district_name_lang},on:{input:function(i){i.target.composing||t.$set(t.form,"district_name_lang",i.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"district_name_lang"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"role_id"}},[t._v("Division*")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.division_id,expression:"form.division_id"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("division_id")},attrs:{id:"division_id",name:"division_id"},on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"division_id",i.target.multiple?e:e[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Select Division ..")]),t._v(" "),t._l(t.Divisions,(function(i){return e("option",{domProps:{value:i.id}},[t._v("\r\n\t\t                  \t"+t._s(i.division_name)+"\r\n\t\t                  ")])}))],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"division_id"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Details")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.district_desc,expression:"form.district_desc"}],ref:"district_desc",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("district_desc")},attrs:{name:"district_desc",placeholder:"Details"},domProps:{value:t.form.district_desc},on:{input:function(i){i.target.composing||t.$set(t.form,"district_desc",i.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"district_desc"}})],1)])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(i){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[e("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[e("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);i.default=d.exports}}]);
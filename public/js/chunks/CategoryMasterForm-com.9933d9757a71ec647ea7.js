(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{302:function(t,e,a){"use strict";a.r(e);var r=a(1);function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",ShowOnChangeImage:null,editMode:!1,form:new Form({id:"",cat_name:"",cat_desc:"",parent_id:"",is_enabled:"",cat_img:"",cat_translation:[]})}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.b)("CategoryMasterStore",["Categories"]),{},Object(r.b)("commonStoreForAll",["allLanguages"])),watch:{},methods:{pushToLanguageTranslationArray:function(){for(var t=0;t<this.allLanguages.length;t++)this.form.cat_translation.push({language_id:this.allLanguages[t].id,lang_code:this.allLanguages[t].lang_code,category_name:"",category_desc:""})},onImageChange:function(t){var e=this,a=t.target.files[0];this.ShowOnChangeImage=URL.createObjectURL(a);var r=new FileReader;a.size>512e3?toastr.warning("Please select file size within 500kb"):(r.onloadend=function(t){e.form.cat_img=r.result},r.readAsDataURL(a))},addCategory:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.cat_name.focus()}),600)},editCategory:function(t){var e=this;this.editMode=!0,this.form.reset(),this.form.fill(t),this.$refs.cat_name.focus(),null===this.form.cat_translation&&(this.form.cat_translation=[],setTimeout((function(){e.pushToLanguageTranslationArray()}),1e3))},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/CategoryMaster-Info").then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.success(a.success),t.$Progress.finish(),t.form.reset(),t.$refs.cat_img.value="",t.ShowOnChangeImage=null,$("#CategoryModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/CategoryMaster-Info/"+this.form.id).then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.$refs.cat_img.value="",t.ShowOnChangeImage=null,t.editMode=!1,$("#CategoryModal").modal("hide")),a.errors&&toastr.warning(a.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;this.$store.dispatch("commonStoreForAll/fetchLanguages"),FireEvent.$on("editCategory",(function(e){t.editCategory(e)})),FireEvent.$on("addCategory",(function(){t.addCategory(),t.pushToLanguageTranslationArray()}))},mounted:function(){}},n=a(0),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"modal fade",attrs:{id:"CategoryModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header \tpb-1"},[a("h5",{staticClass:"modal-title",attrs:{id:""}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Category")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Category")])]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[a("div",{staticClass:"modal-body pt-1 "},[a("div",{staticClass:"card--"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Category ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cat_name,expression:"form.cat_name"}],ref:"cat_name",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cat_name")},attrs:{type:"text",name:"cat_name",placeholder:"Category"},domProps:{value:t.form.cat_name},on:{input:function(e){e.target.composing||t.$set(t.form,"cat_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"cat_name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Select Parent")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.parent_id,expression:"form.parent_id"}],staticClass:"form-control",attrs:{name:"parent_id"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"parent_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v(" Select Parent ")]),t._v(" "),a("option",{domProps:{value:null}},[t._v("Parent ")]),t._v(" "),t._l(t.Categories,(function(e){return[a("option",{domProps:{value:e.id}},[a("span",[t._v(t._s(e.cat_name)+" ")])]),t._v(" "),t._l(e.child_category,(function(e){return[a("option",{domProps:{value:e.id}},[a("span",[t._v(" -- "+t._s(e.cat_name)+" ")])])]}))]}))],2)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat_desc"}},[t._v("Detials")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.cat_desc,expression:"form.cat_desc"}],ref:"cat_desc",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cat_desc")},attrs:{name:"cat_desc",placeholder:"Business Descsiption"},domProps:{value:t.form.cat_desc},on:{input:function(e){e.target.composing||t.$set(t.form,"cat_desc",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"cat_desc"}})],1),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],ref:"is_enabled",staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var a=t.form.is_enabled,r=e.target,s=!!r.checked;if(Array.isArray(a)){var o=t._i(a,"1");r.checked?o<0&&t.$set(t.form,"is_enabled",a.concat(["1"])):o>-1&&t.$set(t.form,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.form,"is_enabled",s)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])]),t._v(" "),a("div",{staticClass:"row pt-3"},[a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat_img"}},[t._v("Image")]),t._v(" "),a("input",{ref:"cat_img",staticClass:"form-control",attrs:{type:"file",name:"cat_img"},on:{change:t.onImageChange}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[null!=t.ShowOnChangeImage?a("span",[null!=t.ShowOnChangeImage?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:t.ShowOnChangeImage}}):t._e()]):a("span",["undefined"==t.form.cat_img?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:"../"+t.NoIconUrl}}):t._e(),t._v(" "),""===t.form.cat_img||null===t.form.cat_img?a("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:"../"+t.NoIconUrl}}):""!=t.form.cat_img?a("img",{staticClass:"img-fluid img-thumbnail focusImgOnHover",staticStyle:{width:"65px",height:"65px"},attrs:{src:t.form.cat_img}}):t._e()])])])]),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-12 mt-3"},[a("table",t._l(t.form.cat_translation,(function(e,r){return a("span",{key:r},[a("tr",[a("th",{staticStyle:{background:"rgba(0, 0, 0, 0.06)"},attrs:{colspan:"2"}},[a("div",{staticClass:"alert- alert-warning- text-center mb-0"},[t._v(t._s(e.lang_code))])])]),t._v(" "),a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.language_id,expression:"ct.language_id"}],attrs:{type:"hidden",name:"language_id[]"},domProps:{value:e.language_id},on:{input:function(a){a.target.composing||t.$set(e,"language_id",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lang_code,expression:"ct.lang_code"}],attrs:{type:"hidden",name:"lang_code[]"},domProps:{value:e.lang_code},on:{input:function(a){a.target.composing||t.$set(e,"lang_code",a.target.value)}}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat_img"}},[t._v("Category "+t._s(e.lang_code))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.category_name,expression:"ct.category_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("category_name")},attrs:{type:"text",name:"category_name[]"},domProps:{value:e.category_name},on:{input:function(a){a.target.composing||t.$set(e,"category_name",a.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"category_name"}})],1)]),t._v(" "),a("td",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat_img"}},[t._v("Detials "+t._s(e.lang_code))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.category_desc,expression:"ct.category_desc"}],staticClass:"form-control",attrs:{type:"text",name:"category_desc[]"},domProps:{value:e.category_desc},on:{input:function(a){a.target.composing||t.$set(e,"category_desc",a.target.value)}}})])])])])})),0)])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[a("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[a("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);e.default=c.exports}}]);
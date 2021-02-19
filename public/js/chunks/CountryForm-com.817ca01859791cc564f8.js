(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{370:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",ShowOnChangeImage:null,editMode:!1,form:new Form({id:"",country_name:"",iso_2:"",iso_3:"",phone_code:"",currency:"",country_flag:""})}},methods:{onImageChange:function(t){var e=this,o=t.target.files[0];this.ShowOnChangeImage=URL.createObjectURL(o);var r=new FileReader;o.size>512e3?toastr.warning("Please select file size within 500kb"):(r.onloadend=function(t){e.form.country_flag=r.result},r.readAsDataURL(o))},addCountry:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.country_name.focus()}),600)},editCountry:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/Country-Info").then((function(e){var o=e.data;o.success&&(FireEvent.$emit("AfterChange"),toastr.success(o.success),t.$Progress.finish(),t.form.reset(),t.$refs.country_flag.value="",t.ShowOnChangeImage=null,$("#countryModal").modal("hide")),o.errors&&toastr.warning(o.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/Country-Info/"+this.form.id).then((function(e){var o=e.data;o.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(o.success),t.form.reset(),t.editMode=!1,t.$refs.country_flag.value="",t.ShowOnChangeImage=null,$("#countryModal").modal("hide")),o.errors&&toastr.warning(o.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editCountry",(function(e){t.editCountry(e)})),FireEvent.$on("addCountry",(function(){t.addCountry()}))}},a=o(0),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[o("div",{staticClass:"modal fade",attrs:{id:"countryModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[o("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:""}},[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Currency")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Currency")])]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[o("div",{staticClass:"modal-body pt-0"},[o("div",{staticClass:"card--"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Country name *")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.country_name,expression:"form.country_name"}],ref:"country_name",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("country_name")},attrs:{type:"text",name:"country_name",placeholder:"Country name"},domProps:{value:t.form.country_name},on:{input:function(e){e.target.composing||t.$set(t.form,"country_name",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"country_name"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Phone Code")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone_code,expression:"form.phone_code"}],ref:"phone_code",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("phone_code")},attrs:{type:"text",name:"phone_code",placeholder:"Enter Phone Code"},domProps:{value:t.form.phone_code},on:{input:function(e){e.target.composing||t.$set(t.form,"phone_code",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"phone_code"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Currency Code")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.currency,expression:"form.currency"}],ref:"currency",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("currency")},attrs:{type:"text",name:"currency",placeholder:"Enter Currency Code"},domProps:{value:t.form.currency},on:{input:function(e){e.target.composing||t.$set(t.form,"currency",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"currency"}})],1)]),t._v(" "),o("div",{staticClass:"col-md-6 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("ISO 2")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.iso_2,expression:"form.iso_2"}],ref:"iso_2",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("iso_2")},attrs:{type:"text",name:"iso_2",placeholder:"Enter ISO 2"},domProps:{value:t.form.iso_2},on:{input:function(e){e.target.composing||t.$set(t.form,"iso_2",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"iso_2"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("ISO 3")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.iso_3,expression:"form.iso_3"}],ref:"iso_3",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("iso_3")},attrs:{type:"text",name:"iso_3",placeholder:"Enter ISO 3"},domProps:{value:t.form.iso_3},on:{input:function(e){e.target.composing||t.$set(t.form,"iso_3",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"iso_3"}})],1),t._v(" "),o("div",{staticClass:"row pt-3"},[o("div",{staticClass:"col-md-9"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"country_flag"}},[t._v("Image")]),t._v(" "),o("input",{ref:"country_flag",staticClass:"form-control",attrs:{type:"file",name:"country_flag"},on:{change:t.onImageChange}})])]),t._v(" "),o("div",{staticClass:"col-md-3"},[null!=t.ShowOnChangeImage?o("span",[null!=t.ShowOnChangeImage?o("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:t.ShowOnChangeImage}}):t._e()]):o("span",["undefined"==t.form.country_flag?o("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:"../"+t.NoIconUrl}}):t._e(),t._v(" "),""===t.form.country_flag||null===t.form.country_flag?o("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"65px",height:"65px"},attrs:{src:"../"+t.NoIconUrl}}):""!=t.form.country_flag?o("img",{staticClass:"img-fluid img-thumbnail focusImgOnHover",staticStyle:{width:"65px",height:"65px"},attrs:{src:"../"+t.form.country_flag}}):t._e()])])])])])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),o("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[o("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[o("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
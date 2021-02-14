(self.webpackChunk=self.webpackChunk||[]).push([[4591],{88927:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});const a={data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",ShowOnChangeImage:null,deleteImageIcon:!1,editMode:!1,form:new Form({id:"",brand_shop_title:"",brand_shop_desc:"",is_enabled:"",bs_img:""})}},methods:{onImageChange:function(t){var e=this,s=t.target.files[0];this.ShowOnChangeImage=URL.createObjectURL(s);var a=new FileReader;s.size>512e3?toastr.warning("Please select file size within 500kb"):(a.onloadend=function(t){e.form.bs_img=a.result},a.readAsDataURL(s))},addBrandShop:function(){var t=this;this.editMode=!1,this.form.reset(),setTimeout((function(){t.$refs.brand_shop_title.focus()}),600)},editBrandShop:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t),null!=t.bs_img&&(this.deleteImageIcon=!0)},ClearForm:function(){this.editMode=!1,this.form.reset(),this.form.clear()},storeFormData:function(){var t=this;this.$Progress.start(),this.form.post("/spa/BrandShop-Info").then((function(e){var s=e.data;s.success&&(FireEvent.$emit("AfterChange"),toastr.success(s.success),t.$Progress.finish(),t.form.reset(),t.$refs.bs_img.value="",t.ShowOnChangeImage=null,$("#formModal").modal("hide")),s.errors&&toastr.warning(s.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},updateFormData:function(){var t=this;this.$Progress.start(),this.form.put("/spa/BrandShop-Info/"+this.form.id).then((function(e){var s=e.data;s.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(s.success),t.form.reset(),t.editMode=!1,t.$refs.bs_img.value="",t.ShowOnChangeImage=null,$("#formModal").modal("hide")),s.errors&&toastr.warning(s.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},deleteImage:function(t){var e=this;this.$Progress.start(),axios.post("/spa/BrandShop-Info-DeleteImage/"+t).then((function(t){var s=t.data;e.deleteImageIcon=!1,e.form.bs_img=null,e.$Progress.finish(),toastr.success(s.success)})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("editBrandShop",(function(e){t.editBrandShop(e)})),FireEvent.$on("addBrandShop",(function(){t.addBrandShop()}))}};const i=(0,s(51900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"modal fade",attrs:{id:"formModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true","data-backdrop":"static"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:""}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[t._v("Add Brand Shop")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[t._v("Update Brand Shop")])]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.ClearForm()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateFormData():t.storeFormData()}}},[s("div",{staticClass:"modal-body pt-0"},[s("div",{staticClass:"card--"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9 col-sm-12"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Brand Shop Name *")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.brand_shop_title,expression:"form.brand_shop_title"}],ref:"brand_shop_title",staticClass:"form-control form-control-sm",class:{"is-invalid":t.form.errors.has("brand_shop_title")},attrs:{type:"text",name:"brand_shop_title",placeholder:"Brand Shop Name"},domProps:{value:t.form.brand_shop_title},on:{input:function(e){e.target.composing||t.$set(t.form,"brand_shop_title",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"brand_shop_title"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Details")]),t._v(" "),s("vue-editor",{staticClass:"form-control-",attrs:{name:"brand_shop_desc",placeholder:"Details"},model:{value:t.form.brand_shop_desc,callback:function(e){t.$set(t.form,"brand_shop_desc",e)},expression:"form.brand_shop_desc"}})],1),t._v(" "),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_enabled,expression:"form.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"is_enabled",id:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.is_enabled)?t._i(t.form.is_enabled,"1")>-1:t.form.is_enabled},on:{change:function(e){var s=t.form.is_enabled,a=e.target,i=!!a.checked;if(Array.isArray(s)){var o=t._i(s,"1");a.checked?o<0&&t.$set(t.form,"is_enabled",s.concat(["1"])):o>-1&&t.$set(t.form,"is_enabled",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.form,"is_enabled",i)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[t._v("Is Active")])])]),t._v(" "),s("div",{staticClass:"col-md-3 col-sm-12"},[s("div",{staticClass:"row pt-3"},[s("div",{staticClass:"col-md-12"},[null!=t.ShowOnChangeImage?s("span",[null!=t.ShowOnChangeImage?s("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"auto"},attrs:{src:t.ShowOnChangeImage}}):t._e()]):s("span",["undefined"==t.form.bs_img?s("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"auto"},attrs:{src:"../"+t.NoIconUrl}}):t._e(),t._v(" "),""===t.form.bs_img||null===t.form.bs_img?s("img",{staticClass:"img-fluid img-thumbnail",staticStyle:{width:"150px",height:"auto"},attrs:{src:"../"+t.NoIconUrl}}):""!=t.form.bs_img?s("img",{staticClass:"img-fluid img-thumbnail focusImgOnHover",staticStyle:{width:"150px",height:"auto"},attrs:{src:t.form.bs_img}}):t._e(),t._v(" "),t.deleteImageIcon?s("i",{staticClass:"far fa-times-circle",staticStyle:{cursor:"pointer",background:"#fff",padding:"4px 2px 2px 2px",color:"red","border-radius":"10px","margin-left":"-15px"},attrs:{title:"click to Delete"},on:{click:function(e){return t.deleteImage(t.form.id)}}}):t._e()])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"bs_img"}},[t._v("Image")]),t._v(" "),s("input",{ref:"bs_img",staticClass:"form-control",attrs:{type:"file",name:"bs_img"},on:{change:t.onImageChange}})])])])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-danger btn-flat btn-sm close-form",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.ClearForm()}}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}]},[s("i",{staticClass:"fas fa-save"}),t._v(" Save")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}]},[s("i",{staticClass:"far fa-edit"}),t._v(" Update")])])])])])])])])}),[],!1,null,null,null).exports}}]);
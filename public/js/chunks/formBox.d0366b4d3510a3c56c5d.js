(self.webpackChunk=self.webpackChunk||[]).push([[6711],{56083:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});const r={name:"formBox",data:function(){return{editMode:!1,form:new Form({id:"",cat_name:""})}},methods:{storeCategory:function(){var t=this;this.$Progress.start(),this.form.post("/spa/MultiComponent").then((function(e){var s=e.data;s.success&&(FireEvent.$emit("AfterChange"),toastr.success(s.success),t.$Progress.finish(),t.form.reset()),s.errors&&toastr.warning(s.errors)})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},editCategory:function(t){this.editMode=!0,this.form.reset(),this.form.fill(t),this.$refs.cat_name.focus()},clearEditCategory:function(){this.editMode=!1,this.form.reset()},updateCategory:function(){var t=this;this.$Progress.start(),this.form.put("/spa/MultiComponent/"+this.form.id).then((function(e){var a=e.data;a.success&&(FireEvent.$emit("AfterChange"),t.$Progress.finish(),toastr.success(a.success),t.form.reset(),t.editMode=!1,t.$refs.cat_name.focus()),a.errors&&(s,toastr.danger(a.errors))})).catch((function(){t.$Progress.fail(),toastr.warning("Something is wrong!")}))}},created:function(){var t=this;FireEvent.$on("fillEditCategory",(function(e){t.editCategory(e)}))},mounted:function(){}};const o=(0,a(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card vue-card-item"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"card-header"},[s("h4",[t._v("Add Category")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"card-header"},[s("h4",[t._v("Update Category")])]),t._v(" "),s("div",{staticClass:"card-body card-body-custome"},[s("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateCategory():t.storeCategory()}}},[s("div",{staticClass:"card--"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name *")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cat_name,expression:"form.cat_name"}],ref:"cat_name",staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cat_name")},attrs:{type:"text",name:"cat_name",placeholder:"Enter name"},domProps:{value:t.form.cat_name},on:{input:function(e){e.target.composing||t.$set(t.form,"cat_name",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"cat_name"}})],1),t._v(" "),s("div",{staticClass:"form-group mt-2"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"button"},on:{click:function(e){return t.clearEditCategory()}}},[t._v("Cancel")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[t._v("Update")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"btn btn-primary btn-flat btn-sm",attrs:{type:"submit"}},[t._v("Submit")])])])])])])}),[],!1,null,null,null).exports}}]);
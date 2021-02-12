(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,a,e){"use strict";e.r(a);var s={name:"AttributeMasterList",data:function(){return{Attributes:{}}},computed:{},methods:{fetchData:function(){var t=this;this.$Progress.start(),axios.get("/spa/Attribute-Info").then((function(a){t.Attributes=a.data,t.$Progress.finish()})).catch((function(a){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},reloadThis:function(){this.fetchData()},addData:function(){FireEvent.$emit("addData")},editData:function(t){FireEvent.$emit("editData",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value?axios.delete("/spa/Attribute-Info/"+t).then((function(t){var a=t.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.warning(a.success)),a.errors&&toastr.warning(a.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchData(),FireEvent.$on("AfterChange",(function(){t.fetchData()}))},mounted:function(){}},i=e(0),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card vue-card-item"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[t._v("Attribute")]),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{title:"reload"},on:{click:t.reloadThis}},[e("i",{staticClass:"fas fa-sync-alt"})]),t._v(" "),e("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:t.addData}},[e("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),e("tbody",[t._l(t.Attributes,(function(a,s){return e("tr",{key:s},[e("td",[t._v(" "+t._s(a.attribute_name)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(a.attribute_desc)+" ")]),t._v(" "),e("td",[e("span",{directives:[{name:"show",rawName:"v-show",value:1===a.is_enabled,expression:"attribute.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0===a.is_enabled,expression:"attribute.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),e("td",{staticClass:"text-right"},[e("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:function(e){return t.editData(a)}}},[e("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),e("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(e){return t.DeleteData(a.id)}}},[e("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),e("tr",{directives:[{name:"show",rawName:"v-show",value:t.Attributes&&!t.Attributes.length,expression:"Attributes && !Attributes.length"}]},[t._m(1)])],2)])]),t._v(" "),e("div",{staticClass:"card-footer"})])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{width:"25%"},attrs:{scope:"col"}},[this._v("Title")]),this._v(" "),a("th",{staticStyle:{width:"50%"},attrs:{scope:"col"}},[this._v("Details")]),this._v(" "),a("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[this._v("Status")]),this._v(" "),a("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[this._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{attrs:{colspan:"4"}},[a("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[this._v("Sorry : No data found.")])])}],!1,null,null,null);a.default=r.exports}}]);
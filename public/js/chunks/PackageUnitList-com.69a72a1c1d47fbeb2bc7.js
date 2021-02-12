(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{359:function(t,a,e){"use strict";e.r(a);var s={name:"PackageUnitList",data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",PackageUnits:{}}},computed:{},methods:{fetchPackageUnit:function(){var t=this;this.$Progress.start(),axios.get("/spa/PackageUnit-Info").then((function(a){t.PackageUnits=a.data,t.$Progress.finish()})).catch((function(a){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addPackageUnit:function(){FireEvent.$emit("addPackageUnit")},editPackageUnit:function(t){FireEvent.$emit("editPackageUnit",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value?axios.delete("/spa/PackageUnit-Info/"+t).then((function(t){var a=t.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.warning(a.success)),a.errors&&toastr.warning(a.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchPackageUnit(),FireEvent.$on("AfterChange",(function(){t.fetchPackageUnit()}))},mounted:function(){}},i=e(0),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card vue-card-item"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[t._v("PackageUnit List")]),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#PackageModal"},on:{click:t.addPackageUnit}},[e("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),e("tbody",[t._l(t.PackageUnits,(function(a,s){return e("tr",{key:s},[e("td",{attrs:{scope:"col"}},[t._v(" "+t._s(a.package_title)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(a.package_unit)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(a.package_desc)+" ")]),t._v(" "),e("td",[null!=a.package_icon?e("span",[e("img",{attrs:{src:"../"+a.package_icon,height:"30px",width:"30px"}})]):t._e(),t._v(" "),null===a.package_icon?e("span",[e("img",{attrs:{src:"../"+t.NoIconUrl,height:"30px",width:"30px"}})]):t._e()]),t._v(" "),e("td",[e("span",{directives:[{name:"show",rawName:"v-show",value:1===a.is_enabled,expression:"pacakge_unit.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0===a.is_enabled,expression:"pacakge_unit.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),e("td",{staticClass:"text-right"},[e("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#PackageModal"},on:{click:function(e){return t.editPackageUnit(a)}}},[e("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),e("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(e){return t.DeleteData(a.id)}}},[e("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),e("tr",{directives:[{name:"show",rawName:"v-show",value:t.PackageUnits&&!t.PackageUnits.length,expression:"PackageUnits && !PackageUnits.length"}]},[t._m(1)])],2)])]),t._v(" "),e("div",{staticClass:"card-footer"})])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("PackageUnit Title")]),t._v(" "),e("th",{staticStyle:{width:"15%"},attrs:{scope:"col"}},[t._v("Code")]),t._v(" "),e("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Details")]),t._v(" "),e("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Icon")]),t._v(" "),e("th",{staticStyle:{width:"8%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{attrs:{colspan:"6"}},[a("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[this._v("Sorry : No data found.")])])}],!1,null,null,null);a.default=n.exports}}]);
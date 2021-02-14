(self.webpackChunk=self.webpackChunk||[]).push([[904],{93902:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});const s={name:"DepartmentMasterList",data:function(){return{Departments:{}}},computed:{},methods:{fetchDepartment:function(){var t=this;this.$Progress.start(),axios.get("/spa/Department-Info").then((function(e){t.Departments=e.data,t.$Progress.finish()})).catch((function(e){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addDepartment:function(){FireEvent.$emit("addDepartment")},editDepartment:function(t){axios.get("/spa/Department-Info/"+t+"/edit").then((function(t){FireEvent.$emit("editDepartment",t.data)})).catch((function(t){}))},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value?axios.delete("/spa/Department-Info/"+t).then((function(t){var e=t.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.warning(e.success)),e.errors&&toastr.warning(e.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchDepartment(),FireEvent.$on("AfterChange",(function(){t.fetchDepartment()}))},mounted:function(){}};const n=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[t._v("Department List")]),t._v(" "),a("div",{staticClass:"col-6 text-right"},[a("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#DepartmentModal"},on:{click:t.addDepartment}},[a("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),a("tbody",[t._l(t.Departments,(function(e,s){return a("tr",{key:s},[a("td",{attrs:{scope:"col"}},[t._v(" "+t._s(e.dept_name)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.dept_desc)+" ")]),t._v(" "),a("td",[t._v(t._s(t._f("formatDate")(e.updated_at))+" ")]),t._v(" "),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.is_enabled,expression:"dept.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===e.is_enabled,expression:"dept.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),a("td",{staticClass:"text-right"},[a("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#DepartmentModal"},on:{click:function(a){return t.editDepartment(e.id)}}},[a("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),a("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(a){return t.DeleteData(e.id)}}},[a("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.Departments&&!t.Departments.length,expression:"Departments && !Departments.length"}]},[t._m(1)])],2)])]),t._v(" "),a("div",{staticClass:"card-footer"})])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Department")]),t._v(" "),a("th",{staticStyle:{width:"50%"},attrs:{scope:"col"}},[t._v("Details")]),t._v(" "),a("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Updated At")]),t._v(" "),a("th",{staticStyle:{width:"10%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{staticStyle:{width:"10%","text-align":"right"},attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{attrs:{colspan:"6"}},[a("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[t._v("Sorry : No data found.")])])}],!1,null,null,null).exports}}]);
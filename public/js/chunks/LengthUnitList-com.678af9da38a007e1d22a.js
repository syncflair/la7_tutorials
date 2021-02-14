(self.webpackChunk=self.webpackChunk||[]).push([[439],{34347:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const a={name:"LengthUnitList",data:function(){return{LengthUnits:{}}},computed:{},methods:{fetchLengthUnit:function(){var t=this;this.$Progress.start(),axios.get("/spa/LengthUnit-Info").then((function(e){t.LengthUnits=e.data,t.$Progress.finish()})).catch((function(e){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addLengthUnit:function(){FireEvent.$emit("addLengthUnit")},editLengthUnit:function(t){FireEvent.$emit("editLengthUnit",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value?axios.delete("/spa/LengthUnit-Info/"+t).then((function(t){var e=t.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.warning(e.success)),e.errors&&toastr.warning(e.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchLengthUnit(),FireEvent.$on("AfterChange",(function(){t.fetchLengthUnit()}))},mounted:function(){}};const s=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card vue-card-item"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[t._v("Length Unit List")]),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#LengthUnitModal"},on:{click:t.addLengthUnit}},[n("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),n("div",{staticClass:"card-body"},[n("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),n("tbody",[t._l(t.LengthUnits,(function(e,a){return n("tr",{key:a},[n("td",{attrs:{scope:"col"}},[t._v(" "+t._s(e.length_title)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.length_unit)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.length_value)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.length_desc)+" ")]),t._v(" "),n("td",[n("span",{directives:[{name:"show",rawName:"v-show",value:1===e.is_enabled,expression:"length.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:0===e.is_enabled,expression:"length.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),n("td",{staticClass:"text-right"},[n("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#LengthUnitModal"},on:{click:function(n){return t.editLengthUnit(e)}}},[n("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),n("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(n){return t.DeleteData(e.id)}}},[n("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),n("tr",{directives:[{name:"show",rawName:"v-show",value:t.LengthUnits&&!t.LengthUnits.length,expression:"LengthUnits && !LengthUnits.length"}]},[t._m(1)])],2)])]),t._v(" "),n("div",{staticClass:"card-footer"})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Length Title")]),t._v(" "),n("th",{staticStyle:{width:"15%"},attrs:{scope:"col"}},[t._v("Unit")]),t._v(" "),n("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Value")]),t._v(" "),n("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Details")]),t._v(" "),n("th",{staticStyle:{width:"8%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),n("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{colspan:"6"}},[n("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[t._v("Sorry : No data found.")])])}],!1,null,null,null).exports}}]);
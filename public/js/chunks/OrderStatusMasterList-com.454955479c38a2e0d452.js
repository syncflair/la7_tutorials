(self.webpackChunk=self.webpackChunk||[]).push([[7609],{3295:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const s={name:"OrderStatuslist-info",data:function(){return{OrderStatus:{}}},computed:{},methods:{fetchOrderStatus:function(){var t=this;this.$Progress.start(),axios.get("/spa/order-status-info").then((function(e){t.OrderStatus=e.data,t.$Progress.finish()})).catch((function(e){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addOrderStatus:function(){FireEvent.$emit("addOrderStatus")},editOrderStatus:function(t){FireEvent.$emit("editOrderStatus",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value?axios.delete("/spa/order-status-info/"+t).then((function(t){var e=t.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.warning(e.success)),e.errors&&toastr.warning(e.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchOrderStatus(),FireEvent.$on("AfterChange",(function(){t.fetchOrderStatus()}))},mounted:function(){}};const r=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[t._v("User Status")]),t._v(" "),a("div",{staticClass:"col-6 text-right"},[a("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:t.addOrderStatus}},[a("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),a("tbody",[t._l(t.OrderStatus,(function(e,s){return a("tr",{key:s},[a("td",[t._v(" "+t._s(e.id)+" ")]),t._v(" "),a("td",{staticClass:"text-bold green-",attrs:{scope:"col"}},[t._v(" "+t._s(e.order_status_name)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.order_status_desc)+" ")]),t._v(" "),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.is_enabled,expression:"o_status.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===e.is_enabled,expression:"o_status.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),a("td",{staticClass:"text-right"},[1===t.authUser.role_id?a("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:function(a){return t.editOrderStatus(e)}}},[a("i",{staticClass:"fas fa-edit primary "})]):t._e(),t._v(" "),1===t.authUser.role_id?a("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(a){return t.DeleteData(e.id)}}},[a("i",{staticClass:"far fa-trash-alt red"})]):t._e(),t._v(" "),1!=t.authUser.role_id?a("span",{staticClass:"red text-bold"},[t._v("No Action")]):t._e()])])})),t._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.OrderStatus&&!t.OrderStatus.length,expression:"OrderStatus && !OrderStatus.length"}]},[t._m(1)])],2)])]),t._v(" "),a("div",{staticClass:"card-footer"})])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"5%"},attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[t._v("Title")]),t._v(" "),a("th",{staticStyle:{width:"45%"},attrs:{scope:"col"}},[t._v("Details")]),t._v(" "),a("th",{staticStyle:{width:"5%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{attrs:{colspan:"5"}},[a("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[t._v("Sorry : No data found.")])])}],!1,null,null,null).exports}}]);
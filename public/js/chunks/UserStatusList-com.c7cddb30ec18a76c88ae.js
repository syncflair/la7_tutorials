(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{356:function(t,s,a){"use strict";a.r(s);var e={name:"UserStatusList",data:function(){return{UserStatus:{}}},computed:{},methods:{fetchUserStatus:function(){var t=this;this.$Progress.start(),axios.get("/spa/user-status-info").then((function(s){t.UserStatus=s.data,t.$Progress.finish()})).catch((function(s){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addUserStatus:function(){FireEvent.$emit("addUserStatus")},editUserStatus:function(t){FireEvent.$emit("editUserStatus",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.value?axios.delete("/spa/user-status-info/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),toastr.warning(s.success)),s.errors&&toastr.warning(s.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchUserStatus(),FireEvent.$on("AfterChange",(function(){t.fetchUserStatus()}))},mounted:function(){}},r=a(0),i=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[t._v("User Status")]),t._v(" "),a("div",{staticClass:"col-6 text-right"},[a("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#UserStatusModal"},on:{click:t.addUserStatus}},[a("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),a("tbody",[t._l(t.UserStatus,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"text-bold green",attrs:{scope:"col"}},[t._v(" "+t._s(s.us_name)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(s.us_desc)+" ")]),t._v(" "),a("td",{staticClass:"text-right"},[a("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#UserStatusModal"},on:{click:function(a){return t.editUserStatus(s)}}},[a("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),a("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(a){return t.DeleteData(s.id)}}},[a("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.UserStatus&&!t.UserStatus.length,expression:"UserStatus && !UserStatus.length"}]},[t._m(1)])],2)])]),t._v(" "),a("div",{staticClass:"card-footer"})])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[this._v("Title")]),this._v(" "),s("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[this._v("Details")]),this._v(" "),s("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[this._v("Action")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{attrs:{colspan:"6"}},[s("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[this._v("Sorry : No data found.")])])}],!1,null,null,null);s.default=i.exports}}]);
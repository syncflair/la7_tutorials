(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{337:function(t,a,e){"use strict";e.r(a);var i={name:"AccountDetailsMasterList",data:function(){return{accountDetails:{}}},computed:{},methods:{viewDetials:function(t){FireEvent.$emit("AccountDetailsMasterContentHead",t)},fetchData:function(){var t=this;this.$Progress.start(),axios.get("/spa/AccountDetails-Info").then((function(a){t.accountDetails=a.data,t.$Progress.finish()})).catch((function(a){t.$Progress.fail(),toastr.warning("Something is wrong!")}))},addAccountDetails:function(){FireEvent.$emit("addAccountDetails")},editAccountDetails:function(t){FireEvent.$emit("editAccountDetails",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value?axios.delete("/spa/AccountDetails-Info/"+t).then((function(t){var a=t.data;a.success&&(FireEvent.$emit("AfterChange"),toastr.warning(a.success)),a.errors&&toastr.warning(a.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))}},created:function(){var t=this;this.fetchData(),setTimeout((function(){t.viewDetials(t.accountDetails[0])}),1e3),FireEvent.$on("AfterChange",(function(){t.fetchData()}))},mounted:function(){}},s=e(0),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card vue-card-item vue-card-item-multi-layer",staticStyle:{"min-height":"665px !important"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"}),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:t.addAccountDetails}},[e("i",{staticClass:"icon fas fa-plus"}),t._v(" New")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),e("tbody",t._l(t.accountDetails,(function(a,i){return e("tr",{key:i},[e("td",{attrs:{scope:"col"}},[e("p",{staticClass:"pointer mb-0",on:{click:function(e){return t.viewDetials(a)}}},[t._v(" \r\n                "+t._s(a.account_name)+" "),e("br")])]),t._v(" "),e("td",{staticClass:"text-right"},[e("div",{staticClass:"btn-group option-dropdown-manu-style left"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item pointer",on:{click:function(e){return t.viewDetials(a)}}},[e("i",{staticClass:"fas fa-eye primary"}),t._v(" View ")]),t._v(" "),e("a",{staticClass:"dropdown-item pointer",attrs:{"data-toggle":"modal","data-target":"#formModal"},on:{click:function(e){return t.editAccountDetails(a)}}},[e("i",{staticClass:"fas fa-eye primary"}),t._v(" Edit ")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item pointer",attrs:{id:"delete"},on:{click:function(e){return t.DeleteData(a.id)}}},[e("i",{staticClass:"far fa-trash-alt red"}),t._v(" Delete\r\n                  ")])])])])])})),0)])]),t._v(" "),e("div",{staticClass:"card-footer"})])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{width:"60%"},attrs:{scope:"col"}},[this._v("Account Details")]),this._v(" "),a("th",{staticStyle:{width:"10%","text-align":"right"},attrs:{scope:"col"}},[this._v("...")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn btn-flat btn-sm btn-warning dropdown-toggle-",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-v"})])}],!1,null,null,null);a.default=n.exports}}]);
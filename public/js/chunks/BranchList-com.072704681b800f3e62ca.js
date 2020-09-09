(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{340:function(t,e,a){"use strict";a.r(e);var n=a(1);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={name:"BranchList",data:function(){return{filterBy:"branch_name",SearchByOptions:[{field_name:"branch_name",show_name:"Name"},{field_name:"branch_code",show_name:"Code"}]}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(n.b)("BranchInfoStore",["branches","pagination","autoCompleteData"])),methods:{addBranch:function(){FireEvent.$emit("addBranch")},editBranch:function(t){FireEvent.$emit("editBranch",t)},DeleteData:function(t){Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value?axios.delete("/spa/Branch-Info/"+t).then((function(t){var e=t.data;e.success&&(FireEvent.$emit("AfterChange"),toastr.warning(e.success)),e.errors&&toastr.warning(e.errors)})).catch((function(){toastr.warning("Something is wrong!")})):toastr.info("Your data is safe!")}))},fetchData:function(){this.$Progress.start(),this.$store.dispatch("BranchInfoStore/fetchData",this.pagination.per_page),this.$Progress.finish()},searchData:function(t){this.$store.dispatch("BranchInfoStore/searching",t)},AutoCompleteSearch:function(t){""!=t&&this.$store.dispatch("BranchInfoStore/AutoCompleteSearch",t)}},created:function(){var t=this;this.$store.dispatch("BranchInfoStore/fetchData"),FireEvent.$on("AfterChange",(function(){t.$Progress.start(),t.$store.dispatch("BranchInfoStore/fetchData",t.pagination.per_page),t.$Progress.finish()})),FireEvent.$on("changPerPage",(function(e){t.$store.dispatch("BranchInfoStore/fetchData",e)}))},mounted:function(){}},o=a(0),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-sm-9"},[a("search-app-master",{attrs:{SearchByOptions:t.SearchByOptions,filterBy:t.filterBy,autoCompleteData:t.autoCompleteData,pagination:t.pagination},on:{searchData:t.searchData,AutoCompleteSearch:t.AutoCompleteSearch}})],1),t._v(" "),a("div",{staticClass:"col-md-6 col-sm-3 text-right"},[a("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#branchModal"},on:{click:t.addBranch}},[a("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-striped table-sm table-responsive-"},[t._m(0),t._v(" "),a("tbody",[t._l(t.branches,(function(e,n){return a("tr",{key:n},[a("td",{attrs:{scope:"col"}},[t._v(" "+t._s(e.branch_code)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.branch_name)+" ")]),t._v(" "),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:e.branch_desc,expression:"branch.branch_desc"}]},[t._v("\r\n               \t\tDetails: \r\n            \t\t"),a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:{content:e.branch_desc,classes:"info"},expression:"{content: branch.branch_desc, classes:'info'}",modifiers:{auto:!0}}],staticClass:"fas fa-info-circle pointer"})]),a("br"),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.branch_phone,expression:"branch.branch_phone"}]},[t._v(" Phone: "+t._s(e.branch_phone)+" ")]),a("br"),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.branch_email,expression:"branch.branch_email"}]},[t._v(" Email: "+t._s(e.branch_email)+" ")])]),t._v(" "),a("td",[a("span",[t._v(t._s(e.branch_address))]),t._v(" "),a("br"),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.zone,expression:"branch.zone"}]},[t._v(" "+t._s(e.zone)+" ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.city,expression:"branch.city"}]},[t._v(" ,"+t._s(e.city)+" ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.state,expression:"branch.state"}]},[t._v(" ,"+t._s(e.state)+" ")]),a("br"),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.country,expression:"branch.country"}]},[t._v(" "+t._s(e.country)+" ")])]),t._v(" "),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.is_enabled,expression:"branch.is_enabled === 1"}],staticClass:"green"},[t._v(" Active")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===e.is_enabled,expression:"branch.is_enabled === 0"}],staticClass:"red text-bold"},[t._v(" Inactive")])]),t._v(" "),a("td",{staticClass:"text-right"},[a("a",{staticClass:"btn btn-primary- btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#branchModal"},on:{click:function(a){return t.editBranch(e)}}},[a("i",{staticClass:"fas fa-edit primary "})]),t._v(" "),a("a",{staticClass:"btn btn-block- btn-danger- btn-flat btn-sm",attrs:{id:"delete"},on:{click:function(a){return t.DeleteData(e.id)}}},[a("i",{staticClass:"far fa-trash-alt red"})])])])})),t._v(" "),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.branches&&!t.branches.length,expression:"branches && !branches.length"}]},[t._m(1)])],2)])]),t._v(" "),a("div",{staticClass:"card-footer"},[t.pagination.last_page>=1?a("pagination-app",{attrs:{pagination:t.pagination,offset:5},on:{paginate:function(e){return t.fetchData()}}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"8%"},attrs:{scope:"col"}},[t._v("Code")]),t._v(" "),a("th",{staticStyle:{width:"15%"},attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{width:"30%"},attrs:{scope:"col"}},[t._v("Details")]),t._v(" "),a("th",{staticStyle:{width:"30%"},attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),a("th",{staticStyle:{width:"8%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{staticStyle:{width:"15%","text-align":"right"},attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"6"}},[e("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[this._v("Sorry : No data found.")])])}],!1,null,null,null);e.default=c.exports}}]);
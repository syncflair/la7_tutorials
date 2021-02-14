(self.webpackChunk=self.webpackChunk||[]).push([[6494],{39300:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const n={name:"UserMasterList",data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",selectAllCheckbox:!1,selectedCheckbox:[],currentSort:"name",currentSortDir:"asc",filterBy:"name",SearchByOptions:[{field_name:"name",show_name:"Name"},{field_name:"email",show_name:"Email"},{field_name:"us_name",show_name:"User Status"},{field_name:"role_name",show_name:"User Role"}]}},computed:r(r({},(0,s(20629).rn)("usersAdminStore",["users","pagination","autoCompleteData"])),{},{sortedObjects:function(){var t=this;return Object.values(this.users).sort((function(e,s){var a=1;return"desc"===t.currentSortDir&&(a=-1),e[t.currentSort]<s[t.currentSort]?-1*a:e[t.currentSort]>s[t.currentSort]?1*a:0}))}}),methods:{selectCheckbox:function(){if(this.selectedCheckbox=[],!this.selectAllCheckbox)for(var t in this.users)this.selectedCheckbox.push(this.users[t].id)},sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},inactiveUser:function(t){var e=this;Swal.fire({title:"Are you sure to Inactive this User?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Inactive!"}).then((function(s){s.value?(e.$Progress.start(),axios.post("/spa/Users-Info/inactive-user/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.success(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},activeUser:function(t){var e=this;Swal.fire({title:"Are you sure to Active this User?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active!"}).then((function(s){s.value?(e.$Progress.start(),axios.post("/spa/Users-Info/active-user/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.success(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},verifyByUser:function(t){var e=this;Swal.fire({title:"Are you sure to Verify this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Verified!"}).then((function(s){s.value?(e.$Progress.start(),axios.post("/spa/Users-Info/verify-by-admin/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.success(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},fetchData:function(){this.$Progress.start(),this.$store.dispatch("usersAdminStore/fetchData",this.pagination.per_page),this.$Progress.finish()},reloadThis:function(){this.fetchData()},ViewDetails:function(){alert("ok")},addUser:function(){FireEvent.$emit("addUser")},editUser:function(t){FireEvent.$emit("editUser",t)},DeleteData:function(t){var e=this;Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.value?(e.$Progress.start(),axios.delete("/spa/Users-Info/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.warning(s.success)),s.errors&&toastr.warning(s.errors)})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")}))):(e.$Progress.finish(),toastr.info("Your data is safe!"))}))},searchData:function(t){this.$store.dispatch("usersAdminStore/searching",t)},AutoCompleteSearch:function(t){""!=t&&this.$store.dispatch("usersAdminStore/AutoCompleteSearch",t)}},created:function(){var t=this;this.$store.dispatch("usersAdminStore/fetchData"),FireEvent.$on("AfterChange",(function(){t.$Progress.start(),t.$store.dispatch("usersAdminStore/fetchData",t.pagination.per_page),t.$Progress.finish()})),FireEvent.$on("changPerPage",(function(e){t.$store.dispatch("usersAdminStore/fetchData",e)}))},mounted:function(){}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card vue-card-item"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 col-sm-9"},[s("search-app-master",{attrs:{SearchByOptions:t.SearchByOptions,filterBy:t.filterBy,autoCompleteData:t.autoCompleteData,pagination:t.pagination},on:{searchData:t.searchData,AutoCompleteSearch:t.AutoCompleteSearch}})],1),t._v(" "),s("div",{staticClass:"col-md-7 col-sm-3 text-right"},[s("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{title:"reload"},on:{click:t.reloadThis}},[s("i",{staticClass:"fas fa-sync-alt"})]),t._v(" "),s("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#FormModal"},on:{click:t.addUser}},[s("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("table",{staticClass:"table table-striped table-sm table-responsive"},[s("thead",[s("tr",[s("th",{staticStyle:{width:"2%"},attrs:{scope:"col"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllCheckbox,expression:"selectAllCheckbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAllCheckbox)?t._i(t.selectAllCheckbox,null)>-1:t.selectAllCheckbox},on:{click:t.selectCheckbox,change:function(e){var s=t.selectAllCheckbox,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.selectAllCheckbox=s.concat([null])):i>-1&&(t.selectAllCheckbox=s.slice(0,i).concat(s.slice(i+1)))}else t.selectAllCheckbox=r}}})]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Avatar")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"20%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("name")}}},[t._v("Name")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"20%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("email")}}},[t._v("Email")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"5%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("role_name")}}},[t._v("Role")]),t._v(" "),t._m(0),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Nofify")]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),t._m(1)])]),t._v(" "),s("tbody",[t._l(t.sortedObjects,(function(e,a){return s("tr",{key:a},[s("td",{attrs:{scope:"col"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCheckbox,expression:"selectedCheckbox"}],attrs:{type:"checkbox",name:""},domProps:{value:e.id,checked:Array.isArray(t.selectedCheckbox)?t._i(t.selectedCheckbox,e.id)>-1:t.selectedCheckbox},on:{change:function(s){var a=t.selectedCheckbox,r=s.target,i=!!r.checked;if(Array.isArray(a)){var n=e.id,o=t._i(a,n);r.checked?o<0&&(t.selectedCheckbox=a.concat([n])):o>-1&&(t.selectedCheckbox=a.slice(0,o).concat(a.slice(o+1)))}else t.selectedCheckbox=i}}})]),t._v(" "),s("td",[null!=e.avatar?s("span",[s("img",{attrs:{src:e.avatar,loading:"lazy",height:"20px",width:"20px"}})]):t._e(),t._v(" "),null===e.avatar?s("span",[s("img",{attrs:{src:"../"+t.NoIconUrl,height:"20px",width:"20px"}})]):t._e()]),t._v(" "),s("td",{attrs:{scope:"col"}},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.email)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.role.name)+" ")]),t._v(" "),s("td",[null!=e.belongs_to_employee?s("small",[t._v("\r\n                "+t._s(e.belongs_to_employee.emp_name)+" \r\n              ")]):t._e()]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:1===e.status_id,expression:"user.status_id === 1"}],attrs:{title:"Active user, Click to Inactive"},on:{click:function(s){return t.inactiveUser(e.id)}}},[s("i",{staticClass:"fas fa-user-check green pointer"})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:2===e.status_id,expression:"user.status_id === 2"}],attrs:{title:"Inactive user, Click to active"},on:{click:function(s){return t.activeUser(e.id)}}},[s("i",{staticClass:"fas fa-user-times yellow pointer",staticStyle:{"font-size":"18px !important"}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:3===e.status_id,expression:"user.status_id === 3"}],attrs:{title:"Panding user, Click to active"},on:{click:function(s){return t.activeUser(e.id)}}},[s("i",{staticClass:"fas fa-user-lock red pointer",staticStyle:{"font-size":"18px !important"}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:4===e.status_id,expression:"user.status_id === 4"}],attrs:{title:"Not Verified user, Click to verify"},on:{click:function(s){return t.verifyByUser(e.id)}}},[s("i",{staticClass:"fas fa-user-secret red pointer",staticStyle:{"font-size":"22px !important"}})])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("\r\n              data\r\n              ")]),t._v(" "),s("td",[s("span",{staticClass:"pointer",attrs:{title:t._f("formatDate")(e.created_at)}},[s("i",{staticClass:"far fa-calendar-check"})])]),t._v(" "),s("td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group option-dropdown-manu-style left"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item pointer",on:{click:function(s){return t.ViewDetails(e.id)}}},[s("i",{staticClass:"fas fa-eye primary"}),t._v(" View ")]),t._v(" "),s("a",{staticClass:"dropdown-item pointer",attrs:{"data-toggle":"modal","data-target":"#FormModal"},on:{click:function(s){return t.editUser(e)}}},[s("i",{staticClass:"fas fa-edit primary "}),t._v(" Edit\r\n                  ")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item pointer",attrs:{id:"delete"},on:{click:function(s){return t.DeleteData(e.id)}}},[s("i",{staticClass:"far fa-trash-alt red"}),t._v(" Delete\r\n                  ")])])])])])})),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.users&&!t.users.length,expression:"users && !users.length"}]},[t._m(3)])],2)])]),t._v(" "),s("div",{staticClass:"card-footer"},[t.pagination.last_page>=1?s("pagination-app",{attrs:{pagination:t.pagination,offset:5},on:{paginate:function(e){return t.fetchData()}}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("th",{staticStyle:{width:"22%"},attrs:{scope:"col"}},[s("small",[t._v("Assign To employee ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("th",{staticStyle:{width:"2%","text-align":"right"},attrs:{scope:"col"}},[s("strong",[t._v("...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-flat btn-sm btn-warning dropdown-toggle-",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{attrs:{colspan:"10"}},[s("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[t._v("Sorry : No data found.")])])}],!1,null,null,null).exports}}]);
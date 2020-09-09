(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{315:function(t,e,s){"use strict";s.r(e);var i=s(1);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var n={name:"supplierMasterListForAdmin",data:function(){return{NoIconUrl:"FilesStorage/CommonFiles/no-img.png",selectAllCheckbox:!1,selectedCheckbox:[],currentSort:"name",currentSortDir:"asc",filterBy:"name",SearchByOptions:[{field_name:"name",show_name:"Name"},{field_name:"email",show_name:"Email"},{field_name:"phone",show_name:"Phone"},{field_name:"vendor_id",show_name:"Vendor"}]}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(i.b)("SupplierForAdminStore",["suppliers","pagination","autoCompleteData"]),{sortedSuppliers:function(){var t=this;return Object.values(this.suppliers).sort((function(e,s){var i=1;return"desc"===t.currentSortDir&&(i=-1),e[t.currentSort]<s[t.currentSort]?-1*i:e[t.currentSort]>s[t.currentSort]?1*i:0}))}}),methods:{selectCheckbox:function(){if(this.selectedCheckbox=[],!this.selectAllCheckbox)for(var t in this.suppliers)this.selectedCheckbox.push(this.suppliers[t].id)},sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},ChangeNotify:function(t,e){var s=this;this.$Progress.start(),axios.post("/spa/supplier-change-notify/"+t+"/"+e.target.checked).then((function(t){var e=t.data;e.success&&(FireEvent.$emit("AfterChange"),s.$Progress.finish(),toastr.success(e.success))})).catch((function(){s.$Progress.fail(),toastr.warning("Something is wrong!")}))},inactiveSupplier:function(t){var e=this;this.$Progress.start(),Swal.fire({title:"Are you sure to InActive this supplier?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Inactive!"}).then((function(s){s.value?axios.post("/spa/supplier-Info/inactive-supplier/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.warning(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")})):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},activeSupplier:function(t){var e=this;this.$Progress.start(),Swal.fire({title:"Are you sure to Active this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active!"}).then((function(s){s.value?axios.post("/spa/supplier-Info/active-supplier/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.success(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")})):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},verifyByUser:function(t){var e=this;this.$Progress.start(),Swal.fire({title:"Are you sure to Verify this user?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Verified!"}).then((function(s){s.value?axios.post("/spa/supplier-verify-by-admin/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.success(s.success))})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")})):(e.$Progress.finish(),toastr.info("Your action canceled!"))}))},fetchData:function(){this.$Progress.start(),this.$store.dispatch("SupplierForAdminStore/fetchData",this.pagination.per_page),this.$Progress.finish()},reloadThis:function(){this.fetchData()},ViewDetails:function(){alert("ok")},addSupplier:function(){FireEvent.$emit("addSupplier")},editSupplier:function(t){FireEvent.$emit("editSupplier",t)},DeleteData:function(t){var e=this;this.$Progress.start(),Swal.fire({title:"Are you sure to Delete?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.value?axios.delete("/spa/supplier-Info/"+t).then((function(t){var s=t.data;s.success&&(FireEvent.$emit("AfterChange"),e.$Progress.finish(),toastr.warning(s.success)),s.errors&&toastr.warning(s.errors)})).catch((function(){e.$Progress.fail(),toastr.warning("Something is wrong!")})):(e.$Progress.finish(),toastr.info("Your data is safe!"))}))},searchData:function(t){this.$store.dispatch("SupplierForAdminStore/searching",t)},AutoCompleteSearch:function(t){""!=t&&this.$store.dispatch("SupplierForAdminStore/AutoCompleteSearch",t)}},created:function(){var t=this;this.$store.dispatch("SupplierForAdminStore/fetchData"),FireEvent.$on("AfterChange",(function(){t.$Progress.start(),t.$store.dispatch("SupplierForAdminStore/fetchData",t.pagination.per_page),t.$Progress.finish()})),FireEvent.$on("changPerPage",(function(e){t.$store.dispatch("SupplierForAdminStore/fetchData",e)}))},mounted:function(){}},o=s(0),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card vue-card-item"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 col-sm-9"},[s("search-app-master",{attrs:{SearchByOptions:t.SearchByOptions,filterBy:t.filterBy,autoCompleteData:t.autoCompleteData,pagination:t.pagination},on:{searchData:t.searchData,AutoCompleteSearch:t.AutoCompleteSearch}})],1),t._v(" "),s("div",{staticClass:"col-md-7 col-sm-3 text-right"},[s("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{title:"reload"},on:{click:t.reloadThis}},[s("i",{staticClass:"fas fa-sync-alt"})]),t._v(" "),s("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#FormModal"},on:{click:t.addSupplier}},[s("i",{staticClass:"icon fas fa-plus"}),t._v(" Add New")])])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("table",{staticClass:"table table-striped table-sm table-responsive"},[s("thead",[s("tr",[s("th",{staticStyle:{width:"2%"},attrs:{scope:"col"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllCheckbox,expression:"selectAllCheckbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAllCheckbox)?t._i(t.selectAllCheckbox,null)>-1:t.selectAllCheckbox},on:{click:t.selectCheckbox,change:function(e){var s=t.selectAllCheckbox,i=e.target,r=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.selectAllCheckbox=s.concat([null])):a>-1&&(t.selectAllCheckbox=s.slice(0,a).concat(s.slice(a+1)))}else t.selectAllCheckbox=r}}})]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Img")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"15%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("name")}}},[t._v("Name")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"15%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("email")}}},[t._v("Email")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"7%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("phone")}}},[t._v("Phone")]),t._v(" "),s("th",{staticClass:"sortable-title",staticStyle:{width:"27%"},attrs:{scope:"col"},on:{click:function(e){return t.sort("vendor_id")}}},[t._v("Vendor (address)")]),t._v(" "),s("th",{staticStyle:{width:"7%"},attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),s("th",{staticStyle:{width:"3%"},attrs:{scope:"col"}},[t._v("Nofify")]),t._v(" "),t._m(0)])]),t._v(" "),s("tbody",[t._l(t.sortedSuppliers,(function(e,i){return s("tr",{key:i},[s("td",{attrs:{scope:"col"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCheckbox,expression:"selectedCheckbox"}],attrs:{type:"checkbox",name:""},domProps:{value:e.id,checked:Array.isArray(t.selectedCheckbox)?t._i(t.selectedCheckbox,e.id)>-1:t.selectedCheckbox},on:{change:function(s){var i=t.selectedCheckbox,r=s.target,a=!!r.checked;if(Array.isArray(i)){var n=e.id,o=t._i(i,n);r.checked?o<0&&(t.selectedCheckbox=i.concat([n])):o>-1&&(t.selectedCheckbox=i.slice(0,o).concat(i.slice(o+1)))}else t.selectedCheckbox=a}}})]),t._v(" "),s("td",[null!=e.avatar?s("span",[s("img",{attrs:{src:e.avatar,loading:"lazy",height:"20px",width:"20px"}})]):t._e(),t._v(" "),null===e.avatar?s("span",[s("img",{attrs:{src:"../"+t.NoIconUrl,height:"20px",width:"20px"}})]):t._e()]),t._v(" "),s("td",{attrs:{scope:"col"}},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.email)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.phone)+" ")]),t._v(" "),s("td",[null!=e.belongs_to_vendor?s("span",[t._v(t._s(e.belongs_to_vendor.vendor_name)+" ("+t._s(e.belongs_to_vendor.vendor_code)+")")]):t._e()]),t._v(" "),s("td",[s("small",[t._v(t._s(t._f("formatDate")(e.created_at)))])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:1===e.status_id,expression:"supplier.status_id === 1"}],attrs:{title:"Active supplier, Click to inactive"},on:{click:function(s){return t.inactiveSupplier(e.id)}}},[s("i",{staticClass:"fas fa-user-check green pointer"})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:2===e.status_id,expression:"supplier.status_id === 2"}],attrs:{title:"Inactive supplier, Click to active"},on:{click:function(s){return t.activeSupplier(e.id)}}},[s("i",{staticClass:"fas fa-user-times yellow pointer"})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:3===e.status_id,expression:"supplier.status_id === 3"}],attrs:{title:"Panding supplier, Click to active"},on:{click:function(s){return t.activeSupplier(e.id)}}},[s("i",{staticClass:"fas fa-user-lock red pointer"})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:4===e.status_id,expression:"supplier.status_id === 4"}],attrs:{title:"Not Verified supplier, Click to verify"},on:{click:function(s){return t.verifyByUser(e.id)}}},[s("i",{staticClass:"fas fa-user-secret red pointer",staticStyle:{"font-size":"22px !important"}})])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.enable_notify,expression:"supplier.enable_notify"}],attrs:{type:"checkbox",name:"enable_notify",value:"1"},domProps:{checked:Array.isArray(e.enable_notify)?t._i(e.enable_notify,"1")>-1:e.enable_notify},on:{click:function(s){return t.ChangeNotify(e.id,s)},change:function(s){var i=e.enable_notify,r=s.target,a=!!r.checked;if(Array.isArray(i)){var n=t._i(i,"1");r.checked?n<0&&t.$set(e,"enable_notify",i.concat(["1"])):n>-1&&t.$set(e,"enable_notify",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(e,"enable_notify",a)}}})]),t._v(" "),s("td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group option-dropdown-manu-style left"},[t._m(1,!0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item pointer",on:{click:function(s){return t.ViewDetails(e.id)}}},[s("i",{staticClass:"fas fa-eye primary"}),t._v(" View ")]),t._v(" "),s("a",{staticClass:"dropdown-item pointer",attrs:{"data-toggle":"modal","data-target":"#FormModal"},on:{click:function(s){return t.editSupplier(e)}}},[s("i",{staticClass:"fas fa-edit primary "}),t._v(" Edit\r\n                  ")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item pointer",attrs:{id:"delete"},on:{click:function(s){return t.DeleteData(e.id)}}},[s("i",{staticClass:"far fa-trash-alt red"}),t._v(" Delete\r\n                  ")])])])])])})),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.suppliers&&!t.suppliers.length,expression:"suppliers && !suppliers.length"}]},[t._m(2)])],2)])]),t._v(" "),s("div",{staticClass:"card-footer"},[t.pagination.last_page>=1?s("pagination-app",{attrs:{pagination:t.pagination,offset:5},on:{paginate:function(e){return t.fetchData()}}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticStyle:{width:"3%","text-align":"right"},attrs:{scope:"col"}},[e("strong",[this._v("...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-flat btn-sm btn-warning dropdown-toggle-",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"11"}},[e("div",{staticClass:"alert alert-warning text-center red mb-0",attrs:{role:"alert"}},[this._v("Sorry : No data found.")])])}],!1,null,null,null);e.default=c.exports}}]);
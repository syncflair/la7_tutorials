(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{164:function(t,a,s){"use strict";s.r(a);var n={name:"CashAccountMasterContentHead",components:{AdjustCashAccountForm:function(){return s.e(12).then(s.bind(null,390))}},data:function(){return{headData:""}},methods:{adjustBankAccount:function(){}},created:function(){var t=this;FireEvent.$on("CashAccountMasterContentHead",(function(a){t.headData=a}))}},e=s(0),c={name:"CashAccountMasterContentBody",data:function(){return{}},methods:{},created:function(){}},o={name:"CashAccountMasterContent",components:{CashAccountMasterContentHead:Object(e.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-head"}),t._v(" "),s("div",{staticClass:"card-body pt-1 pb-1 pl-1 pr-1"},[s("div",{staticClass:"row",staticStyle:{height:"84px"}},[s("div",{staticClass:"col-md-8 col-sm-12"},[t.headData?s("span",[s("p",{staticClass:"mb-0 border-bottom-1-"},[s("span",{staticClass:"text-bold"},[t._v(t._s(t.headData.bank_account_name)+" ")]),t._v(" "),s("span",{staticClass:"text-bold green"},[t._v(" ( "+t._s(t.headData.account_opening_balance)+" \r\n\t\t\t\t\t\t"),s("small",[t._v(t._s(t.systemSettings.belongs_to_currency.currency_short_code)+" )")])])]),t._v(" "),s("p",{staticClass:"mb-0 border-bottom-1-"},[s("small",[t._v(" AC No: "+t._s(t.headData.bank_account_number))])]),t._v(" "),s("p",{staticClass:"mb-0 border-bottom-1-"},[s("small",[t._v("Bank: "+t._s(t.headData.bank_name)+", Branch: "+t._s(t.headData.bank_branch))])])]):t._e(),t._v(" "),t.headData?t._e():s("span",[s("span",{staticClass:"mt-3"},[t._v("Please Select bank account")])])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-12 text-right"},[s("a",{staticClass:"btn btn-primary btn-flat btn-sm",attrs:{"data-toggle":"modal","data-target":"#AdjustCashAccountModal"},on:{click:t.adjustBankAccount}},[s("i",{staticClass:"fas fa-sliders-h"}),t._v(" Adjust Account\r\n            \t")])])])])]),t._v(" "),s("AdjustCashAccountForm")],1)}),[],!1,null,null,null).exports,CashAccountMasterContentBody:Object(e.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("div",{staticClass:"card",staticStyle:{"min-height":"565px !important"}},[a("div",{staticClass:"card-head pl-1 pr-1"},[this._v("Account Transection Details")]),this._v(" "),a("div",{staticClass:"card-body pt-1 pb-1 pl-1 pr-1"},[this._v("\r\n\t\tTransection\r\n\r\n\t")])])])}],!1,null,null,null).exports},data:function(){return{}},methods:{},created:function(){}},r=Object(e.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("CashAccountMasterContentHead")],1)]),this._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("CashAccountMasterContentBody")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);
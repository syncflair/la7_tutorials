(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{329:function(t,e,a){"use strict";a.r(e);var i={name:"childCategory",data:function(){return{categoryList:""}},methods:{getCategoryList:function(t){var e=this;this.$Progress.start(),axios.get("/spa/getCatList/"+t).then((function(t){e.$Progress.finish(),e.categoryList=t.data})).catch((function(){}))}},mounted:function(){},computed:{},created:function(){var t=this;FireEvent.$on("getCategoryID",(function(e){t.getCategoryList(e)}))}},n=a(0),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card vue-card-item"},[a("div",{staticClass:"card-header"},[t._v(" Display Child Category here")]),t._v(" "),a("div",{staticClass:"card-body"},[0===t.categoryList.length?a("div",[a("span",[t._v(" -- No Child Category Found")])]):a("div",[a("ul",t._l(t.categoryList,(function(e){return a("li",[t._v(t._s(e.id)+" - "+t._s(e.cat_name)+" ")])})),0)])])])}),[],!1,null,null,null);e.default=s.exports}}]);
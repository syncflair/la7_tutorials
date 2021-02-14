(self.webpackChunk=self.webpackChunk||[]).push([[9623],{6334:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});const i={name:"search-app-one",props:{autoCompleteData:{required:!0},SearchByOptions:{required:!0},filterBy:{required:!0},pagination:{required:!0}},data:function(){return{selectOption:"",itemListHeight:33.75,selectedItem:null,searchText:"",autoQuery:"",selected:0,visible:!1,listVisible:!1}},computed:{},methods:{searchIt:function(){var e=null===this.selectedItem?this.searchText:this.selectedItem[this.filterBy];""===e?FireEvent.$emit("AfterChange"):FireEvent.$emit("searchData",{search_key:e,search_option:this.selectOption}),this.selectedItem&&(this.searchText=this.selectedItem[this.filterBy],this.selectedItem=null)},autoSearch:_.debounce((function(e){FireEvent.$emit("AutoCompleteSearch",e.target.value)}),200),toggleVisible:function(){var e=this;this.visible=!this.visible,this.autoQuery="",setTimeout((function(){e.$refs.autoSearchField.focus()}),50)},itemClicked:function(e){this.selected=e,this.selectItem()},selectItem:function(){null!=this.autoCompleteData[this.selected]&&(this.selectedItem=this.autoCompleteData[this.selected]),this.visible=!1,this.$refs.searchText.focus()},up:function(){0!==this.selected&&(this.selected-=1,this.scrollToItem())},down:function(){this.selected>=this.autoCompleteData.length-1||(this.selected+=1,this.scrollToItem())},scrollToItem:function(){this.$refs.optionList.scrollTop=this.selected*this.itemListHeight}},created:function(){}};const o=(0,s(51900).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"select-option"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectOption,expression:"selectOption"}],staticClass:"form-control form-control-sm",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectOption=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v("Search by...")]),e._v(" "),e._l(e.SearchByOptions,(function(t,i){return s("option",{key:i,domProps:{value:t.field_name}},[e._v("\n\t\t\t\t\t"+e._s(t.show_name)+"\n\t\t\t\t")])}))],2)])]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"autoCompleteSearch "},[s("div",{staticClass:"input-group input-control-sm searchBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedItem?e.selectedItem[e.filterBy]:e.searchText,expression:"selectedItem ? selectedItem[filterBy] : searchText "}],ref:"searchText",staticClass:"form-control form-control-sm form-control-navbar",attrs:{type:"text",placeholder:"Search...","aria-label":"Search"},domProps:{value:e.selectedItem?e.selectedItem[e.filterBy]:e.searchText},on:{mousedown:e.toggleVisible,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchIt(t)},input:function(t){t.target.composing||(e.selectedItem?e.selectedItem[e.filterBy]:e.searchText=t.target.value)}}}),e._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-navbar btn-sm border",on:{click:e.searchIt}},[s("i",{staticClass:"fas fa-search blue"})])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"popOver"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.autoQuery,expression:"autoQuery"}],ref:"autoSearchField",staticClass:"form-control form-control-sm form-control-navbar",attrs:{type:"text",placeholder:"Start typing..."},domProps:{value:e.autoQuery},on:{keyup:e.autoSearch,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectItem(t)}],blur:function(t){e.visible=!1},input:function(t){t.target.composing||(e.autoQuery=t.target.value)}}}),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.listVisible,expression:"listVisible === true"}],ref:"optionList",staticClass:"optionList dropdown-menu-"},e._l(e.autoCompleteData,(function(t,i){return(""===e.autoQuery?e.listVisible=!1:e.listVisible=!0)?s("li",{key:t[e.filterBy],class:{selected:e.selected==i},on:{mousedown:function(t){return e.itemClicked(i)}}},[e._v("\t        \t\n\t        \t\t"+e._s(t[e.filterBy])+"\t \n\t        \t\t                      \n\t        ")]):e._e()})),0)])])])])}),[],!1,null,null,null).exports},51900:(e,t,s)=>{"use strict";function i(e,t,s,i,o,n,r,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:c}}s.d(t,{Z:()=>i})}}]);
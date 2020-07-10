(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CategoryStore-VX"],{

/***/ "./resources/js/store/CategoryStore.js":
/*!*********************************************!*\
  !*** ./resources/js/store/CategoryStore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CategoryStore = {
  namespaced: true,
  state: function state() {
    return {
      //accessable from any where 
      vuexTest: 'This is first test message',
      //searchText: '',
      categories: {},
      pagination: {
        current_page: 1,
        per_page: 0
      },
      categoryList: '',
      viewCategoryData: '',
      testQuery: {},
      autoSearchData: {}
    };
  },
  // state: {
  //    	//accessable from any where 
  //    	vuexTest: 'This is first test message',
  //    	categories: {},
  //    },/*end state*/
  getters: {
    vuexTest: function vuexTest(state) {
      return state.vuexTest;
    },
    //return data from state called by computed function  
    categories: function categories(state) {
      return state.categories;
    },
    pagination: function pagination(state) {
      return state.pagination;
    },
    testQuery: function testQuery(state) {
      return state.testQuery;
    }
  },

  /*end getters*/
  mutations: {
    //return data to state
    FETCH_CATEGORY_DATA: function FETCH_CATEGORY_DATA(state, categories) {
      return state.categories = categories;
    },
    FATCH_PAGINATION: function FATCH_PAGINATION(state, pagination) {
      return state.pagination = pagination;
    },
    CATEGORY_LIST: function CATEGORY_LIST(state, data) {
      return state.categoryList = data;
    },
    VIEW_CATEGORY: function VIEW_CATEGORY(state, data) {
      return state.viewCategoryData = data;
    },
    //       changePerPageMutation(state, perPage){
    //       	return state.pagination.per_page = perPage; 
    //       },
    //       resetCurrentPageMutation(state, currentPage) {
    //     return state.pagination.current_page = currentPage; //for per_page function
    // }
    // getResultsData(state, categoriesData) {
    //     return state.categories = categoriesData
    // },
    TEST_QUERY: function TEST_QUERY(state, data) {
      return state.testQuery = data;
    },
    AUTO_SEARCH_DATA: function AUTO_SEARCH_DATA(state, data) {
      return state.autoSearchData = data;
    }
  },

  /*end Mutations*/
  actions: {
    //send data to mutations function that initiate from mounted or created with dispatch
    //fetchCategory({commit}){  
    fetchCategory: function fetchCategory(context, payload) {
      var perPageVelue;

      if (!payload) {
        perPageVelue = 10;
      } else {
        perPageVelue = payload;
      }

      axios.get('/spa/MultiComponent?page=' + context.state.pagination.current_page + '&perPage=' + perPageVelue).then(function (response) {
        context.commit('FETCH_CATEGORY_DATA', response.data);
        context.commit('FATCH_PAGINATION', response.data); //for pagination
        //console.log(response.data);
      })["catch"](function () {//toastr.warning('Something is wrong!');
      });
    },
    searching: function searching(context, payload) {
      var query = payload.key1;
      var query2 = payload.key2; //alert(query2);

      axios.get('/spa/searchCategoryData?page=' + context.state.pagination.current_page + '&perPage=' + context.state.pagination.per_page + '&q=' + query) //axios.get('/spa/searchCategoryData?q='+query)
      .then(function (response) {
        context.commit('FETCH_CATEGORY_DATA', response.data); //this.categories = response.data; // is an object... use when pagination	                                      
      })["catch"](function () {});
    },
    AutoCompleteSearch: function AutoCompleteSearch(context, payload) {
      var query = payload.key1; //let query2 = payload.key2; 

      axios.get('/spa/searchCategoryData?&q=' + query) //axios.get('/spa/searchCategoryData?q='+query)
      .then(function (response) {
        context.commit('AUTO_SEARCH_DATA', response.data.data); //this.categories = response.data; // is an object... use when pagination	                                      
      })["catch"](function () {});
    },
    listCategory: function listCategory(context, payload) {
      var id = payload;
      axios.get('/spa/getCatList/' + id).then(function (response) {
        context.commit('CATEGORY_LIST', response.data);
      })["catch"](function () {});
    },
    viewCategory: function viewCategory(context, payload) {
      context.commit('VIEW_CATEGORY', payload);
    },
    // fetchCategoryPerPage(context, perPage) {
    // 	context.commit('changePerPageMutation', perPage);	
    // 	context.commit('resetCurrentPageMutation', 1);
    // },
    //function for pagination // Our method to GET results from a Laravel endpoint
    // getResultsPage({commit}, page ) {
    //   axios.get('/spa/category?page=' + page)
    //   .then( (response) => {
    //     commit('getResultsData', response.data)
    //   });
    // }, 
    testQuery: function testQuery(context, payload) {
      axios.get('/spa/testQuery').then(function (response) {
        context.commit('TEST_QUERY', response.data);
      })["catch"](function () {});
    }
  }
  /*end actions*/

};
/* harmony default export */ __webpack_exports__["default"] = (CategoryStore);

/***/ })

}]);
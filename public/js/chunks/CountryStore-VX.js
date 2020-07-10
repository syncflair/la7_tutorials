(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CountryStore-VX"],{

/***/ "./resources/js/store/CountryStore.js":
/*!********************************************!*\
  !*** ./resources/js/store/CountryStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CountryStore = {
  namespaced: true,
  state: function state() {
    return {
      //accessable from any where 
      Countries: {},
      pagination: {
        current_page: 1,
        per_page: 0
      } //autoSearchData: {},

    };
  },

  /*end state*/
  getters: {},

  /*end getters*/
  mutations: {
    //return data to state
    FETCH_COUNTRY_DATA: function FETCH_COUNTRY_DATA(state, Countries) {
      return state.Countries = Countries;
    },
    FATCH_PAGINATION: function FATCH_PAGINATION(state, pagination) {
      return state.pagination = pagination;
    }
  },

  /*end Mutations*/
  actions: {
    fetchCountry: function fetchCountry(context, payload) {
      var perPageVelue;

      if (!payload) {
        perPageVelue = 10;
      } else {
        perPageVelue = payload;
      }

      axios.get('/spa/Country-Info?page=' + context.state.pagination.current_page + '&perPage=' + perPageVelue).then(function (response) {
        context.commit('FETCH_COUNTRY_DATA', response.data.data); //use for only show data

        context.commit('FATCH_PAGINATION', response.data); //for pagination
        //console.log(response.data);
      })["catch"](function () {//toastr.warning('Something is wrong!');
      });
    }
  }
  /*end actions*/

};
/* harmony default export */ __webpack_exports__["default"] = (CountryStore);

/***/ })

}]);
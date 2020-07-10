(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commonStoreForAll-VX"],{

/***/ "./resources/js/store/commonStoreForAll.js":
/*!*************************************************!*\
  !*** ./resources/js/store/commonStoreForAll.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var commonStoreForAll = {
  namespaced: true,
  state: function state() {
    return {
      //accessable from any where 
      userStatus: {} //get data from user_status table

    };
  },

  /*end state*/
  getters: {// userStatus: state => {
    //   return state.userStatus
    // },
  },

  /*end getters*/
  mutations: {
    FETCH_USER_STATUS: function FETCH_USER_STATUS(state, data) {
      return state.userStatus = data;
    }
  },

  /*end Mutations*/
  actions: {
    userStatus: function userStatus(context) {
      axios.get('/spa/user-status-info').then(function (response) {
        context.commit('FETCH_USER_STATUS', response.data); //console.log(response.data);
      })["catch"](function () {//toastr.warning('Something is wrong!');
      });
    }
  }
  /*end actions*/

};
/* harmony default export */ __webpack_exports__["default"] = (commonStoreForAll);

/***/ })

}]);
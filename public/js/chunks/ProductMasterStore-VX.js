(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProductMasterStore-VX"],{

/***/ "./resources/js/store/ProductMasterStore.js":
/*!**************************************************!*\
  !*** ./resources/js/store/ProductMasterStore.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ProductMasterStore = {
  namespaced: true,
  state: function state() {
    return {
      //accessable from any where 
      products: {},
      pagination: {
        current_page: 1,
        per_page: 0
      },
      autoCompleteData: {},
      //for Single Select
      autoSearchBrands: {},
      selectedBrand: [],
      //for multiselect option
      autoSearchProducts: {},
      selectedProductList: [],
      //selectedSupplierList:[],
      selectedCategoryList: [],
      autoSearchVendors: {},
      selectedVendorList: []
    };
  },

  /*end state*/
  getters: {},

  /*end getters*/
  mutations: {
    //return data to state
    FETCH_DATA: function FETCH_DATA(state, data) {
      return state.products = data;
    },
    FATCH_PAGINATION: function FATCH_PAGINATION(state, data) {
      return state.pagination = data;
    },
    AUTO_COMPLETE_DATA: function AUTO_COMPLETE_DATA(state, data) {
      return state.autoCompleteData = data;
    },
    //Single Select 
    AUTO_COMPLETE_DATA_FOR_BRAND: function AUTO_COMPLETE_DATA_FOR_BRAND(state, data) {
      return state.autoSearchBrands = data;
    },
    SELECTED_BRAND: function SELECTED_BRAND(state, data) {
      return state.selectedBrand = data;
    },
    //for multiselect
    AUTO_COMPLETE_DATA_FOR_PRODUCT: function AUTO_COMPLETE_DATA_FOR_PRODUCT(state, data) {
      return state.autoSearchProducts = data;
    },
    SELECTED_PRODUCT_LIST: function SELECTED_PRODUCT_LIST(state, data) {
      return state.selectedProductList = data;
    },
    //SELECTED_SUPPLIER_LIST(state, data){  return state.selectedSupplierList = data; },
    SELECTED_CATEGORY_LIST: function SELECTED_CATEGORY_LIST(state, data) {
      return state.selectedCategoryList = data;
    },
    SELECTED_VENDOR_LIST: function SELECTED_VENDOR_LIST(state, data) {
      return state.selectedVendorList = data;
    },
    AUTO_COMPLETE_DATA_FOR_VENDORS: function AUTO_COMPLETE_DATA_FOR_VENDORS(state, data) {
      return state.autoSearchVendors = data;
    }
  },

  /*end Mutations*/
  actions: {
    fetchData: function fetchData(context, payload) {
      var perPageVelue;

      if (!payload) {
        perPageVelue = 100;
      } else {
        perPageVelue = payload;
      }

      axios.get('/spa/Product-Info?page=' + context.state.pagination.current_page + '&perPage=' + perPageVelue).then(function (response) {
        context.commit('FETCH_DATA', response.data.data); //use for only show data

        context.commit('FATCH_PAGINATION', response.data); //for pagination
        //console.log(response.data);
      })["catch"](function () {//toastr.warning('Something is wrong!');
      });
    },
    //For Search
    searching: function searching(context, payload) {
      var searchKey = payload.search_key;
      var searchOption = payload.search_option; //alert(query2);

      axios.get('/spa/searchProductData?page=' + context.state.pagination.current_page + '&perPage=' + context.state.pagination.per_page + '&q=' + searchKey + '&so=' + searchOption) //axios.get('/spa/searchProductData?q='+query)
      .then(function (response) {
        context.commit('FETCH_DATA', response.data.data);
        context.commit('FATCH_PAGINATION', response.data); //for pagination                                       
      })["catch"](function () {});
    },
    //For Search
    AutoCompleteSearch: function AutoCompleteSearch(context, payload) {
      var query = payload; //let query2 = payload.key2; 

      axios.get('/spa/searchProductData?&q=' + query) //axios.get('/spa/searchProductData?q='+query)
      .then(function (response) {
        context.commit('AUTO_COMPLETE_DATA', response.data.data); //this.categories = response.data; // is an object... use when pagination                                         
      })["catch"](function () {});
    },
    //For selected Category
    fetchSelectedCategoryList: function fetchSelectedCategoryList(context, payload) {
      //use axios.post instead of axios.get , becouse is contaion array  
      axios.post('/spa/Product-getCategoryList/', {
        q: payload
      }).then(function (response) {
        context.commit('SELECTED_CATEGORY_LIST', response.data);
      })["catch"](function () {});
    },
    // //For selected Supplier
    // fetchSelectedSupplierList(context, payload){ 
    //   //use axios.post instead of axios.get , becouse is contaion array    
    //   axios.post('/spa/Product-getSupplierList/', {q: payload})
    //     .then( ( response ) => {
    //             //console.log(response); 
    //             context.commit('SELECTED_SUPPLIER_LIST', response.data);                                       
    //     }).catch(() => { }) 
    // },
    //For selected product
    fetchSelectedProductList: function fetchSelectedProductList(context, payload) {
      //use axios.post instead of axios.get , becouse is contaion array    
      axios.post('/spa/Product-getProductList/', {
        q: payload
      }).then(function (response) {
        context.commit('SELECTED_PRODUCT_LIST', response.data);
      })["catch"](function () {});
    },
    //auto complete search for product
    AutoCompleteSearchForProduct: function AutoCompleteSearchForProduct(context, payload) {
      var query = payload;
      axios.get('/spa/AutoCompleteProductData?&q=' + query).then(function (response) {
        //console.log(response.data);
        context.commit('AUTO_COMPLETE_DATA_FOR_PRODUCT', response.data);
      })["catch"](function () {});
    },
    AutoCompleteSearchForVendors: function AutoCompleteSearchForVendors(context, payload) {
      var query = payload;
      axios.get('/spa/AutoCompleteVendorData?&q=' + query).then(function (response) {
        context.commit('AUTO_COMPLETE_DATA_FOR_VENDORS', response.data);
      })["catch"](function () {});
    },
    //For selected Supplier
    fetchSelectedVendorList: function fetchSelectedVendorList(context, payload) {
      //use axios.post instead of axios.get , becouse is contaion array    
      axios.post('/spa/getSelectedVendorList/', {
        q: payload
      }).then(function (response) {
        //console.log(response); 
        context.commit('SELECTED_VENDOR_LIST', response.data);
      })["catch"](function () {});
    },
    //For Brands
    AutoCompleteSearchForDataBrand: function AutoCompleteSearchForDataBrand(context, payload) {
      var query = payload;
      axios.get('/spa/AutoCompleteBrandData?&q=' + query).then(function (response) {
        context.commit('AUTO_COMPLETE_DATA_FOR_BRAND', response.data);
      })["catch"](function () {});
    },
    //For selected Brand Shop
    fetchSelectedBrand: function fetchSelectedBrand(context, payload) {
      //use axios.post instead of axios.get , becouse is contaion array  
      axios.post('/spa/getSelectedBrand/', {
        q: payload
      }).then(function (response) {
        context.commit('SELECTED_BRAND', response.data);
      })["catch"](function () {});
    }
  }
  /*end actions*/

};
/* harmony default export */ __webpack_exports__["default"] = (ProductMasterStore);

/***/ })

}]);
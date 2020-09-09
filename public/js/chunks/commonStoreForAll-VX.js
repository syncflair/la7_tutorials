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
      authUser: {},
      authPermissions: {},
      systemSettings: {},
      adminRoles: {},
      branches: {},
      chartOfAccountHeads: {},
      allLanguages: {},
      allCurrencies: {},
      allDepertments: {},
      autoSearchDepartments: {},
      userStatus: {},
      //get data from user_status table
      AllStatus: {},
      //get status for order, payment, purchase, porduct
      jobTitles: {},
      Countries: {},
      Divisions: {},
      Districts: {},
      Dist_Zones: {},
      AllAttributes: {},
      AllAttributeValues: {},
      AllBrands: {},
      allBrandShops: {},
      AllCategory: {},
      autoSearchCategories: {},
      autoSearchSuppliers: {},
      AllSpecifications: {},
      allCustomerGroups: {},
      allCustomerMemberships: {},
      allUnits: {}
    };
  },

  /*end state*/
  getters: {//userStatus: state => { return state.userStatus },
  },

  /*end getters*/
  mutations: {
    //commit from resources/js/components/admin/AdminWrapper.vue
    AUTH_USER: function AUTH_USER(state, data) {
      return state.authUser = data;
    },
    AUTH_PERMISSIONS: function AUTH_PERMISSIONS(state, data) {
      return state.authPermissions = data;
    },
    SYSTEM_SETTINGS: function SYSTEM_SETTINGS(state, data) {
      return state.systemSettings = data;
    },
    //End Commit
    //get from action
    FETCH_ROLES: function FETCH_ROLES(state, data) {
      return state.adminRoles = data;
    },
    FETCH_BRANCHES: function FETCH_BRANCHES(state, data) {
      return state.branches = data;
    },
    FETCH_CHART_OF_ACCOUNT_HEADS: function FETCH_CHART_OF_ACCOUNT_HEADS(state, data) {
      return state.chartOfAccountHeads = data;
    },
    FETCH_LANGUAGES: function FETCH_LANGUAGES(state, data) {
      return state.allLanguages = data;
    },
    FETCH_CURRENCIES: function FETCH_CURRENCIES(state, data) {
      return state.allCurrencies = data;
    },
    FETCH_DEPARTMENTS: function FETCH_DEPARTMENTS(state, data) {
      return state.allDepertments = data;
    },
    FETCH_JOB_TITLE: function FETCH_JOB_TITLE(state, data) {
      return state.jobTitles = data;
    },
    FETCH_USER_STATUS: function FETCH_USER_STATUS(state, data) {
      return state.userStatus = data;
    },
    FETCH_ALL_STATUS: function FETCH_ALL_STATUS(state, data) {
      return state.AllStatus = data;
    },
    FETCH_COUNTRY_DATA: function FETCH_COUNTRY_DATA(state, Countries) {
      return state.Countries = Countries;
    },
    FETCH_DIVISION_DATA: function FETCH_DIVISION_DATA(state, Divisions) {
      return state.Divisions = Divisions;
    },
    FETCH_DISTRICT_DATA: function FETCH_DISTRICT_DATA(state, Districts) {
      return state.Districts = Districts;
    },
    FETCH_DISTRICT_ZONE_DATA: function FETCH_DISTRICT_ZONE_DATA(state, Dist_Zones) {
      return state.Dist_Zones = Dist_Zones;
    },
    FETCH_ATTRIBUTE_DATA: function FETCH_ATTRIBUTE_DATA(state, data) {
      return state.AllAttributes = data;
    },
    FETCH_ATTRIBUTE_VALUE_DATA: function FETCH_ATTRIBUTE_VALUE_DATA(state, data) {
      return state.AllAttributeValues = data;
    },
    FETCH_BRAND_DATA: function FETCH_BRAND_DATA(state, data) {
      return state.AllBrands = data;
    },
    FETCH_BRAND_SHOP_DATA: function FETCH_BRAND_SHOP_DATA(state, data) {
      return state.allBrandShops = data;
    },
    FETCH_CATEGORY_DATA: function FETCH_CATEGORY_DATA(state, data) {
      return state.AllCategory = data;
    },
    FETCH_SPECIFICATION_DATA: function FETCH_SPECIFICATION_DATA(state, data) {
      return state.AllSpecifications = data;
    },
    FETCH_CUSTOMER_GROUPS_DATA: function FETCH_CUSTOMER_GROUPS_DATA(state, data) {
      return state.allCustomerGroups = data;
    },
    FETCH_CUSTOMER_MEMBERSHIP_DATA: function FETCH_CUSTOMER_MEMBERSHIP_DATA(state, data) {
      return state.allCustomerMemberships = data;
    },
    FETCH_UNITS_DATA: function FETCH_UNITS_DATA(state, data) {
      return state.allUnits = data;
    },
    //#####################################Search ###########################################
    AUTO_COMPLETE_DATA_FOR_DEPARTMENTS: function AUTO_COMPLETE_DATA_FOR_DEPARTMENTS(state, data) {
      return state.autoSearchDepartments = data;
    },
    AUTO_COMPLETE_DATA_FOR_CATEGORIES: function AUTO_COMPLETE_DATA_FOR_CATEGORIES(state, data) {
      return state.autoSearchCategories = data;
    },
    AUTO_COMPLETE_DATA_FOR_SUPPLIERS: function AUTO_COMPLETE_DATA_FOR_SUPPLIERS(state, data) {
      return state.autoSearchSuppliers = data;
    }
  },

  /*end Mutations*/
  actions: {
    userStatus: function userStatus(context) {
      axios.get('/spa/user-status-info').then(function (response) {
        context.commit('FETCH_USER_STATUS', response.data);
      })["catch"](function () {});
    },
    AllStatus: function AllStatus(context, payload) {
      var query = payload;
      axios.get('/spa/StatusMaster-Info/getAllStatus?&q=' + query).then(function (response) {
        context.commit('FETCH_ALL_STATUS', response.data);
      })["catch"](function () {});
    },
    fetchJobTitles: function fetchJobTitles(context) {
      axios.get('/spa/JobTitle-Info/GetJobTitles').then(function (response) {
        context.commit('FETCH_JOB_TITLE', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchRoles: function fetchRoles(context) {
      //return role 1 to 6
      axios.get('/spa/Role-Info/GetRoles').then(function (response) {
        context.commit('FETCH_ROLES', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchBranches: function fetchBranches(context) {
      axios.get('/spa/Branch-Info/getBranches').then(function (response) {
        context.commit('FETCH_BRANCHES', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchChartOfAccountHeads: function fetchChartOfAccountHeads(context) {
      axios.get('/spa/AccountHeads-Info/getChartOfAccountHeads').then(function (response) {
        context.commit('FETCH_CHART_OF_ACCOUNT_HEADS', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchLanguages: function fetchLanguages(context) {
      axios.get('/spa/Language-Info/getLanguages').then(function (response) {
        context.commit('FETCH_LANGUAGES', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchCurrencies: function fetchCurrencies(context) {
      axios.get('/spa/Currency-Info/getCurrencies').then(function (response) {
        context.commit('FETCH_CURRENCIES', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchDepartments: function fetchDepartments(context) {
      axios.get('/spa/Department-Info/getDetartments').then(function (response) {
        context.commit('FETCH_DEPARTMENTS', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchCountryList: function fetchCountryList(context) {
      axios.get('/spa/Country-Info/GetCountry').then(function (response) {
        context.commit('FETCH_COUNTRY_DATA', response.data); //use for only show data
      })["catch"](function () {});
    },
    // fetchDivisionList(context){
    //   axios.get('/spa/Division-Info/GetDivision')
    //   .then( (response) => {
    //     context.commit('FETCH_DIVISION_DATA', response.data); //use for only show data
    //   }).catch( () => { })
    // },
    fetchDivisionList: function fetchDivisionList(context, payload) {
      axios.get('/spa/Division-Info/GetDivision?&id=' + payload).then(function (response) {
        context.commit('FETCH_DIVISION_DATA', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchDistrictList: function fetchDistrictList(context, payload) {
      axios.get('/spa/District-Info/GetDistrict?&id=' + payload).then(function (response) {
        context.commit('FETCH_DISTRICT_DATA', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchDistrictZoneList: function fetchDistrictZoneList(context, payload) {
      axios.get('/spa/DistrictZone-Info/GetDistrictZone?&id=' + payload).then(function (response) {
        context.commit('FETCH_DISTRICT_ZONE_DATA', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchAttributeList: function fetchAttributeList(context) {
      axios.get('/spa/Attribute-Info/GetAttributes').then(function (response) {
        context.commit('FETCH_ATTRIBUTE_DATA', response.data);
      })["catch"](function () {});
    },
    fetchAttributeValue: function fetchAttributeValue(context, payload) {
      var query = payload;
      axios.get('/spa/AttributeValue-Info/GetAttributeValue?&q=' + query).then(function (response) {
        context.commit('FETCH_ATTRIBUTE_VALUE_DATA', response.data);
      })["catch"](function () {});
    },
    fetchBrands: function fetchBrands(context) {
      axios.get('/spa/Brand-Info/getBrands').then(function (response) {
        context.commit('FETCH_BRAND_DATA', response.data);
      })["catch"](function () {});
    },
    fetchBrandShops: function fetchBrandShops(context) {
      axios.get('/spa/BrandShop-Info/getBrandShops').then(function (response) {
        context.commit('FETCH_BRAND_SHOP_DATA', response.data);
      })["catch"](function () {});
    },
    fetchCategory: function fetchCategory(context) {
      axios.get('/spa/CategoryMaster-Info/getCategory').then(function (response) {
        context.commit('FETCH_CATEGORY_DATA', response.data); //use for only show data
      })["catch"](function () {});
    },
    fetchSpecifications: function fetchSpecifications(context) {
      axios.get('/spa/Specification-Info/getSpecification').then(function (response) {
        context.commit('FETCH_SPECIFICATION_DATA', response.data);
      })["catch"](function () {});
    },
    fetchCustomerGroups: function fetchCustomerGroups(context) {
      axios.get('/spa/customerGroup-Info/getCustomerGroup').then(function (response) {
        context.commit('FETCH_CUSTOMER_GROUPS_DATA', response.data);
      })["catch"](function () {});
    },
    fetchCustomerMemberships: function fetchCustomerMemberships(context) {
      axios.get('/spa/customerMembership-Info/getCustomerMembership').then(function (response) {
        context.commit('FETCH_CUSTOMER_MEMBERSHIP_DATA', response.data);
      })["catch"](function () {});
    },
    fetchUnits: function fetchUnits(context) {
      axios.get('/spa/UnitsMaster-Info/getAllUnits').then(function (response) {
        context.commit('FETCH_UNITS_DATA', response.data);
      })["catch"](function () {});
    },
    //############################################# Search ############################################
    AutoCompleteSearchForDepartment: function AutoCompleteSearchForDepartment(context, payload) {
      var query = payload;
      axios.get('/spa/searchDepartmentData?&q=' + query).then(function (response) {
        context.commit('AUTO_COMPLETE_DATA_FOR_DEPARTMENTS', response.data);
      })["catch"](function () {});
    },
    AutoCompleteSearchForCategory: function AutoCompleteSearchForCategory(context, payload) {
      var query = payload;
      axios.get('/spa/AutoCompleteCategoryData?&q=' + query).then(function (response) {
        context.commit('AUTO_COMPLETE_DATA_FOR_CATEGORIES', response.data);
      })["catch"](function () {});
    },
    AutoCompleteSearchForSuppliers: function AutoCompleteSearchForSuppliers(context, payload) {
      var query = payload;
      axios.get('/spa/AutoCompleteSupplierData?&q=' + query).then(function (response) {
        context.commit('AUTO_COMPLETE_DATA_FOR_SUPPLIERS', response.data);
      })["catch"](function () {});
    }
  }
  /*end actions*/

};
/* harmony default export */ __webpack_exports__["default"] = (commonStoreForAll);

/***/ })

}]);
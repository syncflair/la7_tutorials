const commonStoreForAll ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      authUser: {},
      authPermissions:{},
      systemSettings:{},
      //isitwebsiteCheck:'',

      adminRoles:{},
      branches:{},
      chartOfAccountHeads:{},
      allLanguages:{},
      allCurrencies:{},
      allDepertments:{},
      autoSearchDepartments:{},
      userStatus: {}, //get data from user_status table
	    AllStatus: {}, //get status for order, payment, purchase, porduct

      OrderStatus: {},
      StockStatus: {},
      PaymentStatus: {},
      ReturnStatus: {},
      ReturnActions: {},

      jobTitles:{},      
	    Countries:{},
      Divisions:{}, 
      Districts:{},
      Dist_Zones:{},
      AllAttributes:{}, 
      AllAttributeValues:{},
      AllBrands:{},  
      allBrandShops:{}, 
      AllCategory:{},
      autoSearchCategories:{}, 
      autoSearchSuppliers:{}, 
      AllSpecifications:{},
      allCustomerGroups:{},
      allCustomerMemberships:{},
      allUnits:{},
      
      
	}),/*end state*/

  getters: {
    	//userStatus: state => { return state.userStatus },
  },/*end getters*/


  mutations: {
      //commit from resources/js/components/admin/AdminWrapper.vue
      AUTH_USER(state, data) { return state.authUser = data; },
      AUTH_PERMISSIONS(state, data){ return state.authPermissions = data;},
      SYSTEM_SETTINGS(state, data){ return state.systemSettings = data;},
      //IS_IT_WEBSITE_CHECK(state, data) { return state.isitwebsiteCheck = data; },
      //End Commit

      //get from action
      FETCH_ROLES(state, data){return state.adminRoles = data;}, 
      FETCH_BRANCHES(state, data){return state.branches = data;},       
      FETCH_CHART_OF_ACCOUNT_HEADS(state, data){return state.chartOfAccountHeads = data;},  

      FETCH_LANGUAGES(state, data){return state.allLanguages = data;},       
      FETCH_CURRENCIES(state, data){return state.allCurrencies = data;},       
      FETCH_DEPARTMENTS(state, data){return state.allDepertments = data;},       
      FETCH_JOB_TITLE(state, data){return state.jobTitles = data;}, 
      FETCH_USER_STATUS(state, data) { return state.userStatus = data; },
    	FETCH_ALL_STATUS(state, data) { return state.AllStatus = data; },

      FETCH_ORDER_STATUS(state, data) { return state.OrderStatus = data; },
      FETCH_STOCK_STATUS(state, data) { return state.StockStatus = data; },
      FETCH_PAYMENT_STATUS(state, data) { return state.PaymentStatus = data; },
      FETCH_RETURN_STATUS(state, data) { return state.ReturnStatus = data; },
      FETCH_RETURN_ACTIONS(state, data) { return state.ReturnActions = data; },

      FETCH_COUNTRY_DATA(state, Countries) { return state.Countries = Countries; },
      FETCH_DIVISION_DATA(state, Divisions) { return state.Divisions = Divisions; },
      FETCH_DISTRICT_DATA(state, Districts) { return state.Districts = Districts; },
      FETCH_DISTRICT_ZONE_DATA(state, Dist_Zones) { return state.Dist_Zones = Dist_Zones; },
      FETCH_ATTRIBUTE_DATA(state, data) { return state.AllAttributes = data; },
      FETCH_ATTRIBUTE_VALUE_DATA(state, data) { return state.AllAttributeValues = data; },
      FETCH_BRAND_DATA(state, data) { return state.AllBrands = data; },
      FETCH_BRAND_SHOP_DATA(state, data) { return state.allBrandShops = data; },
      FETCH_CATEGORY_DATA(state, data) { return state.AllCategory = data; },
      FETCH_SPECIFICATION_DATA(state, data) { return state.AllSpecifications = data; },
      FETCH_CUSTOMER_GROUPS_DATA(state, data) { return state.allCustomerGroups = data; },
      FETCH_CUSTOMER_MEMBERSHIP_DATA(state, data) { return state.allCustomerMemberships = data; },
      FETCH_UNITS_DATA(state, data) { return state.allUnits = data; },
      
      //#####################################Search ###########################################
      AUTO_COMPLETE_DATA_FOR_DEPARTMENTS(state, data){return state.autoSearchDepartments = data;},       
      AUTO_COMPLETE_DATA_FOR_CATEGORIES(state, data){return state.autoSearchCategories = data;},       
      AUTO_COMPLETE_DATA_FOR_SUPPLIERS(state, data){return state.autoSearchSuppliers = data;},       



  },/*end Mutations*/

  actions: {         

      userStatus(context){
        axios.get('/spa/user-status-info')
        .then( (response) => {
          context.commit('FETCH_USER_STATUS', response.data);
        }).catch( () => { })
      },      

      AllStatus(context, payload){
        let query = payload;  
        axios.get('/spa/StatusMaster-Info/getAllStatus?&q='+query)
        .then( (response) => {
          context.commit('FETCH_ALL_STATUS', response.data);
        }).catch( () => { })
      },  

      fetchOrderStatus(context){
        axios.get('/spa/order-status-info/GetOrderStatus')
        .then( (response) => {
          context.commit('FETCH_ORDER_STATUS', response.data);
        }).catch( () => { })
      },

      fetchStockStatus(context){
        axios.get('/spa/stock-status-info/GetStockStatus')
        .then( (response) => {
          context.commit('FETCH_STOCK_STATUS', response.data);
        }).catch( () => { })
      },

      fetchPaymentStatus(context){
        axios.get('/spa/payment-status-info/GetPaymentStatus')
        .then( (response) => {
          context.commit('FETCH_PAYMENT_STATUS', response.data);
        }).catch( () => { })
      },

      fetchReturnStatus(context){
        axios.get('/spa/return-status-info/GetReturnStatus')
        .then( (response) => {
          context.commit('FETCH_RETURN_STATUS', response.data);
        }).catch( () => { })
      },

      fetchReturnActions(context){
        axios.get('/spa/return-action-info/getReturnAction')
        .then( (response) => {
          context.commit('FETCH_RETURN_ACTIONS', response.data);
        }).catch( () => { })
      },

      fetchJobTitles(context){ 
        axios.get('/spa/JobTitle-Info/GetJobTitles')
        .then( (response) => {
          context.commit('FETCH_JOB_TITLE', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchRoles(context){ //return role 1 to 6
        axios.get('/spa/Role-Info/GetRoles')
        .then( (response) => {
          context.commit('FETCH_ROLES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchBranches(context){ 
        axios.get('/spa/Branch-Info/getBranches')
        .then( (response) => {
          context.commit('FETCH_BRANCHES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchChartOfAccountHeads(context){ 
        axios.get('/spa/AccountHeads-Info/getChartOfAccountHeads')
        .then( (response) => {
          context.commit('FETCH_CHART_OF_ACCOUNT_HEADS', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchLanguages(context){ 
        axios.get('/spa/Language-Info/getLanguages')
        .then( (response) => {
          context.commit('FETCH_LANGUAGES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchCurrencies(context){ 
        axios.get('/spa/Currency-Info/getCurrencies')
        .then( (response) => {
          context.commit('FETCH_CURRENCIES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDepartments(context){ 
        axios.get('/spa/Department-Info/getDetartments')
        .then( (response) => {
          context.commit('FETCH_DEPARTMENTS', response.data); //use for only show data
        }).catch( () => { })
      },

		  fetchCountryList(context){
        axios.get('/spa/Country-Info/GetCountry')
        .then( (response) => {
          context.commit('FETCH_COUNTRY_DATA', response.data); //use for only show data
        }).catch( () => { })
      },      

      // fetchDivisionList(context){
      //   axios.get('/spa/Division-Info/GetDivision')
      //   .then( (response) => {
      //     context.commit('FETCH_DIVISION_DATA', response.data); //use for only show data
      //   }).catch( () => { })
      // },

      fetchDivisionList(context, payload){
        axios.get('/spa/Division-Info/GetDivision?&id='+payload)
        .then( (response) => {
          context.commit('FETCH_DIVISION_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDistrictList(context, payload){
        axios.get('/spa/District-Info/GetDistrict?&id='+payload)
        .then( (response) => {
          context.commit('FETCH_DISTRICT_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDistrictZoneList(context, payload){
        axios.get('/spa/DistrictZone-Info/GetDistrictZone?&id='+payload)
        .then( (response) => {
          context.commit('FETCH_DISTRICT_ZONE_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchAttributeList(context){
        axios.get('/spa/Attribute-Info/GetAttributes')
        .then( (response) => {
          context.commit('FETCH_ATTRIBUTE_DATA', response.data);
        }).catch( () => { })
      },

      fetchAttributeValue(context, payload){
        let query = payload;
        axios.get('/spa/AttributeValue-Info/GetAttributeValue?&q='+query)
        .then( (response) => {
          context.commit('FETCH_ATTRIBUTE_VALUE_DATA', response.data);
        }).catch( () => { })
      }, 

      fetchBrands(context){
        axios.get('/spa/Brand-Info/getBrands')
        .then( (response) => {
          context.commit('FETCH_BRAND_DATA', response.data);
        }).catch( () => { })
      },

      fetchBrandShops(context){
        axios.get('/spa/BrandShop-Info/getBrandShops')
        .then( (response) => {
          context.commit('FETCH_BRAND_SHOP_DATA', response.data);
        }).catch( () => { })
      },

      fetchCategory(context){ 
        axios.get('/spa/CategoryMaster-Info/getCategory')
        .then( (response) => {
          context.commit('FETCH_CATEGORY_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchSpecifications(context){
        axios.get('/spa/Specification-Info/getSpecification')
        .then( (response) => {
          context.commit('FETCH_SPECIFICATION_DATA', response.data);
        }).catch( () => { })
      },

      fetchCustomerGroups(context){
        axios.get('/spa/customerGroup-Info/getCustomerGroup')
        .then( (response) => {
          context.commit('FETCH_CUSTOMER_GROUPS_DATA', response.data);
        }).catch( () => { })
      },

      fetchCustomerMemberships(context){
        axios.get('/spa/customerMembership-Info/getCustomerMembership')
        .then( (response) => {
          context.commit('FETCH_CUSTOMER_MEMBERSHIP_DATA', response.data);
        }).catch( () => { })
      },

      fetchUnits(context){
        axios.get('/spa/UnitsMaster-Info/getAllUnits')
        .then( (response) => {
          context.commit('FETCH_UNITS_DATA', response.data);
        }).catch( () => { })
      },


      //############################################# Search ############################################
      AutoCompleteSearchForDepartment(context, payload){  
          let query = payload;  
          axios.get('/spa/searchDepartmentData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_DEPARTMENTS', response.data);                                        
          }).catch(() => { }) 
      },

      AutoCompleteSearchForCategory(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteCategoryData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_CATEGORIES', response.data);                                        
          }).catch(() => { }) 
      },

      AutoCompleteSearchForSuppliers(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteSupplierData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_SUPPLIERS', response.data);                                        
          }).catch(() => { }) 
      },


      


  } /*end actions*/

}

export default commonStoreForAll
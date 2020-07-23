const commonStoreForAll ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      authUser: {},
      authPermissions:{},
      adminRoles:{},
      branches:{},
      allLanguages:{},
      allDepertments:{},
      autoSearchDepartments:{},
	    userStatus: {}, //get data from user_status table
      jobTitles:{},
	    Countries:{},
      Divisions:{}, 
      Districts:{},
      Dist_Zones:{},
	}),/*end state*/

  getters: {
    	//userStatus: state => { return state.userStatus },
  },/*end getters*/


  mutations: {
      //commit from resources/js/components/admin/AdminWrapper.vue
      AUTH_USER(state, data) { return state.authUser = data; },
      AUTH_PERMISSIONS(state, data){ return state.authPermissions = data;},
      //End Commit

      //get from action
      FETCH_ROLES(state, data){return state.adminRoles = data;}, 
      FETCH_BRANCHES(state, data){return state.branches = data;},       
      FETCH_LANGUAGES(state, data){return state.allLanguages = data;},       
      FETCH_DEPARTMENTS(state, data){return state.allDepertments = data;},       
      FETCH_JOB_TITLE(state, data){return state.jobTitles = data;}, 
    	FETCH_USER_STATUS(state, data) { return state.userStatus = data; },
      FETCH_COUNTRY_DATA(state, Countries) { return state.Countries = Countries; },
      FETCH_DIVISION_DATA(state, Divisions) { return state.Divisions = Divisions; },
      FETCH_DISTRICT_DATA(state, Districts) { return state.Districts = Districts; },
      FETCH_DISTRICT_ZONE_DATA(state, Dist_Zones) { return state.Dist_Zones = Dist_Zones; },

      //#####################################Search ###########################################
      AUTO_COMPLETE_DATA_FOR_DEPARTMENTS(state, data){return state.autoSearchDepartments = data;},       



  },/*end Mutations*/

  actions: {
    	userStatus(context){
  		  axios.get('/spa/user-status-info')
  		  .then( (response) => {
  		    context.commit('FETCH_USER_STATUS', response.data);
  		    //console.log(response.data);
  		  }).catch( () => { })
  		},

      fetchJobTitles(context){ //return role 1 to 6
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

      fetchBranches(context){ //return role 1 to 6
        axios.get('/spa/Branch-Info/getBranches')
        .then( (response) => {
          context.commit('FETCH_BRANCHES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchLanguages(context){ //return role 1 to 6
        axios.get('/spa/Language-Info/getLanguages')
        .then( (response) => {
          context.commit('FETCH_LANGUAGES', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDepartments(context){ //return role 1 to 6
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

      fetchDivisionList(context){
        axios.get('/spa/Division-Info/GetDivision')
        .then( (response) => {
          context.commit('FETCH_DIVISION_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDistrictList(context){
        axios.get('/spa/District-Info/GetDistrict')
        .then( (response) => {
          context.commit('FETCH_DISTRICT_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchDistrictZoneList(context){
        axios.get('/spa/DistrictZone-Info/GetDistrictZone')
        .then( (response) => {
          context.commit('FETCH_DISTRICT_ZONE_DATA', response.data); //use for only show data
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


  } /*end actions*/

}

export default commonStoreForAll
const commonStoreForAll ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      authUser: {},
      authPermissions:{},
      adminRoles:{},
	    userStatus: {}, //get data from user_status table
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
    	FETCH_USER_STATUS(state, data) { return state.userStatus = data; },
      FETCH_COUNTRY_DATA(state, Countries) { return state.Countries = Countries; },
      FETCH_DIVISION_DATA(state, Divisions) { return state.Divisions = Divisions; },
      FETCH_DISTRICT_DATA(state, Districts) { return state.Districts = Districts; },
      FETCH_DISTRICT_ZONE_DATA(state, Dist_Zones) { return state.Dist_Zones = Dist_Zones; },

  },/*end Mutations*/

  actions: {
    	userStatus(context){
  		  axios.get('/spa/user-status-info')
  		  .then( (response) => {
  		    context.commit('FETCH_USER_STATUS', response.data);
  		    //console.log(response.data);
  		  }).catch( () => { })
  		},

		  fetchCountryList(context){
        axios.get('/spa/Country-Info/GetCountry')
        .then( (response) => {
          context.commit('FETCH_COUNTRY_DATA', response.data); //use for only show data
        }).catch( () => { })
      },

      fetchRoles(context){ //return role 1 to 6
        axios.get('/spa/Role-Info/GetRoles')
        .then( (response) => {
          context.commit('FETCH_ROLES', response.data); //use for only show data
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



  } /*end actions*/

}

export default commonStoreForAll
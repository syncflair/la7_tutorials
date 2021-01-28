const AuthenticationForAdmin ={

	namespaced: true,
	
	state: () => ({
      /**************************************************/
      /* Use for Admin authentication*/ 
      /**************************************************/
      isAdminAuthenticated: false,  //use for master admin area vue component middleware in app.js

      authUser: {},
      systemSettings:{},
      //authPermissions:{},
      authUserInfo: {},


         
      
	}),/*end state*/

	getters: {
	},/*end getters*/


	mutations: {

		/**************************************************/
		/* Use for admin authentication*/ 
		/**************************************************/
		//Mutation for customer authetication check form login methods
		IS_AUTHENTICATED_CHECK(state, data) { return state.isAdminAuthenticated = data; },

		AUTH_USER(state, data) { return state.authUser = data; },
      	SYSTEM_SETTINGS(state, data){ return state.systemSettings = data;},
      	//AUTH_PERMISSIONS(state, data){ return state.authPermissions = data;}, 
		AUTH_USER_INFO(state, data) { return state.authUserInfo = data; },


	},/*end Mutations*/

	actions: {    

		//get auth customer data after login if any later update 
		// fetchAuthCustomerData(context){
		//     axios.get('/auth/getAuthCustomerData')
		//     .then( (response) => {
		//       context.commit('AUTH_CUSTOMER_DATA', response.data);
		//     }).catch( () => { })
		// }, 

	    fetchAuthUserInfo(context, payload){
	        axios.get('/spaa/admin-child-profille-info?&id='+payload)
	        .then( (response) => {
	          context.commit('AUTH_USER_INFO', response.data); //use for only show data
	        }).catch( () => { })
	    },

	} /*end actions*/ 

}

export default AuthenticationForAdmin
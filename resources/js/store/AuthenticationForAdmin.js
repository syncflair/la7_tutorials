const AuthenticationForAdmin ={

	namespaced: true,
	
	state: () => ({
      /**************************************************/
      /* Use for Admin authentication*/ 
      /**************************************************/
      isAdminAuthenticated: false,  //use for master admin area vue component middleware in app.js

      // authUser: {},
      // authPermissions:{},
      // systemSettings:{},
         
      
	}),/*end state*/

	getters: {
	},/*end getters*/


	mutations: {

		/**************************************************/
		/* Use for Customer authentication*/ 
		/**************************************************/
		//Mutation for customer authetication check form login methods
		IS_AUTHENTICATED_CHECK(state, data) { return state.isAdminAuthenticated = data; },

		// AUTH_USER(state, data) { return state.authUser = data; },
		// AUTH_PERMISSIONS(state, data){ return state.authPermissions = data;},
		// SYSTEM_SETTINGS(state, data){ return state.systemSettings = data;},  

	},/*end Mutations*/

	actions: {    

		//get auth customer data after login if any later update 
		// fetchAuthCustomerData(context){
		//     axios.get('/auth/getAuthCustomerData')
		//     .then( (response) => {
		//       context.commit('AUTH_CUSTOMER_DATA', response.data);
		//     }).catch( () => { })
		// }, 

	} /*end actions*/ 

}

export default AuthenticationForAdmin
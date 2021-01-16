const AuthenticationForWebsite ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      isAuthenticated: false, 
      authCustomer: {}, 
      authCustomerAddress: {}, 
         
      
	}),/*end state*/

  getters: {
      //not used
    	isAuthenticated: state => { return state.isAuthenticated },
  },/*end getters*/


  mutations: {

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      //Mutation for customer authetication check form login methods
      IS_AUTHENTICATED_CHECK(state, data) { return state.isAuthenticated = data; },

      //commit from resources/js/components/Website/WebsiteWrapper.vue
      AUTH_CUSTOMER_CHECK(state, data) { return state.authCustomer = data; }, // commit form WebsiteWrapper.vue
      AUTH_CUSTOMER_DATA(state, data) { return state.authCustomer = data; },

      AUTH_CUSTOMER_ADDRESS(state, data) { return state.authCustomerAddress = data; },      
      
  },/*end Mutations*/

  actions: {    

    //get auth customer data after login if any later update 
    fetchAuthCustomerData(context){
        axios.get('/auth/getAuthCustomerData')
        .then( (response) => {
          context.commit('AUTH_CUSTOMER_DATA', response.data);
        }).catch( () => { })
    }, 

    //get auth customer address after login
    fetchAuthCustomerAddress(context, payload){
        axios.get('/auth/getAuthCustomerAddress?&id='+payload)
        .then( (response) => {
          context.commit('AUTH_CUSTOMER_ADDRESS', response.data);
        }).catch( () => { })
    },    

  } /*end actions*/ 

}

export default AuthenticationForWebsite
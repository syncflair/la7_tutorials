const AuthenticationForSupplier ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      isSspaAuthenticated: false,  //use for customer admin area vue component middleware in app.js
      authSupplier: {}, 
      authVendor: {}, 
         
      
	}),/*end state*/

  getters: {      
    	//isSspaAuthenticated: state => { return state.isSspaAuthenticated }, //not used
  },/*end getters*/


  mutations: {

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      //Mutation for customer authetication check form login methods
      IS_AUTHENTICATED_CHECK(state, data) { return state.isSspaAuthenticated = data; },

      //commit from resources/js/components/Website/WebsiteWrapper.vue
      AUTH_SUPPLIER_CHECK(state, data) { return state.authSupplier = data; }, // commit form WebsiteWrapper.vue
      AUTH_SUPPLIER_DATA(state, data) { return state.authSupplier = data; },

      AUTH_VENDOR_DATA(state, data) { return state.authVendor = data; },      
      
  },/*end Mutations*/

  actions: {    

    //get auth customer data after login if any later update 
    fetchAuthSupplierData(context){
        axios.get('/sspa/getAuthSupplierData')
        .then( (response) => {
          context.commit('AUTH_SUPPLIER_DATA', response.data);
        }).catch( () => { })
    },

    fetchAuthVendorData(context, payload){
        axios.get('/sspa/getAuthVendorData?&vendor_id='+payload)
        .then( (response) => {
          context.commit('AUTH_VENDOR_DATA', response.data);
        }).catch( () => { })
    },  

    //get auth customer address after login
    // fetchAuthSupplierAddress(context, payload){
    //     axios.get('/auth/getAuthSupplierAddress?&id='+payload)
    //     .then( (response) => {
    //       context.commit('AUTH_CUSTOMER_ADDRESS', response.data);
    //     }).catch( () => { })
    // },    

  } /*end actions*/ 

}

export default AuthenticationForSupplier
const commonStoreForWebsite ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      isitwebsiteCheck:'', 

	}),/*end state*/

  getters: {

  },/*end getters*/


  mutations: {

      //for website public
      IS_IT_WEBSITE_CHECK(state, data) { return state.isitwebsiteCheck = data; },
     
      
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

export default commonStoreForWebsite
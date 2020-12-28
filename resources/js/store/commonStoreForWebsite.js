const commonStoreForWebsite ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      authCustomer: {},
      isitwebsiteCheck:'',      
      
	}),/*end state*/

  getters: {
    	//userStatus: state => { return state.userStatus },
  },/*end getters*/


  mutations: {
      //commit from resources/js/components/Website/WebsiteWrapper.vue
      AUTH_CUSTOMER_CHECK(state, data) { return state.authCustomer = data; },


      //for website public
      IS_IT_WEBSITE_CHECK(state, data) { return state.isitwebsiteCheck = data; },
      
  },/*end Mutations*/

  actions: {         

  } /*end actions*/

}

export default commonStoreForWebsite
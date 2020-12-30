const commonStoreForWebsite ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
      authCustomer: {},
      isitwebsiteCheck:'',  

      //authCustomerData: {},    
      
	}),/*end state*/

  getters: {
    	//userStatus: state => { return state.userStatus },
  },/*end getters*/


  mutations: {
      //commit from resources/js/components/Website/WebsiteWrapper.vue
      AUTH_CUSTOMER_CHECK(state, data) { return state.authCustomer = data; }, //


      AUTH_CUSTOMER_DATA(state, data) { return state.authCustomer = data; },
      // AUTH_CUSTOMER_DATA(state, data) { return state.authCustomerData = data; },


      //for website public
      IS_IT_WEBSITE_CHECK(state, data) { return state.isitwebsiteCheck = data; },
      
  },/*end Mutations*/

  actions: {    

    //get auth customer data after login if any later update 
    fetchAuthCustomerData(context){
        axios.get('/auth/getAuthCustomerData')
        .then( (response) => {
          context.commit('AUTH_CUSTOMER_DATA', response.data);
        }).catch( () => { })
      },     

  } /*end actions*/

}

export default commonStoreForWebsite
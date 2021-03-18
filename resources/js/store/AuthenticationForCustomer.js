const AuthenticationForCustomer ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      spac_access_token: localStorage.getItem('_spac_at'),
      spac_refresh_token: localStorage.getItem('_spac_rt'),
      spac_expire_token: localStorage.getItem('_spac_et'),
      isAuthenticated: false,  //use for customer admin area vue component middleware in app.js
      authCustomer: {}, 
      authCustomerAddress: {}, 
      isitwebsiteCheck:'', 
         
      
	}),/*end state*/

  getters: {      
    	isAuthenticated: state => { return state.isAuthenticated }, //not used
  },/*end getters*/


  mutations: {

      /**************************************************/
      /* Use for Customer authentication*/ 
      /**************************************************/
      //Mutation for customer authetication check form login methods
      IS_AUTHENTICATED_CHECK(state, data) { return state.isAuthenticated = data; },
      ACCESS_TOKEN_SET(state, data) { return state.spac_access_token = data; },
      REFRESH_TOKEN_SET(state, data) { return state.spac_refresh_token = data; },
      EXPIRE_TOKEN_SET(state, data) { return state.spac_expire_token = data; },

      IS_IT_WEBSITE_CHECK(state, data) { return state.isitwebsiteCheck = data; },

      //commit from resources/js/components/Website/WebsiteWrapper.vue
     //AUTH_CUSTOMER_CHECK(state, data) { return state.authCustomer = data; }, // commit form WebsiteWrapper.vue
      AUTH_CUSTOMER_DATA(state, data) { return state.authCustomer = data; },

      AUTH_CUSTOMER_ADDRESS(state, data) { return state.authCustomerAddress = data; },      
      
  },/*end Mutations*/

  actions: {  

    refreshTokenCustomerApi(context, payload){
        const originalRequest = payload
        axios.post('/api/afc/refresh-token')
        .then( (response) => {

          // console.log(response);
          localStorage.setItem('_spac_at', response.data.access_token);                      
          localStorage.setItem('_spac_rt', response.data.refresh_token);   
          localStorage.setItem('_spac_et', response.data.expires_in);                      
          localStorage.setItem('_spac_ug', 'spac'); 

          context.commit('IS_AUTHENTICATED_CHECK', true);
          context.commit('ACCESS_TOKEN_SET', response.data.access_token);
          context.commit('REFRESH_TOKEN_SET', response.data.refresh_token);
          context.commit('EXPIRE_TOKEN_SET', response.data.expires_in);

          axios.defaults.headers.common["Authorization"] = 'Bearer ' + response.data.access_token; //update axios header
          axios.defaults.headers.common["RefreshToken"] = response.data.refresh_token; //update axios header

          // this.fetchAuthCustomerData(); 
          return axios.request(originalRequest.url); //previous route
          // console.log(originalRequest);
        }).catch( () => { 
            // window.location = '/auth/login';
        })
    },   
    
    //get auth customer data after login if any later update 
    // fetchAuthCustomerData(context){
    //     axios.get('/auth/getAuthCustomerData')
    //     .then( (response) => {
    //       context.commit('AUTH_CUSTOMER_DATA', response.data);
    //     }).catch( () => { })
    // }, 

    fetchAuthCustomerData(context){
        axios.get('/api/afc/customer')
        .then( (response) => {
          context.commit('AUTH_CUSTOMER_DATA', response.data);
        }).catch( () => { })
    }, 

    //get auth customer address after login
    fetchAuthCustomerAddress(context, payload){
        // axios.get('/auth/getAuthCustomerAddress?&id='+payload)
        axios.get('/api/afc/getAuthCustomerAddress?&id='+payload)
        .then( (response) => {
          context.commit('AUTH_CUSTOMER_ADDRESS', response.data);
        }).catch( () => { })
    },  


    //get auth customer address after login
    logoutCustomerApi(context){
        axios.post('/api/afc/logout')
        .then( (response) => {

          localStorage.removeItem('_spac_at');  
          localStorage.removeItem('_spac_rt');  
          localStorage.removeItem('_spac_ug'); 
          localStorage.removeItem('_spac_et');    
          context.commit('IS_AUTHENTICATED_CHECK', false);
          context.commit('ACCESS_TOKEN_SET', '');
          context.commit('REFRESH_TOKEN_SET', '');

          window.location = '/home';
          // window.location = '/auth/login';


        }).catch( () => { })
    },  

    clearTokenFromLocalStoreApi(){
      localStorage.removeItem('_spac_at');  
      localStorage.removeItem('_spac_rt');  
      localStorage.removeItem('_spac_ug'); 
      localStorage.removeItem('_spac_et');    
      context.commit('IS_AUTHENTICATED_CHECK', false);
      context.commit('ACCESS_TOKEN_SET', '');
      context.commit('REFRESH_TOKEN_SET', '');

      window.location = '/home';
      // this.$router.push({ path : '/auth/login' }).catch(err => {}); 
    }

  } /*end actions*/ 

}

export default AuthenticationForCustomer

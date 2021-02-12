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


      //product section
      products: {},

      //common section
      pagination: { 
          current_page: 1,                
          per_page: 0,
      },

      // autoCompleteData: {},
      selectedProductCategoryList:[],
         
      
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


      //return data to state for product
      FETCH_DATA(state, data) { return state.products = data; },
      FATCH_PAGINATION(state, data){ return state.pagination = data; },        
      //AUTO_COMPLETE_DATA(state, data){  return state.autoCompleteData = data; },


      SELECTED_PRODUCT_CATEGORY_LIST(state, data){  return state.selectedProductCategoryList = data; },
      
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


    fetchProductListData(context, payload){
        let perPageVelue ;
        if(!payload.perPage){
            perPageVelue = 10
        }else{
            perPageVelue = payload.perPage
        }

      // axios.get('/sspa/get-product-list-for-admin-supplier')
      axios.get('/sspa/get-product-list-for-admin-supplier?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue + '&id='+payload.vendor_id)
      .then( (response) => {
        context.commit('FETCH_DATA', response.data.data); //use for only show data
        context.commit('FATCH_PAGINATION', response.data) //for pagination
        //console.log(response.data);
      })
      .catch( () => {  
        //toastr.warning('Something is wrong!');
      })
    },

    fetchProductCategoryListData(context, payload){ 
      //use axios.post instead of axios.get , becouse is contaion array    
      axios.post('/sspa/supplier-getProcuctCategoryList/', {q: payload})
        .then( ( response ) => {
                context.commit('SELECTED_PRODUCT_CATEGORY_LIST', response.data);                                       
        }).catch(() => { }) 
    },





  } /*end actions*/ 

}

export default AuthenticationForSupplier

const PurchaseOrderMasterStore ={

	namespaced: true,
	
	state: () => ({
        //accessable from any where 
        PurchaseOrders: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},

        //for Vendor autocomplete
        autoSearchVendor: {},
        selectedVendor:[],

        //for Product autocomplete
        autoSearchProduct: {},
        selectedProduct:[],

    }),/*end state*/

    getters: {
      
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, data) { return state.PurchaseOrders = data; },
        FATCH_PAGINATION(state, data){ return state.pagination = data; },
        AUTO_COMPLETE_DATA(state, data){ return state.autoCompleteData = data; },

        AUTO_COMPLETE_DATA_FOR_VENDOR(state, data){ return state.autoSearchVendor = data; },
        SELECTED_VENDOR(state, data){ return state.selectedVendor = data; },

        AUTO_COMPLETE_DATA_FOR_PRODUCT(state, data){ return state.autoSearchProduct = data; },
        SELECTED_PRODUCT(state, data){ return state.selectedProduct = data; },

    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 100
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/PurchaseOrder-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
          .then( (response) => {
            context.commit('FETCH_DATA', response.data.data); //use for only show data
            context.commit('FATCH_PAGINATION', response.data) //for pagination
            //console.log(response.data);
          })
          .catch( () => {  
            //toastr.warning('Something is wrong!');
          })
        },


        //For Search
        searching(context, payload){        
            let searchKey = payload.search_key; let searchOption = payload.search_option; //alert(query2);
            axios.get('/spa/searchPurchaseOrderData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchCountryData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchPurchaseOrderData?&q='+ query)
            //axios.get('/spa/searchCountryData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },

        AutoCompleteSearchForDataVendor(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteVendorData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_VENDOR', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Brand Shop
        fetchSelectedVendor(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/getSelectedVendor/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_VENDOR', response.data);                                       
            }).catch(() => { }) 
        },


        AutoCompleteSearchForDataProduct(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteProductData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_PRODUCT', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Brand Shop
        fetchSelectedProduct(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/getSelectedProduct/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_PRODUCT', response.data);                                       
            }).catch(() => { }) 
        },

    } /*end actions*/

}

export default PurchaseOrderMasterStore
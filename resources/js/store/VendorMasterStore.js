const VendorMasterStore ={

	namespaced: true,
	
	state: () => ({
        //accessable from any where 
        vendors: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},

        //for brand shop autocomplete
        autoSearchBrandShop: {},
        selectedBrandShop:[],
    }),/*end state*/

    getters: {
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, data) { return state.vendors = data; },
        FATCH_PAGINATION(state, pagination){ return state.pagination = pagination; },        
        AUTO_COMPLETE_DATA(state, data){ return state.autoCompleteData = data; },

        AUTO_COMPLETE_DATA_FOR_BRAND_SHOP(state, data){ return state.autoSearchBrandShop = data; },
        SELECTED_BRAND_SHOP(state, data){ return state.selectedBrandShop = data; },

    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 100
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/Vendor-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
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
            axios.get('/spa/searchVendorData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchVendorData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchVendorData?&q='+ query)
            //axios.get('/spa/searchVendorData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },


        AutoCompleteSearchForDataBrandShop(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteBrandShopData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_BRAND_SHOP', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Brand Shop
        fetchSelectedBrandShop(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/getSelectedBrandShop/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_BRAND_SHOP', response.data);                                       
            }).catch(() => { }) 
        },

    } /*end actions*/

}

export default VendorMasterStore
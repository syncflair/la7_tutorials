const ProductMasterStore ={

	namespaced: true,
    
    state: () => ({
        //accessable from any where 
        products: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},

        //for Single Select
        autoSearchBrands:{},
        selectedBrand:[],

        //for multiselect option
        autoSearchProducts:{},
        selectedProductList:[],
        //selectedSupplierList:[],
        selectedCategoryList:[],

        autoSearchVendors:{},
        selectedVendorList:[],
    }),/*end state*/

    getters: {
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, data) { return state.products = data; },
        FATCH_PAGINATION(state, data){ return state.pagination = data; },        
        AUTO_COMPLETE_DATA(state, data){  return state.autoCompleteData = data; },

        //Single Select 
        AUTO_COMPLETE_DATA_FOR_BRAND(state, data){  return state.autoSearchBrands = data; },
        SELECTED_BRAND(state, data){  return state.selectedBrand = data; },

        //for multiselect
        AUTO_COMPLETE_DATA_FOR_PRODUCT(state, data){  return state.autoSearchProducts = data; },
        SELECTED_PRODUCT_LIST(state, data){  return state.selectedProductList = data; },
        //SELECTED_SUPPLIER_LIST(state, data){  return state.selectedSupplierList = data; },
        SELECTED_CATEGORY_LIST(state, data){  return state.selectedCategoryList = data; },

        SELECTED_VENDOR_LIST(state, data){  return state.selectedVendorList = data; },
        AUTO_COMPLETE_DATA_FOR_VENDORS(state, data){return state.autoSearchVendors = data;},       
        


    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 100
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/Product-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
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
            axios.get('/spa/searchProductData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchProductData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchProductData?&q='+ query)
            //axios.get('/spa/searchProductData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },

        //For selected Category
        fetchSelectedCategoryList(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/Product-getCategoryList/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_CATEGORY_LIST', response.data);                                       
            }).catch(() => { }) 
        },

        // //For selected Supplier
        // fetchSelectedSupplierList(context, payload){ 
        //   //use axios.post instead of axios.get , becouse is contaion array    
        //   axios.post('/spa/Product-getSupplierList/', {q: payload})
        //     .then( ( response ) => {
        //             //console.log(response); 
        //             context.commit('SELECTED_SUPPLIER_LIST', response.data);                                       
        //     }).catch(() => { }) 
        // },


        //For selected product
        fetchSelectedProductList(context, payload){ 
          //use axios.post instead of axios.get , becouse is contaion array    
          axios.post('/spa/Product-getProductList/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_PRODUCT_LIST', response.data);                                       
            }).catch(() => { }) 
        },

        //auto complete search for product
        AutoCompleteSearchForProduct(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteProductData?&q='+ query)
          .then( ( response ) => {
            //console.log(response.data);
            context.commit('AUTO_COMPLETE_DATA_FOR_PRODUCT', response.data);                                        
          }).catch(() => { }) 
        },

        AutoCompleteSearchForVendors(context, payload){  
              let query = payload;  
              axios.get('/spa/AutoCompleteVendorData?&q='+ query)
              .then( ( response ) => {
                  context.commit('AUTO_COMPLETE_DATA_FOR_VENDORS', response.data);                                        
              }).catch(() => { }) 
        },

        //For selected Supplier
        fetchSelectedVendorList(context, payload){ 
          //use axios.post instead of axios.get , becouse is contaion array    
          axios.post('/spa/getSelectedVendorList/', {q: payload})
            .then( ( response ) => {
                    //console.log(response); 
                    context.commit('SELECTED_VENDOR_LIST', response.data);                                       
            }).catch(() => { }) 
        },

        //For Brands
        AutoCompleteSearchForDataBrand(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteBrandData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_BRAND', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Brand Shop
        fetchSelectedBrand(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/getSelectedBrand/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_BRAND', response.data);                                       
            }).catch(() => { }) 
        },



    } /*end actions*/

}

export default ProductMasterStore
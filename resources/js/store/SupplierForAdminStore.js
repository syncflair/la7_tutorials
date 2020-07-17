const SupplierForAdminStore ={

	namespaced: true,
	
	state: () => ({
        //accessable from any where 
        suppliers: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},
    }),/*end state*/

    getters: {
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, suppliers) {
            return state.suppliers = suppliers;                        
        },

        FATCH_PAGINATION(state, pagination){
            return state.pagination = pagination;  
        },
        
        AUTO_COMPLETE_DATA(state, data){
            return state.autoCompleteData = data;  
        }

    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 10
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/supplier-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
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
            axios.get('/spa/searchSupplierData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchSupplierData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchSupplierData?&q='+ query)
            //axios.get('/spa/searchSupplierData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },

    } /*end actions*/

}

export default SupplierForAdminStore
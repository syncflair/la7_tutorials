const usersAdminStore ={

	namespaced: true,
	
	state: () => ({
        //accessable from any where 
        users: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},

        //for brand shop autocomplete
        autoSearchEmployee: {},
        selectedEmployee:[],

    }),/*end state*/

    getters: {
        // users: state => {
        //   return state.users
        // },
        // pagination: state => {
        //   return state.pagination
        // },
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, users) { return state.users = users; },
        FATCH_PAGINATION(state, pagination){ return state.pagination = pagination; },        
        AUTO_COMPLETE_DATA(state, data){ return state.autoCompleteData = data; },

        AUTO_COMPLETE_DATA_FOR_EMPLOYEE(state, data){ return state.autoSearchEmployee = data; },
        SELECTED_EMPLOYEE(state, data){ return state.selectedEmployee = data; },

    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 100
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/Users-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
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
            axios.get('/spa/searchUsersData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchUsersData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchUsersData?&q='+ query)
            //axios.get('/spa/searchUsersData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },

        AutoCompleteSearchForDataEmployee(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteEmployeeData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_EMPLOYEE', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Brand Shop
        fetchSelectedEmployee(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/getSelectedEmployee/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_EMPLOYEE', response.data);                                       
            }).catch(() => { }) 
        },

    } /*end actions*/

}

export default usersAdminStore
const EmployeeMasterStore ={

	namespaced: true,
	
	state: () => ({
        //accessable from any where 
        employees: {},
        pagination: { 
            current_page: 1,                
            per_page: 0,
        },
        autoCompleteData: {},

        //for brand shop autocomplete
        autoSearchDepartments: {},
        selectedDepartmentList:[],

    }),/*end state*/

    getters: {
    }, /*end getters*/


    mutations: {
        //return data to state
        FETCH_DATA(state, employees) { return state.employees = employees; },
        FATCH_PAGINATION(state, pagination){ return state.pagination = pagination; },        
        AUTO_COMPLETE_DATA(state, data){ return state.autoCompleteData = data; },

        AUTO_COMPLETE_DATA_FOR_DEPARTMENT(state, data){ return state.autoSearchDepartments = data; },
        SELECTED_DEPARTMENT(state, data){ return state.selectedDepartmentList = data; },

    },/*end Mutations*/


    actions: {
        fetchData(context, payload){
            let perPageVelue ;
            if(!payload){
                perPageVelue = 100
            }else{
                perPageVelue = payload
            }

          axios.get('/spa/Employee-Info?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
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
            axios.get('/spa/searchEmployeeData?page='+ 
                        context.state.pagination.current_page + '&perPage=' +
                        context.state.pagination.per_page + 
                        '&q='+searchKey+'&so='+searchOption)
            //axios.get('/spa/searchEmployeeData?q='+query)
            .then( ( response ) => {
                    context.commit('FETCH_DATA', response.data.data);
                    context.commit('FATCH_PAGINATION', response.data) //for pagination                                       
            }).catch(() => { }) 
        },

        //For Search
        AutoCompleteSearch(context, payload){  
            let query = payload;  
            //let query2 = payload.key2; 
            axios.get('/spa/searchEmployeeData?&q='+ query)
            //axios.get('/spa/searchEmployeeData?q='+query)
            .then( ( response ) => {
                    context.commit('AUTO_COMPLETE_DATA', response.data.data);
                    //this.categories = response.data; // is an object... use when pagination                                         
            }).catch(() => { }) 
        },

        AutoCompleteSearchForDataDepartment(context, payload){  
          let query = payload;  
          axios.get('/spa/AutoCompleteDepartmentData?&q='+ query)
          .then( ( response ) => {
              context.commit('AUTO_COMPLETE_DATA_FOR_DEPARTMENT', response.data);                                        
          }).catch(() => { }) 
        },

        //For selected Department List
        fetchSelectedDepartmentList(context, payload){  
            //use axios.post instead of axios.get , becouse is contaion array  
            axios.post('/spa/Department-getSelectedDepartmentList/', {q: payload})
            .then( ( response ) => {
                    context.commit('SELECTED_DEPARTMENT', response.data);                                       
            }).catch(() => { }) 
        },

    } /*end actions*/

}

export default EmployeeMasterStore
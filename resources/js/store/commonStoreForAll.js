const commonStoreForAll ={

	namespaced: true,
	
	state: () => ({
	    //accessable from any where 
	    userStatus: {}, //get data from user_status table
	    
	}),/*end state*/

    getters: {
    	// userStatus: state => {
	    //   return state.userStatus
	    // },
    }, /*end getters*/


    mutations: {
    	FETCH_USER_STATUS(state, data) {
    		return state.userStatus = data;    		             
        },

    },/*end Mutations*/

    actions: {
    	userStatus(context){
		  axios.get('/spa/user-status-info')
		  .then( (response) => {
		    context.commit('FETCH_USER_STATUS', response.data);
		    //console.log(response.data);
		  })
		  .catch( () => {  
		    //toastr.warning('Something is wrong!');
		  })
		},


    } /*end actions*/

}

export default commonStoreForAll
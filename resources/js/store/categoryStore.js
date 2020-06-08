const CategoryStore ={

	namespaced: true,

	state: () => ({
	    //accessable from any where 
	    	vuexTest: 'This is first test message',
	    	searchText: '',
	    	categories: {},
	    	pagination: { 
	    		current_page: 1,	    		
	    		per_page: 0,
	    	},
	    	categoryList: '',
	    	viewCategoryData:'',
	  }),
	
	// state: {
 //    	//accessable from any where 
 //    	vuexTest: 'This is first test message',
 //    	categories: {},
 //    },/*end state*/

    getters: {
    	vuexTest: state => {
	      return state.vuexTest
	    },
	    //return data from state called by computed function  
	    categories: state => {
	      return state.categories
	    },
	    pagination: state => {
	      return state.pagination
	    },
    }, /*end getters*/


    mutations: {
    	//return data to state
    	fetchCategoryData(state, categories) {
    		return state.categories = categories;    		             
        },

        fetchPagination(state, pagination){
        	return state.pagination = pagination;  
        },
        categoryListMutation(state, data){
        	return state.categoryList = data;  
        },
        viewCategoryMutation(state, data){
        	return state.viewCategoryData = data;
        },


  //       changePerPageMutation(state, perPage){
  //       	return state.pagination.per_page = perPage; 
  //       },
  //       resetCurrentPageMutation(state, currentPage) {
		//     return state.pagination.current_page = currentPage; //for per_page function
		// }

        // getResultsData(state, categoriesData) {
        //     return state.categories = categoriesData
        // },

    },/*end Mutations*/



    actions: {
    	//send data to mutations function that initiate from mounted or created with dispatch
    	//fetchCategory({commit}){  
    	fetchCategory(context, payload){
    		let perPageVelue ;
    		if(!payload){
    			perPageVelue = 10
    		}else{
    			perPageVelue = payload
    		}

		  axios.get('/spa/MultiComponent?page=' + context.state.pagination.current_page +'&perPage=' + perPageVelue)
		  .then( (response) => {
		    context.commit('fetchCategoryData', response.data);
		    context.commit('fetchPagination', response.data) //for pagination
		    //console.log(response.data);
		  })
		  .catch( () => {  
		    //toastr.warning('Something is wrong!');
		  })
		},

		searching(context, payload){        
	        let query = payload;
	        axios.get('/spa/searchCategoryData?q='+query)
	        //this.form.get('/spa/search-category?q='+query)
	        .then( ( response ) => {
	          		context.commit('fetchCategoryData', response.data);
	                //this.categories = response.data; // is an object... use when pagination	                                      
	        }).catch(() => { })	
		},

		listCategory(context, payload){
			let id = payload;
			axios.get('/spa/getCatList/'+id)
	          .then( ( response) => {
	               context.commit('categoryListMutation', response.data);  
	          }).catch(() => { })
		},		
		viewCategory(context, payload){
			context.commit('viewCategoryMutation', payload);  			
		},



		// fetchCategoryPerPage(context, perPage) {
		// 	context.commit('changePerPageMutation', perPage);	
		// 	context.commit('resetCurrentPageMutation', 1);
		// },
		
		//function for pagination // Our method to GET results from a Laravel endpoint
		// getResultsPage({commit}, page ) {
		//   axios.get('/spa/category?page=' + page)
		//   .then( (response) => {
		//     commit('getResultsData', response.data)
		//   });
		// }, 

    } /*end actions*/

}

export default CategoryStore
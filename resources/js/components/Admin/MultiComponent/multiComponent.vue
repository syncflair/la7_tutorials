<template>
<!-- Main content -->
<section class="content">
<!-- container-fluid -->       
<div class="container-fluid">   
<!-- Card section -->  
<div class="card vue-card">

	<!-- Card Header -->
	<div class="card-header">
	    <div class="row">
	        <div class="col-md-6">
	            <ol class="breadcrumb float-sm-left">
	                <li class="breadcrumb-item active">Dashboard </li>
	                <li class="breadcrumb-item"><a>Component Communication</a></li>
	            </ol>
	        </div>
	       <div class="col-md-6 text-right">Navigation</div>
	    </div>
	</div><!--/ Card Header -->

	<!-- Card Body -->
	<div class="card-body">
		<div class="row">
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-3">Data List </div>
					<div class="col-md-5 text-left"> <countCategory></countCategory></div>
					<div class="col-md-4">
						<searchBox></searchBox>						
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">						
						<dataList 
							:categories="categories"					
							@viewCategory="viewCategory" 
							@listCategory="listCategory"
							@deleteCategory="deleteCategory"
						></dataList>
					</div>
				</div>

			</div>
			<div class="col-md-4">
				<div class="row"><div class="col-md-12">
					<formBox></formBox>					
				</div></div>

				<div class="row mt-0"><div class="col-md-12">
					<viewCategory :viewCategoryData="viewCategoryData"></viewCategory>
				</div></div>

				<div class="row mt-0"><div class="col-md-12">		
					<childCategory></childCategory>
					<!-- <childCategory :listCategoryId="listCategoryId"></childCategory> -->
				</div></div>

			</div>
		</div>

		<!-- <div class="row">
			<div class="col-md-6 offset-md-3">				
				<ul >
					<li v-for="category in categories.data">{{ category.cat_name }}</li>
				</ul>
			</div>
		</div> -->

	</div><!--/ Card Body -->

</div><!--/ Card section -->
</div><!--/ container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	import dataList from './dataList.vue'	
	import viewCategory from './viewCategory.vue'
	import countCategory from './countCategory.vue'
	import childCategory from './childCategory.vue'

	//import searchBox from './searchBox.vue'
	//import formBox from './formBox.vue'

    export default {
    	name: "multiComponent",

    	data(){
    		return {
    			categories: {},
    			viewCategoryData: '', 
    			//listCategoryId: '',	    		
	    	}
    	},
    	

	    methods:{

			fetchCategory(){        
			axios.get('/spa/MultiComponent')
			  .then( ( response ) => {
			    this.categories = response.data; // is an object... use when pagination	

			  })
			  .catch( () => {  
			    //toastr.warning('Something is wrong!');
			  })
			},

			//function for pagination // Our method to GET results from a Laravel endpoint
		    getResults(page) {
		        axios.get('/spa/MultiComponent?page=' + page)
		          .then( (response) => {
		            this.categories = response.data;
		            //console.log(JSON.stringify(this.categories));
		          });
		    },


			viewCategory(data){		  	
				this.viewCategoryData = data;
				//data get from dataList.vue using viewCategory click event
			},

			listCategory(id){
				FireEvent.$emit('getCategoryID', id);
				//this.listCategoryId = id;
				//data get from dataList.vue using listCategory click event
			},

			deleteCategory(id){
	          Swal.fire({
	            title: 'Are you sure to Delete?',
	            text: "You won't be able to revert this!",
	            icon: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#3085d6',
	            cancelButtonColor: '#d33',  
	            confirmButtonText: 'Yes, delete it!'
	          }).then( (result) => {

	            if ( result.value ) {  
	              axios.delete('/spa/MultiComponent/'+id)
	                .then( ({data}) => {

	                  if(data.success){                  
	                    FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update               
	                    toastr.warning(data.success); 
	                  }   
	                  if(data.errors){
	                    toastr.warning(data.errors);                 
	                  }

	                })                          
	                .catch(() => {
	                  toastr.warning('Something is wrong!');
	                })
	            }else{
	              toastr.info( 'Your data is safe!');
	            }

	          })
	      	}, //end delete,



	    }, //end methods

        mounted() {
           // console.log('Component mounted.')
        },

        created(){
        	//this.fetchCategory(); //Fatch data when reload
        	// Fetch initial results
			this.getResults();

        	//this event come from searchBox.vue component
        	FireEvent.$on('searching', (data) => {
        		let query = data;
        		
        		if(query == ''){
        			this.getResults();
        		}else{

			        axios.get('/spa/searchCategoryData?q='+query)
			        //this.form.get('/spa/search-category?q='+query)
			          .then( ( response ) => {
			              this.categories = response.data; // is an object... use when pagination
			                                      
			          })
			          .catch(() => {   })
		        }
	        });

	        FireEvent.$on('getResultsPage', (page) => {
        		this.getResults(page);
	        });


        	/*Call FireEvent $on event when create or update data named as AfterChange*/
	        FireEvent.$on('AfterChange', () => {
		        this.fetchCategory();
		        //this.countTotalCategory(); /*Count total category When Load page*/
		        //this.parentCategory(); //get parent category only
		    });
        },

        components:{          
	      dataList,	      
	      viewCategory,
	      countCategory,
	      childCategory,
	      //load component by ES6 rule. lazy loading
	      searchBox: () => import(/* webpackChunkName: "searchBox" */'./searchBox'),
	      formBox: () => import(/* webpackChunkName: "formBox" */'./formBox'),
	    },

    }
</script>

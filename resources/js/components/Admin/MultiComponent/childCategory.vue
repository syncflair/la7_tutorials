<template>
	
	<div class="card vue-card-item">
		<div class="card-header"> Display Child Category here</div>
		<div class="card-body">
			<!-- <span v-if="listCategoryId"> {{listCategoryId}} </span>
			<span v-if="!listCategoryId"> No List </span> -->
			<!-- <span>{{getCategoryId}}</span> -->

			<div v-if="categoryList.length === 0">
				<span> -- No Child Category Found</span>
			</div>
			<div v-else>
				<ul>
					<li v-for="list in categoryList">{{ list.id }} - {{ list.cat_name }} </li>
				</ul>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		name: "childCategory",
		//props:['listCategoryId'], //get from parent component
		// props: {
		// 	//listCategoryId: Number,	        
	 //        //data get from dataList.vue through Multicomponent.vue
	 //        listCategoryId:{ 
		//       required: true,
		//       // validator: function (value) {
		//       //   return value >= 0
		//       // }
		//     },
	 //    },

	 	data (){	 		
			return {
				//getId: this.listCategoryId,  //this.$props.listCategoryId
				//getId: this.listCategoryId,  //this.$props.listCategoryId
				//getCategoryId: '', 
				categoryList: '',				
			};
		},

		methods:{

			getCategoryList(id){
				//alert(id)
        		this.$Progress.start(); //using progress-bar package

				 axios.get('/spa/getCatList/'+id)
		          .then( ( response) => {
		            	this.$Progress.finish(); 
		               this.categoryList = response.data;        
		              //FireEvent.$emit('AfterChange'); //this will reload data after create or update               
		              //toastr.warning(data.success); 
		          })                          
		          .catch(() => {
		            
		          })
			}

		},

		mounted () {
			
		},

		computed: {			
		  // ids: function () {
		  //   return this.listCategoryId
		  // },

		  // get_id: {
	   //          get: function ()  {
	   //              return this.listCategoryId
	   //          },
	   //          set:function (data) {
	   //              return this.getId = data
	   //          }
	   //    },
		},

		created: function(){
           //this.getId = this.listCategoryId;

           FireEvent.$on('getCategoryID', (data) => {
           		//this.getCategoryId = data;
           		this.getCategoryList(data);
           		

		   });
        },

	} //end export default


</script>
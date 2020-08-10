<template>
	<div class="card vue-card-item">
		<div class="card-header"> Display product</div>
		<div class="card-body">
			<!-- <span v-if="listCategoryId"> {{listCategoryId}} </span>
			<span v-if="!listCategoryId"> No List </span> -->
			<!-- <span>{{getCategoryId}}</span> -->

			<div v-if="productLists.length === 0">
				<span> -- No Child Category Found</span>
			</div>
			<div v-else>
				<ul>
					<li v-for="p in productLists">{{ p.id }} - {{ p.sys_pro_name }} </li>
				</ul>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	data (){	 		
		return {
			//getId: this.listCategoryId,  //this.$props.listCategoryId
			//getId: this.listCategoryId,  //this.$props.listCategoryId
			//getCategoryId: '', 
			productLists: {},				
		};
	},

	methods:{

			getProductList(id){
				//alert(id)
        		this.$Progress.start(); //using progress-bar package

				 axios.get('/spa/getMultiProductList/'+id)
		          .then( ( response) => {
		            	this.$Progress.finish(); 
		               this.productLists = response.data; 
		               //console.log(response.data);       
		              //FireEvent.$emit('AfterChange'); //this will reload data after create or update               
		              //toastr.warning(data.success); 
		          })                          
		          .catch(() => {
		            
		          })
			}

		},

	created: function(){
           //this.getId = this.listCategoryId;

           FireEvent.$on('getCategoryID', (data) => {
           		//this.getCategoryId = data;
           		this.getProductList(data);
           		

		   });
        },
	
}
</script>
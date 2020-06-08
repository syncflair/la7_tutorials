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
	import { mapState } from 'vuex' //for user MapState

	export default {

		mounted () {
			
		},

		computed: {		
			...mapState( 
             'CategoryStore', ['categoryList']
          	)
		},

		created: function(){

        },

	} //end export default


</script>
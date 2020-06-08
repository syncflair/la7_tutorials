<template>
	
	<div class="card vue-card-item">
		<div class="card-header"> Category Details</div>
		<div class="card-body">
			<div v-if="viewCategoryData">
				<span> ID: {{ viewCategoryData.id}} </span><br>
				<span> Name: {{ viewCategoryData.cat_name}} </span><br>
				<span> Sulg: {{ viewCategoryData.cat_slug}} </span><br>
				<span v-if="viewCategoryData.is_enabled === 1">Status: Active </span>
				<span v-if="viewCategoryData.is_enabled === 0">Status: Unactive </span>
			</div>
			<span v-if="!viewCategoryData" > No Data </span>
			<!-- <span v-if="viewCategoryData" > {{ viewCategoryData.cat_name}} </span> -->
			
		</div>
	</div>

</template>

<script>
	import { mapState } from 'vuex' //for user MapState
	export default {
		name: "vxViewCategory",
		
		computed:{
			...mapState( 
             'CategoryStore', ['viewCategoryData']
          	)
		}


	}
</script>
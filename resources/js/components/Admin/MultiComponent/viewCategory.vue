<template>
	
	<div class="card vue-card-item">
		<div class="card-header"> Category Details</div>
		<div class="card-body">
			<div v-if="viewCategoryData">
				<!-- <span> {{ viewCategoryData}} </span> -->
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
	export default {
	props:['viewCategoryData'], //get from parent component
	// props: {
	// 	//viewCategoryId: Number,
        
 //        //data get from dataList.vue through Multicomponent.vue
 //        viewCategoryData:{ 
 //          default: 0,
	//       required: true,
	//       validator: function (value) {
	//         return value >= 0
	//       }
	//     },

 //    },


	}
</script>
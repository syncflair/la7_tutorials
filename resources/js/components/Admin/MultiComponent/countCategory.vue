<template>
	<div>
		<span v-if="getID != 0" class="badge badge-danger navbar-badge"> {{getID}} </span>
		<span v-if="getID == 0" class="badge badge-danger navbar-badge"> 0 </span>
	</div>
</template>

<script>	
	export default {
		name: "countCategory",
		data (){	 		
			return {
				getID: '',				
			};
		},
		

		created: function(){

			FireEvent.$on('getCategoryID', (data) => {
           		this.getID = data;
		   });

        },
	}	
</script>
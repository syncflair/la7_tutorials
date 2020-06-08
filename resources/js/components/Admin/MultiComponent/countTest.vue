<template>
	<div>
		<span class="badge badge-danger navbar-badge"> {{getID}} </span>
	</div>
</template>

<script>	
	export default {
		name: "counTest",
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
<template>
  <span>
    <!-- <router-view></router-view> -->
    <div class="row">
    	<div class="col-md-12">
    	  <CashAccountMasterContentHead></CashAccountMasterContentHead>
    	</div>
    </div>

    <div class="row">
    	<div class="col-md-12">
    	  <CashAccountMasterContentBody></CashAccountMasterContentBody>
    	</div>
    </div>
  </span>
</template>

<script>

	import CashAccountMasterContentHead from './CashAccountMasterContentHead.vue'
	import CashAccountMasterContentBody from './CashAccountMasterContentBody.vue'

	export default {
	    name: "CashAccountMasterContent",
	    
	    components:{ 
	    	CashAccountMasterContentHead, CashAccountMasterContentBody
	    },	

	    data () {
	      return {
	      }
	    },//end data	

		methods:{

		}, //end Methods

		created(){
		},
		

  	} //end export default

</script>
<template>
  <span>
    <!-- <router-view></router-view> -->
    <div class="row">
    	<div class="col-md-12">
    	  <BankAccountMasterContentHead></BankAccountMasterContentHead>
    	</div>
    </div>

    <div class="row">
    	<div class="col-md-12">
    	  <BankAccountMasterContentBody></BankAccountMasterContentBody>
    	</div>
    </div>
  </span>
</template>

<script>

	import BankAccountMasterContentHead from './BankAccountMasterContentHead.vue'
	import BankAccountMasterContentBody from './BankAccountMasterContentBody.vue'

	export default {
	    name: "BankAccountMasterContent",
	    
	    components:{ 
	    	BankAccountMasterContentHead, BankAccountMasterContentBody
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
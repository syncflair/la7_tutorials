<template>
  <span>
    <!-- <router-view></router-view> -->
    <div class="row">
    	<div class="col-md-12">
    	  <AccountDetailsMasterContentHead></AccountDetailsMasterContentHead>
    	</div>
    </div>

    <div class="row">
    	<div class="col-md-12">
    	  <AccountDetailsMasterContentBody></AccountDetailsMasterContentBody>
    	</div>
    </div>
  </span>
</template>

<script>

	import AccountDetailsMasterContentHead from './AccountDetailsMasterContentHead.vue'
	import AccountDetailsMasterContentBody from './AccountDetailsMasterContentBody.vue'

	export default {
	    name: "AccountDetailsMasterContent",
	    
	    components:{ 
	    	AccountDetailsMasterContentHead, AccountDetailsMasterContentBody
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
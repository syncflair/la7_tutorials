<template>
	<span>{{ myDateTime }}</span>
</template>
<script>
	export default {
		name: "my-date-time-global",
		data () {
		    return {
		        myDateTime: '',
		    }
		},

		mounted(){
	      //console.log(moment().format('LTS'))
	      window.setInterval(() => {
	        //this.mytime = moment().format('LTS');
	        this.myDateTime = moment().format('Do MMMM YYYY, h:mm:ss a');
	      }, 1000)
	    }
	}
</script>
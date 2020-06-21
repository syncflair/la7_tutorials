<template>
  	<div class="switch-component-wrapper" @click="changeSwithValue">
  		<!-- <div class="switch-wrapper" :class="{'on': switchValue, 'off': !switchValue }"> -->
  		<div class="switch-wrapper" :class="{'on': value, 'off': !value }">
  			<div class="circle"></div>
  		</div>
  		<!-- {{switchValue}} -->
  	</div>  	
</template>

<script>
    export default {
        //props:['pagination', 'offset'],
        props: {
       	  //for normal code
	      // switchValue: {
	      //     required: true
	      // },

	      //for advance code with v-model
	      value: {
	          required: true
	      },
	    },
       
        methods: {   
        	changeSwithValue(){
        		//for advance code with v-model
        		this.$emit('input', !this.value); //no need extra function in parent component
        		//this.$emit('changeSwithValue');//for normal code
        	}
        },
    }
</script>
<style>
	.switch-component-wrapper{
		display: flex;
	}	
	.switch-wrapper{
		width: 44px;
		min-height: 22px;
		display: flex;
		cursor: pointer;
		border-radius: 22px;
		align-items: center;
		padding: 2px;
		transition: all 0.5s;	
		//background: green;
		box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.125), 0 2px 3px 0px rgba(0, 0, 0, 0.2);
	}
	.circle{
		background: #ffffff;
		width: 18px;
		height: 18px;
		border-radius: 18px;
	}
	.on{
		background: green;
		justify-content: flex-end;
	}
	.off{
		background: gray;
		justify-content: flex-start;
	}

</style>
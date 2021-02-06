<template>
  	<div v-if="display_notification_message === true" class="text-center mb-2 mt-3"> 
      <span v-if="notification_message_type === 'success'" class="text-success bg-success- text-center p-1 border">
      	<i class="icon fas fa-check"></i> {{notification_message_text}}
      </span>

      <span v-if="notification_message_type === 'warning'" class="text-warning bg-success- text-center mb-3 mt-2 p-1 border">
      	<i class="fas fa-exclamation-triangle"></i> {{notification_message_text}}
      </span>
    </div> 	
</template>

<script>
    export default {
        props:['groupedProps'],

     //    props: {
     //   	  //for normal code
	    //   // switchValue: {
	    //   //     required: true
	    //   // },

	    //   //for advance code with v-model
	    //   // value: {
	    //   //     required: true
	    //   // },
	    // },

	    data(){
	        return {
	          //Custome message display for success or warning
	          display_notification_message: false,
	          notification_message_text:'',
	          notification_message_type:'', 

	        }
	    },
       
        methods: {   
        	display_message_function(message, type){
				this.display_notification_message = true;
				this.notification_message_text = groupedProps.message; //show message
				this.notification_message_type = groupedProps.type; //show message type (success, warning)

				//remove message
				setTimeout(() => {                
					if( this.notification_message_text !== ''){
					    this.display_notification_message = false;
					}
				}, 9000);//call after 10000 miliscound
	         },
        },

        created(){
        	console.log(this.groupedProps);

	    },
    }
</script>
<!-- <style>
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

</style> -->
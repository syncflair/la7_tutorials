<template>
  <div class="row">	
	<div class="col-md-6 offset-md-3">
      <h5>Auto Search</h5>      
  			
  		<div style="position: relative;" class="my-multiselect-">  
  			<input type="text" name="" class="form-control" autocomplete="off"   				
  				ref="searchText" 				
  				v-model="searchText"
  				@keyup="autoSearch"
  				@keyup.enter="searching"
  				@focus="visibleList = true"  				
  						@input="filterOption"		
  				tabindex="1"				
  			>
  			<!-- @input="filterOption" managed by watcher using v-model searchText  -->
  			
  			<!--v-on:blur="visibleList=false;" tabindex="-1" @keydown.enter= "selectItem" @keydown.up="up" @keydown.down="down"   -->
  			<div v-if="filterOptions && visibleList" class="popOverBox-"> 
	  			<ul ref="optionList" class="optionList">
	  				<li tabindex="2" v-for="(option, index) in filterOptions" @click="setSearchedText(option);"
	  					:class="{'selected' : (selected === index)}"
	  				>

	  					{{ option[filterBy] }}
	  					<!-- <div class="checkbox">
				    			<div v-if="option.checked" class="checkbox-after"></div>
				    	</div>
				    	<div>{{ option[filterBy] }}</div><br> -->
	  				</li>
	  			</ul>
  			</div>
  		</div>
	  
  		<!-- {{filterOptions}} -->
  		<!-- {{options}} -->
	</div>
  </div>
</template>

<script>

	import { mapState } from 'vuex' //for user MapState

    export default {
       	name: "auto-complete-app",
       	//get from parent component
       	props: {
       	  options:{
       	  	//type: Object,
       	  	required: true,
       	  },
       // 	  value:{
	      // 	default: () => [],
	      // },
	      filterBy: {
	        type: String,
	        required: true
	      },
	      // valueProperty:{
	      // 	type: String,
	      //   required: true
	      // },
	      // placeholder: {
	      // 	type: String,
	      //   default: 'Click to select'
	      // },
	    },
    	data (){      
	        return {
	        	searchText:'', 
	        	visibleList: false,
	      //   	options:[
    			// 	'Electronic','Lifestyle','Home Applience','Vehicle','Agriculture','TV','Refregerator','AC'
    			// ],
	        	filterOptions: [],
	        	selected:0,
	        	itemListHeight: 33.75,
	        }
	    },

	    mounted(){
	    },
 
 	    computed: {
    		// ...mapState( 
      //        'CategoryStore', ['autoSearchData']
      //     	),
      		
		}, 
       	// watch:{
       	// 	searchText(){ //v-model searchText
       	// 		this.filterOption();
       	// 	}
       	// },
        methods: {
        	autoSearch(){
        		FireEvent.$emit('AutoCompleteSearch', this.searchText);
        	},
        	// autoSearch: _.debounce( (e) => {        		
	        // 	//alert(e.target.value) //console.log(e.target.value);
	        //   	FireEvent.$emit('AutoCompleteSearch', e.target.value );
	        // },200 ),

        	filterOption() {
        		if(this.searchText.length === 0){
        			this.filterOptions = [];
        		}else{
	       		 	this.filterOptions = Object.values(this.options).filter(
	       		 	//this.filterOptions = this.Options.filter( //this is for normal array
	       		 		item => {
	       		 			//return item[this.filterBy].toLowerCase().startsWith(this.searchText.toLowerCase());
	       		 			return item[this.filterBy].toLowerCase().includes(this.searchText.toLowerCase());
	       		 		}
	       		 	);
	       		 	//return fo;
	       		 	// return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )
	       		 }
          	},

          	searching(){
          		alert(this.searchText);
          	},

          	setSearchedText(text){
          		this.searchText = text[this.filterBy]; //set text to input field  when click on list text
          		this.visibleList = false;
          		this.filterOptions = [];
          		this.$refs.searchText.focus();
          	},

          	
          	preventClose(e){
	        	//e.stopPropagation(); //
	        	e.stopImmediatePropagation();
  				//$(this).off("blur");
	        },

	        // up(){
	        // 	if(this.selected === 0){
	        // 		return;
	        // 	}

	        // 	this.selected -= 1;
	        // 	this.scrollToItem();
	        // },

	        // down(){
	        // 	 if (this.selected >= this.options.length - 1) {
		       //    return;
		       //  }
		       //  this.selected += 1;
		       //  this.scrollToItem();
	        // },

	        // scrollToItem(){
	        // 	this.$refs.optionList.scrollTop = this.selected * this.itemListHeight;
	        // },
	        
        },

        created(){


	    },
        
        
	}
</script>
	
<style>
	.my-multiselect{
		background: #ffffff;
		position: relative;
		padding: 6px 6px; 
		margin:8px 0;
		//display: inline-block;
		display: flex;
		flex-wrap: wrap;
		border: 1px solid #ced4da;
	    border-radius: 0.2rem;
	    box-sizing: border-box;
	    //min-height: 33px;
	    //max-width: 222px;	    
	    //line-height: 1.5;
	}
	.my-multiselect:focus{
		outline: none;
	}
	.selected-item-box{
		background: #ffffff;
		min-height: 40px;
		display: inline-table;
	}
	.selected-item-box > ul{
		margin-bottom: 0px !important; 
		padding-left: 0px !important;
	}
	.selected-item{
		border: 1px solid #ced4da;
	    padding: 4px;
	    border-radius: 4px;
	    margin: 2px 3px 2px 3px;
    	list-style: none;
		float: left;
	}
	.selected-item > i{
		color:red;
		cursor: pointer;
		padding-left: 5px;
	}

	.popOverBox{
		position: absolute;
		width: 100%;
		left:0;
		right: 0;
		z-index:3;
		background: #ffffff;
		border: 1px solid #dee2e6;
		display: flex;
		//display: inline-table;
		//flex-direction: column;
		top:47px;
		
	}
	.selected{
		background: #fd7e14;
		color: #fff;
		border-bottom: 1px solid #fff;
	}

	.optionList{
		min-height: 1px;
		max-height: 250px;
		overflow-y: scroll;
		padding: 0px;
	}
	.optionList > li{
		list-style: none;
		padding: 3px 10px;		
	}
	.optionList > li > div{ float: left; }
	.optionList > li:hover{
		background: #dee2e6;
		cursor: pointer;
	}
	.optionList > .selected{
		background: #fd7e14;
		color: #fff;
	}
	.optionList > .selected:hover{
		background: #fd7e14;
		color: #fff;
		cursor: pointer;
	}

	.checkbox{
		width: 22px; height: 22px;border: 1px solid #969696; margin-right: 7px; position: relative;
		//background: #000;
	}
	.checkbox-after{
		width: 11px; height: 6px;
		border-left: 3px solid rgb(255,255, 255);
		border-bottom: 2px solid rgb(255, 255, 255);
		content: "";
		z-index: 9999;position: absolute; transform: rotate(-45deg);
		left:3px;
		top: 4px;
	}
</style>
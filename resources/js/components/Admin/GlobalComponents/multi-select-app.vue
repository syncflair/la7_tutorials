<template>
  <div class="row">	
	<div class="col-md-12 offset-md-3-">
      <!-- <h5>Multi Select</h5>       -->
  
	  <div class="my-multiselect" ref="parentBox" 
	  		@click="ToggleItem" 
	  		v-on:blur="visible = false;" 
	  		
	  >	
	    <!-- v-model="selectedItem ? selectedItem[filterBy] : searchText " tabindex="-1"-->
        <div class="selected-item-box form-control- form-control-sm- form-control-navba-">
        	<ul>
	        	<li v-show="option.checked" class="selected-item" v-for="(option, key) in FormatedOptions" :key="key">
	        		{{ option[filterBy] }} 
	        		<i @click="preventClose($event); removeSelectItem(key);" class="far fa-times-circle"></i>
	        	</li>
        	</ul>
        </div>



		<div v-show="visible" :style="{top: optionTopHeight }" class="popOverBox" @click="preventClose($event)">

			<select class="optionList" @change="onChangeSelect($event);" placeholder="Select">	
				<!-- <option disabled value="">Select option</option>			 -->
				<option v-for="(option, index) in FormatedOptions" :key="index"
					v-bind:value="option.id"			    	
			    	>

			    		<div class="checkbox">
			    			<div v-if="option.checked" class="checkbox-after"></div>
			    		</div>
			    		<div>{{ option[filterBy] }}</div>
			    </option>
			</select>

			<input type="text" class="form-control form-control-sm form-control-navbar" 
			 	:placeholder="this.placeholder" 
			 	ref="autoSearchField" id="autoSearchField" 
			 	v-model="autoQuery"
			 	@keyup="autoSearch" 
			 	@keydown.up="up" @keydown.down="down" @keydown.enter="selectItem(index)"
				@click="preventClose($event)"
			>

			 <!-- <ul v-show="listVisible === true" 	 -->
			 <ul ref="optionList" class="optionList dropdown-menu-">
			    <!-- <li v-if="autoQuery === '' ? listVisible = false : listVisible = true"  -->
			    	<!-- :key="option[filterBy]" -->
			    <li 
			    	v-for="(option, index) in FormatedOptions" :key="index"
			    	@click="itemClicked(index); preventClose($event);"
			    	:class="{'selected' : (selected === index) || option.checked}"

			    >	       	
			    		<div class="checkbox">
			    			<div v-if="option.checked" class="checkbox-after"></div>
			    		</div>
			    		<div>{{ option[filterBy] }}</div><br>
			    		                      
			    </li>
			</ul> 

		</div>

      </div>

	<!-- {{options}}       -->
	<!-- {{FormatedOptions}} -->

	</div>
  </div>
</template>

<script>

	import { mapState } from 'vuex' //for user MapState

    export default {
       	name: "multi-select-app",
       	//props:['options','filterBy','placeholder'], //get from parent component
       	props: {
       	  options:{
       	  	//type: Object,
       	  	required: true,
       	  },
       	  value:{ //data come form selectedItem
	      	default: () => [],
	      },
	      filterBy: {
	        type: String,
	        required: true
	      },
	      valueProperty:{
	      	type: String,
	        required: true
	      },
	      placeholder: {
	      	type: String,
	        default: 'Click to select'
	      },
	    },
    	data (){      
	        return {
	        	optionTopHeight: '33.75px',
	        	selectOption: '',
	        	itemListHeight: 33.75,
	        	selectedItem: null,
	        	searchText: '',
	        	autoQuery: '',

	        	selected: 0,
	        	visible: false,	          	
	          	listVisible:  false, 
	          	//filterBy: 'cat_name', 

	        }
	    },
 
 	    computed: {
    		// ...mapState( 
      //        'CategoryStore', ['autoSearchData']
      //     	),

          	FormatedOptions() {
          		let fo = Object.values(this.options).map( option => {
          		//let fo = this.options.map( option => {
          			let checked = this.value.some(v => v === option[this.valueProperty]);
          			return { ...option, checked: checked};
          		});
          		return fo;

		        // this.$emit('change', this.query);
		        // if (this.query == '') {
		        //   return [];
		        // }
		        // return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )
		        //return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase() )
		    },

		}, 
       
        methods: { 
        	

        	fixTop(){
        		this.optionTopHeight = this.$refs.parentBox.clientHeight + 1 + 'px';
        		console.log(this.optionTopHeight);
        	}, 

        	autoSearch: _.debounce( (e) => {        		
	        	//alert(e.target.value)
	          	FireEvent.$emit('AutoCompleteSearch', e.target.value );
	          	//this.$store.dispatch('CategoryStore/searching', this.searchText); 
	          
	        },200 ),

	        ToggleItem(){
	        	this.visible = !this.visible;
	        	//this.visible = true;
	        	this.autoQuery = '';
	        	
	        	//document.getElementById('autoSearchField').focus();
	        	//this.$refs.autoSearchField.focus();
	        	// setTimeout(() => {
		        //   this.$refs.autoSearchField.focus();
		        // }, 50);
		    //      this.$nextTick(() => {
				  //   let editButtonRef = this.$refs.autoSearchField;
				  //   editButtonRef.focus();
				  // });
	        },
	        preventClose(e){
	        	//e.stopPropagation(); //
	        	e.stopImmediatePropagation();
  				//$(this).off("blur");
	        },
	        removeSelectItem(key){
        		//alert(key);
        		let SelectedValue = this.FormatedOptions[key][this.valueProperty];
        		let NewValue = [...this.value]; //spred oparetor
        		
	        	let existIndex = this.value.findIndex(v => v === SelectedValue);
        		//this.value.splice(key, 1);
        		NewValue.splice(existIndex, 1);
				this.$emit('input', NewValue)

				setTimeout(() => {   
	        		this.fixTop();
		        }, 50);
		        
				toastr.warning('Removed!');
        	},
	        itemClicked(index){
	        	//console.log(this.autoSearchData[index]['cat_name']);
	        	//console.log(this.autoSearchData[index]);
	        	//this.selected = index; //alert(this.selected);
	        	this.selectItem(index);

	        },

	        selectItem(index) {

	        	//console.log(this.FormatedOptions[index]);
	        	//this.selectedItem = this.autoSearchData[this.selected];
	        	let SelectedValue = this.FormatedOptions[index][this.valueProperty];
	        	let NewValue = [...this.value]; //spred oparetor

	        	let existIndex = this.value.findIndex(v => v === SelectedValue);
	        	if(existIndex === -1){
	        		NewValue.push(SelectedValue);
	        		toastr.success('Added!');
	        	}
	        	else{
	        		NewValue.splice(existIndex, 1);
	        		toastr.warning('Removed!');
	        		//toastr.warning('Already Selected this one!');
	        	}
	        	//this.value.push(SelectedValue); //this is also work	        	
	        	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
	        		        	
	        	setTimeout(() => {   
	        		this.fixTop();
		        }, 50);

		        //this.visible = false;	        
	        },

	        onChangeSelect(event){
	        	let index = event.target.selectedIndex;
	        	let id = event.target.value;
        		//console.log(event.target.selectedIndex);
        		let SelectedValue = this.FormatedOptions[index][this.valueProperty];
	        	let NewValue = [...this.value]; //spred oparetor

	        	let existIndex = this.value.findIndex(v => v === SelectedValue);
	        	if(existIndex === -1){
	        		NewValue.push(SelectedValue);
	        	}
	        	else{
	        		//NewValue.splice(existIndex, 1);
	        		toastr.warning('Already Selected this one!');
	        	}
	        	//this.value.push(SelectedValue); //this is also work	        	
	        	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
	        		        	
	        	setTimeout(() => {   
	        		this.fixTop();
		        }, 50);
        	},

	        up(){
	        	if(this.selected === 0){
	        		return;
	        	}

	        	this.selected -= 1;
	        	this.scrollToItem();
	        },

	        down(){
	        	 if (this.selected >= this.options.length - 1) {
		          return;
		        }
		        this.selected += 1;
		        this.scrollToItem();
	        },

	        scrollToItem(){
	        	this.$refs.optionList.scrollTop = this.selected * this.itemListHeight;
	        },
	        
        },

        created(){


	    },
	    mounted(){
	    	this.fixTop();
	    }
        
        
	}
</script>
	
<style>
	/*.my-multiselect{
		background: #ffffff;
		position: relative;
		padding: 0px 3px; 
		margin:10px 0px 0px 0px;
		display: inline-block;
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
	    padding: 1px 4px 1px 4px;
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
		//display: flex;
		display: inline-table;
		//flex-direction: column;
		//top:33.75px;
		
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
	}*/
</style>
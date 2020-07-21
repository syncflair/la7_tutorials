<template>
  <div class="row multi-select-app-one">	
	<div class="col-md-12 offset-md-3-">
      <!-- <h5>Multi Select</h5>       -->
  
	  <div class="my-multiselect" ref="parentBox" 
	  		@click="ToggleItem" 
	  		v-on:blur="visible = false;" 	  		
	  >	

	    <!-- v-model="selectedItem ? selectedItem[filterBy] : searchText " tabindex="-1"-->
        <div class="selected-item-box form-control- form-control-sm- form-control-navba-">
        	<ul>
	        	<!-- <li v-show="option.checked" class="selected-item" v-for="(option, key) in FormatedOptions" :key="key"> -->
	        	<span v-if="selectedOptions.length === 0" > {{ this.placeHolder }} </span>
	        	<li class="selected-item" v-for="(option, key) in selectedOptions" :key="key">
	        		{{ option[filterBy] }} 
	        		<i @click="preventClose($event); removeSelectItem(key);" class="far fa-times-circle"></i>
	        		<!-- <span v-show="!option.checked"> {{ this.placeHolder }} </span> -->
	        	</li>
        	</ul>
        	<!-- {{ this.placeHolder }} -->
        </div>

		<div v-show="visible" :style="{top: optionTopHeight }" class="popOverBox" @click="preventClose($event)">

			<!-- <select class="optionList" @change="onChangeSelect($event);" placeHolder="Select">	
				<option disabled value="">Select option</option>
				<option v-for="(option, index) in FormatedOptions" :key="index" v-bind:value="option.id" >
			    		<div class="checkbox">
			    			<div v-if="option.checked" class="checkbox-after"></div>
			    		</div>
			    		<div>{{ option[filterBy] }}</div>
			    </option>
			</select> -->

			<input type="text" class="form-control form-control-sm form-control-navbar" autocomplete="off"
			 	:placeHolder="this.placeHolder" 
			 	ref="autoSearchField" id="autoSearchField" 
			 	v-model="autoQuery"
			 	@keyup="autoSearch" 
			 	@keydown.up="up" @keydown.down="down" 
				@click="preventClose($event)"
				@keydown.enter.prevent="selectItem"
			>
				<!-- @keydown.enter="selectItem(index)" -->
			 <ul v-show="listVisible === true" ref="optionList" class="optionList dropdown-menu-">
			    	<!-- :key="option[filterBy]" -->
			    <li 
			    	v-if="autoQuery === '' ? listVisible = false : listVisible = true"
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
      <!-- {{value}} -->
      <!-- {{selectedOptions}} -->
	<!-- {{options}}       -->
	<!-- {{FormatedOptions}} -->
	<!-- {{valueProperty}} -->

	</div>
  </div>
</template>

<script>

	//import { mapState } from 'vuex' //for user MapState
    export default {
       	name: "multi-select-app-one",
       	//props:['options','filterBy','placeHolder'], //get from parent component
       	props: {
       	 //get all data
       	  options:{ 
       	  	//type: Object,
       	  	required: true,
       	  },
       	  //get only by auto search 
       	  autoSearchOptions:{ 
       	  	//type: Object,
       	  	required: true,
       	  },
       	  //get only selectedItem
       	  value:{ 
	      	default: () => [],
	      },
	      //filter by data field name
	      filterBy: {
	        type: String,
	        required: true
	      },
	      //value property is id
	      valueProperty:{
	      	type: String,
	        required: true
	      },
	      placeHolder: {
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
	        }
	    },
 
 	    computed: {

          	FormatedOptions() {
          		let fo = Object.values(this.autoSearchOptions).map( option => {
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

		    selectedOptions() {
          		let fo = Object.values(this.options).filter( data => {
          		//let fo = this.options.map( option => {
          			return this.value.includes(data.id)
          		});
          		return fo;
          	}

		}, 
       
        methods: {         	

        	fixTop(){
        		this.optionTopHeight = this.$refs.parentBox.clientHeight + 1 + 'px';
        		//console.log(this.optionTopHeight);
        	}, 

        	// autoSearch: _.debounce( (e) => {        		
	        // 	//alert(e.target.value)
	        //   	FireEvent.$emit('AutoCompleteSearchForDepartment', e.target.value );	          
	        // },200 ),
	        autoSearch(e){
	        	if(e.target.value != ''){
	        		FireEvent.$emit('AutoCompleteSearchForDepartment', e.target.value );
	        	}
	        	// else{
	        	// 	//this.autoSearchOptions = [] //dont do this because it's props
	        	// 	//FireEvent.$emit('EmptyAutoSerchData'); //go to parent and empty the array
	        	// 	this.listVisible =  false;
	        	// }
	        },

	        ToggleItem(){
	        	this.visible = !this.visible;
	        	//this.visible = true;
	        	this.autoQuery = '';

	        	setTimeout(() => {
		          this.$refs.autoSearchField.focus();
		        }, 50);
	        	
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
        		// let SelectedValue = this.FormatedOptions[key][this.valueProperty];
        		let SelectedValue = this.selectedOptions[key][this.valueProperty]; 
        		let NewValue = [...this.value]; //spred oparetor
        		
	        	let existIndex = this.value.findIndex(v => v === SelectedValue);
        		//this.value.splice(key, 1);
        		NewValue.splice(existIndex, 1);
				this.$emit('input', NewValue) //auto syncronize with v-model array in parent component

				setTimeout(() => {   
	        		this.fixTop();
		        }, 50);

				//toastr.warning('Removed!');
        	},
	        itemClicked(index){
	        	//console.log(this.autoSearchData[index]['cat_name']);
	        	//console.log(this.autoSearchData[index]);
	        	this.selected = index; //alert(this.selected);
	        	//this.selectItem(index);
	        	this.selectItem(); //get index value atometically and pass through usign this.selected ....
	        },

	        selectItem() {
	        	//console.log(this.FormatedOptions[index]);
	        	//this.selectedItem = this.autoSearchData[this.selected];
	        	let SelectedValue = this.FormatedOptions[this.selected][this.valueProperty];
	        	let NewValue = [...this.value]; //spred oparetor

	        	let existIndex = this.value.findIndex(v => v === SelectedValue);
	        	if(existIndex === -1){
	        		NewValue.push(SelectedValue);
	        		//toastr.success('Added!');
	        	}
	        	else{
	        		NewValue.splice(existIndex, 1);
	        		//toastr.warning('Removed!');
	        	}
	        	//this.value.push(SelectedValue); //this is also work	        	
	        	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
	        		        	
	        	setTimeout(() => {   
	        		this.fixTop();
		        }, 50);
		        //this.visible = false;	        
	        },

	        // selectItem(index) {
	        // 	//console.log(this.FormatedOptions[index]);
	        // 	//this.selectedItem = this.autoSearchData[this.selected];
	        // 	let SelectedValue = this.FormatedOptions[index][this.valueProperty];
	        // 	let NewValue = [...this.value]; //spred oparetor

	        // 	let existIndex = this.value.findIndex(v => v === SelectedValue);
	        // 	if(existIndex === -1){
	        // 		NewValue.push(SelectedValue);
	        // 		toastr.success('Added!');
	        // 	}
	        // 	else{
	        // 		NewValue.splice(existIndex, 1);
	        // 		toastr.warning('Removed!');
	        // 	}
	        // 	//this.value.push(SelectedValue); //this is also work	        	
	        // 	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword

	        
	        		        	
	        // 	setTimeout(() => {   
	        // 		this.fixTop();
		       //  }, 50);
		       //  //this.visible = false;	        
	        // },

	        //this is for selected option
	        // onChangeSelect(event){
	        // 	let index = event.target.selectedIndex;
	        // 	let id = event.target.value;
        	// 	//console.log(event.target.selectedIndex);
        	// 	let SelectedValue = this.FormatedOptions[index][this.valueProperty];
	        // 	let NewValue = [...this.value]; //spred oparetor

	        // 	let existIndex = this.value.findIndex(v => v === SelectedValue);
	        // 	if(existIndex === -1){
	        // 		NewValue.push(SelectedValue);
	        // 	}
	        // 	else{
	        // 		//NewValue.splice(existIndex, 1);
	        // 		toastr.warning('Already Selected this one!');
	        // 	}
	        // 	//this.value.push(SelectedValue); //this is also work	        	
	        // 	this.$emit('input', NewValue)//but emit to push value into array to parent, We dont need to any function in parent for using v-model for value with input keyword
	        		        	
	        // 	setTimeout(() => {   
	        // 		this.fixTop();
		       //  }, 50);
        	// },


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
	
</style>
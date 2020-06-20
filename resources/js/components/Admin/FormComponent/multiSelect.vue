<template>
  <div class="row">	
	<div class="col-md-6 offset-md-3">	
      <h3>Multi Select</h3>
      
      <!-- {{MultiSelects}} -->

	  <div class="MultiSelectComponent"   >	
		        
	    <!-- v-on:blur="visible = false" tabindex="-1" -->
	    <!-- v-model="selectedItem ? selectedItem[filterBy] : searchText " -->
        <div class="MultiSelectedItemBox form-control form-control-sm- form-control-navbar"         	       	    	
        	ref="parentBox" placeholder="Select ...." 
        	@mousedown.prevent="ToggleItem"         	  	
        >
        	<ul>
	        	<li class="MultiSelectedItems" v-for="(multiSelected, key) in MultiSelects">
	        		{{ multiSelected['cat_name'] }} 
	        		<i @click="DeleteMultiSelectItem(key)" class="far fa-times-circle"></i>
	        	</li>
        	</ul>
        </div>


		<div v-show="visible" :style="{top: optionTopHeight }" class="popOverBox" >
			 <input type="text" class="form-control form-control-sm form-control-navbar" placeholder="Start typing..."
			 	ref="autoSearchField"
			 	v-model="autoQuery"
			 	@keyup="autoSearch"
			 	@keydown.up="up"
				@keydown.down="down" 
				@keydown.enter="selectItem"
				@click=""
			>

			 <ul v-show="listVisible === true" 
			 	
			 	ref="optionList" 
			 	class="optionList dropdown-menu-">

			    <li v-if="autoQuery === '' ? listVisible = false : listVisible = true" 
			    	v-for="(item, index) in FormatedAutoSearchData" 
			    	:key="item[filterBy]"
			    	@click="itemClicked(index)"
			    	:class="{'selected' : (selected == index) }"
			    >	        	
			    		{{ item[filterBy] }}
			    		                      
			    </li>
			</ul> 
		</div>

      </div>

	<!-- {{autoSearchData}}       -->
	{{FormatedAutoSearchData}}

	</div>
  </div>
</template>

<script>

	import { mapState } from 'vuex' //for user MapState

    export default {   

    	name: "multiSelect-app",

    	data (){      
	        return {
	        	MultiSelects: [],
	        	optionTopHeight: '33.75px',
	        	selectOption: '',
	        	itemListHeight: 33.75,
	        	selectedItem: null,
	        	searchText: '',
	        	autoQuery: '',

	        	selected: 0,
	        	visible: false,	          	
	          	listVisible:  false, 
	          	filterBy: 'cat_name', //define the key that want to search

	        }
	    },
 
 	    computed: {
    		...mapState( 
             'CategoryStore', ['autoSearchData', 'pagination']
          	),

          	FormatedAutoSearchData() {
          		let fo = Object.values(this.autoSearchData).map( option => {
          		//let fo = this.autoSearchData.map( option => {
          			return { ...option, selectedData: false};
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
        		this.optionTopHeight = this.$refs.parentBox.clientHeight + 2 + 'px';
        		console.log(this.optionTopHeight);
        	}, 
        	
        	DeleteMultiSelectItem(key){
        		//alert(key);
        		this.MultiSelects.splice(key, 1);
        	},

        	autoSearch: _.debounce( (e) => {        		
	        	//alert(e.target.value)
	          	FireEvent.$emit('AutoCompleteSearch', e.target.value );
	          	//this.$store.dispatch('CategoryStore/searching', this.searchText); 
	          
	        },200 ),

	        ToggleItem(){
	        	this.visible = !this.visible;
	        	this.autoQuery = '';
	        	
	        	setTimeout(() => {
		          this.$refs.autoSearchField.focus();
		        }, 50);
	        },

	        itemClicked(index){
	        	//console.log(this.autoSearchData[index]['cat_name']);
	        	//console.log(this.autoSearchData[index]);
	        	//this.selected = index; //alert(this.selected);
	        	this.selectItem(index);

	        	//this.MultiSelects.push({ cat_name: '', cat_desc: '' });
	        },

	        selectItem(index) {
	        	//console.log(this.FormatedAutoSearchData[index]);
	        	//this.selectedItem = this.autoSearchData[this.selected];
	        	let SelectedValue = this.FormatedAutoSearchData[index];
	        	//let NewValue = [ ...this.MultiSelects ];
	        	//NewValue.push(SelectedValue);
	        	this.MultiSelects.push(SelectedValue);


	        	this.visible = false;
	        	//console.log(this.selectedItem[this.filterBy]);
	        	this.fixTop();
	        	//this.MultiSelects.push();
	        },

	        up(){
	        	if(this.selected === 0){
	        		return;
	        	}

	        	this.selected -= 1;
	        	this.scrollToItem();
	        },

	        down(){
	        	 if (this.selected >= this.autoSearchData.length - 1) {
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

	        FireEvent.$on('AutoCompleteSearch', (data) => {
        		//alert(data);
	          if(data === ''){
	          }else{
	            this.$store.dispatch('CategoryStore/AutoCompleteSearch', {key1: data, key2: 'ta'}); 
	          }
	        });

	    },
	    mounted(){
	    	this.fixTop();
	    }
        
        
	}
</script>
	
<style>
	.MultiSelectComponent{
		position: relative;
		background: #ffffff;
		display: inline-block;
		display: flex;
		/*border: 1px solid #ced4da;
		padding: 0.25rem 0.5rem;	    
	    line-height: 1.5;
	    height: 33.75px;
	    border-radius: 0.2rem;*/
	}
	.MultiSelectComponent:focus{
		//outline: none;
	}
	.MultiSelectedItemBox{
		background: #ffffff;
		height: auto;
		display: block;
	}
	.MultiSelectedItems{
		border: 1px solid #ced4da;
	    padding: 4px;
	    border-radius: 4px;
	    margin: 2px 3px 2px 3px;
    	list-style: none;
		float: left;
	}
	.MultiSelectedItems > i{
		color:red;
		cursor: pointer;
		//padding: 1px
	}


	.popOverBox{
		position: absolute;
		width: 100%;
		z-index: 1;
		background: #fff;
		border: 1px solid #dee2e6;
		//top:33.75px;
		
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
</style>
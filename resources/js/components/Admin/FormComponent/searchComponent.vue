<template>
  <div class="row">
	<div class="col-md-6">	

		<div class="select-option">
			<select class="form-control form-control-sm" v-model="selectOption">
				<option value="">Select ...</option> -->
				<option value="cat_name">Category Name</option>
				<option value="cat_slug">Category Slug</option>
				<option value="cat_desc">Category Description</option>
			</select>
		</div>
		<!-- {{selectOption}} -->
	</div>

	<div class="col-md-6">	

	<div class="autoCompleteSearch ">	
	  <div class="input-group input-control-sm searchBox" v-on:blur="visible = false" tabindex="-1" >                      
        <input  type="text" ref="searchText" class="form-control form-control-sm form-control-navbar"
        	
        	@mousedown="toggleVisible"  	
        	@keyup.enter="searchIt"
        	v-model="selectedItem ? selectedItem[filterBy] : searchText "
        	placeholder="Search..." aria-label="Search">
        <div class="input-group-append">
          <button @click="searchIt" class="btn btn-navbar btn-sm border" ><i class="fas fa-search blue"></i></button>
        </div>
      </div>


      <div v-show="visible" class="popOver">
     	 <input type="text" class="form-control form-control-sm form-control-navbar" 
     	 	ref="autoSearchField"
     	 	v-model="autoQuery"
     	 	@keyup="autoSearch"
     	 	@keydown.up="up"
       		@keydown.down="down" 
       		@keydown.enter="selectItem"
     	 	placeholder="Start typing...">

     	 <ul v-show="listVisible === true"      	 	
     	 	ref="optionList" 
     	 	class="optionList dropdown-menu-">

	        <li v-if="autoQuery === '' ? listVisible = false : listVisible = true" 
	        	v-for="(item, index) in autoSearchData" 
	        	:key="item[filterBy]"
	        	@click="itemClicked(index)"
	        	:class="{'selected' : (selected == index) }"
	        >	        	
	        		{{ item[filterBy] }}	 
	        		                      
	        </li>
	    </ul> 
      </div>

    </div>

	</div>

  </div>
</template>

<script>

	import { mapState } from 'vuex' //for user MapState

    export default {   

    	name: "search-app",

    	data (){      
	        return {
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

      //     	matches() {
		    //     // this.$emit('change', this.query);
		    //     // if (this.query == '') {
		    //     //   return [];
		    //     // }
		    //     // return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )

		    //     //return this.autoSearchData.filter( (item) => item[this.filterby].toLowerCase() )
		    // },

		}, 
       
        methods: {  
        	searchIt(){
        		FireEvent.$emit('searching'); 

        		if(this.selectedItem){
        			this.searchText = this.selectedItem[this.filterBy]; //push autosearch value to searchText
        			this.selectedItem = null; //null after enter 
        		}else{
        			return; //return this.searchText;
        		}
        		
        	},

        	autoSearch: _.debounce( (e) => {        		
	        	//alert(e.target.value)
	          	FireEvent.$emit('AutoCompleteSearch', e.target.value );
	          	//this.$store.dispatch('CategoryStore/searching', this.searchText); 
	          
	        },200 ),

	        toggleVisible(){
	        	this.visible = !this.visible;
	        	//this.$refs.autoSearchField.focus();
	        	this.autoQuery = '';
	        	
	        	setTimeout(() => {
		          this.$refs.autoSearchField.focus();
		        }, 50);
	        },

	        itemClicked(index){
	        	//console.log(this.autoSearchData[index]['cat_name']);
	        	this.selected = index; //alert(this.selected);
	        	this.selectItem();
	        },

	        selectItem() {
	        	this.selectedItem = this.autoSearchData[this.selected];
	        	this.visible = false;
	        	//console.log(this.selectedItem[this.filterBy]);
	        	this.$refs.searchText.focus();
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
		    FireEvent.$on('searching', () => {
		    	let SearchKey = this.selectedItem === null ? this.searchText : this.selectedItem[this.filterBy]
	          if(SearchKey=== ''){
	            //this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
	            this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
	          }else{
	            //this.$store.dispatch('CategoryStore/searching', {'key1': 'SearchKey', 'key2': 'Data1'}); 
	            //let payload = {'key1': SearchKey, 'key2': 'value2'}
	            this.$store.dispatch('CategoryStore/searching', {key1: SearchKey, key2: this.selectOption}); 
	            //console.log(this.selectedItem[this.filterBy])
	          }
	        });


	        FireEvent.$on('AutoCompleteSearch', (data) => {
        		//alert(data);
	          if(data === ''){
	          }else{
	            this.$store.dispatch('CategoryStore/AutoCompleteSearch', {key1: data, key2: 'ta'}); 
	          }
	        });

	    },
        
        
	}
</script>
	
<style>
	.autoCompleteSearch{
		position: relative;
	}
	.popOver{
		position: absolute;
		width: 100%;
		z-index: 1;
		background: #fff;
		border: 1px solid #dee2e6;
	}
	.popOver > input{
		//pointer-events: none;
		//outline: none;
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
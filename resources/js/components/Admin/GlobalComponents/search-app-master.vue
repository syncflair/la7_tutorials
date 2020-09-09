<template>
  <div class="row">
	<div class="col-6">	

		<div class="select-option">
			<select class="form-control form-control-sm" v-model="selectOption">
				<option value="">Search by...</option>
				<!-- <option disabled value="">Search by...</option> -->
				<option v-for="(serchOption, index) in SearchByOptions" :key="index" :value="serchOption.field_name">
					{{serchOption.show_name}}
				</option>
			</select>
		</div>
		<!-- {{selectOption}} -->

	</div>

	<div class="col-6">	

	<div class="autoCompleteSearch ">	
	  <div class="input-group input-control-sm searchBox" >                      
        <input  type="text" ref="searchText" class="form-control form-control-sm form-control-navbar"        	
        	@mousedown="toggleVisible"  	
        	@keyup.enter="searchIt"
        	v-model="selectedItem ? selectedItem[filterBy] : searchText "
        	placeholder="Search..." aria-label="Search" >

        <div class="input-group-append">
          <button @click="searchIt" class="btn btn-navbar btn-sm border" ><i class="fas fa-search blue"></i></button>
        </div>

      </div>

      <!-- v-on:blur="visible = false"  -->
      <div v-show="visible" class="popOver">
     	 <input type="text" class="form-control form-control-sm form-control-navbar" 
     	 	ref="autoSearchField"
     	 	v-model="autoQuery"
     	 	@keyup="autoSearch"
     	 	@keydown.up="up"
       		@keydown.down="down" 
       		@keydown.enter="selectItem"
       		v-on:blur="visible = false"
     	 	placeholder="Start typing...">

     	 <ul v-show="listVisible === true" ref="optionList" class="optionList dropdown-menu-">
     	 	<!-- @click="itemClicked(index)" -->
	        <li v-if="autoQuery === '' ? listVisible = false : listVisible = true" 
	        	v-for="(item, index) in autoCompleteData" 
	        	:key="item[filterBy]"
	        	@mousedown="itemClicked(index)"
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

	//import { mapState } from 'vuex' //for user MapState

    export default {   

    	name: "search-app-one",

    	props: {
    	  autoCompleteData:{
    	  	//type: Object,
	        required: true
    	  },
	      SearchByOptions: {
	          //type: Object,
	          required: true
	      },
	      filterBy: {
	          //type: Object,
	          required: true
	      },
	      pagination:{
    	  	//type: Object,
	        required: true
    	  },

	    },

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
	          	//filterBy: 'cat_name', //define the key that want to search
	        }
	    },
 
 	    computed: {
    		// ...mapState( 
      //        'CountryStore', ['autoCompleteData', 'pagination']
      //     	),

      //     	matches() {
		    //     // this.$emit('change', this.query);
		    //     // if (this.query == '') {
		    //     //   return [];
		    //     // }
		    //     // return this.autoCompleteData.filter( (item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()) )

		    //     //return this.autoCompleteData.filter( (item) => item[this.filterby].toLowerCase() )
		    // },

		}, 
       
        methods: {  
        	searchIt(){
        		let SearchKey = this.selectedItem === null ? this.searchText : this.selectedItem[this.filterBy] ;

        		//FireEvent.$emit('searching', SearchKey); 
        		// if(SearchKey === ''){
	         //   		FireEvent.$emit('AfterChange'); 
	         //   		//this.$store.dispatch('CountryStore/fetchCountry', this.pagination.per_page);
	         //  	}else{
		        //     //this.$store.dispatch('CountryStore/searching', {'key1': 'SearchKey', 'key2': 'Data1'}); 
		        //     //let payload = {'key1': SearchKey, 'key2': 'value2'}
		        //     //console.log(this.selectedItem[this.filterBy])
		        //     //this.$store.dispatch('CountryStore/searching', {key1: SearchKey, key2: this.selectOption}); 		            
		        //     //FireEvent.$emit('searchData', {search_key: SearchKey, search_option: this.selectOption}); 
		        //     this.$emit('searchData', {search_key: SearchKey, search_option: this.selectOption}); 
	         //  	}

	          	this.$emit('searchData', {search_key: SearchKey, search_option: this.selectOption}); 

        		if(this.selectedItem){
        			this.searchText = this.selectedItem[this.filterBy]; //push autosearch value to searchText
        			this.selectedItem = null; //null after enter 
        		}else{
        			return; //return this.searchText;
        		}        		
        	},

        	// autoSearch: _.debounce( (e) => {        		
	        // 	//alert(e.target.value)	          
	        //   	// FireEvent.$emit('AutoCompleteSearch', e.target.value );	          
	        //   	// this.$emit('AutoCompleteSearch', e.target.value );	
	        //   	this.$emit('AutoCompleteSearch', e.target.value );       
	        // },200 ),
	        
	        autoSearch(e){
	        	this.$emit('AutoCompleteSearch', e.target.value ); 
	        },

	        toggleVisible(){
	        	this.visible = !this.visible;
	        	//this.$refs.autoSearchField.focus();
	        	this.autoQuery = '';
	        	
	        	setTimeout(() => {
		          this.$refs.autoSearchField.focus();
		        }, 50);
	        },

	        itemClicked(index){
	        	//console.log(this.autoCompleteData[index]['cat_name']);
	        	this.selected = index; //alert(this.selected);
	        	this.selectItem();
	        },

	        selectItem() {
	        	if(this.autoCompleteData[this.selected] != null){
	        		this.selectedItem = this.autoCompleteData[this.selected];
	        	}
	        	
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
	        	 if (this.selected >= this.autoCompleteData.length - 1) {
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

	        // FireEvent.$on('AutoCompleteSearch', (data) => {
        	// 	//alert(data);
	        //   if(data != ''){
	        //     this.$store.dispatch('CountryStore/AutoCompleteSearch', {key1: data, key2: 'ta'}); 
	        //   }
	        // });

	    },
        
        
	}
</script>
	
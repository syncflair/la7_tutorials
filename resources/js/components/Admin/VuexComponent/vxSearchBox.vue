<template>
	<span>

	  <div class="input-group input-control-sm search-box" style="position: relative;">                      
        <input v-model="searchText" @keyup="searchit" class="form-control form-control-sm form-control-navbar" type="text" name="" placeholder="Search..." aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar btn-sm border" ><i class="fas fa-search blue"></i></button>
        </div>
      </div>

      <!-- v-model="searchText" @keyup="searchit" -->
      <!-- @click="searchit" -->

	</span>
</template>

<script>
    import { mapState } from 'vuex' //for user MapState

    export default {
    	name: "vxSearchBox",
      data (){      
        return {
          searchText: '',       
        }
      },

      computed:{
        ...mapState( 
             'CategoryStore', ['pagination']
          )
      },

      methods: {

        searchit: _.debounce( () => {
          FireEvent.$emit('searching');
          //this.$store.dispatch('CategoryStore/searching', this.searchText); 
        },500 ),

        // searchit(){
        //   this.$store.dispatch('CategoryStore/searching', this.searchText); 
        //  //FireEvent.$emit('searching', this.searchText);
        //  //alert(this.searchText)
        // }

      },

      created(){
        FireEvent.$on('searching', () => {
          if(this.searchText === ''){
            this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
          }else{
            this.$store.dispatch('CategoryStore/searching', this.searchText); 
          }
        });

      },

      mounted() {
          //console.log('Component mounted.')
      }
    }
</script>

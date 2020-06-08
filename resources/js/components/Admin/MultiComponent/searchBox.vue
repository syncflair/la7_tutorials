<template>
	<div>

	  <div class="input-group input-control-sm search-box" style="position: relative;">                      
        <input v-model="searchText" @keyup="searchit" class="form-control form-control-sm form-control-navbar" type="text" name="" placeholder="Search..." aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar btn-sm border" ><i class="fas fa-search blue"></i></button>
        </div>
      </div>

      <!-- v-model="searchText" @keyup="searchit" -->
      <!-- @click="searchit" -->

	</div>
</template>

<script>
    export default {
      data (){      
        return {
          searchText: '',       
        }
      },

      methods: {

        // searchit: _.debounce( () => {
        //   let query = this.searchText;
        //   //FireEvent.$emit('searching');
        //   FireEvent.$emit('searching', query);
          
        // },300 ),

        searchit(){
         FireEvent.$emit('searching', this.searchText);
         //alert(this.searchText)
        }

      },

      mounted() {
          //console.log('Component mounted.')
      }
    }
</script>

<template>
	<div>

	  <div class="input-group input-control-sm search-box" style="position: relative;">                      
        <input class="form-control form-control-sm form-control-navbar" type="text" name="" placeholder="Search..." aria-label="Search">
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<template>
    <span>
        <!-- Vue display here :key="$route.fullPath"--> 
        <router-view></router-view>
        <!-- Vue progress bar display here -->
        <vue-progress-bar></vue-progress-bar>
        
    </span>
</template>

<script>
    export default {
        mounted() {
            //console.log('Component mounted.')
        }
    }
</script>

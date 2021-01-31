<template>
    
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
    
</template>
<script>
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "admin-supplier-right-asside-component",
        data (){      
            return {           
            }
        },

        watch: { //for title
            // '$route': function (val){
            //     this.breadcrumb = $route.meta.breadcrumb;
            // }

            // $route:{
            //     handler: (to, from) => {
            //         this.breadcrumb = $route.meta.breadcrumb;
            //     },
            //      //immediate: true,
            // }
        }, 

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            console.log();
        },
    }
</script>
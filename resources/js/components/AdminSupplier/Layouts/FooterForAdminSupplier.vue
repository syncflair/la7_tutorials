<template>
    
    <footer class="main-footer">
        <!-- To the right -->
        <!-- <div class="float-right d-none d-sm-inline">
          Anything you want
        </div> -->

        <!-- Default to the left -->
        <div class="text-center">
            <small>Copyright &copy; 2014-2019 <a href="https://sorboraho.com">Sorboraho</a>. All rights reserved.  </small>     
        </div>
    </footer>
    
</template>
<script>
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "admin-supplier-footer-component",
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
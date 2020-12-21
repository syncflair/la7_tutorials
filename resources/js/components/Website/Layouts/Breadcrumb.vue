<template>


    <div v-show="$route.meta.breadcrumb" class="bg-gray-13 bg-md-transparent">
        <div class="container">
            <div class="my-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">

                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                        	<router-link to="/home">Home</router-link>
                        </li>

                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">
                        	{{ $route.meta.breadcrumb }}
                        </li>
                        
                    </ol>
                </nav>
            </div>
        </div>
    </div>

    <!-- breadcrumb for product -->
    <!-- <div class="bg-gray-13 bg-md-transparent">
        <div class="container">
            <div class="my-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Accessories</a></li>
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Headphones</a></li>
                        <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Ultra Wireless S50 Headphones S50 with Bluetooth</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div> -->
    <!-- End breadcrumb -->
    
</template>
<script>
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "breadcrumb-Public-website",
        data (){      
            return {
                breadcrumb: '',            
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
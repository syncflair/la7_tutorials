<template>
<!-- ========== MAIN CONTENT ========== -->
<main id="content" role="main" class="cart-page">
   

    <div class="container">
        <div class="my-6">
            <h1 class="text-center">My wishlist on Electro</h1>
        </div>
        <div class="mb-16 wishlist-table">
            <form class="mb-4" action="#" method="post">
                <div class="table-responsive">
                    <table class="table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="product-remove">&nbsp;</th>
                                <th class="product-thumbnail">&nbsp;</th>
                                <th class="product-name">Product</th>
                                <th class="product-price">Unit Price</th>
                                <th class="product-Stock w-lg-15">Stock Status</th>
                                <th class="product-subtotal min-width-200-md-lg">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <a href="#" class="text-gray-32 font-size-26">×</a>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <a href="#"><img class="img-fluid max-width-100 p-1 border border-color-1" src="website/assets/img/300X300/img6.jpg" alt="Image Description"></a>
                                </td>

                                <td data-title="Product">
                                    <a href="#" class="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                </td>

                                <td data-title="Unit Price">
                                    <span class="">$1,100.00</span>
                                </td>

                                <td data-title="Stock Status">
                                    <!-- Stock Status -->
                                    <span>In stock</span>
                                    <!-- End Stock Status -->
                                </td>

                                <td>
                                    <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">Add to Cart</button>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="text-center">
                                    <a href="#" class="text-gray-32 font-size-26">×</a>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <a href="#"><img class="img-fluid max-width-100 p-1 border border-color-1" src="website/assets/img/300X300/img7.png" alt="Image Description"></a>
                                </td>

                                <td data-title="Product">
                                    <a href="#" class="text-gray-90">Widescreen NX Mini F1 SMART NX</a>
                                </td>

                                <td data-title="Unit Price">
                                    <span class="">$685.00</span>
                                </td>

                                <td data-title="Stock Status">
                                    <!-- Stock Status -->
                                    <span>In stock</span>
                                    <!-- End Stock Status -->
                                </td>

                                <td>
                                    <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">Add to Cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    </div>
</main>
<!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "wishlist-Public-website",
        data (){      
            return {
                            
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: {          
        },           

        created(){
        },
           
        mounted() {
            
            this.$nextTick(function () {
                FireEvent.$emit('Call_all_javascript_function_for_theme'); // call all javascript for theme
            })//end this.$nextTick
        },
    }
</script>
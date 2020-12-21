<template>
<span>
    

    <div class="container">
        <div class="mx-xl-10">
            <div class="mb-6 text-center">
                <h1 class="mb-6">Track your Order</h1>
                <p class="text-gray-90 px-xl-10">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
            </div>
            <div class="my-4 my-xl-8">
                <form class="js-validate" novalidate="novalidate">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <!-- Form Group -->
                            <div class="js-form-message form-group">
                                <label class="form-label" for="orderid">Order ID
                                </label>
                                <input type="text" class="form-control" name="text" id="orderid" placeholder="Found in your order confirmation email." aria-label="Found in your order confirmation email.">
                            </div>
                            <!-- End Form Group -->
                        </div>
                        <div class="col-md-6 mb-3">
                            <!-- Form Group -->
                            <div class="js-form-message form-group">
                                <label class="form-label" for="billingemail">Billing email
                                </label>
                                <input type="email" class="form-control" name="email" id="billingemail" placeholder="Email you used during checkout." aria-label="Email you used during checkout." required
                                data-msg="Please enter a valid email address."
                                data-error-class="u-has-error"
                                data-success-class="u-has-success">
                            </div>
                            <!-- End Form Group -->
                        </div>
                        <!-- Button -->
                        <div class="col mb-1">
                            <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">Track</button>
                        </div>
                        <!-- End Button -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</span>
</template>
<script>
	//import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
	//import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "Track-Your-Order-Public-website",
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
            // initialization of slick carousel (Slick Slider call from here, otherwise it get error)
            //$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
        },
    }
</script>
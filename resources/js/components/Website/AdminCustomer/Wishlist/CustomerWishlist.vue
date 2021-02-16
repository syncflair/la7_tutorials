<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-10 mt-4">
            <div class="bg-gray-1- d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminCustomer />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">
                    <div class="col-lg-12 border-bottom border-color-1 mb-3 col-6-">
                        <h3 class="section-title- mb-0 pb-1 pl-2- font-size-18">My Wishlist</h3>
                    </div>


                    <div class="mb-8 w-100 wishlist-table cart-wishlist-custome">
                        <form class="mb-2" action="#" method="post">
                            <div class="table-responsive-">
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
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img6.jpg" loading="lazy" alt="Image Description"></a>
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
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><!-- <i class="font-size-22 ec ec-shopping-bag"></i> --> Add to Cart</button>
                                            </td>
                                        </tr>
                                        <tr class="">
                                            <td class="text-center">
                                                <a href="#" class="text-gray-32 font-size-26">×</a>
                                            </td>
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img7.png" alt="Image Description"></a>
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
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto">Add to Cart</button>
                                            </td>
                                        </tr>
                                        <tr class="">
                                            <td class="text-center">
                                                <a href="#" class="text-gray-32 font-size-26">×</a>
                                            </td>
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img7.png" alt="Image Description"></a>
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
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto">Add to Cart</button>
                                            </td>
                                        </tr>

                                        <tr class="">
                                            <td class="text-center">
                                                <a href="#" class="text-gray-32 font-size-26">×</a>
                                            </td>
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img7.png" alt="Image Description"></a>
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
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-100- w-md-auto">Add to Cart</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavForAdminCustomer from '../Include/NavForAdminCustomer'
    export default {
        name: "customer-Wishlist-website-auth",
        data (){      
            return {         
            }
        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 
        },           

        created(){
        },
           
        mounted() {

            this.$nextTick(function () {

                //initialization of HSMegaMenu component
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
                });               

                // initialization of svg injector module
                $.HSCore.components.HSSVGIngector.init('.js-svg-injector');


                     // initialization of header
                $.HSCore.components.HSHeader.init($('#header'));

                // initialization of animation
                $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                // initialization of countdowns
                // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                //     yearsElSelector: '.js-cd-years',
                //     monthsElSelector: '.js-cd-months',
                //     daysElSelector: '.js-cd-days',
                //     hoursElSelector: '.js-cd-hours',
                //     minutesElSelector: '.js-cd-minutes',
                //     secondsElSelector: '.js-cd-seconds'
                // });

                // initialization of malihu scrollbar
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

                // initialization of forms
                $.HSCore.components.HSFocusState.init();

                // initialization of form validation
                // $.HSCore.components.HSValidation.init('.js-validate', {
                //     rules: {
                //         confirmPassword: {
                //             equalTo: '#signupPassword'
                //         }
                //     }
                // });

                // initialization of show animations
                $.HSCore.components.HSShowAnimation.init('.js-animation-link');

                // initialization of fancybox
                // initialization of popups
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of slick carousel
                // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

                // initialization of go to
                $.HSCore.components.HSGoTo.init('.js-go-to');

                // initialization of hamburgers
                $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                    e.preventDefault();

                    var target = $(this).data('target');

                    if($(this).attr('aria-expanded') === "true") {
                        $(target).collapse('hide');
                    } else {
                        $(target).collapse('show');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

                // initialization of select picker
                // $.HSCore.components.HSSelectPicker.init('.js-select');


                // initialization of HSScrollNav component
                // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                //   duration: 700
                // });

                // initialization of quantity counter
                //$.HSCore.components.HSQantityCounter.init('.js-quantity');

                // initialization of forms
                //$.HSCore.components.HSRangeSlider.init('.js-range-slider');


            })//end this.$nextTick
        },
    }
</script>
<template>
	<aside id="sidebarCartContent" class="u-sidebar u-sidebar__lg" aria-labelledby="sidebarCartToggler">
        <div class="u-sidebar__scroller">
            <div class="u-sidebar__container">
                <div class="js-scrollbar- u-header-sidebar__footer-offset pb-3">
                    <!-- Toggle  Button -->
                    <div class="d-flex bg-primary align-items-center pb-2 pt-2 px-3">
                    	<span>My Cart</span>
                        <button type="button" class="close ml-auto"
                            aria-controls="sidebarCartContent"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-unfold-event="click"
                            data-unfold-hide-on-scroll="false"
                            data-unfold-target="#sidebarCartContent"
                            data-unfold-type="css-animation"
                            data-unfold-animation-in="fadeInRight"
                            data-unfold-animation-out="fadeOutRight"
                            data-unfold-duration="500">
                            <i class="ec ec-close-remove"></i>
                        </button>
                    </div>                                       
                    <!-- End Toggle Button -->

                    

                    <!-- Content -->
                    <div class="js-scrollbar u-sidebar__body">
                        <div class="js-scrollbar u-sidebar__content- u-header-sidebar__content_cart" style="max-height: 250px">
	                        
                            <!-- Title -->
                            <!-- <header class="text-center mb-2">
	                            <h4 class="h4 mb-0">Cart Items</h4>
	                            <p>Cart Details</p>
                            </header> -->
                            <!-- End Title -->

                            <!-- Cart Body -->
	                        <!-- <div id="basicDropdownHover-" class="cart-dropdown dropdown-menu dropdown-unfold border-top border-top-primary mt-3 border-width-2 border-left-0 border-right-0 border-bottom-0 left-auto right-0" aria-labelledby="basicDropdownHoverInvoker"> -->
	                        <div class="pb-2">
						        <ul class="list-unstyled px-3- pt-3">
						            <li class="border-bottom pb-2 mb-3">
						                <div class="">
						                    <ul class="list-unstyled row mx-n2">
						                        <li class="px-2 col-auto">
						                            <img class="img-fluid" src="website/assets/img/75X75/img1.jpg" alt="Image Description">
						                        </li>
						                        <li class="px-2 col">
						                            <h5 class="text-blue font-size-14 font-weight-bold">Ultra Wireless S50 Headphones S50 with Bluetooth</h5>
						                            <span class="font-size-14">1 × $1,100.00</span>
						                        </li>
						                        <li class="px-2 col-auto">
						                            <a href="#" class="text-gray-90"><i class="ec ec-close-remove"></i></a>
						                        </li>
						                    </ul>
						                </div>
						            </li>
						            <li class="border-bottom pb-2 mb-3">
						                <div class="">
						                    <ul class="list-unstyled row mx-n2">
						                        <li class="px-2 col-auto">
						                            <img class="img-fluid" src="website/assets/img/75X75/img2.jpg" alt="Image Description">
						                        </li>
						                        <li class="px-2 col">
						                            <h5 class="text-blue font-size-14 font-weight-bold">Widescreen NX Mini F1 SMART NX</h5>
						                            <span class="font-size-14">1 × $685.00</span>
						                        </li>
						                        <li class="px-2 col-auto">
						                            <a href="#" class="text-gray-90"><i class="ec ec-close-remove"></i></a>
						                        </li>
						                    </ul>
						                </div>
						            </li>
						            <li class="border-bottom pb-2 mb-3">
						                <div class="">
						                    <ul class="list-unstyled row mx-n2">
						                        <li class="px-2 col-auto">
						                            <img class="img-fluid" src="website/assets/img/75X75/img2.jpg" alt="Image Description">
						                        </li>
						                        <li class="px-2 col">
						                            <h5 class="text-blue font-size-14 font-weight-bold">Widescreen NX Mini F1 SMART NX</h5>
						                            <span class="font-size-14">1 × $685.00</span>
						                        </li>
						                        <li class="px-2 col-auto">
						                            <a href="#" class="text-gray-90"><i class="ec ec-close-remove"></i></a>
						                        </li>
						                    </ul>
						                </div>
						            </li>
						            <li class="border-bottom pb-2 mb-3">
						                <div class="">
						                    <ul class="list-unstyled row mx-n2">
						                        <li class="px-2 col-auto">
						                            <img class="img-fluid" src="website/assets/img/75X75/img2.jpg" alt="Image Description">
						                        </li>
						                        <li class="px-2 col">
						                            <h5 class="text-blue font-size-14 font-weight-bold">Widescreen NX Mini F1 SMART NX</h5>
						                            <span class="font-size-14">1 × $685.00</span>
						                        </li>
						                        <li class="px-2 col-auto">
						                            <a href="#" class="text-gray-90"><i class="ec ec-close-remove"></i></a>
						                        </li>
						                    </ul>
						                </div>
						            </li>
						        </ul>						        
						    </div>

						    <!-- <div class="flex-center-between px-4 pt-2 pb-2">
					            <router-link to="/cart" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Cart</router-link>
					            <router-link to="/checkout" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Checkout</router-link>
					        </div> -->
						    <!-- End Cart Body --> 

	                    </div>

	                    <div class="pb-3">
		                    <!-- <span>My Cart Footer</span> -->
		                    <div class="flex-center-between px-4 pt-2 pb-2">
		                    	<!-- <div class="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7- col-md-8 offset-md-4"> -->
				                    <!-- <div class="border-bottom border-color-1 mb-3">
				                        <h3 class="d-inline-block section-title mb-0 pb-2 font-size-26">Cart totals</h3>
				                    </div> -->
				                    <table class="table mb-3 mb-md-0">
				                        <tbody>
				                            <tr class="cart-subtotal">
				                                <th>Subtotal</th>
				                                <td data-title="Subtotal"><span class="amount">$1,785.00</span></td>
				                            </tr>
				                            <tr class="shipping">
				                                <th>Shipping</th>
				                                <td data-title="Shipping">
				                                    Flat Rate: <span class="amount">$300.00</span>
				                                </td>
				                            </tr>
				                            <tr class="order-total">
				                                <th>Total</th>
				                                <td data-title="Total"><strong><span class="amount">$2,085.00</span></strong></td>
				                            </tr>
				                        </tbody>
				                    </table>
				                    <!-- <button type="button" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-md-none">Proceed to checkout</button> -->
				                <!-- </div> -->
		                    </div>

		                    <div class="flex-center-between px-4 pt-2 pb-4">
					            <router-link to="/cart" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Cart</router-link>
					            <router-link to="/checkout" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Checkout</router-link>
					        </div>
		                </div>
                    </div>
                    <!-- End Content -->                 


                </div>
            </div>
        </div>


    </aside>
</template>
<script></script>
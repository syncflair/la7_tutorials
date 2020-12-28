<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-10 mt-4">
            <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminCustomer />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">
                    <div class="border-bottom border-color-1 mb-1">
                        <h3 class="section-title mb-0 pb-2 pl-2 font-size-25">My Vouchers</h3>
                    </div>

                    <div class="mb-8 w-100 wishlist-table cart-wishlist-custome">
                        <form class="mb-2" action="#" method="post">
                            <div class="table-responsive-">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>                                            
                                            <th class="product-thumbnail">&nbsp;</th>
                                            <th class="product-name">Voucher</th>
                                            <th class="product-price">Amount</th>
                                            <th class="product-price">Type</th>
                                            <th class="product-Stock w-lg-15">Expire</th>
                                            <th class="product-subtotal min-width-200-md-lg">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>                                            
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img6.jpg" loading="lazy" alt="Image Description"></a>
                                            </td>

                                            <td data-title="Product">
                                                <a href="#" class="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                            </td>                                           

                                            <td data-title="Unit Price">
                                                <span class="">$1,100.00</span>
                                            </td>

                                            <td class="text-center">
                                                <span class="">Fixed</span>
                                            </td>

                                            <td data-title="Stock Status">
                                                <!-- Stock Status -->
                                                <span>10/10/2023</span>
                                                <!-- End Stock Status -->
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><!-- <i class="font-size-22 ec ec-shopping-bag"></i> --> Manage</button>
                                            </td>
                                        </tr>
                                        <tr>                                            
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img6.jpg" alt="Image Description"></a>
                                            </td>

                                            <td data-title="Product">
                                                <a href="#" class="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                            </td>                                           

                                            <td data-title="Unit Price">
                                                <span class="">$1,100.00</span>
                                            </td>

                                            <td class="text-center">
                                                <span class="">Fixed</span>
                                            </td>

                                            <td data-title="Stock Status">
                                                <!-- Stock Status -->
                                                <span>10/10/2023</span>
                                                <!-- End Stock Status -->
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><!-- <i class="font-size-22 ec ec-shopping-bag"></i> --> Manage</button>
                                            </td>
                                        </tr>

                                        <tr>                                            
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img6.jpg" alt="Image Description"></a>
                                            </td>

                                            <td data-title="Product">
                                                <a href="#" class="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                            </td>                                           

                                            <td data-title="Unit Price">
                                                <span class="">$1,100.00</span>
                                            </td>

                                            <td class="text-center">
                                                <span class="">Fixed</span>
                                            </td>

                                            <td data-title="Stock Status">
                                                <!-- Stock Status -->
                                                <span>10/10/2023</span>
                                                <!-- End Stock Status -->
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><!-- <i class="font-size-22 ec ec-shopping-bag"></i> --> Manage</button>
                                            </td>
                                        </tr>

                                        <tr>                                            
                                            <td class="d-none d-md-table-cell">
                                                <a href="#"><img class="img-fluid max-width-70 p-1 border border-color-1" src="/../website/assets/img/300X300/img6.jpg" alt="Image Description"></a>
                                            </td>

                                            <td data-title="Product">
                                                <a href="#" class="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                            </td>                                           

                                            <td data-title="Unit Price">
                                                <span class="">$1,100.00</span>
                                            </td>

                                            <td class="text-center">
                                                <span class="">Fixed</span>
                                            </td>

                                            <td data-title="Stock Status">
                                                <!-- Stock Status -->
                                                <span>10/10/2023</span>
                                                <!-- End Stock Status -->
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><!-- <i class="font-size-22 ec ec-shopping-bag"></i> --> Manage</button>
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
        name: "customer-Voucher-website-auth",
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
        },
    }
</script>
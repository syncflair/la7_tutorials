<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-5 mt-4">
            <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminCustomer />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">
                    <div class="border-bottom border-color-1 mb-1">
                        <h5 class="section-title- mb-0 pb-1 pl-2- font-size-18">My Address</h5>
                    </div>

                    <div class="mb-8 w-100 wishlist-table cart-wishlist-custome">
                        <div class="table-responsive-">
                            <table class="table" cellspacing="0">
                                <thead>
                                    <tr> 
                                        <th class="product-thumbnail">&nbsp;</th>
                                        <th class="product-name">Address</th>
                                        <th class="product-name">For</th>
                                        <th class="product-subtotal min-width-200-md-lg">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>  
                                        <td class="text-center">
                                            <span class="">#</span>
                                        </td>
                                        <td data-title="Address">
                                            <a href="#" class="text-gray-90">100/5, Bordhonbari, Mirpur 1</a>
                                        </td>

                                        <td class="text-center-" data-title="for">
                                            <span class="">Shiping</span>
                                        </td>

                                        <td class="text-right">
                                            <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><i class="far fa-edit"></i> Edit</button>
                                            <button type="button" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><i class="fas fa-trash-alt"></i> Delete</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="mb-1 col text-right">
                        <router-link to="/auth/my-address-update" class="btn btn-primary-dark ml-md-2 px-5 px-md-4 px-lg-5 w-100- w-md-auto d-none- d-md-inline-block"><i class="fas fa-plus"></i> Add new address</router-link>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavForAdminCustomer from '../Include/NavForAdminCustomer'
    export default {
        name: "customer-address-website-auth",
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
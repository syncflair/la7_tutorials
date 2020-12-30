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

                    <!-- <div class="col-lg-12 col- order-lg-1">
                        <div class="border-bottom border-color-1 mb-5">
                            <h3 class="section-title mb-0 pb-2 font-size-25">Profile</h3>
                        </div>
                    </div> -->

                    <!-- Customer profile -->
                    <div class="col-lg-12 col- order-lg-1">
                        <div class="row pb-7 mb-7">
                            <div class="col-lg-12 border-bottom border-color-1 mb-3 col-6-">
                                <h3 class="section-title- mb-0 pb-1 pl-2- font-size-18">My Profile</h3>
                            </div>

                            <div class="col-lg-3 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Full Name</h3>
                                <p> {{ authCustomer.name }}</p>
                            </div>

                            <div class="col-lg-3 col-6 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Email Address</h3>
                                <p> {{authCustomer.email }}</p>
                            </div>

                            <div class="col-lg-2 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Phone</h3>
                                <p> +88 {{ authCustomer.phone }}</p>
                            </div>

                            <div class="col-lg-2 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Birthday</h3>
                                <p> {{ authCustomer.created_at | formatDate }} </p>
                            </div>

                            <div class="col-lg-1 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Gender</h3>
                                <p>Male</p>
                            </div>

                            


                            <div class="col-lg-12 col-12 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Address</h3>
                                <p> Mahmudur ranman</p>
                            </div>



                            <div class="col-lg-12 col-12 mb-1 text-right">
                                <router-link to="/auth/my-profile-update" class="btn btn-primary ml-md-2 px-3 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block"><i class="fas fa-plus"></i> Edit Profile</router-link>
                            </div>






                        </div>
                    </div> 
                    <!-- END Customer profile -->

                    
                    <div class="col-lg-12  col- order-lg-1">

                    </div>
                    
                    
                    


                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavForAdminCustomer from '../Include/NavForAdminCustomer'

    import { mapState } from 'vuex' //for user MapState

    export default {
        name: "customer-Profile-website-auth",
        data (){      
            return {         
            }
        },

        computed: {

          ...mapState( 'commonStoreForWebsite', ['authCustomer'] ),

        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 
        },           

        created(){
            this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerData'); //get auth customer data  
        },
           
        mounted() {
        },
    }
</script>
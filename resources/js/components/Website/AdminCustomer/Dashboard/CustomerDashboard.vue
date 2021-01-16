<template>
    

<div class="container">
    <!-- <div class="mb-5">
        <h1 class="text-center">Contact</h1>
    </div> -->
            
    <div class="row mb-10 mt-4">

        <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">
            <NavForAdminCustomer />
        </div>

        <div class="bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-">
            <div class="row pt-3">
                <div class="col-lg-3 col-6">
                    <div class="small-box bg-danger- bg-white">
                        <div class="inner">

                            <h5 class="text-white- text-secondary" ><small>{{authCustomer.name}}</small></h5> 
                            <p class="text-white- text-secondary mb-2"><i class="fas fa-at"></i> {{authCustomer.email}}</p>
                            <p class="text-white- text-secondary mb-2"><i class="fas fa-phone"></i> {{authCustomer.phone}}</p>

                            <p v-if="authCustomer.status_id === 1" class="text-white- text-secondary mb-2">
                                <span class="btn- px-1 bg-success text-white font-size-9- rounded-lg">
                                    <i class="fas fa-check font-size-8"></i>
                                     <small>Verified</small>
                                </span>
                            </p>

                        </div> 
                        <!-- <div class="icon"><i class="font-size-18 ec ec-shopping-bag"></i></div>  -->
                        <router-link to="/auth/my-profile" class="small-box-footer text-secondary">Profile <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary">150</h3> 
                            <p class="text-white- text-secondary">Orders</p>
                        </div> 
                        <div class="icon"><i class="fas fa-shopping-cart"></i></div> 
                        <router-link to="/auth/my-orders" class="small-box-footer text-secondary">My Orders <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-success- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary" >53<!-- <sup style="font-size: 20px;">%</sup> --></h3> 
                            <p class="text-white- text-secondary">Cart</p>
                        </div> 
                        <div class="icon"><i class="fas fa-shopping-bag"></i></div> 
                        <router-link to="/auth/my-cart" class="small-box-footer text-secondary">Cart <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div> 

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-warning- bg-white">
                        <div class="inner">
                            <h3 class="text-white- text-secondary">44</h3> 
                            <p class="text-white- text-secondary">Wishlist</p>
                        </div> 
                        <div class="icon"><i class="fas fa-cart-plus"></i></div> 
                        <router-link to="/auth/my-wishlist" class="small-box-footer text-secondary">Wishlist <i class="fas fa-arrow-circle-right"></i></router-link>
                    </div>
                </div>

            </div>


            <!-- <div class="row pt-3">
                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3 class="text-white">150</h3> 
                            <p class="text-white">Orders</p>
                        </div> 
                        <div class="icon"><i class="ion ion-bag"></i></div> 
                        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div> 
                <div class="col-lg-3 col-6">
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3 class="text-white" >53<sup style="font-size: 20px;">%</sup></h3> 
                            <p class="text-white">Cart</p>
                        </div> 
                        <div class="icon"><i class="ion ion-stats-bars"></i></div> 
                        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div> 
                <div class="col-lg-3 col-6">
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h3 class="text-white">44</h3> 
                            <p class="text-white">Wishlist</p>
                        </div> 
                        <div class="icon"><i class="ion ion-person-add"></i></div> 
                        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3 class="text-white" >65</h3> 
                            <p class="text-white">Download</p>
                        </div> 
                        <div class="icon"><i class="ion ion-pie-graph"></i></div> 
                        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>   
            </div> -->
            <!-- <h4 v-show="authCustomer"> {{ authCustomer.name }} </h4> -->

            {{ authCustomer }}

            <br>
        </div>

    </div>

</div>


</template>
<script>
    import NavForAdminCustomer from '../Include/NavForAdminCustomer'

    import { mapState } from 'vuex' //for user MapState
    
    export default {
        name: "customer-dashboard-website-auth",
        data (){      
            return { 
            }
        },

        computed: {

          ...mapState( 'AuthenticationForWebsite', ['authCustomer'] ),

        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 
        },           

        created(){
            this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data            
        },
           
        mounted() {
        },
    }
</script>
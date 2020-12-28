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
            </div>

            {{ authCustomer.name }}

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

          ...mapState( 'commonStoreForWebsite', ['authCustomer'] ),

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
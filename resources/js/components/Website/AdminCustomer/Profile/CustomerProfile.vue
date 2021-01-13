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
                                <p> {{ authCustomer.date_of_birth | formatDate }} </p>
                            </div>

                            <div class="col-lg-1 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Gender</h3>
                                <p>{{authCustomer.gender}}</p>
                            </div>

                            

                            <div class="col-lg-12 col-12 mb-1 text-right">
                                <router-link to="/auth/my-profile-update" class="btn btn-primary ml-md-2 px-2 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block"><i class="fas fa-plus"></i> Edit Profile</router-link>
                            </div>


                            <!-- <div class="col-lg-12 border-bottom border-color-1 mb-3 mt-3"></div> -->


                            <div class="col-lg-12">
                                <div class="mb-4 w-100 wishlist-table cart-wishlist-custome">
                                    <div class="table-responsive-">
                                        <table class="table" cellspacing="0">
                                            <thead>
                                                <tr> 
                                                    <th class="product-name">Address</th>
                                                    <!-- <th class="product-name">For</th> -->
                                                    <th class="product-subtotal min-width-200-md-lg">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(aca, index) in authCustomerAddress" :key="index"> 
                                                    <td data-title="Address">
                                                        <a href="#" class="text-gray-90">
                                                            <span v-if="aca.customer_name">{{aca.customer_name }}, </span>
                                                            <span v-if="aca.company">{{aca.company }}, </span>
                                                            <span v-if="aca.address_1" >{{aca.address_1 }}, </span>

                                                        </a>
                                                    </td>

                                                    <!-- <td class="text-center-" data-title="for">
                                                        <span class="">Shiping</span>
                                                    </td> -->

                                                    <td class="text-right">
                                                        <router-link :to="{ name: 'CustomerAddressForm', params: { data:aca } }" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto"><i class="far fa-edit"></i> Edit</router-link>

                                                        <a href="#" @click="DeleteCustomerAddress(aca.id)" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-2 px-md-2 px-lg-2 w-100 w-md-auto pointer"><i class="fas fa-trash-alt"></i> Delete</a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>                           


                            <div class="col-lg-12 col-12 mb-1 text-right">
                                <router-link to="/auth/my-address-update" class="btn btn-primary ml-md-2 px-2 px-md-4 px-lg-3 w-100- w-md-auto d-none- d-md-inline-block"><i class="fas fa-plus"></i> Add Address</router-link>
                            </div>


                            <!-- <div class="col-lg-6 col-6 mb-1 col-6-">
                                <h3 class=" mb-0 pb-1 pl-2- font-size-14">Address</h3>
                                <p> 105/1, Golartake, Mirpur 1, Dhaka</p>
                            </div> -->



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

          ...mapState( 'commonStoreForWebsite', ['authCustomer','authCustomerAddress'] ),

        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 


            DeleteCustomerAddress(id){
                Swal.fire({
                    title: 'Are you sure to Delete?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',  
                    confirmButtonText: 'Yes, delete it!'
                  }).then( (result) => {

                    if ( result.value ) {  
                      axios.delete('/auth/my-address/'+id)
                        .then( ({data}) => {

                          if(data.success){
                            this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerAddress', this.authCustomer.id);
                            toastr.success(data.success); 
                          }   
                          if(data.errors){
                            toastr.warning(data.errors);                 
                          }

                        })                          
                        .catch(() => {
                          toastr.warning('Something is wrong!');
                        })
                    }else{
                      toastr.info( 'Your data is safe!');
                    }

                  })
              }, //end delete
        },           

        created(){
            this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerData'); //get auth customer data 

            setTimeout(() => {
                this.$store.dispatch('commonStoreForWebsite/fetchAuthCustomerAddress', this.authCustomer.id); //get auth customer address
            },2400); 
              
        },
           
        mounted() {
            //console.log(this.authCustomerAddress);
        },
    }
</script>
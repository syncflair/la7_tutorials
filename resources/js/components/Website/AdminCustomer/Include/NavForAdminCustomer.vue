<template>
	<div class="mb-8 border- border-width-2- border-color-3- borders-radius-6">
        <!-- List -->
        <div class="user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top- section-title">
            <!-- <div class="image">
                <img src="https://sorboraho.s3-ap-southeast-1.amazonaws.com/users/mahmudur-rahman-wYAVdNBwSUHZaf4VQcBeE2R806wJqwZT7zHgEl0h.png" alt="User Image" class="img-circle elevation-2">
            </div> -->
            <div class="info border- bg-gray-1- rounded-lg-"> 
                    <span v-show="authCustomer" class="font-size-10 text-black"> {{authCustomer.name}} </span>
                    <br> 
                    <span class="btn- px-1 bg-success text-white font-size-9- rounded-lg">
                        <i class="fas fa-check font-size-8"></i>
                        <!-- <i class="fas fa-user-check"></i> -->
                         <small>Verified</small>
                    </span>
            </div>
        </div>

        <ul id="sidebarNav" class="list-unstyled dropdown-list dropdown-list-custome">
            <!-- Menu List -->
            <li class="border-bottom-">
                <router-link to="/auth/my-dashboard" class="dropdown-item dropdown-item-custome transition-3d-hover" 
                	:class="[currentPage.includes('my-dashboard')] ? ActiveLinkClass : '' " >
                    <!-- <i class="fas fa-tachometer-alt"></i>  -->Dashboard
                </router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-orders"
	            	:class="[currentPage.includes('my-orders')] ? ActiveLinkClass : '' " >
                    <!-- <i class="font-size-18 ec ec-shopping-bag"></i>  -->My Orders
                    <!-- <i class="fas fa-shopping-bag"></i> --> 
                    <!-- <i class="far fa-times-circle"></i> -->
	            </router-link>
            </li>
            <li><router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-cart"
                :class="[currentPage.includes('my-cart')] ? ActiveLinkClass : '' "  >
                <!-- <i class="far fa-heart"></i> -->
                <!-- <i class="font-size-18 ec ec-favorites"></i>  -->My Cart
                </router-link>
            </li>
            <li><router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-wishlist"
            	:class="[currentPage.includes('my-wishlist')] ? ActiveLinkClass : '' "  >
                <!-- <i class="far fa-heart"></i> -->
                <!-- <i class="font-size-18 ec ec-favorites"></i>  -->Wishlist
            	</router-link>
            </li>    
            
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-profile"
	            	:class="[currentPage.includes('my-profile')] ? ActiveLinkClass : '' "  >
                    <!-- <i class="far fa-user"></i> -->
                    <!-- <i class="font-size-18 ec ec-user"></i> --> My Profile
	            </router-link>
            </li>
            <!-- <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-address" 
            	:class="[currentPage.includes('my-address')] ? ActiveLinkClass : '' " >Address Book </router-link>
            </li> -->
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-vouchers" 
            	:class="[currentPage.includes('my-vouchers')] ? ActiveLinkClass : '' " > 
                <!-- <i class="fas fa-money-bill"></i> --><!--  <i class="font-size-18 ec ec-payment"></i>  -->Vouchers
            	</router-link>
            </li>
            <li>
                <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-reviews" 
                :class="[currentPage.includes('my-reviews')] ? ActiveLinkClass : '' " > 
                <!-- <i class="far fa-star"></i>  -->My Reviews
                </router-link>
            </li>
            <li class="border-top-">
            	<a class="dropdown-item dropdown-item-custome transition-3d-hover" @click.prevent="Logout()" href="javascript:;"><i class="fas fa-sign-out-alt"></i> Logout</a>
                <!-- <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover"><i class="fas fa-sign-out-alt"></i>  Logout</button> -->
            </li>
            <!-- End Menu List -->

            <!-- ($route.path === 'my-dashboard') ? 'active' -->


        </ul>
        <!-- End List -->

    </div>
</template>

<script>
    import { mapState } from 'vuex' //for user MapState
    
    export default {
        name: "nav-for-admin-customer-website-auth",
        data (){      
            return { 
                ActiveLinkClass: 'active',
            }
        },

        computed: {

          ...mapState( 'AuthenticationForCustomer', ['authCustomer'] ),

          //for active link management
            currentPage(){
                return this.$route.path;
            },

        },

        components:{
        }, 

        methods: { 
            Logout(){  
              this.$Progress.start(); //using progress-bar package

              axios.post('/customer/logout')
              .then(({ response }) => { 
                //console.log(response); 
                //if(response.success){             
                  // toastr.success(response.success);         
                  this.$Progress.finish();  

                  this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false );  
                  
                  window.location = '/home';

                  //this.$router.push({ path : '/home' });   //route after successfule 
                  //this.$router.replace({ path : '/home' });   //route after successfule 
                  //this.$router.go('/home');
                  
                  //toastr.success('Logout successfule'); 
                //}

              })
              .catch( () => {
                this.$Progress.fail();
              })   
            },  //End Logout 
        },           

        created(){
        },
           
        mounted() {
            // console.log(this.baseURL);
        },
    }
</script>


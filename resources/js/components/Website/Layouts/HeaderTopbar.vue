<template>
	<div class="u-header-topbar py-2- py-1 d-none d-xl-block">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="topbar-left">
                    <a href="#" class="text-gray-110 font-size-13 hover-on-dark">Welcome to SORBORAHO</a>
                </div>
                <div class="topbar-right ml-auto">
                    <ul class="list-inline mb-0">
                        <!-- <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <a href="#" @click.prevent="$router.push({ name: 'home' })" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i>Home</a>
                        </li> -->
                        <!-- <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/home" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> Home</router-link>
                        </li> -->
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/404" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> 404</router-link>
                        </li>
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/categories" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> Category</router-link>
                        </li>
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/about" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> About</router-link>
                        </li>

                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/contact" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer mr-1"></i> Contact</router-link>
                        </li>
                        
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="/track-order" class="u-header-topbar__nav-link"><i class="ec ec-transport mr-1"></i> Track Order</router-link>
                        </li>
                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <router-link to="#" class="u-header-topbar__nav-link"><i class="ec ec-transport mr-1"></i>Get Apps</router-link>
                        </li>

                        <li class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                            <div class="d-flex align-items-center">
                                <div class="position-relative">
                                    <a id="languageDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                        aria-controls="languageDropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="hover"
                                        data-unfold-target="#languageDropdown"
                                        data-unfold-type="css-animation"
                                        data-unfold-duration="300"
                                        data-unfold-delay="300"
                                        data-unfold-hide-on-scroll="true"
                                        data-unfold-animation-in="slideInUp"
                                        data-unfold-animation-out="fadeOut">
                                        <span class="d-inline-block d-sm-none">US</span>
                                        <span class="d-none d-sm-inline-flex align-items-center"><i class="ec ec-dollar mr-1"></i> Dollar (US)</span>
                                    </a>

                                    <div id="languageDropdown" class="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker">
                                        <a class="dropdown-item active" href="#">English</a>
                                        <a class="dropdown-item" href="#">Deutsch</a>
                                        <a class="dropdown-item" href="#">Español‎</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li v-if="!authCustomer"  class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                            <!-- Account Sidebar Toggle Button -->
                            <a id="sidebarNavToggler" href="javascript:;" role="button" class="u-header-topbar__nav-link"
                                aria-controls="sidebarContent"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-unfold-event="click"
                                data-unfold-hide-on-scroll="false"
                                data-unfold-target="#sidebarContent"
                                data-unfold-type="css-animation"
                                data-unfold-animation-in="fadeInRight"
                                data-unfold-animation-out="fadeOutRight"
                                data-unfold-duration="500"
                                @click.once="FocusUsername()">
                                <i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in
                            </a>
                            <!-- End Account Sidebar Toggle Button -->
                        </li>

                        <li v-if="authCustomer" class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                            <div class="d-flex align-items-center">
                                <!-- Language -->
                                <div class="position-relative">
                                    <a id="MyAccountDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                        aria-controls="MyAccountDropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-target="#MyAccountDropdown"
                                        data-unfold-type="css-animation"
                                        data-unfold-duration="300"
                                        data-unfold-delay="300"
                                        data-unfold-hide-on-scroll="true"
                                        data-unfold-animation-in="slideInUp"
                                        data-unfold-animation-out="fadeOut">
                                        <!-- <span class="d-inline-block d-sm-none">US</span> -->
                                        <span class="d-none d-sm-inline-flex align-items-center">
                                            <!-- <i class="ec ec-dollar mr-1"></i> -->
                                            <i class="ec ec-user mr-1"></i>
                                             My Account
                                        </span>
                                    </a>

                                    <div id="MyAccountDropdown" class="dropdown-menu dropdown-unfold" aria-labelledby="MyAccountDropdownInvoker">
                                        <router-link class="dropdown-item active- dropdown-item-custome transition-3d-hover" to="/auth/my-dashboard" 
                                        :class="[currentPage.includes('my-dashboard')] ? ActiveLinkClass : '' "><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-orders" :class="[currentPage.includes('my-orders')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-shopping-bag"></i> My Orders</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-cart" :class="[currentPage.includes('my-cart')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-favorites"></i> My Cart</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-wishlist" :class="[currentPage.includes('my-wishlist')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-favorites"></i> My Wishlist</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-profile" :class="[currentPage.includes('my-profile')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-user"></i> My Profile</router-link>
                                        <!-- <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-address" :class="[currentPage.includes('my-address')] ? ActiveLinkClass : '' " ><i class="far fa-address-book pl-1"></i> Address</router-link> -->
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-vouchers" :class="[currentPage.includes('my-vouchers')] ? ActiveLinkClass : '' "><!-- <i class="fas fa-money-bill"></i> --> <i class="font-size-18 ec ec-payment"></i> My Vouchers</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/my-reviews" :class="[currentPage.includes('my-reviews')] ? ActiveLinkClass : '' "><i class="far fa-star"></i> My Reviews</router-link>
                                        <a @click.prevent="CustomerLogout()" class="dropdown-item dropdown-item-custome transition-3d-hover" href="javascript:;"> <i class="fas fa-sign-out-alt pl-1"></i> Logout</a>
                                    </div>
                                </div>
                                <!-- End Language -->
                            </div>
                        </li>
<!-- 
                        <li v-if="authSupplier" class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                            <div class="d-flex align-items-center">
                                
                                <div class="position-relative">
                                    <a id="MyAccountDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button"
                                        aria-controls="MyAccountDropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-target="#MyAccountDropdown"
                                        data-unfold-type="css-animation"
                                        data-unfold-duration="300"
                                        data-unfold-delay="300"
                                        data-unfold-hide-on-scroll="true"
                                        data-unfold-animation-in="slideInUp"
                                        data-unfold-animation-out="fadeOut">
                                        <span class="d-none d-sm-inline-flex align-items-center">
                                            <i class="ec ec-user mr-1"></i>
                                             My Account
                                        </span>
                                    </a>

                                    <div id="MyAccountDropdown" class="dropdown-menu dropdown-unfold" aria-labelledby="MyAccountDropdownInvoker">
                                        <router-link class="dropdown-item active- dropdown-item-custome transition-3d-hover" to="/sspa/my-dashboard" 
                                        :class="[currentPage.includes('my-dashboard')] ? ActiveLinkClass : '' "><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-orders" :class="[currentPage.includes('my-orders')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-shopping-bag"></i> My Orders</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-products" :class="[currentPage.includes('my-products')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-favorites"></i> Product List</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-return" :class="[currentPage.includes('my-return')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-favorites"></i> Return</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-replace" :class="[currentPage.includes('my-replace')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-user"></i> Replace</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-profile" :class="[currentPage.includes('my-profile')] ? ActiveLinkClass : '' "><i class="font-size-18 ec ec-user"></i> My Profile</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-payment-receivable" :class="[currentPage.includes('my-payment-receivable')] ? ActiveLinkClass : '' "> <i class="font-size-18 ec ec-payment"></i> Amount receivable</router-link>
                                        <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-payment-history" :class="[currentPage.includes('my-payment-history')] ? ActiveLinkClass : '' "><i class="far fa-star"></i> Payment History</router-link>
                                        <a @click.prevent="SupplierLogout()" class="dropdown-item dropdown-item-custome transition-3d-hover" href="javascript:;"> <i class="fas fa-sign-out-alt pl-1"></i> Logout</a>
                                    </div>
                                </div>
                                
                            </div>
                        </li> -->


                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex' //for user MapState

	export default {
	    name: "HeaderTopbar-website",

        data (){      
            return {   
                ActiveLinkClass: 'active',     
            }
        },


        computed: {

          ...mapState( 'AuthenticationForCustomer', ['authCustomer'] ),
          // ...mapState( 'AuthenticationForSupplier', ['authSupplier'] ),

          //for active link management
            currentPage(){
                return this.$route.path;
            },

            // AccountNavLinkShow(){
            //   // // return ? false : true;
            //   //return this.authCustomer;
            //   if(this.authCustomer){
            //   // if(this.authCustomer || this.authSupplier){
            //     return false;
            //   }else{
            //     return true; //f
            //   }
            //   //return true;
            //   // if(Object.values( this.authCustomer ).length == 0 ){ return true;}
            //   //if( Object.values( this.authSupplier ).length === 0 ){ return true;}
            //   // else if(Object.keys( this.authSupplier ).length == 0 ){ return true;}
            // },

        },
	    
	    components:{ 
	    	//UnitsMasterList, UnitsMasterForm,
	    },		

		methods:{
			GotoHome(){
				//alert('0k');
	    		//this.$router.push({ name: 'home' });
	    		// const HomePath = "/home";
	    		// if (this.$route.path !== HomePath) {
	    		// 	this.$router.push(HomePath)
	    		// }
	    	},

            FocusUsername(){
                FireEvent.$emit('FocusUsername'); //call to AccountSidebarNavigationToggler.vue component for focus username                
            },

            CustomerLogout(){  
              this.$Progress.start(); //using progress-bar package

              axios.post('/customer/logout')
              .then(({ response }) => { 
                //console.log(response); 
                //if(response.success){             
                  // toastr.success(response.success);         
                  this.$Progress.finish(); 

                  //for security reson, Best Policy for API Based Authentication
                  //localStorage.setItem('isAuthenticated', false);  
                  //localStorage.removeItem('isAuthenticated');  

                  this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', false ); //

                  window.location = '/home';

                  //this.$router.push({ path : '/auth/login' });   //route after successfule 
                  //this.$router.replace({ path : '/auth/login' });   //route after successfule 
                  //this.$router.go('/auth/login');
                  //toastr.success('Logout successfule'); 
                //}

                //for api
                // localStorage.removeItem('tokenName'); //remove token
                // this.$router.push({ path : '/' }); //redirect
                //this.$router.push({ path : '/home' }).catch(err => {});  

              })
              .catch( () => {
                this.$Progress.fail();
              })   
            },  //End Customer Logout  

            // SupplierLogout(){  
            //   this.$Progress.start(); //using progress-bar package

            //   axios.post('/supplier/logout')
            //   .then(({ response }) => {          
            //       this.$Progress.finish(); 

            //       //for security reson, Best Policy for API Based Authentication
            //       //localStorage.setItem('isAuthenticated', false);  
            //       //localStorage.removeItem('isAuthenticated');  

            //       this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false ); //

            //       window.location = '/home';

            //       //this.$router.push({ path : '/auth/login' });   //route after successfule 
            //       //this.$router.replace({ path : '/auth/login' });   //route after successfule 
            //       //this.$router.go('/auth/login');
            //       toastr.success('Logout successfule'); 

            //   })
            //   .catch( () => {
            //     this.$Progress.fail();
            //   })   
            // },  //End Supplier Logout  

		}, //end Methods

		created(){
      //console.log(this.AccountNavLinkShow);
		},
		

  	} //end export default
	
</script>
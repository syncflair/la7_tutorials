<template>
	<div class="mb-8 border- border-width-2- border-color-3- borders-radius-6">
        <!-- List -->
        <div class="user-panel pl-2- pr-2- mt-2 pb-2 mb-1 d-flex border-bottom-primary- border-bottom border-top- section-title">
            <!-- <div class="image">
                <img src="https://sorboraho.s3-ap-southeast-1.amazonaws.com/users/mahmudur-rahman-wYAVdNBwSUHZaf4VQcBeE2R806wJqwZT7zHgEl0h.png" alt="User Image" class="img-circle elevation-2">
            </div> -->
            <div class="info border- bg-gray-1- rounded-lg-"> 
                    <span class="font-size-10 text-black"> Mahmudur Rahman sumon Sumon</span>
                    <br> 
                    <span class="btn- px-1 bg-success text-white font-size-9- rounded-lg">
                        <i class="fas fa-check font-size-8"></i>
                        <!-- <i class="fas fa-user-check"></i> -->
                         <small>Verified</small>
                    </span>
            </div>
        </div>

        <ul id="sidebarNav" class="list-unstyled dropdown-list">
            <!-- Menu List -->
            <li class="border-bottom-">
                <router-link to="/auth/customer-dashboard" class="dropdown-item dropdown-item-custome transition-3d-hover" 
                	:class="[currentPage.includes('customer-dashboard')] ? ActiveLinkClass : '' " > Dashboard
                </router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-orders"
	            	:class="[currentPage.includes('customer-orders')] ? ActiveLinkClass : '' " >My Orders
	            </router-link>
            </li>
            <li><router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-wishlist"
            	:class="[currentPage.includes('customer-wishlist')] ? ActiveLinkClass : '' "  >Wishlist
            	</router-link>
            </li>
            
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-reviews" 
            	:class="[currentPage.includes('customer-reviews')] ? ActiveLinkClass : '' " >My Reviews
            	</router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-profile"
	            	:class="[currentPage.includes('customer-profile')] ? ActiveLinkClass : '' "  > My Profile
	            </router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-address" 
            	:class="[currentPage.includes('customer-address')] ? ActiveLinkClass : '' " > Address Book
            	</router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/auth/customer-vouchers" 
            	:class="[currentPage.includes('customer-vouchers')] ? ActiveLinkClass : '' " > Vouchers
            	</router-link>
            </li>
            <li class="border-top-">
            	<a class="dropdown-item dropdown-item-custome transition-3d-hover" @click.prevent="Logout()" href="javascript:;"><i class="fas fa-sign-out-alt"></i> Logout</a>
                <!-- <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover"><i class="fas fa-sign-out-alt"></i>  Logout</button> -->
            </li>
            <!-- End Menu List -->

            <!-- ($route.path === 'customer-dashboard') ? 'active' -->

        </ul>
        <!-- End List -->
    </div>
</template>
<script>
	export default {
        name: "nav-for-admin-customer-website-auth",
        data (){      
            return {         
                ActiveLinkClass: 'active',           
            }
        },
        cumputed:{
            //for active link management
        	currentPage(){
        		return this.$route.path;
        	}
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

                  this.$router.push({ path : '/auth/login' });   //route after successfule 
                  //this.$router.replace({ path : '/auth/login' });   //route after successfule 
                  //this.$router.go('/auth/login');
                  toastr.success('Logout successfule'); 
                //}

              })
              .catch( () => {
                this.$Progress.fail();
              })   
            },  //End SendPublicQueryEmail  


        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
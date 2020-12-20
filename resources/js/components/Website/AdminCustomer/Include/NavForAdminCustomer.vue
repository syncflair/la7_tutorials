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
                <router-link to="/customer-dashboard" class="dropdown-item dropdown-item-custome" 
                	:class="[currentPage.includes('customer-dashboard')] ? ActiveLinkClass : '' " > Dashboard
                </router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome" to="/customer-orders"
	            	:class="[currentPage.includes('customer-orders')] ? ActiveLinkClass : '' " >My Orders
	            </router-link>
            </li>
            <li><router-link class="dropdown-item dropdown-item-custome " to="/customer-wishlist"
            	:class="[currentPage.includes('customer-wishlist')] ? ActiveLinkClass : '' "  >Wishlist
            	</router-link>
            </li>
            
            <li>
            	<router-link class="dropdown-item dropdown-item-custome " to="/customer-reviews" 
            	:class="[currentPage.includes('customer-reviews')] ? ActiveLinkClass : '' " >My Reviews
            	</router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome " to="/customer-profile"
	            	:class="[currentPage.includes('customer-profile')] ? ActiveLinkClass : '' "  > My Profile
	            </router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome " to="/customer-address" 
            	:class="[currentPage.includes('customer-address')] ? ActiveLinkClass : '' " > Address Book
            	</router-link>
            </li>
            <li>
            	<router-link class="dropdown-item dropdown-item-custome " to="/customer-vouchers" 
            	:class="[currentPage.includes('customer-vouchers')] ? ActiveLinkClass : '' " > Vouchers
            	</router-link>
            </li>
            <li class="border-top-">
            	<router-link class="dropdown-item dropdown-item-custome " to=""><i class="fas fa-sign-out-alt"></i> Logout</router-link>
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
        	currentPage(){
        		return this.$route.path;
        	}
        },

        components:{
             
        }, 

        methods: { 
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
<template>
    
<nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div class="container">

      <!-- Role base route for admin child dashboard -->
      
      <router-link to="/dashboard-supplier" class="navbar-brand">
      
        <img src="" alt="Sorboraho Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8; max-width: 200px !important;">
        <!-- <span class="brand-text font-weight-light">Dashboard</span> --> <!-- {{ Auth::user()->role_id }} -->
      </router-link>

      <!-- <a class="navbar-brand" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a> -->
    

      <!-- 
      <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="index3.html" class="nav-link">Home</a>
          </li>
          
        </ul>
      
        <form class="form-inline ml-0 ml-md-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

      </div> -->


      <!-- Right navbar links -->
      <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <li>
          <a class="navbar-brand" data-widget="pushmenu" href="#" role="button" title="Left side menu expand & Close">
            <i class="fas fa-bars"></i>
          </a>
        </li>
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="fas fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <!-- <img src="" alt="User Avatar" class="img-size-50 mr-3 img-circle"> -->
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <!-- <img src="" alt="User Avatar" class="img-size-50 img-circle mr-3"> -->
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <!-- <img src="" alt="User Avatar" class="img-size-50 img-circle mr-3"> -->
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <router-link to="/spaa/admin-user-notification" class="dropdown-item dropdown-footer">See All Messages</router-link>
          </div>
        </li>

        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown d-none- d-xl-block-">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item dropdown-footer">See All Notifications</router-link>
          </div>
        </li>
        
        <!-- <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
              class="fas fa-th-large"></i></a>
        </li> -->

        <li class="nav-item dropdown">

          
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
              <span v-if="DisplayResponsiveElement" :title="authSupplier.name">My Account</span>
              <span v-if="!DisplayResponsiveElement" :title="authSupplier.name"><i class="far fa-user-circle"></i></span>
            </a>

            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow dropdown-menu-right">

              <li><a href="javascript:void(0);" class="dropdown-item"> {{authSupplier.name}} </a></li>

              <li class="dropdown-divider"></li>

              <li class="border-bottom-">
                <router-link to="/sspa/my-dashboard" class="dropdown-item dropdown-item-custome transition-3d-hover" 
                  :class="[currentPage.includes('my-dashboard')] ? ActiveLinkClass : '' " >
                    <!-- <i class="fas fa-tachometer-alt"></i>  --> Dashboard
                </router-link>
              </li>

               <li>
                <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-profile" 
                :class="[currentPage.includes('my-profile')] ? ActiveLinkClass : '' " >My Profile </router-link>
              </li>

              <li>
                <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-orders"
                  :class="[currentPage.includes('my-orders')] ? ActiveLinkClass : '' " >My Orders
                </router-link>
              </li>
              
              <li><router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-return"
                :class="[currentPage.includes('my-return')] ? ActiveLinkClass : '' "  >Return</router-link>
              </li>    
              
              <li>
                <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-replace"
                  :class="[currentPage.includes('my-eplace')] ? ActiveLinkClass : '' "  > Replace </router-link>
              </li>
              <li><router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-products"
                  :class="[currentPage.includes('my-products')] ? ActiveLinkClass : '' "  >Product List </router-link>
              </li>
              
              <li>
                <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-payment-receivable" 
                :class="[currentPage.includes('my-payment-receivable')] ? ActiveLinkClass : '' " > 
                  <!-- <i class="fas fa-money-bill"></i> --><!--  <i class="font-size-18 ec ec-payment"></i>  -->Amount Receivable
                </router-link>
              </li>
              <li>
                  <router-link class="dropdown-item dropdown-item-custome transition-3d-hover" to="/sspa/my-payment-history" 
                  :class="[currentPage.includes('my-payment-history')] ? ActiveLinkClass : '' " >Payment History
                  </router-link>
              </li>
              
              <li class="dropdown-divider"></li>
               
              <li>
                <a class="dropdown-item dropdown-item-custome" @click.prevent="Logout()" href="javascript:;"><i class="fas fa-sign-out-alt"></i> Logout</a>
              </li>

            
              <!-- End Level two -->
            </ul>
          </li>
      </ul>
    </div>
</nav>
    
</template>
<script>
    import { mapState } from 'vuex' //for user MapState    
    export default {
        name: "supplier-admin-navbar-top-component",

        data (){      
            return {  
              ActiveLinkClass: 'active',               
            }
        },

        computed: {

            ...mapState( 'AuthenticationForSupplier', ['authSupplier'] ),

            //for active link management
            currentPage(){
                return this.$route.path;
            },          
        },
        

        components:{ }, 

        methods: {  

            Logout(){  
              this.$Progress.start(); //using progress-bar package
              axios.post('/supplier/logout')
              .then(({ response }) => {         
                  this.$Progress.finish();  
                  //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false );                    
                  window.location = '/supplier/login';
                  //this.$router.push({ path : '/home' });   //route after successfule 
                  //this.$router.replace({ path : '/home' });   //route after successfule 
                  //this.$router.go('/home');                  
                  //toastr.success('Logout successfule');              
              })
              .catch( () => {
                this.$Progress.fail();
              })   
            },  //End Logout        
        },           

        created(){
        },
           
        mounted() {
          //console.log('Width: '+this.window.width+ ' Height: ' + this.window.height );
        },
    }
</script>
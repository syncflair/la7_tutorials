<template>
    
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
      <!-- <img src=""
           alt="AdminLTE Logo"
           class="brand-image img-circle elevation-3"
           style="opacity: .8"> -->
      <span class="brand-text font-weight-light">SORBORAHO Logo</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <!-- <img src="" alt="User Image"> -->
        </div>
        <div class="info">
          <a href="#" class="d-block">{{authSupplier.name}}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">

        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

  
            <li class="nav-item">
              <router-link to="/dashboard-order" class="nav-link dropdown-item-custome" :class="[currentPage.includes('dashboard-order')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-tachometer-alt text-warning"></i> <p>Dashboard</p></router-link>              
            </li> 
            <li class="nav-item">
              <router-link to="/spaa/order-all" class="nav-link dropdown-item-custome" :class="[currentPage.includes('order-all')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-list-ul text-warning"></i> <p>All Order</p></router-link>
            </li> 
            <li class="nav-item">
              <router-link to="/spaa/order-complete" class="nav-link dropdown-item-custome" :class="[currentPage.includes('order-complete')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-list-ul text-warning"></i> <p>Order Complete</p></router-link>
            </li> 
            <li class="nav-item">
              <router-link to="/spaa/order-failed" class="nav-link dropdown-item-custome" :class="[currentPage.includes('order-failed')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-list-ul text-warning"></i> <p>Order failed</p></router-link>
            </li>


            <li class="nav-item">
              <router-link to="/dashboard-delivery" class="nav-link dropdown-item-custome" :class="[currentPage.includes('dashboard-delivery')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-tachometer-alt text-warning"></i> <p>Dashboard --</p></router-link>
            </li> 
            <li class="nav-item">
              <router-link to="/spaa/delivery-pending" class="nav-link dropdown-item-custome" :class="[currentPage.includes('delivery-pending')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-list-ul text-warning"></i> <p>Delivery Pending</p></router-link>
            </li>

            <li class="nav-item">
              <router-link to="/dashboard-delivery" class="nav-link dropdown-item-custome" :class="[currentPage.includes('dashboard-delivery')] ? ActiveLinkClass : '' "> <i class="nav-icon fas fa-tachometer-alt text-warning"></i> <p>Dashboard</p></router-link>
            </li>          
       

          <li class="nav-item">
            <a class="nav-link dropdown-item-custome pl-4-" @click.prevent="Logout()" href="javascript:;"><i class="nav-icon-  fas fa-sign-out-alt text-warning"></i> Logout</a>
          </li>

          <!-- <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li> -->

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
    
</template>
<script>
    import { mapState } from 'vuex' //for user MapState
    export default {
        name: "admin-supplier-left-asside-component",
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

        watch: { 
        }, 

        components:{ 
        }, 

        methods: { 
          Logout(){  
              this.$Progress.start(); //using progress-bar package

              axios.post('/logout')
              .then(({ response }) => {         
                  this.$Progress.finish();  

                  //this.$store.commit('AuthenticationForSupplier/IS_AUTHENTICATED_CHECK', false );  
                  
                  window.location = '/';

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
        },
    }
</script>
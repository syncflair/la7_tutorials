<template>
<span>
    
    <!-- End Login Section -->
    <div class="container mb-8 mt-0 mb-lg-0-">
        <div class="row mb-8 bg-gray-1- rounded-lg pt-5 pb-5">
            <div class="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mb-5- mt--" >

                <!-- Title -->
                <div class="border-bottom border-color-1 mb-3">
                    <h3 class="d-inline-block section-title mb-0 pb-2 font-size-18">Welcome to SORBORAHO! Please login.</h3>
                </div>
                <!-- <p class="text-gray-90 mb-4">Welcome to SORBORAHO! Sign in to your account.</p> -->
                <!-- End Title -->
                <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerLoginAPI()">
                    
                    <div v-if="display_error" class="text-danger text-center mb-3">
                        <span class="small text-muted-">{{error_message }}</span>
                    </div> 

                    <!-- Form Group -->
                    <div class="form-group">
                        <div class="js-form-message- js-focus-state-">
                            <label class="sr-only" for="username">Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <span class="fas fa-user"></span>
                                    </span>
                                </div>
                                <input v-model="form.username" type="email" class="form-control" name="username" placeholder="Email or Phone" :class="{ 'is-invalid': form.errors.has('username') }">
                                <has-error :form="form" field="username"></has-error>
                            </div>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="form-group">
                        <div class="js-form-message- js-focus-state-">
                          <label class="sr-only" for="password">Password</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </span>
                            </div>
                            <input v-model="form.password" type="password" class="form-control" name="password" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }">
                               <has-error :form="form" field="password"></has-error>
                          </div>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Checkbox -->
                    <!-- <div class="js-form-message mb-3">
                        <div class="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" class="custom-control-input" id="rememberCheckbox" name="rememberCheckbox" required
                            data-error-class="u-has-error"
                            data-success-class="u-has-success">
                            <label class="custom-control-label form-label" for="rememberCheckbox">
                                <small>Remember me</small>
                            </label>
                        </div>
                    </div> -->
                    <!-- End Checkbox -->

                    <div class="d-flex justify-content-end mb-4">
                        <router-link class="js-animation-link small link-muted" to="/auth/password-recover"
                           data-target="#forgotPassword"
                           data-link-group="idForm"
                           data-animation-in="slideInUp">Forgot Password?</router-link>
                    </div>

                    <!-- Button -->
                    <div class="mb-2">
                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                    </div>
                    <!-- End Button -->

                    <div class="text-center mb-4">
                        <span class="small text-muted">Do not have an account?</span>
                        <router-link class="js-animation-link small text-dark" to="/auth/register"
                           data-target="#signup"
                           data-link-group="idForm"
                           data-animation-in="slideInUp">Signup
                        </router-link>

                        <a class="" href="#" @click.prevent="getUser()">get user </a>

                    </div>



                    <div class="text-center">
                        <span class="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                    </div>

                    <!-- Login Buttons -->
                    <div class="d-flex">
                        <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                          <span class="fab fa-facebook-square mr-1"></span>
                          Facebook
                        </a>
                        <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                          <span class="fab fa-google mr-1"></span>
                          Google
                        </a>
                    </div>
                    <!-- End Login Buttons -->

                </form>

            </div>  
        </div>   
    </div>
    <!-- End Login Section -->


</span>
</template>
<script>

    import { mapState } from 'vuex' //for user MapState
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "customer-login-Public-website",
        data (){      
            return {
                //for form top error display
                display_error: false,
                error_message: '',

                form: new Form({
                  username: '',
                  password: '', 
                  remember: true, /*By default remember me true*/            
                })                             
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
            ...mapState( 
                    'AuthenticationForCustomer', ['spac_access_token']
              ),
        }, 

        methods: {  
            // Submit the form via a POST request
            CustomerLogin() {  
              this.$Progress.start(); //using progress-bar package

              this.form.post('/customer/login')
              .then(({ data }) => { 
                    // console.log(data.success); 

                    if(data.success){ 
                      this.$Progress.finish();
                      this.display_error = false; 

                      // console.log(data);

                      //for security reson, Best Policy for API Based Authentication
                      // localStorage.setItem('c_access_token', true); 

                      this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true ); 
                      this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 

                      // window.location = '/auth/my-dashboard';   
                      //window.location = '/home';                       
                      this.$router.push({ path : '/home' }).catch(err => {});   //route after successfule submit                   
                      //this.$router.replace({ path : '/home' }).catch(err => {});   //route after successfule submit
                      //this.$router.go('/auth/my-dashboard');

                      this.form.reset();  //reset from after submit

                      //toastr.success('Login successfule'); 
                    }

                    if(data.error){
                        this.$Progress.finish(); 
                        this.display_error = true;
                        this.error_message = data.error;
                        toastr.warning(data.error);
                    }

                    if(data.errors){
                        this.$Progress.finish(); 
                        this.display_error = false;                        
                    }
              })
              .catch( () => {
                this.display_error = false;
                this.$Progress.fail();
                //toastr.warning('Something is wrong!');
              })   

            },  //End Customer Login    


            getUser(){
                this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
            },

            CustomerLoginAPI() {  
              this.$Progress.start(); //using progress-bar package

              this.form.post('/api/afc/login' )
              .then(({ data }) => { 
                    //console.log(data);

                    if(data){ 
                    // if(data.access_token){ 
                      this.$Progress.finish();
                      this.display_error = false; 
                      


                        //for security reson, Best Policy for API Based Authentication
                        localStorage.setItem('_spac_at', data.access_token);                      
                        localStorage.setItem('_spac_rt', data.refresh_token);                      
                        localStorage.setItem('_spac_et', data.expires_in);                      
                        localStorage.setItem('_spac_ug', 'spac');                      

                        this.$store.commit('AuthenticationForCustomer/ACCESS_TOKEN_SET', data.access_token );                        
                        this.$store.commit('AuthenticationForCustomer/REFRESH_TOKEN_SET', data.refresh_token );                        
                        this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true ); 

                        axios.defaults.headers.common["Authorization"] = 'Bearer ' + data.access_token; //update axios header
                        axios.defaults.headers.common["RefreshToken"] = data.refresh_token; //update axios header

                        this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
                        // console.log(this.spa_spac_at);

                        FireEvent.$emit('Call_HSCore_components_HSUnfold'); // initialization of unfold component

                        


                      // window.location = '/auth/my-dashboard';   
                      // window.location = '/home';                       
                      this.$router.push({ path : '/auth/my-dashboard' }).catch(err => {});   //route after successfule submit                   
                      //this.$router.replace({ path : '/home' }).catch(err => {});   //route after successfule submit
                      //this.$router.go('/auth/my-dashboard');

                      this.form.reset();  //reset from after submit

                      //toastr.success('Login successfule'); 
                    }

                    if(data.error){
                        this.$Progress.finish(); 
                        this.display_error = true;
                        this.error_message = data.error;
                        toastr.warning(data.error);
                        // console.log(data);
                        localStorage.removeItem('_spac_at');
                    }

                    if(data.errors){
                        this.$Progress.finish(); 
                        this.display_error = false;  
                        localStorage.removeItem('_spac_at');                      
                    }
              })
              .catch( () => {
                this.display_error = false;
                this.$Progress.fail();
                localStorage.removeItem('_spac_at');
                localStorage.removeItem('_spac_rt');
                localStorage.removeItem('_spac_ug');
                //toastr.warning('Something is wrong!');
              })   

            },  //End Customer Login    
        },           

        created(){
            // FireEvent.$on('AfterLogin', () => {
            //     // alert('ok');
            //     setTimeout(() => {                
            //         this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data 
            //     }, 5000);//call after 10000 miliscound
            // });
            
        },
           
        mounted() {
            
            this.$nextTick(function () {

                //initialization of HSMegaMenu component
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
                });               

                // initialization of svg injector module
                $.HSCore.components.HSSVGIngector.init('.js-svg-injector');


                // initialization of header
                $.HSCore.components.HSHeader.init($('#header'));

                // initialization of animation
                $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    afterOpen: function () {
                        $(this).find('input[type="search"]').focus();
                    }
                });

                // initialization of countdowns
                // var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
                //     yearsElSelector: '.js-cd-years',
                //     monthsElSelector: '.js-cd-months',
                //     daysElSelector: '.js-cd-days',
                //     hoursElSelector: '.js-cd-hours',
                //     minutesElSelector: '.js-cd-minutes',
                //     secondsElSelector: '.js-cd-seconds'
                // });

                // initialization of malihu scrollbar
                $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

                // initialization of forms
                $.HSCore.components.HSFocusState.init();

                // initialization of form validation
                // $.HSCore.components.HSValidation.init('.js-validate', {
                //     rules: {
                //         confirmPassword: {
                //             equalTo: '#signupPassword'
                //         }
                //     }
                // });

                // initialization of show animations
                $.HSCore.components.HSShowAnimation.init('.js-animation-link');

                // initialization of fancybox
                // initialization of popups
                $.HSCore.components.HSFancyBox.init('.js-fancybox');

                // initialization of slick carousel
                // $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

                // initialization of go to
                $.HSCore.components.HSGoTo.init('.js-go-to');

                // initialization of hamburgers
                $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
                    beforeClose: function () {
                        $('#hamburgerTrigger').removeClass('is-active');
                    },
                    afterClose: function() {
                        $('#headerSidebarList .collapse.show').collapse('hide');
                    }
                });

                $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
                    e.preventDefault();

                    var target = $(this).data('target');

                    if($(this).attr('aria-expanded') === "true") {
                        $(target).collapse('hide');
                    } else {
                        $(target).collapse('show');
                    }
                });

                // initialization of unfold component
                $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

                // initialization of select picker
                $.HSCore.components.HSSelectPicker.init('.js-select');


                // initialization of HSScrollNav component
                // $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
                //   duration: 700
                // });

                // initialization of quantity counter
                //$.HSCore.components.HSQantityCounter.init('.js-quantity');

                // initialization of forms
                //$.HSCore.components.HSRangeSlider.init('.js-range-slider');


            })//end this.$nextTick
        },
    }
</script>
<template>
    <aside id="sidebarContent" class="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
        <div class="u-sidebar__scroller">
            <div class="u-sidebar__container">
                <div class="js-scrollbar u-header-sidebar__footer-offset pb-3">
                    <!-- Toggle Button -->
                    <div class="d-flex align-items-center pt-4 px-7">
                        <button type="button" class="close ml-auto"
                            aria-controls="sidebarContent"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-unfold-event="click"
                            data-unfold-hide-on-scroll="false"
                            data-unfold-target="#sidebarContent"
                            data-unfold-type="css-animation"
                            data-unfold-animation-in="fadeInRight"
                            data-unfold-animation-out="fadeOutRight"
                            data-unfold-duration="500">
                            <i class="ec ec-close-remove"></i>
                        </button>
                    </div>
                    <!-- End Toggle Button -->

                    <!-- Content -->
                    <div class="js-scrollbar u-sidebar__body">
                        <div class="u-sidebar__content u-header-sidebar__content">
                            <!-- Login -->
                            <form class="js-validate-" @submit.prevent="CustomerLogin()">  

                                <div id="login" data-target-group="idForm">
                                    <!-- Title -->
                                    <header class="text-center mb-7">
                                    <h2 class="h4 mb-0">Welcome Back!</h2>
                                    <p>Login to manage your account.</p>
                                    </header>
                                    <!-- End Title -->


                                    <div v-if="display_error" class="text-danger text-center mb-3">
                                        <span class="small text-muted-">{{error_message }}</span>
                                    </div> 

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message- js-focus-state-">
                                            <label class="sr-only" for="signinEmail">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fas fa-user"></span>
                                                    </span>
                                                </div>
                                                <input v-model="form.username" type="email" class="form-control" name="username" placeholder="Email Or Phone" 
                                                :class="{ 'is-invalid': form.errors.has('username') }">
                                                <has-error :form="form" field="username"></has-error>
                                                <!-- <alert-errors :form="form" message="There were some problems with your input."></alert-errors> -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Form Group -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message js-focus-state">
                                          <label class="sr-only" for="signinPassword">Password</label>
                                          <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="signinPasswordLabel">
                                                    <span class="fas fa-lock"></span>
                                                </span>
                                            </div>
                                            <input v-model="form.password" type="password" class="form-control" name="password" placeholder="Password" 
                                            :class="{ 'is-invalid': form.errors.has('password') }">
                                            <has-error :form="form" field="password"></has-error>
                                          </div>
                                        </div>
                                    </div>
                                    <!-- End Form Group -->

                                    <div class="d-flex justify-content-end mb-4">
                                        <a class="js-animation-link small link-muted" href="javascript:;"
                                           data-target="#forgotPassword"
                                           data-link-group="idForm"
                                           data-animation-in="slideInUp">Forgot Password?</a>
                                    </div>

                                    <div class="mb-2">
                                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                                    </div>

                                    <div class="text-center mb-4">
                                        <span class="small text-muted">Do not have an account?</span>
                                        <a class="js-animation-link small text-dark" href="javascript:;"
                                           data-target="#signup"
                                           data-link-group="idForm"
                                           data-animation-in="slideInUp">Signup
                                        </a>
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
                                </div>
                            </form>
                            <!-- End Login -->

                            <!-- Signup -->
                            <form @submit.prevent="CustomerRegister()">                                
                                <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">
                                    <!-- Title -->
                                    <header class="text-center mb-7">
                                    <h2 class="h4 mb-0">Welcome to Electro.</h2>
                                    <p>Fill out the form to get started.</p>
                                    </header>
                                    <!-- End Title -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message- js-focus-state-">
                                            <label class="sr-only" for="signinEmail">Name</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signinEmailLabel">
                                                        <span class="fas fa-user"></span>
                                                    </span>
                                                </div>
                                                <input v-model="form.name" type="text" class="form-control" name="name" id="signinName" placeholder="Full name" 
                                                :class="{ 'is-invalid': form.errors.has('name') }" >
                                                <has-error :form="form" field="name"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Form Group -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message js-focus-state">
                                            <label class="sr-only" for="signupEmail">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fas fa-user"></span>
                                                    </span>
                                                </div>
                                                <input v-model="form.email" type="email" class="form-control" name="email" placeholder="Email" :class="{ 'is-invalid': form.errors.has('email') }">
                                                <has-error :form="form" field="username"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Input -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message- js-focus-state-">
                                            <label class="sr-only" for="signinEmail">Phone</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signinPhoneLabel">
                                                        <!-- <span class="fas fa-user"></span> -->
                                                        <i class="fas fa-mobile-alt"></i>
                                                    </span>
                                                </div>
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="signinPhoneLabel">
                                                        <!-- <span class="fas fa-user"></span> --> +88
                                                    </span>
                                                </div>
                                                <input v-model="form.phone" type="number" class="form-control" name="phone" id="signinPhone" placeholder="Phone" 
                                                :class="{ 'is-invalid': form.errors.has('phone') }" >
                                                <has-error :form="form" field="phone"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Form Group -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message js-focus-state">
                                            <label class="sr-only" for="signupPassword">Password</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fas fa-lock"></span>
                                                    </span>
                                                </div>
                                                <input v-model="form.password" type="password" class="form-control" name="password" placeholder="Password" 
                                                :class="{ 'is-invalid': form.errors.has('password') }" >
                                                <has-error :form="form" field="password"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Input -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message js-focus-state">
                                        <label class="sr-only" for="signuppassword_confirmation">Confirm Password</label>
                                            <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <span class="fas fa-key"></span>
                                                </span>
                                            </div>
                                            <input v-model="form.password_confirmation" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
                                            <has-error :form="form" field="password_confirmation"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Input -->

                                    <div class="mb-2">
                                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                                    </div>

                                    <div class="text-center mb-4">
                                        <span class="small text-muted">Already have an account?</span>
                                        <a class="js-animation-link small text-dark" href="javascript:;"
                                            data-target="#login"
                                            data-link-group="idForm"
                                            data-animation-in="slideInUp">Login
                                        </a>
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
                                </div>                                
                            </form>
                            <!-- End Signup -->


                            <!-- Forgot Password -->
                            <form @submit.prevent="CustomerResetPassword()">                                
                                <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">
                                    <!-- Title -->
                                    <header class="text-center mb-7">
                                        <h2 class="h4 mb-0">Recover Password.</h2>
                                        <p>Enter your email address and an email with instructions will be sent to you.</p>
                                    </header>
                                    <!-- End Title -->

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="js-form-message js-focus-state">
                                            <label class="sr-only" for="recoverEmail">Your email</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fas fa-user"></span>
                                                    </span>
                                                </div>
                                                <input v-model="form.email" type="email" class="form-control" name="email" id="recoverEmail" placeholder="Your email" aria-label="Your email" 
                                                :class="{ 'is-invalid': form.errors.has('email') }">
                                                <has-error :form="form" field="email"></has-error>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Form Group -->

                                    <div class="mb-2">
                                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                                    </div>

                                    <div class="text-center mb-4">
                                        <span class="small text-muted">Remember your password?</span>
                                        <a class="js-animation-link small" href="javascript:;"
                                           data-target="#login"
                                           data-link-group="idForm"
                                           data-animation-in="slideInUp">Login
                                        </a>
                                    </div>
                                </div>                                
                            </form>
                            <!-- End Forgot Password -->

                        </div>
                    </div>
                    <!-- End Content -->
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
    //import HeaderTopbar from '../Layouts/HeaderTopbar.vue' //this component load to every page of website
    //import FooterComponent from '../Layouts/Footer.vue' //this component load to every page of website
    //const HeaderTopbar = () => import( /* webpackChunkName: "HeaderTopbar-website" */ '../Layouts/HeaderTopbar') 
    export default {
        name: "Account-Sidebar-Navigation-Toggler-Public-website",
        data (){      
            return {
                //for form top error display
                display_error: false,
                error_message: '',

                form: new Form({
                    name: '',
                    username: '',
                    password: '', 
                    remember: true, /*By default remember me true*/  

                    email: '',
                    phone: '',
                    password: '',
                    password_confirmation: '',

                  // login:{
                  //   username: '',
                  //   password: '', 
                  //   //remember: false,
                  // },

                  // register:{
                  //   email: '',
                  //   phone: '',
                  //   password: '', 
                  //   confirm_password: '', 
                  // },

                  // password_reset:{
                  //   email:''
                  // }                              
                })                             
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: {  
            // Submit the form via a POST request
            CustomerLogin() {  
              this.$Progress.start(); //using progress-bar package

              this.form.post('/customer/login')
              // axios.post('/customer/login',{
              //       username: this.form.login.username,
              //       password: this.form.login.password
              //   }
              // )
              .then(({ data }) => { 
                //console.log(data);                 

                if(data.success){ 
                    this.$Progress.finish();
                    this.display_error = false;
                  
                    //$('#sidebarContent').hide();     
                    $("#sidebarContent").fadeOut("slow"); // Hide login sidebar 

                    this.$store.commit('AuthenticationForCustomer/IS_AUTHENTICATED_CHECK', true ); 

                    this.$store.dispatch('AuthenticationForCustomer/fetchAuthCustomerData'); //get auth customer data      

                    // window.location = '/auth/my-dashboard';  
                    //window.location = '/home'; 
                    //this.$router.go();   
                    //window.location = '/home';    

                    //this.$router.reload(); //self reload                     
                                      
                    this.$router.push({ path : '/home' });   //route after successfule submit                   
                    //this.$router.replace({ path : '/auth/my-dashboard' });   //route after successfule submit

                    this.form.reset();  //reset from after submit 

                    toastr.success('Login successfule'); 
                }

                if(data.error){
                    this.$Progress.finish(); 
                    this.display_error = true;
                    this.error_message = data.error;
                }

                if(data.errors){
                    this.$Progress.finish(); 
                    this.display_error = false;
                    toastr.warning(data.errors);                        
                }

              })
              .catch( () => {
                this.display_error = false;
                this.$Progress.fail();
                //toastr.warning('Something is wrong!');
              })   

            },  //End login  



            CustomerRegister(){
              this.$Progress.start(); //using progress-bar package

              this.form.post('/customer/register')
              .then(({ data }) => { 
                    //console.log(data); 

                    this.$Progress.finish(); 

                    $('#sidebarContent').hide('fist',function(){}); 

                    

                    window.location = '/home';                  

                    //this.$router.push({ path : '/home' });   //route after successfule submit                   
                    // this.$router.push({ path : '/auth/login' });   //route after successfule submit                   
                    //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit 

                    this.form.reset();  //reset from after submit

                    toastr.success('Registration successfule, Please verify'); 
    
              })
              .catch( (data) => {
                this.$Progress.fail();
                toastr.warning('The given data was invalid.');
                // console.log(data.message);
              })
            }, //End reset password



            CustomerResetPassword(){
                this.$Progress.start(); //using progress-bar package

                // $("#signup").hide('fist',function(){
                //     $(this).addClass("animated slideInUp");
                //     $(this).css('opacity', '0');
                //     $(this).css('display', 'none');
                // });

                // $("#forgotPassword").hide('fist',function(){
                //     $(this).addClass("animated slideInUp");
                //     $(this).css('opacity', '0');
                //     $(this).css('display', 'none');
                // });
                // $("#login").show(function(){
                // // $("#login").show('slideUp', function(){
                //     $(this).css('display', 'block');
                //     $(this).css('opacity', '1');
                //     $(this).addClass("animated slideInUp");

                // });              


              this.form.post('/customer/password/email')
              .then(({ data }) => { 
                //console.log(data);    
                    this.$Progress.finish();

                    $('#sidebarContent').hide('fist',function(){});

                    //this.$router.push({ path : '/auth/login' });   //route after successfule submit                   
                    //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit
                    this.form.reset();  //reset from after submit 
                    toastr.success(data.message); 
              })
              .catch( () => {
                this.$Progress.fail();
                toastr.warning('Something is wrong!');
              }) 

            }, //End reset password
    
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
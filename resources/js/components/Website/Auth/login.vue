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
                <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerLogin()">
                    
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
              .then(({ data }) => { 
                    //console.log(data.success); 

                    if(data.success){ 
                      this.$Progress.finish();
                      this.display_error = false;                     

                      this.$router.push({ path : '/auth/my-dashboard' });   //route after successfule submit                   
                      //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit 

                      this.form.reset();  //reset from after submit

                      toastr.success('Login successfule'); 
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
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
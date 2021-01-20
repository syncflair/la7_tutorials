<template>
<span>
    
    <!-- End Login Section -->
    <div class="container mb-8 mt-0 mb-lg-0-">
        <div class="row mb-8 bg-gray-1- rounded-lg pt-5 pb-5">
            <div class="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mb-5- mt--" >

                <!-- Title -->
                <div class="border-bottom border-color-1 mb-3">
                    <h3 class="d-inline-block section-title mb-0 pb-2 font-size-18">Welcome to SORBORAHO! Please register.</h3>
                </div>
                <!-- <p class="text-gray-90 mb-4">Welcome to SORBORAHO! Sign in to your account.</p> -->
                <!-- End Title -->
                <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerRegister()">
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
                        <div class="js-form-message- js-focus-state-">
                            <label class="sr-only" for="signinEmail">Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="signinEmailLabel">
                                        <span class="fas fa-user"></span>
                                    </span>
                                </div>
                                <input v-model="form.email" type="email" class="form-control" name="email" id="signinEmail" placeholder="Email" 
                                :class="{ 'is-invalid': form.errors.has('email') }" >
                                <has-error :form="form" field="email"></has-error>
                            </div>
                        </div>
                    </div>
                    <!-- End Form Group -->

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
                        <div class="js-form-message- js-focus-state-">
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

                    <!-- Form Group -->
                    <div class="form-group">
                        <div class="js-form-message- js-focus-state-">
                        <label class="sr-only" for="signupConfirmPassword">Confirm Password</label>
                            <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="signupConfirmPasswordLabel">
                                    <!-- <span class="fas fa-key"></span> -->
                                    <span class="fas fa-lock"></span>
                                </span>
                            </div>
                            <input v-model="form.password_confirmation" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                            <has-error :form="form" field="password_confirmation"></has-error>
                            </div>
                        </div>
                    </div>
                    <!-- End Input -->



                    <!-- Button -->
                    <div class="mb-2">
                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                    </div>
                    <!-- End Button -->

                    <div class="text-center mb-4">
                        <span class="small text-muted">Already have an account?</span>
                        <router-link class="js-animation-link small text-dark" to="/auth/login"
                            data-target="#login"
                            data-link-group="idForm"
                            data-animation-in="slideInUp">Login
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
        name: "customer-register-Public-website",
        data (){      
            return {

                form: new Form({
                  name:'',
                  email: '',
                  phone: '',
                  password: '',  
                  password_confirmation:'',
                  //tac_agree: '',  //I agree to the terms         
                })            
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: {  
            CustomerRegister(){
              this.$Progress.start(); //using progress-bar package

              this.form.post('/customer/register')
              .then(({ data }) => { 
                    //console.log(data); 

                    this.$Progress.finish();                    

                    this.$router.push({ path : '/home' });   //route after successfule submit                   
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
            }        
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
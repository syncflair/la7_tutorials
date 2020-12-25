<template>
<span>
    
    <!-- End Login Section -->
    <div class="container mb-8 mt-0 mb-lg-0-">
        <div class="row mb-8 bg-gray-1- rounded-lg pt-5 pb-5">
            <div class="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mb-5- mt--" >

                <!-- Title -->
                <!-- <div class="border-bottom border-color-1 mb-3">
                    <h3 class="d-inline-block section-title mb-0 pb-2 font-size-18">Welcome to SORBORAHO! Please login.</h3>
                </div> -->
                <!-- <p class="text-gray-90 mb-4">Welcome to SORBORAHO! Sign in to your account.</p> -->
                <!-- End Title -->

                <!-- Title -->
                <header class="text-center mb-7">
                    <h2 class="h4 mb-0">Recover Password.</h2>
                    <p>Enter your email address and an email with instructions will be sent to you.</p>
                </header>
                <!-- End Title -->

                                    
                <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerPasswordResetRequest()">
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
                                <input v-model="form.email" type="email" class="form-control" name="email" id="signinEmail" placeholder="Email" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Button -->
                    <div class="mb-2">
                        <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                    </div>
                    <!-- End Button -->
                   

                    <div class="text-center mb-4">
                        <span class="small text-muted">Remember your password?</span>
                        <router-link class="js-animation-link small" to="/auth/login"
                           data-target="#login"
                           data-link-group="idForm"
                           data-animation-in="slideInUp">Login
                        </router-link>
                    </div>

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
        name: "customer-email-submit-for-password-reset-Public-website",
        data (){      
            return {

                form: new Form({
                  email: '',            
                })                             
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: { 
            CustomerPasswordResetRequest(){
                this.$Progress.start(); //using progress-bar package

              this.form.post('/customer/password/email')
              .then(({ data }) => { 
                    //console.log(data); 

                    this.$Progress.finish();                    

                    this.$router.push({ path : '/home' });   //route after successfule submit                   
                    //this.$router.replace({ path : '/dashboard-customer' });   //route after successfule submit 

                    toastr.success(data.message); 

              })
              .catch( () => {
                this.$Progress.fail();
                toastr.warning('Something is wrong!');
              })
            }         
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
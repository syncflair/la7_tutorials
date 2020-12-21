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
                <form class="js-validate" novalidate="novalidate">
                    <!-- Form Group -->
                    <div class="js-form-message form-group">
                        <label class="form-label" for="signinSrEmailExample3">
                            <small>Username or Email address
                            <span class="text-danger">*</span></small>
                        </label>
                        <input type="email" class="form-control" name="email" id="signinSrEmailExample3" placeholder="Username or Email address" aria-label="Username or Email address" required
                        data-msg="Please enter a valid email address."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success">
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="js-form-message form-group">
                        <label class="form-label" for="signinSrPasswordExample2"><small>Password <span class="text-danger">*</span> </small></label>
                        <input type="password" class="form-control" name="password" id="signinSrPasswordExample2" placeholder="Password" aria-label="Password" required
                        data-msg="Your password is invalid. Please try again."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success">
                    </div>
                    <!-- End Form Group -->

                    <!-- Checkbox -->
                    <div class="js-form-message mb-3">
                        <div class="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" class="custom-control-input" id="rememberCheckbox" name="rememberCheckbox" required
                            data-error-class="u-has-error"
                            data-success-class="u-has-success">
                            <label class="custom-control-label form-label" for="rememberCheckbox">
                                <small>Remember me</small>
                            </label>
                        </div>
                    </div>
                    <!-- End Checkbox -->

                    <!-- Button -->
                    <div class="mb-3">
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary-dark-w px-5 w-100">Login</button>
                        </div>
                        <div class="mb-2 text-center">
                            <a class="text-blue" href="#"><small>Lost your password? </small></a> | 
                            <a class="text-blue" href="#"><small>Lost your password? </small></a>
                        </div>
                    </div>
                    <!-- End Button -->

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
                            
            }
        },

        components:{ 
            //HeaderTopbar, FooterComponent,
        }, 

        methods: {          
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
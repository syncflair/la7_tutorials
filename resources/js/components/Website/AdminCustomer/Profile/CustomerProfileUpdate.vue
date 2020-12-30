<template>

    <div class="container">
        <!-- <div class="mb-5">
            <h1 class="text-center">Contact</h1>
        </div> -->
                
        <div class="row mb-10 mt-4">
            <div class="d-none- d-xl-block col-xl-2 col-wd-2gdot5-">

                <NavForAdminCustomer />

            </div>

            <div class="bg-gray-1 rounded-lg col-xl-10 col-wd-9gdot5-">
                <div class="row ">

                    <!-- <div class="col-lg-12 col- order-lg-1">
                        <div class="border-bottom border-color-1 mb-5">
                            <h3 class="section-title mb-0 pb-2 font-size-25">Profile</h3>
                        </div>
                    </div> -->

                    <!-- Tab Prodcut -->
                    <div class="col-lg-12  col- order-lg-1">
                            <!-- Nav Classic -->
                            <div class="position-relative bg-white- text-center- text-left z-index-2 pb-3">
                                <ul class="nav nav-classic nav-tab justify-content-left justify-content-center-" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active " id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                General Details
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link nav-link-custom" id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                Email
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link nav-link-custom" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                Phone
                                            </div>
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link nav-link-custom" id="pills-four-example1-tab" data-toggle="pill" href="#pills-four-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false">
                                            <div class="d-md-flex justify-content-md-center align-items-md-center">
                                                Password
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- End Nav Classic -->

                            <!-- Tab Content -->
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">
                                    
                                    <!-- Profile Form -->
                                    <form class="js-validate-" novalidate="novalidate-">
                                        <div class="row text-center-">
                                            <div class="col-md-12">
                                                <div class="js-form-message mb-4">
                                                    <label class="form-label"> Full Name </label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>

                                            <!-- <div class="w-100"></div> -->
                                            <div class="col-md-6">
                                                <div class="js-form-message mb-4">
                                                    <label class="form-label"> Gender </label>
                                                    <select class="form-control js-select selectpicker dropdown-select"
                                                        data-live-search="true"
                                                        data-style="form-control border-color-1 font-weight-normal">
                                                        <option value="">Male</option>
                                                        <option value="AF">Female</option>                                           
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="js-form-message mb-4">
                                                    <label class="form-label">Dath of Birth</label>
                                                    <input type="date" class="form-control"  placeholder="">
                                                </div>
                                            </div>                                        
                                        </div>
                                        <div class="mb-3 text-right">
                                            <button type="submit" class="btn btn-primary-dark-w px-5">Save</button>
                                        </div>
                                    </form>
                                    <!-- End Profile Form -->

                                </div>
                                <!-- ######################################################################### -->

                                <div class="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab">
                                    <!-- Email Form -->
                                    <form class="js-validate-" novalidate="novalidate-">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="js-form-message mb-6">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3 text-right">
                                            <button type="submit" class="btn btn-primary-dark-w px-5">Save Email</button>
                                        </div>
                                    </form>
                                    <!-- End Email Form -->
                                </div>

                                <!-- ######################################################################### -->

                                <div class="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab">
                                    <!-- Phone Form -->
                                    <form class="js-validate-" novalidate="novalidate-">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="js-form-message mb-6">
                                                    <label class="form-label">Phone</label>
                                                    <input type="text" class="form-control" placeholder="+1 (062) 109-9222" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3 text-right">
                                            <button type="submit" class="btn btn-primary-dark-w px-5">Save Phone</button>
                                        </div>
                                    </form>
                                    <!-- End Phone Form -->
                                </div>

                                <!-- ######################################################################### -->

                                <div class="tab-pane fade pt-2" id="pills-four-example1" role="tabpanel" aria-labelledby="pills-four-example1-tab">
                                    <!-- Password Form -->
                                    <form class="js-validate-" novalidate="novalidate-">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="js-form-message mb-4">
                                                <label class="form-label"> Old Password </label>
                                                <input type="password" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="js-form-message mb-4">
                                                <label class="form-label"> New Password </label>
                                                <input type="password" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="js-form-message mb-4">
                                                <label class="form-label"> Retype Password </label>
                                                <input type="password" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 text-right">
                                            <button type="submit" class="btn btn-primary-dark-w px-5">Save Password</button>
                                        </div>
                                    </form>
                                    <!-- End Password Form -->
                                </div>

                            </div>
                            <!-- End Tab Content -->
                    </div>
                    <!-- End Tab Prodcut -->
                    
                    <!-- Customer profile Edit -->
                    <!-- <div class="col-lg-12 col- order-lg-1">
                        <div class="pb-7 mb-7">
                           
                        </div>
                    </div>  -->
                    <!-- END Customer profile Edit -->
                    


                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavForAdminCustomer from '../Include/NavForAdminCustomer'

    import { mapState } from 'vuex' //for user MapState

    export default {
        name: "customer-Profile-Update-website-auth",
        data (){      
            return {         
            }
        },

        computed: {

          ...mapState( 'commonStoreForWebsite', ['authCustomer'] ),

        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 
        },           

        created(){
        },
           
        mounted() {
        },
    }
</script>
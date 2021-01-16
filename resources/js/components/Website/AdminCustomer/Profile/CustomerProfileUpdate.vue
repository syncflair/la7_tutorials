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
                                        <a class="nav-link nav-link-custom active " id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true">
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
                                    <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerProfileUpdate()">
                                        <div class="row text-center-">
                                            <div class="col-md-12">
                                                <div class="js-form-message- mb-4">
                                                    <label class="form-label"> Full Name </label>
                                                    <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                                    <has-error :form="form" field="name"></has-error>
                                                </div>
                                            </div>

                                            <!-- <div class="w-100"></div> -->
                                            <!-- data-live-search="true" -->
                                            <div class="col-md-6">
                                                <div class="js-form-message- mb-4">
                                                    <label class="form-label"> Gender </label>
                                                    <select v-model="form.gender" class="form-control js-select- selectpicker- dropdown-select"  data-style="form-control border-color-1 font-weight-normal" name="gender" :class="{ 'is-invalid': form.errors.has('gender') }" >
                                                        <option disabled value="">Select gender ..</option>                
                                                        <option v-for="gt in gender_type" v-bind:value="gt.name">
                                                          {{gt.name}}
                                                        </option>                       
                                                    </select>
                                                    <has-error :form="form" field="gender"></has-error>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="js-form-message- mb-4">
                                                    <label  class="form-label">Dath of Birth</label>
                                                    <input v-model="form.date_of_birth" type="date" class="form-control"
                                                    :class="{ 'is-invalid': form.errors.has('date_of_birth') }"  placeholder="">
                                                    <has-error :form="form" field="date_of_birth"></has-error>
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
                                    <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerChangeEmail()">
                                        <div class="row">
                                            <div class="col-md-6 offset-md-3">
                                                <div class="js-form-message- mb-6">
                                                    <label class="form-label">Email</label>
                                                    <input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" >
                                                    <has-error :form="form" field="email"></has-error>
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
                                    <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerChangePhone()">
                                        <div class="row">
                                            <div class="col-md-6 offset-md-3">
                                                <div class="js-form-message- mb-6">
                                                    <label class="form-label">Phone</label>
                                                    <input v-model="form.phone" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="" >
                                                    <has-error :form="form" field="phone"></has-error>
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
                                    <form class="js-validate-" novalidate="novalidate-" @submit.prevent="CustomerChangePassword()">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-12">
                                            <div class="js-form-message- mb-4">
                                                <label class="form-label"> Old Password </label>
                                                <input v-model="form.old_password" type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('old_password') }">
                                                <has-error :form="form" field="old_password"></has-error>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="js-form-message- mb-4">
                                                <label class="form-label"> New Password </label>
                                                <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                                <has-error :form="form" field="password"></has-error>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="js-form-message- mb-4">
                                                <label class="form-label"> Retype Password </label>
                                                <input v-model="form.password_confirmation" type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                                                <has-error :form="form" field="password_confirmation"></has-error>
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
                gender_type: [
                  { name: 'Male' },
                  { name: 'Female' },
                  { name: 'Other' },
                ], 
                //editMode: false, //Use this for add edit using the same form 
                form: new Form({
                    id:'',
                    name:'',
                    email:'', 
                    phone:'', 
                    password:'', 
                    old_password:'', 
                    password_confirmation: '', 
                    gender:'', 
                    date_of_birth:'',                 
                }),

            }
        },

        computed: {

          ...mapState( 'AuthenticationForWebsite', ['authCustomer'] ),

        },

        components:{
            NavForAdminCustomer, 
        }, 

        methods: { 
            editData(data){
                //this.editMode = true;
                this.form.fill(data);               
            },

            CustomerProfileUpdate(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/auth/CustomerProfileUpdate')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data 
                        toastr.success(data.success); 
                    }
                    if(data.error){
                        this.$Progress.fail();
                        toastr.warning(data.error);
                    }
                    //console.log(data);
                })
                .catch( (data) => {
                this.$Progress.fail();
                toastr.warning('The given data was invalid.');
                // console.log(data.message);
                })
            },

            CustomerChangeEmail(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/auth/CustomerChangeEmail')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data 
                        toastr.success(data.success); 
                    }
                    if(data.error){
                        this.$Progress.fail();
                        toastr.warning(data.error);
                    }
                })
                .catch( (data) => {
                this.$Progress.fail();
                toastr.warning('The given data was invalid.');
                // console.log(data.message);
                })
            },

            CustomerChangePhone(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/auth/CustomerChangePhone')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data 
                        toastr.success(data.success); 
                    }
                    if(data.error){
                        this.$Progress.fail();
                        toastr.warning(data.error);
                    }
                })
                .catch( (data) => {
                this.$Progress.fail();
                toastr.warning('The given data was invalid.');
                // console.log(data.message);
                })
            },

            CustomerChangePassword(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/auth/CustomerChangePassword')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //this.form.reset();  //reset from after submit
                        this.form.old_password = '';
                        this.form.password = '';
                        this.form.password_confirmation = '';

                        this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data                         
                        toastr.success(data.success); 
                        //console.log(data.success); 
                    }
                    if(data.error){
                        this.$Progress.fail();
                        toastr.warning(data.error);
                    }
                })
                .catch( (data) => {
                this.$Progress.fail();
                toastr.warning('The given data was invalid.');
                // console.log(data.message);
                })
            }

        },           

        created(){
            this.$store.dispatch('AuthenticationForWebsite/fetchAuthCustomerData'); //get auth customer data 

            this.editData(this.authCustomer);
        },
           
        mounted() {
        },
    }
</script>
<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   


  <!-- Main content -->
  <div class="content pt-4">
    <div class="container">



      <div class="row">
        <div class="d-none d-xl-block col-xl-2 col-wd-2gdot5-">
            <NavForAdminSupplier></NavForAdminSupplier>
        </div>

        <div class="bg-gray-1 rounded-lg- col-xl-10 col-wd-9gdot5-">
          <div class="row pt-3-">

            <div class="col-lg-12"><!--Start first col-->
              <div class="card">
                <div class="card-header pl-2">
                  <h3 class="card-title">Profile Update</h3>

                  <div class="card-tools">
                    <!-- <span class="badge badge-danger">8 New Members</span>
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                    </button> -->
                  </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body p-0">

                  

                 <!--  <div class="row">
                    <div class="col-12"> -->
                      
                      <div class="card">
                        <div class="card-header p-2">
                          <ul class="nav nav-pills">
                            <li class="nav-item"><a class="nav-link nav-link-custome active" href="#general-tab" data-toggle="tab">General</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custome" href="#email-tab" data-toggle="tab">Email</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custome" href="#phone-tab" data-toggle="tab">Phone</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custome" href="#password-tab" data-toggle="tab">Change Password</a></li>
                          </ul>
                        </div><!-- /.card-header -->


                        <div v-if="display_notification_message === true" class="text-center mb-2 mt-3"> 
                          <span v-if="notification_message_type === 'success'" class="text-success bg-success- text-center p-1 border"><i class="icon fas fa-check"></i> {{notification_message_text}}</span>

                          <span v-if="notification_message_type === 'warning'" class="text-warning bg-success- text-center mb-3 mt-2 p-1 border"><i class="fas fa-exclamation-triangle"></i> {{notification_message_text}}</span>
                        </div>
                        <!-- <display-notification-message-app :groupedProps="groupedProps"></display-notification-message-app> -->
                        

                        <div class="card-body p-2">
                          <div class="tab-content">
                            <div class="tab-pane active" id="general-tab">   
                              
                              <!-- Profile Form -->
                              <form class="form-horizontal mt-2" @submit.prevent="SupplierProfileUpdate()">
                                <div class="row">
                                  <div class="col-lg-8 offset-lg-2">
                                
                                    <div class="form-group row">
                                      <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                      <div class="col-sm-10">
                                        <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                      </div>
                                    </div>

                                    <div class="form-group row">
                                      <label for="inputName" class="col-sm-2 col-form-label">Address</label>
                                      <div class="col-sm-10">
                                        <textarea v-model="form.supplier_address" name="supplier_address" class="form-control p-2" rows="2" placeholder="" style="margin-top: 0px; margin-bottom: 0px; " placeholder="Enter Address"></textarea>
                                      </div>
                                    </div>

                                    <div class="form-group row">
                                      <label for="inputName" class="col-sm-2 col-form-label">Details</label>
                                      <div class="col-sm-10">
                                        <textarea v-model="form.supplier_desc" name="supplier_desc" class="form-control p-2" rows="2" placeholder="" style="margin-top: 0px; margin-bottom: 0px; " placeholder="Enter Address"></textarea>
                                      </div>
                                    </div>

                                    <div class="mb-3 text-right">
                                        <button type="submit" class="btn btn-primary ">Submit</button>
                                    </div>

                                  </div>
                                </div>

                              </form>
                              <!-- End Profile Form -->


                            </div>
                            <!-- /.tab-pane profile-->
                            <div class="tab-pane" id="email-tab">

                              <div v-if="!change_email" class="col-sm-8- col-lg-8 offset-lg-2 mb-3 col-6-">
                                  <div class="row pt-4">
                                      <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                          <!-- <h6 class=" mb-0 pb-1 pl-2- font-size-14">Email</h6> -->
                                          <p class="mb-2 text-green"> {{ authSupplier.email }}</p>
                                      </div>
                                      <div class="col-sm-8 col-xs-8 col-md-4 col-lg-4">
                                          <div class="mb-3 text-left">
                                              <!-- <button type="button" class="btn btn-primary-dark-w px-5">Change Email</button> -->
                                              <button type="button" @click.prevent="SendSupplierEmailChangeVerificationCode()"  class="btn btn-block- btn-outline-success btn-sm">Change Email</button>
                                          </div>
                                      </div>
                                  </div>

                                  <p class="text-muted text-center">
                                    You can change your email address from here.
                                  </p>                                      
                              </div>

                              <!-- Email Form -->
                              <form v-if="change_email" @submit.prevent="SupplierChangeEmail()">

                                  <div class="row mt-2">
                                      <div class="col-md-6 offset-md-3">
                                          <p class="text-white- text-secondary mb-3">
                                          <strong>Existing email:</strong> 
                                          <span class="text-blue">{{authSupplier.email}}</span>
                                      </p>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col-md-6 offset-md-3">
                                          <div class="mb-3">
                                              <label class="form-label">Email</label>
                                              <input v-model="form.new_email" type="email" class="form-control" :class="{ 'is-invalid': form.errors.has('new_email') }" placeholder="Enter your new email address" >
                                              <has-error :form="form" field="new_email"></has-error>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col-md-6 offset-md-3">
                                          <div class="mb-3">
                                              <label class="form-label">Verification Code</label>
                                              <input v-model="form.email_verification_code" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('email_verification_code') }" placeholder="Enter your verification code">
                                              <has-error :form="form" field="email_verification_code"></has-error>
                                          </div>
                                      </div>
                                  </div>

                                  <dir v-if="change_email" class="row">
                                      <div class="col-md-6- offset-md-3- col-12 text-center">
                                          <span class="small text-muted">Check your email to verification code, if did't get <a @click.prevent="SendSupplierEmailChangeVerificationCode()" href="javascript:void(0)" > Resend</a></span>
                                      </div>
                                  </dir>

                                  <div class="mb-3 text-right">
                                      <button @click.prevent="CancelChangeEmail()" type="button" class="btn btn-primary">Cancel</button>
                                      <button type="submit" class="btn btn-primary">Save Email</button>
                                  </div>
                              </form>
                              <!-- End Email Form -->

                            </div>
                            <!-- /.tab-pane for email -->

                            <div class="tab-pane" id="phone-tab">

                              <div v-if="!change_phone" class="col-lg-3- col-lg-8 offset-lg-2 mb-3 col-6-">
                                  <div class="row pt-4">
                                      <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                          <!-- <h3 class=" mb-0 pb-1 pl-2- font-size-14">Phone</h3> -->
                                          <p class="mb-2 text-green"> +88 {{ authSupplier.phone }}</p>
                                      </div>
                                      <div class="col-sm-8 col-xs-8 col-md-4 col-lg-4">
                                          <div class="mb-3 text-left">
                                              <!-- <button type="button" @click.prevent="SendSupplierPhoneChangeVerificationCode()" class="btn btn-primary-dark-w px-5">Change Phone</button> -->
                                              <button type="button" @click.prevent="SendSupplierPhoneChangeVerificationCode()"  class="btn btn-block- btn-outline-success btn-sm">Change Phone</button>
                                          </div>
                                      </div>
                                  </div> 
                                  <p class="text-muted text-center">
                                    You can change your phone number from here.
                                  </p>                                       
                              </div>

                              <!-- Phone Form -->
                              <form v-if="change_phone" @submit.prevent="SupplierChangePhone()">

                                  <div class="row mt-2">
                                      <div class="col-md-6 offset-md-3">
                                          <p class="text-white- text-secondary mb-3">
                                          <strong>Existing phone:</strong> 
                                          <span class="text-blue"> +88 {{authSupplier.phone}}</span>
                                      </p>
                                      </div>
                                  </div>

                                  <div class="row mb-3">
                                      <div class="col-md-6 offset-md-3">
                                          <div class="mb-6">
                                              <label class="form-label">New phone</label>
                                              <!-- <input v-model="form.new_phone" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('new_phone') }" placeholder="Enter your new phone" >
                                              <has-error :form="form" field="new_phone"></has-error> -->
                                              <div class="input-group">
                                                  <!-- <div class="input-group-prepend">
                                                      <span class="input-group-text" id="signinPhoneLabel">
                                                          <i class="fas fa-mobile-alt"></i>
                                                      </span>
                                                  </div> -->
                                                  <div class="input-group-prepend">
                                                      <span class="input-group-text" id="signinPhoneLabel">
                                                          <!-- <span class="fas fa-user"></span> --> +88
                                                      </span>
                                                  </div>
                                                  <input v-model="form.new_phone" type="text" class="form-control" placeholder="Enter your new phone" :class="{ 'is-invalid': form.errors.has('new_phone') }" >
                                                  <has-error :form="form" field="new_phone"></has-error>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col-md-6 offset-md-3">
                                          <div class="mb-3">
                                              <label class="form-label">Verification Code</label>
                                              <input v-model="form.phone_verification_code" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('phone_verification_code') }" placeholder="Enter your verification code">
                                              <has-error :form="form" field="phone_verification_code"></has-error>
                                          </div>
                                      </div>
                                  </div>

                                  <dir v-if="change_email" class="row">
                                      <div class="col-md-6- offset-md-3- col-12 text-center">
                                          <span class="small text-muted">Check your phone to verification code, if did't get <a @click.prevent="SendSupplierPhoneChangeVerificationCode()" href="javascript:void(0)" > Resend</a></span>
                                      </div>
                                  </dir>

                                  <div class="mb-3 text-right">
                                      <button @click.prevent="CancelChangePhone()" type="button" class="btn btn-primary">Cancel</button>
                                      <button type="submit" class="btn btn-primary">Save Phone</button>
                                  </div>
                              </form>
                              <!-- End Phone Form -->


                            </div>
                            <!-- /.tab-pane phone-->

                            <div class="tab-pane" id="password-tab">
                              
                              <form class="form-horizontal" @submit.prevent="SupplierChangePassword()">
                                <div class="row mt-2">
                                  <div class="col-lg-8 offset-lg-2">
                                    
                                  

                                    <div class="form-group row">
                                      <label for="inputName" class="col-sm-4 col-form-label">Old Password</label>
                                      <div class="col-sm-8">
                                        <input v-model="form.old_password" type="password" class="form-control" placeholder="Old Password" :class="{ 'is-invalid': form.errors.has('old_password') }">
                                        <has-error :form="form" field="old_password"></has-error>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label for="inputEmail" class="col-sm-4 col-form-label">New Password</label>
                                      <div class="col-sm-8">
                                        <input v-model="form.password" type="password" class="form-control" placeholder="New Password" :class="{ 'is-invalid': form.errors.has('password') }">
                                        <has-error :form="form" field="password"></has-error>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label for="inputName2" class="col-sm-4 col-form-label">Retype Password</label>
                                      <div class="col-sm-8">
                                        <input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Retype Password" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                                        <has-error :form="form" field="password_confirmation"></has-error>
                                      </div>
                                    </div>

                                    <div class="form-group row">
                                      <div class="offset-sm-2 col-sm-10 text-right">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </form>

                            </div>
                            <!-- /.tab-pane password-->
                          </div>
                          <!-- /.tab-content -->
                        </div><!-- /.card-body -->
                      </div>

                <!--     </div>
                  </div> -->
                              
                </div>
              </div><!--End first card-->
            </div>


          </div>
        </div>        
      </div>



    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content -->


</div>
</section><!-- Main content -->
</template>

<script>

    import { mapState } from 'vuex' //for user MapState
    import NavForAdminSupplier from '../Layouts/NavForAdminSupplier'

    export default {
        data(){
          return {
            //Custome message display for success or warning
            // display_notification_message: false,
            // notification_message_text:'',
            // notification_message_type:'',
            // groupedProps:{},

            // gender_type: [
            //   { name: 'Male' },
            //   { name: 'Female' },
            //   { name: 'Other' },
            // ], 

            //for change email address management
            change_email: false,
            change_phone: false,


            //editMode: false, //Use this for add edit using the same form 
            form: new Form({
                id:'',
                name:'',
                email:'', 
                phone:'', 
                password:'', 
                old_password:'', 
                password_confirmation: '',
                supplier_address:'',
                supplier_desc:'',

                email_verification_code: '',
                new_email: '',

                phone_verification_code: '',
                new_phone: '',
                //gender:'', 
                //date_of_birth:'',                 
            }),
          }
        },

        components:{
            NavForAdminSupplier, 
        }, 

        computed: {
          ...mapState( 'AuthenticationForSupplier', ['authSupplier','authVendor'] ),
        },

        watch: {
            /*Remove display message after ten second---- Not working properly*/
            // 'notification_message_text': function (val) {
            //     setTimeout(() => {                
            //       if( val !== ''){
            //           this.display_notification_message = false;
            //       }
            //     }, 3000);//call after 10000 miliscound
            // },
                     
        },

        methods:{

            // display_message_function(message, type){
            //     this.display_notification_message = true;
            //     this.notification_message_text = message; //show message
            //     this.notification_message_type = type; //show message type (success, warning)

            //     //remove message
            //     setTimeout(() => {                
            //       if( this.notification_message_text !== ''){
            //           this.display_notification_message = false;
            //       }
            //     }, 9000);//call after 10000 miliscound
            // },

            editData(data){
                //this.editMode = true;
                this.form.fill(data);               
            },

            SupplierProfileUpdate(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SupplierProfileUpdate')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth customer data 
                        
                        //toastr.success(data.success);
                        this.display_message_function(data.success, 'success');
                        //this.groupedProps = {message: data.success, type:'success'};

                        //console.log(this.groupedProps);

                    }
                    if(data.error){
                        this.$Progress.fail();
                        // toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                    //console.log(data);
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                  this.display_message_function('The given data was invalid!', 'warning');
                  // console.log(data.message);
                })
            },

            SendSupplierEmailChangeVerificationCode(){
                
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SendSupplierEmailChangeVerificationCode')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //toastr.success(data.success);
                        this.display_message_function(data.success, 'success');
                        this.change_email =true;
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                  // console.log(data.message);
                })
            },

            SupplierChangeEmail(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SupplierChangeEmail')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth customer data 
                        //toastr.success(data.success); 
                        this.display_message_function(data.success, 'success');
                        this.change_email = false;
                        this.form.new_email = '';
                        this.form.email_verification_code = '';
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                  this.display_message_function('The given data was invalid!', 'warning');
                  // console.log(data.message);
                })
            },

            CancelChangeEmail(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/CancelChangeEmail')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //toastr.success(data.success); 
                        this.display_message_function(data.success, 'success');
                        this.change_email =false;
                        this.form.new_email = '';
                        this.form.email_verification_code = '';
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                })
            },


            SendSupplierPhoneChangeVerificationCode(){
                
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SendSupplierPhoneChangeVerificationCode')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //toastr.success(data.success);
                        this.display_message_function(data.success, 'success');
                        this.change_phone =true;
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                })
            },


            SupplierChangePhone(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SupplierChangePhone')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth customer data 
                        //toastr.success(data.success); 
                        this.display_message_function(data.success, 'success');
                        this.change_phone = false;
                        this.form.new_phone = '';
                        this.form.phone_verification_code = '';
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                  this.display_message_function('The given data was invalid!', 'warning');
                  // console.log(data.message);
                })
            },

            CancelChangePhone(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/CancelChangePhone')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //toastr.success(data.success); 
                        this.display_message_function(data.success, 'success');
                        this.change_phone =false;
                        this.form.new_phone = '';
                        this.form.phone_verification_code = '';
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                })
            },



            SupplierChangePassword(){
                this.$Progress.start(); //using progress-bar package

                this.form.post('/sspa/SupplierChangePassword')
                .then(({ data }) => { 
                    this.$Progress.finish();
                    if(data.success){
                        //this.form.reset();  //reset from after submit
                        this.form.old_password = '';
                        this.form.password = '';
                        this.form.password_confirmation = '';

                        this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth customer data                         
                        //toastr.success(data.success); 
                        this.display_message_function(data.success, 'success');
                        //console.log(data.success); 
                    }
                    if(data.error){
                        this.$Progress.fail();
                        //toastr.warning(data.error);
                        this.display_message_function(data.error, 'warning');
                    }
                })
                .catch( (data) => {
                  this.$Progress.fail();
                  //toastr.warning('The given data was invalid.');
                  this.display_message_function('The given data was invalid!', 'warning');  
                  // console.log(data.message);
                })
            }
        },

        created(){
            // setTimeout(() => {
            //     this.$store.dispatch('AuthenticationForSupplier/fetchAuthVendorData', this.authSupplier.vendor_id);  
            // }, 300);//call after 800 miliscound 

            this.$store.dispatch('AuthenticationForSupplier/fetchAuthSupplierData'); //get auth supplier data 
            this.editData(this.authSupplier);      
        },

        mounted() {
          //console.log(JSON.parse(this.authPermissions.permission).BranchInfo.delete);
          //console.log(JSON.parse(this.authPermissions.permission));
          //console.log(this.authPermissions.permission['BranchInfo']['delete']);

          // console.log(this.systemSettings);
          
        }
    }
</script>

<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
    <!-- Content Header (Page header) -->
    <Breadcrumb></Breadcrumb>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container">

        <div class="row">
          <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img v-if="authUser.avatar === null" class="profile-user-img img-fluid img-circle" :src="'../'+NoIconUrl" alt="User profile picture">
                  <img v-if="authUser.avatar != null" class="profile-user-img img-fluid img-circle" :src="authUser.avatar" alt="User profile picture">
                </div>

                <h3 class="profile-username text-center">{{authUserInfo.name}}</h3>

                <p class="text-muted text-center" v-if="authUserInfo.belongs_to_employee != null">{{authUserInfo.belongs_to_employee['belongs_to_j_ob_title']['job_title_name']}}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item" v-if="authUserInfo.belongs_to_branch != null">
                    <b>Branch</b> <a class="float-right">{{ authUserInfo.belongs_to_branch['branch_name'] }}</a>
                  </li>
                  <li class="list-group-item" v-if="authUserInfo.belongs_to_employee != null">
                    <b>Job Type</b> <a class="float-right">{{authUserInfo.belongs_to_employee['emp_job_type']}}</a>
                  </li>                  
                </ul>

                <!-- <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a> -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- About Me Box -->
         
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active" href="#tab-one" data-toggle="tab">Job Details</a></li>
                  <li class="nav-item"><a class="nav-link" href="#tab-two" data-toggle="tab">My Details</a></li>
                  <li class="nav-item"><a class="nav-link" href="#tab-three" data-toggle="tab">Change password</a></li>
                </ul>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">


                  <!-- /.tab-pane -->
                  <div class="tab-pane active" id="tab-one">
                    
                    <!-- The timeline -->
                    <div class="timeline timeline-inverse">
                     
                      <!-- timeline time label -->
                      <div class="time-label">
                        <span class="bg-danger">
                          Job Details
                        </span>
                      </div>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">                        
                        <i class="far fa-id-badge bg-primary"></i>
                        <div class="timeline-item">
                          <!-- <span class="time"><i class="far fa-clock"></i> 12:05</span> -->
                          <p class="timeline-header"><strong>Name:</strong> {{authUserInfo.belongs_to_employee.emp_name}}</p>
                          <p class="timeline-header"><strong>Office ID:</strong> {{authUserInfo.belongs_to_employee.employee_code}}</p>
                          <p class="timeline-header"><strong>Job Status:</strong> {{authUserInfo.belongs_to_employee.emp_job_status}}</p>
                          <p class="timeline-header"><strong>Job Type:</strong> {{authUserInfo.belongs_to_employee.emp_job_type}}</p>
                          <p class="timeline-header"><strong>Branch:</strong> {{ authUserInfo.belongs_to_branch['branch_name'] }}</p>
                          <p class="timeline-header"><strong>Designation:</strong> {{authUserInfo.belongs_to_employee['belongs_to_j_ob_title']['job_title_name']}}</p>
                          <p class="timeline-header"><strong>Join Date:</strong> {{authUserInfo.belongs_to_employee['emp_hire_date'] | formatDate }}</p>

                          <div class="timeline-body" v-if="authUserInfo.belongs_to_employee.emp_desc != null"> 
                            {{authUserInfo.belongs_to_employee.emp_desc}}
                          </div>

                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <i class="fas fa-envelope bg-primary"></i>
                        <!-- <i class="fas fa-user bg-info"></i> -->
                        <div class="timeline-item">
                          <!-- <span class="time"><i class="far fa-clock"></i> 5 mins ago</span> -->
                          <h3 class="timeline-header border-0"><strong>Email: </strong>{{authUserInfo.belongs_to_employee['emp_email']}}</h3>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <!-- <i class="fas fa-envelope bg-primary"></i> -->
                        <i class="fas fa-mobile-alt bg-primary"></i>
                        <!-- <i class="fas fa-user bg-info"></i> -->
                        <div class="timeline-item">
                          <!-- <span class="time"><i class="far fa-clock"></i> 5 mins ago</span> -->
                          <h3 class="timeline-header border-0"><strong>Phone: </strong>{{authUserInfo.belongs_to_employee['emp_phone']}}</h3>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div>
                        <!-- <i class="fas fa-camera bg-purple"></i> -->
                        <!-- <i class="fas fa-barcode bg-success"></i> -->
                        <i class="fas fa-qrcode bg-purple"></i>
                        <div class="timeline-item">
                          <!-- <span class="time"><i class="far fa-clock"></i> 2 days ago</span> -->
                          <h3 class="timeline-header"> QR Code</h3>
                          <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="...">
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <div>
                        <i class="far fa-clock bg-gray"></i>
                      </div>

                    </div>


                  </div>
                  <!-- /.tab-pane -->


                  <div class="tab-pane" id="tab-two">
                    <!-- The timeline -->
                    <div class="timeline timeline-inverse">
                     
                      <!-- timeline time label -->
                      <div class="time-label"> <span class="bg-danger"> My Detials </span> </div>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <i class="fas fa-info-circle bg-primary"></i>

                        <div class="timeline-item">
                          <h3 class="timeline-header">Personal Details</h3>
                          <div class="timeline-body">
                            <p class="timeline-header mb-0"><strong>DOB:</strong> {{authUserInfo.belongs_to_employee.emp_dob}}</p>
                            <p class="timeline-header mb-0"><strong>Gender:</strong> {{authUserInfo.belongs_to_employee.emp_gender}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_father_name !=null"><strong>Father Name:</strong> {{authUserInfo.belongs_to_employee.emp_father_name}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_mother_name !=null"><strong>Mother Name:</strong> {{authUserInfo.belongs_to_employee.emp_mother_name}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_wife_name !=null"><strong>Wife Name:</strong> {{authUserInfo.belongs_to_employee.emp_wife_name}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_tin !=null"><strong>TIN:</strong> {{authUserInfo.belongs_to_employee.emp_tin}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_nid !=null"><strong>NID:</strong> {{authUserInfo.belongs_to_employee.emp_nid}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_driving_license !=null"><strong>Driving License:</strong> {{authUserInfo.belongs_to_employee.emp_driving_license}}</p>
                            <p class="timeline-header mb-0" v-if="authUserInfo.belongs_to_employee.emp_passport !=null"><strong>Passport:</strong> {{authUserInfo.belongs_to_employee.emp_passport}}</p>
                          </div>
                          <!-- <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div> -->
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <i class="far fa-address-card bg-primary"></i>
                        <div class="timeline-item">
                          <h3 class="timeline-header">Address</h3>
                          <div class="timeline-body">
                            <p class="timeline-header" v-if="authUserInfo.belongs_to_employee.emp_Present_address !=null"><strong>Present Address:</strong> {{authUserInfo.belongs_to_employee.emp_Present_address}}</p>
                            <p class="timeline-header" v-if="authUserInfo.belongs_to_employee.emp_permanent_address !=null"><strong>Permanent Address:</strong> {{authUserInfo.belongs_to_employee.emp_permanent_address}}</p>     
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <i class="fas fa-graduation-cap bg-success"></i>
                        <div class="timeline-item">
                          <h3 class="timeline-header">Qualification</h3>
                          <div class="timeline-body">
                            <p class="timeline-header" v-if="authUserInfo.belongs_to_employee.emp_qualification !=null"> {{authUserInfo.belongs_to_employee.emp_qualification}}</p>   
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                       <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <!-- <i class="far fa-address-card bg-primary"></i> -->
                        <i class="fas fa-briefcase bg-primary"></i>
                        <!-- <i class="far fa-address-book"></i> -->
                        <div class="timeline-item">
                          <h3 class="timeline-header">Experience</h3>
                          <div class="timeline-body">
                            <p class="timeline-header" v-if="authUserInfo.belongs_to_employee.emp_experience !=null"> {{authUserInfo.belongs_to_employee.emp_experience}}</p>   
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                       <!-- timeline item -->
                      <div v-if="authUserInfo.belongs_to_employee != null">
                        <!-- <i class="far fa-address-card bg-primary"></i> -->
                        <i class="fas fa-history bg-warning"></i>
                        <div class="timeline-item">
                          <h3 class="timeline-header">Job History</h3>
                          <div class="timeline-body">
                            <p class="timeline-header" v-if="authUserInfo.belongs_to_employee.emp_previous_job_history !=null"> {{authUserInfo.belongs_to_employee.emp_previous_job_history}}</p>   
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <!-- <div>
                        <i class="fas fa-user bg-info"></i>
                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>
                          <h3 class="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </div> -->
                      <!-- END timeline item -->

                      <div>
                        <i class="far fa-clock bg-gray"></i>
                      </div>

                    </div>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="tab-three">
                    <form class="form-horizontal" @submit.prevent="ChangePassword()">

                      
                      <!-- <div class="form-group row">
                        <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                        </div>
                      </div> -->

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label>Current Password</label>                   
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.current_password" type="current_password" ref="current_password" name="current_password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('current_password') }" placeholder="Current Password">
                          <has-error :form="form" field="current_password"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label>New Password</label>                   
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.password" type="password" ref="password" name="password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="New Password">
                          <has-error :form="form" field="password"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label>New Password Confirm</label>                    
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.password_confirmation" type="password" ref="password_confirmation" name="password_confirmation" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" placeholder="Confirm new Password">
                          <has-error :form="form" field="password_confirmation"></has-error>
                        </div> 
                      </div>


                      <!-- <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                      </div> -->

                      <div class="form-group row">
                        <div class="offset-sm-3 col-sm-10">
                          <button type="submit" class="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div><!-- /.card-body -->
            </div>
            <!-- /.nav-tabs-custom -->
          </div>
          <!-- /.col -->
        </div>

      </div>
    </div>
    


    <!-- /.content -->

    <!-- {{authUser.id}} -->
    <!-- {{authUserInfo}} -->


</div>
</section><!-- Main content -->
</template>

<script>
    import { mapState } from 'vuex' //for user MapState
    import Breadcrumb from '../Layouts/Breadcrumb.vue' //Load to every page
    export default {
        name: "admin-child-profile-master",
        //Get props form views/admin/dashboard.blade.php
        data (){      
          return {
            NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
            ShowOnChangeImage:null, 
            deleteImageIcon: false, //Delete Image icon if image exist

            //for images manipulation
            show_image_name: null, //use only to show image name in text field

            // Create a new form instance
            form: new Form({
              id: '',
              name: '',
              email: '',
              current_password:'',
              password: '',
              password_confirmation:'',
              // role_id:'',
              // status_id: '',
              // employee_id: '',
              // branch_id: '',
              // avatar: '',
            })
                          
          }
        },

        components:{ 
            Breadcrumb,
        },

        computed: {
          ...mapState( 
             'AuthenticationForAdmin', ['authUser', 'systemSettings','authUserInfo']
          ),
        },

        methods: { 

          showFilePicker(){ //click input file (hidden) when showFilePicker click.
            this.$refs.avatar.click();
          },

          getFilesName(){ //show name to showFilePicker input field
            return this.show_image_name;             
          },

          //Make image as base64 
          onImageChange(e){
              //let file = e.target.files || e.dataTransfer.files;
              this.show_image_name = e.target.files[0].name; //show single image name to input box using getFilesName()
              let file = e.target.files[0];        
              //console.log(file);
              this.ShowOnChangeImage = URL.createObjectURL(file); //display image in form when select image
              let reader = new FileReader();
              //let vm = this;
              if(file['size'] > 512000 ){  //512Kb = 512000Byte
                toastr.warning('Please select file size within 500kb');
              }else{          
                reader.onloadend = (file) => {
                  //console.log(reader.result);
                  this.form.avatar = reader.result; //push base64 to logo veriable
                };          
                reader.readAsDataURL(file);
              }

              // console.log(e.target.files[0].name);
          }, 

          ChangePassword(){
            this.$Progress.start(); //using progress-bar package
            this.form.put('/spaa/admin-child-profille-change-password/'+ this.form.id)
            //axios.post('/spaa/admin-child-profille-change-password/'+ this.authUser.id)
              .then(({ data }) => { 
                //console.log(data); 

                if(data.success){ 
                  toastr.success(data.success);       
                  this.$Progress.finish();                  
                  this.form.reset();  //reset from after submit
                  // console.log(data.success);  
                  this.fillData(this.authUser);              
                }
                if(data.errors){
                  toastr.warning(data.errors); 
                }

              })
              .catch( (errors) => {  
                this.$Progress.fail();
                toastr.warning('Something is wrong!');
              })
          },

          fillData(data){
            // this.form.name = data.name;
            // this.form.email = data.email;   
            this.form.fill(data);   
          },        
        },           

        created(){
          this.$store.dispatch('AuthenticationForAdmin/fetchAuthUserInfo', this.authUser.id);
          // this.fetchUserStatus();
          this.fillData(this.authUser);          
        },
           
        mounted() {
        }
    }
</script>

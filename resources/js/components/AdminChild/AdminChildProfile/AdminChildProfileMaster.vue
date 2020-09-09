<template>

<!-- Main content -->
<section class="content">      
<div class="container-fluid">   
        
  <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6 col-6">
            <h5 class="m-0- text-dark">Profile</h5>
          </div><!-- /.col -->
          <div class="col-sm-6 col-6">
            <ol class="breadcrumb float-right">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item"><a href="#">Profile</a></li>
              <!-- <li class="breadcrumb-item active">Top Navigation</li> -->
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
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

                <h3 class="profile-username text-center">{{UserInfo.name}}</h3>


                <p class="text-muted text-center" v-if="UserInfo.belongs_to_employee != null">{{UserInfo.belongs_to_employee['belongs_to_j_ob_title']['job_title_name']}}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item" v-if="UserInfo.belongs_to_branch != null">
                    <b>Branch</b> <a class="float-right">{{ UserInfo.belongs_to_branch['branch_name'] }}</a>
                  </li>
                  <li class="list-group-item" v-if="UserInfo.belongs_to_employee != null">
                    <b>Job Type</b> <a class="float-right">{{UserInfo.belongs_to_employee['emp_job_type']}}</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
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
                  <li class="nav-item"><a class="nav-link" href="#tab-one" data-toggle="tab">Job Details</a></li>
                  <li class="nav-item"><a class="nav-link" href="#tab-two" data-toggle="tab">My details</a></li>
                  <li class="nav-item"><a class="nav-link active" href="#tab-three" data-toggle="tab">Change password</a></li>
                </ul>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">


                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="tab-one">
                    
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
                      <div v-if="UserInfo.belongs_to_employee != null">
                        <!-- <i class="fas fa-envelope bg-primary"></i> -->
                        <i class="far fa-id-badge bg-primary"></i>
                        <div class="timeline-item">
                          <!-- <span class="time"><i class="far fa-clock"></i> 12:05</span> -->
                          <p class="timeline-header"><strong>Emp ID:</strong> {{UserInfo.belongs_to_employee.employee_code}}</p>
                          <p class="timeline-header"><strong>Job Status:</strong> {{UserInfo.belongs_to_employee.emp_job_status}}</p>
                          <p class="timeline-header"><strong>Job Type:</strong> {{UserInfo.belongs_to_employee.emp_job_type}}</p>
                          <p class="timeline-header"><strong>Designation:</strong> {{UserInfo.belongs_to_employee['belongs_to_j_ob_title']['job_title_name']}}</p>

                          <div class="timeline-body" v-if="UserInfo.belongs_to_employee.emp_desc != null"> 
                            {{UserInfo.belongs_to_employee.emp_desc}}
                          </div>

                        </div>
                      </div>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                          <h3 class="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </div>
                      <!-- END timeline item -->


                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                          <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="...">
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

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
                      <div class="time-label">
                        <span class="bg-danger">
                          Personal Information
                        </span>
                      </div>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-envelope bg-primary"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 12:05</span>

                          <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                          <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                          <h3 class="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </div>
                      <!-- END timeline item -->


                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                          <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="...">
                          </div>
                        </div>
                      </div>
                      <!-- END timeline item -->

                      <!-- timeline item -->
                      <div>
                        <i class="fas fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

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

                  <div class="tab-pane active" id="tab-three">
                    <form class="form-horizontal">

                      
                      <!-- <div class="form-group row">
                        <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                        </div>
                      </div> -->

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label>Old Password</label>                   
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.old_password" type="old_password" ref="old_password" name="old_password" class="form-control form-control-sm" :class="{ 'is-invalid': form.errors.has('old_password') }" placeholder="Old Password">
                          <has-error :form="form" field="old_password"></has-error>
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
    <!-- {{UserInfo}} -->


</div>
</section><!-- Main content -->
</template>

<script>
    import { mapState } from 'vuex' //for user MapState
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

            UserInfo: '',

            // Create a new form instance
            form: new Form({
              id: '',
              //name: '',
              //email: '',
              old_password:'',
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

        computed: {
          ...mapState( 
             'commonStoreForAll', ['authUser', 'systemSettings']
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

          fetchUserStatus(){
            //this.$Progress.start(); //using progress-bar package

            axios.get('/spaa/admin-child-profille-info?&id='+ this.authUser.id)
              .then( ( response ) => {

                this.UserInfo = response.data; 
                //console.log(response);
              })
              .catch( (errors) => {  
                //toastr.warning('Something is wrong!');
              })
          },

          editUser(data){
           // this.editMode = true;
            this.form.fill(data);    
            //this.$refs.name.focus();  
            // if(data.avatar != null){
            //   this.deleteImageIcon = true;  
            // }
            // this.$store.dispatch('usersAdminStore/fetchSelectedEmployee', this.form.employee_id);   
          },        
        },           

        created(){
          this.fetchUserStatus();
          this.editUser(this.authUser);
        },
           
        mounted() {
        }
    }
</script>

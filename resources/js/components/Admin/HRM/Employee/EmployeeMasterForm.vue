<template>
<div class="card vue-card-item">
    <div class="card-header">      
      <div class="row">
        <div class="col-md-5 col-sm-9">
        	<span v-show="!editMode">New Employee</span>
        	<span v-show="editMode">Update - {{form.emp_name}}</span>
        </div>
        <div class="col-md-7 col-sm-3 text-right">
        	<router-link to="/spa/EmployeeMaster" class="btn btn-primary btn-flat btn-sm"> 
        		<i class="fas fa-user-tie"></i> Employee List
        	</router-link>
        </div>
      </div>
    </div><!--/card-header-->
    <div class="card-body">  
   	<form @submit.prevent=" editMode ? updateFormData() : storeFormData() ">

   	  <div class="row">
   	  	<div class="col-md-12 offset-1-">
          <!-- start Tab Section -->
          <div class="card card-primary card-outline card-outline-tabs">
            <div class="card-header p-0 border-bottom-0"><!-- Tab Head -->
              <ul class="nav nav-tabs" id="custom-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="tab-one" data-toggle="pill" href="#tabs-body-one" role="tab" aria-controls="tabs-body-one" aria-selected="true">Employment</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="tabs-two" data-toggle="pill" href="#tabs-body-two" role="tab" aria-controls="tabs-body-two" aria-selected="false">Personal</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="tabs-three" data-toggle="pill" href="#tabs-body-three" role="tab" aria-controls="tabs-body-three" aria-selected="false">Payrolls</a>
                </li>
              </ul>
            </div><!-- End Tab Head -->

            <div class="card-body"><!-- Tab Body -->
              <div class="tab-content" id="custom-tabs-Content"><!-- Tab Body Content-->

                <!-- Tab One -->
                <div class="tab-pane fade active show" id="tabs-body-one" role="tabpanel" aria-labelledby="tab-one">
                  <div class="row">
                    <div class="col-md-9 col-sm-12">

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Employee Name *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.emp_name" type="text" ref="emp_name" name="emp_name" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_name') }" placeholder="Employee Name">
                          <has-error :form="form" field="emp_name"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Job Title *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <select v-model="form.job_title_id" class="form-control form-control-sm-" id="job_title_id" name="job_title_id" :class="{ 'is-invalid': form.errors.has('job_title_id') }" >
                            <option disabled value="">Select Job Title ..</option>                
                            <option v-for="j_title in jobTitles" :key="j_title.id" v-bind:value="j_title.id">{{j_title.job_title_name}}</option> 
                          </select>
                          <has-error :form="form" field="job_title_id"></has-error>  
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Job Type *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <select v-model="form.emp_job_type" class="form-control form-control-sm-" id="emp_job_type" name="emp_job_type" :class="{ 'is-invalid': form.errors.has('emp_job_type') }" >
                              <option disabled value="">Job type ..</option>                
                              <option v-for="jobType in employeeJobTypes" v-bind:value="jobType.name">
                                {{jobType.name}}
                              </option>                       
                          </select>
                          <has-error :form="form" field="emp_job_type"></has-error> 
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Job status *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <select v-model="form.emp_job_status" class="form-control form-control-sm-" id="emp_job_status" name="emp_job_status" :class="{ 'is-invalid': form.errors.has('emp_job_status') }" >
                              <option disabled value="">Job status ..</option>                
                              <option v-for="ejs in empJobStatus" v-bind:value="ejs.name">
                                {{ejs.name}}
                              </option>                       
                          </select>
                          <has-error :form="form" field="emp_job_status"></has-error> 
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Job Status *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <select v-model="form.status_id" class="form-control form-control-sm-" id="status_id" name="status_id" :class="{ 'is-invalid': form.errors.has('status_id') }" >
                            <option disabled value="">Select Status ..</option>                
                            <option v-for="u_status in userStatus" :key="u_status.id" v-bind:value="u_status.id">{{u_status.us_name}}</option> 
                          </select>
                          <has-error :form="form" field="status_id"></has-error> 
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Branch *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <select v-model="form.branch_id" class="form-control form-control-sm-" id="branch_id" name="branch_id" :class="{ 'is-invalid': form.errors.has('branch_id') }" >
                            <option disabled value="">Select Branch ..</option>                
                            <option v-for="branch in branches" :key="branch.id" v-bind:value="branch.id">{{branch.branch_name}}</option> 
                          </select>
                          <has-error :form="form" field="branch_id"></has-error>  
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Join Date *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <input v-model="form.emp_hire_date" type="date" ref="emp_hire_date" name="emp_hire_date" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_hire_date') }" placeholder="Join Date">
                          <has-error :form="form" field="emp_hire_date"></has-error>  
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Select Department *</label>                      
                        </div>
                        <div class="col-sm-9" style="margin-top: -12px;">
                          <multi-select-app-one
                            :options="selectedDepartmentList"
                            @getAllDataListByIds="getSelectedDataByIdsForDepartment"
                            :autoSearchOptions="autoSearchDepartments"
                            @AutoCompleteSearchForData="AutoCompleteSearchForDataDepartment"                   
                            :filterBy="filterBy"
                            :place-holder="placeHolder"
                            :value-property="valueProperty"
                            v-model="form.departments" 
                          />
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Phone *</label>                      
                        </div>
                        <div class="col-sm-9">
                          <div class="input-group input-group-sm- mb-3">                        
                            <div class="input-group-prepend">
                              <span class="input-group-text"><!-- <i class="fas fa-envelope"></i> --> +88 </span>
                            </div>
                            <input v-model="form.emp_phone" type="number" ref="emp_phone" name="emp_phone" class="form-control form-control-sm-" :class="{ 'is-invalid': form.errors.has('emp_phone') }" placeholder="Enter phone number">   
                            <has-error :form="form" field="emp_phone"></has-error>                     
                          </div>                            
                        </div> 
                      </div>

                      <div class="row form-group" style="margin-top: -12px;">
                        <div class="col-sm-3 text-right">
                          <label class="pt-2">Email *</label>                      
                        </div>
                        <div class="col-sm-9" >
                          <input v-model="form.emp_email" type="email" ref="emp_email" name="emp_email" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_email') }" placeholder="Email Address">
                          <has-error :form="form" field="emp_email"></has-error>
                        </div> 
                      </div>  

                    </div>

                    <div class="col-md-3 col-sm-12">
                      <div class="row pt-2">
                        <div class="col-md-12 text-center">
                            <span v-if="ShowOnChangeImage != null">
                                <img v-if="ShowOnChangeImage != null" :src="ShowOnChangeImage" class="img-fluid img-thumbnail" style="width:150px; height:130px; //height:auto;">
                              </span>
                              
                              <span v-else>
                               <img v-if="form.avatar == 'undefined'" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                               <img v-if="form.avatar === '' " :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                               <img v-else-if="form.avatar === null" :src="'../'+NoIconUrl" class="img-fluid img-thumbnail" style="width:150px;height:130px;">
                                <!-- <img v-else-if="form.avatar != '' " :src="'../'+form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:130px;"> -->
                                <img v-else-if="form.avatar != '' " :src="form.avatar" class="img-fluid img-thumbnail focusImgOnHover" style="width:150px;height:130px;">

                                <i v-if="deleteImageIcon" @click="deleteImage(form.id)" class="far fa-times-circle" style="cursor: pointer; background: #fff; padding: 4px 2px 2px 2px;   color: red; border-radius: 10px; margin-left: -15px;" title="click to Delete"></i>
                              </span> 
                              <!-- <img :src="'../'+NoIconUrl"> -->
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="avatar"></label>
                            <input @change="onImageChange" type="file" ref="avatar" name="avatar" class="form-control" />
                            <!-- @change="updateCatImg" -->
                          </div>
                        </div>
                      </div>                       
                    </div><!--End Image Section-->

                  </div>
                </div><!--End Tab One -->


                <!-- Tab Tow -->
                <div class="tab-pane fade" id="tabs-body-two" role="tabpanel" aria-labelledby="tab-two">
                  <div class="row">
                    <div class="col-md-12">

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Gender *</label>                      
                        </div>
                        <div class="col-sm-10">
                          <select v-model="form.emp_gender" class="form-control form-control-sm-" id="emp_gender" name="emp_gender" :class="{ 'is-invalid': form.errors.has('emp_gender') }" >
                            <option disabled value="">Select Gender ..</option>                
                            <option v-for="gender in genders" v-bind:value="gender.name">
                              {{gender.name}}
                            </option>                       
                          </select>
                          <has-error :form="form" field="emp_gender"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">DOB </label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_dob" type="date" ref="emp_dob" name="emp_dob" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_dob') }" placeholder="Date of birth">
                          <has-error :form="form" field="emp_dob"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">NID</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_nid" type="text" name="emp_nid" class="form-control" :class="{ 'is-invalid': form.errors.has('emp_nid') }" placeholder="National ID">
                          <has-error :form="form" field="emp_nid"></has-error>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Passport</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_passport" type="text" name="emp_passport" class="form-control" placeholder="Passport Number">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Driving License</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_driving_license" type="text" name="emp_driving_license" class="form-control" placeholder="Driving License">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">TIN</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_tin" type="text" name="emp_tin" class="form-control" placeholder="TIN">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Father Name</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_father_name" type="text" name="emp_father_name" class="form-control" placeholder="Employee Father Name">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Mother Name</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_mother_name" type="text" name="emp_mother_name" class="form-control" placeholder="Employee Mother Name">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Wife Name</label>                      
                        </div>
                        <div class="col-sm-10">
                          <input v-model="form.emp_wife_name" type="text" name="emp_wife_name" class="form-control" placeholder="Employee Wife Name">
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Present Address</label>                      
                        </div>
                        <div class="col-sm-10">
                          <textarea v-model="form.emp_Present_address" class="form-control" name="emp_Present_address" placeholder="Present Address"> </textarea>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Permanent Address</label>                      
                        </div>
                        <div class="col-sm-10">
                          <textarea v-model="form.emp_permanent_address" class="form-control"  name="emp_permanent_address" placeholder="Permanent Address"> </textarea>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Employee Details</label>                      
                        </div>
                        <div class="col-sm-10">
                          <vue-editor v-model="form.emp_desc" name="emp_desc" class="form-control-" placeholder="Employee Details"> </vue-editor>
                        </div> 
                      </div> 

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Qualification</label>                      
                        </div>
                        <div class="col-sm-10">
                          <vue-editor v-model="form.emp_qualification" name="emp_qualification" class="form-control-"  placeholder="Qualification"> </vue-editor>
                        </div> 
                      </div> 

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Experience</label>                      
                        </div>
                        <div class="col-sm-10">
                          <vue-editor v-model="form.emp_experience" name="emp_experience" class="form-control-" placeholder="Experience"> </vue-editor>
                        </div> 
                      </div>

                      <div class="row form-group">
                        <div class="col-sm-2 text-right">
                          <label class="pt-2">Previous Job History</label>                      
                        </div>
                        <div class="col-sm-10">
                          <vue-editor v-model="form.emp_previous_job_history" class="form-control-" name="emp_previous_job_history"  placeholder="Job History"> </vue-editor>
                        </div> 
                      </div>  



                    </div>
                  </div>
                </div><!--End Tab Two -->


                <!-- Tab Three -->
                <div class="tab-pane fade" id="tabs-body-three" role="tabpanel" aria-labelledby="tab-three">
                  <div class="row">
                    <div class="col-md-12">

                      <table class="table-sm table table-striped">
                        <tr class="mb-2">
                          <th width="6%">Status</th>
                          <th width="7%" title="Basic salary">Basic</th>
                          <th width="7%" title="House Rent">H.Rent</th>
                          <th width="6%" title="Madical Allowance per month">Medical</th>
                          <th width="5%" title="Transport Allowance Daily">TA.D</th>
                          <th width="5%" title="Transport Allowance Monthly">TA.M</th>
                          <th width="5%" title="Daily Allowance Daily">DA.D</th>
                          <th width="5%" title="Daily Allowance Monthly">DA.M</th>
                          <th width="5%" title="Over time rate per hour">O.T</th>
                          <th width="5%" title="Bonues Percent">B.%</th>
                          <th width="5%" title="Salary Increment Percent">Inc.%</th>
                          <th width="10%" title="Details">Details</th>
                          
                          <th width="1%" title="Starting From">S.Date</th>
                          <th width="1%"><strong>...</strong></th>
                        </tr>

                        <tr v-for="(input, key) in form.emp_payrolls" :key="key">
                          <td >
                            <div class="form-group-">
                              <select v-model="input.payroll_status" class="form-control form-control-sm"" id="" name="payroll_status" :class="{ 'is-invalid': form.errors.has('emp_payrolls.'+[key]+'.payroll_status') }">
                                <option disabled value="">Select status</option>                
                                <option v-for="ep in empPayrolls" v-bind:value="ep.name">{{ep.name}}</option> 
                              </select>
                              <has-error :form="form" :field="('emp_payrolls.'+[key]+'.payroll_status')" ></has-error>
                            </div>
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.basic_salary" name="basic_salary" :class="{ 'is-invalid': form.errors.has('emp_payrolls.'+[key]+'.basic_salary') }">  
                              <has-error :form="form" :field="('emp_payrolls.'+[key]+'.basic_salary')" ></has-error>
                            </div> 
                          </td>                  

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.house_rent" name="house_rent">  
                            </div> 
                          </td>
                          <td>
                            <div class="form-group-">
                              <input type="text" class="form-control form-control-sm"" v-model="input.medical_allowance" name="medical_allowance">  
                            </div> 
                          </td>
                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.ta_daily" name="ta_daily">  
                            </div> 
                          </td>
                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.ta_monthly" name="ta_monthly">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.da_daily" name="da_daily">  
                            </div> 
                          </td>
                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.da_monthly" name="da_monthly">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.over_time" name="over_time">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.bonuse_percent" name="bonuse_percent">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="number" class="form-control form-control-sm"" v-model="input.increment_percent" name="increment_percent">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="text" class="form-control form-control-sm"" v-model="input.payroll_desc" name="payroll_desc">  
                            </div> 
                          </td>

                          <td>
                            <div class="form-group-">
                              <input type="date" class="form-control form-control-sm"" v-model="input.starting_date" name="starting_date" placeholder="End Date">  
                            </div> 
                          </td>
                          <td>
                            <div class="form-group-">
                              <!-- <button class="btn btn-sm btn-danger" @click.prevent="remove_payroll(key)" v-show="key || ( !key && form.emp_payrolls.length > 1)"><i class="fas fa-minus-square"></i> Remove</button>
                              <button class="btn btn-sm btn-success" @click.prevent="add_payroll(key)" v-show="key == form.emp_payrolls.length-1"><i class="fas fa-plus-square"></i> Add </button>  -->

                              <i class="fas fa-minus-circle danger pointer" @click.prevent="remove_payroll(key)" v-show="key || ( !key && form.emp_payrolls.length > 1)" title="Remove"></i>
                              <i class="fas fa-plus-circle green pointer" @click.prevent="add_payroll(key)" v-show="key == form.emp_payrolls.length-1" title="Add"></i> 
                            </div>                   
                          </td>
                        </tr>

                      </table>
                      
                    </div>
                  </div>
                </div><!-- End Tab Three -->


              </div><!-- End Tab Body Content-->
            </div><!-- End Tab Body -->

          </div><!-- End Tab Section -->   
  	  		

   	  	</div>
   	  </div>

   	  <div class="row mr-4">
   	  	<div class="col-12  text-right">
   	  		<button type="submit" class="btn btn-primary btn-flat btn-sm ">
	        	<span v-show="!editMode"> <i class="fas fa-save"></i> Save</span>
	        	<span v-show="editMode"> <i class="far fa-edit"></i> Update</span>
	    	</button>    	  		
   	  	</div>
   	  </div>  	  	


   	</form>
   	</div><!--End Card-body-->

    <div class="card-footer"> 
        
    </div><!--End Card-footer-->

    <!-- sortable data test -->
    <!-- {{currentSortDir }} {{currentSort}} -->

</div><!--/vue-card-item -->
</template>

<script>
  import { mapState } from 'vuex' //for user MapState
  export default {
    name: "EmployeeMasterForm",
    
    data () {
      return {
        NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
        ShowOnChangeImage:null,
        deleteImageIcon: false, //Delete Image icon if image exist
        editMode: false, //Use this for add edit using the same form   
        
        genders: [
  	      { name: 'Male' },
  	      { name: 'Female'},
		    ], 

        empJobStatus: [
            { name: 'Employee' },
            { name: 'Terminate' },
            { name: 'Fired' },
          ],

        employeeJobTypes: [
            { name: 'Permanent' },
            { name: 'Part time' },
            { name: 'Intractual' },
            { name: 'Internship' },
          ],

        empPayrolls: [
            { name: 'Active' },
            { name: 'Previous' },
          ],     

    		//form multiselect app
    		placeHolder:'Select departments',
    		filterBy:'dept_name',
    		valueProperty: 'id',

        

        // Create a new form instance
        form: new Form({
          id: '',
          branch_id:'',
          job_title_id:'',
          emp_job_type:'',
          emp_job_status:'',
          emp_name: '',
          emp_father_name: '',
          emp_mother_name: '',
          emp_wife_name: '',
          emp_dob: '',
          emp_gender: '',
          emp_email:'',
          emp_phone: '',
          emp_nid: '',
          emp_passport: '',
          emp_driving_license: '',
          emp_tin:'',
          emp_hire_date: '',
          avatar: '',
          status_id: '',
          emp_desc:'',
          emp_qualification:'',
          emp_experience:'',
          emp_previous_job_history:'',
          emp_permanent_address:'', 
          departments: [],

          emp_payrolls:[ { payroll_status:'',basic_salary:'', house_rent:'', medical_allowance:'', ta_daily:'', ta_monthly:'', da_daily:'', da_monthly:'', over_time:'', bonuse_percent:'', increment_percent:'', payroll_desc:'', starting_date:'', } ],

        })
      }
    },//end data

    computed: {
    	/*userStatus get form commonSotreForAll*/	
        ...mapState( 'commonStoreForAll', ['userStatus','jobTitles','branches','allDepertments','autoSearchDepartments'] ),
        ...mapState( 'EmployeeMasterStore', ['selectedDepartmentList', 'autoSearchDepartments'] ),        
  	},

  	methods:{

      //###################################### Payrole Function ################################################
      add_payroll() {
         this.form.emp_payrolls.push({ payroll_status: '', basic_salary:'', house_rent: '', medical_allowance:'', ta_daily:'',     ta_monthly:'', da_daily:'', da_monthly:'', over_time:'', bonuse_percent:'', increment_percent:'', payroll_desc:'', starting_date:'' });
      },
      remove_payroll(index) { 
        this.form.emp_payrolls.splice(index, 1);
      },
      //###################################### End Payrole Function ############################################

    	//Make image as base64 
	    onImageChange(e){
	        //let file = e.target.files || e.dataTransfer.files;
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
	    },

	    // Submit the form via a POST request
  		storeFormData() {  
  		  //console.log(this.form); 
  		  this.$Progress.start(); //using progress-bar package

  		  //this.form.post('/spa/Employee-Info')
  		  this.form.post('/spa/Employee-Info')
  		  .then(({ data }) => { 
  		    if(data.success){ 
  		      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
  		      toastr.success(data.success);             
  		      this.$Progress.finish();  
  		      this.form.reset();  //reset from after submit	
  		      this.$refs.avatar.value = ''; //clear file input tag 
  			  this.ShowOnChangeImage = null;
  			  this.$router.push({ path : '/spa/EmployeeMaster' });	 //route after successfule submit	      
  		    }
  		    if(data.errors){
  		      this.$Progress.fail();
  		      toastr.warning(data.errors); 
  		    }
  		  })
  		  .catch( () => {
  		    this.$Progress.fail();
  		    toastr.warning('Something is wrong!');
  		  })            
  		},

  		updateFormData(){         
  			//console.log(this.form); 
  			this.$Progress.start(); //using progress-bar package

  			this.form.put('/spa/Employee-Info/'+this.form.id)
  			  .then(({ data }) => { 
  			    if(data.success){ 
  			      //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
  			      this.$Progress.finish(); 
  			      toastr.success(data.success);               
  			      this.form.reset();  //reset from after submit
  			      this.editMode = false; 
  			      this.$refs.avatar.value = ''; //clear file input tag 
  			  	  this.ShowOnChangeImage = null;
  			  	  this.$router.push({ path : '/spa/EmployeeMaster' });	 //route after successfule submit
  			    }
  			    if(data.errors){
  			      this.$Progress.fail();
  			      toastr.warning(data.errors); 
  			    }
  			  })
  			  .catch( () => {
  			    this.$Progress.fail();
  			    toastr.warning('Something is wrong!');
  			  }) 
  		},

      deleteImage(id){ 
        this.$Progress.start(); //using progress-bar package        
          //console.log(this.form.has_many_image);
          axios.post('/spa/Employee-Info-DeleteImage/'+id)
            .then(({ data }) => {
                // this.ShowOnChangeImage = null;
                this.deleteImageIcon = false;
                this.form.avatar = null;
                this.$Progress.finish(); 
                toastr.success(data.success);
             })
            .catch(() => {
              this.$Progress.fail();
              toastr.warning('Something is wrong!');
            });
      },

	    fillForm(){
	    	if(this.$route.params.data != null){
	    		this.editMode = true;
	    		this.form.reset(); 
	    		this.form.fill(this.$route.params.data);
	    		//this.form.departments = this.$route.params.data.departments; //pass the array
	    		//this.$refs.emp_name.focus(); 

          //payroll section
          if(this.$route.params.data.has_many_payroll.length === 0) {
            this.form.emp_payrolls = [{ payroll_status: '', basic_salary:'', house_rent: '', medical_allowance:'', ta_daily:'',     ta_monthly:'', da_daily:'', da_monthly:'', over_time:'', bonuse_percent:'', increment_percent:'', payroll_desc:'', starting_date:'' }];
          }else{
            this.form.emp_payrolls = this.$route.params.data.has_many_payroll;
          }


	    		if(this.$route.params.data.departments.length === 0){
	    			this.form.departments = [];
	    		}else{
		    		 //return only department id from depertment list 
		    		 this.form.departments = Object.values(this.$route.params.data.departments).map(
	       		 		item => {	
	       		 			//return item['id'];
	       		 			 return item.id;
	       		 		}
		       		 );
	    		}	
          if(this.$route.params.data.avatar != null){
            this.deleteImageIcon = true;  
          }
            	
	    	}
         
        //get department list based on form.departments array ids
        this.$store.dispatch('EmployeeMasterStore/fetchSelectedDepartmentList', this.form.departments);
	    },

      AutoCompleteSearchForDataDepartment(data){
          this.$store.dispatch('EmployeeMasterStore/AutoCompleteSearchForDataDepartment', data ); 
      },
      getSelectedDataByIdsForDepartment(data){
          this.$store.dispatch('EmployeeMasterStore/fetchSelectedDepartmentList', this.form.departments);
      },


	},

  	created(){
  		this.fillForm();
    	this.$store.dispatch('commonStoreForAll/userStatus'); //get user status
    	this.$store.dispatch('commonStoreForAll/fetchJobTitles'); //get job title
    	this.$store.dispatch('commonStoreForAll/fetchBranches'); //get Branch
    	this.$store.dispatch('commonStoreForAll/fetchDepartments');//fetchDepartments

      //call from multi-select-app-one.vue
		  FireEvent.$on('AutoCompleteSearchForData', (data) => {
	        this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForDepartment', data ); 
	    });


	    

    	//console.log(this.form);
    }



  } //end export Default

   
</script>
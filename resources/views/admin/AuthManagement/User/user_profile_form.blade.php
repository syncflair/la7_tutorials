
<form id="user_profile_form" class="form-horizontal" method="post" enctype="multipart/form-data">
	{{ csrf_field() }}  <!--@method('PATCH') {{ method_field('POST') }}-->
	<input type="hidden" id="input_method" name="_method" value="PATCH">

	<input type="hidden" name="id" id="id" value="{{ Auth::user()->id }}" /> 



  <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name"name="name" placeholder="Name">
      <span class="danger error_message" id="name_error"> </span>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" name="email" placeholder="Email">
      <span class="danger error_message" id="email_error"> </span>
    </div>
  </div>

  <!-- <div class="form-group row">
    <label for="inputName2" class="col-sm-2 col-form-label">Role</label>
    <div class="col-sm-10">
    	<select class="form-control" id="role_id" name="role_id" required->
          	<option value="">Select Role..</option>
          	@foreach( \App\Models\Role::all() as $role)	                  
              <option value="{{ $role->id }}">{{ $role->name }} </option>
             @endforeach
       	</select>
       	<span class="danger error_message" id="role_id_error"> </span>
    </div>
  </div> -->

  <!-- <div class="form-group row">
    <label for="inputExperience" class="col-sm-2 col-form-label">Status</label>
    <div class="col-sm-10">
      <select class="form-control" id="status_id" name="status_id" required->
      	<option value="">Select Status ..</option>
      	@foreach( \App\Models\UserStatus::all() as $UserStatus)	                  
          <option value="{{ $UserStatus->id }}">{{ $UserStatus->us_name }} </option>
         @endforeach
       </select>
       <span class="danger error_message" id="status_id_error"> </span>
    </div>
  </div> -->

  <div class="form-group row">
    <label for="inputSkills" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="password" name="password" placeholder="Password">
    	<span class="danger error_message" id="password_error"> </span> 
    </div>
  </div>

  <div class="form-group row">
    <label for="inputSkills" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm password">
    	<span class="danger error_message" id="confirm_password_error"> </span>	 
    </div>
  </div>

  <div class="form-group row">
    <label for="exampleInputFile" class="col-sm-2 col-form-label">Avatar</label>
    <div class="col-sm-10">
    	<div class="input-group">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="avatar" name="avatar">
            <label class="custom-file-label" for="exampleInputFile">Choose avater</label>
          </div>
       	</div>
        <span class="danger error_message" id="avatar_error"> </span>
    </div>
  </div>

  <div class="form-group row">
    <label for="exampleInputFile" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
    	<div class="form-group">
            <div class="input-group">
              	<img id="avatar_show" src="{{URL::to('/FilesStorage/CommonFiles/no-img.png')}}"  class="img-thumbnail" style="min-width: 20%; max-width: 20%; min-height: 20%; max-height: 20%; margin-left: 30%;" />
            </div>
        </div>
    </div>
  </div>

  <div class="form-group row">
    <div class="offset-sm-2 col-sm-10">
      <button type="submit" class="btn btn-primary btn-flat btn-sm">Update</button>
    </div>
  </div>
</form>
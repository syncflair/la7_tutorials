<!-- Modal -->
<div class="modal fade" id="user_form_modal" tabindex="-1" role="dialog-" aria-labelledby="user-form-modal" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal_title">Add User Credential</h5>
        <button type="button" class="close close-form" data-dismiss="modal" aria-label="Close">          
          <i class="far fa-window-close red"></i>
          <!--<i class="far fa-times-circle red"></i>-->
        </button>
      </div>

      	<!--form-->
	    <form id="user_form" role="form" method="post" enctype="multipart/form-data">
	      {{ csrf_field() }}  <!--@method('PATCH') {{ method_field('POST') }}-->
          <input type="hidden" id="input_method" name="_method" value="PATCH">

          <input type="hidden" name="form_action" id="form_action" value="add" />
          <input type="hidden" name="id" id="id" value="" />


	      <!--modal-body-->
	      <div class="modal-body pt-1 pb-0">
	      <div class="row">
	      	<!--/col-md-7-->
	      	<div class="col-md-7">

		        <div class="form-group row">
		            <label for="Name" class="col-sm-2 col-form-label">Name</label>
		            <div class="col-sm-10">
		              <input type="text" class="form-control" id="name" name="name" placeholder="User Name">
		              <span class="danger error_message" id="name_error"> </span>
		            </div>
		        </div>

		        <div class="form-group row">
		            <label for="email" class="col-sm-2 col-form-label">Email</label>
		            <div class="col-sm-10">
		              <input type="email" class="form-control" id="email" name="email" placeholder="Use Email">
		              <span class="danger error_message" id="email_error"> </span>
		            </div>
		        </div>

		        <div class="form-group row">
		            <label for="role_id" class="col-sm-2 col-form-label">Role</label>
		            <div class="col-sm-10">
		              <select class="form-control" id="role_id" name="role_id" required->
		              	<option value="">Select Role..</option>
		              	@foreach( \App\Models\Role::all() as $role)	                  
		                  <option value="{{ $role->id }}">{{ $role->name }} </option>
		                  <!--<option value="{{ $role->id }}" @if($role->id == @$user->role_id) selected @endif>{{ $role->name }} </option>-->
		                 @endforeach
		               </select>
		               <span class="danger error_message" id="role_id_error"> </span>
		            </div>	            
		        </div>

		        <div class="form-group row">
		            <label for="role_id" class="col-sm-2 col-form-label">Status</label>
		            <div class="col-sm-10">
		              <select class="form-control" id="status_id" name="status_id" required->
		              	<option value="">Select Status ..</option>
		              	@foreach( \App\Models\UserStatus::all() as $UserStatus)	                  
		                  <option value="{{ $UserStatus->id }}">{{ $UserStatus->us_name }} </option>
		                  <!--<option value="{{ $UserStatus->id }}" @if($UserStatus->id == @$user->status_id) selected @endif>{{ $UserStatus->us_name }} </option>-->
		                 @endforeach
		               </select>
		               <span class="danger error_message" id="status_id_error"> </span>
		            </div>	            
		        </div>

		        <div class="form-group row">
		            <label for="password" class="col-sm-2 col-form-label">Password</label>
		            <div class="col-sm-10">
		                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
		                <span class="danger error_message" id="password_error"> </span>             
		            </div>
		        </div>

		        <div class="form-group row">
		            <label for="password" class="col-sm-2 col-form-label pt-0">Confirm Password</label>
		            <div class="col-sm-10">
		                <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm password">
		                <span class="danger error_message" id="confirm_password_error"> </span>	           
		            </div>
		        </div> 

	    	</div><!--/col-md-7-->

	    	<!--col-md-5-->
	        <div class="col-md-5"> 

		        <div class="form-group">
                    <label for="exampleInputFile" text-center>Avatar</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="avatar" name="avatar">
                        <label class="custom-file-label" for="exampleInputFile">Choose avater</label>
                      </div>
                    </div>
                    <span class="danger error_message" id="avatar_error"> </span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                      	<img id="avatar_show" src="{{URL::to('/FilesStorage/CommonFiles/no-img.png')}}"  class="img-thumbnail" style="min-width: 50%; max-width: 50%; min-height: 50%; max-height: 50%; margin-left: 20%;" />
                    </div>
                </div>

	        </div><!--/col-md-5-->

	      </div>
	      </div><!--/modal-body-->

	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger btn-flat btn-sm close-form" data-dismiss="modal">Close</button>
	        <button type="submit" id="user_button" class="btn btn-primary btn-flat btn-sm"> Save </button>
	      </div>
	  	</form>
	  	<!--/form-->

    </div>
  </div>
</div>
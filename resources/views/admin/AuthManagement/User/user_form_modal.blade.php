<!-- Modal -->
<div class="modal fade" id="user_form_modal" tabindex="-1" role="dialog-" aria-labelledby="user-form-modal" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-title">Add User Credential</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">          
          <i class="far fa-window-close red"></i>
          <!--<i class="far fa-times-circle red"></i>-->
        </button>
      </div>

      	<!--form-->
	    <form role="form" method="post">
	      <!--modal-body-->
	      <div class="modal-body">

	        <div class="form-group row">
	            <label for="Name" class="col-sm-2 col-form-label">Name</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control" id="name" name="name" placeholder="User Name">
	            </div>
	        </div>

	        <div class="form-group row">
	            <label for="email" class="col-sm-2 col-form-label">Email</label>
	            <div class="col-sm-10">
	              <input type="email" class="form-control" id="email" name="email" placeholder="Use Email">
	              <span> </span>
	            </div>
	        </div>

	        <div class="form-group row">
	            <label for="role_id" class="col-sm-2 col-form-label">Role</label>
	            <div class="col-sm-10">
	              <select class="form-control" name="role_id">
	                  <option>Select Role ..</option>
	                  <option value="">Role 2</option>
	                  <option value="">Role 3</option>
	                  <option value="">Role 4</option>
	                  <option value="">Role 5</option>
	               </select>
	            </div>
	        </div>

	        

	        <div class="form-group row">
	            <label for="role_id" class="col-sm-2 col-form-label">Status</label>
	            <div class="col-sm-10">
	              <select class="form-control" name="role_id">
	                  <option>Select Status ..</option>
	                  <option value="">Active</option>
	                  <option value="">Inactive</option>
	                  <option value="">Block</option>
	                  <option value="">Band</option>
	               </select>
	            </div>
	        </div>


	        <div class="form-group row">
	            <label for="password" class="col-sm-2 col-form-label">Password</label>
	            <div class="col-sm-10">
	              <div class="row">
	                  <div class="col-sm-6">
	                    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
	                  </div>
	                  <div class="col-sm-6">
	                    <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm password">
	                  </div>
	              </div>
	              <span> </span>
	            </div>
	        </div>       

	      </div>
	      <!--/modal-body-->
	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger btn-flat btn-sm" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary btn-flat btn-sm"> Save changes </button>
	      </div>
	  	</form>
	  	<!--/form-->

    </div>
  </div>
</div>
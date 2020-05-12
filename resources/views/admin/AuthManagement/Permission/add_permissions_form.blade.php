
<form id="permission_form" action="{{route('permission.store')}}" class="form-horizontal" method="POST">
	{{ csrf_field() }}  <!--@method('PATCH') {{ method_field('POST') }}-->

	<input type="hidden" name="id" id="id" value="" /> 

  <!--row-->
  <div class="row">
  <!--Col-md-4-->
  <div class="col-md-4">  
  	<div class="form-group">
	    <label for="exampleInputPassword1">Role</label>	   
    	<select class="form-control" id="role_id" name="role_id" required->
          	<option value="">Select Role..</option>
          	@foreach( \App\Models\Role::all() as $role)	                  
              <option value="{{ $role->id }}">{{ $role->name }} </option>
             @endforeach
       	</select>
       	@if ($errors->has('role_id'))
		    <span class="text-danger">{{ $errors->first('role_id') }}</span>
		@endif    
	</div>

	<div class="form-group titleBox">
	    <label class="titleText" for="exampleInputPassword1">Checked for first time if you need</label>	   
    	<input class="select_all mycheckbox TitelBoxInput" type="checkbox" value="">
	</div>

  </div><!--/Col-md-4-->

 <!--Col-md-8-->
  <div class="col-md-8">
	  <div class="form-group row-"><!--Permission Value-->
	    <!--<label for="exampleInputPassword1">Permissinon</label>-->	
	    <div class="col-sm-12">

		<table class="table table-sm table-success table-striped">
			<thead>
				@if ($errors->has('permission'))
				    <span class="text-danger">{{ $errors->first('permission') }}</span>
				@endif  

				<tr>
					<th>Modules</th>
					<th>Page</th>				
					<th>Add</th>
					<th>Edit</th>
					<th>View</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>    			
				<tr>
	    			<td>Roles</td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[role][page]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[role][add]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[role]['edit]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[role]['view]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[role]['delete]" value="1"></td>
	    		</tr>

	    		<tr>
	    			<td>Permission</td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[permission][page]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[permission][add]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[permission][edit]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[permission][view]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[permission][delete]" value="1"></td>
	    		</tr>

	    		<tr>
	    			<td>User</td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[user][page]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[user][add]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[user][edit]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[user][view]" value="1"></td>
	    			<td><input class="mycheckbox" type="checkbox" name="permission[user][delete]" value="1"></td>
	    		</tr>

			</tbody>		
		</table>

	    </div>
	  </div><!--/Permission Value-->
  </div><!--/Col-md--->
  </div><!--/row-->

 
  <div class="form-group row">
    <div class="offset-sm-2- col-sm-6 ">
      <button type="submit" class="btn btn-primary btn-flat btn-sm">Save</button>
    </div>
    <div class="offset-sm-2- col-sm-6 text-right">
      <button type="submit" class="btn btn-primary btn-flat btn-sm">Save</button>
    </div>
  </div>
</form>

<form id="permission_form" action="{{route('permission.update', $permission->id )}}" class="form-horizontal" method="POST">
  {{ csrf_field() }}  <!--@method('PATCH') {{ method_field('POST') }}-->
  @method('PATCH')
  <input type="hidden" name="id" id="id" value="{{$permission->id}}" /> 

  <!--row-->
  <div class="row">
  <!--Col-md-4-->
  <div class="col-md-4">  
    <div class="form-group">
      <label for="exampleInputPassword1">Role</label>    
      <select class="form-control" id="role_id" name="role_id" >
            <!--<option value="" >Select Role..</option> -->
            @foreach( \App\Models\Role::all() as $role)                   
              <option value="{{ $role->id }}" @if ($role->id == $permission->role_id) selected @else disabled @endif>{{ $role->name }} </option>
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
          <th>SubModules</th>
          <th>Page</th>       
          <th>Add</th>
          <th>Edit</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>         
        <tr>

          <tr>
            <td>Parties</td>
            <td>Parties</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[parite][page]" value="1" @if(@json_decode($permission->permission)->parite->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[parite][add]" value="1" @if(@json_decode($permission->permission)->parite->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[parite][edit]" value="1" @if(@json_decode($permission->permission)->parite->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[parite][view]" value="1" @if(@json_decode($permission->permission)->parite->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[parite][delete]" value="1" @if(@json_decode($permission->permission)->parite->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>Items</td>
            <td>Items</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[items][page]" value="1" @if(@json_decode($permission->permission)->items->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[items][add]" value="1" @if(@json_decode($permission->permission)->items->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[items][edit]" value="1" @if(@json_decode($permission->permission)->items->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[items][view]" value="1" @if(@json_decode($permission->permission)->items->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[items][delete]" value="1" @if(@json_decode($permission->permission)->items->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>Sales</td>
            <td>Sales</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[sale][page]" value="1" @if(@json_decode($permission->permission)->sale->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[sale][add]" value="1" @if(@json_decode($permission->permission)->sale->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[sale][edit]" value="1" @if(@json_decode($permission->permission)->sale->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[sale][view]" value="1" @if(@json_decode($permission->permission)->sale->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[sale][delete]" value="1" @if(@json_decode($permission->permission)->sale->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>Purchase</td>
            <td>Purchase</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[purchase][page]" value="1" @if(@json_decode($permission->permission)->purchase->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[purchase][add]" value="1" @if(@json_decode($permission->permission)->purchase->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[purchase][edit]" value="1" @if(@json_decode($permission->permission)->purchase->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[purchase][view]" value="1" @if(@json_decode($permission->permission)->purchase->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[purchase][delete]" value="1" @if(@json_decode($permission->permission)->purchase->delete != null ) checked @endif ></td>
          </tr>

           <tr>
            <td>Expenses</td>
            <td>Expenses</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[expenses][page]" value="1" @if(@json_decode($permission->permission)->expenses->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[expenses][add]" value="1" @if(@json_decode($permission->permission)->expenses->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[expenses][edit]" value="1" @if(@json_decode($permission->permission)->expenses->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[expenses][view]" value="1" @if(@json_decode($permission->permission)->expenses->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[expenses][delete]" value="1" @if(@json_decode($permission->permission)->expenses->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>HRM</td>
            <td>HRM</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[hrm][page]" value="1" @if(@json_decode($permission->permission)->hrm->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[hrm][add]" value="1" @if(@json_decode($permission->permission)->hrm->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[hrm][edit]" value="1" @if(@json_decode($permission->permission)->hrm->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[hrm][view]" value="1" @if(@json_decode($permission->permission)->hrm->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[hrm][delete]" value="1" @if(@json_decode($permission->permission)->hrm->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>Bank</td>
            <td>Bank</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[bank][page]" value="1" @if(@json_decode($permission->permission)->bank->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[bank][add]" value="1" @if(@json_decode($permission->permission)->bank->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[bank][edit]" value="1" @if(@json_decode($permission->permission)->bank->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[bank][view]" value="1" @if(@json_decode($permission->permission)->bank->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[bank][delete]" value="1" @if(@json_decode($permission->permission)->bank->delete != null ) checked @endif ></td>
          </tr>
          <tr>
            <td>Cash</td>
            <td>Cash</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[cash][page]" value="1" @if(@json_decode($permission->permission)->cash->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[cash][add]" value="1" @if(@json_decode($permission->permission)->cash->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[cash][edit]" value="1" @if(@json_decode($permission->permission)->cash->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[cash][view]" value="1" @if(@json_decode($permission->permission)->cash->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[cash][delete]" value="1" @if(@json_decode($permission->permission)->cash->delete != null ) checked @endif ></td>
          </tr>



          <tr>
            <td>Reports</td>
            <td>Reports</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[reposts][page]" value="1" @if(@json_decode($permission->permission)->reposts->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[reposts][add]" value="1" @if(@json_decode($permission->permission)->reposts->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[reposts][edit]" value="1" @if(@json_decode($permission->permission)->reposts->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[reposts][view]" value="1" @if(@json_decode($permission->permission)->reposts->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[reposts][delete]" value="1" @if(@json_decode($permission->permission)->reposts->delete != null ) checked @endif ></td>
          </tr>
          <tr>
            <td>Settings</td>
            <td>Settings</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[settings][page]" value="1" @if(@json_decode($permission->permission)->settings->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[settings][add]" value="1" @if(@json_decode($permission->permission)->settings->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[settings][edit]" value="1" @if(@json_decode($permission->permission)->settings->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[settings][view]" value="1" @if(@json_decode($permission->permission)->settings->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[settings][delete]" value="1" @if(@json_decode($permission->permission)->settings->delete != null ) checked @endif ></td>
          </tr>
          <tr>
            <td>Backup/Restore</td>
            <td>Backup/Restore</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[backup][page]" value="1" @if(@json_decode($permission->permission)->backup->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[backup][add]" value="1" @if(@json_decode($permission->permission)->backup->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[backup][edit]" value="1" @if(@json_decode($permission->permission)->backup->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[backup][view]" value="1" @if(@json_decode($permission->permission)->backup->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[backup][delete]" value="1" @if(@json_decode($permission->permission)->backup->delete != null ) checked @endif ></td>
          </tr>
          <tr>
            <td>Utilities</td>
            <td>Utilities</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[utilities][page]" value="1" @if(@json_decode($permission->permission)->utilities->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[utilities][add]" value="1" @if(@json_decode($permission->permission)->utilities->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[utilities][edit]" value="1" @if(@json_decode($permission->permission)->utilities->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[utilities][view]" value="1" @if(@json_decode($permission->permission)->utilities->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[utilities][delete]" value="1" @if(@json_decode($permission->permission)->utilities->delete != null ) checked @endif ></td>
          </tr>


          <!----------------------------------Authentication Management---------------------------------->
           <tr>
            <td>User</td>
            <td>User</td>
            <td> <input class="mycheckbox" type="checkbox" name="permission[user][page]" value="1" @if(@json_decode($permission->permission)->user->page != null ) checked @endif > </td>
            <td><input class="mycheckbox" type="checkbox" name="permission[user][add]" value="1" @if(@json_decode($permission->permission)->user->add != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[user][edit]" value="1"  
             @if(@json_decode($permission->permission)->user->edit != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[user][view]" value="1" @if(@json_decode($permission->permission)->user->view != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[user][delete]" value="1" 
              @if(@json_decode($permission->permission)->user->delete != null ) checked @endif></td>
          </tr>

          <td>Roles</td>
          <td>Roles</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[role][page]" value="1" @if(@json_decode($permission->permission)->role->page != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[role][add]" value="1" @if(@json_decode($permission->permission)->role->add != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[role][edit]" value="1" @if(@json_decode($permission->permission)->role->edit != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[role][view]" value="1" @if(@json_decode($permission->permission)->role->view != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[role][delete]" value="1"  @if(@json_decode($permission->permission)->role->delete != null ) checked @endif ></td>
          </tr>

          <tr>
            <td>Permission</td>
            <td>Permission</td>
            <td><input class="mycheckbox" type="checkbox" name="permission[permission][page]" value="1" @if(@json_decode($permission->permission)->permission->page != null ) checked @endif></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[permission][add]" value="1" @if(@json_decode($permission->permission)->permission->add != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[permission][edit]" value="1" @if(@json_decode($permission->permission)->permission->edit != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[permission][view]" value="1" @if(@json_decode($permission->permission)->permission->view != null ) checked @endif ></td>
            <td><input class="mycheckbox" type="checkbox" name="permission[permission][delete]" value="1" @if(@json_decode($permission->permission)->permission->delete != null ) checked @endif ></td>
          </tr>         

      </tbody> 
      <thead>
        <tr>
          <th>Modules</th>
          <th>SubModules</th>
          <th>Page</th>       
          <th>Add</th>
          <th>Edit</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>   
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
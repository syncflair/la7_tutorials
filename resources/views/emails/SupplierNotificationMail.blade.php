
@extends('layouts.EmailLayoutConfirmation.email_master')
@section('title')
  Register
@endsection


@section('extra_css')
  <!--Extra CSS-->
@endsection 

@section('content')

  <h2 >Hello,  <strong> {{$email_data['userInfo']['name']}}</strong></h2>
    
   

  <p class="mt-10 mb-10">
    @if($email_data['tag'] == 'inactive')

      <strong>Opps!</strong>, Your account  <strong> inactive </strong> by admin, Please contact with admin to re-active your account.  <br>
    
    @elseif($email_data['tag'] == 'active')

      <strong>Congratulation !</strong>, Your account is <strong> active </strong> by admin, Now you can login to your account  <br>
    
    @elseif($email_data['tag'] == 'varify')

      <strong>Congratulation !</strong>, Your account is <strong> varified </strong> by Admin, Now you can login to your account  <br>

    @elseif($email_data['tag'] == 'register')

      <strong>Congratulation</strong>, You are registered by sorboraho.com admin. Your Login credential details bellow: <br>

    @endif
  </p>


  @if($email_data['tag'] == 'register')
  <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
    <table class="table">
      <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
      <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
      <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>
      <tr> 
        <td>Login:</td> 
        <td><a class="btn btn-default link-style"  target="_blank" href="{{ url('supplier/login') }}">Login</a> </td>
      </tr>
    </table>
  </div>
  @endif


@endsection

@section('extra_script')
  <!--Extra Script-->
@endsection 


